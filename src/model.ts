import { FullyQualifiedName } from ".";
import { Environmental, EnvironmentalProperties } from "./environmental";
import { ENV } from "./parameters/env/base";

/**
 * The types of models we have
 * @public
 */
export enum ModelTypes {
    Numerical,
    Imagery,
}

/**
 * Describes a Model for a {@link ENV}
 *
 * @public
 */
export class Model extends Environmental {
    public readonly type: ModelTypes;
    public provides: Set<ENV> = new Set();
    constructor(
        type: ModelTypes,
        name: string,
        properties: EnvironmentalProperties,
        children?: Environmental[]
    ) {
        super(name, properties, children);
        this.type = type;
    }

    public withParameter(requestedParameter: ENV) {
        return new RequestedModel(this, requestedParameter);
    }

    public get fqn(): FullyQualifiedName {
        if (this.type === ModelTypes.Numerical) {
            return "MODEL__NUM";
        }
        return "MODEL__IMG";
    }
}

/**
 * A Model for a specific Environmental
 *
 * A model can provide multiple parameters. To still determine, which concrete parameter was
 * requested, this class contains a reference to the concrete parameter
 *
 * @public
 */
export class RequestedModel extends Model {
    public readonly requestedParameter: ENV;

    constructor(model: Model, requestedParameter: ENV) {
        super(model.type, model.name, model.properties, model.children);
        this.requestedParameter = requestedParameter;
    }

    public get fqn(): FullyQualifiedName {
        const paramFqn = this.requestedParameter.fqn;
        return `${super.fqn}__${paramFqn}__${this.name}`;
    }
}
