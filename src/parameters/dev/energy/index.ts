import { percent } from "../../../unit";
import { DEV } from "../base";

export class ENERGY extends DEV {}

export const VCAP = new ENERGY("VCAP", {
    storeInTimestream: true,
    translation: { "de-de": "Akkustand", "en-us": "Battery" },
    unit: percent,
    format: "d",
});
export const LOWLIGHT = new ENERGY("LOWLIGHT", {
    storeInTimestream: true,
    translation: { "de-de": "Dunkel", "en-us": "Low Light" },
    format: "d",
});

export const energy = new ENERGY("ENERGY", { storeInTimestream: false }, [
    VCAP,
    LOWLIGHT,
]);
