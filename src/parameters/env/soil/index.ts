import { cbar, degC, percent, pF, µSpcm } from "../../../unit";
import { ENV } from "../base";

export class SOIL extends ENV {}
export const T = new SOIL("T", {
    translation: { "de-de": "Bodentemperatur", "en-us": "Soil Temperature" },
    storeInTimestream: true,
    format: ".2f",
    unit: degC,
});
export const EC = new SOIL("EC", {
    storeInTimestream: true,
    translation: {
        "de-de": "Elektr. Leitfähigkeit",
        "en-us": "Electrical Coductivity",
    },
    format: ".1f",
    unit: µSpcm,
});
export const NORM_ER = new SOIL("NORM_ER", {
    storeInTimestream: true,
    translation: {
        "de-de": "Norm. Permittivity",
        "en-us": "Norm. Permittivity",
    },
    format: ".2f",
});
export const VWC = new SOIL("VWC", {
    storeInTimestream: true,
    translation: {
        "de-de": "Volumetrische Feuchte",
        "en-us": "Volumetric Water Content",
    },
    unit: percent,
    format: "d",
});
export const MATRIX_POTENTIAL = new SOIL("MATRIX_POTENTIAL", {
    storeInTimestream: true,
    translation: { "de-de": "Matrixpotential", "en-us": "Matrix Potential" },
    unit: cbar,
    format: "d",
});

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

export const soil = new ENV("SOIL", { storeInTimestream: false }, [
    T,
    EC,
    NORM_ER,
    VWC,
    MATRIX_POTENTIAL,
    capacitance,
]);
