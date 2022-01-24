import {ENV} from "../base";
import {Measureable} from "../../../measureable";

export class ATMO extends ENV {}
export const T = new Measureable("T");
export const P = new Measureable("P");

export const atmo = new ATMO("ATMO", [T, P]);
