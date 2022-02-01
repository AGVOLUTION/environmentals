import { degC, hPa, Jpm2, mm, percent } from "../../../unit";
import { ATMO } from "./base";

export const T = new ATMO("T", {
    unit: degC,
    description: "Atmospheric temperature",
    translation: {
        "de-de": "Temperatur",
        "en-us": "temperature",
    },
});
export const P = new ATMO("P", {
    unit: hPa,
    description: "Atmospheric pressure",
    translation: {
        "de-de": "Druck",
        "en-us": "pressure",
    },
});
export const RH = new ATMO("RH", {
    unit: percent,
    description: "Relative humidity",
    translation: { "de-de": "Relative Luftfeuchtigkeit", "en-us": "relative humidity" },
});
export const IRRADIATION = new ATMO("IRRADIATION", {
    unit: Jpm2,
    description:
        "Irradiation, usually expressed as radiation power per surface after traversing the atmosphere - if not otherwise noted",
    translation: { "de-de": "Globale Strahlung", "en-us": "irradiation" },
});
export const RAIN = new ATMO("RAIN", { translation: { "de-de": "Regen", "en-us": "rain" }, unit: mm });

export class WIND extends ATMO {}
export const SPEED = new WIND("SPEED", {
    translation: { "de-de": "Windgeschwindigkeit", "en-us": "wind speed" },
});
export const GUSTINESS = new WIND("GUSTINESS", {
    translation: { "de-de": "Windböe", "en-us": "wind gustiness" },
});
export const DIRECTION = new WIND("DIRECTION", {
    translation: { "de-de": "Windrichtung", "en-us": "wind direction" },
});
export const wind = new ATMO("WIND", { translation: { "de-de": "Wind", "en-us": "wind" } }, [
    SPEED,
    GUSTINESS,
    DIRECTION,
]);

export class SNOW extends ATMO {}
export const HEIGHT = new SNOW("HEIGHT", {
    translation: { "de-de": "Schneehöhe", "en-us": "snow height" },
});
export const INSULATION = new SNOW("INSULATION", {
    translation: { "de-de": "Schneeisolierung", "en-us": "snow insulation" },
});
export const MELT = new SNOW("MELT", {
    translation: { "de-de": "Schneeschmelze", "en-us": "snow melt" },
});
export const snow = new ATMO("SNOW", { translation: { "de-de": "Schnee", "en-us": "snow" } }, [
    HEIGHT,
    INSULATION,
    MELT,
]);

export const atmo = new ATMO("ATMO", {}, [T, P, RH, IRRADIATION, RAIN, wind, snow]);
