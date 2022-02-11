import { dB, dBm } from "../../../unit";
import { DEV } from "../base";

export class RF extends DEV {}

export const RSSI = new RF("RSSI", {
    storeInTimestream: true,
    unit: dBm,
    format: "d",
});
export const RSRP = new RF("RSRP", {
    storeInTimestream: true,
    unit: dBm,
    format: "d",
});
export const RSRQ = new RF("RSRQ", {
    storeInTimestream: true,
    unit: dB,
    format: ".2f",
});
export const SINR = new RF("SINR", {
    storeInTimestream: true,
    unit: dB,
    format: ".2f",
});

export const rf = new RF("RF", { storeInTimestream: false }, [
    RSSI,
    RSRP,
    RSRQ,
    SINR,
]);
