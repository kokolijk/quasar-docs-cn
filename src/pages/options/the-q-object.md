---
title: Quaasr中的$q对象
desc: 如何使用Quaasr中的$q对象。
related:
  - /vue-composables/use-quasar
---
Quasar提供了一个名为$q的对象，可以通过它来实现各种需求，本文档的很多地方都会用到它。

下面是这个对象的详细属性：
| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `$q.version` | String | Quasar版本 |
| `$q.platform` | Object | 与平台信息相关的对象，详见[Platform](/options/platform-detection) |
| `$q.screen` | Object | 与屏幕插件相关的对象，详见[Screen Plugin](/options/screen-plugin). |
| `$q.lang` | Object | Quasar语言包管理相关,  ([全部语言包列表](https://github.com/quasarframework/quasar/tree/dev/ui/lang))，是为Quasar组件设计的，但你也可以将其用到自己的项目中。更多信息请看: [Quasar Language Packs](/options/quasar-language-packs). |
| `$q.iconSet` | Object | Quasar 图标管理 ( [全部图标列表](https://github.com/quasarframework/quasar/tree/dev/ui/icon-set))。 更多信息请看: [Quasar Icon Sets](/options/quasar-icon-sets). |
| `$q.cordova` | Object | Cordova全局对象的引用，只有在Cordova平台下才能访问。 |
| `$q.capacitor` | Object | Capacitor全局对象的引用，只有在Capacitor平台下才能访问。 |

## 用法

下面分别演示如何在vue文件之中和vue文件之外使用它（包括组合式 API 和 选项式 API）
### 组合式 API

在vue文件中:

```html
<template>
  <div>
    <div v-if="$q.platform.is.ios">
      这个元素只会在iOS平台下被渲染
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()

    console.log($q.platform.is.ios)

    // 这里只是演示在函数中使用
    // 但其实它可以在vue script中的任何地方都可以访问
    function show () {
      // 打印Quasar的版本
      console.log($q.version)
    }

    return {
      show
    }
  }
}
</script>
```

### 选项式 API

在vue文件中:

```html
<template>
  <div>
    <div v-if="$q.platform.is.ios">
      Gets rendered only on iOS platform.
    </div>
  </div>
</template>

<script>
// 选项式api的export之外无法访问到$q

export default {
  // inside a Vue component script
  ...,

  // 这里只是演示在函数中使用
  // 但其实它可以在vue script的export中的任何地方都可以访问
  methods: {
    show () {
      // 打印Quasar的版本
      console.log(this.$q.version)
    }
  }
}
</script>
```

### 在vue文件外:

```js
import { Quasar } from 'quasar'

console.log(Quasar.platform.is.ios)
```
