import { expect } from "chai";
import { deserialize, env, root, tryDeserialize } from "../src";
import { RSSI } from "../src/parameters/dev/rf";
import {
    T,
    atmo,
    HEIGHT,
    MELT,
    INSULATION,
    RH,
} from "../src/parameters/env/atmo";
import { SNOW_MAUS } from "../src/parameters/env/atmo/models";
import { ENV } from "../src/parameters/env/base";
import { Model, RequestedModel } from "../src/model";
import { WEIGHT } from "../src/parameters/obj";
import {
    ContinousValueRange,
    degC,
    DiscreteValueRange,
    ValueRange,
    yesno,
} from "../src/unit";
import { CL, NDVI, SEN2 } from "../src/parameters/sat";
import { SAT, VAP } from "../src/parameters/sat/base";

describe("environmentals", function () {
    describe("#deserialize", function () {
        it("should correctly deserialize an ENV FQN", function () {
            const fqn = "ENV__ATMO__T";
            const de = deserialize(fqn);
            expect(de).to.equal(T);
            expect(de.fqn).to.eq("ENV__ATMO__T");
        });
        it("should get the model of a modelled ENV", function () {
            const fqn = "ENV__ATMO__SNOW__HEIGHT";
            let de = deserialize(fqn);
            expect(de).to.be.instanceof(ENV);
            if (de instanceof ENV) {
                expect(de.model?.name).eq("SNOW_MAUS");
            }
        });
        it("should deserialize a modelled ENV to its default model", function () {
            const fqn = "MODEL__NUM__ENV__ATMO__SNOW__HEIGHT";
            const de = deserialize(fqn);
            expect(de).to.be.instanceof(Model);
            if (de instanceof Model) {
                expect(de.name).eq("SNOW_MAUS");
            }
        });

        it("should deserialize a model fqn to the model", function () {
            const fqn = "MODEL__NUM__ENV__ATMO__SNOW__HEIGHT__SNOW_MAUS";
            const de = deserialize(fqn);
            expect(de).to.be.instanceof(Model);
            if (de instanceof Model) {
                expect(de.name).eq("SNOW_MAUS");
            }
        });
    });

    describe("#tryDeserialize", function () {
        it("should correctly deserialize an ENV FQN", function () {
            const fqn = "ENV__ATMO__T";
            const de = tryDeserialize(fqn);
            expect(de).to.equal(T);
        });
        it("should return undefined if wrong fqn provided", function () {
            const fqn = "ENV__ATMO__T__";
            const de = tryDeserialize(fqn);
            expect(de).to.be.undefined;
        });
        it("should return correct ENV if fqn is provided in parts", function () {
            let de = tryDeserialize("ENV", "ATMO", "T");
            expect(de).to.equal(T);
            de = tryDeserialize("ENV", "ATMO__T");
            expect(de).to.equal(T);
            de = tryDeserialize("ENV__wrong", "T");
            expect(de).to.be.undefined;
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

    describe("Formatting", function () {
        it("should format values correctly", function () {
            const value = 3.25432;
            expect(T.format(value), "T").eq("3.3");
            expect(RSSI.format(value), "RSSI").eq("3");
            expect(WEIGHT.format(value), "WEIGHT").eq("3.254");
        });
    });

    describe("#valueRange", function () {
        it("should return correct valueRange", function () {
            expect(RH.valueRange).to.be.instanceof(ContinousValueRange);
            if (RH.valueRange instanceof ContinousValueRange) {
                expect(RH.valueRange.isValid(99)).to.be.true;
                expect(RH.valueRange.isValid(199)).to.be.false;
                expect(RH.valueRange.min).to.eq(0);
                expect(RH.valueRange.max).to.eq(100);
            }
        });
    });
});

describe("models", function () {
    describe("#withParam", function () {
        it("should create a correct subclass object", function () {
            const mod = SNOW_MAUS.withParameter(HEIGHT);
            expect(mod).to.be.instanceof(RequestedModel);
            if (mod instanceof RequestedModel) {
                expect(mod.requestedParameter).eq(HEIGHT);
            }
        });
    });

    it("should have all defined provided parameters", function () {
        expect(SNOW_MAUS.provides).to.include(HEIGHT);
        expect(SNOW_MAUS.provides).to.include(MELT);
        expect(SNOW_MAUS.provides).to.include(INSULATION);
    });
});

describe("satellite", function () {
    //it("should correctly deserialize", function () {
    //const fqn = "SAT__SEN2__CL";
    //const de = deserialize(fqn);
    //expect(de).to.be.instanceof(SEN2);
    //expect(de.fqn).to.eq(fqn);
    //});

    describe("#resourceBucket", function () {
        it("should return the correct bucket", function () {
            expect(NDVI.fqn).to.eq("SAT__SEN2__NDVI");
            expect(NDVI.resourceBucket).to.eq("satellite/sentinel2/cloudless");
        });
    });

    it("should correctly deserialize a satellite VAP", function () {
        const fqn = "SAT__SEN2__NDVI";
        const de = deserialize(fqn) as SAT;
        expect(de).to.be.instanceof(SEN2);
        expect(de.fqn).to.eq(fqn);
        expect(de.properties.derivedFrom![0]).to.eq(CL);
    });

    it("should correctly deserialize a satellite VAP with explicit product", function () {
        const fqn = "SAT__SEN2__NDVI__CL";
        const de = deserialize(fqn) as SAT;
        expect(de).to.be.instanceof(SAT);
        expect(de).to.be.instanceof(VAP);
        expect(de.fqn).to.eq(fqn);
        expect(de.resourceBucket).to.eq("satellite/sentinel2/cloudless");
    });

    it("should create the correct objects when using asVAP", function () {
        const fqn = "SAT__SEN2__NDVI";
        const de = deserialize(fqn) as SAT;
        const deVap = deserialize(`${fqn}__CL`) as VAP;
        const vap = de.asVap();
        expect(vap).to.be.instanceof(VAP);
        expect(vap.fqn).to.eq(`${fqn}__CL`);
        expect(vap.asVap()).to.eq(vap);
    });

    it("should return the correct parts/properties of a VAP", function () {
        const fqn = "SAT__SEN2__NDVI__CL";
        const de = deserialize(fqn) as VAP;

        expect(de.vap.name).to.eq("NDVI");
        expect(de.sourceProduct.name).to.eq("CL");
        expect(de.source.name).to.eq("SEN2");
    });
});

describe("Units", function () {
    describe("#discreteValues", function () {
        it("should return the correct discrete values", function () {
            expect(yesno.valueRange).to.be.instanceof(DiscreteValueRange);
            if (yesno.valueRange instanceof DiscreteValueRange) {
                expect(yesno.valueRange.values).to.be.deep.eq(["yes", "no"]);
            }
        });
    });
});
