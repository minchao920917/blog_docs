---
title: 30个你不可能全部会做的JavaScript题目
date: 2019-05-13 23:00:54
tags:
 - JS 
 - 面试
categories:
 - 前端
---

你真的已经非常精通JavaScript了吗？

##  第一题：

    ["1","2","3"].map(parseInt)的运行结果是：
    A、 ["1","2","3"]
    B、 [1,2,3]
    C、 [0,1,2]
    D、 其他

答案是:D,[1,NaN,NaN]map的回调函数的参数index索引值作了parseInt的基数radix，导致出现超范围的radix赋值和不合法的进制解析，才会返回NaN。

1、parseInt() 函数
parseInt(string, radix)

radix  表示要解析的数字的基数。该值介于 2 ~ 36 之间。
如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。

如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。

parseInt() 函数可解析一个字符串，并返回一个整数。

2、Array的map()函数
arr.map(callbackfn[, thisArg])

3、callbackfn()的回调函数参数

function callbackfn(value, index, array1)

综上所述： 
    
    parseInt("1",0);//1
    parseInt("2",1);//NaN
    parseInt("3",2);//NaN


##  第二题

    以下表达式的运行结果是:
    [typeof null,null instanceof Object]

    A、["object",false]
    B、[null,false]
    C、["object",true]
    D、其他

答案是A，javascript 中的 null：既是对象，又不是对象，是「薛定谔对象」,null表示为空的引用；instanceof 表示某个变量是否是某个对象的实例 ；object则是对象界里的“原始天尊”……万物始祖

本质上Null和Object不是一个数据类型，null值并不是以Object为原型创建出来的。所以null instanceof Object是false

    typeof undefined;//undefined
    typeof 'abc';//string
    typeof 123;//number
    typeof true;//boolean
    typeof {};//object
    typeof [];//object
    typeof null;//object
    Object.prototype.__proto__ === null  //true
    //原型链的源头为null，所有对象都是通过null派生出来的，null本身也被定义为对象(object)，
    //但是null不具有任何对象的特性，不能执行null.toString()、null.constructor等对象实例的默认调用，
    //把null可以理解为尚未存在的对象的占位符,所以'typeof null'返回object字符串。
    typeof console.log//function
    //特别地
    null == undefined;  //true
    null === undefined;  //false

注：薛定谔的NULL是一个JavaScript创建之初就存在的bug，（这里以示尊重，要叫feature，是一个特性）在 javascript 的最初版本中，使用的 32 位系统，为了性能考虑使用低位存储了变量的类型信息：

000：对象

1：整数

010：浮点数

100：字符串

110：布尔

在 ES6 中曾有关于修复此 bug 的提议，提议中称应该让

    typeof null === 'null'

但是该提议被无情的否决了，自此 typeofnull 终于不再是一个 bug，而是一个 feature，并且永远不会被修复

##  第三题

    以下表达式的运行结果是:
    [[3,2,1].reduce(Math.pow),[].reduce(Math.pow)]

    A、报错
    B、[9,0]
    C、[9,NaN]
    D、[9,undefined]

答案是 A [].reduce() 指将多个值缩减为一个。 当[]为空数组时 //会报错TypeError

##  第四题

    以下表达式的运行结果是:
    var val = 'smtg';
    console.log("Value is " + (val ==== 'smtg')?'Something':'Nothing');
    A、Something
    B、Nothing
    C、NaN
    D、其他
答案是：A，字符串连接比三元运算有更高的优先级 

所以原题等价于 'Value is true' ? 'Somthing' : 'Nonthing' 

而不是 'Value   is' + (true ? 'Something' : 'Nonthing')

这一题考察的是运算符的优先级的知识点。

##  第五题

    以下的表达式的执行结果是：
    var name = 'World!';
    (function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
    })();

    A、 Goodbye Jack
    B、 Hello Jack
    C、 Goodbye undefined
    D、 Hello undefined

答案是A，

1）typeof时 name变量提升。 在函数内部之声明未定义 所以 typeof name //undefined
（2）typeof优先级高于===,则'undefined'==='undefined' //true

    var name = 'World!';
    (function (name) {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
    })();

    则答案就是 Hello World

## 第六题

    以下表达式的运行结果是:
    var END = Math.pow(2,53);
    var START = END-100;
    var count = 0;
    for(var i = START;i<= END;i++){
        count ++;
    }
    console.log(count);

    A、0
    B、100
    C、101
    D、其他

答案是D 2的53次方不是js能表示的最大整数而应该是能正确计算且不失精度的最大整数

    var END = 123456;
    var START = END-100;
    var count = 0;
    for(var i = START;i<= END;i++){
        count ++;
    }
    console.log(count);//101


##  第七题

    以下表达式的运行结果是：
    var ary = [0,1,2];
    ary[10]= 10;
    ary.filter(function(x){
        return x === undefined;
    })

    A、[undefinedx7]
    B、[0,1,2,10]
    C、[]
    D、[undefined]
    
答案是C  filter() 不会对空数组进行检测。会跳过那些空元素

    var ary = [0,1,2,undefined,undefined,undefined,null];
    则结果是: [undefined,undefined,undefined]

##  第八题

    以下表达式的运行结果是：
    var two = 0.2;
    var one = 0.1;
    var eight = 0.8;
    var six = 0.6;
    [two - one == onew,eight-six == two]

    A、[true,true]
    B、[false,false]
    C、[true,false]
    D、其他

答案是C IEEE 754标准中的浮点数并不能精确地表达小数

##  第九题

    以下表达式的运行结果是:
    function showCase(value){
        switch(value){
            case 'A':
                console.log("Case A");
                break;
            case 'B':
                console.log("Case B");
                break;
            case undefined:
                console.log("undefined");
                break;
            default:
            console.log('Do not know');
        }
    }
    showCase(new String('A'))

    A、Case A
    B、Case B
    C、Do not know
    D、undefined

答案是：C switch判断的是全等（===） ，new String(x)是个对象
    
    var a =  new String('A') ;
      a.__proto__
     // String.prototype 实例的原型指向构造函数的原型对象
    
##  第十题

    以下表达式的运行结果是:
    function showCase2(value) {
        switch(value) {
        case 'A':
            console.log('Case A');
            break;
        case 'B':
            console.log('Case B');
            break;
        case undefined:
            console.log('undefined');
            break;
        default:
            console.log('Do not know!');
        }
    }
    showCase2(String('A'));

    A、Case A
    B、Case B
    C、Do not know
    D、undefined

答案是A: String('A')就是返回一个字符串

##  第十一题

    以下表达式的运行结果是:
    function isOdd(num) {
        return num % 2 == 1;
    }
    function isEven(num) {
        return num % 2 == 0;
    }
    function isSane(num) {
        return isEven(num) || isOdd(num);
    }
    var values = [7, 4, '13', -9, Infinity];
    values.map(isSane);

    A、[true,true,true,true,true]
    B、[true,true,true,true,false]
    C、[true,true,true,false,false]
    D、[true,true,false,false,false]

答案是C  

    %如果不是数值会调用Number（）去转化
     '13' % 2       // 1
      Infinity % 2  //NaN  Infinity 是无穷大
      -9 % 2        // -1
    巩固： 9 % -2        // 1   余数的正负号随第一个操作数

##  第十二题

    以下表达式的运行结果是:
    parseInt(3,8);
    parseInt(3,2);
    parseInt(3,0);

    A、3,3,3
    B、3,3,NaN
    C、3,NaN,NaN
    D、其他

答案是D：

    3，NaN，3
    2进制不可能有3
    parseInt(3,0) 第二个参数不传或是0时，默认是十进制

##  第十三题

    以下表达式的运行结果是:
    Array.isArray(Array.prototype)

    A、true
    B、false
    C、报错
    D、其他

答案是 A：

    Array.prototype是一个数组
     数组的原型是数组，对象的原型是对象，函数的原型是函数

##  第十四题

    以下表达式的运行结果是:
    var a = [0];
    if([0]){
        console.log( a == true);
    }else{
        console.log("wut")
    }

    A、true
    B、false
    C、"wut"
    D、其他

答案是B

    [0]的boolean值是true
    console.log(a == true); // 转换为数字进行比较， a转换先toString,转化成'0',再Number('0') 转化成数值0
    Number(true) => 1 ,所以是false

##  第十五题

    以下表达式的运行结果是:
    []==[]
    
    A、true
    B、false
    C、报错
    D、其他

答案是 B

    两个引用类型， ==比较的是引用地址
    []== ![] 
    (1)! 的优先级高于== ，右边Boolean([])是true,取返等于 false
    (2)一个引用类型和一个值去比较 把引用类型转化成值类型，左边0
    (3)所以 0 == false  答案是true

##  第十六题

    以下表达式的运行结果是:
    '5'+3
    '5'-3

    A、"53",2
    B、8，2
    C、报错
    D、其他

答案是 A

    解析：加号有拼接功能，减号就是逻辑运算
    巩固：typeof (+"1")   // "number" 对非数值+—常被用来做类型转换相当于Number()

##  第十七题

    以下表达式的运行结果是:
    1 + - + + + - + 1

    A、2
    B、1
    C、报错
    D、其他

答案是 A

    +-又是一元加和减操作符号，就是数学里的正负号。负负得正哈。 
    巩固： 一元运算符还有一个常用的用法就是将自执行函数的function从函数声明变成表达式。
      常用的有 
      + - ～ ！ void
      + function () { }
      - function () { }
      ~ function () { }
      void function () { }


##  第十八题

    以下表达式的运行结果是:
    var ary = Array(3);
    ary[0] = 2;
    ary.map(function(elemnet){
        return "1";
    })

    A、[2,1,1]
    B、["1","1","1"]
    c、[2,"1","1"]
    D、其他

答案是 D 

    ["1", empty × 2]
    解析：如过没有值，map会跳过不会执行回调函数

##  第十九题

    以下表达式的运行结果是:
    function sidEffection(arg){
        arg[0] = arg[2];
    }
    function bar(a,b,c){
        c = 10;
        sidEffection(arguments);
        return a+b+c;
    }

    bar(1,1,1);

    A、3
    B、12
    C、报错
    D、其他

答案：21 选D 
解析：arguments会和函数参数绑定。
巩固：但如果es6付给初始值则无法修改，因为es6编译后用了严格模式
      function sidEffecting(ary) {
        ary[0] = ary[2];
      }
      function bar(a=1,b,c) {
        c = 10
        sidEffecting(arguments);
        return a + b + c;
    }
       bar(1,1,1)
       //12
    这里总结一下：严格模式和非严格模式
    （1）严格模式arguments对象是传入函数内实参列表的静态副本；非严格模式下，指向同一个值的引用 
    （2）严格模式变量必须先声明，才能使用
    （3）严格模式中 call apply传入null undefined保持原样不被转换为window

##  第二十题

    以下表达式的运行结果是:
    var a = 111111111111111110000,
    b = 1111;
    a + b;

    A、111111111111111111
    B、111111111111110000
    C、NaN
    D、Infinity

答案是 B
在JavaScript中number类型在JavaScript中以64位（8byte）来存储。这64位中有符号位1位、指数位11位、实数位52位。2的53次方时，是最大值。其值为：9007199254740992（0x20000000000000）。超过这个值的话，运算的结果就会不对.
    
##  第二十一题

    以下表达式的运行结果是:
    var x = [].reverse;
    x();

    A、[]
    B、undefined
    C、报错
    D、window

答案是 C

解析：原来答案是window
      x = [].reverse  是把reverse函数赋值给x
      reverse 函数处理的是调用它的this
      比如 [1,2,3].reverse()时，它的this是[1,2,3]
      以前reverse是非严格模式的函数下，没传this会默认为window
      现在的reverse使用严格模式编写,应该是undefined，所以会报类型转换错误
      

##  第二十二题

    以下表达式的运行结果是:
    Number.MIN_VALUE > 0
    A、false
    B、true
    C、报错
    D、其他

答案是 B

MIN_VALUE 属性是 JavaScript 中可表示的最小的数（接近 0 ，但不是负数）。它的近似值为 5 x 10-324。


##  第二十三题

    以下表达式的运行结果是:
    [1<2<3,3<2<1]

    A、[true,true]
    B、[true,false]
    C、报错
    D、其他

答案是 A

    解析： 1 < 2    =>  true;
      true < 3 =>  1 < 3 => true;

      3 < 2     => false;
      false < 1 => 0 < 1 => true;
    
##  第二十四题

    以下表达式的运行结果是:
    //the most classic wtf
    2 == [[[2]]]

    A、true
    B、false
    C、undefined
    D、其他

答案是 A

    解析：值和引用类型去比较,把引用类型转话成值类型
        [[[2]]]）//2
    巩固：++[[]][+[]]+[+[]] //"10"
        （1）(++([[]][+[]])) + [+[]]  //运算符权重判断，安利一下第四题下面的文章
        （2）(++([[]][0])) + [0]      // 16题中我们讲过+用来做类型转换Number([]) ===0
        （3）+([] + 1) + [0]            //[[]]数组的第0项就是[],++代表自增+1
        *******  注意这一步不是 (++[]) + [0] 这样是错误的   **********
        （4）+([] + 1) + [0]           // 前面+将"1"转成数字1 后边，+是拼接 "0" 所以是字符串"10"
        

##  第二十五题

    以下表达式的运行结果是:
    3.toString();
    3..toString();
    3...toSring();

    A、"3",error,error
    B、"3","3.0",error
    C、error,"3",error
    D、其他

答案是 C

解析：因为在 js 中 1.1, 1., .1 都是合法的数字. 那么在解析 3.toString 的时候这个 . 到底是属于这个数字还是函数调用呢? 只能是数字, 因为3.合法啊!
##  第二十六题

    以下表达式的运行结果是:
    (function(){
        var x = y =1;
    })();
    console.log(y);
    console.log(x);

    A、1,1
    B、error,error
    C、1,error
    D、其他

答案：C 1, error

    解析：y 被赋值成全局变量，等价于
    y = 1 ;
    var x = y;


##  第二十七题

    例举IE与FF脚本兼容性问题，例如：
    (1)、window.event
    表示当前事件对象，IE有这个对象，FF没有
    (2)、获取事件源
    IE用srcElement获取事件源，而FF用target获取事件源
    (3)、添加、移除事件
    IE：element.attachEvent(“onclick”, function) element.detachEvent(“onclick”, function) 
    FF：element.addEventListener(“click”, function, true) element.removeEventListener(“click”, function, true) 
    (4)、获取标签的自定义属性 
    IE：div1.value或div1[“value”] 
    FF：可用div1.getAttribute(“value”) 
    (5) document.getElementByName()和document.all[name] 
    IE；document.getElementByName()和document.all[name]均不能获取div元素 
    FF：可以 
    (6) input.type的属性 
    IE：input.type只读 
    FF：input.type可读写 
    (7) innerText textContent outerHTML 
    IE：支持innerText, outerHTML 
    FF：支持textContent 
    (8) 是否可用id代替HTML元素 
    IE：可以用id来代替HTML元素 
    FF：不可以 

##  第二十八题

    以下函数有什么问题？如何改进？
    function initButtons(){
        var body = document.body,
            button,i;
        for(i= 0;i<5;i++){
            button  = document.createElement("button");
            button.innerHTML = "Button "+i;
            button.addEventListener("click",function(e){
                alert(i);
            },false)
            body.appendChild(button);
        }
    }
    initButtons();

答案 

    (1)、addEventListener不兼容IE浏览器的问题
    (2)、页面上会显示值为button+i的按钮，但是点击任意一个按钮，最终都会显示5

涉及绑定和赋值得到区别。

在运行时，进入一个作用域，javascript会为每一个绑定到该作用域的变量在内存中分配一个“槽”（slot）。

函数中，创建变量document.body,button,i，因此当函数体（创建按钮，并为按钮绑定事件）被调用时，函数会为每个变量分配一个“槽”。
在循环的每次迭代中，循环体都会为嵌套函数分配一个闭包。我们可以理解为，该函数存储的是嵌套函数创建时变量i的值。
但事实上，他存储的是i的引用。由于每次函数创建后变量i的值都发生变化，因此函数内部最终看到的是变量i的引用。
闭包存储的是外部变量的引用而非值。
立即调用的函数表达式，是一种不可或缺的解决javascript缺少块级作用域的方法。

需要深入理解，可以查看《Effective JavaScript》第13条：使用立即调用的函数表达式创建局部作用域

改进

    function initButtons(){
        var body = document.body,
            button,i;
        for(i= 0;i<5;i++){
            (function(i){
                button  = document.createElement("button");
                button.innerHTML = "Button "+i;
                button.addEventListener("click",function(e){
                    alert(i);
                },false)
                body.appendChild(button);
            })(i);
        }
    }
    initButtons();
    
 
 ##  第二十九题

    写一段代码，判断一个字符串出现次数最多的字符，并统计出现的次数。

    //常规方法
    function toGetTheMostCharsByArray(s){
        var r={};
        for(var i=0;i< s.length;i++){

            if(!r[s[i]]){
                r[s[i]] = 1;
            }else{
                r[s[i]]++;
            }
        }
        var max = {
            "value": s[0],
            "num": r[s[0]]
        };

        for(var n in r){
            if(r[n]>max.num){
                max.num = r[n];
                max.value = n;
            }
        }
        return max;
    }

    //使用正则方法
    function toGetTheMostCharsByRegex(s){
        var a = s.split('');
        a.sort();
        s = a.join('');
        var regex = /(\w)\1+/g ; // \1+代表重复的
        var max = {
            "value"　:s[0],
            "num" :  0
        };

        s.replace(regex,function(a,b){//a是重复的string:eg:'aaa',b是重复的字母char:eg:'a';
            if(max.num < a.length){
                max.num = a.length;
                max.value= b;
            }
        });
        return max;
    }
    var test = "efdfssssfrhth";
    console.info("使用常规方法，出现最多的字符串为："+toGetTheMostCharsByArray(test).value+" ，出现次数："+toGetTheMostCharsByArray(test).num);
    console.info("使用字符串匹配，出现最多的字符串为："+toGetTheMostCharsByRegex(test).value+" ，出现次数："+toGetTheMostCharsByRegex(test).num);

##  第三十题

    请问以下两段代码有什么不同？
    setTimeout(function(){
        /*代码块*/
        setTimeout(arguments.callee,10);
    },10);

    //2.
    setInterval(function(){
        /*代码块*/
    },10);

分析：

    javascript的引擎是单线程的

    javascript的引擎是基于事件驱动的

    setTimeout和setInterval都是往事件队列中增加一个待处理事件而已，setTimeout只触发一次，而setInterval是循环触发    
    当线程阻塞在一个事件的时候，不管是使用setInterval还是setTimeout都需要等待当前事件处理完才能执行。

