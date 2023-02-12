# jvm-垃圾回收概念

作者: fbk
时间：2023-2-9
地点：济南

## system.gc
1. 通过system.gc()或者runtime.gc()调用，会显示触发Full GC,同时老年代和新生代进行回收，尝试释放被丢弃对象占用的位置
2. 然而System.gc()调用附带一个免责声明，无法保证对垃圾收集器的调用
3. JVM实现者可以通过System.gc() 调用来决定JVM的GC行为。而一般情况下，垃圾回收应该是自动进行的，无须手动触发，否则就太过于麻烦了。在一些特殊情况下，如我们正在编写一个性能基准，我们可以在运行之间调用System.gc()

### 手动进行GC

```java
public class SystemGCTest {
    public static void main(String[] args) {
        new SystemGCTest();
        System.gc();//提醒jvm的垃圾回收器执行gc,但是不确定是否马上执行gc
        //与Runtime.getRuntime().gc();的作用一样。

//        System.runFinalization();//强制调用使用引用的对象的finalize()方法
    }
    //如果发生了GC，这个finalize()一定会被调用
    @Override
    protected void finalize() throws Throwable {
        super.finalize();
        System.out.println("SystemGCTest 重写了finalize()");
    }
}
```
输出结果不确定：有时候会调用 finalize() 方法，有时候并不会调用

```
SystemGCTest 重写了finalize()
或
空
```
### 手动 GC 理解不可达对象的回收行为
```java
```