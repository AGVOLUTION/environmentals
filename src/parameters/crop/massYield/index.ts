import { gpm2 } from "../../../unit";
import { CROP } from "../base";

export class MASS_YIELD extends CROP {}

export const TRANSLOCATION = new MASS_YIELD("TRANSLOCATION", {
    storeInTimestream: true,
});
export const CGRAIN = new MASS_YIELD("CGRAIN", {
    storeInTimestream: true,
    translation: "Accumulated grain dry matter",
});
export const DRYMATTER = new MASS_YIELD("DRYMATTER", {
    storeInTimestream: true,
    translation: {
        "en-us": "Dry matter yield (total biomass) of a crop",
        "de-de":
            "Trockenmasseertrag (gesamte Biomasse) eines Kulturpflanzenbestandes",
    },
    unit: gpm2,
});

export const massYield = new CROP("MASS_YIELD", { storeInTimestream: false }, [
    TRANSLOCATION,
    CGRAIN,
    DRYMATTER,
]);
