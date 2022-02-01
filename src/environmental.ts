import { assert } from "console";
import { Locale, Translation } from "./localization";
import { Unit } from "./unit";

/**
 * Properties of an Environmental
 */
export interface EnvironmentalProperties {
    unit?: Unit;
    description?: string;
    translation?: Translation;
}

/**
 * Base class for all nodes
 */
export class Environmental {
    /**
     * The name of this Node
     */
    public readonly name: string;
    /**
     * Properties of this node
     */
    public readonly properties: EnvironmentalProperties;
    readonly children: Environmental[];
    protected parent?: Environmental;
    /**
     * Return the unit of this node
     */
    public get unit() {
        return this.properties.unit;
    }
    public get description() {
        return this.properties.description;
    }

    /**
     * Return translation for locale.
     *
     * if no translations provided, the FQN of this node will be returned
     *
     * @param locale - Locale code
     */
    public translation(locale: Locale) {
        return this.properties.translation?.[locale] || this.fqn;
    }

    /**
     * Create a new Environmental
     *
     * @param name - Name of this node
     * @param properties - Properties of this node
     * @param children - Children of the node. Provide only if this is a category
     */
    constructor(
        name: string,
        properties: EnvironmentalProperties,
        children?: Environmental[]
    ) {
        const childs = children ? children : [];

        this.name = name;
        this.properties = properties;
        this.children = childs;
        for (const child of childs) {
            child.parent = this;
        }
    }

    /**
     * Find the element according to the path elements
     *
     * @param path - Path as elements
     * @returns The element specified by the path
     * contain the missing child's name
     */
    public find(path: string[]): Environmental {
        if (path.length === 1) {
            const hit = this.children.find((e) => e.name === path[0]);
            if (hit) {
                return hit;
            }
            throw Error(`Did not find a child with name ${path[0]}`);
        }

        const result = this.children
            .find((e) => e.name === path[0])
            ?.find(path.slice(1));

        assert(result);
        return result!;
    }

    /**
     * Return the fully qualified name (FQN) of this node.
     *
     * This basically acts as a deserialisation method, as this string is unique and is used as a
     * string representation by the GraphQL APIs.
     *
     * @returns FullyQualifiedName of this node
     */
    public get fqn(): string {
        if (!this.parent?.parent) {
            return this.name;
        }

        return `${this.parent.fqn}__${this.name}`;
    }

    // /**
    //  * Iterate over all elements in this tree
    //  */
    *[Symbol.iterator](): Generator<Environmental> {
        if (!this.children) {
            yield this;
            return;
        }

        if (this.name !== "ROOT") {
            // we don't want the helper 'ROOT' element in our output
            yield this;
        }

        for (const child of this.children) {
            yield* child;
        }
    }

    /**
     * Is this element a Leaf (i.e. has no more children)?
     */
    public get isLeaf() {
        return this.children.length === 0;
    }

    public toString() {
        return `Environmental ${this.name}`;
    }

    public map<U>(callbackfn: (value: Environmental) => U): U[] {
        return [...this].map((val, _i) => callbackfn(val));
    }
}
