---
title: CSS间距类
desc: Quasar提供的这些CSS工具类用于简化元素排版时的内外间距，并且是响应式的
related:
  - /style/typography
  - /style/positioning
  - /style/visibility
  - /style/breakpoints
---

Quasar提供了这些CSS工具类来帮你在页面布局时调整DOM之间的间距。
这些CSS类名的命名规则是`q-TD-S`,其中`q-`是统一前缀，`T`是类型表示内/外边距，`D`是方向，`S`是大小，详情见下表

## 语法
```
q-[p|m][t|r|b|l|a|x|y]-[none|auto|xs|sm|md|lg|xl]
    T       D                   S

T - 类型
  - 可取值: p , m。p表示padding（内边距），m表示margin（外边距）

D - 方向
  - 可取值:
      t (top-上), r (right-右), b (bottom-下), l (left-左),
      a (all-全部方向), x (水平方向即左和右), y (垂直方向即上和下)

S - 大小
  - 可取值:
      none (表示间距等于0)
      auto (只能用于: q-ml-*, q-mr-*, q-mx-*),
      xs (extra small-很小),
      sm (small-小),
      md (medium-中等),
      lg (large-大),
      xl (extra large-很大)
```

## 示例

```html
<!--  在上下左右所有方向上都加一个大小为small的内边距 (padding)  -->
<div class="q-pa-sm">...</div>

<!-- 在上方加一个大小为medium的外边距 (margin),在右边加一个大小为 small的外边距 -->
<q-card class="q-mt-md q-mr-sm">...</q-card>
```

## 完整的表格

| 前缀 | 类型 | 方向 | 大小 | 示例 |
|--------|------|-----------|------|---------
| `q-` | `p` (padding) | `t` (top) | `none` | `q-pt-none` |
| `q-` | `p` (padding) | `t` (top) | `xs` (extra small) | `q-pt-xs` |
| `q-` | `p` (padding) | `t` (top) | `sm` (small) | `q-pt-sm` |
| `q-` | `p` (padding) | `t` (top) | `md` (medium) | `q-pt-md` |
| `q-` | `p` (padding) | `t` (top) | `lg` (large) | `q-pt-lg` |
| `q-` | `p` (padding) | `t` (top) | `xl` (extra large) | `q-pt-xl` |
| `q-` | `p` (padding) | `r` (right) | `none` | `q-pr-none` |
| `q-` | `p` (padding) | `r` (right) | `xs` (extra small) | `q-pr-xs` |
| `q-` | `p` (padding) | `r` (right) | `sm` (small) | `q-pr-sm` |
| `q-` | `p` (padding) | `r` (right) | `md` (medium) | `q-pr-md` |
| `q-` | `p` (padding) | `r` (right) | `lg` (large) | `q-pr-lg` |
| `q-` | `p` (padding) | `r` (right) | `xl` (extra large) | `q-pr-xl` |
| `q-` | `p` (padding) | `b` (bottom) | `none` | `q-pb-none` |
| `q-` | `p` (padding) | `b` (bottom) | `xs` (extra small) | `q-pb-xs` |
| `q-` | `p` (padding) | `b` (bottom) | `sm` (small) | `q-pb-sm` |
| `q-` | `p` (padding) | `b` (bottom) | `md` (medium) | `q-pb-md` |
| `q-` | `p` (padding) | `b` (bottom) | `lg` (large) | `q-pb-lg` |
| `q-` | `p` (padding) | `b` (bottom) | `xl` (extra large) | `q-pb-xl` |
| `q-` | `p` (padding) | `l` (left) | `none` | `q-pl-none` |
| `q-` | `p` (padding) | `l` (left) | `xs` (extra small) | `q-pl-xs` |
| `q-` | `p` (padding) | `l` (left) | `sm` (small) | `q-pl-sm` |
| `q-` | `p` (padding) | `l` (left) | `md` (medium) | `q-pl-md` |
| `q-` | `p` (padding) | `l` (left) | `lg` (large) | `q-pl-lg` |
| `q-` | `p` (padding) | `l` (left) | `xl` (extra large) | `q-pl-xl` |
| `q-` | `p` (padding) | `a` (all) | `none` | `q-pa-none` |
| `q-` | `p` (padding) | `a` (all) | `xs` (extra small) | `q-pa-xs` |
| `q-` | `p` (padding) | `a` (all) | `sm` (small) | `q-pa-sm` |
| `q-` | `p` (padding) | `a` (all) | `md` (medium) | `q-pa-md` |
| `q-` | `p` (padding) | `a` (all) | `lg` (large) | `q-pa-lg` |
| `q-` | `p` (padding) | `a` (all) | `xl` (extra large) | `q-pa-xl` |
| `q-` | `p` (padding) | `x` (left & right) | `none` | `q-px-none` |
| `q-` | `p` (padding) | `x` (left & right) | `xs` (extra small) | `q-px-xs` |
| `q-` | `p` (padding) | `x` (left & right) | `sm` (small) | `q-px-sm` |
| `q-` | `p` (padding) | `x` (left & right) | `md` (medium) | `q-px-md` |
| `q-` | `p` (padding) | `x` (left & right) | `lg` (large) | `q-px-lg` |
| `q-` | `p` (padding) | `x` (left & right) | `xl` (extra large) | `q-px-xl` |
| `q-` | `p` (padding) | `y` (top & bottom) | `none` | `q-py-none` |
| `q-` | `p` (padding) | `y` (top & bottom) | `xs` (extra small) | `q-py-xs` |
| `q-` | `p` (padding) | `y` (top & bottom) | `sm` (small) | `q-py-sm` |
| `q-` | `p` (padding) | `y` (top & bottom) | `md` (medium) | `q-py-md` |
| `q-` | `p` (padding) | `y` (top & bottom) | `lg` (large) | `q-py-lg` |
| `q-` | `p` (padding) | `y` (top & bottom) | `xl` (extra large) | `q-py-xl` |
| `q-` | `m` (margin) | `t` (top) | `none` | `q-mt-none` |
| `q-` | `m` (margin) | `t` (top) | `xs` (extra small) | `q-mt-xs` |
| `q-` | `m` (margin) | `t` (top) | `sm` (small) | `q-mt-sm` |
| `q-` | `m` (margin) | `t` (top) | `md` (medium) | `q-mt-md` |
| `q-` | `m` (margin) | `t` (top) | `lg` (large) | `q-mt-lg` |
| `q-` | `m` (margin) | `t` (top) | `xl` (extra large) | `q-mt-xl` |
| `q-` | `m` (margin) | `t` (top) | `auto` | `q-mt-auto` |
| `q-` | `m` (margin) | `r` (right) | `none` | `q-mr-none` |
| `q-` | `m` (margin) | `r` (right) | `xs` (extra small) | `q-mr-xs` |
| `q-` | `m` (margin) | `r` (right) | `sm` (small) | `q-mr-sm` |
| `q-` | `m` (margin) | `r` (right) | `md` (medium) | `q-mr-md` |
| `q-` | `m` (margin) | `r` (right) | `lg` (large) | `q-mr-lg` |
| `q-` | `m` (margin) | `r` (right) | `xl` (extra large) | `q-mr-xl` |
| `q-` | `m` (margin) | `r` (right) | `auto` | `q-mr-auto` |
| `q-` | `m` (margin) | `b` (bottom) | `none` | `q-mb-none` |
| `q-` | `m` (margin) | `b` (bottom) | `xs` (extra small) | `q-mb-xs` |
| `q-` | `m` (margin) | `b` (bottom) | `sm` (small) | `q-mb-sm` |
| `q-` | `m` (margin) | `b` (bottom) | `md` (medium) | `q-mb-md` |
| `q-` | `m` (margin) | `b` (bottom) | `lg` (large) | `q-mb-lg` |
| `q-` | `m` (margin) | `b` (bottom) | `xl` (extra large) | `q-mb-xl` |
| `q-` | `m` (margin) | `b` (bottom) | `auto` | `q-mb-auto` |
| `q-` | `m` (margin) | `l` (left) | `none` | `q-ml-none` |
| `q-` | `m` (margin) | `l` (left) | `xs` (extra small) | `q-ml-xs` |
| `q-` | `m` (margin) | `l` (left) | `sm` (small) | `q-ml-sm` |
| `q-` | `m` (margin) | `l` (left) | `md` (medium) | `q-ml-md` |
| `q-` | `m` (margin) | `l` (left) | `lg` (large) | `q-ml-lg` |
| `q-` | `m` (margin) | `l` (left) | `xl` (extra large) | `q-ml-xl` |
| `q-` | `m` (margin) | `l` (left) | `auto` | `q-ml-auto` |
| `q-` | `m` (margin) | `a` (all) | `none` | `q-ma-none` |
| `q-` | `m` (margin) | `a` (all) | `xs` (extra small) | `q-ma-xs` |
| `q-` | `m` (margin) | `a` (all) | `sm` (small) | `q-ma-sm` |
| `q-` | `m` (margin) | `a` (all) | `md` (medium) | `q-ma-md` |
| `q-` | `m` (margin) | `a` (all) | `lg` (large) | `q-ma-lg` |
| `q-` | `m` (margin) | `a` (all) | `xl` (extra large) | `q-ma-xl` |
| `q-` | `m` (margin) | `x` (left & right) | `none` | `q-mx-none` |
| `q-` | `m` (margin) | `x` (left & right) | `xs` (extra small) | `q-mx-xs` |
| `q-` | `m` (margin) | `x` (left & right) | `sm` (small) | `q-mx-sm` |
| `q-` | `m` (margin) | `x` (left & right) | `md` (medium) | `q-mx-md` |
| `q-` | `m` (margin) | `x` (left & right) | `lg` (large) | `q-mx-lg` |
| `q-` | `m` (margin) | `x` (left & right) | `xl` (extra large) | `q-mx-xl` |
| `q-` | `m` (margin) | `x` (left & right) | `auto` | `q-mx-auto` |
| `q-` | `m` (margin) | `y` (top & bottom) | `none` | `q-my-none` |
| `q-` | `m` (margin) | `y` (top & bottom) | `xs` (extra small) | `q-my-xs` |
| `q-` | `m` (margin) | `y` (top & bottom) | `sm` (small) | `q-my-sm` |
| `q-` | `m` (margin) | `y` (top & bottom) | `md` (medium) | `q-my-md` |
| `q-` | `m` (margin) | `y` (top & bottom) | `lg` (large) | `q-my-lg` |
| `q-` | `m` (margin) | `y` (top & bottom) | `xl` (extra large) | `q-my-xl` |
| `q-` | `m` (margin) | `y` (top & bottom) | `auto` | `q-my-auto` |


## 响应式间距

当你打开了(`quasar.config.js > framework > cssAddon: true`)时，所有的间距css类还会新增一个带有断点的版本，可以控制在不同尺寸的屏幕下有不同的效果，你可以使用这个功能轻松的构建响应式网站/app。

> 需要注意的是，打开这个功能后，打包的css体积会变大很多，请确保你需要它后再打开。

带有断点的版本语法如下：
```
.q-(p|m)(t|r|b|l|a|x|y)-<bp>-(none|auto|xs|sm|md|lg|xl)
```

例如:
`q-pa-xs-md` 表示在屏幕尺寸大于xs的时候才会加上一个全部方向大小为md的内边距

`q-ma-sm-sm` 表示在屏幕尺寸大于sm的时候才会加上一个全部方向大小为sm的外边距

`q-px-md-lg` 表示在屏幕尺寸大于md的时候才会加上一个水平方向大小为lg的内边距

`q-my-md-md` 表示在屏幕尺寸大于md的时候才会加上一个垂直方向大小为md的外边距


::: tip
完整的断点列表见： [breakpoints](/style/breakpoints).
:::

## 其他相关
| 类名 | 描述 |
| --- | --- |
| `no-margin` | 移除外边距 |
| `no-padding` | 移除内边距 |

## 视屏讲解
[B站视屏讲解](https://www.bilibili.com/video/BV1pA4y197Zc?p=10)
