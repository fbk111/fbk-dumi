# JUC-基础

作者: fbk
时间：2023-1-29
地点：济南

## 共享模型之无锁

```java
public class AccountUnsafe implements Account {
    private Integer balance;

    public AccountUnsafe(Integer balance) {
        this.balance = balance;
    }

    @Override
    public Integer getBalance() {
        return balance;
    }

    @Override
    public void withdraw(Integer amount) {
        balance -= amount;
    }

    public static void main(String[] args) {
        Account.demo(new AccountUnsafe(10000));
    }
}
```

```java
public interface Account {

    Integer getBalance();

    void withdraw(Integer amount);

    static void demo(Account account) {
        List<Thread> ts = new ArrayList<>();
        long start = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            ts.add(new Thread(() -> {
                account.withdraw(10);
            }));
        }
        ts.forEach(Thread::start);
        ts.forEach(t -> {
            try {
                t.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        long end = System.nanoTime();
        System.out.println(account.getBalance()
                + " cost: " + (end-start)/1000_000 + " ms");
    }
}
```

```
460 cost: 90 ms
```

为什么最终的结果不是 0，也就是 balance 最终不是 0

```java
    public void withdraw(Integer amount) {
        balance -= amount;
    }
```

`对应字节码`

```java
ALOAD 0                                                          // <- this
ALOAD 0
GETFIELD cn/itcast/AccountUnsafe.balance : Ljava/lang/Integer;   // <- this.balance
INVOKEVIRTUAL java/lang/Integer.intValue ()I                     // 拆箱
ALOAD 1                                                          // <- amount
INVOKEVIRTUAL java/lang/Integer.intValue ()I                     // 拆箱
ISUB                                                             // 减法
INVOKESTATIC java/lang/Integer.valueOf (I)Ljava/lang/Integer;    // 结果装箱
PUTFIELD cn/itcast/AccountUnsafe.balance : Ljava/lang/Integer;   // -> this.balance
```

`多线程执行流程`

```
ALOAD 0                                                          // <- this
ALOAD 0
GETFIELD cn/itcast/AccountUnsafe.balance : Ljava/lang/Integer;   // <- this.balance
INVOKEVIRTUAL java/lang/Integer.intValue ()I                     // 拆箱
ALOAD 1                                                          // <- amount
INVOKEVIRTUAL java/lang/Integer.intValue ()I                     // 拆箱
ISUB                                                             // 减法
INVOKESTATIC java/lang/Integer.valueOf (I)Ljava/lang/Integer;    // 结果装箱
PUTFIELD cn/itcast/AccountUnsafe.balance : Ljava/lang/Integer;   // -> this.balance
ISUB                                        // thread-0 减法
INVOKESTATIC java/lang/Integer.valueOf      // thread-0 结果装箱
PUTFIELD cn/itcast/AccountUnsafe.balance    // thread-0 -> this.balance


ALOAD 0                                     // thread-1 <- this
ALOAD 0
GETFIELD cn/itcast/AccountUnsafe.balance    // thread-1 <- this.balance
INVOKEVIRTUAL java/lang/Integer.intValue    // thread-1 拆箱
ALOAD 1                                     // thread-1 <- amount
INVOKEVIRTUAL java/lang/Integer.intValue    // thread-1 拆箱
ISUB                                        // thread-1 减法
INVOKESTATIC java/lang/Integer.valueOf      // thread-1 结果装箱
PUTFIELD cn/itcast/AccountUnsafe.balance    // thread-1 -> this.balance
```

### 解决思路-有锁

`给account对象加锁`

```java
public class AccountUnsafe implements Account {
    private Integer balance;

    public AccountUnsafe(Integer balance) {
        this.balance = balance;
    }

    @Override
    public Integer getBalance() {
        return balance;
    }

    @Override
    public synchronize void withdraw(Integer amount) {
        balance -= amount;
    }

    public static void main(String[] args) {
        Account.demo(new AccountUnsafe(10000));
    }
}
```

### 解决思路-无锁

```java
public class AccountUnsafe implements Account {
    private AtomicInteger balance;

    public AccountUnsafe(Integer balance) {
        this.balance = balance;
    }

    @Override
    public Integer getBalance() {
        return balance;
    }

    @Override
    public void withdraw(Integer amount) {
       while(true){
        //获取余额的最新值
          int prev=balance.get();
          //修改的余额
          int next=prev-amount;
          //返回true，表明修改成功，compareAndSet也就是CAS
          if(balance.compareAndSet(prev,next)) break;
       }
    }

    public static void main(String[] args) {
        Account.demo(new AccountUnsafe(10000));
    }
}
```

## CAS 和 volatile

### CAS

CAS 就是在比较自己修改的值和自己的旧值是否一样，如果一样才同意修改，否则返回 false

### volatile

获取共享变量的时候，为了保证变量的可见性，需要使用 volatile 进行修饰

可修改成员变量和静态变量，它可以避免线程从自己的工作缓存中去查找变量的值，必须到主内存去获取它的值，线程操作 volatile 变量都是直接操作主内存的，即一个线程操作 volatile 变量堆另外一个线程可见

`cas必须借助volatile才能读取到共享变量的最新值来进行比较并更新`

### 为什么无锁效率高

1. 如果使用 synchronize 的情况下，线程如果呗阻塞，就要进行上下文切换，然后进行 blocked 状态，等锁让出，在重新回复 runnable 状态，耗费大量性能
2. 但是使用 CAS，线程没有停下，只是不断地`while(true)`
3. 但是 CAS 情况下，因为线程要保持运行，需要额外 CPU 的支持，CPU 在这里就好比高速跑道，没有额外的跑
   道，线程想高速运行也无从谈起，虽然不会进入阻塞，但由于没有分到时间片，仍然会进入可运行状态，还
   是会导致上下文切换。`所以CAS要配合多核CPU情况下性能更高`

### CAS 的特点

结合 CAS 和 volatile 可以实现无锁并发，适用于少线程但是多核 CPU 场景下

- CAS 是乐观锁，不怕其他线程来修改，如果共享变量被其他线程修改，再次进行重试
- synchronize 是悲观锁，防止线程修改，只有锁打开，其他线程才有机会进行修改
- CAS 是体现的无锁并发，无阻塞并发
  - 因为没有 synchronize，所以线程不会阻塞
  - 如果竞争激烈，重试必然频繁发生，所以效率会受影响

## 原子整数

- AtomicBoolean
- AtomicInteger
- AtomicLong

```java
        AtomicInteger i = new AtomicInteger(0);

        AtomicInteger b=new AtomicInteger(0);

        //对i进行自增,i+
        System.out.println(i.getAndIncrement());

        //对i进行自减,i--
        System.out.println(i.getAndDecrement());

        //对i进行自增，相当于++i

        System.out.println(i.incrementAndGet());

        //对i进行自减，相当于--i

        System.out.println(i.decrementAndGet());

        //加值并获取

        System.out.println(i.addAndGet(6));

        //加值并获取

        System.out.println(i.getAndAdd(6));

        //获取并更新

        System.out.println(i.getAndUpdate(a->a-2));

        //更新并获取

        System.out.println(i.updateAndGet(a->a+2));

        //计算并获取

        System.out.println(b.accumulateAndGet(10, Integer::sum));

        //获取并计算

        System.out.println(b.getAndAccumulate(10, Integer::sum));
```

### 原子引用

- AtomicReference;
- AtomicMarkableReference;
- AtomicStampedReference

```java
public interface DecimalAccount {

    BigDecimal getBalance();

    void withDraw(BigDecimal amount);

    static void Demo(DecimalAccount account){
        List<Thread> ts=new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            ts.add(new Thread(()->{
                account.withDraw(BigDecimal.TEN);
            }));

            ts.forEach(Thread::start);

            ts.forEach(t->{
                try{
                    t.join();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            });

            System.out.println(account.getBalance());
        }
    }
}
```

### 不安全实现

```java
public class DecimalAccountUnsafe implements DecimalAccount{

    BigDecimal balance;

    public DecimalAccountUnsafe(BigDecimal balance) {
        this.balance = balance;
    }

    @Override
    public BigDecimal getBalance() {
        return balance;
    }

    @Override
    public void withDraw(BigDecimal amount) {
        BigDecimal balance = this.getBalance();
        this.balance=balance.subtract(amount);//subtract减去
    }
}

```

### 安全实现-使用锁

```java
/**
 * @Author 房博坤
 * @Date 2023/2/2 19:42
 * @Version 1.0.1
 */
public class DecimalAccountSafeLock  implements DecimalAccount{

    private final Object lock=new Object();

    BigDecimal balance;

    public DecimalAccountSafeLock(BigDecimal balance) {
        this.balance = balance;
    }

    @Override
    public BigDecimal getBalance() {
        return balance;
    }

    @Override
    public void withDraw(BigDecimal amount) {
        synchronized (lock){
            BigDecimal balance = this.getBalance();
            this.balance=balance.subtract(amount);
        }
    }
}
```

### 安全实现，使用 CAS

```java

/**
 * @Author 房博坤
 * @Date 2023/2/2 19:45
 * @Version 1.0.1
 */
public class DecimalAccountSafeCas implements DecimalAccount{

    AtomicReference<BigDecimal> balance;

    public DecimalAccountSafeCas(AtomicReference<BigDecimal> balance) {
        this.balance = balance;
    }

    public  BigDecimal getBalance(){
        return balance.get();
    }

    @Override
    public void withDraw(BigDecimal amount) {
        while (true){
            BigDecimal pre = balance.get();
            BigDecimal next = pre.subtract(amount);
            if(balance.compareAndSet(pre,next)) break;
        }
    }


}
```

### ABA 问题及解决

```java
/**
 * @Author 房博坤
 * @Date 2023/2/2 19:58
 * @Version 1.0.1
 */
@Slf4j
public class AtomicReferenceTest {

    static AtomicReference<String> ref = new AtomicReference<>("A");

    public static void main(String[] args) {
      log.debug("main start...");

        String prev = ref.get();

       //调用方法去修改ref的值，prev并不会察觉自己发生了改变
        other();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        //尝试修改C

        log.debug("change a->c {}",ref.compareAndSet(ref.get(),"C"));
    }

    private static void other(){
        new Thread(()->{
            log.debug("change a->b {}",ref.compareAndSet(ref.get(),"B"));
        },"t1").start();

        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        new Thread(()->{
            log.debug("change b->a {}",ref.compareAndSet(ref.get(),"A"));
        }).start();
    }
}

```

```
20:02:46 [DEBUG] [main] c.f.j.AtomicReferenceTest - main start...
20:02:46 [DEBUG] [t1] c.f.j.AtomicReferenceTest - change a->btrue
20:02:47 [DEBUG] [Thread-0] c.f.j.AtomicReferenceTest - change b->a true
20:02:48 [DEBUG] [main] c.f.j.AtomicReferenceTest - change a->ctrue
```

主线程一开始仅仅只能判断共享变量的值与最初的 A 是否相同，不能感知 A 在未执行 compareAndSet 前是否发生了变化

如果我们要检测的是只要其他线程动过了共享变量，即使其他线程动完了又恢复了最开始的值，但是使用 compareAndSet 不通过，就要使用`AtomicStampedReference`

```java
    private static void Demo2(){
       log.debug("main start...");
       //获取ref1的值
        String prev = ref1.getReference();
       //获取版本号
        int stamp = ref1.getStamp();

        log.debug("版本号{}",stamp);

        Other2();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        log.debug("change a->c {}",ref1.compareAndSet(prev,"C",ref1.getStamp(),ref1.getStamp()+1));

    }

    private static void Other2(){
        new Thread(()->{
            log.debug("change a->b {}",ref1.compareAndSet(ref1.getReference(),"B",ref1.getStamp(), ref1.getStamp()+1));
            log.debug("版本更新为{}",ref1.getStamp());
        },"t1").start();

        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        new Thread(()->{
            log.debug("change b->a {}",ref1.compareAndSet(ref1.getReference(),"A",ref1.getStamp(), ref1.getStamp()+1));
            log.debug("版本号是{}",ref1.getStamp());
        },"t2").start();
    }
```

```
15:41:34.891 c.Test36 [main] - main start...
15:41:34.894 c.Test36 [main] - 版本 0
15:41:34.956 c.Test36 [t1] - change A->B true
15:41:34.956 c.Test36 [t1] - 更新版本为 1
15:41:35.457 c.Test36 [t2] - change B->A true
15:41:35.457 c.Test36 [t2] - 更新版本为 2
15:41:36.457 c.Test36 [main] - change A->C false
```

`AtomicStampedReference`可以给原子引用加上版本号，追踪原子引用整个变化的过程，向上述，引用从 A->B->A->C,版本号在不停的修改，我们可以通过 getStamp()来获取更新的版本号

`那有没有一种只关心变量是否被别的线程更改过的，只是单纯关心是否更改，所以就有了AtomicMarkableReference`

```java
/**
 * @Author 房博坤
 * @Date 2023/2/2 20:36
 * @Version 1.0.1
 */
public class GarbageBag {
    private String desc;

    public GarbageBag(String desc) {
        this.desc = desc;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
@Slf4j
class TestABAAtomicMarkableReference{
    public static void main(String[] args) {
        GarbageBag bag = new GarbageBag("装满了垃圾");

        AtomicMarkableReference<GarbageBag> ref = new AtomicMarkableReference<>(bag, true);

        log.debug("主线程start");

        GarbageBag prev = ref.getReference();

        log.debug(prev.toString());

        new Thread(()->{
            log.debug("打扫卫生的线程start");
            bag.setDesc("空垃圾袋");
            while (!ref.compareAndSet(bag,bag,true,false)){}
            log.debug(bag.toString());
        }).start();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        log.debug("主线陈想换一只新垃圾袋");

        boolean success = ref.compareAndSet(prev, new GarbageBag("新的垃圾袋"), true, false);
        log.debug("换了吗{}",success);
        log.debug(ref.getReference().toString());
    }
}
```

```
2019-10-13 15:30:09.264 [main] 主线程 start...
2019-10-13 15:30:09.270 [main] cn.itcast.GarbageBag@5f0fd5a0 装满了垃圾
2019-10-13 15:30:09.293 [Thread-1] 打扫卫生的线程 start...
2019-10-13 15:30:09.294 [Thread-1] cn.itcast.GarbageBag@5f0fd5a0 空垃圾袋
2019-10-13 15:30:10.294 [main] 主线程想换一只新垃圾袋？
2019-10-13 15:30:10.294 [main] 换了么？false
2019-10-13 15:30:10.294 [main] cn.itcast.GarbageBag@5f0fd5a0 空垃圾袋
```

## 原子数组

- AtomicIntegerArray;
- AtomicLongArray;
- AtomicReferenceArray
  `有如下方法`

`前提：懂得supplier和consumer方法使用`
```java
/**
Consumer接口的抽象方法和Supplier接口方法相反，他是用于消费数据，而supplier方法属于提供数据，数据类型由泛型决定

 */
    private static void consumer(String name,Consumer<String> con){
        con.accept(name);
    }

    private static void Demo3(){
        consumer("FBK",name->{
            String reName = new StringBuffer(name).reverse().toString();
            System.out.println(reName);
        });
    }

```

```java
//参数1：提供数组，可以是线程不安全数组或者是线程安全数组
//参数2：获取参数的方法
//参数3：自增方法，回传array，index
//参数4：打印数组的方法
    private static <T> void demo(
            Supplier<T> arraySupplier,
            Function<T, Integer> lengthFun,
            BiConsumer<T, Integer> putConsumer,
            Consumer<T> printConsumer) {
        List<Thread> ts = new ArrayList<>();
        T array = arraySupplier.get();
        int length = lengthFun.apply(array);
        for (int i = 0; i < length; i++) {
            ts.add(new Thread(() -> {
                for (int j = 0; j < 10000; j++) {
                    putConsumer.accept(array, j % length);
                }
            }));

        }

        ts.forEach(Thread::start);

        ts.forEach(thread -> {
            try {
                thread.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        });

        printConsumer.accept(array);
    }
```
`如果使用普通数组的话`
```java
        demo(
                ()->new int[10],
                array->array.length,
                (array,index)->array[index]++,
                array-> System.out.println(Arrays.toString(array))
        );

```
```
[4331, 4357, 4342, 4316, 4315, 4325, 4319, 4276, 4263, 4303]
```
`如果使用AtomicIntegerArray`
```java
        demo(
                ()->new AtomicIntegerArray(10),
                AtomicIntegerArray::length,
                AtomicIntegerArray::getAndIncrement,
                System.out::println

        );
```
```
[10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]
```
### 字段更新
- AtomicReferenceFieldUpdater 
- AtomicIntegerFieldUpdater
- AtomicLongFieldUpdater
利用字段更新器，可以针对对象的某个域进行原子操作，只能配合volatile修饰字段使用,否则会出现异常
```
Exception in thread "main" java.lang.IllegalArgumentException: Must be volatile type
```
```java
    private volatile int field;
    private static void Demo2(){
        AtomicIntegerFieldUpdater<AtomicArrayTest> fieldUpdater = AtomicIntegerFieldUpdater.newUpdater(AtomicArrayTest.class, "field");
        AtomicArrayTest test5 = new AtomicArrayTest();
        fieldUpdater.compareAndSet(test5,0,10);
        //修改成功10
        System.out.println(test5.field);

        fieldUpdater.compareAndSet(test5,10,20);
        //修改成功20
        System.out.println(test5.field);

        //修改失败20
        fieldUpdater.compareAndSet(test5,10,30);
        System.out.println(test5.field);
    }
```

## 原子累加器
### 累加器性能
```java
    private static<T> void Demo3(Supplier<T> adderSupplier,Consumer<T> action){
        //获取数组
        T array = adderSupplier.get();
        long start = System.nanoTime();
        List<Thread> ts=new ArrayList<>();
        for (int i = 0; i < 40; i++) {
            ts.add(new Thread(()->{
                for (int j = 0; j < 500000; j++) {
                    action.accept(array);
                }
            }));
        }

        ts.forEach(Thread::start);

        ts.forEach(t->{
            try{
                t.join();
            }catch (InterruptedException e){
                e.printStackTrace();
            }
        });
        long end = System.nanoTime();
        System.out.println(array+"cost"+(end-start)/1000_000);

    }
```
```java
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            Demo3(LongAdder::new,LongAdder::increment);
        }
        for (int i = 0; i < 5; i++) {
            Demo3(AtomicInteger::new,AtomicInteger::incrementAndGet);
        }
    }
```
`性能的差异真的很大`
```
20000000cost45
20000000cost11
20000000cost13
20000000cost14
20000000cost30


20000000cost474
20000000cost413
20000000cost462
20000000cost400
20000000cost469
```
性能提升的原因很简单，就是在有竞争时，设置多个累加单元，Therad-0 累加 Cell[0]，而 Thread-1 累加
Cell[1]... 最后将结果汇总。这样它们在累加时操作的不同的 Cell 变量，因此减少了 CAS 重试失败，从而提高性能。