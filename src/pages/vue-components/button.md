---
title: Button
desc: The QBtn Vue component is a button with features like shaping, loading state, ripple and more.
keys: QBtn
related:
  - /vue-components/button-group
  - /vue-components/button-dropdown
  - /vue-components/button-toggle
---
Quasar中的按钮组件叫QBtn，它还带有一些额外实用的特性。例如：它自带两种样式，默认是矩形，可以设置为圆形，自带涟漪动画（可以禁用）。

自带加载动画，你可以在应用程序需要等待的时候使用，给用户一些关于延迟需要等待的反馈。使用时，当用户点击按钮时，按钮将显示一个旋转的加载动画（加载动画可以自定义）。

当按钮被点击时，会触发它的`@click`事件，除非它被禁用了。

## QBtn API

<doc-api file="QBtn" />

## Usage

### 标准

<doc-example title="Standard buttons" file="QBtn/Standard" />

### 自定义颜色

<doc-example title="Custom colors" file="QBtn/CustomColor" />

### 加上图标

<doc-example title="With icon" file="QBtn/WithIcons" />

### 圆形按钮

<doc-example title="Round buttons" file="QBtn/Round" />

### 自定义内容

<doc-example title="Custom content" file="QBtn/CustomContent" />

<doc-example title="Truncate label" file="QBtn/TruncateLabel" />

### 不同的外形设计

<doc-example title="Button design" file="QBtn/ButtonDesign" />

### 对齐

<doc-example title="Button alignment" file="QBtn/ButtonAlignment" />

### 大小

<doc-example title="Button size" file="QBtn/ButtonSize" />

### 内边距

默认的内边距是"xs md"。 你可以用`padding`这个属性来自定义它的内边距:

<doc-example title="Button padding" file="QBtn/ButtonPadding" />

### 加载和进度相关
一些按钮的操作涉及到与服务器通信，因为是异步通信，所以可能会需要一些时间。最好在异步响应准备好之前通知用户正在进行的后台进程，QBtn提供了一个`Loading`属性可以做到这些。使用这个属性会展示一个加载动画来代替原来的文字和图标。（加载动画默认是通过QSpinner组件实现，当然你也可以自定义加载动画）

<doc-example title="Indeterminate progress" file="QBtn/IndeterminateProgress" />

此外，你还可以额外使用一个`percentage` 属性在按钮中显示出进度信息：

<doc-example title="Deterministic progress" file="QBtn/DeterministicProgress" />

### 自定义涟漪动画

<doc-example title="Custom ripple" file="QBtn/CustomRipple" />

### 处理导航跳转 <q-badge align="top" color="brand-primary" label="updated for v2.4+" />

::: warning UMD usage
* 如果你要使用`to`和`replace`属性，请确保跳转的目标路由已经被你定义在你的项目中了，否则请使用`href`属性。 
* 鉴于上述原因，下面的一些按钮示例不能运行在Codepen/jsFiddle中，因为Codepen/jsFiddle上的项目没有vue-router
:::

::: tip
如果可以的话，尽量使用`Vue Router`提供的路由做页面跳转而不是使用`href`属性，因为使用`href`你会触发浏览器原生的导航而不是页面内的`Vue Router`导航，这不符合（spa）单页应用的定义。
:::

<doc-example title="Links" file="QBtn/Links" no-edit />

对于更复杂的用例，也可以直接使用`Vue`的原生组件`<router-link>`包装`QBtn`，这样也可以达到路由跳转的功能。

<doc-example title="Scoped slot of RouterLink" file="QBtn/RouterLinkExample" no-edit />

### 其他选项

<doc-example title="Other options" file="QBtn/OtherOptions" />

### 禁用

<doc-example title="Disable" file="QBtn/Disabled" />

### 控制表单提交

Qbtn可以作为表单的提交按钮，同时还可以实现按enter按键来提交，进度提示，加载动画，阻止重复提交等功能。（只需要在点击时将按钮设置为禁用状态即可实现阻止重复提交）

::: warning
当将类型为submit的QBtn放置在QField、QInput或QSelect的插槽之中时，您还应该在它的@click事件中调用表单的提交方法。这些插槽中的所有点击事件都不会冒泡到它们的父元素。（这段可能翻译的不好，所以把原文留下了了）

When placing a QBtn with type "submit" in one of the "before", "after", "prepend", or "append" slots of a QField, QInput or QSelect, you should also add a `@click` listener on the QBtn in question. This listener should call the method that submits your form. All "click" events in such slots are not propagated to their parent elements.
:::

<doc-example title="Form Submission" file="QBtn/FormSubmission" />
