import { energy } from "./energy";
import { alert } from "./alert";
import { position } from "./position";
import { DEV } from "./base";
import { rf } from "./rf";
import { soilsensor } from "./soilsensor";

export const dev = new DEV("DEV", { storeInTimestream: false }, [
    energy,
    alert,
    position,
    rf,
    soilsensor,
]);
