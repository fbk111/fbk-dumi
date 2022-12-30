# state和prop的区别

作者: fbk
时间：2022-12-28
地点：济南
>足够优秀再大方拥有
# 1.state
在React类中，state是在constructor中进行初始化
```js
class Button extends React.Component{
    constructor(){
        super()
        this.state={
            name:'fbk'
        }
    }
    updateCount=()=>{
        //因为setState是一个异步的操作，所以第一个可以设置set的属性，第二个可以设置返回的函数，也就是setState更新后组件开始渲染所调用的参数
        this.setState(
            {
                name:'demo'
            },
            ()=>console.log('setState')
        )
    }
    render(){
        return(
            <div>
            <button> onClick={this.updateCount}
            click{this.state.count}
            </button>
            </div>
        )
    }
}
```


# 2.props
`props`主要是父组件向子组件传输，子组件进行接收
```js
class Welcome extends React.Component{
    render(){
        return <h1>hello{this.props.name}</h1>
    }
}
const element=<Welcome name='fbk' onNameChanged={this.handleName}/>
```