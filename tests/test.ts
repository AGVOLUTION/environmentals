import { expect } from "chai";
import { RootNode, TreeNode } from "../src/tree";

class TestNode extends TreeNode {}

describe("TreeNode", function () {
    describe("#addChildren", function () {
        it("should add itself as child to it's parent", function () {
            const parent = new RootNode();
            const child = new TestNode("TestNode", parent);
            expect(parent.children).to.have.lengthOf(1);
            expect(parent.children[0]).to.equal(child);
        });
    });
});
