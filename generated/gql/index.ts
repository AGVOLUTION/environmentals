/*
 * THIS IS A GENERATED FILE. DO NOT EDIT !!!
*/
import "reflect-metadata"

export * as ENVEnums from './ENV'
export * as DEVEnums from './DEV'
export * as OBJEnums from './OBJ'
export * as SATEnums from './SAT'
export * as TOPOEnums from './TOPO'

import { registerEnumType } from "type-graphql";
export const EnvironmentalParameterNames = {
    ENV__ATMO__T: "ENV__ATMO__T",
    ENV__ATMO__P: "ENV__ATMO__P",
    ENV__ATMO__RH: "ENV__ATMO__RH",
    ENV__ATMO__IRRADIATION: "ENV__ATMO__IRRADIATION",
    ENV__ATMO__RADIANT_EXPOSURE: "ENV__ATMO__RADIANT_EXPOSURE",
    ENV__ATMO__RAIN: "ENV__ATMO__RAIN",
    ENV__ATMO__ETO: "ENV__ATMO__ETO",
    ENV__ATMO__ETC: "ENV__ATMO__ETC",
    ENV__ATMO__WIND__SPEED: "ENV__ATMO__WIND__SPEED",
    ENV__ATMO__WIND__GUSTINESS: "ENV__ATMO__WIND__GUSTINESS",
    ENV__ATMO__WIND__DIRECTION: "ENV__ATMO__WIND__DIRECTION",
    ENV__ATMO__SNOW__HEIGHT: "ENV__ATMO__SNOW__HEIGHT",
    ENV__ATMO__SNOW__INSULATION: "ENV__ATMO__SNOW__INSULATION",
    ENV__ATMO__SNOW__MELT: "ENV__ATMO__SNOW__MELT",
    ENV__SOIL__T: "ENV__SOIL__T",
    ENV__SOIL__EC: "ENV__SOIL__EC",
    ENV__SOIL__NORM_ER: "ENV__SOIL__NORM_ER",
    ENV__SOIL__VWC: "ENV__SOIL__VWC",
    ENV__SOIL__MATRIX_POTENTIAL: "ENV__SOIL__MATRIX_POTENTIAL",
    ENV__SOIL__BD: "ENV__SOIL__BD",
    ENV__SOIL__CEC: "ENV__SOIL__CEC",
    ENV__SOIL__CFVO: "ENV__SOIL__CFVO",
    ENV__SOIL__CLAY: "ENV__SOIL__CLAY",
    ENV__SOIL__TN: "ENV__SOIL__TN",
    ENV__SOIL__PH: "ENV__SOIL__PH",
    ENV__SOIL__SAND: "ENV__SOIL__SAND",
    ENV__SOIL__SILT: "ENV__SOIL__SILT",
    ENV__SOIL__SOC: "ENV__SOIL__SOC",
    ENV__SOIL__OCD: "ENV__SOIL__OCD",
    ENV__SOIL__OCS: "ENV__SOIL__OCS",
    ENV__SOIL__RD: "ENV__SOIL__RD",
    ENV__SOIL__TH: "ENV__SOIL__TH",
    ENV__SOIL__OM: "ENV__SOIL__OM",
    ENV__SOIL__ALB: "ENV__SOIL__ALB",
    ENV__SOIL__SAT: "ENV__SOIL__SAT",
    ENV__SOIL__FC: "ENV__SOIL__FC",
    ENV__SOIL__NFC: "ENV__SOIL__NFC",
    ENV__SOIL__DRAINF: "ENV__SOIL__DRAINF",
    ENV__SOIL__NORG: "ENV__SOIL__NORG",
    ENV__SOIL__FMIN: "ENV__SOIL__FMIN",
    ENV__SOIL__PWP: "ENV__SOIL__PWP",
    ENV__SOIL__NH4: "ENV__SOIL__NH4",
    ENV__SOIL__NO3: "ENV__SOIL__NO3",
    ENV__SOIL__MAI: "ENV__SOIL__MAI",
    ENV__SOIL__CN2BARE: "ENV__SOIL__CN2BARE",
    ENV__SOIL__LDRAIN: "ENV__SOIL__LDRAIN",
    ENV__SOIL__K2O: "ENV__SOIL__K2O",
    ENV__SOIL__K: "ENV__SOIL__K",
    ENV__SOIL__P2O5: "ENV__SOIL__P2O5",
    ENV__SOIL__P: "ENV__SOIL__P",
    ENV__SOIL__MG: "ENV__SOIL__MG",
    ENV__SOIL__CA: "ENV__SOIL__CA",
    ENV__SOIL__CACL2: "ENV__SOIL__CACL2",
    ENV__SOIL__B: "ENV__SOIL__B",
    ENV__SOIL__CU: "ENV__SOIL__CU",
    ENV__SOIL__S: "ENV__SOIL__S",
    ENV__SOIL__MN: "ENV__SOIL__MN",
    ENV__SOIL__NA: "ENV__SOIL__NA",
    ENV__SOIL__CAPACITANCE__ABSOLUTE: "ENV__SOIL__CAPACITANCE__ABSOLUTE",
    ENV__SOIL__CAPACITANCE__DIFFERENTIAL: "ENV__SOIL__CAPACITANCE__DIFFERENTIAL",
    ENV__SOIL__CAPACITANCE__A: "ENV__SOIL__CAPACITANCE__A",
    ENV__SOIL__CAPACITANCE__B: "ENV__SOIL__CAPACITANCE__B",
    ENV__SOIL__CAPACITANCE__OFFSET: "ENV__SOIL__CAPACITANCE__OFFSET",
    DEV__ENERGY__VCAP: "DEV__ENERGY__VCAP",
    DEV__ENERGY__LOWLIGHT: "DEV__ENERGY__LOWLIGHT",
    DEV__ALERT__TRIGGERED: "DEV__ALERT__TRIGGERED",
    DEV__ALERT__ARMED: "DEV__ALERT__ARMED",
    DEV__POSITION__LATITUDE: "DEV__POSITION__LATITUDE",
    DEV__POSITION__LONGITUDE: "DEV__POSITION__LONGITUDE",
    DEV__RF__RSSI: "DEV__RF__RSSI",
    DEV__RF__RSRP: "DEV__RF__RSRP",
    DEV__RF__RSRQ: "DEV__RF__RSRQ",
    DEV__RF__SINR: "DEV__RF__SINR",
    DEV__SOILSENSOR__ID: "DEV__SOILSENSOR__ID",
    OBJ__LIQUIDLEVEL: "OBJ__LIQUIDLEVEL",
    OBJ__WEIGHT: "OBJ__WEIGHT",
    SAT__SEN1__ASC: "SAT__SEN1__ASC",
    SAT__SEN1__DESC: "SAT__SEN1__DESC",
    SAT__SEN2__NDVI: "SAT__SEN2__NDVI",
    SAT__SEN2__RGB: "SAT__SEN2__RGB",
    SAT__SEN2__KC: "SAT__SEN2__KC",
    SAT__SEN2__CIGREEN: "SAT__SEN2__CIGREEN",
    SAT__SEN2__SAVI: "SAT__SEN2__SAVI",
    SAT__SEN2__WDVI: "SAT__SEN2__WDVI",
    TOPO__TWI: "TOPO__TWI",
    TOPO__DEM: "TOPO__DEM",
    TOPO__SLOPE: "TOPO__SLOPE",
    TOPO__EXPOSITION: "TOPO__EXPOSITION",
    MODEL__NUM__ENV__ATMO__SNOW__HEIGHT__SNOW_MAUS: "MODEL__NUM__ENV__ATMO__SNOW__HEIGHT__SNOW_MAUS",
    MODEL__NUM__ENV__ATMO__SNOW__INSULATION__SNOW_MAUS: "MODEL__NUM__ENV__ATMO__SNOW__INSULATION__SNOW_MAUS",
    MODEL__NUM__ENV__ATMO__SNOW__MELT__SNOW_MAUS: "MODEL__NUM__ENV__ATMO__SNOW__MELT__SNOW_MAUS",
    MODEL__NUM__ENV__ATMO__ETO__ETO: "MODEL__NUM__ENV__ATMO__ETO__ETO",
    MODEL__IMG__ENV__ATMO__ETC__ETC: "MODEL__IMG__ENV__ATMO__ETC__ETC"
} as const;
registerEnumType(EnvironmentalParameterNames, { name: "EnvironmentalParameterNames" });


export const EnumObject = {
    "ENV": {
        "ATMO": {
            "T": "T",
            "P": "P",
            "RH": "RH",
            "IRRADIATION": "IRRADIATION",
            "RADIANT_EXPOSURE": "RADIANT_EXPOSURE",
            "RAIN": "RAIN",
            "ETO": "ETO",
            "ETC": "ETC",
            "WIND": {
                "SPEED": "SPEED",
                "GUSTINESS": "GUSTINESS",
                "DIRECTION": "DIRECTION"
            },
            "SNOW": {
                "HEIGHT": "HEIGHT",
                "INSULATION": "INSULATION",
                "MELT": "MELT"
            }
        },
        "SOIL": {
            "T": "T",
            "EC": "EC",
            "NORM_ER": "NORM_ER",
            "VWC": "VWC",
            "MATRIX_POTENTIAL": "MATRIX_POTENTIAL",
            "BD": "BD",
            "CEC": "CEC",
            "CFVO": "CFVO",
            "CLAY": "CLAY",
            "TN": "TN",
            "PH": "PH",
            "SAND": "SAND",
            "SILT": "SILT",
            "SOC": "SOC",
            "OCD": "OCD",
            "OCS": "OCS",
            "RD": "RD",
            "TH": "TH",
            "OM": "OM",
            "ALB": "ALB",
            "SAT": "SAT",
            "FC": "FC",
            "NFC": "NFC",
            "DRAINF": "DRAINF",
            "NORG": "NORG",
            "FMIN": "FMIN",
            "PWP": "PWP",
            "NH4": "NH4",
            "NO3": "NO3",
            "MAI": "MAI",
            "CN2BARE": "CN2BARE",
            "LDRAIN": "LDRAIN",
            "K2O": "K2O",
            "K": "K",
            "P2O5": "P2O5",
            "P": "P",
            "MG": "MG",
            "CA": "CA",
            "CACL2": "CACL2",
            "B": "B",
            "CU": "CU",
            "S": "S",
            "MN": "MN",
            "NA": "NA",
            "CAPACITANCE": {
                "ABSOLUTE": "ABSOLUTE",
                "DIFFERENTIAL": "DIFFERENTIAL",
                "A": "A",
                "B": "B",
                "OFFSET": "OFFSET"
            }
        }
    },
    "DEV": {
        "ENERGY": {
            "VCAP": "VCAP",
            "LOWLIGHT": "LOWLIGHT"
        },
        "ALERT": {
            "TRIGGERED": "TRIGGERED",
            "ARMED": "ARMED"
        },
        "POSITION": {
            "LATITUDE": "LATITUDE",
            "LONGITUDE": "LONGITUDE"
        },
        "RF": {
            "RSSI": "RSSI",
            "RSRP": "RSRP",
            "RSRQ": "RSRQ",
            "SINR": "SINR"
        },
        "SOILSENSOR": {
            "ID": "ID"
        }
    },
    "OBJ": {
        "LIQUIDLEVEL": "LIQUIDLEVEL",
        "WEIGHT": "WEIGHT"
    },
    "SAT": {
        "SEN1": {
            "ASC": "ASC",
            "DESC": "DESC"
        },
        "SEN2": {
            "NDVI": "NDVI",
            "RGB": "RGB",
            "KC": "KC",
            "CIGREEN": "CIGREEN",
            "SAVI": "SAVI",
            "WDVI": "WDVI"
        }
    },
    "TOPO": {
        "TWI": "TWI",
        "DEM": "DEM",
        "SLOPE": "SLOPE",
        "EXPOSITION": "EXPOSITION"
    }
}
export const StoreInTimestreamParameters = [
    "ENV__ATMO__T",
    "ENV__ATMO__P",
    "ENV__ATMO__RH",
    "ENV__ATMO__IRRADIATION",
    "ENV__ATMO__RADIANT_EXPOSURE",
    "ENV__ATMO__RAIN",
    "ENV__ATMO__WIND__SPEED",
    "ENV__ATMO__WIND__GUSTINESS",
    "ENV__ATMO__WIND__DIRECTION",
    "ENV__SOIL__T",
    "ENV__SOIL__EC",
    "ENV__SOIL__NORM_ER",
    "ENV__SOIL__VWC",
    "ENV__SOIL__MATRIX_POTENTIAL",
    "ENV__SOIL__CAPACITANCE__ABSOLUTE",
    "ENV__SOIL__CAPACITANCE__DIFFERENTIAL",
    "ENV__SOIL__CAPACITANCE__A",
    "ENV__SOIL__CAPACITANCE__B",
    "ENV__SOIL__CAPACITANCE__OFFSET",
    "DEV__ENERGY__VCAP",
    "DEV__ENERGY__LOWLIGHT",
    "DEV__RF__RSSI",
    "DEV__RF__RSRP",
    "DEV__RF__RSRQ",
    "DEV__RF__SINR",
    "OBJ__LIQUIDLEVEL",
    "OBJ__WEIGHT"
] as const
export const ModelNames = {
/**
 * Provides
  - ENV__ATMO__SNOW__HEIGHT
  - ENV__ATMO__SNOW__INSULATION
  - ENV__ATMO__SNOW__MELT
 */
SNOW_MAUS:'SNOW_MAUS',
/**
 * Provides
  - ENV__ATMO__ETO
 */
ETO:'ETO',
/**
 * Provides
  - ENV__ATMO__ETC
 */
ETC:'ETC'} as const
