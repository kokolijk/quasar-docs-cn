---
title: Button Group
desc: The QBtnGroup Vue component groups QBtn and QBtnDropdown into a single unit.
keys: QBtnGroup
related:
  - /vue-components/button
  - /vue-components/button-dropdown
  - /vue-components/button-toggle
---

你可以使用QBtnGroup组件很方便的把[QBtn](/vue-components/button) 和 [QBtnDropdown](/vue-components/button-dropdown)组合起来，如果你还不了解QBtn和QBtnDropdown组件的话，请先转到相应的页面去了解他们的属性和方法。

## QBtnGroup API

<doc-api file="QBtnGroup" />

## Usage
<doc-example title="Examples" file="QBtnGroup/Group" />

::: warning
你必须在QBtnGroup父组件和QBtn/QBtnDropdown上使用相同的外形设计模式（相同的design属性）(flat, outline, push, ...)
:::

<doc-example title="Spread horizontally" file="QBtnGroup/GroupSpread" />

<doc-example title="With QBtnDropdown" file="QBtnGroup/WithDropdown" />
