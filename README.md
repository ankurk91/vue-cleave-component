# Vue Cleave Component

[![downloads](https://badgen.net/npm/dt/vue-cleave-component)](https://npm-stat.com/charts.html?package=vue-cleave-component&from=2018-01-01)
[![npm-version](https://badgen.net/npm/v/vue-cleave-component)](https://www.npmjs.com/package/vue-cleave-component)
[![github-tag](https://badgen.net/github/tag/ankurk91/vue-cleave-component)](https://github.com/ankurk91/vue-cleave-component/)
[![license](https://badgen.net/github/license/ankurk91/vue-cleave-component)](https://yarnpkg.com/en/package/vue-cleave-component)
[![build](https://github.com/ankurk91/vue-cleave-component/workflows/build/badge.svg)](https://github.com/ankurk91/vue-cleave-component/actions)
[![codecov](https://codecov.io/gh/ankurk91/vue-cleave-component/branch/master/graph/badge.svg)](https://codecov.io/gh/ankurk91/vue-cleave-component)

Vue.js component for [Cleave.js](http://nosir.github.io/cleave.js/)

## Demo on [JSFiddle](https://jsfiddle.net/ankurk91/aza302c7/)

### Version matrix

| Vue.js version | Package version | Branch          |
| :---           | :---:           | ---:           | 
| 2.x            | 2.x             | [2.x](https://github.com/ankurk91/vue-cleave-component/tree/v2.x) |
| 3.x            | 3.x             | master          |

## Features

* Reactive `v-model` value
    - You can change input value programmatically
* Reactive [options](https://github.com/nosir/cleave.js/blob/master/doc/options.md)
    - You can change config options dynamically
    - Component will watch for any changes and redraw itself
* Compatible with [Bootstrap](http://getbootstrap.com/), [Bulma](http://bulma.io/) or any other CSS framework
* Works with validation libraries
* Option to disable `raw` mode to get masked value

## Installation

```bash
# yarn
yarn add vue-cleave-component

# npm
npm install vue-cleave-component --save
```

## Usage

```html

<template>
    <div>
        <cleave v-model="cardNumber"
                :options="options"
                class="form-control"
                name="card"/>
    </div>
</template>

<script>
    import Cleave from 'vue-cleave-component';

    export default {
        data() {
            return {
                cardNumber: null,
                options: {
                    creditCard: true,
                    delimiter: '-',
                }
            }
        },
        components: {
            Cleave
        }
    }
</script>
```

### As plugin

```js
  import {createApp} from 'vue';
import Cleave from 'vue-cleave-component';
// your app initilization logic goes here
const app = createApp({}).mount('#app')
app.use(Cleave);
```

This will register a global component `<cleave>`

## Available props

The component accepts these props:

| Attribute        | Type                   | Default     | Description      |
| :---             | :---:                  | :---:       | :---             |
| v-model          | String / Number / `null` | `null`      | Set or Get input value (required) |
| options          | Object                 | `{}`        | Cleave.js [options](https://github.com/nosir/cleave.js/blob/master/doc/options.md) |
| raw              | Boolean                | `true`      | When set to `false`; emits formatted value with format pattern and delimiter |

## Install in non-module environments (without webpack)

* Include required files

```html
<!-- cleave.js -->
<script src="https://cdn.jsdelivr.net/npm/cleave.js@1"></script>
<!-- Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-cleave-component@3"></script>
<script>
    // Init as global component
    app.use(VueCleave);
</script>
```

## Run examples on your localhost

* Clone this repo
* You should have node-js `>=12.13` and yarn `>=1.22` pre-installed
* Install dependencies `yarn install`
* Run webpack dev server `yarn start`
* This should open the demo page at ``http://localhost:9000`` in your default web browser

### Testing

* This package is using [Jest](https://github.com/facebook/jest)
  and [vue-test-utils](https://github.com/vuejs/vue-test-utils-next) for testing.
* Tests can be found in `__test__` folder
* Execute tests with this command `yarn test`

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## License

[MIT](LICENSE.txt) License
