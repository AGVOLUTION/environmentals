import { degC, hPa, Jpm2, percent } from "../../../unit";
import { ENV } from "../base";

export class ATMO extends ENV {}
export const T = new ATMO("T", {
    unit: degC,
    description: "Atmospheric temperature",
});
export const P = new ATMO("P", {
    unit: percent,
    description: "Atmospheric pressure",
});
export const RH = new ATMO("RH", {
    unit: hPa,
    description: "Atmospheric pressure",
});
export const IRRADIATION = new ATMO("IRRADIATION", {
    unit: Jpm2,
    description:
        "Irradiation, usually expressed as radiation power per surface after traversing the atmosphere - if not otherwise noted",
});
export const RAIN = new ATMO("RAIN", {});

export class WIND extends ATMO {}
export const SPEED = new WIND("SPEED", {});
export const GUSTINESS = new WIND("GUSTINESS", {});
export const DIRECTION = new WIND("DIRECTION", {});
export const wind = new ATMO("WIND", {}, [SPEED, GUSTINESS, DIRECTION]);

export class SNOW extends ATMO {}
export const HEIGHT = new SNOW("HEIGHT", {});
export const INSULATION = new SNOW("INSULATION", {});
export const MELT = new SNOW("MELT", {});
export const snow = new ATMO("SNOW", {}, [HEIGHT, INSULATION, MELT]);

export const atmo = new ATMO("ATMO", {}, [T, P, RH, IRRADIATION, wind, snow]);
