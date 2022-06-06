---
title: CSS Shadows (Elevation)
desc: Quasar提供了css工具类帮助给DOM添加阴影
---
Quasar提供了css工具类帮助给DOM添加阴影，使用起来简单又高效，并且这些阴影遵循Material Design的设计规范（将阴影分为24个等级，数字越大，阴影越深）

## Usage 用法

| CSS类名 | 描述 |
| --- | --- |
| `no-shadow` | 移除阴影 |
| `inset-shadow` | 在DOM的上方添加嵌入式风格的阴影  |
| `inset-shadow-down` | 在DOM的下方添加嵌入式风格的阴影  |
| `shadow-1` | 1级阴影 |
| `shadow-2` | 2级阴影 |
| `shadow-N` |  `N`可以被替换为1到24之间的整数，表示阴影的等级，数字越大，阴影越深 |
| `shadow-transition` | 给CSS阴影添加默认的过渡效果 |

<doc-example title="标准的阴影" file="shadows/Standard" scrollable />

上面的示例中，阴影都被添加到了元素的下方，若你想把阴影添加到元素的上方，可以通过在数字前加上`up`来实现。例如：

| CSS类名 | 描述 |
| --- | --- |
| `shadow-up-1` | 1级阴影 |
| `shadow-up-2` | 2级阴影 |
| `shadow-up-N` |`N`可以被替换为1到24之间的整数，表示阴影的等级，数字越大，阴影越深 |

<doc-example title="在元素上方的阴影" file="shadows/PointingUp" scrollable />

<doc-example title="内嵌的阴影" file="shadows/Inset" />
