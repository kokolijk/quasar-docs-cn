---
title: 安装图标库
desc: 如果在Quasar中引用图标库
related:
  - /options/quasar-icon-sets
  - /vue-components/icon
---

::: tip
**此页面讲述如何使用字体图标 [webfont icons](/vue-components/icon#webfont-icons) only.**
Svg图标不需要安装步骤，可直接使用。
:::

Quasar已经提供了几套开箱即用的图标库: [Material Icons](https://material.io/icons/) , [Font Awesome](https://fontawesome.com/icons), [Ionicons](http://ionicons.com/), [MDI](https://materialdesignicons.com/), [Eva Icons](https://akveo.github.io/eva-icons), [Themify Icons](https://themify.me/themify-icons), [Line Awesome](https://icons8.com/line-awesome) 和 [Bootstrap Icons](https://icons.getbootstrap.com/).但是你任然可以自行添加其他的图标库 [add support for others](/vue-components/icon#custom-mapping)。

::: tip
关于字体图标库，你可以选择安装一个或多个。
:::

## 安装字体图标库
如何你只是构建一个网站，那么你可以使用CDN来引用图标资源，但是如果你需要构建一个离线的手机app或者electron程序，那么你可能不希望它的图标依赖联网的服务。Quasar为你解决了这个问题：

编辑 `/quasar.config.js` 文件中的:

```js
extras: [
  'material-icons'
]
```
字体图标会通过 [@quasar/extras](https://github.com/quasarframework/quasar/tree/dev/extras)来提供，你不需要引入他们，只需像上述方式配置`/quasar.config.js`即可，也可以向下面这样同时开启多个图标库：

```js
extras: [
  'material-icons',
  'mdi-v6',
  'ionicons-v4', // last webfont was available in v4.6.3
  'eva-icons',
  'fontawesome-v6',
  'themify',
  'line-awesome',
  'bootstrap-icons'
]
```

全部可用图标库列表请见： [GitHub](https://github.com/quasarframework/quasar/tree/dev/extras#webfonts)

你现在可以在 [QIcon](/vue-components/icon) 组件中使用这些图标了

## 使用CDN替代

如果你想使用CDN，你自需要在`index.template.html`中使用style/link标签去引入CDN资源，但是不要同时在 `/quasar.config.js > extras`中配置。按照[UMD Installation Guide](/start/umd#installation)页面的示例修改`index.template.html`文件。

## 使用 Fontawesome-Pro
如果你有 Fontawesome v6 Pro 的许可证，你可以按照下述步骤使用Pro版本来替换免费版本：

1. 打开网站 [Linked Accounts section](https://fontawesome.com/account)的用户界面 npm TOKENID
2. 将复制的TOKENID复制到`.npmrc`（若没有此文件先创建它，文件位于package.json同级目录）
  ```
  @fortawesome:registry=https://npm.fontawesome.com/
  //npm.fontawesome.com/:_authToken=TOKENID
  ```
3. 安装 Fontawesome webfonts 依赖:
  ```bash
   yarn add @fortawesome/fontawesome-pro
  ```
4. 创建一个新的boot文件:
  ```bash
   quasar new boot fontawesome-pro [--format ts]
  ```
5. 将boot文件添加到 `/quasar.config.js`:
  ```js
  boot: [
    ...
    'fontawesome-pro' // Add boot file
  ],
  extras: [
    // 'fontawesome-v6' // Disable free version!
  ],
  framework: {
    // if you want Quasar to use Fontawesome for its icons
    iconSet: 'fontawesome-v6-pro'
  }
  ```
6. 编辑 `/src/boot/fontawesome-pro.js`:
  ```js
  // 必须的
  import '@fortawesome/fontawesome-pro/css/fontawesome.css'
  import '@fortawesome/fontawesome-pro/css/light.css'
  // 可选的
  // import '@fortawesome/fontawesome-pro/css/thin.css'
  // import '@fortawesome/fontawesome-pro/css/duotone.css'
  // import '@fortawesome/fontawesome-pro/css/brands.css'
  // import '@fortawesome/fontawesome-pro/css/solid.css'
  // import '@fortawesome/fontawesome-pro/css/regular.css'
  ```
7. (可选的) 重写默认的图标： Override default icons:

由于fontawesome-pro默认的 `font-weight` 是 `light` 或 `fal` ，导致一些图标用在组件中可能不太美观，最好在boot文件中覆盖掉它。

例如

```js
// example
chip: {
  remove: 'fal fa-times-circle'
```

_Then_, override it in your `/src/boot/fontawesome-pro.js`

```js
import '@fortawesome/fontawesome-pro/css/fontawesome.min.css'
import '@fortawesome/fontawesome-pro/css/solid.min.css'
import '@fortawesome/fontawesome-pro/css/light.min.css'

// example
export default ({ app }) => {
  app.config.globalProperties.$q.iconSet.chip.remove = 'fas fa-times-circle'
}
```
