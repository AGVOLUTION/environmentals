import { atmo } from "./atmo";
import { ENV } from "./base";
import { soil } from "./soil";

/**
 * The ENV subtree, containing all the environment parameters.
 *
 * @public
 */
export const env = new ENV("ENV", { storeInTimestream: false }, [atmo, soil]);
