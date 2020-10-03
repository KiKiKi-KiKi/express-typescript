# TypeScript Express

```
/app
  |-/.env
  |    |- .env.dev  # for development
  |    |- .env.prod # for production
  |- /src
  |    |- index.ts # entry point
  |- /webpack
  |    |- base.config.js
  |    |- dev.config.js
  |    |- prod.config.js
  |- nodemon.json
  |- package.json
  |- tsconfig.json
```

## Setup

```sh
$ cp .env/.env.sample .env/.env.dev
$ cp .env/.env.sample .env/.env.prod
$ npm install
```

## Development

```sh
$ npm run dev
```

### ESLint & Prettier

```sh
$ npm run format
```

## Build

#### Build development mode

```sh
$ npm run build:dev
```

#### Build production mode

```sh
$ npm run build
```
