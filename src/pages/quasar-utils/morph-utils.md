---
title: Morph Utils
desc: Morph one DOM element into another (with animation) or between two states of the same element using Quasar's morph util.
keys: morph
related:
  - /vue-directives/morph
---

您可以将一个DOM元素变形为另一个元素(使用动画)，或者使用类星体的变形到下面描述的两个相同元素的状态之间。

You can morph one DOM element into another (with animation) or between two states of the same element using Quasar's morph util described below.

可能也值得看看使用这个util的[Morph 指令](/vue-directives/morph)，但它使用起来更简单。

Might also be worth to look at the [Morph directive](/vue-directives/morph) which uses this util but it's simpler to use.

## 用法

```js
import { morph } from 'quasar'

// 将一个dom变形成另外一个：
const cancelMorph = morph({
  from: '#from-el',
  to: '#to-el'
})

// 可以调用 cancelMorph() 来取消变形
```

这个函数需要一个必填的对象参数，这个对象中可以有以下属性：

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| from | DOM | - | (**必填**) 一个DOM或者CSS选择器或者是一个返回了DOM的函数 |
| to | DOM | - | 类型于"form",若"to"没有填，那么它将等于"from" |
| onToggle() | Function | - | 一个同步切换函数，在保存初始元素状态后立即执行。使用一个函数来切换组件的状态。 |
| waitFor | Number/'transitioned'/Promise | 0 | 一个数字，'transitionend'字符串或者一个Promise，他会延迟动画指定的毫秒数，或者等待目标DOM的'transitionend'事件被触发之后再开始变形，或者等待promise完成之后再开始变形（如果这个 Promise失败了，那么这个变形会被中止，但是`toggle`函数已经被调用了）。 |
| duration | Number | 300 | 动画的持续时间，单位毫秒。 |
| easing | String | 'ease-in-out' | 动画采用的加速度函数（CSS easing 格式） |
| delay | Number | 0 | 动画延迟的毫秒数 |
| fill | String | 'none' | 动画的fill模式 |
| style | String/Object | - | 会被应用在变形后的元素上的额外的样式。（字符串或者CSS样式对象） |
| classes | String | - | 会被应用在变形后的元素上的额外的CSS类名。（字符串或者CSS样式对象） |
| resize | Boolean | *false* | 强制调整大小而不是默认的缩放转换 |
| useCSS | Boolean | *false* | 强制使用CSS而不是动画API |
| hideFromClone | Boolean | *false* | 默认情况下，初始元素的克隆体用于填充删除后的空间——如果初始元素未被删除或不希望调整初始元素占用的空间大小，则设置此标志。|
| keepToClone | Boolean | *false* | 默认情况下，final元素会从动画的最终位置移除-设置此标志以在最终位置保留一个副本 |
| tween | Boolean | *false* | By default the final element is morphed from the position and aspect of the initial element to the ones of the final element - set this flag to use an opacity tween between the initial and final elements |
| tweenFromOpacity | Number | 0.6 | If using **tween** it is the initial opacity of the initial element (will be animated to 0) - the initial element is placed on top of the destination element |
| tweenToOpacity | Number | 0.5 | If using **tween** it is the initial opacity of the destination element (will be animated to 1) |
| onEnd(direction, aborted) | Function | - | A function that will be called once the morphing is finalized - receives two params: "direction" is a string ('to' if the morphing was finished in the final state or 'from' if it was finished in the initial state) and "aborted" is a boolean (true means that the animation was aborted) |

## Morphing lifecycle

1. Get the aspect and position of the initial element (if a function is provided for getting the initial element it will be called)
2. Calculate the size and position of the container of the initial element
3. If another morphing was using the same element that morphing will be aborted
4. Execute the onToggle() function (if present)
5. Recalculate the size and position of the container of the initial element to check if they are changed
6. In the next tick (to allow Vue to process the state changes) the final element will be identified (if a function is provided for getting the final element it will be called)
7. If another morphing was using the same element that morphing will be aborted
8. Calculate the size and position of the container of the final element
9. If a **waitFor** is provided, wait that number of milliseconds, for a 'transitionend' event or until the promise is resolved (if the promise is rejected then the morphing is aborted)
10. Recalculate the size and position of the container of the final element to check if they are changed
11. Get the aspect and position of the final element
12. Start the animation

Regarding the cancel() function (the return value of a call to morph()):
* If the `cancel` function that was returned is called during steps 1 to 11 then the morphing will be aborted (the `toggle function` will still be called if the cancel comes after step 4) and the returned value will be **false**.
* If the `cancel` function is called between the start and end of the animation then the animation will be reversed and the returned value will be **true**.
* If the `cancel` function is called after the end of the animation nothing will happen and the returned value will be **false**.

## Examples

<doc-example title="Morphing the same element" file="MorphUtils/SameElement" />

<doc-example title="Morphing a QCard from a QFabAction" file="MorphUtils/FabCard" />

<doc-example title="Image gallery " file="MorphUtils/ImageGallery" />

<doc-example title="Horizontal image strip " file="MorphUtils/ImageStripHorizontal" />

<doc-example title="Vertical image strip " file="MorphUtils/ImageStripVertical" />
