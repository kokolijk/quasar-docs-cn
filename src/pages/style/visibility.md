---
title: CSS 可见性
desc: Quasar提供了下述CSS工具类来帮助你响应式的控制组件或DOM的可见性。
related:
  - /style/typography
  - /style/positioning
  - /style/spacing
---

Quasar提供了下述这些常用的CSS工具类，你可以直接在html模版中使用。

| Class类名 | 描述 |
| --- | --- |
| `disabled` | 鼠标指针设置为'disable'的样式，并且降低DOM的透明度。 |
| `hidden` | 设置 `display` 为 `none`将元素从页面中删除，且不会再占用空间。 |
| `invisible` | 设置 `visibility` 为 `hidden`将元素从页面中隐藏，但是任然会在页面中占据空间。|
| `transparent` | 将背景色设置为透明 |
| `dimmed` | 在元素上添加深色透明遮罩层。但是在已经有了 **:after** 伪类的元素上不会生效。 |
| `light-dimmed` | 在元素上添加白色透明遮罩层。但是在已经有了 **:after** 伪类的元素上不会生效。|
| `ellipsis` | 在空间不足的时候使用省略号将文字截断。 |
| `ellipsis-2-lines` | 将超出2行的文字使用省略号截断。（只会在Webkit内核的浏览器中生效）。 |
| `ellipsis-3-lines` | 将超出3行的文字使用省略号截断。（只会在Webkit内核的浏览器中生效）。 |
| `z-top` | 将元素的`z-index`层级设置调高，使得它可以遮挡住其他的元素，但不会遮挡住Popovers, Tooltips, Notifications。|
| `z-max` | 将元素的`z-index`层级置为页面最顶层，会挡住所有的其他的元素，包括 Drawer, Modals, Notifications, Layout header/footer, ...。|

## 屏幕断点相关（响应式）

我们先来看看，所有的屏幕尺寸断点定义：

| Window 大小 | 断点名称 | 断点的像素大小 |
| --- | --- | --- |
| 极小 | `xs` | 599px以下 （一般是手机的屏幕） |
| 小 | `sm` | 600px 到 1023px （这个尺寸可能有手机和平板）|
| 中等 | `md` | 1024px 到 1439px （这个尺寸可能有平板和电脑）|
| 大 | `lg` | 1440px 到 1919px （一般的电脑屏幕）|
| 超大 | `xl` | 1920px 以上 （超大屏幕设备）|

然后来看看跟断点相关的css类

| CSS类名 | 描述 |
| --- | --- |
| `xs` | 只会在极小尺寸的屏幕上展示  |
| `sm` | 只会在小尺寸的屏幕上展示  |
| `md` | 只会在中等尺寸的屏幕上展示 |
| `lg` | 只会在大尺寸的屏幕上展示 |
| `xl` | 只会在超大尺寸的屏幕上展示 |

也可指定在小于/大于某断点尺寸的屏幕上展示DOM元素或者组件，只需要使用`lt-` 或 `gt-` 前缀。lt表示小于是lower than的缩写，gt表示大雨是greater than的缩写。例如： `lt-md`，表示在只在小于md（即xs和sm）尺寸的屏幕上展示，`lt-xl` 表示在小于xl尺寸的屏幕上展示（即 xs, sm, md 和 lg），`gt-md`表示在大于md尺寸的屏幕上展示（即 lg 和 xl）。


::: tip
你可以将上述可见性css类与`inline`结合起来使用将元素变成inline-blocks
示例: `<span class="gt-sm inline">...</span>`
:::

::: tip
如果你想用JavaScript来控制元素的响应式显示和隐藏，你可以使用[Screen Plugin](/options/screen-plugin).
:::

## 平台相关
只在特定的平台上展示:

| CSS类名 | 描述 |
| --- | --- |
| `desktop-only` | 只在电脑上显示 Visible only on desktop |
| `mobile-only` | 只在手机上显示 Visible only on mobile |
| `native-mobile-only` | 只在 Cordova/Capacitor 平台下显示 Visible only on Cordova/Capacitor |
| `cordova-only` | 只在 Cordova 平台下显示 Visible only on Cordova wrapped Apps |
| `capacitor-only` |只在 Capacitor 平台下显示 Visible only on Capacitor wrapped Apps |
| `electron-only` | 只在 Electron 平台下显示 Visible only on Electron wrapped Apps |
| `touch-only` |  只在 可触摸的平台下显示Visible only on touch capable platforms |
| `platform-ios-only` | 只在 IOS 平台下显示 Visible only on an iOS platform |
| `platform-android-only` | 只在 Android 平台下显示 Visible only on an Android platform |
| `within-iframe-only` | 只在 iframe 标签中 显示 Visible only when entire website is under an IFRAME tag |

Hide on:

| CSS类名 | 描述 |
| --- | --- |
| `desktop-hide` | 在电脑上隐藏 Hide on desktop |
| `mobile-hide` | 在手机上隐藏 Hide on mobile |
| `native-mobile-hide` |在Cordova/Capacitor上隐藏 Hide on Cordova/Capacitor |
| `cordova-hide` |在Cordova上隐藏 Hide on Cordova wrapped Apps |
| `capacitor-hide` |在Capacitor上隐藏 Hide on Capacitor wrapped Apps |
| `electron-hide` |在 Electron上隐藏 Hide on Electron wrapped Apps |
| `touch-hide` |在可触摸的屏幕上隐藏 Hide on touch capable platforms |
| `platform-ios-hide` |在iOS上隐藏 Hide on iOS platform |
| `platform-android-hide` |在Android上隐藏 Hide on Android platform |
| `within-iframe-hide` |在iframe标签中隐藏 Hide only when entire website is under an IFRAME tag |

::: tip
如何使用Javascript来实现上述效果请看[Platform Detection](/options/platform-detection)页面。这种方法更加高效，甚至不会渲染额外的dom，在渲染过程很昂贵的时候很有用。
:::

## 横屏竖屏相关
| CSS类名 | 描述 |
| --- | --- |
| `orientation-portrait` | 当竖屏时显示 *Portrait* |
| `orientation-landscape` | 当横屏时显示 *Landscape* |

## 打印相关
| CSS类名 | 描述 |
| --- | --- |
| `print-only` | 只在打印时显示 |
| `print-hide` | 在打印时隐藏  |
