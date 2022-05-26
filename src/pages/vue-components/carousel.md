---
title: Carousel
desc: The QCarousel Vue component allows you to display a series of slides, useful for wizards or an image gallery.
keys: QCarousel
---

QCarousel组件允许您使用幻灯片以更少的空间显示更多信息。对于创建向导或图库也很有用。

## QCarousel API

<doc-api file="QCarousel" />

## QCarouselControl API

<doc-api file="QCarouselControl" />

## QCarouselSlide API

<doc-api file="QCarouselSlide" />

## Usage 用法

::: tip
如果您在QCarouselSlide中添加了可以滑动导航的图片，那么您可能需要设置`draggable="false"`，否则浏览器的默认行为可能会产生负面影响。
:::

::: danger Keep Alive
* 请注意 QCarousel组件的`keep-alive`属性，如果您使用这个功能，就不要再使用vue3元素的`<keep-alive>`组件来包裹QCarousel组件。

* 如果你需要`keep-alive-include`或`keep-alive-exclude`属性，那么QCarouselSlide的`name`属性必须是有效的Vue组件名称(不允许空格，不要以数字开头等)。
:::

### Basic

下面是一个不带导航按钮的最基础的幻灯片示例（只带有动画和自定义的过渡效果），通过`v-model`来控制当前展示的画面。


<doc-example title="Basic" file="QCarousel/Basic" />

### Transitions

下面的示例中:

* 这里只展示了部分的过渡动画，完整的列表请见[Transitions](/options/transitions)页面.
* 除了点击按钮来切换页面，您也可以使用手指滑动（或者使用鼠标滑动，按下鼠标后瞬速左右拖动后松开）。

<doc-example title="Transitions, bottom navigation, arrows and auto padding" file="QCarousel/Transitions" />

### Vertical

<doc-example title="Vertical mode" file="QCarousel/Vertical" />

### Control type

这里的控制是指的是箭头和导航按钮，虽然它们是按钮元素，但是仍可以选择它们的类型来更好地应对你的设计。`control-color` 和 `control-text-color`属性也会对你有帮助。

<doc-example title="Control Type" file="QCarousel/ControlType" />

### Navigation position

<doc-example title="Navigation position" file="QCarousel/NavigationPosition" />

### Custom navigation

关于`navigation-icon`插槽的完整属性列表，请见页面上方的API卡片

<doc-example title="Custom navigation" file="QCarousel/CustomNavigation" />

### Auto padding


下面的示例中你可以对QCarousel做出不同的设置后观看控件间padding的变化：

<doc-example title="Padding" file="QCarousel/AutoPadding" />

### Media content

<doc-example title="Image slides" file="QCarousel/ImageSlides" />

<doc-example title="Multi-image slides" file="QCarousel/MultiImageSlides" />

<doc-example title="Captions" file="QCarousel/Captions" />

<doc-example title="Video slides" file="QCarousel/VideoSlides" />

在下面的示例中，加入`thumbnails`属性，会自动生成缩略图，缩略图只适用于图片内容的幻灯片。

<doc-example title="Thumbnails" file="QCarousel/Thumbnails" />

::: tip
不要将`navigation`导航属性和`thumbnails`缩略图属性一起使用，因为第一个会取代后者，这样就不会显示缩略图。
:::

### Infinite and autoplay 无限滚动和自动播放

你可以将鼠标移到幻灯片上来暂停自动播放

<doc-example title="Autoplay" file="QCarousel/InfiniteAutoplay" />

### Controls

<doc-example title="Controls" file="QCarousel/Controls" />

### With QScrollArea

请注意下面两个示例中如何使用[QScrollArea](/vue-components/scroll-area)。还要注意第二个示例中的`q-carousel--padding`CSS类名。

<doc-example title="With QScrollArea and padding" file="QCarousel/WithScrollareaPadding" />

<doc-example title="With QScrollArea on whole slide" file="QCarousel/WithScrollareaFull" />

### Fullscreen

<doc-example title="Fullscreen" file="QCarousel/Fullscreen" />
