import { atmo } from "./atmo";
import { ENV } from "./base";
import { soil } from "./soil";

export const env = new ENV("ENV", {}, [atmo, soil]);
