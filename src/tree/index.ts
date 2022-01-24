/**
 * Properties describing the Node
 */
export type NodeProperties = {
    calculated: boolean;
    measuread: boolean;
};

export abstract class TreeNode {
    protected name: string;
    protected parent?: TreeNode;
    protected children: TreeNode[] = [];
    protected defaultModel?: TreeNode[];
    protected properties: Partial<NodeProperties>;

    constructor(name: string, parent?: TreeNode, properties?: Partial<NodeProperties>) {
        this.name = name;
        this.parent = parent;
        if (this.parent) {
            this.parent.children.push(this);
        }
        this.properties = properties || {};
    }

    /**
     * Is this Node a Leaf (has no children)?
     *
     * @returns True if this node has no children
     */
    public get isLeaf(): boolean {
        return this.children.length === 0;
    }

    /**
     * create an object of this class with predefined values according
     */
    //public abstract create(): TreeNode;

    /**
     * Fully qualified Name
     *
     * Returns the fully qualified name of this node.
     *
     * @example ENV__ATMO__T
     *
     * @returns Fully Qualified Name of this node
     */
    public get fqn(): string {
        if (!this.parent) {
            return this.name;
        }

        return `${this.parent.fqn}__${this.name}`;
    }
}

export class RootNode extends TreeNode {
    constructor() {
        super("", undefined);
    }
}

export class Tree {
    protected root: TreeNode;
    constructor(root: TreeNode) {
        this.root = root;
    }
}

export const root = new RootNode();
export const tree = new Tree(root);
