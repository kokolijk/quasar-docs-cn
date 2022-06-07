---
title: 平台检测
desc:  如何检测Quasar运行在哪个平台。
---

Quasar提供了工具来检测代码运行在哪个平台上。


::: tip
根据你的需要,你可能还需要去 [Style & Identity &gt; Visibility](/style/visibility) 页面看看如何使用CSS实现相同的功能。但是CSS方案无论在任何平台上始终都会渲染DOM或组件，所以根据你想要的应用程序性能来选择一个合适的方案。
:::

## 用法
在Vue组件的JS中：

```js
import { useQuasar } from 'quasar'

setup () {
  const $q = useQuasar()

  $q.platform.is.mobile
}
```
在Vue组件的模版中：

```js
$q.platform.is.cordova
```

如果在一个vue文件之外使用，你需要像下述方式引入它：

```js
import { Platform } from 'quasar'
```

`Platform.is` 对象会返回当前代码运行平台的详细信息，类似：
```js
{
  chrome: true,
  desktop: true,
  mac: true,
  name: "chrome",
  platform: "mac",
  version: "70.0.3538.110",
  versionNumber: 70,
  webkit: true
}
```

来看看如何控制在不同的平台上显示不同的DOM或组件：

```html
<div v-if="$q.platform.is.desktop">
  I'm only rendered on desktop!
</div>

<div v-if="$q.platform.is.mobile">
  I'm only rendered on mobile!
</div>

<div v-if="$q.platform.is.electron">
  I'm only rendered on Electron!
</div>
```

<doc-example title="你设备信息" file="Platform/Basic" />

## 属性列表

下表是Platform对象的部分可用属性，完整的列表请见API部分。

| Property               | Type    | Meaning                                                  |
| ---                    | ---     | ---                                                      |
| `Platform.is.mobile`     | Boolean | 代码是否运行在移动设备上? on a mobile 设备上?                |
| `Platform.is.cordova`    | Boolean | 代码是否运行在Cordova?                    |
| `Platform.is.capacitor`  | Boolean | 代码是否运行在Capacitor? |
| `Platform.is.electron`   | Boolean | 代码是否运行在Electron?                   |
| `Platform.is.desktop`    | Boolean | 代码是否运行在桌面浏览器上?              |
| `Platform.is.bex`        | Boolean | 代码是否运行在浏览器插件中? |
| `Platform.is.android`    | Boolean | app是否运行在 Android 设备上?               |
| `Platform.is.blackberry` | Boolean | app是否运行在 Blackberry 设备上? |
| `Platform.is.cros`       | Boolean | app是否运行在 Chrome OS 操作系统上? |
| `Platform.is.ios`        | Boolean | app是否运行在 iOS 设备上? |
| `Platform.is.ipad`       | Boolean | app是否运行在 iPad 上? |
| `Platform.is.iphone`     | Boolean | app是否运行在 iPhone 上? |
| `Platform.is.ipod`       | Boolean | app是否运行在 iPod 上? |
| `Platform.is.kindle`     | Boolean | app是否运行在 Kindle 设备上? |
| `Platform.is.linux`      | Boolean | 代码是否运行在 Linux 操作系统上? |
| `Platform.is.mac`        | Boolean | 代码是否运行在 MacOS 操作系统上? |
| `Platform.is.win`        | Boolean | 代码是否运行在 Windows 操作系统上? |
| `Platform.is.winphone`   | Boolean | 代码是否运行在 Windows Phone 设备上? |
| `Platform.is.playbook`   | Boolean | 代码是否运行在 Blackberry Playbook 设备上? |
| `Platform.is.silk`       | Boolean | 代码是否运行在 the Kindle Silk 浏览器内? |
| `Platform.is.chrome`     | Boolean | 代码是否运行在 Google Chrome 浏览器内? |
| `Platform.is.opera`      | Boolean | 代码是否运行在 Opera 浏览器内? |
| `Platform.is.safari`     | Boolean | 代码是否运行在 Apple Safari 浏览器内? |
| `Platform.is.edge`       | Boolean | 代码是否运行在 Microsoft Edge 浏览器内? |
| `Platform.is.ie`         | Boolean | 代码是否运行在 Microsoft Internet Explorer 浏览器内? |
| `Platform.has.touch`     | Boolean | 代码是否运行在具有可触摸的屏幕的设备上?         |
| `Platform.within.iframe` | Boolean | app是否运行在一个IFRAME标签中?                   |

::: tip
运行在移动设备上代表着，可能运行在手机或者手表的浏览器内，并不代表着运行在Cordova内
:::

## 关于SSR的注意事项
在SSR应用中只能使用`$q.platform`的形式，如果需要在server端使用 `import { Platform } from 'quasar'` ，你需要这样做：:

```js
import { Platform } from 'quasar'

// you need access to `ssrContext`
function (ssrContext) {
  const platform = process.env.SERVER
    ? Platform.parseSSR(ssrContext)
    : Platform // otherwise we're on client

  // platform is equivalent to the global import as in non-SSR builds
}
```

其中的`ssrContext` 可以在 [@quasar/app-vite Boot File](/quasar-cli-vite/boot-files) 或者 [@quasar/app-webpack Boot File](/quasar-cli-webpack/boot-files)文件中访问到。 也可以在 [@quasar/app-vite preFetch](/quasar-cli-vite/prefetch-feature) 或者 [@quasar/app-webpack preFetch](/quasar-cli-webpack/prefetch-feature)中访问到，`ssrContext` 会作为函数的参数，在上述文件的函数中访问。

这一切的原因是,在一个仅客户端的应用程序中,每个用户将使用的一个新的实例应用在浏览器内。对于服务器端渲染，我们也希望如此:每个请求都应该有一个新的、独立的应用实例，这样就不会有交叉请求的状态污染。因此，Platform需要分别绑定到每个请求。

## API
<doc-api file="Platform" />
