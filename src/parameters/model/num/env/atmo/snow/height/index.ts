import { SNOW } from "../base";

export class HEIGHT extends SNOW {}
export const SNOW_MAUS = new HEIGHT("SNOW_MAUS", {});
export const height = new SNOW("HEIGHT", {}, [SNOW_MAUS]);
