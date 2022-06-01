---
title: App Icons
desc: 管理Quasar的应用图标和启动页面。
---
若你的目标是全平台支持，那么你需要分别为它们制作100多种不同要求的图标(png, ico, icns and svg)。balabala....总之就是推荐你使用下面这个图标生成工具。可以帮你一个图片搞定所有格式的应用图标。
If you were to target all platforms that Quasar currently supports, you will need to make 100+ different files of 4 different media types (png, ico, icns and svg). If you just use a tool like Gimp, Photoshop or Affinity Designer, you will find that these files are rather large and the process of making them and naming them is prone to operator error. You will probably want to compress the PNG files at least, and also remove unnecessary app-metadata from the SVG.

<img src="https://cdn.quasar.dev/img/iconfactory.png" style="float:right;max-width:15%;min-width:240px;padding-top:40px" />

## Icon Genie CLI

::: tip

我们强力推荐你去使用我们的[Icon Genie CLI](/icongenie/introduction),因为它只需要一份资源图标，就能自动生成克隆、缩放、缩小图标，然后生成不同平台上需要的图标格式，并将其放置在合适的目录中。必要时，它还会告诉你需要向 `/src/index.template.html` 中添加哪些标签。
:::
