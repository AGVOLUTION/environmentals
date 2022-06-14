/**
 * The central repository for defining parameters of data representing values observed in
 * reality or simulated by some model
 *
 * @remarks
 *
 * As a user you will most probably want to use the {@link @agv/environmentals#deserialize} function to deserialize
 * a FQN string into a {@link @agv/environmentals#Environmental} object, or one of it's concrete subclasses.
 *
 * @packageDocumentation
 */
import "reflect-metadata";
export {
    root,
    deserialize,
    tryDeserialize,
    env,
    dev,
    sat,
    initialize,
    tryFiltered,
} from "./parameters";
export {
    Environmental,
    EnvironmentalName,
    EnvironmentalProperties,
    FqnPathElements,
    FullyQualifiedName,
} from "./environmental";

export { NotFoundError } from "./errors";
export { SAT, VAP } from "./parameters/sat";
export { TOPO } from "./parameters/topo";
