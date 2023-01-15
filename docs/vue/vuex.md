# vuex

作者: fbk
时间：2023-1-15
地点：济南
>足够优秀再大方拥有 
## 简介
在组件通信中，vuex是一个可以全局储存并且全局读取的数据，vuex是一个专为 Vue.js 应用程序开发的状态管理模式， 采用集中式存储管理应用的所有组件的状态，解决多组件数据通信。(简单来说就是管理数据的,相当于一个仓库,里面存放着各种需要共享的数据,所有组件都可以拿到里面的数据)
- 数据变化是可预测的
- 集中式管理数据状态方案
![](../img/2023-1-15/vuex%E6%95%B0%E6%8D%AE.jpg)
## 组件介绍
1. state统一管理公共数据
2. mutations修改数据
3. getters计算属性
4. action进行异步请求
5. modules模块拆分
```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: { // 存放数据 和data类似
  },
  mutations: { // 用来修改state和getters里面的数据
  },
  getters: { // 相当于计算属性
  },
  actions: { // vuex中用于发起异步请求
  },
  modules: {// 拆分模块
  }
})
```
## 使用
1. 安装
```js
npm i vuex
```
2. 实例化store
```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.store({
    state:{
        count:0
    }
})
export default store
```
3. 项目中使用
```js
import store from './store'
new Vue({
    store
})
```
## 在组件中使用store
`直接使用this.$store.state.属性名`获取数据
## 在组件中修改mutations
`this.$store.commit('mutation事件',mapper参数)`
```js
export default Vuex.store{
    state:{
        count:1
    }
    mutations:{
        setCount(state,val){
            state.count=val
        }
    }
}
```
```js
method:{
    getCount(){
        return this.$store.state.count
    }
    setCount(){
        this.$store.commit('setCount',200)
    }
}
```
## Vuex-state-mutation-getters 小结
![](../img/2023-1-15/state%E5%92%8Cmutations.jpg)
## vuex在actions中发起异步请求
在actions中，我们主要定义axios异步请求去请求url
```js
new Vuex.store({
  // 省略其他...
  actions: {
    // context对象会自动传入，它与store实例具有相同的方法和属性
    action的名字: function(context, 载荷) {
      // 1. 发异步请求, 请求数据
      
      // 2. commit调用mutation来修改/保存数据
      
      // context.commit('mutation名', 载荷)
    }
  }
})
```
组件中使用this.$store.dispatch('actions名字','参数')
```js
actions:{
    getBooks(context,params){
        axios({
            url:'https:www.baidu.com',
            method:'GET',
        }).then(res=>{
            content.commmit('setBooks',res.data)
        })
    }
}
```
## action小结
![](../img/2023-1-15/vuex%E6%80%BB%E7%BB%93.jpg)
## vuex用modules拆分复杂业务
```js
export default new Vuex.Store({
  // state: 用来保存所有的公共数据
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
  	模块名1： {
    		// namespaced为true，则在使用mutations时，就必须要加上模块名
      	namespaced: true, 
  		  state: {},
  			getters: {},
  			mutations: {},
  			actions: {},
  			modules: {}
  	}，
    模块名2： {
        // namespaced不写，默认为false，则在使用mutations时，不需要加模块名
  		  state: {},
  			getters: {},
  			mutations: {},
  			actions: {},
         modules: {}
  	}  
  }
})
```
```js
|--store /
|------- index.js # 引入模块
|------- modules
|-------------- / mod1.js # 模块1
|-------------- / mod2.js # 模块2
```
## 访问和修改数据
- 访问数据要加上模块名
```js
获取数据 this.$store.state.模块名.属性名
获取getters： {{$store.getters['模块名/getters名']}}
```
- 如果namespaced为true，则需要额外去补充模块名
- 如果namespaced为false，则不需要额外补充模块名
```js
$store.commit('mutations名')        // namespaced为false
$store.commit('模块名/mutations名')  // namespaced为true
```
## vuex中的map函数
### mapState
当vuex的数据与本组件内数据名字相同，可以使用...mapState(['名字']),...mapState({'姓名字':'名字'})
### 在模块中使用state
```js
computed:{
    ...mapState('模块名',['属性名字'])
    ...mapState('模块名',{'新名字':'名字'})
}
```

