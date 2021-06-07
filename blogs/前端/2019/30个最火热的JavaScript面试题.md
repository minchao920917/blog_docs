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

    document.write是重写整个document, 写入内容是字符串的html,
    
    innerHTML是HTMLElement的属性，是一个元素的内部html内容

    主要区别：
    document.write是直接将内容写入页面的内容流，会导致页面全部重绘，
    innerHTML将内容写入某个DOM节点，不会导致页面全部重绘

innerHTML很多情况下都优于document.write
    其原因在于其允许更精确的控制要刷新页面的那一个部分。
##  2、通过哪个属性来检测浏览器

    通过navigator对象的userAgent属性来判断，

    主要是判断userAgent 的信息里是否含有以下字段信息：

    navigator.userAgent.indexOf("Firefox") >-1    //火狐

    navigator.userAgent.indexOf("Chrome") >-1 //谷歌

    navigator.userAgent.indexOf("MEIS") >-1                       
       &&  navigator.userAgent.indexOf("Trident") >-1 //ie

##  3、JavaScript有哪几种数据类型

    原始类型：
        number
        string
        null
        undefined
        boolean
    
    对象类型(引用类型):
        Function
        Array
        Date

原始类型（基本类型）：按值访问，可以操作保存在变量中实际的值。原始类型汇总中null和undefined比较特殊。

引用类型：引用类型的值是保存在内存中的对象。

* 与其他语言不同的是，JavaScript不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。所以引用类型的值是按引用访问的。
##  4、截取字符串"abcdefghi"的fghi

    字符串截取
    一、substring(start,end) 包前不包后
        start 指明子字符串的起始位置，该索引从 0 开始起算。
        end 指明子字符串的结束位置，该索引从 0 开始起算。
        如果 start 或 end 为 NaN 或者负数，那么将其替换为0。


    "abcdefghi".substring(5) //fghi

    二、 函数 slice(start,end)  //包前不包后

        "abcdefghi".slice(5)  //fghi
        "abcdefghi".slice(-4)  //fghi

    三、函数 substr(start,length); 
    
    substr(start,length)表示从start位置开始，截取lengrh长度的字符串;

        "abcdefghi".substr(5,4)//fghi
        "abcdefghi".substr(5) //fghi
    
    四、函数 split(); //使用一个指定的分隔符把一个字符串分割存储到数组；

        "abcdefghi".split('e')[1] //fghi
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

    x   //  1
    y   //  undefined
    z   //  undefined
##  7、push()、pop()、shift()、unshift()分别是什么功能

    这两组同为对数组的操作，并且会改变数组的本身的长度及内容。

    不同的是 push()、pop() 是从数组的尾部进行增减
    unshift()、shift() 是从数组的头部进行增减。
##  8、如何阻止事件的冒泡

    1.event.stopPropagation(); 
    事件处理过程中，阻止了事件冒泡，但不会阻击默认行为（执行超链接的跳转） 
    2.return false; 
    事件处理过程中，阻止了事件冒泡，也阻止了默认行为（不执行超链接的跳转） 
    还有一种与冒泡有关的： 
    3.event.preventDefault(); 
    事件处理过程中，不阻击事件冒泡，但阻击默认行为（它只执行所有弹框，却没有执行超链接跳转）
##  9、写出以下程序的运行结果

    for(var i = 0,j = 0;i<10,j<6;i++,j++){
        k = i +j;
    }

    k值: 0 2 4 6 8 10 
##  10、编写一个函数，求一个字符串的字节长度

    //一个英文字符占用一个字节，一个中文字符占用两个字节
    function GetBytes(str){
        var len = str.length;
        var bytes = len;
        for(var i=0; i<len; i++){
            if (str.charCodeAt(i) > 255) //如果是中文
                bytes++;
        }
        return bytes;
    }

##  11、JavaScript中如何对一个对象进行深度clone

##  12、如何控制alert中的换行

    /n
##  13、编写函数parseQueryString()，把URL参数解析为一个对象，如:

    var url = "http://baidu.com/index.php?key0=0&key1=1&key2=2"

    function parseQueryString(url){
        var items=url.split("?")[1].split("&");
        var result={}
        var arr=;
        for(var i=0; i < items.length; i++){
            arr=items.split('=');
            result[arr[0]]=arr[1];
        }
        return result;
    }

    var obj=parseQueryString(url);
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

    // 889

    闭包的特性：
    1、函数内再嵌套函数
    2、内部函数可以引用外层的参数和变量
    3、参数和变量不会被垃圾回收机制回收

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