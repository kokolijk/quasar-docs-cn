---
title: Getting Started - Pick a Quasar Flavour
desc: 'Get started with Quasar by picking one of its flavours: Quasar CLI, Vue CLI or UMD'
---

使用Quasar有四种方法。选一个最适合你的：

<div class="q-mx-md row items-stretch q-gutter-xs">
  <q-btn no-caps color="purple" push stack padding="sm lg" to="/start/quasar-cli">
    <span class="text-bold">Quasar CLI (有vite和webpack两个版本)</span>
    <span style="font-size:0.8em">强烈推荐！</span>
  </q-btn>
  <q-btn label="UMD/Standalone" color="teal-6" no-caps push to="/start/umd" />
  <q-btn label="Vite plugin" color="teal-6" no-caps push to="/start/vite-plugin" />
  <q-btn label="Vue CLI plugin" color="teal-6" no-caps push to="/start/vue-cli-plugin" />
</div>

### Comparison

| 特性                                                                                    | Quasar UMD | Quasar CLI (with Vite or Webpack) | Quasar Vite Plugin                  | Vue CLI Plugin |
| ------------------------------------------------------------------------------------------ | -------    | ---------- | ---------------------------- | -------------- |
| 能够嵌入到现有项目中                                                 | **Yes**    | -          | **Yes, if it is Vite app**   | **Yes, if it is Vue CLI app** |
| 渐进式集成Quasar                                                          | **Yes**    | -          | -                            | - |
| 从CDN引入Quasar                                                            | **Yes**    | -          | -                            | - |
| 构建 SPA, PWA                                                                             | **Yes**    | **Yes**    | **Yes**                      | **Yes** |
| 构建 SSR (+ optional PWA client takeover)                                                 | -          | **Yes**    | -                            | Yes(*) |
| 构建手机app 通过 Cordova 或者 Capacitor                                                 | **Yes**    | **Yes**    | Yes(*)                       | Yes(*) |
| 开发手机app时的热更新                                       | -          | **Yes**    | Yes(*)                       | Yes(*) |
| 构建桌面应用通过 Electron                                                            | -          | **Yes**    | Yes(*)                       | Yes(*) |
| 构建浏览器插件                                                                  | -          | **Yes**    | Yes(*)                       | Yes(*) |
| Quasar **应用扩展**                                                             | -          | **Yes**    | -                            | - |
| 轻松管理应用图标和启动动画通过[Icon Genie CLI](/icongenie/introduction) | -         | **Yes**    | -                            | - |
| 动态RTL支持                                                  | **Yes**    | **Yes**    | -                            | **Yes** |
| 生成自己的网站/应用RTL等价的CSS           | -          | **Yes**    | -                            | **Yes** |
| **确保一切都是开箱即用**, 保证最新的Quasar   | -      | **Yes**    | -                            | - |
| 构建模式之间的紧密集成，充分利用Quasar的所有功能。 | -      | **Yes**    | -                            | - |
| 一套代码构建SPA, PWA, SSR,手机应用，桌面应用和浏览器插件        | -      | **Yes**    | -                            | - |
| Tree Shaking                                                                               | -          | **Yes**    | **Yes**                      | **Yes** |
| SFC (单页面组件)                                              | -          | **Yes**    | **Yes**                      | **Yes** |
| 通过动态quasar.config.js进行高级配置                                      | -          | **Yes**    | -                            | - |
|单元测试，端到端测试支持                                                          | -          | **Yes**    | **Yes**                      | **Yes** |
| TypeScript支持                                                                         | -          | **Yes**    | **Yes**                      | **Yes** |
| **最佳和最受欢迎的选择!**                                                          |            | **YES!** |                             | |
|                                                                                            | Quasar UMD | Quasar CLI (with Vite or Webpack) | Quasar Vite Plugin                  | Vue CLI Plugin |


::: tip (*)注意⚠️!
虽然你可以直接通过`Vite`或`Vue CLI`和一些Vue社区构建的插件获得类似的多平台支持，但这些第三方的工具并没有与Quasar的组件紧密集成。因此，当你遇到这些第三方插件的问题时，你将不得不向每个插件的开发者的求助。有了Quasar，你就有了一个一站式服务，以防出现任何问题。此外，Quasar CLI确保应用程序在性能、项目规模和最佳实践方面都达到了最佳标准，这是别的工具无法提供的。
:::

### 推荐
让我们一起来尝试使用**Quasar's CLI**创建一个新的项目，你会得到极致的体验。

<q-btn push no-caps color="brand-primary" icon-right="launch" label="尝试Quasar CLI" to="/start/quasar-cli" class="q-mt-sm q-mb-lg" />
