---
title: Breakpoints
desc: Quasar的css断点列表。
related:
  - /style/spacing
---
Quaasr拥有以下CSS断点：

| Window 大小 | 命名 | 断点像素大小 |
| --- | --- | --- |
| Extra Small | `xs` | 599px以下 |
| Small | `sm` | 600px 到 1023px |
| Medium | `md` | 1024px 到 1439px |
| Large | `lg` | 1440px 到 1919px |
| Extra Large | `xl` | 1920px以上 |

这些断点需要搭配其他的css工具类来使用，例如[响应式Flexbox](/layout/grid/introduction-to-flexbox#responsive20design)，
[响应式间距](/style/spacing#e5938de5ba94e5bc8fe997b4e8b79d)

更多关于如何使用断点的信息请看：[Visibility](/style/visibility) 页面。

### Sass

你也可以在Sass/scss中使用这些断点

```sass
@media (max-width: $breakpoint-xs-max)
  font-size: 10px
```

语法如下，其中`<breakpoint>`可替换为"xs", "sm", "md", "lg" 或者 "xl"：
```
$breakpoint-<breakpoint>-min
$breakpoint-<breakpoint>-max
```

这样也可以：

```
$sizes.<breakpoint>
// 替换 <breakpoint> 为 xs, sm, md, lg 或 xl
```

[如果你打开了这个设置](/options/screen-plugin#how20to20enable20body20classes),还可以在 document.body.screen上使用断点：`screen--xs`, `screen--sm`, ..., `screen--xl`.

```sass
.my-div
  body.screen--xs &
    color: #000
  body.screen--sm &
    color: #fff
```
