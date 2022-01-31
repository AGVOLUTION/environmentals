import { ENV } from "../base";

export class SOIL extends ENV {}
export const T = new SOIL("T", {
    translation: { "de-de": "Bodentemperatur", "en-us": "soil temperature" },
});
export const EC = new SOIL("EC", {});
export const NORM_ER = new SOIL("NORM_ER", {});
export const VWC = new SOIL("VWC", {});
export const MATRIX_POTENTIAL = new SOIL("MATRIX_POTENTIAL", {});
export const soil = new ENV("SOIL", {}, [T, EC, NORM_ER, VWC, MATRIX_POTENTIAL]);
