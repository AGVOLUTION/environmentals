import { TOPO } from "./base";
export { TOPO };

export const TWI = new TOPO("TWI", {
    storeInTimestream: false,
    description: "Topographic Wetness Index",
    translation: "Topographic Wetness Index",
});
export const DEM = new TOPO("DEM", {
    storeInTimestream: false,
    description: "Digital Elevation Model",
    translation: "Digital Elevation Model",
});
export const SLOPE = new TOPO("SLOPE", {
    storeInTimestream: false,
    description: "Slope",
    translation: "Slope",
});
export const EXPOSITION = new TOPO("EXPOSITION", {
    storeInTimestream: false,
    description: "Exposition",
    translation: "Exposition",
});

export const topo = new TOPO(
    "TOPO",
    {
        storeInTimestream: false,
        description: "Topological information",
    },
    [TWI, DEM, SLOPE, EXPOSITION]
);
