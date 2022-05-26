---
title: Card
desc: The QCard Vue component is a great way to display important pieces of grouped content. It assists the viewer by containing and organizing information, while also setting up predictable expectations.
keys: QCard
related:
  - /vue-components/separator
---

使用QCard组件来把重要的信息分组展示，这种模式已经成为各种网站和应用程序的主流设计，不仅能把信息展示得清晰条理，而且还很美观，不会让你的页面看上去很死板。

为了在有限的屏幕尺寸上展示足够多的信息，卡片式的设计风格已经成为谷歌，推特等各大公司的首选设计模式。

Qcard组件很轻巧，它实际上是一个容器元素，你可以使用QCard组件来包裹任何元素，使其具有卡片式的设计感。

## QCard API
<doc-api file="QCard" />

## QCardSection API
<doc-api file="QCardSection" />

## QCardActions API
<doc-api file="QCardActions" />

## Usage 用法

::: tip
你可以在卡片中使用[排版](/style/typography)来创造精美的卡片。
:::

### Basic
<doc-example title="Basic cards" file="QCard/Basic" />

### With actions
<doc-example title="Cards with actions" file="QCard/Actions" />

可以通过`align`属性来自定义actions的对齐方式

<doc-example title="Aligning actions" file="QCard/ActionsAlignment" />

### Media content
<doc-example title="Cards with media content" file="QCard/Media" />

<doc-example title="Card with video" file="QCard/Video" />

<doc-example title="Card with parallax" file="QCard/Parallax" />

### Horizontal

在下面的示例中，注意一个外层的带`horizontal`属性的QCardSection组件包裹了另外的QCardSection。另外你可以直接把`col-*`css类添加到子QCardSection组件的class中来控制大小。

如果需要在带有horizontal属性的QCardSections组件中展示图片，更推荐你使用QImg组件而不是原生的`<img>`标签

<doc-example title="Basic horizontal" file="QCard/HorizontalBasic" />

<doc-example title="More involved examples" file="QCard/HorizontalMoreInvolved" />

### Various content
<doc-example title="Various content" file="QCard/VariousContent" />

<doc-example title="Table" file="QCard/Table" />

<doc-example title="Tabs" file="QCard/Tabs" />

### Expandable

下面的示例可以点击最右边的按钮来展开操作面板
<doc-example title="Expandable" file="QCard/Expandable" />
