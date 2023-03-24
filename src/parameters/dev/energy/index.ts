import { percent, V } from "../../../unit";
import { DEV } from "../base";

export class ENERGY extends DEV {}

export const VCAP = new ENERGY("VCAP", {
    storeInTimestream: true,
    translation: { "de-de": "Akkustand", "en-us": "Battery" },
    unit: percent,
    format: "d",
});
export const VBAT = new ENERGY("VBAT", {
    storeInTimestream: true,
    translation: { "de-de": "Akku-Spannung", "en-us": "Battery Voltage" },
    unit: V,
    format: ".3f",
});
export const LOWLIGHT = new ENERGY("LOWLIGHT", {
    storeInTimestream: false,
    translation: { "de-de": "Dunkel", "en-us": "Low Light" },
    format: "d",
});

export const energy = new ENERGY("ENERGY", { storeInTimestream: false }, [
    VCAP,
    VBAT,
    LOWLIGHT,
]);
