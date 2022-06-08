---
title: 应用程序多语言国际化
desc: 如何在Quasar中使用 vue-i18n。
related:
  - /options/rtl-support
  - /options/quasar-language-packs
---

国际化是指在不修改代码的情况下使网站/应用程序可以适应各种语言和地区。

::: tip
推荐使用 [vue-i18n](https://github.com/intlify/vue-i18n-next)来完成多语言国际化，需要使用一个boot文件来引用它到项目中 ，你可以在[@quasar/app-vite Boot File](/quasar-cli-vite/boot-files) 或者 [@quasar/app-webpack Boot File](/quasar-cli-webpack/boot-files)页面找到引用vue-i18n的示例代码。
:::

::: warning
需要你提前了解 [vue-i18n](https://github.com/intlify/vue-i18n-next)用法。下面只讲解针对Quasar CLIL的使用方式。更多信息请查看： [Vue I18n documentation](https://vue-i18n.intlify.dev).
:::

## 手动安装

如果你在创建项目的时候勾选了`vue-i18n`，那么你的项目中已经被安装了`vue-i18n`，并且已经准备好了相关的配置，你可以直接跳转到[如何使用](/options/app-internationalization#e5a682e4bd95e4bdbfe794a8)，如果没有的话按照下述步骤来安装：

1. 安装 `vue-i18n` 依赖。

```bash
 yarn add vue-i18n@next
// 或者:
 npm install vue-i18n@next
```

2. 创建 `src/boot/i18n.js` 文件，并将下述内容复制进去:

```js
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default ({ app }) => {
  // 创建实例
  const i18n = createI18n({
    locale: 'en-US',
    messages
  })

  // 注册到vue中
  app.use(i18n)
}
```

3. 创建一个文件夹 (/src/i18n/) 用于存放支持的多语言文案。 例如: [src/i18n](https://github.com/quasarframework/quasar-starter-kit/tree/master/template/src/i18n)。
注意第二步的 `import messages from 'src/i18n'` 。

4. 记得在 `quasar.config.js` 中引用这个boot文件 in the `boot` section:

```js
// quasar.config.js
return {
  boot: [
    // ...
    'i18n'
  ],

  // ...
}
```

现在已经准备好了，可以在项目中使用了

## 配置在SFC中支持`<i18n>`翻译标签

如果你想在SFC（单文件组件）中使用`<i18n>`标签，还需要做下述配置：

先安装 `@intlify/vue-i18n-loader`:

``` bash
yarn add --dev @intlify/vue-i18n-loader
# or
npm i --save-dev @intlify/vue-i18n-loader
```

修改 `quasar.config.js` 文件：
```js
// quasar.config.js

const path = require('path')

build: {
  chainWebpack: chain => {
    chain.module
      .rule('i18n-resource')
        .test(/\.(json5?|ya?ml)$/)
          .include.add(path.resolve(__dirname, './src/i18n'))
          .end()
        .type('javascript/auto')
        .use('i18n-resource')
          .loader('@intlify/vue-i18n-loader')
    chain.module
      .rule('i18n')
        .resourceQuery(/blockType=i18n/)
        .type('javascript/auto')
        .use('i18n')
          .loader('@intlify/vue-i18n-loader')
  }
}
```

## 如何使用

下面有3个示例:

```html
<template>
  <q-page>
    <q-btn :label="$t('mykey2')">
    {{ $t('mykey1') }}
    <span v-html="content"></span>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      content: this.$t('mykey3')
    }
  }
}
</script>
```

1. `mykey1` 演示了如何在HTML内容中使用
2. `mykey2` 演示了如何在HTML的标签属性上使用
3. `mykey3` 演示了如何在js中使用

## 添加新的语言

下面讲述如何添加一个新的语言

1. 创建新的文件 `src/i18n/zn-CH/index.js`，并将 `src/i18n/en-US/index.js` 文件中的内容拷贝过去，然后修改对应的文案字段。
2. 将新的语言添加到 `src/i18n/index.js` 文件中。

```js
import enUS from './en-US'
import zhCH from './zn-CH'

export default {
  'en-US': enUS,
  'zn-CH': zhCH
}
```

## 语言切换示例

```html
<!-- some .vue file -->

<template>
  <!-- ...... -->
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="Quasar Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
  <!-- ...... -->
</template>

<script>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'zn-CH', label: '中文' }
      ]
    }
  }
}
</script>
```

## UPPERCASE

许多语言，如希腊语、德语和荷兰语，对于大写显示都有不直观的规则，并且有一些少见的情况你应该知道：

QBtn组件会使用`text-transform: uppercase` CSS属性来将它的label自动转换为全部大写，按照[MDN webdocs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)的规范，"页面的语言应该被在定义在html/xml的lang属性中"，但是这个属性的浏览器兼容性不是很好，另外2017年ISO标准的大写德语 `ß` 字母还没有进入标准，目前有两种方案：

1. 使用`no-caps`属性，放弃自动大写特性，自行绑定label。
2. 使用`no-caps`属性，借助`$q.lang.getLocale()`重写String的[toLocaleUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)方法。

## 检测地区
Quasar也提供了一些开箱即用的方法来检测用户所在的地区：

```js
// 在 Vue 文件之外使用
import { Quasar } from 'quasar'
Quasar.lang.getLocale() // returns a string

// inside of a Vue file
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()
  $q.lang.getLocale() // returns a string
}
```

::: warning
如果你使用了Quasar的(`$q.lang.set()`)方法来设置语言，它并不会反映到Quasar的getLocale上，原因是`getLocale()`方法总是会返回 *用户* 所在的地区（取决于浏览器的设定）。`set()`方法用于Quasar应用的国际化的设置，决定哪个语言包被使用。如果想查询哪个语言包被设置了，请使用`$q.lang.isoName`属性来查询。
:::
