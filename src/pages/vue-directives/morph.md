---
title: Morph Directive
desc: Quasar中可以实现dom在两种状态间变化的Vue指令。
keys: morph
related:
  - /quasar-utils/morph-utils
---

"v-morph"是Quasar提供的指令，它可以使DOM在两种状态间变换。

底层原理使用了 [Morph函数工具](/quasar-utils/morph-utils).

## Morph API

<doc-api file="Morph" />

## 用法

请先阅读 [Morph工具函数](/quasar-utils/morph-utils)页面，有利于理解这个指令的工作原理。

这个指令将组中的一个元素变为另一个元素。变形是通过改变指令的值(model)来匹配变形元素的名称来激活的。

This directive morphs one element in a group into another. The morphing is activated by changing the value (model) of the directive to match the name of the morphing element.

::: warning
* The "name" and "group" (as directive arg or through the value of the directive) are mandatory.
* If the value of the directive is in Object form, then "model" is also mandatory.
:::

<doc-example title="Morph between multiple elements in a group" file="Morph/BasicGroup" />

<doc-example title="Morph a button into a card" file="Morph/Card" />
