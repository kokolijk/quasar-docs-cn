---
title: Quasar CLI
desc: How to use the Quasar CLI, the premium developer experience for free.
---

Quasar CLI 我们引以为傲的脚手架，你可以通过它构建:

* SPA (Single Page App，单页应用)
* SSR (Server-side Rendered App，服务端渲染) (可与PWA同时存在)
* PWA (渐进式web应用程序)
* BEX (Browser Extension，浏览器插件)
* 手机App (Android, iOS, …) 通过 Cordova 或者 Capacitor构建
* 跨平台的桌面应用 (使用 Electron构建)

## 安装

::: tip 环境要求:
* Webpack版本的 Quasar CLI需要 Node 12+ , vite版本的 Quasar CLI 需要 Node 14+。.
* Yarn v1 (推荐) 或者 NPM.
:::

```bash
$ yarn global add @quasar/cli

# 或者使用:

$ npm i -g @quasar/cli
```

如果你想有以下特性，请选择 `Quasar CLI with Vite`：
* 更快的开发项目启动速度
* 更快的热更新
* 更快的打包
* 更优越的PWA、SSR和BEX模式 (more features)

<q-btn color="brand-primary" no-caps no-wrap push label="Go to User Interface Components" to="/vue-components" />

## 创建项目/目录结构

1. 让我们通过下面的命令创建项目:

    ```bash
    $ yarn create quasar
    # 或者使用:
    $ npm init quasar
    ```
    <br>

2. 输入命令后会进入命令行界面选择 `App with Quasar CLI` 选项，然后选择 `Quasar v2`.

3. 接下来会询问你要选择vite还是webpack版本?

    ::: tip 如果你想有以下特性，请选择 `Quasar CLI with Vite`：
    * 更快的开发项目启动速度
    * 更快的热更新
    * 更快的打包
    * 更优越的PWA、SSR和BEX模式 (more features)
    :::

4. 接下来命令行会继续提问你需要使用哪些模块，包括ts，eslint，axios等，跟随提示回答剩下的问题，就差不多完成了。

5. 创建完成，并确保成功安装项目依赖后，你可以使用Quasar CLI提供的`quasar dev`命令来运行项目，使用`quasar build`来打包项目。也可以使用yarn或npx来启动/打包项目(`yarn quasar dev/build` / `npx quasar dev/build`)，但是更推荐使用第一种方式。

    ::: tip
    如果你使用yarn，请确保已经添加了yarn到你电脑的环境变量的PATH中 [global install location](https://yarnpkg.com/lang/en/docs/cli/global/):
    <br><br>

    ```bash
    # in ~/.bashrc or equivalent
    export PATH="$(yarn global bin):$PATH"

    # for fish-shell:
    set -U fish_user_paths (yarn global bin) $fish_user_paths
    ```
    <br>
     在Windows下，修改用户的PATH环境变量。如果你使用yarn，则添加`%LOCALAPPDATA%\yarn\bin`, 若使用npm 则添加 `%APPDATA%\npm`.
    :::

    ::: tip WSL2
    Microsoft's recommended [Nodejs development environment setup in WSL2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2).

    When using WSL2 (Windows Subsystem for Linux) [Microsoft recommends](https://docs.microsoft.com/en-us/windows/wsl/compare-versions#performance-across-os-file-systems) keeping files in the linux file system to maximize performance. Projects will build around 3X slower and HMR (Hot Module Reload) will not work without a hack if the project files are on the Windows mount instead of the local linux file system. This is also true in Docker for Windows based development environments.
    :::

## Quasar CLI是如何工作的

Quasar CLI（`@Quasar/CLI`）与`@Quasar/app vite`或`@Quasar/app`协同工作。第一个是可选的（但强烈建议），允许您直接运行Quasar CLI命令和一些其他有用的命令，如Quasar upgrade（无缝升级Quasar包）或Quasar serve（通过ad-hoc webserver为您的可分发服务器提供服务）。第二个包是它的核心（运行重要的命令-dev、build、inspect、info、descripe等），它被本地安装到每个Quasar项目文件夹中。

#### 在没有全局安装`@quasar/cli` 的情况下怎么运行

虽然你没有全局安装`@quasar/cli`，但是`@quasar/app-vite` 或者 `@quasar/app-webpack`其中的一个会被安装到你的项目依赖中去，所以你可以通过下面两种方式来运行Cli的命令：

1. 在你项目的`package.json`中添加启动脚本，例如:
    ```js
    // package.json
    "scripts": {
      "dev": "quasar dev",
      "build": "quasar build",
      "build:pwa": "quasar build -m pwa"
    }
    ```

    这样,你就可以通过 `yarn dev` 或者 `yarn build` 或者 `npm run dev`,`npm run build` 来启动/打包你的项目，没有全局安装`@quasar/cli`也没有关系。

2. 或者，你可以直接通过Yarn运行Quasar CLI命令，例如:

    ```bash
    yarn quasar dev
    yarn quasar inspect
    # ..etc
    ```
    <br>

3. 或者使用 [npx](https://github.com/npm/npx):

    ```bash
    npx quasar dev
    npx quasar inspect
    # ..etc
    ```

## What next?

<q-btn color="brand-primary" no-caps no-wrap push label="去看看vue组件" to="/vue-components" />
