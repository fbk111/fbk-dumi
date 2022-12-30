# JavaScript字符串的常用方法有哪些

作者: fbk
时间：2022-12-24
地点：济南
>足够优秀再大方拥有
# 1.操作方法
## 增
### concat
```js
let stringValue="hello"
let result=stringValue.concat(' world')
console.log(result)
```
## 删
- slice
- substr
- substring
```js
let stringValue='hello world'
console.log(stringValue.slice(3))//lo world
console.log(stringValue.substring(3))//lo world
console.log(stringValue.substr(3))//lo world
console.log(stringValue.slice(3,7))//lo w
console.log(stringValue.substring(3,7))//lo w
console.log(stringValue.substr(3,7))//lo worl
```
## 改
- trim().trimLeft(),trimRight()
- repeat
- padStart
- padEnd
- toLowerCase toUpperCase
### trim,trimRight,trimLeft
删除前，后，前后的所有空格，返回新的字符串
```js
let stringValue = " hello world ";
let trimmedStringValue = stringValue.trim();
console.log(stringValue); // " hello world "
console.log(trimmedStringValue); // "hello world"
```
### repeat
```js
let stringValue='na'
let copyResult=stringValue.repeat(2)//na na
```
### padEnd,padStart
```js
let stringValue="foo"
console.log(stringValue.padStart(6))//" foo"
console.log(stringValue.padStart(6,'.'))//"......foo"
```
## 查
- charAt
- indexOf
- startWith
- includes
### charAt
```js
let message='123'
console.log(message.charAt(2))//3
```
### indexOf
```js
let message='123'
console.log(message.indexOf(1))//0
```
### startWidth
```js
let message='foobarbae'
console.log(message.startWith('foo'))//true
```
### split
```js
let str="12+13+14"
let arr=str.split("+")//[12,13,14]
```