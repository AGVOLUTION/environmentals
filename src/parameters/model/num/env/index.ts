import { atmo } from "./atmo";
import { ENV } from "./base";

export const env = new ENV("ENV", { storeInTimestream: false }, [atmo]);
