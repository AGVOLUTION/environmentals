import { SAT } from "../base";

export class SEN2 extends SAT {}
export const CL = new SEN2("CL", {
    storeInTimestream: false,
    description: "Cloudless imagery from Sentinel 2",
    translation: "cloudless",
    normalizedName: "cloudless",
});
export const NDVI = new SEN2("NDVI", {
    storeInTimestream: false,
    description:
        "Normalized Difference Vegetation Index (NDVI) from Sentinel 2 imagery",
    translation: "NDVI",
    derivedFrom: [CL],
    expression: "(b8 - b4) / (b8 + b4)",
    normalizedName: "ndvi",
});
export const RGB = new SEN2("RGB", {
    storeInTimestream: false,
    description: "A true color image from Sentinel 2 imagery",
    translation: "RGB",
    derivedFrom: [CL],
    expression:
        "255 * (1.055 * (b4**(1/2.4))) - 0.055, 255 * (1.055 * (b3**(1/2.4))) - 0.055, 255 * (1.055 * (b2**(1/2.4))) - 0.055",
    normalizedName: "rgb",
});
export const KC = new SEN2("KC", {
    storeInTimestream: false,
    description: "KC index from Sentinel 2 imagery",
    translation: "KC",
    derivedFrom: [CL],
    expression: "1.4571 * ((b8 - b4) / (b8 + b4)) - 0.1725",
    normalizedName: "kc",
});
export const CIGREEN = new SEN2("CIGREEN", {
    storeInTimestream: false,
    description: "CIGREEN index from Sentinel 2 imagery",
    translation: "CIGREEN",
    derivedFrom: [CL],
    expression: "(b8 / b3) - 1",
    normalizedName: "cigreen",
});
export const SAVI = new SEN2("SAVI", {
    storeInTimestream: false,
    description: "SAVI index from Sentinel 2 imagery",
    translation: "SAVI",
    derivedFrom: [CL],
    expression: "((1.0 + 0.428) * (b8 - b4)) / (b8 + b4 + 0.428)",
    normalizedName: "savi",
});
export const WDVI = new SEN2("WDVI", {
    storeInTimestream: false,
    description: "WDVI index from Sentinel 2 imagery",
    translation: "WDVI",
    derivedFrom: [CL],
    expression: "b8 - (1.007 * b4)",
    normalizedName: "wdvi",
});
export const RAW = new SEN2("RAW", {
    storeInTimestream: false,
    description: "Raw image from Sentinel 2 imagery containing all Bands",
    translation: "Raw",
    derivedFrom: [CL],
    expression: "",
    normalizedName: "raw",
});

export const sen2 = new SAT(
    "SEN2",
    {
        storeInTimestream: false,
        translation: "Sentinel 2",
        description: "Sentinel 2 imagery",
        normalizedName: "sentinel2",
    },
    [NDVI, RGB, KC, CIGREEN, SAVI, WDVI, RAW]
);
