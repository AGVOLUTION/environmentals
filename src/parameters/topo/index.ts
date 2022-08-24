import { TOPO } from "./base";
export { TOPO };

export const TWI = new TOPO("TWI", {
    storeInTimestream: false,
    description: "Wetness Zones",
    translation: {
        "en-us": "Wetness Zones",
        "de-de": "Feuchte Zonen",
    },
});
export const DEM = new TOPO("DEM", {
    storeInTimestream: false,
    description: "Digital Elevation Model",
    translation: {
        "en-us": "Digital Elevation Model",
        "de-de": "Digitales Geländemodell",
    },
});
export const SLOPE = new TOPO("SLOPE", {
    storeInTimestream: false,
    description: "Slope",
    translation: {
        "en-us": "Slope",
        "de-de": "Hangneigung",
    },
});
export const EXPOSITION = new TOPO("EXPOSITION", {
    storeInTimestream: false,
    description: "Exposition",
    translation: {
        "en-us": "Exposition",
        "de-de": "Hang Ausrichtung",
    },
});

export const topo = new TOPO(
    "TOPO",
    {
        storeInTimestream: false,
        description: "Topological information",
    },
    [TWI, DEM, SLOPE, EXPOSITION]
);
