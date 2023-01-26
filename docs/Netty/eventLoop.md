# EventLoop

作者: fbk
时间：2023-1-24
地点：济南
>足够优秀再大方拥有

## 简介
EventLoop本质上是一个单线程执行器，里面有run方法处理channel的io事件

EventLoopGroup是一组EventLoop，channel一般会调用EventLoopGroup的register方法来绑定其中的一个EventLoop，后续这个Channel上的io事件都由此EventLoop来处理
```java
   DefaultEventLoopGroup eventExecutors = new DefaultEventLoopGroup(2);
        System.out.println(eventExecutors.next());
        System.out.println(eventExecutors.next());
```
```
io.netty.channel.DefaultEventLoop@60f82f98
io.netty.channel.DefaultEventLoop@35f983a6
```
使用for循环
```java
        for (EventExecutor eventExecutor : eventExecutors) {
            System.out.println(eventExecutor);
        }
```