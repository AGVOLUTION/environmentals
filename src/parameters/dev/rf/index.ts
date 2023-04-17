import { dB, dBm } from "../../../unit";
import { DEV } from "../base";

export class RF extends DEV {}

export const RSSI = new RF("RSSI", {
    storeInTimestream: true,
    unit: dBm,
    format: "d",
    translation: {
        "de-de": "Empfangssignalstärke",
        "en-us": "Received Signal Strength Indication",
    },
    description:
        "Indicator for the receiver signal strength over a wide spectral range.",
});
export const RSRP = new RF("RSRP", {
    storeInTimestream: true,
    unit: dBm,
    format: "d",
    translation: {
        "en-us": "Reference Signal Received Power",
        "de-de": "Empfangssignalstärke eines Referenzsignals",
    },
    description:
        "Indicator for the receiver signal strength of a single carrier (reference signal)",
});
export const RSRQ = new RF("RSRQ", {
    storeInTimestream: true,
    unit: dB,
    format: ".2f",
    translation: {
        "en-us": "Reference Signal Received Quality",
        "de-de": "Referenzsignalqualität",
    },
    description:
        "RSRP divided by RSSI, to measure the quality of a single carrier reception with respect to a wider spectral range.",
});
export const SINR = new RF("SINR", {
    storeInTimestream: true,
    unit: dB,
    format: ".2f",
    translation: {
        "de-de": "Signal zu Rausch- und Interferenzverhältnis",
        "en-us": "Signal to Interference plus Noise Ratio",
    },
    description:
        "Receive signal strength divided by noise + interference floor.",
});

export const rf = new RF("RF", { storeInTimestream: false }, [
    RSSI,
    RSRP,
    RSRQ,
    SINR,
]);
