import { yesno } from "../../../../../../../unit";
import { SNOW } from "../base";

export class INSULATION extends SNOW {}
export const SNOW_MAUS = new INSULATION("SNOW_MAUS", {
    description: "Indicates it there was an insulation induced by the snow layer",
    unit: yesno,
});
export const insulation = new SNOW("INSULATION", {}, [SNOW_MAUS]);
