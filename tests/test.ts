import { expect } from "chai";
import { tryDeserialize, env, root } from "../src";
import { T, atmo } from "../src/parameters/env/atmo";
import { degC } from "../src/unit";

describe("environmentals", function () {
    describe("#deserialize", function () {
        it("should correctly deserialize a FQN", function () {
            const fqn = "ENV__ATMO__T";
            const de = tryDeserialize(fqn)!;
            expect(de).to.equal(T);
            expect(de.fqn).to.eq("ENV__ATMO__T");
        });
    });

    describe("#isLeaf", function () {
        it("should correctly indicate if the element is a leaf", function () {
            expect(T.isLeaf).to.be.true;
            expect(atmo.isLeaf).to.be.false;
            expect(env.isLeaf).to.be.false;
        });
    });

    describe("#isRoot", function () {
        it("should detect only ROOT as root", function () {
            expect(root.name === "ROOT", "root is not detected").to.be.true;
        });
        it("should detect others not as root", function () {
            expect(env.name === "ROOT", "env is falsely detected").to.be.false;
            expect(T.name === "ROOT", "T is falsely detected").to.be.false;
        });
    });
    describe("properties", function () {
        it("should proxy the properties to the object", function () {
            expect(T.unit).to.equal(degC);
        });
    });
});
