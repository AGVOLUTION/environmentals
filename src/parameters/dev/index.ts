import { energy } from "./energy";
import { alert } from "./alert";
import { position } from "./position";
import { DEV } from "./base";
import { rf } from "./rf";

export const dev = new DEV("DEV", {}, [energy, alert, position, rf]);
