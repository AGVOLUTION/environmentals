import { Unit } from "./unit";

export type MeasureableName = string;
export type FullyQualifiedName = string;
export type FqnPathElements = MeasureableName[];
export interface MeasureableProperties {
    unit?: Unit;
    description?: string;
}

export class Measureable {
    public readonly name: MeasureableName;
    public readonly properties: MeasureableProperties;
    protected readonly children?: Map<MeasureableName, Measureable>;
    protected _parent?: Measureable;
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

    constructor(name: string, properties: MeasureableProperties, children?: Measureable[]) {
        this.name = name;
        this.properties = properties;
        if (children) {
            this.children = new Map(children.map((c) => [c.name, c]));
            for (const child of children) {
                child._parent = this;
            }
        }
    }

    public find(path: FqnPathElements): Measureable {
        if (path.length === 1) {
            const hit = this.children?.get(path[0]);
            if (hit) {
                return hit;
            }
            throw Error(`Did not find a child with name ${path[0]}`);
        }

        const result = this.children?.get(path[0])?.find(path.slice(1));
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
    *[Symbol.iterator](): Generator<Measureable> {
        if (!this.children) {
            yield this;
            return;
        }

        if (!this.isRoot) {
            // we don't want the helper 'ROOT' element in our output
            yield this;
        }

        for (const child of this.children.values()) {
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
        return !this.children;
    }

    public toString() {
        return `Measureable ${this.name}`;
    }

    [Symbol.toPrimitive](hint: string) {
        return `Measureable ${this.name}`;
    }
}
