import { ATMO } from "../base";
import { height } from "./height";
import { insulation } from "./insulation";
import { melt } from "./melt";

export const snow = new ATMO("SNOW", {}, [height, insulation, melt]);
