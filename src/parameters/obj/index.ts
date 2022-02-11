import { kg, mm } from "../../unit";
import { OBJ } from "./base";

export const LIQUIDLEVEL = new OBJ("LIQUIDLEVEL", {
    storeInTimestream: true,
    translation: { "de-de": "Füllhöhe", "en-us": "Level" },
    unit: mm,
    format: "d",
});
export const WEIGHT = new OBJ("WEIGHT", {
    storeInTimestream: true,
    translation: { "de-de": "Gewicht", "en-us": "Weight" },
    unit: kg,
    format: ".3f",
});
export const obj = new OBJ(
    "OBJ",
    {
        storeInTimestream: false,
        translation: { "de-de": "Objekt", "en-us": "object" },
    },
    [LIQUIDLEVEL, WEIGHT]
);
