import { expect } from "chai";
import { deserialize, env, root } from "../src";
import { RSSI } from "../src/parameters/dev/rf";
import { T, atmo } from "../src/parameters/env/atmo";
import { MODEL } from "../src/parameters/model/base";
import { SNOW_MAUS } from "../src/parameters/model/num/env/atmo/snow/height";
import { WEIGHT } from "../src/parameters/obj";
import { degC } from "../src/unit";

describe("environmentals", function () {
    describe("#deserialize", function () {
        it("should correctly deserialize a FQN", function () {
            const fqn = "ENV__ATMO__T";
            const de = deserialize(fqn);
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
            expect(root.isRoot, "root is not detected").to.be.true;
        });
        it("should detect others not as root", function () {
            expect(env.isRoot, "env is falsely detected").to.be.false;
            expect(T.isRoot, "T is falsely detected").to.be.false;
        });
    });
    describe("properties", function () {
        it("should proxy the properties to the object", function () {
            expect(T.unit).to.equal(degC);
        });
    });

    describe("Model hierarchy", function () {
        it("should correctly recognise models by its superclass", function () {
            expect(SNOW_MAUS).to.be.instanceof(MODEL);
            expect(SNOW_MAUS instanceof MODEL).to.be.true;
        });
    });

    describe("Formatting", function () {
        it("should format values correctly", function () {
            const value = 3.25432;
            expect(T.format(value), "T").eq("3.25");
            expect(RSSI.format(value), "RSSI").eq("3");
            expect(WEIGHT.format(value), "WEIGHT").eq("3.254");
        });
    });
});
