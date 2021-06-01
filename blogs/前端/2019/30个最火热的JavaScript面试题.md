---
title: 30个最火热的JavaScript面试题
date: 2019-05-16 23:10:54
tags:
 - JS 
 - 面试
categories:
 - 前端
---  

##  1、说出document.write和innerHTML的区别

##  2、通过哪个属性来检测浏览器

##  3、JavaScript有哪几种数据类型

##  4、截取字符串"abcdefghi"的figh

##  5、写出下面的运算结果:

    console.log(typeof(null));//“object"
    console.log(typeof(NaN));//"number"
    console.log(NaN == undefined);//false
    console.log(NaN == NaN);//false
    var str = "123abc";

    console.log(typeof(str++));//number
    console.log(str);//NaN

##  6、以下代码执行完毕后，x、y、z分别是多少

    var x =1,y=z=0;
    function add(n){
        n = n+1;
    }
    y = add(x);
    function add(n){
        n = n+3;
    }
    z = add(x);

##  7、push()、pop()、shift()、unshift()分别是什么功能

##  8、如何阻止事件的冒泡

##  9、写出以下程序的运行结果

    for(var i = 0,j = 0;i<10,j<6;i++,j++){
        k = i +j;
    }

##  10、编写一个函数，求一个字符串的字节长度

##  11、JavaScript中如何对一个对象进行深度clone

##  12、如何控制alert中的换行

##  13、编写函数parseQueryString()，把URL参数解析为一个对象，如:

    var url = "http://baidu.com/index.php?key0=0&key1=1&key2=2"

##  14、如何监控网页在网络传输过程中的数据量

##  15、以下代码运行结果是什么?

    function say(){
        //Local variable that ends up with closure
        var num = 888;
        var sayAlert = function(){
            alert(num);
        }
        num++;
        return sayAlert;
    }
    var sayAlert= say();
    sayAlert();

##  16、请事先ECMAScript5中的Object.getPrototypeOf()函数。

##  17、如何实现Array.prototype.forEach?

##  18、如何将arguments转为数组

##  19、以下程序运行结果是什么

    var ninja = function myNinja(){
        alert(ninja == myNinja);
    }
    ninja();
    myNinja();

##  20、如何获取光标水平位置

##  21、获取指定元素(elem)的样式属性(name)的方法(要兼容浏览器)

##  22、在JavaScript中实现类似PHP的print_r()函数

##  23、以下程序的运行结果是什么

    var b = parseInt("01");
    alert("b="+b);
    var c = parseInt("09/08/2010");
    alert("c="+c);

##  24、以下程序的运行结果是什么

    var foo = "hello";
    (function(){
        var foo = foo || 'world';
        console.log(foo);
    })()

##  25、当单机第5个input时，显示的数字是多少

    <html>
        <head?>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        </head>
        <body>
            for(var i = 0; i<10;i++){
                var input = document.createElement("input");
                input.type="button";
                input.value = "按钮"+(i+1);
                input.onclick = function(){
                    alert(i);
                }
                document.body.appemdChild(input);
            }
        </body>
    </html>

##  26、如何规避在JavaScript中多人开发造成的函数重名问题
##  27、前端开发有哪些优化问题
##  28、什么是Ajax，为什么要使用Ajax(请谈一下你对Ajax的认识)
##  29、Ajax请求总共有多少种callback
##  30、请给出异步加载JavaScript的方案，不小于两种