import { DEV } from "../base";

export class RF extends DEV {}

export const RSSI = new RF("RSSI", { storeInTimestream: true });
export const RSRP = new RF("RSRP", { storeInTimestream: true });
export const RSRQ = new RF("RSRQ", { storeInTimestream: true });
export const SINR = new RF("SINR", { storeInTimestream: true });

export const rf = new RF("RF", { storeInTimestream: false }, [
    RSSI,
    RSRP,
    RSRQ,
    SINR,
]);
