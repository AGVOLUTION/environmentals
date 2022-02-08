import { Locale, Translation } from "./localization";

export class Unit {
    public readonly symbol: string;
    public readonly _translation?: Translation;

    public translation(locale: Locale) {
        return this._translation?.[locale] || this.symbol;
    }

    constructor(name: string, translation?: Translation) {
        this.symbol = name;
        this._translation = translation;
    }

    public toString() {
        return `Unit '${this.translation("en-us")}' (${this.symbol})`;
    }
}

export const degC = new Unit("°C");
export const kelvin = new Unit("K");
export const percent = new Unit("%", {
    "de-de": "Prozent",
    "en-us": "percent",
});
export const hPa = new Unit("hPa");
export const Jpm2 = new Unit("J/m²");
export const mm = new Unit("mm");
export const yesno = new Unit("yes/no");
export const Wpm2 = new Unit("W/m²");
