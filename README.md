# zara.e2e

## Basic Setup

- User needs node.js and npm in their machine
- tsconfig is set for node12 by default [https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping]

## Installation

- `npm i` to install all

## How to run tests?

- `npx playwright test` - Running all tests
- `npx playwright test login.spec.js` - Running a single test file
- `npx playwright test -g "some test name"` - Run the test with the title
- `npx playwright test -g "some test name" --repeat-each=10` - Run the test with the title and repeat it 10 times

## How to run Codegen?

- `npx playwright codegen https://conduit.mate.academy/` - to run codegen

## Useful links

- `https://playwright.dev/` - Playwright-test documentation
- `https://trace.playwright.dev/` - Trace viewer

## Playwright TestCases

- Open Folder _tests_ and start writing testcases
- Use only Javascript for your testcase
- A testcase should look like below

```typescript
test.describe('User Authentication', () => {


  test('Register new user', async () => {

  });
  ...
```

## .vscode

- This project comes with some recommended extensions and settings
- settings will be auto applied
- To use recommended extensions, install them using Extensions icon on the left dock

## Used tools

- [microsoft/playwright](https://github.com/microsoft/playwright) - Playwright-test repo

version of playwright image could be changed during time, and it depends on playwright version
