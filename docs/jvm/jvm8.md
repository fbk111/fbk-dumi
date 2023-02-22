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
        System.out.println("SystemGCTest ()");
    }
}
```
输出结果不确定：有时候会调用 finalize() 方法，有时候并不会调用

```
SystemGCTest 重写了finalize()
或
空
```
### finalize面试
```java
/**
 * @Author 房博坤
 * @Date 2023/2/22 12:17
 * @Version 1.0.1
 */
@Slf4j
public class TestFinalize {




    public static void main(String[] args) throws IOException {
        new Dog("1")  ;
        new Dog("2");
        new Dog("3");
        System.gc();
        System.in.read();
     }
}
@Slf4j
class Dog{
    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public Dog(String name) {
        this.name = name;
    }

    @Override
    protected void finalize() throws Throwable {
        log.debug("{}被干掉了",this.name);
    }
}
```
当重写finalize方法的时候，调用dog的构造方法，会将这个新创建的对象包装成一个finalize对象，存入finalize双向链表当中，在进行GC的时候，
![](../img/2023-2-22/finalize%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8.png)
就会把狗对象对应的finalize方法加入到referenceQueue队列当中

在unfinalized队列当中，这些对象并没有调用finalize方法

dog1，dog2，dog3在加入referenceQuque队列当中他们的虚引用，软引用，弱引用已经消失，但是finalize并没有消失，所以GC也不会去调用它

为什么我们要使用

```java
system.in.read()
```

在进入finalizer中
```java
    static {
        ThreadGroup tg = Thread.currentThread().getThreadGroup();
        for (ThreadGroup tgn = tg;
             tgn != null;
             tg = tgn, tgn = tg.getParent());
        Thread finalizer = new FinalizerThread(tg);
        finalizer.setPriority(Thread.MAX_PRIORITY - 2);
        finalizer.setDaemon(true);
        finalizer.start();
    }
```
这里的将finalizer设置成为一个守护线程，这个线程在主线程运行完就会自动消失

## 为社么finalize方法非常不好
1. finalizeThread是守护线程，代码可能没有执行完，线程就结束了，造成资源没有释放
2. 重写finalize在第一次进行GC的时候并不会去回收这个内存，而是要把它加入到unfinalize队列当中，因为要等着finalizeThread调用完finalize。把他从第一个unfinalizd队列移除后，第二次才能真正释放内存

3. gc本来就是内存不足引起的，finalize调用很慢，两个队列都是串行执行，不能及时释放内存，内存不及时释放就会进入老年代，老年代垃圾积累过多就会执行full gc，full gc释放内存的速度仍然赶不上新对象创建的速度，就会出现OOM

### 手动 GC 理解不可达对象的回收行为
```java
//加上参数：  -XX:+PrintGCDetails
public class LocalVarGC {
    public void localvarGC1() {
        byte[] buffer = new byte[10 * 1024 * 1024];//10MB
        System.gc();
    }

    public void localvarGC2() {
        byte[] buffer = new byte[10 * 1024 * 1024];
        buffer = null;
        System.gc();
    }

    public void localvarGC3() {
        {
            byte[] buffer = new byte[10 * 1024 * 1024];
        }
        System.gc();
    }

    public void localvarGC4() {
        {
            byte[] buffer = new byte[10 * 1024 * 1024];
        }
        int value = 10;
        System.gc();
    }

    public void localvarGC5() {
        localvarGC1();
        System.gc();
    }

    public static void main(String[] args) {
        LocalVarGC local = new LocalVarGC();
        //通过在main方法调用这几个方法进行测试
        local.localvarGC1();
    }
}

```
1. 第一个方法在进行GC后byte不会删除
2. 第二个方法在进行GC后已经将指针变为null，则可以进行GC
3. 第三个方法不会进行回收，在局部变量表中最大的索引为1，也就是两个变量，所以byte的指针并没有消失
4. 第四个方法的value的指针占用到局部变量表的索引为1的位置，所以byte就没有指针指向，所以就会从新生代复制算法进行GC
5. 调用第五个方法第一个方法中的byte就会删除，局部变量出了方法的范围就会被删除，所以堆中的数组一定被回收
## 内存溢出和内存泄漏
### 内存溢出
1. 一般情况下，除非应用程序占用的内存增长速度特别快，垃圾回收的速度跟不上内存消耗的速度，就会造成OOM2
2. GC会使用分代收集算法根据不同的区域进行GC回收，实在不行就进行FULL GC操作，这时候会回收大量的内存
3. Javadoc中对OutofMemoryError的解释是，没有空闲内存，并且垃圾收集器也无法提供更多内存。
#### oom原因分析
1. Java虚拟机的堆内存设置不够。
   - 比如：可能存在内存泄漏问题；也很有可能就是堆的大小不合理，比如我们要处理比较可观的数据量，但是没有显式指定JVM堆大小或者指定数值偏小。我们可以通过参数-Xms 、-Xmx来调整。
2. 代码中创建了大量大对象，并且长时间不能被垃圾收集器收集（存在被引用）
   - 对于老版本的Oracle JDK，因为永久代的大小是有限的，并且JVM对永久代垃圾回收（如，常量池回收、卸载不再需要的类型）非常不积极，所以当我们不断添加新类型的时候，永久代出现OutOfMemoryError也非常多见。尤其是在运行时存在大量动态类型生成的场合；类似intern字符串缓存占用太多空间，也会导致OOM问题。对应的异常信息，会标记出来和永久代相关：“java.lang.OutOfMemoryError:PermGen space”。
   - 随着元数据区的引入，方法区内存已经不再那么窘迫，所以相应的OOM有所改观，出现OOM，异常信息则变成了：“java.lang.OutofMemoryError:Metaspace”。直接内存不足，也会导致OOM。
3. 在oom出现之前，通常垃圾回收器会进行FULL GC去尽可能的回收内存空间
   - 例如：在引用机制分析中，涉及到JVM会去尝试回收软引用指向的对象等。
   - 在java.nio.Bits.reserveMemory()方法中，我们能清楚的看到，System.gc()会被调用，以清理空间。
4. 当然，也不是在任何情况下垃圾收集器都会被触发的
   - 比如，我们去分配一个超大对象，类似一个超大数组超过堆的最大值，JVM可以判断出垃圾收集并不能解决这个问题，所以直接抛出OutofMemoryError。 

### 内存泄漏
1. 只有对象不会再被程序用到，但是GC不能回收他们的情况，就叫做内存泄露
2. 但实际情况很多时候一些不太好的实践（或疏忽）会导致对象的生命周期变得很长甚至导致OOM，也可以叫做宽泛意义上的“内存泄漏”。
3. 尽管内存泄露不会在第一时间发现，但是内存会进行逐步蚕食，直至耗尽所有的内存，最后出现oom异常，导致程序崩溃
4. 注意，这里的存储空间并不是指物理内存，而是指虚拟内存大小，这个虚拟内存大小取决于磁盘交换区设定的大小。

#### 官方例子
![](../img/2023-2-13/%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.png)
1. 用可达性算法分析左图左上角的对象已经没有引用，所以可以删除
2. 右图中有些对象已经无用，但是还是一些链没有断开，所以就不能进行GC，导致这部分区域内存泄漏
#### 常见例子
1. 单例模式
   - 单例的生命周期是和程序的生命周期一样长，所以在单例中，如果持有的外部对象引用的话，那么这个外部对象是不会被回收的，会导致内存的泄漏
2. 一些提供close()的资源未关闭导致内存泄漏
   - 数据库连接 dataSourse.getConnection()，网络连接socket和io连接必须手动close，否则是不能被回收的。
## stop the world
1. STOP-THE-WORLD，简称STW,指的是GC时间发生过程中，会产生应用程序的停顿，`停顿使整个应用线程都会被暂停，没有任何相应`
2. 可达性分析算法中的枚举根节点将会导致java线程停顿，`为什么需要所有的线程进行停顿呢`
   - 分析工作必须在一个能确保一致性的快照中进行
   - 一致性指整个分析期间整个执行系统看起来像被冻结在某个时间点上
   - 如果出现分析过程中对象引用关系还在不断变化，则分析结果的准确性无法保证
3. 被STW中断的应用程序线程会在完成GC之后恢复，频繁中断会让用户感觉像是网速不快造成电影卡带一样，所以我们需要减少STW的发生。

1. STW事件和采用哪款GC无关，所有的GC都有这个事件。
2. 哪怕是G1也不能完全避免Stop-the-world情况发生，只能说垃圾回收器越来越优秀，回收效率越来越高，尽可能地缩短了暂停时间。
3. STW是JVM在后台自动发起和自动完成的。在用户不可见的情况下，把用户正常的工作线程全部停掉。
4. 开发中不要用System.gc() ，这会导致Stop-the-World的发生。

## 垃圾回收的并行与并发
### 并发的概念
1. 在操作系统中，是指一个时间段中有几个程序都处于已启动运行到运行完毕之间，且这几个程序都是在同一个处理器上运行
2. 并发不是真正意义上的“同时进行”，只是CPU把一个时间段划分成几个时间片段（时间区间），然后在这几个时间区间之间来回切换。由于CPU处理的速度非常快，只要时间间隔处理得当，即可让用户感觉是多个应用程序同时在进行
![](../img/2023-2-13/%E5%B9%B6%E5%8F%91.png)
### 并行
1. 当系统有一个以上CPU时，当一个CPU执行一个进程时，另一个CPU可以执行另一个进程，两个进程互不抢占CPU资源，可以同时进行，我们称之为并行（Parallel）
2. 其实决定并行的因素不是CPU的数量，而是CPU的核心数量，比如一个CPU多个核也可以并行
3. 适合科学计算，后台处理等弱交互场景
![](../img/2023-2-13/%E5%B9%B6%E8%A1%8C.png)
### 垃圾回收的并发与并行
1. 并行（parallel）：指多条垃圾收集线程并行工作，但此时用户线程仍处于等待状态
2. 串行（serial）：如果内存不够，单线程进行串行
![](../img/2023-2-13/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8%E4%B8%B2%E8%A1%8C%E5%B9%B6%E8%A1%8C.png)
1. 并发()：指用户线程和垃圾收集线程同时执行，(但不一定是并行的，可能会交替执行），垃圾回收线程在执行时不会停顿用户程序的运行。
## HotSpot的算法实现细节
### 根节点枚举
1. 固定可作为GC Roots的节点主要在全局性的引用（例如常量或类静态属性）与执行上下文（例如栈帧中的本地变量表）中，尽管目标明确，但查找过程要做到高效并非一件容易的事情，现在Java应用越做越庞大，光是方法区的大小就常有数百上千兆，里面的类、常量等更是恒河沙数，若要逐个检查以这里为起源的引用肯定得消耗不少时间。

2. 迄今为止，所有收集器在根节点枚举这一步骤时都是必须暂停用户线程的，因此毫无疑问根节点 枚举与之前提及的整理内存碎片一样会面临相似的“Stop The World”的困扰。现在可达性分析算法耗时 最长的查找引用链的过程已经可以做到与用户线程一起并发，但根节点枚举始终还 是必须在一个能保障一致性的快照中才得以进行——这里“一致性”的意思是整个枚举期间执行子系统 看起来就像被冻结在某个时间点上，不会出现分析过程中，根节点集合的对象引用关系还在不断变化 的情况，若这点不能满足的话，分析结果准确性也就无法保证。这是导致垃圾收集过程必须停顿所有 用户线程的其中一个重要原因，即使是号称停顿时间可控，或者（几乎）不会发生停顿的CMS、G1、 ZGC等收集器，枚举根节点时也是必须要停顿的。

3. 由于目前主流Java虚拟机使用的都是准确式垃圾收集，所以当用户线程停顿下来之后，其实并不需要一个不漏地检查完所有 执行上下文和全局的引用位置，虚拟机应当是有办法直接得到哪些地方存放着对象引用的。在HotSpot 的解决方案里，是使用一组称为OopMap的数据结构来达到这个目的。一旦类加载动作完成的时候， HotSpot就会把对象内什么偏移量上是什么类型的数据计算出来，在即时编译过程中，也 会在特定的位置记录下栈里和寄存器里哪些位置是引用。这样收集器在扫描时就可以直接得知这些信 息了，并不需要真正一个不漏地从方法区等GC Roots开始查找。

4. Exact VM因它使用准确式内存管理（Exact Memory Management，也可以叫Non-Con- servative/Accurate Memory Management）而得名。准确式内存管理是指虚拟机可以知道内存中某个位 置的数据具体是什么类型。譬如内存中有一个32bit的整数123456，虚拟机将有能力分辨出它到底是一 个指向了123456的内存地址的引用类型还是一个数值为123456的整数，准确分辨出哪些内存是引用类 型，这也是在垃圾收集时准确判断堆上的数据是否还可能被使用的前提。【这个不是特别重要，了解一下即可】
### 安全点和安全区域
#### 安全点
1. 程序执行并非在所有地方上都能停顿下来，只有特定的位置才能进行GC，这些位置被称为safe point
2. safe point选择很重要，`如果太少可能导致GC等待的线程太久`，`如果太频繁会导致运行时的性能问题`，大部分的指令执行速度都十分短暂，通常会根据`是否具有让程序长时间执行的特征`为标准，比如：选择一些执行时间较长的指令作为Safe Point，如`方法调用`、`循环跳转`和`异常跳转`等。
#### 如何在GC发生时，检查所有线程都跑到最近的安全点停顿下来呢？
1. 抢先式中断：（目前没有虚拟机采用了）首先中断所有线程。如果还有线程不在安全点，就恢复线程，让线程跑到安全点。
2. 主动式中断：设置一个中断标志，各个线程运行到Safe Point的时候主动轮询这个标志，如果中断标志为真，则将自己进行中断挂起。
#### 安全区域（safe region）
1. sage region保证在程序执行时，在不太长的时间内就会遇到可以进入GC的safe region
2. 例如线程处于Sleep状态或Blocked 状态，这时候线程无法响应JVM的中断请求，“走”到安全点去中断挂起，JVM也不太可能等待线程被唤醒。对于这种情况，就需要安全区域（Safe Region）来解决。
3. 安全区域是指在一段代码片段中，对象的引用关系不会发生变化，在这个区域中的任何位置开始GC都是安全的。我们也可以把Safe Region看做是被扩展了的Safepoint。

## 引用
- 强引用
- 软引用
- 弱引用
- 虚引用

这4种引用强度依次逐渐减弱。除强引用外，其他3种引用均可以在java.lang.ref包中找到它们的身影。如下图，显示了这3种引用类型对应的类，开发人员可以在应用程序中直接使用它们。
![](../img/2023-2-13/%E5%BC%95%E7%94%A8.png)

Reference子类中只有终结器引用是包内可见的，其他3种引用类型均为public，可以在应用程序中直接使用

1. 强引用：指在代码程序之中最普遍的引用赋值,`Object obj=new Object()`,无论任何情况下，只要强引用关系还存在，GC就不会进行回收，抛出OOM也不会回收强引用
2. 软引用：在系统将要发生内存溢出之前，将会把这些对象列入回收范围之中进行第二次回收。如果这次回收后还没有足够的内存，才会抛出内存溢出异常。
3. 弱引用（WeakReference）：被弱引用关联的对象`只能生存到下一次垃圾收集之前`。当垃圾收集器工作时，无论内存空间是否足够，都会回收掉被弱引用关联的对象。
4. 虚引用（PhantomReference）：一个对象是否有虚引用的存在，完全不会对其生存时间构成影响，也无法通过虚引用来获得一个对象的实例。为一个对象设置虚引用关联的唯一目的就是能在这个对象被收集器回收时收到一个系统通知。
### 强引用
1. 在Java程序中，最常见的引用类型是强引用（普通系统99%以上都是强引用），也就是我们最常见的普通对象引用，也是默认的引用类型。
2. 当在Java语言中使用new操作符创建一个新的对象，并将其赋值给一个变量的时候，这个变量就成为指向该对象的一个强引用。
3. `只要强引用的对象是可触及的，垃圾收集器就永远不会回收掉被引用的对象`。只要强引用的对象是可达的，jvm宁可报OOM，也不会回收强引用。
4. 对于一个普通的对象，如果没有其他引用关系，只要超过了引用的作用域或者是显式地将相应（强）引用赋值为null，就是可以当做垃圾被收集了，当然具体回收时机还是要看垃圾收集策略。
5. 相对的，软引用、弱引用和虚引用的对象是软可触及、弱可触及和虚可触及的，在一定条件下，都是可以被回收的。所以，强引用是造成Java内存泄漏的主要原因之一。
```java
public class StrongReferenceTest {
    public static void main(String[] args) {
        StringBuffer str = new StringBuffer ("Hello,尚硅谷");
        StringBuffer str1 = str;

        str = null;
        System.gc();

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println(str1);
    }
}
```

```
Hello,尚硅谷
```
str和str1都是指向对内存的new StringBuffer(),所以说如果给str设置为null，那么它指向堆内存的强引用确实消失了，但是str1执行堆内存并没有消失，所以仍可以打印

### 软引用（内存不足就回收）

1. 软引用是用来描述一些还有用，但非必需的对象。只被软引用关联着的对象，在系统将要发生内存溢出异常前，会把这些对象列进回收范围之中进行第二次回收，`第一次回收是回收在可达性算法分析后不可达的对象进行回收`，如果这次回收还没有足够的内存，才会抛出内存溢出异常。注意，这里的第一次回收是不可达的对象
2. 软引用通常用来实现内存敏感的缓存。比如：高速缓存就有用到软引用。如果还有空闲内存，就可以暂时保留缓存，当内存不足时清理掉，这样就保证了使用缓存的同时，不会耗尽内存。
3. 垃圾回收器在某个时刻决定回收软可达的对象的时候，会清理软引用，并可选地把引用存放到一个引用队列（Reference Queue）
4. 类似弱引用，只不过Java虚拟机会尽量让软引用的存活时间长一些，迫不得已才清理。
5. 一句话概括：当内存足够时，不会回收软引用可达的对象。内存不够时，会回收软引用的可达对象

```java
Object obj = new Object();// 声明强引用
SoftReference<Object> sf = new SoftReference<>(obj);
obj = null; //销毁强引用
```
```java
public class SoftReferenceTest {
    public static class User {
        public User(int id, String name) {
            this.id = id;
            this.name = name;
        }

        public int id;
        public String name;

        @Override
        public String toString() {
            return "[id=" + id + ", name=" + name + "] ";
        }
    }

    public static void main(String[] args) {
        //创建对象，建立软引用
//        SoftReference<User> userSoftRef = new SoftReference<User>(new User(1, "songhk"));
        //上面的一行代码，等价于如下的三行代码
        User u1 = new User(1,"songhk");
        SoftReference<User> userSoftRef = new SoftReference<User>(u1);
        u1 = null;//取消强引用


        //从软引用中重新获得强引用对象
        System.out.println(userSoftRef.get());

        System.out.println("---目前内存还不紧张---");
        System.gc();
        System.out.println("After GC:");
//        //垃圾回收之后获得软引用中的对象
        System.out.println(userSoftRef.get());//由于堆空间内存足够，所有不会回收软引用的可达对象。
        System.out.println("---下面开始内存紧张了---");
        try {
            //让系统认为内存资源紧张、不够
//            byte[] b = new byte[1024 * 1024 * 7];
            byte[] b = new byte[1024 * 7168 - 635 * 1024];
        } catch (Throwable e) {
            e.printStackTrace();
        } finally {
            //再次从软引用中获取数据
            System.out.println(userSoftRef.get());//在报OOM之前，垃圾回收器会回收软引用的可达对象。
        }
    }
}


```
### 软引用
1. 弱引用也是用来描述那些非必需对象，`只被弱引用关联的对象只能生存到下一次垃圾收集发生为止`。在系统GC时，只要发现弱引用，不管系统堆空间使用是否充足，都会回收掉只被弱引用关联的对象。

但是，由于垃圾回收器的线程通常优先级很低，因此，并不一定能很快地发现持有弱引用的对象。在这种情况下，弱引用对象可以存在较长的时间。

弱引用和软引用一样，在构造弱引用时，也可以指定一个引用队列，当弱引用对象被回收时，就会加入指定的引用队列，通过这个队列可以跟踪对象的回收情况。

`软引用、弱引用都非常适合来保存那些可有可无的缓存数据`。如果这么做，当系统内存不足时，这些缓存数据会被回收，不会导致内存溢出。而当内存资源充足时，这些缓存数据又可以存在相当长的时间，从而起到加速系统的作用。
```java
// 声明强引用
Object obj = new Object();
WeakReference<Object> sf = new WeakReference<>(obj);
obj = null; //销毁强引用
```
相当于
```java
WeakReference<Object> sf=new WeakReference<>(new Obejct());
``` 

弱引用对象与软引用对象的最大不同就在于，当GC在进行回收时，需要通过算法检查是否回收软引用对象，而对于弱引用对象，GC总是进行回收。弱引用对象更容易、更快被GC回收。
#### 面试题：你开发中使用过WeakHashMap吗？
```java
public class WeakReferenceTest {
    public static class User {
        public User(int id, String name) {
            this.id = id;
            this.name = name;
        }

        public int id;
        public String name;

        @Override
        public String toString() {
            return "[id=" + id + ", name=" + name + "] ";
        }
    }

    public static void main(String[] args) {
        //构造了弱引用
        WeakReference<User> userWeakRef = new WeakReference<User>(new User(1, "songhk"));
        //从弱引用中重新获取对象
        System.out.println(userWeakRef.get());

        System.gc();
        // 不管当前内存空间足够与否，都会回收它的内存
        System.out.println("After GC:");
        //重新尝试从弱引用中获取对象
        System.out.println(userWeakRef.get());
    }
}

```
```
[id=1, name=songhk] 
After GC:
null

Process finished with exit code 0
```
### 虚引用
