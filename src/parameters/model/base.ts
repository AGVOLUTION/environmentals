import { EnvironmentalProperties } from "../..";
import { Environmental } from "../../environmental";
import { ENV } from "../env/base";

//export interface ModelProperties extends EnvironmentalProperties {
//defaultModel?: MODEL;
//}

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

    /**
     * Return the default Model implementation for this parameter.
     *
     * If this parameter is a computed property (t.ex. `MODEL__NUM__ENV__ATMO__SNOW__HEIGHT`) and
     * there was a default model provided via {@see ModelProperties}, that parameter is being
     * returned (in this case it would be `MODEL__NUM__ENV__ATMO__SNOW__HEIGHT__SNOW_MAUS`)
     * If this parameter is a Leaf the method will return itsself (as this is already the concrete
     * model implementation)
     *
     * @returns Default model implementation for this calculated parameter
     */
    //public get model(): MODEL | undefined {
    //if (this.isLeaf) {
    //return this;
    //}
    //return this.properties.defaultModel;
    //}
}

export class RequestedModel extends MODEL {
    public readonly requestedParameter: ENV;

    constructor(model: MODEL, requestedParameter: ENV) {
        super(model.name, model.properties, model.children);
        this.requestedParameter = requestedParameter;
    }
}
