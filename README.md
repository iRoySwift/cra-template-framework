# cra-template-framework

Template for [Create React App](https://create-react-app.dev) supporting [TypeScript](https://www.typescriptlang.org) with [Prettier](https://prettier.io) and [ESlint](https://eslint.org) config recommended by [react-app](https://www.npmjs.com/package/eslint-config-react-app).

## React 17

> Use a new version of React 17 even without new features, now importing `React` into JSX files is optional.
> In addition to making things simpler with automatic injection of the JSX transformer, it also reduces the file size. [Read more...](https://reactjs.org/blog/2020/10/20/react-v17.html)

Before

```jsx
import React from "react"; // Required

function MyComponent() {
  return <div>Hello Developers!</div>;
}
```

Now

```jsx
function MyComponent() {
  return <div>Hello Developers!</div>;
}
```

## Prerequisites

- [Node.js](https://nodejs.org)

## Installation

Creating a [React](https://reactjs.org) project using a custom template.

```sh
npx create-react-app myapp --template cra-template-framework
```

## After Installation

The CRA Custom Template does not yet have support for `devDependencies`, so I recommend edit your `package.json` to like this:

```json
{
  "name": "cra-template-framework",
  "version": "0.1.0",
  "private": true,
  "description": "Template for Create React App supporting TypeScript with Prettier and ESlint config recommended by react-app.",
  "dependencies": {
    "i18next": "^21.6.12",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-i18next": "^11.15.5",
    "react-router-dom": "^6.2.2",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3"
  },
  "devDependencies": {
    "@babel/plugin-proposal-decorators": "^7.17.2",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.4.1",
    "@types/node": "^17.0.21",
    "@types/react": "^17.0.39",
    "@types/react-dom": "^17.0.12",
    "@types/styled-components": "^5.1.24",
    "babel-plugin-import": "^1.13.3",
    "customize-cra": "^1.0.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "husky": "^7.0.4",
    "prettier": "^2.5.1",
    "react-app-rewired": "^2.2.1",
    "stylelint": "^14.5.3",
    "stylelint-config-recommended": "^7.0.0",
    "stylelint-config-styled-components": "^0.1.1",
    "stylelint-processor-styled-components": "^1.10.0",
    "typescript": "~4.1.6",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject",
    "lint": "eslint src/**/*.{ts,tsx} --fix",
    "lint:css": "stylelint src/**/*.tsx"
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint && yarn lint:css"
    }
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## License

[MIT](https://choosealicense.com/licenses/mit)
