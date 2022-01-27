import { Unit } from "./unit";

export type EnvironmentalName = string;
export type FullyQualifiedName = string;
export type FqnPathElements = EnvironmentalName[];
export interface EnvironmentalProperties {
    unit?: Unit;
    description?: string;
}

/**
 * Base class for all nodes
 */
export class Environmental {
    public readonly name: EnvironmentalName;
    public readonly properties: EnvironmentalProperties;
    protected readonly _children?: Map<EnvironmentalName, Environmental>;
    protected _parent?: Environmental;
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

    [Symbol.toPrimitive](hint: string) {
        return `Environmental ${this.name}`;
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
