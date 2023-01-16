# java并发（上）
作者: fbk
时间：2023-1-15
地点：济南
>足够优秀再大方拥有
## 进程和线程
### 何为进程
每个应用都有一个exe文件，每个exe文件执行都相当于一个进程，在java中，运行main函数将相当于启动了一个JVM进程，而main函数所在的线程就相当于这个进程中的主线程
### 何为线程
线程和进程相似，但线程是一个比进程更小的执行单位，与进程不同的是线程共享JVM的堆和方法区的方法，但是每个线程都有自己的`程序计数器`，`虚拟机栈`，`本地方法栈`
```java
    public static void main(String[] args) {
        //或者java线程管理MAXBean
        ThreadMXBean threadMXBean = ManagementFactory.getThreadMXBean();
        //不需要同步monitor和synchroizer信息
        ThreadInfo[] threadInfos = threadMXBean.dumpAllThreads(false, false);
        for (ThreadInfo threadInfo : threadInfos) {
            System.out.println(threadInfo.getThreadName()+threadInfo.getThreadId());
        }
    }
```
```
main1 主线程
Reference Handler2
Finalizer3
Signal Dispatcher4
Attach Listener5
Common-Cleaner21
Monitor Ctrl-Break22
Notification Thread23
```
## JVM与线程的关系
![](../img/2023-1-15/jvm%E7%BA%BF%E7%A8%8B.jpg)
一个进程中有多个线程，多个线程共享堆和方法区（JDK1.8之后是元空间），但是每个线程有自己的虚拟计数器，虚拟机栈和本地方法栈
### 程序计数器的作用
1. 字节码解释器通过改变程序计数器来依次读取指令，从而控制代码的执行流程
2. 在多线程执行模式，程序计数器用于记录当前线程执行的位置，当线程切换回来就知道运行到哪了
### 虚拟机栈和本地方法栈为什么是私有的
- `虚拟机栈`：每个java方法在执行的同时都会创建一个战阵用于储存局部变量表，操作数栈，常量池引用等信息，从方法调用直到执行完过程，就对应的一个栈帧在java虚拟机栈入栈和操作的出栈过程
- `本地方法栈`： 和虚拟机栈所发挥的作用非常相似，区别是： 虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。 在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。

所以，为了保证线程中的局部变量不被别的线程访问到，虚拟机栈和本地方法栈是线程私有的。
### 堆和方法区
堆和方法区是所有线程共享的资源，堆是最大的一块内存，主要是存放引用类型，方法区主要储存