# vue2的组件通信

作者: fbk
时间：2023-1-2
地点：济南
>足够优秀再大方拥有 
## 组件通信方案
- 通过props传递（常用到父给子传递消息）
- 使用$emit触发自定义事件
- 使用ref
- EventBus
- $parent或$root
- attrs或listeners
- Provide和inject
- Vuex
### props
- 用于父给子传递信息
`children`  
```JavaScript
props:{
    name:string,
    age:{
        type:Number,
        default:18,
        required:true
    }
}
```
`father`
```javascript
<Children name="fbk" age=18 />
```
### $emit事件
- 子组件给父组件传递信息
`children`
```javascript
methods:{
    sendFather(){
        this.$emit('add',goods)
    }
}
```
`father`
```javascript
<Children @add="addDemo(name)/>"
methods:{
    addDemo(name){
         console.log(name)//goods
    }
}
```
### refs函数
- 父组件获取子组件信息
`father`
```javascript
<Children ref="foo"/>>
this.$refs.foo
```
### EventBus
- 使用场景：兄弟传值
- 创建一个中央事件总栈
- 一个组件通过$emit出发自定义事件
- 另一个组件通过$on监听事件


`Bus.js`
```javascript
class Bus{
    constructor(){
        this.callbacks=[]//储存$on的回调函数
    }
    $on(name,func){
       this.callback[name]=this.callback[name]||[]
       this.callback[name].push(func)
    }
    $emit(name,args){
        if(this.callbacks[name]){
            this.callbacks[name].forEach(item=>item(args))
        }
    }
}
const bus=new Bus()
bus.$on('foo',demo)
bus.$emit('foo','fbk')
function demo(name){
    console.log(name)
}
```


### $parent和$root
- 通过共同的祖辈$parent或者$root搭建通信桥梁
兄弟组件
```javascript
this.$parent.on('add',this.add)
```
另一个
```javascript
this.$parent.emit('add')
```
### procide和inject
`祖先组件`
```javascript
provide(){
    return{
        foo:'foo'
    }
}
```
`后代组件`
```javascript
inject:['foo']
```
### vuex
[vuex笔记](./vuex.md)