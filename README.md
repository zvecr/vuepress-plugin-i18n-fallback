# vuepress-plugin-i18n-fallback

> Enable fallback of missing/untranslated content when using
[multi-language support](https://vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config).

Translations for large projects can be a pain... This plugin aims to solve:
* Easier support for partial translations
* Jumping back to the root when a user hits untranslated content
* Manual copy/symlink build workarounds

Using the following example:
```
docs
├─ README.md
├─ foo.md
├─ bar.md
└─ zh
   ├─ README.md
   └─ foo.md
```

Produces the following behaviour:

* `<site>/zh/foo.html` will serve the content of `docs/zh/foo.md`
* `<site>/zh/bar.html` will serve the content of `docs/foo.md`

## Usage

1. Install plugin
```
yarn add vuepress-plugin-i18n-fallback -D 
# OR npm install vuepress-plugin-i18n-fallback -D
```

2. Enable plugin
```
//.vuepress/config.js
module.exports = {
  plugins: [
    'vuepress-plugin-i18n-fallback'
  ]
}
```

## Issues

1. Links on fallback pages are currently not rewritten.
    * In the example above, links on `<site>/zh/bar.html` will jump back to the default locale.

## Example

A minimal example has been provided in the `example` directory of this repo. To get started:

```
yarn --cwd example install && yarn --cwd example docs:dev
```
