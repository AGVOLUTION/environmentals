export type MeasureableName = string;
export type FullyQualifiedName = string;
export type FqnPathElements = MeasureableName[];

export class Measureable {
    public readonly name: MeasureableName;
    protected readonly children?: Map<MeasureableName, Measureable>;
    protected _parent?: Measureable;
    public get parent() {
        return this._parent;
    }

    constructor(name: string, children?: Measureable[]) {
        this.name = name;
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

    public traverse():Measureable[] {
        if (!this.children) {
            return [this];
        }

        let results = [];
        for (const child of this.children.values()) {
            results.push(...child.traverse());
        }

        return results
    }
}
