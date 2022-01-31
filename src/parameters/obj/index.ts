import { OBJ } from "./base";

export const LIQUIDLEVEL = new OBJ("LIQUIDLEVEL", {
    translation: { "de-de": "Flüssigkeitsstand", "en-us": "liquid level" },
});
export const WEIGHT = new OBJ("WEIGHT", {
    translation: { "de-de": "Gewicht", "en-us": "weight" },
});
export const obj = new OBJ("OBJ", { translation: { "de-de": "Objekt", "en-us": "object" } }, [
    LIQUIDLEVEL,
    WEIGHT,
]);
