import { SNOW } from "../base";

export class HEIGHT extends SNOW {}
export const SNOW_MAUS = new HEIGHT("SNOW_MAUS", { storeInTimestream: true });
export const height = new SNOW(
    "HEIGHT",
    { storeInTimestream: false, defaultModel: SNOW_MAUS },
    [SNOW_MAUS]
);
