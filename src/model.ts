import { Environmental, EnvironmentalProperties } from "./environmental";
import { ENV } from "./parameters/env/base";

export class MODEL extends Environmental {
    public provides: Set<ENV> = new Set();
    constructor(
        name: string,
        properties: EnvironmentalProperties,
        children?: Environmental[]
    ) {
        super(name, properties, children);
    }

    public withParameter(requestedParameter: ENV) {
        return new RequestedModel(this, requestedParameter);
    }
}

export class RequestedModel extends MODEL {
    public readonly requestedParameter: ENV;

    constructor(model: MODEL, requestedParameter: ENV) {
        super(model.name, model.properties, model.children);
        this.requestedParameter = requestedParameter;
    }
}
