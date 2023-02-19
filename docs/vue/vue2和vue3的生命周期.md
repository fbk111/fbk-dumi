# vue2和vue3的生命周期
作者: fbk
时间：2023-2-13
地点：济南
>足够优秀再大方拥有 

## vue2的生命周期
1. beforeCreate(创建前)
2. create(创建后)
3. beforeMount(挂载前)
4. mounted(挂载后)
5. beforeUpdated(更新前)
6. updated(更新后)
7. beforeDestory(销毁前)
8. destoryed(销毁后)

![](../img/2023-2-13/vue%E5%AE%9E%E4%BE%8B.png)



1. beforeCreated

还没有创建出vm实例，也就是不管是method还是data都无法访问到，并且数据没有get和set的方法进行监听

`不能访问到data、computed、watch、methods上的方法和数据。`

2. created

3. beforeMount

`在挂载开始之前被调用，相关的render函数首次被调用。`

这次Vue开始解析模板，生成虚拟DOM存在内存中，还没有把虚拟DOM转换成真实DOM，插入页面中

4. mounted(挂载后)

`虚拟DOM转化为真实DOM，并且将真实DOM插入页面`

>一般在这个阶段进行：开启定时器，发送网络请求，订阅消息，绑定自定义事件等等

5. beforeUpdated

响应式数据更新时调用，此时虽然响应式数据更新，但是对应的真实 DOM 还没有被渲染（数据是新的，但页面是旧的，页面和数据没保持同步呢）。

6. updated(更新后)

由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。

调用时，组件 DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环

7. beforeDestory

> 在这个阶段一般进行关闭定时器，取消订阅消息，解绑自定义事件。

8. destroyed（销毁后）

实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务端渲染期间不被调用。


## vue3
