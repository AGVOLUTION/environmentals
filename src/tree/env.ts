import { TreeNode, root } from "../tree";
export class ENV extends TreeNode {
    constructor() {
        super("ENV", root);
    }
}
export class DEV extends TreeNode {
    constructor() {
        super("DEV", root);
    }
}

export class MODEL extends TreeNode {
    constructor() {
        super("MODEL", root);
    }
}
export const env = new ENV();
export const dev = new DEV();
export const model = new MODEL();
