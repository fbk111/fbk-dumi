# JUC-基础

作者: fbk
时间：2023-1-28
地点：济南

## reenTrantLock
相对于synchronized来说,reenTrantLock的特点
1. 可中断
2. 可设置超时时间
3. 可以设置为公平锁
4. 支持多个条件变量
`基本用法`
```java
   ReentrantLock reentrantLock = new ReentrantLock();
        try {
            reentrantLock.lock();
        }finally {
            reentrantLock.unlock();
        }
```
### 可重入
可重入锁如果同一个线程获取一把锁，那么他就是这把锁的拥有者，因此有权力再次获得这把锁
不可重入锁同一个线程，那么第二次获取这把锁，自己也会被锁住
> 不管是synchronize还是reentrantLock都是可重入锁
```java
  static final Object synLock=new Object();
    public static void Demo3(){
        synchronized (synLock){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            log.debug("method1");
            Demo4();
        }
    }

    public static void Demo4(){
        synchronized (synLock){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            log.debug("method2");
            Demo5();
        }
    }

    public static void Demo5(){
        synchronized (synLock){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            log.debug("method3");
        }
    }
```
```java
 
输出
17:59:11.862 [main] c.TestReentrant - execute method1 
17:59:11.865 [main] c.TestReentrant - execute method2 
17:59:11.865 [main] c.TestReentrant - execute method3 
 
 
可打断  
示例
 
static ReentrantLock lock = new ReentrantLock();
 
public static void main(String[] args) {
    method1();
}
 
public static void method1() {
    lock.lock();
    try {
        log.debug("execute method1");
        method2();
    } finally {
        lock.unlock();
    }
}
 
public static void method2() {
    lock.lock();
    try {
        log.debug("execute method2");
        method3();
    } finally {
        lock.unlock();
    }
}
 
public static void method3() {
    lock.lock();
    try {
        log.debug("execute method3");
    } finally {
        lock.unlock();
    }
}
```
### 可打断
1. t1进行lock.lockInterruptibly表示上锁并可以打断，如果没有竞争的话就直接获取锁，如果竞争的话进入阻塞队列，其他线程可以使用Thread.interrupt进行打断
```java
        ReentrantLock reentrantLock = new ReentrantLock();
        Thread t1=new Thread(()->{
            log.debug("启动");
            try{
                log.debug("尝试获取锁")；
                reentrantLock.lockInterruptibly();
            }catch (InterruptedException e){
                e.printStackTrace();
                log.debug("线程被打断");
                return;
            }

            try{
            log.debug("获得了锁");
            }finally {
                reentrantLock.unlock();
            }
        },"t1");
        t1.start();
```
```
启动
获得了锁
获得了锁
```
2. 如果在主线程进行上锁
```java
        ReentrantLock reentrantLock = new ReentrantLock();
        Thread t1=new Thread(()->{
            try{
                log.debug("启动");
                reentrantLock.lockInterruptibly();
            }catch (InterruptedException e){
                e.printStackTrace();
                log.debug("线程被打断");
                return;
            }

            try{
                log.debug("获得了锁");
            }finally {
                reentrantLock.unlock();
            }
        },"t1");

        reentrantLock.lock();
        log.debug("获得了锁");
        t1.start();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        t1.interrupt();
```
```
15:46:16 [DEBUG] [main] c.f.j.TestLiveLock - 获得了锁
15:46:16 [DEBUG] [t1] c.f.j.TestLiveLock - 启动
java.lang.InterruptedException
	at java.util.concurrent.locks.AbstractQueuedSynchronizer.doAcquireInterruptibly(AbstractQueuedSynchronizer.java:898)
	at java.util.concurrent.locks.AbstractQueuedSynchronizer.acquireInterruptibly(AbstractQueuedSynchronizer.java:1222)
	at java.util.concurrent.locks.ReentrantLock.lockInterruptibly(ReentrantLock.java:335)
	at com.fbk.juc.TestLiveLock.lambda$Demo8$0(TestLiveLock.java:26)
	at java.lang.Thread.run(Thread.java:748)
15:46:17 [DEBUG] [t1] c.f.j.TestLiveLock - 线程被打断
```
```java
        ReentrantLock reentrantLock = new ReentrantLock();
        Thread t1=new Thread(()->{
            log.debug("启动");
            try{
                reentrantLock.lock();
            }catch (InterruptedException e){
                e.printStackTrace();
                log.debug("线程被打断");
                return;
            }

            try{
            log.debug("获得了锁");
            }finally {
                reentrantLock.unlock();
            }
        },"t1");

        reentrantLock.lock();
        log.debug("获得了锁");
        t1.start();
        try{
            Thread.sleep(1000);
            t1.isInterrupted();
            log.debug("执行打断");
        }catch (InterruptedException e){
            e.printStackTrace();
        }finally {
            reentrantLock.unlock();
        }
```
```
获得了锁
启动
执行打断
```

### 锁超时
```java

```
### 解决哲学家问题
```java
@Slf4j
class Philosopher extends Thread{
    ChopStick left;
    ChopStick right;
    public Philosopher(String name, ChopStick left, ChopStick right) {
        super(name);
        this.left = left;
        this.right = right;
    }

    private void eat() throws InterruptedException {
        log.debug("eating...");
        Thread.sleep(1000);
    }

    @Override
    public void run() {
        while(true){
            //获取左边的筷子
          try{
              if(left.tryLock()){
                  try{
                      if(right.tryLock()){
                          eat();
                      }
                  } catch (InterruptedException e) {
                      throw new RuntimeException(e);
                  }finally {
                      right.unlock();
                  }
              }
          }finally {
              left.unlock();
          }
        }
    }
}
```

### 公平锁
ReentrantLock默认时不公平的
```java
// 默认锁时不公平的 
        ReentrantLock lock = new ReentrantLock(false);
        lock.lock();
        for (int i = 0; i < 500; i++) {
            new Thread(()->{
                try{
                    System.out.println(Thread.currentThread().getName()+"running");
                }finally {
                    lock.unlock();
                }
            },"t"+i).start();
        }

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        new Thread(()->{
            System.out.println(Thread.currentThread().getName()+"start");
            lock.lock();
            try {
                System.out.println(Thread.currentThread().getName() + " running...");
            } finally {
                lock.unlock();
            }
        }, "强行插入").start();
        lock.unlock();

```
```
t39 running... 
t40 running... 
t41 running... 
t42 running... 
t43 running... 
强行插入 start... 
强行插入 running... 
t44 running... 
t45 running... 
t46 running... 
t47 running... 
t49 running... 
```
```java
        ReentrantLock lock = new ReentrantLock(true);
        lock.lock();
        for (int i = 0; i < 500; i++) {
            new Thread(()->{
                try{
                    System.out.println(Thread.currentThread().getName()+"running");
                }finally {
                    lock.unlock();
                }
            },"t"+i).start();
        }

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        new Thread(()->{
            System.out.println(Thread.currentThread().getName()+"start");
            lock.lock();
            try {
                System.out.println(Thread.currentThread().getName() + " running...");
            } finally {
                lock.unlock();
            }
        }, "强行插入").start();
        lock.unlock();
```
```
t465 running... 
t464 running... 
t477 running... 
t442 running... 
t468 running... 
t493 running... 
t482 running... 
t485 running... 
t481 running... 
强行插入 running... 
```
### 设计模式
```java
 static Object lock=new Object();
    static boolean isOut=false;
    public static void  Demo1(){
        Thread t1 = new Thread(() -> {
            synchronized (lock) {
                log.debug("2");
                isOut = true;
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lock) {
                while (!isOut) {
                    try {
                      lock.wait();
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
                log.debug("1");
            }

        });

        t1.start();
        t2.start();


    }
```
```java
    static ReentrantLock reentrantLock=new ReentrantLock();
    private static void Demo2(){
        Thread t1 = new Thread(() -> {
            reentrantLock.lock();
            try {
              log.debug("2");
              isOut=true;
            } finally {
                reentrantLock.unlock();
            }
        });

        Thread t2 = new Thread(() -> {
            reentrantLock.lock();
            try {
                while (!isOut){
                    reentrantLock.wait();
                }
                log.debug("1");
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } finally {
                reentrantLock.unlock();
            }
        });

        t1.start();
        t2.start();
    }
```
```java
    private static void Demo4(){
        SyncWaitNotify w1 = new SyncWaitNotify(1);
        new Thread(()->{
            w1.print("1",1,2);
        }).start();
        new Thread(()->{
            w1.print("2",2,3);
        }).start();
        new Thread(()->{
            w1.print("3",3,1);
        }).start();
    }
    @Slf4j
class  SyncWaitNotify{
    //线程1输出a=5次，线程2输出b=5次，线程3输出c=5次

    private int flag;

    public SyncWaitNotify(int flag) {
        this.flag = flag;
    }


    public void print(String str,int waitFlag,int nextFlag){
        for (int i = 0; i < 5; i++) {
            synchronized (this){
                while (flag!=waitFlag){
                    try {
                        this.wait();
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }

                }

                log.debug(str);

                flag=nextFlag;

                this.notifyAll();

            }
        }

    }
}
```
```java
@Slf4j
class AwaitSignal extends ReentrantLock{
    private int loopNumber;

    public AwaitSignal(int loopNumber) {
        this.loopNumber = loopNumber;
    }


    public void print(String str, Condition current,Condition next){
        for (int i = 0; i < 5; i++) {
            lock();
            try {
              current.await();
              log.debug(str);
              next.signal();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } finally {
                unlock();
            }
        }

    }
}
    private static void Demo5(){
        AwaitSignal awaitSignal = new AwaitSignal(5);
        Condition a = awaitSignal.newCondition();
        Condition b = awaitSignal.newCondition();
        Condition c = awaitSignal.newCondition();
        new Thread(()->{
            awaitSignal.print("1",a,b);
        }).start();

        new Thread(()->{
            awaitSignal.print("2",b,c);
        }).start();

        new Thread(()->{
            awaitSignal.print("3",c,a);
        }).start();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        awaitSignal.lock();
        try{
            a.signal();
        }finally {
            awaitSignal.unlock();
        }
    }
```
