# Changelog

## [3.0.1](https://github.com/ankurk91/vue-cleave-component/compare/3.0.0...3.0.1)

* Fix: delimiters and prefix was not working on initial
  load [#37](https://github.com/ankurk91/vue-cleave-component/pull/37)

## [3.0.0](https://github.com/ankurk91/vue-cleave-component/compare/2.1.2...3.0.0)

* Drop support for Vue v2.x and add support for Vue v3.x
* Drop IE 11 support

## [2.1.3](https://github.com/ankurk91/vue-cleave-component/compare/2.1.2...2.1.3)

* Fix: `input` event was being emitted on load, [#25](https://github.com/ankurk91/vue-cleave-component/issues/25)

## [2.1.2](https://github.com/ankurk91/vue-cleave-component/compare/2.1.1...2.1.2)

* Change:
    - removed `type` prop, however this should work as before
    - convert template to render function to reduce build size

## [2.1.1](https://github.com/ankurk91/vue-cleave-component/compare/2.1.0...2.1.1)

* Fix: `blur` event implementation, [#13](https://github.com/ankurk91/vue-cleave-component/issues/13)

## [2.1.0](https://github.com/ankurk91/vue-cleave-component/compare/2.0.1...2.1.0)

* Add: `blur` event, [#12](https://github.com/ankurk91/vue-cleave-component/issues/12)
    - If you were using `@blur.native` previously then replace it with `@blur`
* Chore: webpack v4

## [2.0.1](https://github.com/ankurk91/vue-cleave-component/compare/2.0.0...2.0.1)

* Fix: preserve original `onValueChanged` callback

## [2.0.0](https://github.com/ankurk91/vue-cleave-component/compare/1.0.3...2.0.0)

* Fix: CTRL+X (cut event) was not updating v-model, [#3](https://github.com/ankurk91/vue-cleave-component/issues/3)
* Change: Minimum `cleave.js` version requirement is v1.3.1
* Change: Now using `onValueChanged` callback to detect changes in value

## [1.0.3](https://github.com/ankurk91/vue-cleave-component/compare/1.0.2...1.0.3)

* Fix: Cursor jump issues

## 1.0.0

* Initial release
