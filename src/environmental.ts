import { Locale, Translation } from "./localization";
import { Unit } from "./unit";

/**
 * The Name of an Environmental
 *
 * This is the name of the actual node in the tree, not the {@link FullyQualifiedName}.
 */
export type EnvironmentalName = string;

/**
 * A fully qualified name (FQN) of an environmental.
 *
 * @example
 * `ENV__ATMO__T`
 */
export type FullyQualifiedName = string;

/**
 * The Path elements of a FQN
 */
export type FqnPathElements = EnvironmentalName[];

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
    public readonly name: EnvironmentalName;
    /**
     * Properties of this node
     */
    public readonly properties: EnvironmentalProperties;
    protected readonly _children?: Map<EnvironmentalName, Environmental>;
    protected _parent?: Environmental;
    /**
     * Parent node. Undefined if this is the root element
     */
    public get parent() {
        return this._parent;
    }
    /**
     * Return the unit of this node
     */
    public get unit() {
        return this.properties.unit;
    }
    public get description() {
        return this.properties.description;
    }

    public readonly childrenKeys?: EnvironmentalName[];
    /**
     * Return this nodes children. If there are none, return an empty Array
     */
    public get children() {
        return [...(this._children?.values() || [])];
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
    constructor(name: string, properties: EnvironmentalProperties, children?: Environmental[]) {
        this.name = name;
        this.properties = properties;
        if (children) {
            this._children = new Map(children.map((c) => [c.name, c]));
            this.childrenKeys = children.map((c) => c.name);
            for (const child of children) {
                child._parent = this;
            }
        }
    }

    /**
     * Find the element according to the path elements
     *
     * @param path - Path as elements
     * @returns The element specified by the path
     * @throws Error - There could no child with the specified path be found. The Object will
     * contain the missing child's name
     */
    public find(path: FqnPathElements): Environmental {
        if (path.length === 1) {
            const hit = this._children?.get(path[0]);
            if (hit) {
                return hit;
            }
            throw Error(`Did not find a child with name ${path[0]}`);
        }

        const result = this._children?.get(path[0])?.find(path.slice(1));
        if (result) {
            return result;
        }
        throw Error(`Did not find a child with name ${path[0]}`);
    }

    /**
     * Return the fully qualified name (FQN) of this node.
     *
     * This basically acts as a deserialisation method, as this string is unique and is used as a
     * string representation by the GraphQL APIs.
     *
     * @returns FullyQualifiedName of this node
     */
    public get fqn(): FullyQualifiedName {
        if (!this.parent?.parent) {
            return this.name;
        }

        return `${this.parent.fqn}__${this.name}`;
    }

    /**
     * Iterate over all elements in this tree
     */
    *[Symbol.iterator](): Generator<Environmental> {
        if (!this._children) {
            yield this;
            return;
        }

        if (!this.isRoot) {
            // we don't want the helper 'ROOT' element in our output
            yield this;
        }

        for (const child of this._children.values()) {
            yield* child;
        }
    }

    /**
     * Is this element the root node?
     */
    public get isRoot() {
        return this.name === "ROOT";
    }

    /**
     * Is this element a Leaf (i.e. has no more children)?
     */
    public get isLeaf() {
        return !this._children;
    }

    public toString() {
        return `Environmental ${this.name}`;
    }

    [Symbol.toPrimitive](_hint: string) {
        return this.fqn;
    }

    public map<U>(callbackfn: (value: Environmental, children: Environmental[]) => U): U[] {
        if (!this._children) {
            return [callbackfn(this, [])];
        }

        let result = [callbackfn(this, [...this._children.values()])];
        for (const child of this._children.values()) {
            result.push(...child.map(callbackfn));
        }
        return result;
    }
}
