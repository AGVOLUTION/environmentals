import { ENV } from "../base";

export class SOIL extends ENV {}
export const T = new SOIL("T", {
    translation: { "de-de": "Bodentemperatur", "en-us": "soil temperature" },
});
export const EC = new SOIL("EC", {});
export const NORM_ER = new SOIL("NORM_ER", {});
export const VWC = new SOIL("VWC", {});
export const MATRIX_POTENTIAL = new SOIL("MATRIX_POTENTIAL", {});

export class CAPACITANCE extends SOIL {}
export const ABSOLUTE = new CAPACITANCE("ABSOLUTE", {});
export const DIFFERENTIAL = new CAPACITANCE("DIFFERENTIAL", {});
export const LEG_A = new CAPACITANCE("LEG_A", {});
export const LEG_B = new CAPACITANCE("LEG_B", {});
export const OFFSET = new CAPACITANCE("OFFSET", {});
export const capacitance = new CAPACITANCE("CAPACITANCE", {}, [
    ABSOLUTE,
    DIFFERENTIAL,
    LEG_A,
    LEG_B,
    OFFSET,
]);

export const soil = new ENV("SOIL", {}, [T, EC, NORM_ER, VWC, MATRIX_POTENTIAL, capacitance]);
