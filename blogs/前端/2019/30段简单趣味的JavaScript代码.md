---
title: 30段简单趣味的JavaScript代码
date: 2019-05-15 23:10:54
tags:
 - JS 
 - 面试
categories:
 - 前端
---  

如今，JavaScript的强大已经毋庸置疑了，不论是在前端编写动画效果、处理DOM，还是处理服务端业务，它都游刃有余。JavaScript这么酷，那学习它的目标是什么呢，大道至简，目标就是针对Web项目需求，迅速找到合理的解决方案。

为了提升学习兴趣，以下搜集了30段JavaScript代码

##  前端开发人员经常遇到的问题就是如何区分IE及非IE浏览器

    if(!+[1,]){     //IE11不支持
        //这是IE浏览器
    }else{
        //这不是IE浏览器
    }

##  将日期直接转换为数值

    +new Date();//1396338783628

##  非IE浏览器下将类数组对象arguments转为数组

    Array.prototype.slice.call(arguments);

arguments不是Array的实例，因此不是真正的数组，也就是没有slice(),那为什么Arrat.prototype.slice而不是Array().slice或[].slice呢，因为这两种方法效率比较低，使用prototype访问内置函数。

##  最简单的选择运算符||

    var a = 0 || 3;
    //a=3

##  单链式运算

    var a = 10;
    console.log(a++-1);//9

##  有趣的void操作符

    <a href="javascript:void(0)">这是一个死链接</a>

##  跳转到新页面，并且保证浏览器不会回退

    location.replace("http://www.baidu.com")

location的replace()方法可以用一个新的文档替换当前文档，并且该方法还会覆盖History对象中的记录

##  几秒之后返回上一页

    <meta http-equiv="refresh" content="3" url="javascript:window.history.go(-1);">

##  在打开的子窗口刷新父窗口

    window.opener.location.reload();

##  验证是否为负数的正则表达式

    /^-\d+$/.test(str)

##  用JavaScript打印页面

    window.print()
    //属于浏览器内置的API，用于直接打印页面

##  显示隐藏一个DOM元素

    el.style.display="";
    el.style.display = "none"

##  实现alert换行文本

    alert("a\nb");

##  实现ECMAScript5中的Object.create()函数

    function clone(proto){
        function _clone(){
            _clone.prototype = proto;
            _clone.prototype.constructor = _clone;
            return new _cloe();
        }
    }//等价于Object.create(xx)
    var me = clone(Person)

用原型链形式继承，构造函数重新指向新创建的对象

##  理解JavaScript中的闭包

例如，以下代码会输出5次，结果都是5，如何输出 0、1、2、3、4？

    for(var i = 0;i<5;i++){
        setTimeout(function(){
            console.log(i);
        },1000)
    }
利用闭包的原理实现，代码如下：

    for(var i = 0; i<5;i++){
        (function(e){
            setTimeout(function(){
                console.log(e);
            },1000)
        })(i)
    }

##  监测Shift、Alt、Ctrl键

    //浏览器内置的监测方法
    event.shiftKey
    event.altKey
    event.ctrlKey

##  获取屏幕分辨率的宽、高

    window.screen.height;
    window.screen.width;
    //window.screen 对象包含了有关用户屏幕的信息

##  脚本永不出错的方式

    windwo.onerror = funtion(m,f){
        return true;
    }

##  让JavaScript处理字符串与ASCII码之间的转换

    console.log("a".charCodeAt(0));//97
    console.log(String.fromChartCode(75));//K

    //chartCodeAt()返回指定位置字符的Unicode编码
    //fromCharCode()接收一个指定的Unicode值，然后返回一个字符串

##  访问对象属性的代码

    var demo = { name:'mc'}
    dome.name //mc
    dome['name'] //mc
    
##  把一个值转变为布尔型的最简单的方式

    !!'demo';       //true
    !!"";           //false
    !!"0";          //true
    !!"1";          //true
    !!{};           //true
    !!true;         //true

    使用!操作符两次，可以把一个值转换为布尔值

##  判断浏览器是否支持HTML5

    !!navigator.geolocation;  //在HTML5中，可以获取当前设备的位置

##  判断乱浏览器是否支持canvas

    function isCanvas(){
        return !!document.createElement('canvas').getContext;
    }

##  判断IE浏览的版本

    window.navigator.appVersion

返回一个字符串，表示所使用的的浏览器的版本号，它可能只包含一个数字，比如5.0,也坑包含其他一些信息

##  声明变量的缩略写法与负责写法

    /* 复杂写法 */
    var x;
    var y;
    var z = 3;

    /* 缩略写法 */

    var x,y,z = 3;

##  采取惰性载入的方案提高函数代码的性能

    function addEvents (type,element,fun){
        if(element.addEventListener){
            element.addEventListener(type,fun,false);
        }else if(element.attachEvent){
            element.attachEvent('on' + type,fun);
        }else{
            element['on'+type] = fun;
        }
    }

所谓惰性载入就是在第一次执行代码后，用函数代码内部的方法覆盖原有代码，代码如下：

    var addEvents = (function(){
        if(document.addEventListener){
            return function(type.element,fun){
                element.addEventListener(type,fun,false);
            }
        }
        else if(document.attachEvent){
            return function(ype.element,fun){
                element.attachEvent('on' + type,fun);
            }
        }
        else{
            return function(type,element,fun){
                element['on' + type] = fun;
            }
        }
    })();

##   捕捉Ctrl + Enter按键

    if(event.ctrlKey && event.KeyCode == 13){
        console.log("你同时按下了Ctrl和Enter");
    }

##     获取浏览器插件的数目

    navigator.plugins.length;

##      实现对Windows、Mac、Linux、UNIX操作系统的判断

    var osType = "",
        windows = (navigator.userAgent.indexOf("Windows",0) != -1)?1:0,
        mac = (navigator.userAgent.toLowerCase().indexOf("mac",0) != -1)?1:0,
        Linux = (navigator.userAgent.indexOf("Linux",0) != -1)?1:0,
        unix = (navigator.userAgent.indexOf("X11",0) != -1)?1:0;
        
    if(windows){
        osType = "Windows";
    }else if(mac){
         osType = "Mac";

    }else if(Linux){
         osType = "Linux";
    }
    }else if(unix){
         osType = "Unix";
    }
    console.log(osType);

##   使用原生JavaScript判断是否是移动设备浏览器

    var mobileReg = /iphone|ipad|android.*mobile|windows.*phone|blackberry.*mobile/i;
    if((mobileReg.test(window.navigator.userAgent.toLowerCase()))){
        console.log("移动设备");
    }else{
        console.log("非移动设备")
    }