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

突变观察者的一个用例是在应用程序中实现撤消/重做堆栈。根据过滤要求，您可以观察数据的添加和删除。您可以捕获堆栈中的突变，并使用堆栈实现撤消。撤消过程中的任何突变数据都可以进入重做堆栈。将规范化数据放入撤消堆栈时，不要忘记清除重做堆栈。
One use-case for the Mutation Observer is implementing an Undo/Redo stack in your application. You can observe additions and removals of data, depending on your filtering requirements. You can capture the mutations in a stack and use the stack to implement an undo. Any mutation data during an undo, can go into a redo stack. Don't forget to clear the redo stack when normalized data is being put into the undo stack.

<doc-example title="Undo/Redo" file="Mutation/UndoRedo" />
