# jvm-堆

作者: fbk
时间：2023-1-30
地点：济南

## 堆核心
### 堆与进程
1. 一个进程中只有一个JVM实例，一个JVM实例只有一个运行时数据区，一个运行时数据区只有一个堆和方法区
2. 进程包含多个线程，共享同一堆空间
3. JVM堆区域在JVM启动时就创建了，空间大小也就确定了，堆是JVM管理的最大的内存空间，并且堆是可以调节的
4. 堆可以处于物理上不连续的内存空间，但是逻辑上可以视为连续的
5. 所有的线程可以共享堆，并且还可以划分线程私有的缓冲区
6. 数组和对象可能永远不会存储在栈上（不一定），因为栈帧中保存引用，这个引用指向对象或者数组在堆中的位置。
7. 在方法结束后，堆中的对象不会马上移除，仅仅在垃圾收集的时候才会移除
  - 也就是触发了GC的时候，才会进行回收
  - 如果堆中对象马上被回收，那么用户线程就会收到影响，因为有stop the word
```java
public class SimpleHeap {
    private int id;//属性、成员变量

    public SimpleHeap(int id) {
        this.id = id;
    }

    public void show() {
        System.out.println("My ID is " + id);
    }
    public static void main(String[] args) {
        SimpleHeap sl = new SimpleHeap(1);
        SimpleHeap s2 = new SimpleHeap(2);

        int[] arr = new int[10];

        Object[] arr1 = new Object[10];
    }
}
```
![](../img/2023-1-30/%E5%A0%86.png)
### 堆内存细分
1. java7之前堆内存逻辑上分为新生区+养老区+永久区
2. java8之后分为新生区+养老区+元空间
3. 约定：新生区 <–> 新生代 <–> 年轻代 、 养老区 <–> 老年区 <–> 老年代、 永久区 <–> 永久代
## 设置堆内存大小和OOM
1. java堆区用于储存java对象实例，可以通过`-Xms(最小)`和`-Xmx(最大)`查看
2. 一旦堆区超过最大的-Xmx，就会出现OOM现象
3. 默认情况下
  - 最小内存是物理电脑内存大小的1/64
  - 最大内存是物理电脑的1/4
```java
   //返回java虚拟的的堆总内存
        long initialMemory = Runtime.getRuntime().totalMemory() / 1024 / 1024;

        //获取虚拟机使用的最大内存

        long maxMemory = Runtime.getRuntime().maxMemory() / 1024 / 1024;

        System.out.println("-Xms : " + initialMemory + "M");
        System.out.println("-Xmx : " + maxMemory + "M");

        System.out.println("系统内存大小为：" + initialMemory * 64.0 / 1024 + "G");
        System.out.println("系统内存大小为：" + maxMemory * 4.0 / 1024 + "G");
```
```
-Xms : 241M
-Xmx : 3580M
系统内存大小为：15.0625G
系统内存大小为：13.984375G
```
电脑是16G内存，因为操作系统还占据部分内存
![](../img/2023-1-30/%E8%AE%BE%E7%BD%AE%E5%86%85%E5%AD%98.png)
输出结果
```
-Xms : 575M
-Xmx : 575M
```
为什么会少25M
>使用JPS查看java进程
>使用tstat -gc进程ID
![](../img/2023-1-30/GC.png)
```
SOC: S0区总共容量
S1C: S1区总共容量
S0U: S0区使用的量
S1U: S1区使用的量
EC: 伊甸园区总共容量
EU: 伊甸园区使用的量
OC: 老年代总共容量
OU: 老年代使用的量
```
S0或者S1只能使用一个，另一个用不了，所以就造成了栈内存比定义的内存少25M
### OOM
```java
    private static void Demo2(){
        List<Picture> list=new ArrayList<>();

        while (true){
            try{
                Thread.sleep(20);
            }catch (InterruptedException e){
                e.printStackTrace();
            }
            list.add(new Picture(new Random().nextInt(1024 * 1024)));
        }
    }
class Picture{
    private byte[] bytes;

    public Picture(int length) {
        this.bytes=new byte[length];
    }
}
```
输出结果
```java
Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
	at com.atguigu.java.Picture.<init>(OOMTest.java:29)
	at com.atguigu.java.OOMTest.main(OOMTest.java:20)

Process finished with exit code 1
```
1. 堆内存变化

2. 大对象导致堆内存溢出

## 年轻代与老年代
1. 储存在JVM中的java对象可以划分为两类
  - 一类是生命周期较短的瞬间对象，这类对象的创建和消亡都非常迅速
  - 另一类生命对象的周期很长，在某些极端的情况下还能够与JVM生命周期保持一致
2. java堆区可以划分为年轻代和老年代
3. 年轻代又有Eden区，Survivor0和Survivor0
4. 新生代和老年代的分配
  - 默认**-XX:NewRatio**=2，表示新生代占1，老年代占2，新生代占整个堆的1/3
  - 可以修改**-XX:NewRatio**=4，表示新生代占1，老年代占4，新生代占整个堆的1/5
5. 在HotSpot虚拟机下，Eden和另外两个survivor的比例是8：1：1，并且可以调整-XX:SurvivorRatio=8
6. 几乎所有的java对象都是在Eden创建出来的
7. 可以使用选项”-Xmn”设置新生代最大内存大小，但这个参数一般使用默认值就可以了。
## 对象分配过程
1. new的对象先放在Eden区，此区大小有限制
2. 当Eden空间填满，当需要创建对象，JVM垃圾回收器对Eden进行垃圾回收，没有被回收的对象放入from区（有可能是s1区，或者是s2区）
3. 当Eden区满，继续进行GC，并且survivor区也要进行GC，他们的年龄不断增加，如果没有回收，继续进行survivor区切换，从form区变为to区，之后from区变为to区，to区变为from区
4. 当对象的年龄到达15，对象放入老年代
### 特殊情况
1. 如果新对象放入Eden，先看Eden是否放得下
  - 如果Eden放得下，则放入Eden区
  - 如果Eden放不下，首先进行YGC,执行垃圾回收，看看是否放得下
2. 将对象放入到老年区有两种情况
  - 如果 Eden 执行了 YGC 还是无法放不下该对象，那没得办法，只能说明是超大对象，只能直接放到老年代
  - 那万一老年代都放不下，则先触发FullGC ，再看看能不能放下，放得下最好，但如果还是放不下，那只能报 OOM
3. 如果 Eden 区满了，将对象往幸存区拷贝时，发现幸存区放不下啦，那只能便宜了某些新对象，让他们直接晋升至老年区
![](../img/2023-1-30/GC%E8%BF%87%E7%A8%8B.png)
## GC分类
1. JVM调优的环节，需要尽量避免垃圾回收，因为在垃圾回收中，容易出现（STW），`而 Major GC 和 Full GC出现STW的时间，是Minor GC的10倍以上`
2. JVM在进行GC时，并非每次都对上面三个内存区域一起回收的，大部分时候回收的都是指新生代。针对Hotspot VM的实现，它里面的GC按照回收区域又分为两大种类型：一种是`部分收集（Partial GC）`，一种是`整堆收集（FullGC）`
- 部分收集
  - 新生代收集（Minor GC/Young GC）：只是新生代（Eden，s0，s1）的垃圾收集
  - 老年代收集（Major GC/Old GC）：只是老年代的圾收集。
  - 混合收集（Mixed GC）：收集整个新生代以及部分老年代的垃圾收集。目前，只有G1 GC会有这种行为
- 整堆收集（Full GC）
### young GC==Minor GC
1. 当年轻代空间不足时，就会触发Minor GC，这里的年轻代满指的是Eden代满。Survivor满不会主动引发GC，在Eden区满的时候，会顺带触发s0区的GC，也就是被动触发GC（每次Minor GC会清理年轻代的内存）
2. 因为Java对象大多都具备朝生夕灭的特性，所以Minor GC非常频繁，一般回收速度也比较快。这一定义既清晰又易于理解。
### Major GC

