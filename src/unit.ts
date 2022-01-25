export const Languages = ["en", "de"] as const;
export type Language = typeof Languages[number];
export type Locale = Record<Language, string>;

export class Unit {
    public readonly symbol: string;
    public readonly _locale?: Locale;

    public get locale() {
        if (!this._locale) {
            return Languages.reduce<Locale>((prev, curr) => {
                prev[curr] = this.symbol;
                return prev;
            }, {} as Locale);
        }
        return this._locale;
    }

    constructor(name: string, locale?: Locale) {
        this.symbol = name;
        this._locale = locale;
    }

    public toString() {
        return `Unit '${this.locale.en}' (${this.symbol})`;
    }
}

export const degC = new Unit("°C");
export const kelvin = new Unit("K");
export const percent = new Unit("%", { de: "Prozent", en: "percent" });
export const hPa = new Unit("hPa");
export const Jpm2 = new Unit("J/m²");
export const mm = new Unit("mm");
export const yesno = new Unit("yes/no");
