# JUC-基础

作者: fbk
时间：2023-1-28
地点：济南
## 可见性
### 问题
```java
    static boolean run=true;

    private static void Demo1(){
       new Thread(()->{
           while (run){

           }
       }).start();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        run=false;
    }
```
循环为什么没有退出

1. run储存在堆内存中
2. 因为线程要频繁读取run的值，JIT编译器会将run的值缓存至自己工作内存中的高速缓存，减少对堆内存的访问，提高效率
3. 1s之后主线程改变堆内存中run的值，并同步至堆内存，但是线程从自己高速缓存中读取这个run的值，结果永远是旧值

### 解决方法
#### volatile
它可以用来修饰成员变量静态成员变量，它可以避免线程在运行的时候从自己的工作缓存中查找变量的值，必须从主内存中读取值
#### 可见性-原子性
1. volatile是解决线程可见性问题的，但是它并不能解决线程的原型性问题，在不同线程对同一个共享变量实现加或者减，volatile依旧不能保证结果不会出错，所以还是只能使用synchronize或者reentreantLock锁
## 有序性
JVM会在不影响正确性的前提下，可以调整语句的顺序
```java
static int i;
static int j;
 
// 在某个线程内执行如下赋值操作
i = ...; 
j = ...; 
```
```java
i = ...; 
j = ...;
```
```java
j = ...;
i = ...; 
```
###  原理之指令级并行
## 原理volatile
### happens-before
java内存模型具备一些先天的有序性，即不需要通过任何同步手段（volatile，synchronized等）就能保证线程的安全，这个通常叫做happens-before原则
- 线程解锁 m 之前对变量的写，对于接下来对 m 加锁的其它线程对该变量的读可见
```java
    static int x;
    static final Object object=new Object();
    private static void Demo2(){
        new Thread(()->{
            synchronized (object){
                x=10;
            }
        }).start();

       new Thread(()->{
           synchronized (object){
               System.out.println(x);
           }
       }).start();
    }
```
- 线程对 volatile 变量的写，对接下来其它线程对该变量的读可见
```java
    volatile static int c;
    private static void Demo3(){
        new Thread(()->{
            c=20;
        }).start();

        new Thread(()->{
            System.out.println(c);
        }).start();
    }
```
- 线程start前对变量的写，对线程开始后对该变量的读可见
```java
    static int d;
    private static void Demo4(){
        d=10;
        new Thread(()->{
            System.out.println(d);
        }).start();
    }
```
- 线程结束前对变量的写，对其他线程得知他后的读可见
```java
    static int e;
    private static void Demo5(){
        Thread t1 = new Thread(() -> {
            e = 20;
        });
        t1.start();
        try {
            t1.join();
        } catch (InterruptedException ex) {
            throw new RuntimeException(ex);
        }

        System.out.println(e);
    }
```
- 线程t1打断t2前对变量的写，对于其他线程得知t2被打断后对变量的读可见
```java
    static int f;
    private static void Demo6(){
        Thread t1 = new Thread(() -> {
            while (true) {
                if (Thread.currentThread().isInterrupted()) {
                    System.out.println(f);
                    break;
                }
            }
        });
        t1.start();

        new Thread(()->{
            try {
                Thread.sleep(1000);
                f=10;
                t1.interrupt();
            } catch (InterruptedException ex) {
                throw new RuntimeException(ex);
            }

        }).start();

        while(t1.isInterrupted())  Thread.yield();

        System.out.println(f);
    }
```
## 练习
### balking模式
```java
    static volatile boolean isitialized=false;
    private static void init(){
        if(isitialized) return;
        doInt();
        isitialized=true;
    }
    
    private static void doInt(){
        
    }

    public staic void main(String[] args){
        new Thread(()->{
            init();
        },"t1");

        new Thread(()->{
            init();
        },"t2")
        .....
    }
```
当多个线程同时执行init方法，要想让init方法只执行一次，那么使用volatile可以吗？

不行，如果多个线程同时执行，在未修改isitialized前有多个线程可以同时执行doInt（）方法，所以还是要使用synchronize
### 单例模式
单例模式有很多实现方法，饿汉、懒汉、静态内部类、枚举类
> 饿汉式：类加载就会导致该单实例对象被创建
> 懒汉式：类加载不会导致该单实例对象被创建，而是首次使用该对象时才会创建
#### 实现1
```java
// 问题1：为什么加 final
// 问题2：如果实现了序列化接口, 还要做什么来防止反序列化破坏单例
public final class Singleton implements Serializable {
    // 问题3：为什么设置为私有? 是否能防止反射创建新的实例?
    private Singleton() {}
    // 问题4：这样初始化是否能保证单例对象创建时的线程安全?
    private static final Singleton INSTANCE = new Singleton();
    // 问题5：为什么提供静态方法而不是直接将 INSTANCE 设置为 public, 说出你知道的理由
    public static Singleton getInstance() {
        return INSTANCE;
    }
    public Object readResolve() {
        return INSTANCE;
    }
}
```
- 问题1：防止如果有子类继承当前类，改写父类的一些方法
- 问题2：如果实现了序列化，就会有反序列化去创建一个新的实例，所以要重写一个readResolve方法
- 问题3：防止创建实例
- 问题4：安全
- 问题5：因为如果要实现懒汉式创建，就要调用方法去创建一个新的实例
#### 实现2
```java
enum Singleton{
    INSTANCE;
}
```
#### 实现3
```java
public class Singleton2 {
    
    private Singleton2(){}
    
    private static Singleton2 INSTANCE=null;
    //性能存在问题：每次调用方法都会线程阻塞
    public static synchronized Singleton2 getInstance(){
        if(INSTANCE!=null) return INSTANCE;
        INSTANCE=new Singleton2();
        return INSTANCE;
    }
}
```
#### 实现4
```java
public class Singleton4 {

    private Singleton4(){};
// 问题1：解释为什么要加 volatile 
    private static volatile Singleton4 INSTANCE=null;

    public static Singleton4 getInstance(){
         // 问题2：对比实现3, 说出这样做的意义
        if(INSTANCE==null) return INSTANCE;
        synchronized (Singleton4.class){
            // 问题3：为什么还要在这里加为空判断, 之前不是判断过了吗
            if(INSTANCE!=null) return INSTANCE;
            INSTANCE=new Singleton4();
            return INSTANCE;
        }
    }
}
```
- 问题1：问题3的前提下，如果不使用volatile情况下，线程会引用自己所储存的变量信息，并没有意识到INSTANCE创建
- 问题2：没有在方法上加synchronize，提高了性能
- 问题3：假设在阻塞代码块中有一个线程，另一个线程经过INSTANCE!=NULL判断等待在同步代码块前，这样会导致线程的变量引用没有更改
#### 实现5
```java
public final class Singleton {
    private Singleton() { }
    // 问题1：属于懒汉式还是饿汉式
    private static class LazyHolder {
        static final Singleton INSTANCE = new Singleton();
    }
    // 问题2：在创建时是否有并发问题
    public static Singleton getInstance() {
        return LazyHolder.INSTANCE;
    }
}
```
- 问题1：懒汉式，如果值加载Singleton类，并不会触发LazyHolder类的init
- 问题2：没有，因为在类创建的时候JVM会保证线程的安全性
