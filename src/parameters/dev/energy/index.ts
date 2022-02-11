import { DEV } from "../base";

export class ENERGY extends DEV {}

export const VCAP = new ENERGY("VCAP", { storeInTimestream: true });
export const LOWLIGHT = new ENERGY("LOWLIGHT", { storeInTimestream: true });

export const energy = new ENERGY("ENERGY", { storeInTimestream: false }, [
    VCAP,
    LOWLIGHT,
]);
