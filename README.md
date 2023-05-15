# react-night-and-day

This is a simple React library for switching between light and dark themes.

It respects the user preference set in their browser, detects
changes to that preference, and allows the theme to be toggled
manually.

As well as toggling between `light` and `dark` themes it allows you to define
your own theme variants.

It also supports an option to store the user's selected theme (and any
variant) in local storage so the site "remembers" their preferences for the
next time they visit.

## Documentation and Demos

See the [documentation site](https://abw.github.io/react-night-and-day/)
for a demo and detailed documentation.

## Getting Started

Add the `@abw/react-night-and-day` module to your project using your favourite
package manager.

```bash
## using npm
$ npm add @abw/react-night-and-day

## using yarn
$ yarn add @abw/react-night-and-day

## using pnpm
$ pnpm add @abw/react-night-and-day
```

## ThemeProvider

Add the `ThemeProvider` around your application code.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import YourAppCode from './YourAppCode.jsx'
import { ThemeProvider } from '@abw/react-night-and-day'

ReactDOM
  .createRoot( document.getElementById('root') )
  .render(
    <React.StrictMode>
      <ThemeProvider>   {/* add this */}
        <YourAppCode/>
      </ThemeProvider>  {/* and this */}
    </React.StrictMode>,
  )
```

## useTheme()

Call `useTheme()` to access the theme state and functions to change the theme.

```jsx
import React from 'react'
import { useTheme } from '@abw/react-night-and-day'

const UseThemeExample = () => {
  const {
    theme,        // 'light' or 'dark'
    isDark,       // true if dark theme selected
    isLight,      // true if light theme selected
    setDark,      // set theme to 'dark'
    setLight,     // set theme to 'light'
    toggleTheme,  // toggle theme between 'light' and 'dark'
  } = useTheme()

  return (
    <>
      <p>
        The theme is currently {theme}.<br/>
        It {isLight ? 'is' : 'is not'} light.<br/>
        It {isDark  ? 'is' : 'is not'} dark.<br/>
      </p>
      <button onClick={setLight}>Set Light</button>
      <button onClick={setDark}>Set Dark</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default UseThemeExample
```

## Notes for Maintainers

Check out the repository.

```bash
$ git clone https://github.com/abw/react-night-and-day.git
$ cd react-night-and-day
```

Install the dependencies.

```bash
$ pnpm install
```

To run the development server.

```bash
$ pnpm dev
```

To run the tests.

```bash
$ pnpm test
```

To build for production.

```bash
$ pnpm build
```

To build the documentation.

```bash
$ pnpm build:docs
```

To preview the documentation.

```bash
$ pnpm preview
```

Check source code for formatting errors.

```bash
$ pnpm lint
```


## Project Structure

The main project code is in the `lib` directory.  The `index.jsx` is the
main entry point.

Running `pnpm build` creates a production build in the `dist`
directory.

The `src` directory contains the web site for development, testing and
documentation.  The `index.html` is the main entry point.

Running `pnpm dev` runs a development web server for the site.

Running `pnpm build:docs` builds the site and saves the bundled
output in the `docs` directory.  Any additional resources in the `public`
directory will be included in there.

The `styles` directory contains SASS stylesheets used by the web site.
The `main.scss` file is the main stylesheet which is imported into
`src/main.jsx`.

The `test` directory contains test scripts which will be run by
`pnpm test`.  The `test/setup.js` file is a special setup file.
Any files in `test/lib` are assumed to be components used by tests and
are not test scripts in their own right.  They are ignored by the test
runner.

## Author

Andy Wardley