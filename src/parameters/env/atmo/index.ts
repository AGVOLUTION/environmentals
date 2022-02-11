import { degC, hPa, Jpm2, mm, percent, Wpm2 } from "../../../unit";
import { ATMO } from "./base";

export const T = new ATMO("T", {
    unit: degC,
    description: "Atmospheric temperature",
    translation: {
        "de-de": "Temperatur",
        "en-us": "temperature",
    },
    storeInTimestream: true,
});
export const P = new ATMO("P", {
    unit: hPa,
    description: "Atmospheric pressure",
    translation: {
        "de-de": "Druck",
        "en-us": "pressure",
    },
    storeInTimestream: true,
});
export const RH = new ATMO("RH", {
    unit: percent,
    description: "Relative humidity",
    translation: {
        "de-de": "Relative Luftfeuchtigkeit",
        "en-us": "relative humidity",
    },
    storeInTimestream: true,
});
export const IRRADIATION = new ATMO("IRRADIATION", {
    unit: Wpm2,
    description:
        "Irradiance or irradiation (deutsch: Bestrahlungsstärke) is a radiation power per area (unit: W/m2). Such a measurement is specifically bound to the time of the measurement.",
    translation: { "de-de": "Bestrahlungsstärke", "en-us": "irradiation" },
    storeInTimestream: true,
});
export const RADIANT_EXPOSURE = new ATMO("RADIANT_EXPOSURE", {
    description:
        "Radiant exposure (deutsch: Bestrahlung) is the radiation energy (power integrated over time) received by an area (unit: J/m2). This measurement is bound to the integration time, mostly a packet cycle.",
    unit: Jpm2,
    storeInTimestream: true,
    translation: { "de-de": "Bestrahlung", "en-us": "radiant exposure" },
});
export const RAIN = new ATMO("RAIN", {
    translation: { "de-de": "Regen", "en-us": "rain" },
    storeInTimestream: true,
    unit: mm,
});

export class WIND extends ATMO {}
export const SPEED = new WIND("SPEED", {
    translation: { "de-de": "Windgeschwindigkeit", "en-us": "wind speed" },
    storeInTimestream: true,
});
export const GUSTINESS = new WIND("GUSTINESS", {
    translation: { "de-de": "Windböe", "en-us": "wind gustiness" },
    storeInTimestream: true,
});
export const DIRECTION = new WIND("DIRECTION", {
    translation: { "de-de": "Windrichtung", "en-us": "wind direction" },
    storeInTimestream: true,
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
    storeInTimestream: true,
});
export const INSULATION = new SNOW("INSULATION", {
    storeInTimestream: true,
    translation: { "de-de": "Schneeisolierung", "en-us": "snow insulation" },
});
export const MELT = new SNOW("MELT", {
    storeInTimestream: true,
    translation: { "de-de": "Schneeschmelze", "en-us": "snow melt" },
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
    wind,
    snow,
]);
