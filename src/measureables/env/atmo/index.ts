import { ENV } from "../base";
import { Measureable } from "../../../measureable";
import { degC, percent } from "../../../unit";

export class ATMO extends ENV {}
export const T = new Measureable("T", { unit: degC });
export const P = new Measureable("P", { unit: percent });

export const atmo = new ATMO("ATMO", {}, [T, P]);
