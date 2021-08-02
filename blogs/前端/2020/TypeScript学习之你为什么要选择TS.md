---
title: TypeScript学习之你为什么选择TypeScript
date: 2020-01-13 23:10:54
tags:
 - TypeScript入门 
 - TypeScript 
categories:
 - 前端
---

我是在什么样的机缘巧合下与 TypeScript 相逢的呢？这不得不提起当时的一场面试经历。

2020元旦之后，我见到了一个由安卓技术栈转前端的面试者，我问了一个最基本的js的隐式转换的知识点

    []=== '' //false
    []==''//true
当隐式转换==不是===恒等时，先将空数组转换成空字符串，再比较两边

他答错了，我好奇的问他不关心基础知识吗，他回答平时写typeScript时没注意到这些规则。

## TypeScript 真的能将我们从隐式类型转换等 JavaScript 的各种坑中拯救出来？

通过使用静态类型约束 React 组件 Props 和 State，我发现它与使用 JavaScript 相比，不仅支持在任何地方直观地获取组件的接口定义，还能对属性、状态中的值是否为空进行自动检测并给出提示（容错处理），甚至还支持对 React JSX 元素接收的各种属性、方法的检测和提示。

嗯，真香！

To B 应用。考虑到 To B 应用的业务逻辑及其复杂性，它对代码的稳定性、易读性、可维护性要求极高，而这正高度契合 TypeScript 的优势。于是，正式开始推广全栈式 TypeScript 技术方案。

## TypeScript 有这么好用吗？

### 1. TypeScript 的本质

TypeScript 与 JavaScript 本质并无区别，你可以将 TypeScipt 理解为是一个添加了类型注解的 JavaScript，比如 `const num = 1`，它同时符合 TypeScript 和 JavaScript 的语法。

此外，TypeScript 是一门中间语言，最终它还需要转译为纯 JavaScript，再交给各种终端解释、执行。不过，TypeScript 并不会破坏 JavaScript 既有的知识体系，因为它并未创造迥异于 JavaScript 的新语法，依旧是“熟悉的配方”“熟悉的味道”。
### 2. TypeScript 更加可靠

在业务应用中引入 `TypeScript` 后，当我们收到 `Sentry`（一款开源的前端错误监控系统）告警，关于`“'undefined' is not a function”“Cannot read property 'xx' of null|undefined”` 之类的低级错误统计信息基本没有。而这正得益于`TypeScript `的静态类型检测，让至少 10% 的 `JavaScript `错误（主要是一些低级错误）能在开发阶段就被发现并解决。

我们也可以这么理解，在所有操作符之前，`TypeScript` 都能检测到接收的类型（在代码运行时，操作符接收的是实际数据；静态检测时，操作符接收的则是类型）是否被当前操作符所支持。

当 `TypeScript` 类型检测能力覆盖到整个文件、整个项目代码后，任意破坏约定的改动都能被自动检测出来（即便跨越多个文件、很多次传递），并提出类型错误。因此，你可以放心地修改、重构业务逻辑，而不用过分担忧因为考虑不周而犯下低级错误。

接手复杂的大型应用时，`TypeScript` 能让应用易于`维护`、`迭代`，且`稳定可靠`，也会让你更有安全感。
### 3. 面向接口编程

编写 TypeScript 类型注解，本质就是接口设计。

以下是使用 TypeScript 设计的一个展示用户信息 React 组件示例，从中我们一眼就能了解组件接收数据的结构和类型，并清楚地知道如何在组件内部编写安全稳定的 JSX 代码。
复制代码

    interface IUserInfo {
      /** 用户 id */
      id: number;
      /** 用户名 */
      name: string;
      /** 头像 */
      avatar?: string;
    }
    function UserInfo(props: IUserInfo) {
      ...
    }

TypeScript 极大可能改变你的思维方式，从而逐渐养成一个好习惯。比如，编写具体的逻辑之前，我们需要设计好数据结构、编写类型注解，并按照这接口约定实现业务逻辑。这显然可以减少不必要的代码重构，从而大大提升编码效率。

同时，你会更明白接口约定的重要性，也会约束自己/他人设计接口、编写注解、遵守约定，乐此不疲。
### 4. TypeScript 正成为主流

相比竞争对手 Facebook 的 Flow 而言，TypeScript 更具备类型编程的优势，而且还有 Microsoft、Google 这两家国际大厂做背书。

另外，越来越多的主流框架（例如 React、Vue 3、Angular、Deno、Nest.js 等）要么选用 TypeScript 编写源码，要么为 TypeScript 提供了完美的支持。

随着 TypeScript 的普及，TypeScript 在国内（国内滞后国外）成了一个主流的技术方向，国内各大互联网公司和中小型团队都开始尝试使用 TypeScript 开发项目，且越来越多的人正在学习和使用它。