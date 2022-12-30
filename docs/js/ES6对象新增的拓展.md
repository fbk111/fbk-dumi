# ES6对象新增的拓展

作者: fbk
时间：2022-12-24
地点：济南
>足够优秀再大方拥有

# 1.属性的简写
## 对象的键值对与对应的名称相等时候，可以进行简写
```js
const baz={foo:foo}
//等同于
const baz={foo}
```
## 方法简写
```js
const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
}

```
## 函数作为返回值
```js
function getPoint() {
  const x = 1;
  const y = 10;
  return {x, y};
}

getPoint()
// {x:1, y:10}
```
# 2.属性名表达式
## 允许字面量定义对象，将表达式放在括号
```js
let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"
```
## 定义方法名
```js
let obj={
    ['h'+'ello'](){
        return 'hello'
    }
}
obj.hello()
```
# 3.属性的遍历
- for in
- Object.keys()
- Object.getOwnPropertyNames()返回一个数组，包括对象的所有属性（不包含Symbol属性，但是包括不可枚举类型）的简明
- Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名
- Reflect.ownKeys(obj)返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举
- for of遍历key
上述的遍历除了for of，都遵循遍历次数关系
- 首先是遍历所有的数值键，按照数值升序排列
- 其次便利所有字符串键，按照加入时间升序排列
- 最哦吼便利所有的Symbol
```js
Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
// ['2', '10', 'b', 'a', Symbol()]
```
# 4.对象新增的方法
- Object.is()
- Object.assign()
- Object.getOwnPropertyDescriptors()
- Object.setPropertyOf(),Object.getPropertyOf()
- Object.keys(),Object.values(),Object.entries()
- Object.formEntries()
## Object.is()
严格判断两个值是否相等，与===差不多
```js
//不同
+0===-0//true
NaN===NaN//false
Object.is(+0,-0)//false
Object.is(NaN.NaN)
```
## Object.assign()
```js
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

```
## Object.getOwnPropertyDescriptors()
返回指定对象所有的自身属性(可以获取到Symbol)
```js
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }

```
## Object.setProperty()
主要是用来定义属性的get，set方法，vue2属性的主要定义方法
```js

```
## Object.keys()
```js
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]
```
## Object.values()
```js
const obj = { foo: 'bar', baz: 42 };
Object.values(obj)
// ["bar", 42]
```
## Object.entries()
```js
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]

```

## Object.formEntries()
```js
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }
```