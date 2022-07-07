import { DEV } from "../base";

export class ALERT extends DEV {}

export const TRIGGERED = new ALERT("TRIGGERED", {
    storeInTimestream: false,
    description: "A device alert (motion, theft detection) was triggered",
    translation: { "de-de": "Alarm ausgelöst", "en-us": "Alarm triggered" },
    format: "d",
});
export const ARMED = new ALERT("ARMED", {
    storeInTimestream: false,
    description:
        "The internal alert (motion, theft detection) is active and listening for trigger events",
    translation: { "de-de": "Alarm aktiv", "en-us": "Alarm active" },
    format: "d",
});

export const alert = new ALERT("ALERT", { storeInTimestream: false }, [
    TRIGGERED,
    ARMED,
]);
