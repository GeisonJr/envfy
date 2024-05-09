<p align="center">
  <a href="https://geison.dev/">
    <img width="100" src="https://geison.dev/assets/icons/logo.svg" alt="Logo" />
  </a>
</p>

<h1 align="center">
	Environment Variables Library
</h1>
<div align="center">

Easy to use, fast and lightweight library for Node.js.

<a>
	<img src="https://img.shields.io/github/license/geisonjr/envfy?style=flat" alt="MIT Licence" />
</a>
<a href="https://www.npmjs.com/package/@geisonjr/envfy">
	<img src="https://img.shields.io/npm/v/@geisonjr/envfy?style=flat-square" alt="NPM version" />
</a>
<a href="https://www.npmjs.com/package/@geisonjr/envfy">
	<img src="https://img.shields.io/npm/dt/@geisonjr/envfy?style=flat-square" alt="NPM downloads" />
</a>
</div>

> [!WARNING]
> This project is under development and is not yet ready for use.

## 🌱 Overview

The `.env` files are used to define environment variables for the project. The following files are used to manage configurations for different environments, such as development, testing, and production.

This structure enables a clear and organized approach to managing configurations, making it easier to customize settings for specific environments while maintaining a consistent setup for shared configurations

## ✨ Features

- [x] `process.env` variables
- [x] `.env` and `.env.local` files
- [x] `.env.${NODE_ENV}` and `.env.${NODE_ENV}.local` files
- [x] Default, required and strict values
- [x] Get value as array, boolean, number, string
- [ ] Get value as date, object, url

## 🚀 Tecnologies

The following tools were used in the construction of the project:

- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## 📦 Install

Use the package manager [npm](https://docs.npmjs.com/),
[yarn](https://classic.yarnpkg.com/lang/en/docs/).

```bash
npm install @geisonjr/envfy
```

```bash
yarn add @geisonjr/envfy
```

## 📋 Environment Files

> [!TIP]
> Both `.env` and `.env.local` files are loaded across all environments, providing a foundation for common configurations.

> [!IMPORTANT]
> These base configuration files reside in the root of the project.

> [!IMPORTANT]
> The prority of the environment variables is as follows:
>
> 1. `process.env` - default environment variables from the `OS`
> 2. `.env` - overrides `process.env`
> 3. `.env.local` - overrides `.env`
> 4. `.env.${NODE_ENV}` - overrides `.env.local`
> 5. `.env.${NODE_ENV}.local` - overrides `.env.${NODE_ENV}`

### Base Files

`.env`: Default environment variables.

### Environment-Specific Files

The `.env*` files are selected based on the `NODE_ENV` environment variable, allowing tailored configurations for different deployment scenarios.

`.env.${NODE_ENV}`: Environment-specific settings.

#### Example

In the following example, the `.env.development` file is used to define environment variables for the development environment when the `NODE_ENV` environment variable is set to `development`.

```.env
NODE_ENV=development
```

```.env
# .env.development
ENV_VAR_STRING=development-value
ENV_VAR_NUMBER=456
```

### Local Overrides

The `.env*.local` files are used to override configurations for local development, providing a way to customize settings without affecting the shared configurations.

> [!CAUTION]
> The `.env*.local` files are not committed to the version control system, as they are intended for local overrides. This practice ensures that the local environment settings do not interfere with the shared configurations.

## 🏗️ Usage

### Use environment variables directly from `process.env`

Create a `.env` file in the root of your project and add your environment variables.

```.env
ENV_VAR_STRING=my-value // Can also use double quotes
ENV_VAR_NUMBER=123 // Can also use floating point numbers
ENV_VAR_BOOLEAN=true // "true", "yes", "y", "1", "on" are considered true
```

> [!TIP]
> The following types are supported:
>
> - `array` - Can also use double quotes
>   - `1;2;3` or `"1;2;3"`
> - `boolean` - Can also use double quotes, Case insensitive
>   - Truthy: `true`, `yes`, `y`, `1`, `on`.
>   - Falsy: `false`, `no`, `n`, `0`, `off`.
> - `number` - Can also use double quotes
>   - `123`
>   - `123,456.789`
> - `string` - Can also use double quotes
>   - `my-value` or `"my-value"`

Import the package in your code and use the environment variables.

```typescript
import '@geisonjr/envfy/config'

// Environment variables are now available in process.env
process.env.ENV_VAR_STRING // 'my-value'
process.env.ENV_VAR_NUMBER // '123'
process.env.ENV_VAR_BOOLEAN // 'true'
```

### How use the `Env` class

```typescript
import * as envfy from '@geisonjr/envfy'

// Get value as boolean
envfy.boolean('ENV_VAR_BOOLEAN') // true
// Get value as number
envfy.number('ENV_VAR_NUMBER') // 123
// Get value as string
envfy.string('ENV_VAR_STRING') // 'my-value'
```

### How use default values

```typescript
import * as envfy from '@geisonjr/envfy'

// Get value as boolean with default value
envfy.boolean('ENV_VAR_NOT_EXISTS', true) // true
// Get value as number with default value
envfy.number('ENV_VAR_NOT_EXISTS', 123.45) // 123.45
// Get value as string with default value
envfy.string('ENV_VAR_NOT_EXISTS', 'default-value') // 'default-value'
```

## 📋 License

This project is under the
[MIT License](https://github.com/geisonjr/envfy/blob/master/LICENSE)
