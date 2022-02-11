import { DEV } from "../base";

export class SOILSENSOR extends DEV {}

/**
 * In fact, this is not an actual environmental. However, Agvolution Weatherhead and Agvolution
 * Soil Moisture Sensor are two separate devices now. The Soil Moisture sensor requires calibration
 * parameters from the backend. These will be stored on the device to a later point in time, but at
 * the moment, we need the capability of using these parameters in the backend to compute the
 * volumetric water content VWC, and calibraiton equations might be adjusted during this development
 * phase.
 *
 * This is the reason why we submit the Soil Sensor ID in the payload. There are devices in the
 * database with those ids (e.g. 9A12331A), which do not submit environmentals by themselves, but are
 * simply used to keep the calibration parameters.
 *
 * In the end, when displaying VWC, we need to fetch.
 *
 * For requested `VWC@KEY/HEIGHT@Weatherhead`:
 * Fetch calibration from devices where device.id == Weatherhead.DEV.SOILSENSOR.ID
 *
 * Then:
 * VWC = caliibrationEquation(Weatherhead.ENV.SOIL.CAPACITANCE.*, calibration)
 */
export const ID = new SOILSENSOR("ID", {
    description:
        "The ID (=serial number or EUI) of the Agvolution Soil Moisture sensor.",
    storeInTimestream: true,
});

export const soilsensor = new SOILSENSOR(
    "SOILSENSOR",
    { storeInTimestream: false },
    [ID]
);
