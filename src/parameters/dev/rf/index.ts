import { DEV } from "../base";

export class RF extends DEV {}

export const RSSI = new RF("RSSI", {});
export const RSRP = new RF("RSRP", {});
export const RSRQ = new RF("RSRQ", {});
export const SINR = new RF("SINR", {});

export const rf = new RF("RF", {}, [RSSI, RSRP, RSRQ, SINR]);
