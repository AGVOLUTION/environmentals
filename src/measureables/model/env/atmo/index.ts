import { degC, hPa, Jpm2, mm, percent, yesno } from "../../../../unit";
import { ENV } from "../base";

export class ATMO extends ENV {}

export class SNOW extends ATMO {}
export const HEIGHT = new SNOW("HEIGHT", { description: "Snow height" });
export const MELT = new SNOW("MELT", {});
export const INSULATION = new SNOW("INSULATION", {
    description:
        "Indicates it there was an insulation induced by the snow layer",
    unit: yesno,
});
export const snow = new ATMO("SNOW", {}, [HEIGHT, MELT, INSULATION]);

export const atmo = new ENV("ATMO", {}, [snow]);
