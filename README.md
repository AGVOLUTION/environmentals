# Environmentals

This is the central repository containing all definitions and documentation for
our environmental parameters.

<a href="https://github.com/AGVOLUTION/environmentals/blob/master/docs/parameter-tree.svg?raw=true"><img src="./docs/parameter-tree.svg"></img></a>

An overview over the existing parameters can be found in
[Documentation](./documentation.md)

## Usage

As a user of this package your most probably will start with `deserialize`.
This function takes a FQN (t.ex. `ENV__ATMO__T`) and returns the respective
object. If you want to serialize such an object back to a string, you can use
the objects attribute `.fqn`.
