import { degC, hPa, Jpm2, mm, percent } from "../../../unit";
import { ENV } from "../base";

export class ATMO extends ENV {}
export const T = new ENV("T", { unit: degC, description: "Atmospheric temperature" });
export const P = new ENV("P", { unit: percent, description: "Atmospheric pressure" });
export const RH = new ENV("RH", { unit: hPa, description: "Atmospheric pressure" });
export const IRRADIATION = new ENV("IRRADIATION", {
    unit: Jpm2,
    description:
        "Irradiation, usually expressed as radiation power per surface after traversing the atmosphere - if not otherwise noted",
});

export class RAIN extends ATMO {}
export const LATEST = new RAIN("LATEST", {
    unit: mm,
    description: "The current rainfall (since last counter reset, usually since last data packet)",
});
export const ACC = new RAIN("ACC", {
    unit: mm,
    description: "The accumulated rainfall (usually since sensor placement)",
});
export const rain = new RAIN("RAIN", {}, [LATEST, ACC]);

export class WIND extends ENV {}
export class SPD extends WIND {}
export const AVG = new SPD("AVG", {
    description:
        "Average wind speed. Obtained from multiple samples within the last packet cycle. Appropriate units: km h-1, mp h-1, m s-1.",
});
export const STD = new SPD("STD", {});
export const spd = new WIND("SPD", {}, [AVG, STD]);
export const DIR = new WIND("DIR", {});
export const wind = new ATMO("WIND", {}, [spd, DIR]);

export const atmo = new ATMO("ATMO", {}, [T, P, RH, IRRADIATION, wind]);
