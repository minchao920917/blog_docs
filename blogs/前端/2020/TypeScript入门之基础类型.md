---
title: TypeScript入门之基础类型
date: 2020-01-14 23:10:54
tags:
 - TypeScript入门 
 - TypeScript 
categories:
 - 前端
---


## TypeScript 简介

TypeScript 其实就是类型化的 JavaScript，它不仅支持 JavaScript 的所有特性，还在 JavaScript 的基础上添加了静态类型注解扩展。

这里我们举个例子来说明一下，比如 JavaScript 中虽然提供了原始数据类型 string、number，但是它无法检测我们是不是按照约定的类型对变量赋值，而 TypeScript 会对赋值及其他所有操作默认做静态类型检测。

![ts是js的超集.png](https://i.loli.net/2021/08/02/nBtZfQIwSaugohP.png)


在 TypeScript 中，我们不仅可以轻易复用 JavaScript 的代码、最新特性，还能使用可选的静态类型进行检查报错，使得编写的代码更健壮、更易于维护。比如在开发阶段，我们通过 TypeScript 代码转译器就能快速消除很多低级错误（如 type、类型等）。

接下来我们一起看看 TypeScript 的基本语法。
## TypeScript入门之基础类型


    let num: number = 1;
说明：number表示数字类型，:用来分割变量和类型的分隔符。

在语法层面，缺省类型注解的 TypeScript 与 JavaScript 完全一致。因此，我们可以把 TypeScript 代码的编写看作是为 JavaScript 代码添加类型注解。

| JavaScript基础类型 | TypeScript基础类型 |
| ---- | ---- |
| string | string |
| number | number |
| boolean | boolean |
| null | null |
| undefined | undefined |
| symbol | symbol |

基础类型

在 JavaScript 中，基础类型指的是非对象且没有方法的数据类型，它包括 string、number、bigint、boolean、undefined 和 symbol 这六种 （null 是一个伪基础类型，它在 JavaScript 中实际上是一个对象，且所有的结构化类型都是通过 null 原型链派生而来）。这里多嘴一句，null是一个薛定谔对象 typeof null结果是一个"object"
s
### 字符串

可以使用string表示 JavaScript 中任意的字符串（包括模板字符串），具体示例如下所示：

    let firstname: string = 'chao'; // 字符串字面量

    let familyname: string = String('min'); // 显式类型转换

    let fullname: string = `my name is ${firstname}.${familyname}`; // 模板字符串

说明：所有 JavaScript 支持的定义字符串的方法，我们都可以直接在 TypeScript 中使用。

### 数字

同样，可以使用number类型表示 JavaScript 已经支持或者即将支持的十进制整数、浮点数，以及二进制数、八进制数、十六进制数，具体的示例如下所示：

    /** 十进制整数 */
    let integer: number = 6;

    /** 十进制整数 */
    let integer2: number = Number(42);

    /** 十进制浮点数 */
    let decimal: number = 3.14;

    /** 二进制整数 */
    let binary: number = 0b1010;

    /** 八进制整数 */
    let octal: number = 0o744;

    /** 十六进制整数 */
    let hex: number = 0xf00d;

如果使用较少的大整数，那么我们可以使用bigint类型来表示，如下代码所示。
复制代码

    let big: bigint =  100n;

注意：虽然number和bigint都表示数字，但是这两个类型不兼容。