import { tpha } from "../../../unit";
import { SOIL } from "./base";

export class TYPE extends SOIL {}

export const CROP_YIELD_DUL = new TYPE("CROP_YIELD_DUL", {
    storeInTimestream: false,
    description:
        "This categorises the soil texture into three classes: light, moderate, heavy. This is based on the DUL value in the model. The output is needed for the KTBL filter (that is why we kept the CROP__YIELD",
    unit: tpha,
});

export const soilType = new TYPE("TYPE", { storeInTimestream: false }, [
    CROP_YIELD_DUL,
]);
