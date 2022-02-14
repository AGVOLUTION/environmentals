import { ModelNames } from "../../../../../../../../generated/gql";
import { yesno } from "../../../../../../../unit";
import { SNOW } from "../base";

export class INSULATION extends SNOW {}
export const SNOW_MAUS = new INSULATION("SNOW_MAUS", {
    description:
        "Indicates it there was an insulation induced by the snow layer",
    unit: yesno,
    storeInTimestream: true,
});
export const insulation = new SNOW(
    "INSULATION",
    { storeInTimestream: false, defaultModel: SNOW_MAUS },
    [SNOW_MAUS]
);
