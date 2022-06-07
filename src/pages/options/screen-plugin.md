---
title: 屏幕插件
desc: Quasar提供了屏幕插件来帮助开发者通过js开发出动态的响应式的页面
---
Quasar提供了屏幕插件来帮助开发者通过Javascript开发出动态的响应式的页面。出于性能的原因，我们更推荐你使用CSS方案[responsive CSS classes](/style/visibility#window-width-related)来实现响应式的UI。

## 安装
不需要安装，这个插件可以直接使用。

## 用法
注意下面的`$q.screen`，这里只是一个简单的示例

```html
<q-list :dense="$q.screen.lt.md">
  <q-item>
    <q-item-section>John Doe</q-item-section>
  </q-item>

  <q-item>
    <q-item-section>Jane Doe</q-item-section>
  </q-item>
</q-list>
```

```js
// vue组件的js部分
import { useQuasar } from 'quasar'
import { computed } from 'vue'

export default {
  setup () {
    const $q = useQuasar()
    const buttonColor = computed(() => {
      return $q.screen.lt.md
        ? 'primary'
        : 'secondary'
    })

    return { buttonColor }
  }
}
```

我们也可以在vue文件之外使用Screen组件：

```js
import { Screen } from 'quasar'

// Screen.gt.md
// Screen.md
// Screen.name ('xs', 'sm', ...)
```

## Body classes

如果你开启了Body classes这个特性（请查看下面的如何开启部分），你也可以使用CSS类名类为不同尺寸的屏幕设置不同的样式：`screen--xs`, `screen--sm`, ..., `screen-xl`.

```css
body.screen--xs {
  .my-div {
    color: #000;
  }
}

body.screen--sm {
  .my-div {
    color: #fff;
  }
}
```

Or a sexy variant in Sass:

```sass
.my-div
  body.screen--xs &
    color: #000
  body.screen--sm &
    color: #fff
```

### 如何开启 body classes

开启它需要像下面这样修改 `/quasar.config.js` 文件，请注意开启后会增加一些第一次渲染时间。

```js
// file: /quasar.config.js

framework: {
  config: {
    screen: {
      bodyClasses: true // <<< add this
    }
  }
}
```

## 配置

下面也有一些方法来控制Screen插件的工作方式：

| 方法名 | 描述 | 示例 |
| --- | --- | --- |
| setSizes(Object) | 修改window断点，但是不会修改css的断点 | setSizes({ lg: 1024, xl: 2000 }) |
| setDebounce(Number) | 修改默认的100ms间隔 Change the default 100ms debounce to some other value. | setDebounce(500) // 500ms |

Examples:

```js
// 在vue组件之内:
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()

  $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })
}

// 在vue组件之外:
import { Screen } from 'quasar'
Screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })
```

## API
<doc-api file="Screen" />
