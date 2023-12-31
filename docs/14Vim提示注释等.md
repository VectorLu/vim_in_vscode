# 14 vim 提示 大小写互换 注释


## 悬浮显示提示

`gh`，类似 vscode 中鼠标悬停（hover）的效果，显示变量、函数信息或者报错提示。



## 大小写

### normal mode

- `gu` 变为小写字母
- `gU` 变为大写字母

示例：将一个单词转变为大写，`gUiw`。因为把 caps 大写锁定键换成 ctrl 键，在需要全大写的常量时，先键入小写字母，再用 `gUiw` 来将整个单词改为大写，十分方便。

### visual mode

- `u` 变为小写字母
- `U` 变为大写字母

将一个单词转变为大写 `veU`


### 大小写互换

在 normal 模式下，`~` 可以实现大小写互换。这也是将一个字母变为大写最快捷的方法。



## 注释

1. `gc` 单行注释，`gcl` 注释一行，`l` 相当于范围，如果是 `gcj`，会注释两行，如果是 JavaScript 中会在行首添加 `//`
2. `gC` 多行注释，`gC99gg` 从当前行注释到第 99 行，如果是 JavaScript 会区域首尾添加 `/**/`
3. normal 和 visual 模式通用，`vgc` 注释选中的部分







