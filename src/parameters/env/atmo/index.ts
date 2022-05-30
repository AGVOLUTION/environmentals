import {
    degC,
    degree,
    hPa,
    Jpm2,
    kmh,
    mmpsqm,
    percent,
    Wpm2,
} from "../../../unit";
import { ATMO } from "./base";
import * as Models from "./models";

export const T = new ATMO("T", {
    unit: degC,
    description: "Atmospheric temperature",
    translation: {
        "de-de": "Lufttemperatur",
        "en-us": "Air Temperature",
    },
    storeInTimestream: true,
    format: ".1f",
});
export const P = new ATMO("P", {
    unit: hPa,
    description: "Atmospheric pressure",
    translation: {
        "de-de": "Luftdruck",
        "en-us": "Pressure",
    },
    storeInTimestream: true,
    format: ".1f",
});
export const RH = new ATMO("RH", {
    unit: percent,
    description: "Relative humidity",
    translation: {
        "de-de": "Rel. Luftfeuchte",
        "en-us": "Rel. Humidity",
    },
    storeInTimestream: true,
    format: "d",
});
export const IRRADIATION = new ATMO("IRRADIATION", {
    unit: Wpm2,
    description:
        "Irradiance or irradiation (deutsch: Bestrahlungsstärke) is a radiation power per area (unit: W/m2). Such a measurement is specifically bound to the time of the measurement.",
    translation: { "de-de": "Bestrahlungsstärke", "en-us": "irradiation" },
    storeInTimestream: true,
    format: "d",
});
export const RADIANT_EXPOSURE = new ATMO("RADIANT_EXPOSURE", {
    description:
        "Radiant exposure (deutsch: Bestrahlung) is the radiation energy (power integrated over time) received by an area (unit: J/m2). This measurement is bound to the integration time, mostly a packet cycle.",
    unit: Jpm2,
    storeInTimestream: true,
    translation: { "de-de": "Globalstrahlung", "en-us": "Global Radiation" },
    format: ".0e",
});
export const RAIN = new ATMO("RAIN", {
    translation: { "de-de": "Niederschlag", "en-us": "Precipitation" },
    storeInTimestream: true,
    unit: mmpsqm,
    format: ".1f",
});
export const ETO = new ATMO("ETO", {
    storeInTimestream: false,
    models: [Models.ETO],
});
export const ETC = new ATMO("ETC", {
    models: [Models.ETC],
    storeInTimestream: false,
});

export class WIND extends ATMO {}
export const SPEED = new WIND("SPEED", {
    translation: { "de-de": "Windgeschwindigkeit", "en-us": "Wind Speed" },
    storeInTimestream: true,
    format: ".1f",
    unit: kmh,
});
export const GUSTINESS = new WIND("GUSTINESS", {
    translation: { "de-de": "Böigkeit", "en-us": "Gustiness" },
    storeInTimestream: true,
    format: ".1f",
    unit: kmh,
});
export const DIRECTION = new WIND("DIRECTION", {
    translation: { "de-de": "Windrichtung", "en-us": "Wind Direction" },
    storeInTimestream: true,
    format: "d",
    unit: degree,
});
export const wind = new ATMO(
    "WIND",
    {
        translation: { "de-de": "Wind", "en-us": "wind" },
        storeInTimestream: false,
    },
    [SPEED, GUSTINESS, DIRECTION]
);

export class SNOW extends ATMO {}
export const HEIGHT = new SNOW("HEIGHT", {
    translation: { "de-de": "Schneehöhe", "en-us": "snow height" },
    storeInTimestream: false,
    models: [Models.SNOW_MAUS],
});
export const INSULATION = new SNOW("INSULATION", {
    storeInTimestream: false,
    translation: { "de-de": "Schneeisolierung", "en-us": "snow insulation" },
    models: [Models.SNOW_MAUS],
});
export const MELT = new SNOW("MELT", {
    storeInTimestream: false,
    translation: { "de-de": "Schneeschmelze", "en-us": "snow melt" },
    models: [Models.SNOW_MAUS],
});
export const snow = new ATMO(
    "SNOW",
    {
        storeInTimestream: false,
        translation: { "de-de": "Schnee", "en-us": "snow" },
    },
    [HEIGHT, INSULATION, MELT]
);

export const atmo = new ATMO("ATMO", { storeInTimestream: false }, [
    T,
    P,
    RH,
    IRRADIATION,
    RADIANT_EXPOSURE,
    RAIN,
    ETO,
    ETC,
    wind,
    snow,
]);
