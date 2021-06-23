
# About

This repository is developed to kickstart a project with Typescript, React, NextJS, Webpack and Express.

## Regarding Next.js

Next.js is a minimalistic React framework that runs on the browser and the server with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. It offers developers an easy way to get started, build server-side rendering and static web applications using React.

## Recommended environment

- [x] [Node.js](https://nodejs.org/) Erbium or higher (>= 12.18.3)
- [x] [NPM](https://www.npmjs.com/) Latest (>= 6.14.6)

## Getting Started

```sh
$ git clone https://github.com/chozzz/tsxpress-boilerplate.git
$ cd tsxpress-boilerplate
$ cp .env-example .env
$ npm install
$ npm run dev
```

### Running in development mode

You just need to run `npm run dev` and the development server starts automatically and also watches all the files you update during runtime, and recompiles it.
By default, the development server runs at port `3000`, which should be accessible at your `http://localhost:3000`

### Production deployment

You need to run `npm run build` to create a `/dist` folder on your root directory, which containing all static assets that you website needs to run.
Followed by `npm run start` to run the built repository that are in your `/dist` folder.

## Conventions
#### Styling

  - Strongly recommended to style with classes instead of tags or attributes.
  - Use only **lowercase alphanumeric, dash and underscore** when declaring a class styles,
  - Make use of [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to style components. Feel free to use or import mixins as webpack will remove anything that is unused.
  - **Do NOT** append styles dynamically. Unless the name is in [purgecss safelist](/postcss.config.js)


  ```tsx
  // BAD
  return (
    <div className={'mycomponent please-' + (show ? 'do-show' : 'do-not-show')}></div>
  )

  // good
  let cls = '';
  if (show) {
    cls = 'please-do-show';
  }
  else {
    cls = 'please-do-not-show';
  }

  return (
    <div className={'mycomponent ' + cls}></div>
  )

  // bad
  return (<div ref={cardCompRef} className={`expert-card-comp ${extClass}`}></div>)

  // good
  const classes = classNames('expert-card-comp', extClass);
  return (<div ref={cardCompRef} className={classes}></div>)
  ```


#### Naming
  - **Extensions**: Use `.tsx` extension for React components.
  - **Filename**: Use PascalCase for filenames. E.g., `ExpertCard.tsx`.
  - **Reference Naming**: Use PascalCase for React components and camelCase for their instances.


And to run test is simply by running `npm run test`.

### Folder Structure

```
pages/
|--- (Top level of Next pages)
server/
|--- (Custom ExpressJS server to run NextJS in both development and production build)
src/
|--- app/
    |--- components/
    |--- hocs/
    |--- http/
    |--- models/
    |--- state/
        |--- ducks/
            |--- (e.g. user/)
    |--- utilities/
|--- styles/
    |--- (Related styles for the entire project. Including third-party, components, etc..)
```

## Available Scripts

- `dev` - Runs the app in **development** mode (Default is http://localhost:3000 to view it in the browser)
- `build` - Builds the app for **production**.
- `start` - Runs the app for **production** after running `build`.
- `test` - Runs the test watcher in an interactive mode.
- `lint` - Runs ESLint.
- `format` - Runs prettier



