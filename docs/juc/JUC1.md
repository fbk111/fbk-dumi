# JUC-基础

作者: fbk
时间：2023-1-26
地点：济南

## 并行和并发
在单核CPU下，线程的是`串行执行`，在操作系统中有一个组件叫做任务调度器，将cpu片分给不同程序使用，但是CPU切换速度很快，所以在宏观上程序是`并行的`，微观上是`串行的`
### 应用
- 需要等待结果返回才能继续运行的是同步
- 不需要等待返回结果就能运行的是异步
## 创建线程
```java
        Thread t1=new Thread(()->{
            System.out.println("start");
        });
        t1.start();
    //使用runnable创建线程
    Runnable runnable= () -> {
        log.debug("创建");
    };
    
    Thread t2=new Thread(runnable,"t2");
    t2.start();
```
### Thread和Runnable的关系
- 方法1是把线程和任务结合在一起，方法2是线程和任务分开
- 使用runnable更容易和线程池等高等API配合
- 使用runnable让人物逃离Thread继承体系，更灵活

### 使用FutureTask创建Thread
```java
 FutureTask<Integer> futureTask = new FutureTask<>(() -> {
            log.debug("start");
            return 100;
        });
        
        Thread t3=new Thread(futureTask,"t3");
        t3.start();
        Integer result = futureTask.get();
        log.debug("结果是{}",result);
```
### 原理
JVM是由栈堆方法区组成的，栈内存就是在每个线程启动后，虚拟机就会分配一个栈内存
- 每个栈有多个栈帧组成，对应每次方法调用时所占用的内存
- 每个线程只有一个活动栈帧，对应当前正在执行的方法
### 线程上下文切换
条件
- 线程的CPU事件使用完
- 垃圾回收
- 有更高优先级的线程
- 使用sleep，yeild，wait，join，park，synchronized
在发生线程切换的时候，就需要每个线程的线程计数器记录下一条JVM指令执行的地址
- 状态包括程序计数器，虚拟机栈，如局部变量，操作数栈，返回地址
- 线程频繁切换会影响性能
## 方法
### start和run
```java
        Thread t1 = new Thread("t1") {
            @Override
            public void run() {
                log.debug(Thread.currentThread().getName());
            }
        };
        log.debug("run");
        t1.start();
        log.debug("other");
```
使用run方法，仍在main运行，方法调用还是同步的，使用start方法是可以让线程异步运行的
#### 总结
- 直接使用run方法还是运行在main线程
- 使用start方法开启新线程，通过新线程间接运行run方法
### sleep和yeild
#### sleep
1. 调用sleep会让线程从running变成Timed waiting状态（阻塞）
2. 也可以使用interrupt打断正在水面的线程，sleep线程会抛出InterruptedException
3. 睡眠结束后的线程未必会立即执行
4. 建议使用TimeUnit的sleep代替sleep
#### yeild
1. 调用此方法会使用running变成runnable（就绪状态）
#### 线程优先级
- 如果cpu比较忙，优先级高就会获得更多的时间片，如果闲，优先级几乎没用
```java
        Runnable r1=()->{
            int i=0;
            while(true) System.out.println(i++);
        };
        
        Runnable r2=()->{
            int i=0;
            while(true) System.out.println(i++);
        };
        
        Thread t1=new Thread(r1,"r1");
        Thread t2=new Thread(r2,"r2");
        t1.setPriority(Thread.MAX_PRIORITY);
        t2.setPriority(Thread.MIN_PRIORITY);
```

### join
```java
 static int r=0;
    private static void Demo4() {
        log.debug("开始");
        Thread t1 = new Thread(() -> {
            log.debug("开始");
            try {
                sleep(1);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            log.debug("结束");
            r = 10;
        });
        t1.start();
        log.debug("结果为:{}", r);
        log.debug("结束");
    }
```
- 因为主线程和t1是并行执行的，因为t1需要1秒才能打印
- 但是主线程一开始就需要打印r的结果，所以只能打印r=0

如何让主线程打印10,只需要使用t1.join
```java
 static int r=0;
    private static void Demo4() {
        log.debug("开始");
        Thread t1 = new Thread(() -> {
            log.debug("开始");
            try {
                sleep(1);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            log.debug("结束");
            r = 10;
        });
        t1.start();
        t1.join();
        log.debug("结果为:{}", r);
        log.debug("结束");
    }
```
### interrupt
可以打断sleep，wait，join线程
```java
        Thread t1 = new Thread(() -> {
            try {
                sleep(2);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }, "t1");

        t1.start();

        sleep(1);

        t1.interrupt();
        log.debug("打断状态{}",t1.isInterrupted());
```
输出
```
Exception in thread "t1" java.lang.RuntimeException: java.lang.InterruptedException: sleep interrupted
	at com.fbk.juc.Demo1.lambda$Demo5$6(Demo1.java:91)
	at java.lang.Thread.run(Thread.java:748)
Caused by: java.lang.InterruptedException: sleep interrupted
	at java.lang.Thread.sleep(Native Method)
	at com.fbk.juc.Demo1.lambda$Demo5$6(Demo1.java:89)
	... 1 more
17:48:58 [DEBUG] [main] com.fbk.juc.Demo1 - 打断状态true
```
打断正常运行的线程，但是不会清空状态
```java
        Thread t2 = new Thread(() -> {
            while (true) {
                Thread thread = Thread.currentThread();
                boolean interrupted = thread.isInterrupted();
                if (interrupted) {
                    log.debug("打断状态{}",interrupted);
                    break;
                }
            }
        },"t2");
        t2.start();
        sleep(1);
        t2.interrupt();
```
输出
```
17:54:20 [DEBUG] [t2] com.fbk.juc.Demo1 - 打断状态true
```
打断park线程，不会清空打断状态
```java
        Thread t1 = new Thread(() -> {
            log.debug("park");
            LockSupport.park();
            log.debug("unpark");
            log.debug("打断状态{}", Thread.currentThread().isInterrupted());
        },"t1");

        t1.start();

        sleep(1);

        t1.interrupt();
```
```
18:02:54 [DEBUG] [t1] com.fbk.juc.Demo1 - park
18:02:54 [DEBUG] [t1] com.fbk.juc.Demo1 - unpark
18:02:54 [DEBUG] [t1] com.fbk.juc.Demo1 - 打断状态true
```
### 主线程和守护线程
java进程需要等待所有线程都运行，才会结束，有一种特殊线程叫做守护线程，只要其他非守护线程运行结束了，守护线程代码没有执行完，也会结束
```java
        Thread t1 = new Thread(() -> {
            log.debug("开始运行");
            try {
                sleep(2);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            log.debug("结束运行");
        });

        t1.setDaemon(true);
        t1.start();
        sleep(1);
        log.debug("结束");
```
```
18:08:28 [DEBUG] [main] com.fbk.juc.Demo1 - 结束
18:08:28 [DEBUG] [Thread-0] com.fbk.juc.Demo1 - 开始运行
```
## 状态
![](../img/2023-1-26/%E7%BA%BF%E7%A8%8B%E7%8A%B6%E6%80%81.png)
- `初始状态`仅是在语言上创建线程对象，还未与操作系用线程关联
- `可运行状态`线程已被创建，可以由CPU调度执行，start方法的起始点
- `运行状态`指获取CPU时间片运行中的状态
  - 当 CPU 时间片用完，会从【运行状态】转换至【可运行状态】，会导致线程的上下文切换
- `阻塞状态`
- `终止状态`线程已经执行完毕，生命周期结束，不会转化为其他状态
## 共享模型之管程
```java
    static int count=0;
    private static void Demo10() throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 5000; i++) {
                count++;
            }
        });

        Thread t2=new Thread(()->{
            for (int i = 0; i < 5000; i++) {
                count--;
            }
        });
        t2.start();
        t1.start();
        t1.join();
        t2.join();
        log.debug("count{}",count);

    }
```
上边的count结果有可能超过0，有可能等于0，有可能小于0，为什么会出现这种现象，因为java中静态变量的自增，自减不是原子操作，
count++
```
getstatic     i  // 获取静态变量i的值
iconst_1         // 准备常量1
iadd             // 自增
putstatic     i  // 将修改后的值存入静态变量i
```
count--
```
getstatic     i  // 获取静态变量i的值
iconst_1         // 准备常量1
isub             // 自减
putstatic     i  // 将修改后的值存入静态变量i
```
### 临界区
在上边的代码中，我们唯一对共享数据操作的是count++,count--,所以这些代码块被称为临界区
### 解决方法
#### sychnorize
```java
 Thread t1 = new Thread(() -> {
            synchronized (Demo1.class) {
                for (int i = 0; i < 5000; i++) {
                    count++;
                }
            }
        });

        Thread t2=new Thread(()->{
            synchronized (Demo1.class) {
                for (int i = 0; i < 5000; i++) {
                    count--;
                }
            }
        });
        t2.start();
        t1.start();
        t1.join();
        t2.join();
        log.debug("count{}",count);
```
#### 线程八锁
##### 结果1/2或者2/1
```java
 private static void Demo12(){
        Number number = new Number();
        new Thread(number::a).start();
        new Thread(number::b).start();
    }
    @Slf4j
    static class Number{
        public synchronized void a(){
            log.debug("1");
        }

        public synchronized void b(){
            log.debug("2");
        }
    }
```
##### 结果 1s后1/2或者先2后睡1s后1
```java
 private static void Demo12 throws InterruptedException(){
        Number number = new Number();
        new Thread(number::a).start();
        new Thread(number::b).start();
    }
    @Slf4j
    static class Number{
        public synchronized void a throws InterruptedException(){
            sleep(1);
            log.debug("1");
        }

        public synchronized void b(){
            log.debug("2");
        }
    }
```
##### 结果 3 1s 1 2或 2 3 1s 1或3 2 1s 1
```java
 private static void Demo12 throws InterruptedException(){
        Number number = new Number();
        new Thread(number::a).start();
        new Thread(number::b).start();
        new Thread(number::c).start();
    }
    @Slf4j
    static class Number{
        public synchronized void a throws InterruptedException(){
            sleep(1);
            log.debug("1");
        }

        public synchronized void b(){
            log.debug("2");
        }

        public void c(){
            log.debug("3")
        }
    }
```
###### 结果 2 1s 后 1
```java
    @Slf4j
    static class Number{
        public synchronized void a() throws InterruptedException {
            sleep(1);
            log.debug("1");
        }

        public synchronized void b(){
            log.debug("2");
        }
    }

    public static void Demo13(){
        Number n1=new Number();
        Number n2=new Number();
        new Thread(n1::a).start();
        new Thread(n2::b).start();
    }
```
#### 变量的线程安全分析
`成员变量和静态变量是否线程安全`
- 如果没有共享，线程安全
- 如果共享，根据状态划分
  - 如果只有读操作，线程安全
  - 如果读写操作，需要考虑代码安全性

```java
public static void test1(){
    int i=10;
    i++;
}
```
在每个线程调用test1方法时局部变量i，会在每个线程的栈帧内存中被创建多份，因此不存在共享
```java
    class ThreadUnsafe{
        ArrayList<String> list=new ArrayList<>();
        public void method1(int loopNumber){
            for (int i = 0; i < loopNumber; i++) {
                method2();
                method3();
            }
        }
        
        private void method2(){
            list.add("1");
        }
        
        private void method3(){
            list.add("2");
        }
    }
```
执行
```java
static final int THREAD_NUMBER = 2;
static final int LOOP_NUMBER = 200;
public static void main(String[] args) {
    ThreadUnsafe test = new ThreadUnsafe();
    for (int i = 0; i < THREAD_NUMBER; i++) {
        new Thread(() -> {
            test.method1(LOOP_NUMBER);
        }, "Thread" + i).start();
    }
}
```
- 任何一个线程都使用的是同一个list成员变量
![](../img/2023-1-26/%E6%A0%88%E5%B8%A7%E8%BF%90%E8%A1%8C.png)
如果将list变为局部变量
```java
class ThreadSafe {
    public final void method1(int loopNumber) {
        ArrayList<String> list = new ArrayList<>();
        for (int i = 0; i < loopNumber; i++) {
            method2(list);
            method3(list);
        }
    }
 
    private void method2(ArrayList<String> list) {
        list.add("1");
    }
 
    private void method3(ArrayList<String> list) {
        list.remove(0);
    }
}
```
分析

- list是局部变量，每个线程都会调用堆内存中的不同实例，没有共享
- method2的参数是从method1传递过来，和method1引用同一个对象
![](../img/2023-1-26/%E6%A0%88%E5%B8%A7%E8%BF%90%E8%A1%8C2.png)
## 线程安全类
- string
- integer
- stringBuffer
- random
- vector
- hashtable
- java.util.concurrent

