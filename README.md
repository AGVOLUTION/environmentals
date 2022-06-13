# Environmentals

This is the central repository containing all definitions and documentation for
our environmental parameters.

[API Documentation](./documentation/environmentals.md)

<a href="https://github.com/AGVOLUTION/environmentals/blob/master/docs/parameter-tree.svg?raw=true"><img src="./docs/parameter-tree.svg"></img></a>

An overview over the existing parameters can be found in
[Documentation](./documentation.md)

## Explanation

This package contains names and definitions for parameters that can either be
measured/observed in 'the real world' (like the temperature or wind speed) or
can be calculated by a model.

The parameters are structured in a tree, where the actual parameters are the
leafs and all intermediate nodes are categories.
A parameter has a name (t.ex. `T` for temperature) and a Fully Qualified Name
(FQN) which contains all categories it belongs to. In this example this would be
`ENV__ATMO__T`. There we can see that the parameter `T` belongs to the
categories `ATMO` and `ENV`.
The FQN is the canonical (unique) string representation of a parameter.

The nodes (especially the leafs) have more data attached to them, for example a
human readable name (like 'Air temperature'), a unit and possibly more info.

## Usage

As a user of this package your most probably will start with `deserialize`.
This function takes a Fully Qualified Name (FQN) (t.ex. `ENV__ATMO__T`) and returns the respective
object. This object gives you access to the data and possibly more functionality
for the respective parameter.
If you want to serialize such an object back to a string, you can use the objects
attribute `.fqn`.

## Adding/modifying parameters

Please [create a new issue](https://github.com/AGVOLUTION/environmentals/issues/new/choose) and
choose the proper template to either add a new parameter or modify an existing
one.
