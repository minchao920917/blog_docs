---
title: ES6的八个常用JavaScript小技巧
date: 2019-05-13 23:00:54
tags:
 - ES6 
 - 面试
categories:
 - 前端
---


## String转换为数字类型

JavaScript是一种松散类型的语言，这意味着我们不必显式指定变量的类型。JavaScript还可根据使用的上下文自由地转换值类型。
将值转换为数字，尤其是将字符串转换为数字是很常见的要求，并且可以通过许多方法实现。

- 一元+运算符：

        +"42"  // 42
        +true  // 1
        +false // 0
        +null  // 0

- Number(value)

        Number('42')   // 42
        Number('1.3')  // 1.3
        Number('tax')  // NaN

- parseInt()方法

        parseInt('1234', 10)       // 1234
        parseInt('11 players', 10) // 11
        parseInt('player 2', 10)   // NaN
        parseInt('10.81', 10)      // 10

- parseFloat

        parseFloat('10.42') // 10.42
        parseFloat('10.00') // 10

## 解构赋值的管理对象

解构是ES6的重要组成部分，你可能会经常用到。它允许我们从对象中提取数据，并将提取的数据分配给变量

    const rectangle = { h: 100, w: 200 };
    const { h, w } = rectangle;

重命名变量：

    const { h: height, w: width} = rectangle;
    console.log(height); // 100

通过函数对返回的对象进行解构，然后选择要使用的值：

    function getPerson() {
      return {
        firstName: 'Max',
        lastName: 'Best',
        age: 42
      }
    }
    const { age } = getPerson();
    console.log(age); // 42

要以一种不变的方式删除属性，需要类似spread提供的一个小技巧，rest运算符，此运算符就像spread一样写作三个点（...）。在此例中，我们将其余属性传递到一个新的对象中。

    const { age:_ , ...person } = getPerson();

    console.log(person); // {firstName: "Max"lastName: "Best"}

现在，person对象具备了原始person对象除了age之外的所有属性。

## 交换两个变量

    let a= 'happy',b= 'sad';
    [a,b] = [b,a];
    //a= 'sad',b= 'happy'

不使用临时变量交换两个变量！

## 设置默认值

默认值检查值是否已被设置。

1.变量

空合并运算符（??）是一个逻辑运算符，当左侧操作数为null或undefined时返回右侧操作数，否则返回左侧操作数。

    const bookList = receivedBooks ?? [];   

2.参数

    function calculateArea(width, height = 100) {
        return width * height;
    }

    const area = calculateArea(50);
    console.log(area); // 5000

3.对象

解构对象时的另一个技巧是设置默认值：

    const rectangle = { height: 400 };
    const { height = 750, width = 500 } = rectangle;
    console.log(height); // 400 - comes from rectangle object
    console.log(width);  // 500 - fallback to default
只有在值为undefined的情况下，ES6解构默认值才会起效。

## 区间随机数

    const randomIntFromInterval = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

## 删除数组重复项

ES6中引入的Set对象类型允许我们存储唯一值。与spread运算符（...）一起使用就可以创建仅具有唯一值的新数组：

    const uniqueArray = [...new Set(array)]

从数组创建Set，并且由于Set中的每个值都必须是唯一的，因此删除所有重复项。然后，使用spread运算符将Set转换回新的数组。

## 动态属性名称

ES6还带来了计算的属性名称，允许对象字面量的属性键使用表达式。可以在方括号[]中存放key，我们可以将变量用作属性键：

    const type = "fruit";
    const item = {
      [type]: "kiwi"
    };

    console.log(item); // {fruit: "kiwi"}

这在要快速创建键的情况下，会很有用。
我们可以使用方括号索引表示法访问值：

    item[type];   // "kiwi"
    item["fruit"] // "kiwi"

也可以使用点表示法：

    item.fruit; // "kiwi"

##  扩展运算符+slice创建一个新数组

我们想将一个新的项添加到一个数组中，并且不改变原数组

    const insert = (arr, index, newItem) => [
      ...arr.slice(0, index), // first half of array
      newItem,                // new item
      ...arr.slice(index)     // rest of array
    ];

    const items = ['S', 'L', 'C', 'E']

    const result = insert(items, 2, 'I');

    console.log(result); // ["S", "L", "I", "C", "E"]
