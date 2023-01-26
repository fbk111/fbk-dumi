# Array方法

作者: fbk
时间：2022-12-22
地点：济南
>足够优秀再大方拥有
## slice和splice
只需要记住slice(start,end),并且返回一个新数组

splice(start,deleteCount,item1,item2...)，并且splice是一个在原数组的基础上进行操作的方法

## 1. 操作方法
可以分成增删改查
# 2，增
- push
- unshift
- splice
- concat
`前三种方法会对原数组产生影响`


`push`
```js
let colors=[]
let count=colors.push('red','green')
```

`unshift`
```js
let colors=new Array()
colors.unshift('red','green')
```

`splice(开始的位置，要删除的元素数量，插入的元素)`
既可以增加，也可以删除
```js
let colors=['red','green','blue']
colors.splice(1,0,'yellow','green')
console.log(colors)
```

`concat返回一个新数组`
```js
let colors=['red','green','blue']
let colors1=colors.concat('yellow',['black','brown'])
```
## 2. 删
- pop
- unshift
- splice
- slice

`pop`
删除数组最后一项
```js
let colors=['red','green']
colors.pop()
```

`shift`
删除数组的第一项
```js
let colors=['red','green']
colors.shift()
```

`splice()`
```js
let colors=['red','green']
colors.splice(0,1)
```

`slice()`
```js
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
console.log(colors)   // red,green,blue,yellow,purple
concole.log(colors2); // green,blue,yellow,purple
concole.log(colors3); // green,blue,yellow
```
## 3.改
- splice
```js
let colors = ["red", "green", "blue"];
let removed=colors.splice(1,1,'red','purple')
```

## 4.查
- indexof
- includes
- find

`indexof`
```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.indexOf(4) // 3
```

`includes`
```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.includes(4) // true
```

`find`
```js
const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
people.find((element, index, array) => element.age < 28) // // {name: "Matt", age: 27}
```
## 5.数组排序
- reverse
- sort

`reverse()`
```js
let list=[1,2,3]
list.reverse()
console.log(list)//3,2,1
```

`sort()`
```js
function(a,b){
    return a-b//升序排列
    return b-a//降序排列
}
```
## 2.ES6中的新增的数组拓展
es6拓展符...
```js
console.log(...[1,2,3])
//1 2 3
console.log(1,...[2,3,4],5)
//1 2 3 4 5
console.log([...document.querySelectorAll('div')])
//[div,div,div]
```
能够实现简单的数组复制
```js
const a1=[1,2]
const [...a2]=a1
//[1,2]
```
数组的合并
```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
console.log([...arr1,...arr2,...arr3])
```
Array.form()
```js
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```
还可以接收第二个参数，用来对每个存入数组的元素进行操作
```js
Array.form([1,2,3],(x)={x*x})
```
Array.of()
没有参数返回空数组<br/>
参数只有一个是指定数组的长度<br/>
参数不少于两个参会形成新数组
```js
Array()[]
Array(3)//[,,,]
Array(3, 11, 8) // [3, 11, 8]
```
## 实例对象新增的方法
### copyWithin()
将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回原数组<br/>
参数<br>
- target(必须)：从该位置开始替换数组
- start（选填）：开始读取的位置
- end(选填)：到该位置停止读取
```js
[1, 2, 3, 4, 5].copyWithin(0, 3) // 将从 3 号位直到数组结束的成员（4 和 5），复制到从 0 号位开始的位置，结果覆盖了原来的 1 和 2
// [4, 5, 3, 4, 5] 
```
### fill填充数组
```js
['a','b','c'].fill(7)
//[7,7,7]
new Array(3).fill(7)
//[7,7,7]
```
