---
title: Quasar组件的过渡效果
desc: 开箱即用的Quasar组件过渡效果
components:
  - transitions/TransitionList
---

一些Quasar组件可以通过`transition-show`/`transition-hide` 或 `transition-prev`/`transition-next` 或 `transition` 等属性来控制过渡效果。

<transition-list />

将上表的过渡名称加到组件的属性中去，例如：

```html
<q-menu
  transition-show="jump-down"
  transition-hide="jump-up"
/>
```
