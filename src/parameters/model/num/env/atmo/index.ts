import { ENV } from "../base";
import { ATMO } from "./base";
import { snow } from "./snow";

export const ETO = new ATMO("ETO", {
    description: "Evapotranspiration model",
    storeInTimestream: true,
    translation: {
        "de-de": "Referenz-Evapotranspiration",
        "en-us": "Reference Evapotranspiration",
    },
});
export const atmo = new ENV("ATMO", { storeInTimestream: false }, [snow, ETO]);
