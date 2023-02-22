# vue2和vue3的数据定义

作者: fbk
时间：2023-2-20
地点：济南
>足够优秀再大方拥有

## definePrototype
在es6之前，defineProperty一直都是定义属性的最基本的api，最简单的使用
```js
//之前我对defineProperty一直存在误区，我认为他和proxy一样，都是可以通过一个对象去进行属性的定义，但是如果我们这样使用
let failObj={
    x:100
}
Object.defineProperty(failObj,'x',{
    get(){
      return failObj.x
    },
    set(value){
      failObj.x=value
    }
})
//这是错误的写法，这样会导致栈溢出
        let obj1={
            x:100
        }
        let obj2={
            y:200
        }
        Object.defineProperty(obj2,'x',{
            enumerable:true,//可枚举的，就证明这个属性可以在Object.keys或者是for in 遍历时使用，可以枚举，
            writable:true,//可修改的
            configurable:true,//控制属性是否可以被删除
            get(){
                return obj1.x
            },
            set(value){
              obj1.x=value
            }
        })
```
## vue2中使用defineProperty
1. 在data定义的数据，都会显示在vm当中，是通过vm.age的数据和data中的数据进行相互的修改，通过修改data中的数据去修改vm中的数据
2. 在vm中_data可以获取
![](../img/2023-2-20/vue%E7%9A%84data%E5%AE%9A%E4%B9%89.png)
3. 但是在新增属性或者是删除属性的时候，defineProperty都不会执行set或者get函数，在通过下标修改数组，页面也不会进行更新

## proxy
```js

```