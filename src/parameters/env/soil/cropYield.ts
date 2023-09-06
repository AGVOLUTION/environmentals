import { tpha } from "../../../unit";
import { SOIL } from "./base";

export class CROP_YIELD extends SOIL {}

export const DUL = new CROP_YIELD("DUL", {
    storeInTimestream: false,
    description:
        "This categorises the soil texture into three classes: light, moderate, heavy. This is based on the DUL value in the model. The output is needed for the KTBL filter (that is why we kept the CROP__YIELD",
    unit: tpha,
});

export const crop_yield = new CROP_YIELD(
    "CROP_YIELD",
    { storeInTimestream: false },
    [DUL]
);
