import {
    cbar,
    cm3pdm3,
    degC,
    gp100g,
    gpkg,
    kgpdm3,
    kgpha,
    kgpm3,
    mm,
    mmcpkg,
    mmpmm,
    percent,
    pF,
    ph,
    µSpcm,
} from "../../../unit";
import { ENV } from "../base";

export class SOIL extends ENV {}
export const T = new SOIL("T", {
    translation: { "de-de": "Bodentemperatur", "en-us": "Soil Temperature" },
    storeInTimestream: true,
    format: ".2f",
    unit: degC,
});
export const EC = new SOIL("EC", {
    storeInTimestream: true,
    translation: {
        "de-de": "Elektr. Leitfähigkeit",
        "en-us": "Electrical Coductivity",
    },
    format: ".1f",
    unit: µSpcm,
});
export const NORM_ER = new SOIL("NORM_ER", {
    storeInTimestream: true,
    translation: {
        "de-de": "Norm. Permittivity",
        "en-us": "Norm. Permittivity",
    },
    format: ".2f",
});
export const VWC = new SOIL("VWC", {
    storeInTimestream: true,
    translation: {
        "de-de": "Volumetrische Bodenfeuchte",
        "en-us": "Volumetric Water Content",
    },
    unit: percent,
    format: "d",
});
export const MATRIX_POTENTIAL = new SOIL("MATRIX_POTENTIAL", {
    storeInTimestream: true,
    translation: { "de-de": "Matrixpotential", "en-us": "Matrix Potential" },
    unit: cbar,
    format: "d",
});

export class CAPACITANCE extends SOIL {}
export const ABSOLUTE = new CAPACITANCE("ABSOLUTE", {
    storeInTimestream: true,
    translation: { "de-de": "Kapazität abs.", "en-us": "Capacitance abs." },
    unit: pF,
    format: ".2f",
});
export const DIFFERENTIAL = new CAPACITANCE("DIFFERENTIAL", {
    storeInTimestream: true,
    translation: { "de-de": "Kapazität diff.", "en-us": "Capacitance diff." },
    unit: pF,
    format: ".2f",
});
export const A = new CAPACITANCE("A", {
    description: "Leg A of the soil sensor",
    storeInTimestream: true,
    translation: { "de-de": "Kapazität A", "en-us": "Capacitance A" },
    unit: pF,
    format: ".2f",
});
export const B = new CAPACITANCE("B", {
    description: "Leg B of the soil sensor",
    storeInTimestream: true,
    translation: { "de-de": "Kapazität B", "en-us": "Capacitance B" },
    unit: pF,
    format: ".2f",
});
export const OFFSET = new CAPACITANCE("OFFSET", {
    storeInTimestream: true,
    translation: { "de-de": "Kapazität Offset", "en-us": "Capacitance Offset" },
    unit: pF,
    format: ".2f",
});
export const capacitance = new CAPACITANCE(
    "CAPACITANCE",
    { storeInTimestream: false },
    [ABSOLUTE, DIFFERENTIAL, A, B, OFFSET]
);

// Parameters, originally for/from isric
export const BD = new SOIL("BD", {
    storeInTimestream: false,
    description: "Bulk density of the fine earth fraction",
    translation: "Bulk density",
    unit: kgpdm3,
});
export const CEC = new SOIL("CEC", {
    storeInTimestream: false,
    description: "Cation Exchange Capacity of the soil",
    translation: "Cation Exchange Capacity",
    unit: mmcpkg,
});
export const CFVO = new SOIL("CFVO", {
    storeInTimestream: false,
    description: "Volumetric fraction of coarse fragments (> 2 mm)",
    unit: cm3pdm3,
});
export const CLAY = new SOIL("CLAY", {
    storeInTimestream: false,
    description:
        "Proportion of clay particles (< 0.002 mm) in the fine earth fraction",
    translation: "Clay",
    unit: gp100g,
});
export const TN = new SOIL("TN", {
    storeInTimestream: false,
    description: "Total nitrogen (N)",
    translation: "Total nitrogen",
    unit: gpkg,
});
export const PH = new SOIL("PH", {
    storeInTimestream: false,
    description: "Soil pH H2O",
    unit: ph,
});
export const SAND = new SOIL("SAND", {
    storeInTimestream: false,
    description:
        "Proportion of sand particles (> 0.05 mm) in the fine earth fraction",
    unit: gp100g,
});
export const SILT = new SOIL("SILT", {
    storeInTimestream: false,
    description:
        "Proportion of silt particles (? 0.002 mm and ? 0.05 mm) in the fine earth fraction",
    unit: gp100g,
});
export const SOC = new SOIL("SOC", {
    storeInTimestream: false,
    description: "Soil organic carbon content in the fine earth fraction",
    unit: gpkg,
});
export const OCD = new SOIL("OCD", {
    storeInTimestream: false,
    description: "Organic carbon density",
    unit: kgpm3,
});
export const OCS = new SOIL("OCS", {
    storeInTimestream: false,
    description: "Organic carbon stocks",
    unit: kgpm3,
});
export const RD = new SOIL("RD", {
    storeInTimestream: false,
    description: "Maxiumum rooting depth",
    unit: mm,
});
export const TH = new SOIL("TH", {
    storeInTimestream: false,
    description: "Layer thickness",
    unit: mm,
});
export const OM = new SOIL("OM", {
    storeInTimestream: false,
    description: "organic matter, OC * 1.752",
    unit: percent,
});
export const SRD = new SOIL("SRD", {
    storeInTimestream: false,
    description: "soil raw density",
    unit: kgpdm3,
});

export const DRAINF = new SOIL("DRAINF", {
    storeInTimestream: false,
});

export const NORG = new SOIL("NORG", {
    storeInTimestream: false,
    description: "organic nitrogen",
});
export const FMIN = new SOIL("FMIN", {
    storeInTimestream: false,
    description: "mineralisable N",
});
export const PWP = new SOIL("PWP", {
    storeInTimestream: false,
    description: "permanent wilting point",
    unit: mmpmm,
});
export const NH4 = new SOIL("NH4", {
    storeInTimestream: false,
    description: "ammonium",
    unit: kgpha,
});
export const NO3 = new SOIL("NO3", {
    storeInTimestream: false,
    description: "nitrate",
    unit: kgpha,
});
export const MAI = new SOIL("MAI", {
    storeInTimestream: false,
    description: "Moisture index",
});
export const LDRAIN = new SOIL("LDRAIN", {
    storeInTimestream: false,
});

export const soil = new ENV("SOIL", { storeInTimestream: false }, [
    T,
    EC,
    NORM_ER,
    VWC,
    MATRIX_POTENTIAL,
    capacitance,
]);
