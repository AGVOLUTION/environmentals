import { expect } from "chai";
import { deserialize } from "../src";
import { T } from "../src/measureables/env/atmo";

describe("measureables", function () {
    describe("#deserialize", function () {
        it("should correctly deserialize a FQN", function () {
            const fqn = "ENV__ATMO__T";
            const de = deserialize(fqn);
            expect(de).to.equal(T);
            expect(de.fqn).to.eq("ENV__ATMO__T");
        });
    });
});
