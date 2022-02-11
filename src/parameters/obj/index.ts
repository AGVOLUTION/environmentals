import { OBJ } from "./base";

export const LIQUIDLEVEL = new OBJ("LIQUIDLEVEL", {
    translation: { "de-de": "Flüssigkeitsstand", "en-us": "liquid level" },
    storeInTimestream: true,
});
export const WEIGHT = new OBJ("WEIGHT", {
    translation: { "de-de": "Gewicht", "en-us": "weight" },
    storeInTimestream: true,
});
export const obj = new OBJ(
    "OBJ",
    {
        storeInTimestream: false,
        translation: { "de-de": "Objekt", "en-us": "object" },
    },
    [LIQUIDLEVEL, WEIGHT]
);
