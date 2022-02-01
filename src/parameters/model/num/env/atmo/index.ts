import { ENV } from "../base";
import { snow } from "./snow";

export const atmo = new ENV("ATMO", {}, [snow]);
