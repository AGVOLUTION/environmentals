import { ENV } from "../base";

export class SOIL extends ENV {}
export const T = new SOIL("T", {
    translation: { "de-de": "Bodentemperatur", "en-us": "soil temperature" },
    storeInTimestream: true,
});
export const EC = new SOIL("EC", { storeInTimestream: true });
export const NORM_ER = new SOIL("NORM_ER", { storeInTimestream: true });
export const VWC = new SOIL("VWC", { storeInTimestream: true });
export const MATRIX_POTENTIAL = new SOIL("MATRIX_POTENTIAL", {
    storeInTimestream: true,
});

export class CAPACITANCE extends SOIL {}
export const ABSOLUTE = new CAPACITANCE("ABSOLUTE", {
    storeInTimestream: true,
});
export const DIFFERENTIAL = new CAPACITANCE("DIFFERENTIAL", {
    storeInTimestream: true,
});
export const A = new CAPACITANCE("A", {
    description: "Leg A of the soil sensor",
    storeInTimestream: true,
});
export const B = new CAPACITANCE("B", {
    description: "Leg B of the soil sensor",
    storeInTimestream: true,
});
export const OFFSET = new CAPACITANCE("OFFSET", { storeInTimestream: true });
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
