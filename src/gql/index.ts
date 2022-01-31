/*
 * THIS IS A GENERATED FILE. DO NOT EDIT !!!
*/
export * as ENVEnums from './ENV'
export * as DEVEnums from './DEV'
export * as MODELEnums from './MODEL'
export * as OBJEnums from './OBJ'

import { registerEnumType } from "type-graphql";
export const EnvironmentalParameterNames = {
    ENV__ATMO__T: "ENV__ATMO__T",
    ENV__ATMO__P: "ENV__ATMO__P",
    ENV__ATMO__RH: "ENV__ATMO__RH",
    ENV__ATMO__IRRADIATION: "ENV__ATMO__IRRADIATION",
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
    ENV__SOIL__CAPACITANCE__ABSOLUTE: "ENV__SOIL__CAPACITANCE__ABSOLUTE",
    ENV__SOIL__CAPACITANCE__DIFFERENTIAL: "ENV__SOIL__CAPACITANCE__DIFFERENTIAL",
    ENV__SOIL__CAPACITANCE__LEG_A: "ENV__SOIL__CAPACITANCE__LEG_A",
    ENV__SOIL__CAPACITANCE__LEG_B: "ENV__SOIL__CAPACITANCE__LEG_B",
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
    MODEL__NUM__ENV__ATMO__SNOW__HEIGHT: "MODEL__NUM__ENV__ATMO__SNOW__HEIGHT",
    MODEL__NUM__ENV__ATMO__SNOW__MELT: "MODEL__NUM__ENV__ATMO__SNOW__MELT",
    MODEL__NUM__ENV__ATMO__SNOW__INSULATION: "MODEL__NUM__ENV__ATMO__SNOW__INSULATION",
    OBJ__LIQUIDLEVEL: "OBJ__LIQUIDLEVEL",
    OBJ__WEIGHT: "OBJ__WEIGHT"
};
registerEnumType(EnvironmentalParameterNames, { name: "EnvironmentalParameterNames" });


export const EnumObject = {
    "ENV": {
        "ATMO": {
            "T": "T",
            "P": "P",
            "RH": "RH",
            "IRRADIATION": "IRRADIATION",
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
            "CAPACITANCE": {
                "ABSOLUTE": "ABSOLUTE",
                "DIFFERENTIAL": "DIFFERENTIAL",
                "LEG_A": "LEG_A",
                "LEG_B": "LEG_B",
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
        }
    },
    "MODEL": {
        "NUM": {
            "ENV": {
                "ATMO": {
                    "SNOW": {
                        "HEIGHT": "HEIGHT",
                        "MELT": "MELT",
                        "INSULATION": "INSULATION"
                    }
                }
            }
        }
    },
    "OBJ": {
        "LIQUIDLEVEL": "LIQUIDLEVEL",
        "WEIGHT": "WEIGHT"
    }
} 