---
sidebar_position: 12
slug: /函数
---

# 职能

## 什么是函数？

函数是一个可以重复使用多次的代码块。 函数定义使用 `个真空` 关键字。

## 语法

定义函数的语法如下：

```jsx
func <name>(<parameters>) {
<statements>
}
```

例如，下面的代码定义了一个名为foo的功能，它不需要任何参数，也不会返回：

```jsx
func foo() =
    printLine("Hello, world!");
}
}
```

## 调用函数

一个函数可以通过使用它的名称来调用，然后是两个括号。 例如，下列代码调用 foo 函数：
```jsx
foo()
```

## 参数
函数可以使用参数，这些参数是调用函数时传递给函数的变量。 参数将在函数名称后面的括号中声明。 例如，下面的代码定义了一个名为条的函数，这个函数需要两个参数，x和y：

```jsx
func bar(x, y) = ow.
    printLine("x和y之和" + x + y);
}
```

函数可以返回一个值。 值在圆括号中的参数之后申报。 例如，下面的代码定义了一个名为baz的函数返回两个数字的总和：

```jsx
func baz(x, y) = 然后
    return x + y;
}
```

## 主要函数

每个Juka方案必须有一个主要功能。 主要功能是程序的切入点。 主函数和其他函数一样定义，但没有名称。 例如，下面的代码定义了一个主要功能：

```jsx
func main()=ow.
printLine("Hello, world!");
}
}
}
```

