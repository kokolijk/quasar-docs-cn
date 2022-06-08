---
title: Intersection Directive
desc: 使用Intersection Observer API监听当DOM/组件在可视窗口中出现或者消失时触发一个函数的Vue指令。
keys: intersection
related:
  - /vue-components/intersection
  - /vue-directives/scroll-fire
  - /vue-directives/scroll
  - /options/transitions
---
"Intersection"是使用[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)监听当DOM/组件在可视窗口中出现或者消失（由页面滚动导致）时触发一个函数的Quasar指令。

::: warning
并不是所有的浏览器都支持 Intersection Observer API，虽然大部分浏览器都支持，但是如果你需要兼容老的浏览器，那么你需要安装W3C官方的[polyfill](https://github.com/w3c/IntersectionObserver)（通过一个boot文件引入）。
:::

## Intersection API

<doc-api file="Intersection" />

## 用法

请先阅读 [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)页面，以便你了解这个指令工作的原理。


Intersection 指令可以接受一个函数或者对象作为其值，对象的格式如下：
```js
{
  handler: /* Function */,
  cfg: {
    // 可选的参数，来自 "Intersection observer options"
    // 参考 https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    root: null, // DOM Element
    rootMargin: '0px',
    threshold: 0
  }
}
```
当使用对象格式的值时，其中只有`handler`时必填的。

这个`handler`函数有一个参数，参考[IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry).

::: tip
在下面的示例中，请持续滚动页面直到被监测的对象出现/消失
:::

### 基础

<doc-example title="常规" file="Intersection/Basic" no-edit />

### 只触发一次

这个指令可以被`once`修饰符修饰，(示例: `v-intersection.once`)，则hanler函数只会被触发一次。如果你所需要的只是在观察到的元素开始出现在屏幕上时得到通知，那么你可以使用这种方式以控制开销。

<doc-example title="仅触发一次" file="Intersection/Once" no-edit />

### 使用对象格式

使用一个对象来作为指令的值，你可以更精确的控制监听的行为。

<doc-example title="使用配置对象" file="Intersection/ObjectForm" no-edit />

### 进阶

下面是一些更高阶的用法，代码中使用了 HTML的 `data` 属性，将元素的索引绑定到`data-id`上，然后通过handler函数的`entry`参数中的`entry.target.dataset.id`访问到设置的id。如果你还不熟悉HTML的data属性，请参考：[here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)。

<doc-example title="进阶" file="Intersection/Advanced" no-edit />

下面的示例中，我们有非常多的卡片，但是只有处于可视窗口中的卡片才会被渲染。

> 下面的示例也可以使用 [QIntersection](/vue-components/intersection) 组件以一种更简单的方式和实现。

<doc-example title="Scrolling Cards" file="Intersection/ScrollingCards" scrollable no-edit />

::: tip
上面的示例使用了Quasar的过渡效果，关于更多的过渡动画，请查看[Transitions](/options/transitions)页面。
:::

### 视频讲解
若仍有疑惑，请观看[视频讲解](https://www.bilibili.com/video/BV1RU4y1y7JJ)
