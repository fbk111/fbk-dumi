# react的hook

作者: fbk
时间：2023-1-12
地点：济南
>足够优秀再大方拥有 


## 为什么要推出hooks的概念
因为在函数式组件没有自身的this，所以不能使用this.state去取值或者是this.setState去拿值
## setState
### 对象式的setState
在我们进行state赋值的时候，我们在赋值完后查看值，但是结果输出的是原值
```js

const {count}=this.state
this.setState({count:1})
//查看count
console.log(this.state)//发现值并没有改变
```
正确的方法是
```js
const {count}=this.state
this.setState({count:1},()=>{
    //这是在数据更改并且render重新选然后进行调用
    console.log(this.state.count)
})
```
## stateHook
```js
function Demo(){
    const [demo,setDemo]=React.useState('')//初始化值

}

function add(){
    //将demo+1
    setState(state+1)
}
```
### 函数式的setState
```js
this.setState((state,props)=>{

})
```
## useEffect
```js
//在类中使用生命周期钩子
componentDidMount(){
    setInterval(()=>{
        this.setState(state=>({count:state.count+1}))
    })
}
```
React.useEffect()在组件挂载的时候执行，在render更新的时候也执行
```js
React.useEffect(()=>{
//加入空数组只在初始化执行，后边写谁就监听谁并进行render挂载
},[])
```
使用useEffect那如何在componentUnMount进行处理
```js
useEffect(()=>{
let timer=setInterval(()=>{
    console.log(1)
})
return ()=>{
    //相当于在组件卸载将定时器清除
    clearInterval(timer)
}
},[])
```
## useRef
在类式组件中，我们使用ref获取dom元素数据
```js
myRef=React.createRef()
cconsole.log(this.myRef.current.value)
render(){
    return(
        <inpuy type="text" ref={this.myRef}/>>
    )
}
```
在函数式组件，我们就要使用useRef()
```js
const myRef=React.useRef()
console.log(myRef.current.value)
return(
    <input type="text" value={myRef}/>>
)
```