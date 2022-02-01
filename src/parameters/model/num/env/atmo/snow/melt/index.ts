import { SNOW } from "../base";

export class MELT extends SNOW {}
export const SNOW_MAUS = new MELT("SNOW_MAUS", {});
export const melt = new SNOW("MELT", {}, [SNOW_MAUS]);
