import { DEV } from "../base";

export class SOILSENSOR extends DEV {}

/**
 * Identifier of the soil moisture sensor attached to a device. Not an environmental
 * measurement itself; carried in the payload so readings can be attributed to the sensor.
 */
export const ID = new SOILSENSOR("ID", {
    description:
        "The ID (=serial number or EUI) of the Agvolution Soil Moisture sensor.",
});

export const soilsensor = new SOILSENSOR("SOILSENSOR", {}, [ID]);
