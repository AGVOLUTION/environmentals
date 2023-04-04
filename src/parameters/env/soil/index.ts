import { SOIL } from "./base";
import {
    cbar,
    cm3pdm3,
    degC,
    gp100g,
    gpkg,
    gpml,
    kgpdm3,
    kgpha,
    kgpm3,
    mm,
    mmcpkg,
    mmpmm,
    percent,
    ph,
    µSpcm,
} from "../../../unit";
import { ENV } from "../base";
import { AGV, AG_BODEN, H2O, KCL, VDLUFA_CAL, VDLUFA_CAT } from "./models";
import { capacitance } from "./capacitance";
import { SoilTypeNames } from "./soilTypes";

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
export const FTSW = new SOIL("FTSW", {
    storeInTimestream: true,
    translation: {
        "de-de": "Nutzbare Feldkapazität",
        "en-us": "Fraction of Transpirable Soil Water",
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

// physical Parameters, originally for/from isric {{{
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
    unit: gp100g,
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
export const RT = new SOIL("RT", {
    storeInTimestream: false,
    description: "Maxiumum rooting thickness",
    unit: mm,
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
    models: [AG_BODEN],
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

export const ALB = new SOIL("ALB", {
    storeInTimestream: false,
    description: "Soil albedo",
    models: [AGV],
});
export const SAT = new SOIL("SAT", {
    storeInTimestream: false,
    description: "Soil saturation",
    models: [AG_BODEN],
    unit: mmpmm,
});
export const FC = new SOIL("FC", {
    storeInTimestream: false,
    description: "Soil field capacity",
    models: [AG_BODEN],
    unit: mmpmm,
});
export const NFC = new SOIL("NFC", {
    storeInTimestream: false,
    description: "usable field capacity",
    models: [AG_BODEN],
    unit: mmpmm,
});
export const CN2BARE = new SOIL("CN2BARE", {
    storeInTimestream: false,
    description: "Runoff curve number",
    models: [AGV],
}); //}}}

// Chemical soil properties {{{
export const PH = new SOIL("PH", {
    storeInTimestream: false,
    description: "Soil pH",
    unit: ph,
    models: [H2O, KCL],
});
export const K2O = new SOIL("K2O", {
    storeInTimestream: false,
    description: "Soil K2O",
    unit: gpml,
    models: [VDLUFA_CAL],
});
export const K = new SOIL("K", {
    storeInTimestream: false,
    description: "Soil K",
    models: [VDLUFA_CAL],
});
export const P2O5 = new SOIL("P2O5", {
    storeInTimestream: false,
    description: "Soil P2O5",
    unit: gpml,
    models: [VDLUFA_CAL],
});
export const P = new SOIL("P", {
    storeInTimestream: false,
    description: "Soil P",
    models: [VDLUFA_CAL],
});
export const MG = new SOIL("MG", {
    storeInTimestream: false,
    description: "Soil MG",
});
export const CA = new SOIL("CA", {
    storeInTimestream: false,
    description: "Soil CA",
});

export const CACL2 = new SOIL("CACL2", {
    storeInTimestream: false,
    description: "Lime",
});
export const B = new SOIL("B", {
    storeInTimestream: false,
    description: "Soil Boron",
    models: [VDLUFA_CAT],
});
export const CU = new SOIL("CU", {
    storeInTimestream: false,
    description: "Soil Copper",
    models: [VDLUFA_CAT],
});
export const S = new SOIL("S", {
    storeInTimestream: false,
    description: "Soil Sulfur",
    models: [VDLUFA_CAT],
});
export const MN = new SOIL("MN", {
    storeInTimestream: false,
    description: "Soil Manganese",
    models: [VDLUFA_CAT],
});
export const NA = new SOIL("NA", {
    storeInTimestream: false,
    description: "Soil Sodium",
    models: [VDLUFA_CAT],
});
// }}}

export const EP = new SOIL("EP", {
    storeInTimestream: true,
    translation: "Evaporation",
});
export const CEP = new SOIL("CEP", {
    storeInTimestream: true,
    translation: "Cumulative Evaporation",
});
export const RUNOFF = new SOIL("RUNOFF", {
    storeInTimestream: true,
});
export const CRUNOFF = new SOIL("CRUNOFF", {
    storeInTimestream: true,
});
export const DRAIN = new SOIL("DRAIN", {
    storeInTimestream: true,
});
export const CDRAIN = new SOIL("CDRAIN", {
    storeInTimestream: true,
});
export const CNMIN = new SOIL("CNMIN", {
    storeInTimestream: true,
    translation: {
        "en-us": "Cumulative nitrogen mineralization",
        "de-de": "Kumulierte Stickstoffmineralisation",
    },
});
export const PAWC = new SOIL("PAWC", {
    storeInTimestream: false,
    description:
        "Plant available water capacity summed up over the whole profile until max rooting depth",
    unit: mm,
    translation: {
        "en-us": "Plant available water capacity",
        "de-de": "Pflanzenverfügbare Wasserkapazität",
    },
});
export const COLOR = new SOIL("COLOR", {
    storeInTimestream: false,
    description:
        "The param allows the user to enter a qualitativ descriuption of the soil color, the description follows a method/protocol. So far we have just Ag boden protocol.",
});
export const DESCRIPTION = new SOIL("DESCRIPTION", {
    storeInTimestream: false,
    description:
        "The param allows the user to enter a qualitativ descriuption of teh soil, the description follows a method/protocol. So far we have just Ag boden protocol.",
});
export const SV = new SOIL("SV", {
    storeInTimestream: false,
    description:
        "LD-Substanzvolumen (SV) classification according to German Ag-Boden",
});

export const type = new SOIL("TYPE", {
    storeInTimestream: false,
    description: "The type of the soil",
    unit: SoilTypeNames,
});

export const soil = new ENV("SOIL", { storeInTimestream: false }, [
    T,
    EC,
    NORM_ER,
    VWC,
    FTSW,
    MATRIX_POTENTIAL,
    BD,
    CEC,
    CFVO,
    CLAY,
    TN,
    PH,
    SAND,
    SILT,
    SOC,
    OCD,
    OCS,
    RT,
    RD,
    TH,
    OM,
    RD,
    ALB,
    SAT,
    FC,
    NFC,
    DRAINF,
    NORG,
    FMIN,
    PWP,
    NH4,
    NO3,
    MAI,
    CN2BARE,
    LDRAIN,
    PH,
    K2O,
    K,
    P2O5,
    P,
    MG,
    CA,
    CACL2,
    B,
    CU,
    S,
    MN,
    NA,
    capacitance,
    type,
    EP,
    CEP,
    RUNOFF,
    CRUNOFF,
    DRAIN,
    CDRAIN,
    CNMIN,
    PAWC,
    COLOR,
    DESCRIPTION,
    SV,
]);
