# js的上下文

作者: fbk
时间：2022-12-18
地点：济南
>足够优秀再大方拥有

# 1.理解
- js为代码的执行提供了环境，js执行是单线程执行，只一个栈操作
# 2.上下文的分类
    1.全局执行上下文
    2.函数执行上下文
    3.Eval函数执行上下文
# 3.什么时候会创建新的执行上下文
- 进入全局代码
- 进入function函数体代码
- 进入eval函数参数指定的代码
- 进入module代码
# 4.执行步骤
## 1.先去全局scope去查找变量，再去全局对象中查找变量
var function是声明在全局对象中的，而let，const。class是声明在全局scope中的,全局对象例子:window
```js
let alert='hahah'
console.log(alert)//输出hahah
console.log(window.alert)//输出undefiend
var alert='hahah'
console.log(alert)//hahah
console.log(window.alert)//hahha
let Function='let 定义覆盖了function'
console.log(Function)//let 定义覆盖了function
console.log(window.Function)//ƒ Function() { [native code] }
```
## 2.发生变量提升
```js
var foo;//
if(false){
    var foo='foo'
}
console.log(foo)//undefiend
```
# 5.上下文是在函数的解析就已经定好的
```js
function foo(){
console.log(a)
}
function bar(){
    var a=3
    foo()
}
var a=2
bar()
```
执行顺序
1.首先执行的将全局上下文加入栈顶
2.在全局作用域中找到var声明====》显而易见，我们找到了a
3.在全局作用域中找到顶级函数声明====》bar，foo，此时虽然找到了声明，但是还是全部赋值undefined
4.找到let，const，class声明
5.判断var function，let const class名字不重复
6.let const class之间不重复
7.初始化var是undefiend，初始化function
8.登记let，const，class，但没有初始化
# 1.重新梳理
```js
function fn(){
   var foot = '脚';
        var head = function(){
            return '头';
        }
        function hand(){
            return '手';
        }
}
```
- vo执行顺序（静态变量声明）
```js
fnExecutionContext  = {//fn函数的上下文对象
  VO: {
    arguments: { .... },
    hand:hand函数的引用地址，//函数声明
    head: undefined, // 变量函数声明
    foot: undefined, // 变量声明
    this：Window,//this指向
  },
  scopeChain: {} //作用域链
}
```
- 在vo执行完后就会执行ao(动态变量声明)
```js
fnExecutionContext  = {//fn函数的上下文对象
  AO: {
    arguments: { .... },
    hand:hand函数的引用地址，//函数声明
    head: head函数的引用地址, // 变量函数声明
    foot: '脚', // 变量声明
  },
  scopeChain: {} //作用域
}
```
# 2.scopeChain作用域链

```js
function fn(){
     var foot = '脚';
        function footBall(){
            var footBall = '足球';
            console.log(footBall+ '需要：' +foot);
        }
        footBall();
}
```