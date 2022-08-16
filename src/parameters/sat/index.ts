import { SAT } from "./base";
import { sen2 } from "./sen2";
export { SAT };
export { VAP } from "./base";

//#region Sentinel 1{{{
export class SEN1 extends SAT {}
export const ASC = new SEN1("ASC", {
    storeInTimestream: false,
    description: "Ascending imagery from Sentinel 1",
    translation: "Ascending",
    normalizedName: "asc",
});
export const DESC = new SEN1("DESC", {
    storeInTimestream: false,
    description: "Descending imagery from Sentinel 1",
    translation: "Descending",
    normalizedName: "desc",
});
export const RAW = new SEN1("RAW", {
    storeInTimestream: false,
    description: "Raw imagery from Sentinel 1",
    translation: "Raw",
    expression: "",
    derivedFrom: [ASC, DESC],
    normalizedName: "raw",
});
export const sen1 = new SAT(
    "SEN1",
    {
        storeInTimestream: false,
        translation: "Sentinel 1",
        description: "Sentinel 1 imagery",
        normalizedName: "sentinel1",
    },
    [RAW]
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
        normalizedName: "satellite",
    },
    [sen1, sen2]
);
