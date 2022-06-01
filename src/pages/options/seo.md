---
title: SEO with Quasar
desc: 如何在Quasar中进行搜索引擎优化。
---

术语SEO指的是搜索引擎优化（Search Engine Optimization）。Quasar也涵盖了这方面，通过[Quasar Meta Plugin](/quasar-plugins/meta)来帮助你进行搜索引擎优化

## Quasar Meta Plugin

[Quasar Meta Plugin](/quasar-plugins/meta)可以动态的改变页面的title，`<meta>`标签，`<html>`和`<body>`标签的属性。添加/删除/修改head标签中的`<style>` ， `<script>`和`<noscript>`。

充分利用此功能并与**Quasar CLI**结合起来，可以对 **SSR（服务器端渲染）** 应用的SEO有非常好的效果。但是将其用于SPA（单页应用程序）中没有太大意义，因为SPA的页面是运行时动态构建的，而不是由Web服务器直接提供。

::: tip
Quasar插件与Quasar有最紧密的集成，所以它与任何其他类似的解决方案相比都是最优的。
:::
