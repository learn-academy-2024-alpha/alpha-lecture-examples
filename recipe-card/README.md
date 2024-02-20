# React State

- the most important concept in React!

- state -> condition of thing at specific point in time.

- a component's memory - allows comp to hold data over time

1. update component's view
2. persist local variable b/w renders

How to use it

1. add a state variable
2. use that var in our code
3. update piece of state (the variable)

useState(argument) - React Hook - takes one argument, returns array containing 2 elements: [stateVariable, setterFunction]
destructured it looks like this:

const [stateVariable, setStateVariable] = useState(initialValueOfStateVariable)

Important things to remember:

- use the tools React gives us!
- only update state using setter method from useState - tied directly to that state variable
- useState rerender the component
- keep UI in sync with the data
- if you have a value that can change put it in state
