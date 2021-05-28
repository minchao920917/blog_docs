#   30个你不可能全部会做的JavaScript题目

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