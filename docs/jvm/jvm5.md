# jvm

作者: fbk
时间：2023-2-3
地点：济南


## 对象的实例化内存布局与访问定位
### 对象的实例化
#### 对象创建的方式
1. new最常见的创建，单例对象使用getInstance(),XXXFactory的静态方法
2. Class的newInstance方法：在JDK9里面被标记为过时的方法，因为只能调用空参构造器，并且权限必须为 public
3. Constructor的newInstance(Xxxx)：反射的方式，可以调用空参的，或者带参的构造器
4. 调用clone：不需要任何构造器，要求当前的类需要实现cloneable接口中的clone方法
5. 使用序列化：从文件中，从网络中获取一个对象的二进制流，序列化一般用于Socket的网络传输
6. 第三方库 Objenesis
#### 对象创建的步骤
```java
public class ObjectTest {
    public static void main(String[] args) {
        Object obj = new Object();
    }
}
```
```
 public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=2, args_size=1
         0: new           #2                  // class java/lang/Object
         3: dup           
         4: invokespecial #1                  // Method java/lang/Object."<init>":()V
         7: astore_1
         8: return
      LineNumberTable:
        line 9: 0
        line 10: 8
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       9     0  args   [Ljava/lang/String;
            8       1     1   obj   Ljava/lang/Object;
}
```
`1.判断对象对应的类是否加载，链接，初始化`
- 虚拟机遇到new指令，首先检查这个指令的参数是否能在Metaspace的常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已经被加载，解析和初始化（类元信息是否存在）
- 如果类没有加载，那么在双亲委派的机制下，使用当前类加载器以ClassLoader + 包名 + 类名为key进行查找对应的.class文件，如果没有找到文件，则抛出ClassNotFoundException异常，如果找到，则进行类加载，并生成对应的Class对象。


`2.为对象分配内存`
- 首先计算对象占用的空间，接着在堆中划分一块内存给新对象，如果实例成员变量是引用变量，仅分配引用变量空间即可，即4个字节大小
- 如果内存规整：采用指针碰撞分配内存
  - 如果内存是规整的，那么虚拟机将采用的是指针碰撞法（Bump The Point）来为对象分配内存。
  - 意思是所有用过的内存在一边，空闲的内存放另外一边，中间放着一个指针作为分界点的指示器，分配内存就仅仅是把指针往空闲内存那边挪动一段与对象大小相等的距离罢了。

`3.处理并发问题`
- 采用CAS+失败重试保证更新的原子性
- 每个线程预先分配TLAB - 通过设置 -XX:+UseTLAB参数来设置（区域加锁机制）
- 在Eden区给每个线程分配一块区域


`4.初始化分配的空间`
- 所有属性设置默认值，保证对象实例字段在不赋值可以直接使用
- 给对象属性赋值的顺序：
- 属性的默认值初始化
- 显示初始化/代码块初始化（并列关系，谁先谁后看代码编写的顺序）
- 构造器初始化

`5.设置对象的对象头`

将对象的所属类（即类的元数据信息）、对象的HashCode和对象的GC信息、锁信息等数据存储在对象的对象头中。这个过程的具体设置方式取决于JVM实现。

`6.执行init方法进行初始化`

1. 在Java程序的视角看来，初始化才正式开始。初始化成员变量，执行实例化代码块，调用类的构造方法，并把堆内对象的首地址赋值给引用变量
2. 因此一般来说（由字节码中跟随invokespecial指令所决定），new指令之后会接着就是执行init方法，把对象按照程序员的意愿进行初始化，这样一个真正可用的对象才算完成创建出来。

```java
/**
 * 测试对象实例化的过程
 *  ① 加载类元信息 - ② 为对象分配内存 - ③ 处理并发问题  - ④ 属性的默认初始化（零值初始化）
 *  - ⑤ 设置对象头的信息 - ⑥ 属性的显式初始化、代码块中初始化、构造器中初始化
 *
 *
 *  给对象的属性赋值的操作：
 *  ① 属性的默认初始化 - ② 显式初始化 / ③ 代码块中初始化 - ④ 构造器中初始化
 */

public class Customer{
    int id = 1001;
    String name;
    Account acct;

    {
        name = "匿名客户";
    }
    public Customer(){
        acct = new Account();
    }

}
class Account{

}
```
`Customer字节码`
```
 0 aload_0
 1 invokespecial #1 <java/lang/Object.<init>>
 4 aload_0
 5 sipush 1001
 8 putfield #2 <com/atguigu/java/Customer.id>
11 aload_0
12 ldc #3 <匿名客户>
14 putfield #4 <com/atguigu/java/Customer.name>
17 aload_0
18 new #5 <com/atguigu/java/Account>
21 dup
22 invokespecial #6 <com/atguigu/java/Account.<init>>
25 putfield #7 <com/atguigu/java/Customer.acct>
28 return
```
- init() 方法的字节码指令：
  - 属性的默认值初始化：id = 1001;
  - 显示初始化/代码块初始化：name = "匿名客户";
  - 构造器初始化：acct = new Account();

### 对象内存布局
![](../img/2023-2-3/%E5%86%85%E5%AD%98%E5%B8%83%E5%B1%80.png)
### 对象的访问定位
`JVM是如何通过栈帧中的对象引用访问到其内部的对象实例`

栈帧的reference引用堆区对象实例，堆区对象实例引入方法区的instanceKlass

`对象的两种访问方式：句柄访问和直接指针`

- 句柄访问
  - 缺点：在栈空间中开辟一块空间作为句柄池，句柄池本身也会占用空间，通过两次访问才能找到堆中的对象，效率低
  - 优点：reference中储存稳定句柄地址，对象被移动（垃圾收集时移动对象很普遍）时只会改变句柄中实例数据指针即可，reference本身不需要被修改
![](../img/2023-2-3/%E5%8F%A5%E6%9F%84%E8%AE%BF%E9%97%AE.png)
- 直接指针（HotSpot使用）
  - 优点：直接指针是局部变量表中的引用，直接指向堆中的实例，在对象实例中有类型指针，指向的是方法区中的对象类型数据
  - 缺点：对象被移动（垃圾收集时移动对象很普遍）时需要修改 reference 的值
![](../img/2023-2-3/%E7%9B%B4%E6%8E%A5%E6%8C%87%E9%92%88.png)


## 执行引擎
### 执行引擎概述
![](../img/2023-2-3/%E6%89%A7%E8%A1%8C%E5%BC%95%E6%93%8E.png)
1. 执行引擎是java虚拟机核心的组成部分
2. `虚拟机`是一个相对于`物理机`的概念，这两种机器都有代码执行能力，其区别是物理机的执行引擎是直接建立在处理器、缓存、指令集和操作系统层面上的，而`虚拟机的执行引擎则是由软件自行实现的`，因此可以不受物理条件制约地定制指令集与执行引擎的结构体系，`能够执行那些不被硬件直接支持的指令集格式。`
3. JVM的主要任务是负责`装载字节码到其内部`，但字节码不能够直接运行在操作系统上，因为字节码指令并非等价于本地机器指令，它内部包含的仅仅只是一些能够被JVM所识别的字节码指令、符号表，以及其他辅助信息。
4. 那么，如果想要让一个Java程序运行起来，执行引擎（Execution Engine）的任务就是`将字节码指令解释/编译为对应平台上的本地机器指令才可以。`简单来说，JVM中的执行引擎充当了将高级语言翻译为机器语言的译者。
#### 执行引擎工作过程
1. 执行引擎在执行过程中需要执行什么样的字节码指令完全依赖于`PC寄存器（程序计数器）`
2. 每当执行完一项指令操作后，PC寄存器就会更新下一条需要被执行的指令地址。
3. 当然方法在执行的过程中，执行引擎可能会通过储存在局部变量中的对象引用准确定位java堆区中的对象实例信息，以及通过对象头中的元数据指针定位到目标对象的类信息
## java代码编译和执行过程
![](../img/2023-2-5/%E4%BB%A3%E7%A0%81%E7%9A%84%E7%BC%96%E8%AF%91%E5%92%8C%E6%89%A7%E8%A1%8C.png)
1. 黄色的部分是编译生成字节码文件的过程（javac编译器来完成），和JVM没有关系
![](../img/2023-2-5/javac%E7%BC%96%E8%AF%91.png)
2. 绿色和蓝色的部分是JVM需要执行的指令
![](../img/2023-2-5/jvm%E7%BC%96%E8%AF%91.png)
### 什么是解释器，什么是JIT编译器
1. 解释器：当Java虚拟机启动时会根据预定义的规范对字节码采用逐行解释的方式执行，将每条字节码文件中的内容“翻译”为对应平台的本地机器指令执行。
2. JIT（Just In Time Compiler）编译器：就是虚拟机将源代码一次性直接编译成和本地机器平台相关的机器语言，但并不是马上执行。

`注意：解释器和编译器并不是相斥的，由javac编译的字节码可以走两条路，一个就是通过解释器进行执行，这是早期java实现将字节码编译成物理机指令的方法，之后就有了JOT执行java字节码，使用缓存将字节码全部编译储存，提高了之后程序执行素的`

- 为什么java是半编译半解释型语言？
  - java早期使用字节码解释器编译字节码文件
  - 现在主要使用JIT解释字节码文件
  - 也就是既可以使用字节码解释器，也可以使用JIT解释器
  - 现在JVM在执行Java代码的时候，通常都会将解释执行与编译执行二者结合起来进行。
  - JIT编译器将字节码翻译成本地代码后，就可以做一个缓存操作，存储在方法区的JIT 代码缓存中（执行效率更高了），并且在翻译成本地代码的过程中可以做优化。

## 机器码 指令 汇编语言
### 机器码
1. 各种用二级制编码方式表示的指令，叫做机器码指令，最开始，人们就用它才编写程序，这就是机器语言
2. 机器语言虽然能够被计算机理解和接受，但和人们的语言差别太大，不易被人们理解和记忆，并且用它编程容易出差错。
3. 用它编写的程序一经输入计算机，CPU直接读取运行，因此和其他语言编的程序相比，执行速度最快。
4. 机器指令与CPU紧密相关，所以不同种类的CPU所对应的机器指令也就不同。
### 指令和指令集
#### 指令
- 由于机器码是由0和1组成的二进制序列，可读性实在太差，于是人们发明了指令。
- 指令就是把机器码中特定的0和1序列，简化成对应的指令（一般为英文简写，如mov，inc等），可读性稍好
- 由于不同的硬件平台，执行同一个操作，对应的机器码可能不同，所以不同的硬件平台的同一种指令（比如mov），对应的机器码也可能不同。

#### 指令集
`不同的硬件平台，各自支持的指令，是有差别的。因此每个平台所支持的指令，称之为对应平台的指令集。如常见的`
- x86指令集，对应的是x86架构的平台
- RM指令集，对应的是ARM架构的平台

### 汇编语言
- 由于指令的可读性还是太差，于是人们又发明了汇编语言。
- 在汇编语言中，用助记符（Mnemonics）代替机器指令的操作码，用地址符号（Symbol）或标号（Label）代替指令或操作数的地址。
- 在不同的硬件平台，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。
- 由于计算机只认识指令码，所以用汇编语言编写的程序还必须翻译（汇编）成机器指令码，计算机才能识别和执行。
### 高级语言
1. 为了使计算机用户编程序更容易些，后来就出现了各种高级计算机语言。高级语言比机器语言、汇编语言更接近人的语言
2. 当计算机执行高级语言编写的程序时，仍然需要把程序解释和编译成机器的指令码。完成这个过程的程序就叫做解释程序或编译程序。

### 字节码
- 字节码是一种中间状态（中间码）的二进制代码（文件），它比机器码更抽象，需要直译器转译后才能成为机器码
- 字节码主要为了实现特定软件运行和软件环境、与硬件环境无关。
- 字节码的实现方式是通过编译器和虚拟机器。编译器将源码编译成字节码，特定平台上的虚拟机器将字节码转译为可以直接执行的指令。
- 字节码典型的应用为：Java bytecode

## 解释器
### 为什么要有解释器
1. JVM设计的初衷是为了满足一次编译多次运行，所以就需要JVM虚拟机将字节码文件编译成对应不同版本的机器指令
2. 解释器真正意义上所承担的角色就是一个运行时“翻译者”，将字节码文件中的内容“翻译”为对应平台的本地机器指令执行。
3. 当一条字节码指令被解释执行完成后，接着再根据PC寄存器中记录的下一条需要被执行的字节码指令执行解释操作。

### 解释器分类
- java一共使用两种解释器，一种是字节码编译器，现在普遍使用模板解释器 
  - 字节码解释器在执行时通过纯软件代码模拟字节码的执行，效率非常低下。
  - 而模板解释器将每一条字节码和一个模板函数相关联，模板函数中直接产生这条字节码执行时的机器码，从而很大程度上提高了解释器的性能。
- 在HotSpot VM中，解释器主要由Interpreter模块和Code模块构成。
  - Interpreter模块：实现了解释器的核心功能
  - Code模块：用于管理HotSpot VM在运行时生成的本地机器指令

### 解释器的缺点

## JIT编译器
### java代码执行的分类
1. 第一种是将源代码编译成字节码文件，然后在运行时通过解释器将字节码文件转为机器码执行
2. 第二种是编译执行（直接编译成机器码）。现代虚拟机为了提高执行效率，会使用即时编译技术（JIT，Just In Time）将方法编译成机器码后再执行
### 为什么还需要解释器
1. 解释器和编译器是可以共存的，在冷机部署代码的时候，JIT并没有将字节码全部编译为机器代码以及检测高频代码，这是解释器就可以边编译边执行，不至于响应的时间过长
