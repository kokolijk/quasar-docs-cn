---
title: Typography 字体和排版
desc: The typography of a Quasar app and its helper CSS classes.
components:
  - typography/TypographyHeadings
  - typography/TypographyWeights
related:
  - /style/visibility
  - /style/positioning
  - /style/spacing
---
下面展示了quasar提供的字体排版相关的css辅助类，你可以通过将这些css类名添加到元素的class中去使用他们。

## Headings 标题
<typography-headings />

## 字重
<typography-weights />

## 其他的CSS字体排版辅助类
| Class 类名 | 功能 |
| --- | --- |
| `text-right` | 文字靠右对齐 |
| `text-left` | 文字靠左对齐 |
| `text-center` | 文字居中对齐 |
| `text-justify` | Text will be justified |
| `text-bold` | 文字加粗 |
| `text-italic` | 斜体 |
| `text-no-wrap` | 控制文字不换行 (应用： `white-space: nowrap`) |
| `text-strike` | 应用： `text-decoration: line-through` |
| `text-uppercase` | 将字母转换为大写 |
| `text-lowercase` | 将字母转换为小写 |
| `text-capitalize` | 首字母大写 |

## 默认字体
默认字体是： [Roboto](https://fonts.google.com/specimen/Roboto). **但是这是可定义的**. 你可以选择任何你喜欢的字体.

Roboto提供了5种可以使用的字重：100, 300, 400, 500, 700.

如果你想删除默认的Roboto字体，请编辑`quasar.config.js`中的extras数组：

```js
// file: /quasar.config.js
extras: [
  'roboto-font'
]
```

## 添加自定义的字体
通过下列步骤添加自定义字体：

1. 将你的字体文件复制到项目文件夹中，例如`./src/css/fonts/[customfont.woff]`，当然，使用别的字体格式也可以，但是woff格式的字体文件是最推荐的，因为它兼容所有的浏览器，。

2. 在合适的css文件中引用上述字体文件，例如在`./src/css/app.{css|sass|scss|styl}`中，注意不要写错字体文件的相对路径。

    ```css
    @font-face {
      font-family: customfont;
      src: url(./fonts/customfont.woff);
    }

    // 声明一个css类去使用这个字体
    .my-font {
      font-family: 'customfont';
    }
    ```

3. 然后你可以将这个css类应用到需要的地方了，如果要全局使用的话，可以将`font-family: 'customfont';`直接添加到body
或者html中，并确保这个css文件名被添加到`quasar.config.js`中的css数组中。

    ```css
    /** file： /src/css/app.css */
    @font-face {
      font-family: customfont;
      src: url(./fonts/customfont.woff);
    }

    // 声明一个css类去使用这个字体
    body {
      font-family: 'customfont';
    }
    ```

    ```js
    /** file: /quasar.config.js */
    css: [
      'app.css'
    ],
    ```
