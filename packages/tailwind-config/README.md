# Fabric Tailwind config

Fabric's [Tailwind](https://tailwindcss.com/) configuration.

You can use this as a base if you want to customize the generated Tailwind classes. See the
[Tailwind presets documentation](https://tailwindcss.com/docs/presets) for more information.

**Note that for FINN pages, utilities should never be removed from this preset. Components and podlets may
assume that the utilities defined here are available. You can however, include further utilities if you
like.**

## Install

```sh
npm install @finn-no/fabric-tailwind-config
```

## Usage

```js
// tailwind.config.js
module.exports = {
    presets: [require('@finn-no/fabric-tailwind-config')],
    // ...
};
```
