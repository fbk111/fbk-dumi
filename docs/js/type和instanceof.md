# type和instanceof

作者: fbk
时间：2022-12-29
地点：济南
>足够优秀再大方拥有
# typeof
`typeof`返回一个字符串
```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
```
前6个都是基本数据类型，虽然null返回的是object，但是他并不是引用数据类型<br/>
如果想要判断一个变量是否存在
```js
if(typeof a !='undefiend'){
    console.log('a存在')
}
```

# instanceof
`instanceof`用于检测构造函数的`prototype`属性是否出现在某个实例对象的原型链上
`object`是实例对象，`constructor`是构造函数
构造函数`new`出实例对象
```js
// 定义构建函数
let Car = function() {}
let benz = new Car()
benz instanceof Car // true
let car = new String('xxx')
car instanceof String // true
let str = 'xxx'
str instanceof String // false

```