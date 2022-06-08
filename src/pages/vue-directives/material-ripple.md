---
title: Material Ripples
desc: 帮你轻松实现material design中的涟漪动画的Vue指令。
keys: material-ripple
---

Quasar提供了`v-ripple`指令，你可以使用它轻松的为DOM/组件添加一个Material design中的涟漪动画（点击元素后有一个水波效果）

::: danger
不要在已经有涟漪效果的组件中使用此指令，（例如： `QBtn`），他们都有一个`ripple`属性来控制涟漪效果。
:::

## Ripple API

<doc-api file="Ripple" />

## 用法

::: warning
使用前，请确保目标DOM/组件设置了`position: relative` CSS，或者直接使用 `relative-position` Quasar CSS 辅助类。
:::

### 基础

<doc-example title="常规" file="Ripple/Basic" />

### 着色

Material Ripple默认采用文本的CSS颜色，但这是可配置的：

<doc-example title="着色" file="Ripple/Colored" />

### 定位

你也可以配置涟漪效果从何处展开，默认从点击处展开，你可以配置始终从DOM中心展开：

<doc-example title="定位" file="Ripple/Positioning" />

### 提前触发

默认情况下，Ripple指令在点击或按键时被触发。但是，你可以更改它并使其在第一次用户交互(mousedown, touchstart, keydown)时更早的触发。请注意，在大多数情况下，事件集可能会重叠(第一次和最后一次用户交互之间的小延迟)，用户的感知没有差异，但在某些情况下，这可能会导致误导用户。

这在触摸屏上尤其明显，如果用户在触控启动后不小心移动了手指，它有时会被解释为一个非常小的滚动事件，而不是点击事件，所以点击事件没有被触发，但仍然有一个波纹。

<doc-example title="Triggering immediately" file="Ripple/Early" />

### 禁用

如果出于某些原因，你有一个场景需要禁用波纹，那么你可以为指令分配一个布尔值，来开启/禁用它

<doc-example title="禁用" file="Ripple/Disable" />
