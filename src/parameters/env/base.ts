import { EnvironmentalProperties } from "../..";
import { Environmental } from "../../environmental";
import { MODEL } from "../model/base";

export interface EnvProperties extends EnvironmentalProperties {
    models?: MODEL[];
}

export class ENV extends Environmental {
    public readonly properties: EnvProperties;
    constructor(
        name: string,
        properties: EnvProperties,
        children?: Environmental[]
    ) {
        super(name, properties, children);
        this.properties = properties;

        // Inject this into the provided models
        if (properties.models) {
            for (const model of properties.models) {
                model.provides.add(this);
            }
        }
    }

    /**
     * Return the default model for this Parameter
     *
     * The default model is always the first model provided in the models property
     *
     */
    public get model(): MODEL | undefined {
        return this.properties.models?.[0];
    }
}
