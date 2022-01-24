import { expect } from "chai";
import { deserialize } from "../src";
import { ATMO, T } from "../src/measureables/env/atmo";

//import { RootNode, TreeNode } from "../src/tree";

//class TestNode extends TreeNode {}

//describe("TreeNode", function () {
//describe("#addChildren", function () {
//it("should add itself as child to it's parent", function () {
//const parent = new RootNode();
//const child = new TestNode("TestNode", parent);
//expect(parent.children).to.have.lengthOf(1);
//expect(parent.children[0]).to.equal(child);
//});
//});
//});

describe("measureables", function () {
    describe("#deserialize", function () {
        it("should correctly deserialize a FQN", function () {
            const fqn = "ENV__ATMO__T";
            const de = deserialize(fqn);
            expect(de).to.equal(T);
        });
    });
});
