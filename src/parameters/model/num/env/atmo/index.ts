import { ENV } from "../base";
import { ATMO } from "./base";
import { snow } from "./snow";

export const ETO = new ATMO("ETO", { description: "Evapotranspiration model" });
export const atmo = new ENV("ATMO", {}, [snow, ETO]);
