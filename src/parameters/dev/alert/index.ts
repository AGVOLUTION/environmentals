import { DEV } from "../base";

export class ALERT extends DEV {}

export const TRIGGERED = new ALERT("TRIGGERED", {
    description: "A device alert (motion, theft detection) was triggered",
    storeInTimestream: true,
});
export const ARMED = new ALERT("ARMED", {
    storeInTimestream: true,
    description:
        "The internal alert (motion, theft detection) is active and listening for trigger events",
});

export const alert = new ALERT("ALERT", { storeInTimestream: false }, [
    TRIGGERED,
    ARMED,
]);
