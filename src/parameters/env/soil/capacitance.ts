import { pF } from "../../../unit";
import { SOIL } from "./base";

export class CAPACITANCE extends SOIL {}
export const ABSOLUTE = new CAPACITANCE("ABSOLUTE", {
    storeInTimestream: true,
    translation: { "de-de": "Kapazität abs.", "en-us": "Capacitance abs." },
    unit: pF,
    format: ".2f",
});
export const DIFFERENTIAL = new CAPACITANCE("DIFFERENTIAL", {
    storeInTimestream: true,
    translation: { "de-de": "Kapazität diff.", "en-us": "Capacitance diff." },
    unit: pF,
    format: ".2f",
});
export const A = new CAPACITANCE("A", {
    description: "Leg A of the soil sensor",
    storeInTimestream: true,
    translation: { "de-de": "Kapazität A", "en-us": "Capacitance A" },
    unit: pF,
    format: ".2f",
});
export const B = new CAPACITANCE("B", {
    description: "Leg B of the soil sensor",
    storeInTimestream: true,
    translation: { "de-de": "Kapazität B", "en-us": "Capacitance B" },
    unit: pF,
    format: ".2f",
});
export const OFFSET = new CAPACITANCE("OFFSET", {
    storeInTimestream: true,
    translation: { "de-de": "Kapazität Offset", "en-us": "Capacitance Offset" },
    unit: pF,
    format: ".2f",
});
export const capacitance = new CAPACITANCE(
    "CAPACITANCE",
    { storeInTimestream: false },
    [ABSOLUTE, DIFFERENTIAL, A, B, OFFSET]
);
