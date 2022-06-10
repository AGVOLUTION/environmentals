import { Environmental } from "../../environmental";
import assert from "assert";
import { EnvironmentalProperties, FqnPathElements, NotFoundError } from "../..";

export interface SatProperties extends EnvironmentalProperties {
    /** Expression to be used to calculate the value added product from the product */
    expression?: string;
    derivedFrom?: SAT[];
}

export class SAT extends Environmental {
    public properties: SatProperties;
    protected _derivedFrom?: Map<string, SAT> = undefined;

    constructor(name: string, properties: SatProperties, children?: SAT[]) {
        super(name, properties, children);
        this.properties = properties;
        if (this.properties.derivedFrom) {
            this._derivedFrom = new Map(
                properties.derivedFrom?.map((sat) => [sat.name, sat])
            );
        }
    }

    /**
     * Return the normalized name of this parameter
     *
     * That is mostly the lower case version of the human readable name from the translation
     * property. This will be used to assemble the resource bucket string
     *
     * @returns Normalized name
     */
    public get normalizedName(): string {
        return this.translation("en-us").toLowerCase().replace(/\s/g, "");
    }

    /**
     * Return the resourceBucket of this parameter
     *
     * The resourceBucket describes the storage path in S3 of this data type
     *
     * @example
     * "satellite/sentinel2/cloudless"
     *
     * @returns resourceBucket
     */
    public get resourceBucket(): string {
        if (this.normalizedName === "satellite") {
            // base case
            return "satellite";
        }

        if (this.parent! instanceof SAT) {
            // recursive case
            let name = this.normalizedName;
            if (this.properties.derivedFrom) {
                // we are in a VAP, but with no explicit product. So lets use the first one
                // declared
                name = this.properties.derivedFrom[0].normalizedName;
            }
            return `${this.parent.resourceBucket}/${name}`;
        }

        assert.fail(
            "SAT.resourceBucket: parent is not a SAT. This indicates an error in the declaration hierarchy and must be fixed in code."
        );
    }

    public get children(): SAT[] {
        return super.children as SAT[];
    }

    /**
     * Return the expression for this VAP
     *
     * @returns Expression to calculate a VAP from a Product
     */
    public get expression(): string | undefined {
        return this.properties.expression;
    }

    public find(path: FqnPathElements): SAT {
        // special case: If this SAT has no more children, we look into the products this VAP can
        // be derived from.
        if (this.children.length === 0) {
            const hit = this._derivedFrom?.get(path[0]);
            if (hit) {
                //return hit;
                return new VAP(this, hit);
            }

            throw new NotFoundError(path[0]);
        }

        // other cases are handled by the super class
        return super.find(path) as SAT;
    }

    /**
     * Create a VAP from this sat
     *
     * This creates a Concrete VAP by using the first defined product in the derivedFrom property
     *
     * @returns This SAT as a concrete VAP from the default sourceProduct. If this is already a
     * VAP, it is returned as is.
     */
    public asVap(): VAP {
        if (this instanceof VAP) {
            return this;
        }
        // Create a new VAP from this product by using the first defined sourceProduct
        // (which is by definition the default one)
        return new VAP(this, this._derivedFrom!.values().next().value);
    }
}

/**
 * A VAP (Value Added Product) is derived from a Product.
 *
 * A Satellite has only a few Products, but multiple VAP can be produced from them. Most of the
 * VAPs can probably be derived from all Products.
 * A User can request a VAP without specifying the underlying Product. In that case a default
 * Product will be chosen (the first one declared).
 *
 * If a user requests a VAP with from a specific Product, we have to store the information
 * somehow. Therefore this VAP class exists. This class stores the VAP and the requested Product.
 * To correctly handle functions and properties like the resourceBucket (which contains the
 * product but not the VAP, those properties are overridden in this class.
 * @extends SAT
 */
export class VAP extends SAT {
    protected vap: SAT;
    protected fromProduct: SAT;
    constructor(vap: SAT, fromProduct: SAT) {
        super(fromProduct.name, fromProduct.properties, []);
        this.vap = vap;
        this.fromProduct = fromProduct;
        this._parent = vap;
    }

    public get resourceBucket(): string {
        assert(this.vap.parent! instanceof SAT);
        return `${this.vap.parent.resourceBucket}/${this.fromProduct.normalizedName}`;
    }
}
