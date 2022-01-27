import { DEV } from "../base";

export class POSITION extends DEV {}

export const LATITUDE = new POSITION("LATITUDE", {});
export const LONGITUDE = new POSITION("LONGITUDE", {});

export const position = new POSITION("POSITION", {}, [LATITUDE, LONGITUDE]);
