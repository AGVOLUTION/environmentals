import { DEV } from "../base";

export class ENERGY extends DEV {}

export const VCAP = new ENERGY("VCAP");
export const LOWLIGHT = new ENERGY("LOWLIGHT");

export const energy = new ENERGY("ENERGY", [VCAP, LOWLIGHT]);
