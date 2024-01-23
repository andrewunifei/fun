# Genetic Algorithm

## Setup

Step 1: ***Initialize***: Create a population of N elements, each with randomly generated DNA.

## Draw

Step 2: ***Selection***: Evaluate the fitness of each element of the population and build a mating pool.

Step 3: ***Reproduction***: Repeat N times:

1. Pick two parents with probability according to relative fitness.
2. Crossover: create a "child" by combing the DNA of these two parents.
3. Mutation: mutate the child's DNA based on a given probability.
4. Add the new child to a new population.

Step 4: Replace the old population with the new population and return to Step 2.