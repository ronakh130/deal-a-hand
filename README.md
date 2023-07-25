# Deal a Hand

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Starter templates available in the cloud here:
- [CodeSandbox](https://codesandbox.io/s/deal-a-hand-29q6n?file=/README.md)
- [StackBlitz](https://stackblitz.com/edit/react-6hudi7?devtoolsheight=33&file=README.md)

## Problem

Let's build an app to deal a hand of 5 cards!

There are 52 different cards in a standard deck of cards. We would like to deal multiple 5-card hands of random cards without repeating cards between hands.

Suits: Clubs, Hearts, Spades, Diamonds
Values: A,2,3,4,5,6,7,8,9,10,J,Q,K

### Part I - Generate a Hand (~25m)

- Get the value/suit combinations
- Show them in a bulleted list
- Ensure successive deals are unique

### Part II - Make it Pretty (~15m)

- Make it look more like real cards
- Style the "table" the cards are dealt onto

### Bonus

- Cards have animations
- Performance/memory optimizations
- Extra fancy CSS (shadows, patterns, etc.)

## Evaluation Rubric

- Completeness
  - Below Expectation: Basic functionality does not work, and/or has many bugs.
  - Meets Expectation: Implements the basic functionality without bugs.
  - Exceeds Expectation: Implements the basic functionality and at least one of the bonus challenges.
- UX
  - Below Expectation: UI is difficult to understand and use. Cards don't look like cards.
  - Meets Expectation: UI is easy to use and without bugs. Cards look (mostly) like cards, displaying suit and value.
  - Exceeds Expectation: UI is intuitive and easy to use. Table is nicely styled. Cards look great, including emojis, shadows, animations, etc.
- Readability & Maintainability
  - Below Expectation: Inconsistent syntax. Poor function/variable names.
  - Meets Expectation: Used a linter. Easy to understand function/variable names.
  - Exceeds Expectation: Follows React best practices. Modularized code. Comments explaining non-obvious trade-offs/future breakage. Has some test coverage for the happy path.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
