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

//Fully qualified Path of new parameter
//Ex.: DEV__RF__RAT

//Unit of the parameter
//Ex.: no unit, just a number / code (uint)

//Description of Parameter
//Cellular Radio Access Technology (0 = GSM, 8 = LTE-M, 9 = NB-IOT)

//Store in Time Stream
//true
export const RAT = new RF("RAT", {
    storeInTimestream: true,
    format: "d",
    description:
        "Cellular Radio Access Technology (0 = GSM, 8 = LTE-M, 9 = NB-IOT)",
    translation: {
        "en-us": "Radio Access Technology",
        "de-de": "Zugangstechnologie",
    },
});

//Fully qualified Path of new parameter
//Ex.: DEV__RF__BAND

//Unit of the parameter
//Ex.: no unit, just a number / code (uint)

//Description of Parameter
//Radio Frequency Band that is used by the cellular connection (e.g. Band 3, 5, 20, etc.)

//Store in Time Stream
//true
export const BAND = new RF("BAND", {
    storeInTimestream: true,
    format: "d",
    description:
        "Radio Frequency Band that is used by the cellular connection (e.g. Band 3, 5, 20, etc.)",
    translation: {
        "en-us": "Radio Frequency Band",
        "de-de": "Frequenzband",
    },
});

//Fully qualified Path of new parameter
//Ex.: DEV__RF__MCC

//Unit of the parameter
//Ex.: no unit, just a number / code (uint)

//Description of Parameter
//Mobile Country Code of the cellular connection (between 001 and 999)

//Store in Time Stream
//true
export const MCC = new RF("MCC", {
    storeInTimestream: true,
    format: "d",
    description:
        "Mobile Country Code of the cellular connection (between 001 and 999)",
    translation: {
        "en-us": "Mobile Country Code",
        "de-de": "Mobilfunk-Ländercode",
    },
});

//Fully qualified Path of new parameter
//Ex.: DEV__RF__MNC

//Unit of the parameter
//Ex.: no unit, just a number / code (uint)

//Description of Parameter
//Mobile Network Code of the cellular connection (between 01 and 99)

//Store in Time Stream
//true
export const MNC = new RF("MNC", {
    storeInTimestream: true,
    format: "d",
    description:
        "Mobile Network Code of the cellular connection (between 01 and 99)",
    translation: {
        "en-us": "Mobile Network Code",
        "de-de": "Mobilfunk-Netzwerkcode",
    },
});

//Fully qualified Path of new parameter
//Ex.: DEV__RF__LAC

//Unit of the parameter
//Ex.: no unit, just a number / code (uint)

//Description of Parameter
//Location Area Code (between 0 and 65535)

//Store in Time Stream
//true
export const LAC = new RF("LAC", {
    storeInTimestream: true,
    format: "d",
    description: "Location Area Code (between 0 and 65535)",
    translation: {
        "en-us": "Location Area Code",
        "de-de": "Standortbereichscode",
    },
});

//Fully qualified Path of new parameter
//Ex.: DEV__RF__CID

//Unit of the parameter
//Ex.: no unit, just a number / code (uint)

//Description of Parameter
//Cell ID (between 0 and 2^32-1)

//Store in Time Stream
//true
export const CID = new RF("CID", {
    storeInTimestream: true,
    format: "d",
    description: "Cell ID (between 0 and 2^32-1)",
    translation: {
        "en-us": "Cell ID",
        "de-de": "Zellen-ID",
    },
});

export const rf = new RF("RF", { storeInTimestream: false }, [
    RSSI,
    RSRP,
    RSRQ,
    SINR,
    RAT,
    BAND,
    MCC,
    MNC,
    LAC,
    CID,
]);
