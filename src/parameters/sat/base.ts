import { Environmental } from "../../environmental";
import assert from "assert";
import { EnvironmentalProperties, FqnPathElements, NotFoundError } from "../..";

export interface SatProperties extends EnvironmentalProperties {
    /** Expression to be used to calculate the value added product from the product */
    expression?: string;
    derivedFrom?: SAT[];
}

/**
 * SAT parameters describe imagery data obtained from different satellites
 * @public
 */
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
     * @remarks
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
     * This creates a concrete VAP by using the given product as the sourceProduct for the VAP.
     * If no product is given, the first product declared (the default one) in the VAP is used.
     *
     * @param product Product to use as sourceProduct for the VAP. If none given, the first product declared is used.
     * @returns This SAT as a concrete VAP from the given or default sourceProduct. If this is already a
     * VAP, it is returned as is.
     */
    public asVap(sourceProduct: SAT): VAP {
        if (this instanceof VAP) {
            return this;
        }

        if (sourceProduct) {
            return new VAP(this, sourceProduct);
        }

        // Create a new VAP from this product by using the first defined sourceProduct
        // (which is by definition the default one)
        return new VAP(this, this._derivedFrom!.values().next().value);
    }
}

/**
 * A VAP (Value Added Product) is derived from a Product.
 *
 * @remarks
 * A Satellite has only a few Products, but multiple VAP can be produced from them. Most of the
 * VAPs can probably be derived from all Products.
 * A User can request a VAP without specifying the underlying Product. In that case a default
 * Product will be chosen (the first one declared).
 *
 * If a user requests a VAP with from a specific Product, we have to store the information
 * somehow. Therefore this VAP class exists. This class stores the VAP and the requested Product.
 * To correctly handle functions and properties like the resourceBucket (which contains the
 * product but not the VAP, those properties are overridden in this class.
 *
 * The FQN of a VAP is constructed in the following way:
 * ```
 * SAT__SEN2__NDVI__CL
 *
 * | SAT       | SEN2   | NDVI   | CL            |
 * | ----------| -------| -------| --------------|
 * | satellite | source | vap    | sourceProduct |
 *
 * ```
 *
 * @example Access the names and objects of the parts
 * ```
 * const v=e.deserialize("SAT__SEN2__NDVI__CL")
 * v.name
 * // 'CL'
 *
 * v.vap.name
 * // 'RGB'
 *
 * v.vap.fqn
 * // 'SAT__SEN2__RGB'
 *
 * v.source.name
 * // 'SEN2'
 * ```
 *
 * @public
 */
export class VAP extends SAT {
    /**
     * The actual vap parameter
     * @internal
     */
    protected _vap: SAT;
    /**
     * Reference to the sourceProduct
     * @internal
     */
    protected _fromProduct: SAT;
    constructor(vap: SAT, fromProduct: SAT) {
        super(fromProduct.name, fromProduct.properties, []);
        this._vap = vap;
        this._fromProduct = fromProduct;
        this._parent = vap;
    }

    /**
     * @override
     * {@inheritdoc SAT.resourceBucket}
     */
    public get resourceBucket(): string {
        assert(this._vap.parent! instanceof SAT);
        return `${this._vap.parent.resourceBucket}/${this._fromProduct.normalizedName}`;
    }

    /**
     * Get the vap of this environmental (NDVI)
     *
     * @example ndvi
     * @public
     */
    public get vap(): SAT {
        return this._vap;
    }
    /**
     * Get the sourceProduct this VAP is derived from (CL)
     *
     * @example cl
     * @public
     */
    public get sourceProduct(): SAT {
        return this._fromProduct;
    }

    /**
     * Return the source satellite of this VAP (SEN2)
     *
     * @example sen2
     * @public
     */
    public get source(): SAT {
        return this._vap.parent as SAT;
    }
}
