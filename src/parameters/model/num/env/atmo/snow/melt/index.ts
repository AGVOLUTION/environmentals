import { SNOW } from "../base";

export class MELT extends SNOW {}
export const SNOW_MAUS = new MELT("SNOW_MAUS", { storeInTimestream: true });
export const melt = new SNOW("MELT", { storeInTimestream: true }, [SNOW_MAUS]);
