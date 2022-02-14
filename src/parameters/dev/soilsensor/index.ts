import { DEV } from "../base";

export class SOILSENSOR extends DEV {}

/**
 * Identifier of the soil moisture sensor attached to a device. Not an environmental
 * measurement itself; carried in the payload so readings can be attributed to the sensor.
 */
export const ID = new SOILSENSOR("ID", {
    description:
        "The ID (=serial number or EUI) of the Agvolution Soil Moisture sensor.",
    storeInTimestream: false,
    translation: {
        "de-de": "Bodenfeuchtesensor ID",
        "en-us": "Soil Moisture Sensor ID",
    },
});

export const soilsensor = new SOILSENSOR(
    "SOILSENSOR",
    { storeInTimestream: false },
    [ID]
);
