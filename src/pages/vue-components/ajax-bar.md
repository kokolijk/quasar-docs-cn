---
title: Ajax Bar
desc: The QAjaxBar Vue component displays a loading bar whenever an Ajax call is in progress.
keys: QAjaxBar
related:
  - /quasar-plugins/loading
  - /quasar-plugins/loading-bar
  - /quasar-cli-vite/ajax-requests
  - /quasar-cli-webpack/ajax-requests
---

绝大多数移动应用和桌面应用都需要通过[Ajax call](https://en.wikipedia.org/wiki/Ajax_(programming))来与服务端进行通信。
由于通信过程可能需要花费部分时间，为了好的用户体验，你可以在一个请求开始时使用QAjaxBar组件来给予用户反馈。


QAjaxBar是一个用于自动展示Ajax请求进度的组件，当然也可以手动触发。

::: tip
如果你想用一种更简单、更方便的方式为你的用户提供一个Ajax Bar，更推荐你去看看[Loading Bar Plugin](/quasar-plugins/loading-bar)
:::

## QAjaxBar API

<doc-api file="QAjaxBar" />

## Usage 用法
QAjaxBar组件默认会自动捕获Ajax调用，然后展示它的进度。(除非你禁止了它的自动捕获)。


出于演示的目的，下面的示例是使用手动触发的方式。当你点击按钮的时候页面的底部会出现一个10px左右的进度条，当然他的大小和颜色都是可以自定义的，
请查阅Api部分以帮助你了解它的所有属性。

### Basic 基础

<doc-example title="Basic" file="QAjaxBar/Basic" />



### 过滤Ajax请求 <q-badge align="top" color="brand-primary" label="v2.4.5+" />

默认会捕获所有的ajax请求，如果你想它只捕获指定的请求，可以使用
 `hijackFilter` 属性来实现:

```html
<template>
  <q-ajax-bar :hijack-filter="myFilterFn" />
</template>

<script>
export default {
  setup () {
    return {
      myFilterFn (url) {
        // 例如： (只有请求 https://my-service.com/* 这个地址时才会触发
        return /^https:\/\/my-service\.com/.test(url)
      }
    }
  }
}
</script>
```

## Tips

* 如果Ajax Bar同时捕获多个事件，`@start`和`@stop`仍然只会触发一次
* 每个Ajax请求开始时都会触发`start()`事件结束的时候都会触发`stop()`事件。所以若你想要手动的触发QAjaxBar，你需要在请求开始的时候去调用他的 `start()` 方法，在请求结束的时候去调用他的 `stop()` 方法。
