---
title: Mutation Directive
desc: 使用Mutation Observer API来监听DOM树变化的Vue指令
keys: mutation
---

`v-mutation`是Quasar提供的一个vue指令，它提供了监听DOM树发生变化的能力，并在这些变化被触发时调用一个方法。

工作原理是使用了[Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)。

## Mutation API

<doc-api file="Mutation" />

## 用法

请先阅读[Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)页面，有利于理解这个指令是如何工作的。


`handler`回调函数中有一个参数，参考：[MutationRecord](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord)。

### 捕获所有 Catch everything

当`v-mutation`指令没有添加任何修饰符时，它会默认启用所有修饰符功能。（除了"once"）

<doc-example title="Catch everything" file="Mutation/CatchAll" />

### 拖拽示例

下面的示例只会在桌面浏览器中生效，因为它依赖于浏览器提供的拖拽api。将带颜色的块拖放到另外一个方框中，以查看效果。

<doc-example title="拖放 (只在桌面端生效)" file="Mutation/DragDrop" />

### 撤销/恢复示例

`v-mutation`的一个经典用例是在应用中实现撤消/恢复堆栈。你可以根据自己要求监听数据的变化，并将这些变化存储在一个堆栈中，并通过这个堆栈实现撤消/恢复的功能。

<doc-example title="撤销/恢复" file="Mutation/UndoRedo" />

### 视频讲解
若仍有疑惑，请观看[视频讲解](https://www.bilibili.com/video/BV1g94y127ap)
