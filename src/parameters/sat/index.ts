import { SAT } from "./base";

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
});
export const sen2 = new SAT(
    "SEN2",
    {
        storeInTimestream: false,
        translation: "Sentinel 2",
    },
    [CL]
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

export const sat = new SAT(
    "SAT",
    {
        storeInTimestream: false,
        translation: "Satellite",
    },
    [sen1, sen2]
);
