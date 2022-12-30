# React组件通信

作者: fbk
时间：2022-12-28
地点：济南
>足够优秀再大方拥有

## 父组件向子组件传递
```js
//通过props就可以进行父组件向子组件通信
function EmialInput(props){
    return (
        <div>
        Emial<input value={props.emial}/>
        </div>
    )
}
const element=()=>{<EmialInput emial="12345@qq.com"/>}
```

## 子组件向父组件传递
父组件如下
```js
class Parents extends Component {
  constructor() {
    super();
    this.state = {
      price: 0
    };
  }

  getItemPrice(e) {
    this.setState({
      price: e
    });
  }

  render() {
    return (
      <div>
        <div>price: {this.state.price}</div>
        {/* 向子组件中传入一个函数  */}
        <Child getPrice={this.getItemPrice.bind(this)} />
      </div>
    );
  }
}

```
子组件
```js
class Child extends Component{
    
}
```