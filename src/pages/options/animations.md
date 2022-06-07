---
title: 动画
desc:  为Quasar程序提供Animate.css支持
---
可以通过[Vue Transition Component](https://vuejs.org/api/built-in-components.html)来处理CSS过渡效果，为组件/DOM加上一个出现或消失时的动画。

Quasars提供一组可以直接使用的CSS动画。这些动画来自[Animate.css](https://animate.style/)，共有80多种动画开箱即用，打开Animate.css网站查看在线演示效果。

> 请前往 [Vue](https://vuejs.org/api/built-in-components.html#transition)页面学习更多关于如何使用`<transition>`组件。

## 安装
修改 `/quasar.config.js`.
```js
// 开启全部的动画
animations: 'all'

// 或者只开启部分动画
animations: [
  'bounceInLeft',
  'bounceOutRight'
]
```
如果你只是构建网站，那么你可以跳过配置quasar.config.js的步骤，通过CDN的方式引入Animate.css，示例：

```html
<!-- src/index.template.html -->
<head>
  ...

  <!-- CDN example for Animate.css -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  >
</head>
```

::: warning
注意，若你通过link标签引入Animate.css，所有的animation CSS
It should be noted that when you import Animate.css through the `<link>` tag, all animation CSS classes must be prefixed with `animate__`. This is a breaking change in the migration of Animate.css from v3 to v4. If you want to avoid using prefixes, you can import the [compat version](https://animate.style/#migration). However, if you're using the **Quasar CLI**, no additional changes are needed.
:::

## 用法
注意每个动画名前都有一个"animated"字段

```html
<!-- Example with wrapping only one DOM element / component -->
<transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- Wrapping only one DOM element, defined by QBtn -->
  <q-btn
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition>
```

### Wrapping Multiple Elements
You can also group components or DOM elements in a transition so that the same effects are applied to all of them simultaneously.

```html
<!-- Example with wrapping multiple DOM elements / components -->
<transition-group
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- We wrap a "p" tag and a QBtn -->
  <p key="text">
     Lorem Ipsum
  </p>
  <q-btn
    key="email-button"
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition-group>
```

Please note some things in the above example:

1. Note `<transition-group>` instead of `<transition>`.
2. The components and DOM elements must be keyed, like `key="text"` or `key="email-button"` in the example above.
3. Both examples above have the Boolean property `appear` specified, which makes the entering animation kick in right after component(s) have been rendered. This property is optional.
