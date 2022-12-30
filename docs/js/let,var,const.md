# let,const,var

作者: fbk
时间：2022-12-24
地点：济南
>足够优秀再大方拥有

# 1.var
在ES5中，顶层对象的属性和全局变量是等价的，用var声明的变量既是全局变量，也是顶层变量
注意：顶层对象，在浏览器环境指的是`window`对象，在 `Node` 指的是`global`对象
```js
var a=1
console.log(a)//1
console.log(window.a)//`
```
使用var声明变量会存在状态提升的情况
```js
console.log(a)//undefiend
var a=20
```
编译阶段翻译成
```js
var a;
console.log(a)
a=20
```
在函数中声明变量，他是局部的
```js
var a=20
function change(){
    var a=30
}
change()
console.log(a)//20
```
# 2.let
let命令只在声明的代码块中有效
```js
{
    let a=20
}
console.log(a)//referenceError:a is not defiend
```
不存在变量提升
```js
console.log(a)//referenceError
let a=20
```
再要块级作用域存在let声明，该区域就不再受外部影响
```js
var a=123
if(true){
    console.log(a)//referenceError
    let a;
}
```
let 不允许在相同作用域重复声明
```js
let a=20
let a=30
```
不能在函数内部重新声明变量
```js
function func(arg){
    let arg;
}
func()
```
# 3.const
const定义一个只读的常量，一旦声明，常量的值就不能改变
```js
const a=1
a=3
```
const只要声明就必须初始化
```js
const a;
// SyntaxError: Missing initializer in const declaration
```
`const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量
对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变
```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

