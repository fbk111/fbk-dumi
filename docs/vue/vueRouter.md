

作者: fbk
时间：2023-1-16
地点：济南

> 足够优秀再大方拥有

## 安装

```
npm i vue-router
```

## 创建组件

与 vuex 使用，要引入 vue-router，并且

```js
import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);
```

引用后，就可以对外暴露

```js
export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "hello",
      name: Hello,
      component: Hello,
      children: [{ path: "/hello1", component: Hello1 }],
    },
  ],
});
```
## 在页面使用导航链接

### router-link

```js
<router-link to="hello">跳转到hello</router-link>
```

### router-view

router-view 用于渲染匹配到的组件

```js
<transition name="fade">
  <router-view></router-view>
</transition>
```

### transition 用法

组件进行过雕塑，会有四种 css 类型进行操作，css 类名与 transition 的 name 有关

- fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
- fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
- fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
- fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。

## keey-alive

keep-alive 可以缓存数据，这样不至于重新渲染路由组件的时候，之前那个路由组件的数据被清除了。比如对当前的路由组件 a 进行了一些 DOM 操作之后，点击进入另一个路由组件 b，再回到路由组件 a 的时候之前的 DOM 操作还保存在，如果不加 keep-alive 再回到路由组件 a 时，之前的 DOM 操作就没有了，得重新进行。如果你的应用里有一个购物车组件，就需要用到 keep-alive。

```js
<transition>
  <keep-live>
    <router-view></router-view>
  </keep-live>
</transition>
```
## 动态路由匹配
在路由匹配，可以在 url 的后边进行匹配 params
![](../img/2023-1-16/vue%E7%9A%84%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0params.png)
```js
<router-to :to="{name:'Index' ,params:{key:value}}"></router-to>
```

## 使用路由监测

### vue2

```js
watch:{
    '$router'(to,from){}
}
```

### vue3的watch,惰性监听
```js
watch(
  () => message.value,
  (val, preVal) => {
    //val为修改后的值,preVal为修改前的值
    console.log("message", val, preVal);
  },
  {
    //如果加了这个参数，值为true的话，就消除了惰性，watch会在创建后立即执行一次
    //那么首次执行，val为默认值,preVal为undefined
    immediate: true,
    //这个参数代表监听对象时，可以监听深度嵌套的对象属性
    //比如message是一个对象的话，可以监听到message.a.b.c，也就是message下的所有属性
    deep: true,
  }
);
//watch在vue3中可以使用多个watch函数
```
### vue3的watchEffect，立即执行
```js
import {watchEffect,useRouter,useRoute} from 'vue'
const router=UseRouter()
const route=UseRoute()//存储每个route的path，name，params，query
watchEffect(()=>{
    console.log(route.name)
})
```
### beforeRouterUpdate导航首位
如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 /users/1 -> /users/2)，你需要使用 beforeRouteUpdate来响应这个变化 (比如抓取用户信息)。
```js
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```
```js
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```
## 实现不同路由不同页面标题

```js

const routes = [
  { path: '/goods', component: goods, name: 'goods' },
  { path: '/orders', component: orders, name: 'orders' },
  { path: '/seller', component: seller, name: 'seller' }
];
// 创建路由实例
const router = new VueRouter({
  routes: routes
})
router.forEach((to,from,next)=>{
    document.title=to.name
})
```
## 重定向
刚进入应用都是进入到“/”这个路由的，如果想直接进入到“/goods”怎么办，有两种方法。一种是利用重定向，另一种是利用vue-router的导航式编程。
redirect基本重定向：
```js
const routes=[
    path:{path:'/',redirect:'/goods'}
]
```
### alias别名
1. 在路由配置给路由起一个别名
```js
const routes=[
    {
        path:'/hi',
        component:Hi,
        alias:'/dxl'
    }
]
```
区别

- redirect：url发生改变，变成url真实path路径
- alias：url路径没有改变，只是改变<router-view></router-view> 

## 路由中的钩子函数
```js
{
    path:'params/:id/:name/:age',
    component:Params,
    deforeEnter:(to,form.next)=>{
          console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();

    }
}
```
## 在模板中
```js
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
```
## History模式
