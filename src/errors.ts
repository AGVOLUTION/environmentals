/**
 * This is thrown, when the provided FQN could not be resolved as there is no Parameter with the
 * specified name.
 * @public
 */
export class NotFoundError extends Error {
    constructor(parameterName: string) {
        super(`Did not find a child with name ${parameterName}`);
        this.name = "NotFoundError";
    }
}
