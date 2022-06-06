---
title: 其他的 CSS 工具类
desc: Quasar提供的关于鼠标，大小，方向和边框相关的CSS辅助类。
---

Quasar有很多可直接用在Vue模版中的CSS工具类，熟练使用他们，可以很大程度上降低Vue模版的复杂度。

下面的列表并不是全部CSS工具类，如需使用请观看别的关于样式的页面，例如，[字体排版](/style/typography)，[可见性](/style/visibility)，[阴影](/style/shadows)，[定位](/style/positioning)和[间距](/style/spacing)等等。


## 鼠标相关

| CSS类名 | 描述 |
| --- | --- |
| `non-selectable` | 控制文字不可被选择 |
| `no-pointer-events` | DOM元素不能作为事件的对象，如click相关, hover等等 |
| `all-pointer-events` | The opposite of `no-pointer-events` |
| `cursor-pointer` | 将鼠标指针落在元素上时的样式设置为一只小手  |
| `cursor-not-allowed` | 将鼠标指针落在元素上时的样式设置为禁用的样式  |
| `cursor-inherit` | 将鼠标指针落在元素上时的样式设置为继承父元素 |
| `cursor-none` | 禁用鼠标指针样式 |

## 滚动相关

| CSS类名 | 描述 |
| --- | --- |
| `scroll` | 应用CSS调整，使滚动在所有平台上都能发挥最佳效果  |
| `no-scroll` | 隐藏滚动条 Hides scrollbars on the DOM node |
| `overflow-auto` | 设置 overflow 为 auto |
| `overflow-hidden` |   设置 overflow 为 hidden |
| `overflow-hidden-y` | 设置 overflow 为 hidden on the y-axis |
| `hide-scrollbar` | 删除滚动条  |

## 大小相关
| CSS类名 | 描述 |
| --- | --- |
| `fit` | Width 和 Height 设置为 100% |
| `full-height` | Height 设置为 100% |
| `full-width` | Width 设置为 100%，并且左右外边距设置为0 |
| `window-height` | Height 设置为 100vh，并且上下外边距设置为0 |
| `window-width` | Width 设置为 100vw 并且左右边距设置为0 |
| `block` | 设置 `display` 属性为 设置为 `block` |

## 方向相关
| CSS类名 | 描述 |
| --- | --- |
| `rotate-45` | 旋转 45 度 |
| `rotate-90` | 旋转 90 度 |
| `rotate-135` | 旋转 135 度 |
| `rotate-180` | 旋转 180 度 |
| `rotate-225` | 旋转 225 度 |
| `rotate-270` | 旋转 270 度 |
| `rotate-315` | 旋转 315 度 |
| `flip-horizontal` | Flip DOM element horizontally |
| `flip-vertical` | Flip DOM element vertically |

## Border Related
| CSS类名 | 描述 |
| --- | --- |
| `no-border` | 移除所有边框 |
| `no-border-radius` | 移除边框的圆角  |
| `no-box-shadow` | 移除边框的阴影  |
| `no-outline` | 移除边框的框线  |
| `rounded-borders` | 加上常规一个圆角  |
| `border-radius-inherit` | 从父元素继承圆角  |
