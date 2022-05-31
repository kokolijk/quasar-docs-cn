---
title: 暗色/夜间模式
desc: 处理Quasar的暗黑/夜间模式。
related:
  - /quasar-plugins/dark
  - /style/theme-builder
---
暗黑模式是一种补充模式，该设计减少了设备屏幕发出的光，用于把UI变成深色，同时要页面的保持可读性。

暗色模式有一下优点：

* 缓解眼睛疲劳
* 在夜晚或者光线暗的环境下提供更舒服的阅读体验
* 可以减少OLED 或者 AMOLED屏幕的耗电量

## 它是如何工作的

1. 它会给页面设置一个默认的黑色背景（这个黑色是可以通过`body.body--dark` css 选择器来自定义的)。
2. 所有的Quasar 组件都有一个`dark`的属性，当切换为暗色模式时，这个属性会被自动的设置为`true`。

自动检测的原理是动态监听`prefers-color-scheme: dark`媒体查询属性。如果浏览器或者系统切换为了暗色模式，Quasar应用也会自动切换为暗色模式（在dark mode设置为`auto`的情况下）


## 如何使用

你可以通过[Dark Plugin](/quasar-plugins/dark)来轻松的切换Quasar应用的暗色/亮色模式。

## How to style your app

你可以通过`body--light` or `body--dark`这两个css类名来定制你的app在亮色/暗色模式下的表现。

```css
.body--light {
  /* ... */
}

.body--dark {
  /* ... */
}
```
例如，修改模式的暗色模式的背景色：

```css
body.body--dark {
  background: #000
}
```
