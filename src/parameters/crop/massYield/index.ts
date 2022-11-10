import { CROP } from "../base";

export class MASS_YIELD extends CROP {}

export const TRANSLOCATION = new MASS_YIELD("TRANSLOCATION", {
    storeInTimestream: true,
});
export const CGRAIN = new MASS_YIELD("CGRAIN", {
    storeInTimestream: true,
    translation: "Accumulated grain dry matter",
});

export const massYield = new CROP("MASS_YIELD", { storeInTimestream: false }, [
    TRANSLOCATION,
    CGRAIN,
]);
