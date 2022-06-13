import { SAT } from "./base";
export { SAT };
export { VAP } from "./base";

//#region  Sentinel 2{{{
export class SEN2 extends SAT {}
export const CL = new SEN2("CL", {
    storeInTimestream: false,
    description: "Cloudless imagery from Sentinel 2",
    translation: "cloudless",
});
export const NDVI = new SEN2("NDVI", {
    storeInTimestream: false,
    description:
        "Normalized Difference Vegetation Index (NDVI) from Sentinel 2 imagery",
    translation: "NDVI",
    derivedFrom: [CL],
    expression: "(b8 - b4) / (b8 + b4)",
});
export const RGB = new SEN2("RGB", {
    storeInTimestream: false,
    description: "A true color image from Sentinel 2 imagery",
    translation: "RGB",
    derivedFrom: [CL],
    expression:
        "255 * (1.055 * (b4**(1/2.4))) - 0.055, 255 * (1.055 * (b3**(1/2.4))) - 0.055, 255 * (1.055 * (b2**(1/2.4))) - 0.055",
});
export const KC = new SEN2("KC", {
    storeInTimestream: false,
    description: "KC index from Sentinel 2 imagery",
    translation: "KC",
    derivedFrom: [CL],
    expression: "1.4571 * ((b8 - b4) / (b8 + b4)) - 0.1725",
});
export const CIGREEN = new SEN2("CIGREEN", {
    storeInTimestream: false,
    description: "CIGREEN index from Sentinel 2 imagery",
    translation: "CIGREEN",
    derivedFrom: [CL],
    expression: "(b8 / b3) - 1",
});
export const SAVI = new SEN2("SAVI", {
    storeInTimestream: false,
    description: "SAVI index from Sentinel 2 imagery",
    translation: "SAVI",
    derivedFrom: [CL],
    expression: "((1.0 + 0.428) * (b8 - b4)) / (b8 + b4 + 0.428)",
});
export const WDVI = new SEN2("WDVI", {
    storeInTimestream: false,
    description: "WDVI index from Sentinel 2 imagery",
    translation: "WDVI",
    derivedFrom: [CL],
    expression: "b8 - (1.007 * b4)",
});

export const sen2 = new SAT(
    "SEN2",
    {
        storeInTimestream: false,
        translation: "Sentinel 2",
    },
    [NDVI, RGB, KC, CIGREEN, SAVI, WDVI]
);
//#endregion}}}

//#region Sentinel 1{{{
export class SEN1 extends SAT {}
export const ASC = new SEN1("ASC", {
    storeInTimestream: false,
    description: "Ascending imagery from Sentinel 1",
    translation: "Ascending",
});
export const DESC = new SEN1("DESC", {
    storeInTimestream: false,
    description: "Descending imagery from Sentinel 1",
    translation: "Descending",
});
export const sen1 = new SAT(
    "SEN1",
    { storeInTimestream: false, translation: "Sentinel 1" },
    [ASC, DESC]
);
//#endregion}}}

/**
 * The SAT subtree, containing all satellite imagery parameters.
 *
 * @public
 */
export const sat = new SAT(
    "SAT",
    {
        storeInTimestream: false,
        translation: "Satellite",
    },
    [sen1, sen2]
);
