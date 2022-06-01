---
title: Quasar语言包
desc: 如何配置Quasar的语言包。
related:
  - /options/rtl-support
  - /options/app-internationalization
---
Quasar的语言包是针对与实现Quasar内置组件的多语言国际化的，因为部分组件上会有一些文案。

::: warning
需要注意的是，下述方案是针对Quasar内置组件的多语言国际化，如果你想实现自己的组件的多语言国际化，请参考 [App Internationalization](/options/app-internationalization) 页面。
:::
如上所述，部分组件上会有一些文案，当需要实现多语言国际化的时候，一种方案是为每个组件都配置多分不同语言的文案，但是这太耗时间，也太麻烦，你可以选择使用quasra语言包，其中内置了一定数量的标准字段，类似 "Cancel", "Clear", "Select", "Update"等等，就不再需要重复的翻译他们。

::: tip
完整的Quasar语言包列表见[Quasar Languages on GitHub](https://github.com/quasarframework/quasar/tree/dev/ui/lang).
<br><br>**如果你在列表中没有发现想要的语言包**, 你可以提交一个PR来添加它，大概会花费5到10分钟，我们欢迎任何一种语言！
:::

## 配置默认的语言包
在默认情况下，Quasar使用`en-US`英文语言包，你可以通过下述方式改变默认的语言包：

### 硬编码
如果默认语言包需要动态切换，那么你可以通过下面的方式定义：

#### Quasar CLI
修改 `/quasar.config.js`:

```js
framework: {
  lang: 'zh-CN' //使用中文简体语言包
}
```

#### Quasar Vite Plugin
修改 `main.js`:

```js
// ...
import { Quasar } from 'quasar'
// ...
import langDe from 'quasar/lang/zh-CN'
// ...
app.use(Quasar, {
  // ...,
  lang: langDe
})
```

#### Vue CLI
修改 `main.js`:

```js
// ...
import { Quasar } from 'quasar'
// ...
import langDe from 'quasar/lang/zh-CN'
// ...
app.use(Quasar, {
  // ...,
  lang: langDe
})
```

#### Quasar UMD
引入要使用的语言包，例如：
```html
<!-- include this after Quasar JS tag -->
<script src="https://cdn.jsdelivr.net/npm/quasar@2/dist/lang/zh-CN.umd.prod.js"></script>
<script>
  Quasar.lang.set(Quasar.lang.zh-CN)
</script>
```

Check what tags you need to include in your HTML files on [UMD / Standalone](/start/umd) page.

### 动态配置 (非SSR模式)

Quasar CLI: 如果你的语言需要动态的选择， (例如通过cookie来判断),那么你需要创建一个boot文件来处理:

使用`quasar new boot quasar-lang-pack [--format ts]`命令会帮你创建一个`/src/boot/quasar-lang-pack.ts`文件，将下面的代码复制进去：

```js
// -- 使用 @quasar/app-vite --

import { Quasar } from 'quasar'

// 这个路径相对于你的 node_modules/quasar/..
const langList = import.meta.glob('../../node_modules/quasar/lang/*.mjs')
// or just a select few (example below with only DE and FR):
// import.meta.glob('../../node_modules/quasar/lang/(de|fr).mjs')

export default async () => {
  const langIso = 'zh-CN' // ... some logic to determine it (use Cookies Plugin?)

  try {
    langList[ `../../node_modules/quasar/lang/${ langIso }.mjs` ]().then(lang => {
      Quasar.lang.set(lang.default)
    })
  }
  catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
```

```js
// -- 使用 @quasar/app-webpack --

import { Quasar } from 'quasar'

export default async () => {
  const langIso = 'zh-CN' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(de|en-US)\.js$/ */
      'quasar/lang/' + langIso
    ).then(lang => {
      Quasar.lang.set(lang.default)
    })
  }
  catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
```

然后记得将这个boot文件注册到 `/quasar.config.js`文件中：

```js
boot: [
  'quasar-lang-pack'
]
```

::: warning Always constrain a dynamic import
Notice the use of the [Webpack magic comment](https://webpack.js.org/api/module-methods/#magic-comments) - `webpackInclude`. Otherwise all the available language packs will be bundled, resulting in an increase in the compilation time and the bundle size. See [Caveat for dynamic imports](https://quasar.dev/quasar-cli/lazy-loading#Caveat-for-dynamic-imports)
:::

### Dynamical (SSR)
When dealing with SSR, we can't use singleton objects because that would pollute sessions. As a result, as opposed to the dynamical example above (read it first!), you must also specify the `ssrContext` from your boot file:

```js
// -- With @quasar/app-vite --

import { Quasar } from 'quasar'

// relative path to your node_modules/quasar/..
// change to YOUR path
const langList = import.meta.glob('../../node_modules/quasar/lang/*.mjs')
// or just a select few (example below with only DE and FR):
// import.meta.glob('../../node_modules/quasar/lang/(de|fr).mjs')

// ! NOTICE ssrContext param:
export default async ({ ssrContext }) => {
  const langIso = 'de' // ... some logic to determine it (use Cookies Plugin?)

  try {
    langList[ `../../node_modules/quasar/lang/${ langIso }.mjs` ]().then(lang => {
      Quasar.lang.set(lang.default, ssrContext)
    })
  }
  catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
```

```js
// -- With @quasar/app-webpack --

import { Quasar } from 'quasar'

// ! NOTICE ssrContext param:
export default async ({ ssrContext }) => {
  const langIso = 'de' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(de|en-US)\.js$/ */
      'quasar/lang/' + langIso
    ).then(lang => {
      Quasar.lang.set(lang.default, ssrContext)
    })
  }
  catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
```

## Change Quasar Language Pack at Runtime
Example with a QSelect to dynamically change the Quasar components language:

```html
<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    label="Quasar Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template>

<script>
import { useQuasar } from 'quasar'
import languages from 'quasar/lang/index.json'
import { ref, watch } from 'vue'

const appLanguages = languages.filter(lang =>
  [ 'de', 'en-US' ].includes(lang.isoName)
)

const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName, value: lang.isoName
}))

export default {
  setup () {
    const $q = useQuasar()
    const lang = ref($q.lang.isoName)

    watch(lang, val => {
      // dynamic import, so loading on demand only
      import(
        /* webpackInclude: /(de|en-US)\.js$/ */
        'quasar/lang/' + val
        ).then(lang => {
          $q.lang.set(lang.default)
        })
    })

    return {
      lang,
      langOptions
    }
  }
}
</script>
```

## Using Quasar Language Pack in App Space
Although the Quasar Language Packs **are designed only for Quasar components internal usage**, you can still use their labels for your own website/app components too.

```html
"Close" label in current Quasar Language Pack is:
{{ $q.lang.label.close }}
```

Check a Quasar Language Pack on [GitHub](https://github.com/quasarframework/quasar/tree/dev/ui/lang) to see the structure of `$q.lang`.

## Detecting Locale
There's also a method to determine user locale which is supplied by Quasar out of the box:

```js
// outside of a Vue file
import { Quasar } from 'quasar'
Quasar.lang.getLocale() // returns a string

// inside of a Vue file
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()
  $q.lang.getLocale() // returns a string
}
```
