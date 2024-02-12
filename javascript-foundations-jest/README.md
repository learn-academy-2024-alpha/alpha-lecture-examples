# JEST 2/12/24

Process:

<!-- create directory
    add test.js file
    yarn add jest
     -->

# Test Driven Development (TDD)

## Red - Green - Refactor

1. Write your test first!
2. Run your testing suite to see a FAILING test (RED)
3. Write code
4. Run tests again and see it pass (GREEN)
5. Refactor (if necessary)

6. write the test first

# syntax:

```javacript
describe("functionName", () => {
  it("short description of what fxn should do", () => {
    expect(functionName(input)).toEqual(output)
  })
} )
```
