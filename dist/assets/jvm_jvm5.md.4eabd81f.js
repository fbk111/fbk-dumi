import{_ as s,o as a,c as n,a as l}from"./app.210eb53c.js";const e="/assets/内存布局.b7bb94e4.png",p="/assets/句柄访问.eec6087a.png",i="/assets/直接指针.bb2e35f4.png",c="/assets/执行引擎.74a935c5.png",r="/assets/代码的编译和执行.9e00a1fe.png",o="/assets/javac编译.2cb12785.png",t="/assets/jvm编译.020ba331.png",F=JSON.parse('{"title":"jvm","description":"","frontmatter":{},"headers":[{"level":2,"title":"对象的实例化内存布局与访问定位","slug":"对象的实例化内存布局与访问定位","link":"#对象的实例化内存布局与访问定位","children":[{"level":3,"title":"对象的实例化","slug":"对象的实例化","link":"#对象的实例化","children":[]},{"level":3,"title":"对象内存布局","slug":"对象内存布局","link":"#对象内存布局","children":[]},{"level":3,"title":"对象的访问定位","slug":"对象的访问定位","link":"#对象的访问定位","children":[]}]},{"level":2,"title":"执行引擎","slug":"执行引擎","link":"#执行引擎","children":[{"level":3,"title":"执行引擎概述","slug":"执行引擎概述","link":"#执行引擎概述","children":[]}]},{"level":2,"title":"java代码编译和执行过程","slug":"java代码编译和执行过程","link":"#java代码编译和执行过程","children":[{"level":3,"title":"什么是解释器，什么是JIT编译器","slug":"什么是解释器-什么是jit编译器","link":"#什么是解释器-什么是jit编译器","children":[]}]},{"level":2,"title":"机器码 指令 汇编语言","slug":"机器码-指令-汇编语言","link":"#机器码-指令-汇编语言","children":[{"level":3,"title":"机器码","slug":"机器码","link":"#机器码","children":[]},{"level":3,"title":"指令和指令集","slug":"指令和指令集","link":"#指令和指令集","children":[]},{"level":3,"title":"汇编语言","slug":"汇编语言","link":"#汇编语言","children":[]},{"level":3,"title":"高级语言","slug":"高级语言","link":"#高级语言","children":[]},{"level":3,"title":"字节码","slug":"字节码","link":"#字节码","children":[]}]},{"level":2,"title":"解释器","slug":"解释器","link":"#解释器","children":[{"level":3,"title":"为什么要有解释器","slug":"为什么要有解释器","link":"#为什么要有解释器","children":[]},{"level":3,"title":"解释器分类","slug":"解释器分类","link":"#解释器分类","children":[]},{"level":3,"title":"解释器的缺点","slug":"解释器的缺点","link":"#解释器的缺点","children":[]}]},{"level":2,"title":"JIT编译器","slug":"jit编译器","link":"#jit编译器","children":[{"level":3,"title":"java代码执行的分类","slug":"java代码执行的分类","link":"#java代码执行的分类","children":[]},{"level":3,"title":"为什么还需要解释器","slug":"为什么还需要解释器","link":"#为什么还需要解释器","children":[]}]}],"relativePath":"jvm/jvm5.md","lastUpdated":1675436020000}'),d={name:"jvm/jvm5.md"},u=l(`<h1 id="jvm" tabindex="-1">jvm <a class="header-anchor" href="#jvm" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-2-3 地点：济南</p><h2 id="对象的实例化内存布局与访问定位" tabindex="-1">对象的实例化内存布局与访问定位 <a class="header-anchor" href="#对象的实例化内存布局与访问定位" aria-hidden="true">#</a></h2><h3 id="对象的实例化" tabindex="-1">对象的实例化 <a class="header-anchor" href="#对象的实例化" aria-hidden="true">#</a></h3><h4 id="对象创建的方式" tabindex="-1">对象创建的方式 <a class="header-anchor" href="#对象创建的方式" aria-hidden="true">#</a></h4><ol><li>new最常见的创建，单例对象使用getInstance(),XXXFactory的静态方法</li><li>Class的newInstance方法：在JDK9里面被标记为过时的方法，因为只能调用空参构造器，并且权限必须为 public</li><li>Constructor的newInstance(Xxxx)：反射的方式，可以调用空参的，或者带参的构造器</li><li>调用clone：不需要任何构造器，要求当前的类需要实现cloneable接口中的clone方法</li><li>使用序列化：从文件中，从网络中获取一个对象的二进制流，序列化一般用于Socket的网络传输</li><li>第三方库 Objenesis</li></ol><h4 id="对象创建的步骤" tabindex="-1">对象创建的步骤 <a class="header-anchor" href="#对象创建的步骤" aria-hidden="true">#</a></h4><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ObjectTest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Object</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"> public static void main(java.lang.String[]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    descriptor: ([Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#A6ACCD;">    flags: ACC_PUBLIC, ACC_STATIC</span></span>
<span class="line"><span style="color:#A6ACCD;">    Code:</span></span>
<span class="line"><span style="color:#A6ACCD;">      stack=2, locals=2, args_size=1</span></span>
<span class="line"><span style="color:#A6ACCD;">         0: new           #2                  // class java/lang/Object</span></span>
<span class="line"><span style="color:#A6ACCD;">         3: dup           </span></span>
<span class="line"><span style="color:#A6ACCD;">         4: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#A6ACCD;">         7: astore_1</span></span>
<span class="line"><span style="color:#A6ACCD;">         8: return</span></span>
<span class="line"><span style="color:#A6ACCD;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#A6ACCD;">        line 9: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        line 10: 8</span></span>
<span class="line"><span style="color:#A6ACCD;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#A6ACCD;">            0       9     0  args   [Ljava/lang/String;</span></span>
<span class="line"><span style="color:#A6ACCD;">            8       1     1   obj   Ljava/lang/Object;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>1.判断对象对应的类是否加载，链接，初始化</code></p><ul><li>虚拟机遇到new指令，首先检查这个指令的参数是否能在Metaspace的常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已经被加载，解析和初始化（类元信息是否存在）</li><li>如果类没有加载，那么在双亲委派的机制下，使用当前类加载器以ClassLoader + 包名 + 类名为key进行查找对应的.class文件，如果没有找到文件，则抛出ClassNotFoundException异常，如果找到，则进行类加载，并生成对应的Class对象。</li></ul><p><code>2.为对象分配内存</code></p><ul><li>首先计算对象占用的空间，接着在堆中划分一块内存给新对象，如果实例成员变量是引用变量，仅分配引用变量空间即可，即4个字节大小</li><li>如果内存规整：采用指针碰撞分配内存 <ul><li>如果内存是规整的，那么虚拟机将采用的是指针碰撞法（Bump The Point）来为对象分配内存。</li><li>意思是所有用过的内存在一边，空闲的内存放另外一边，中间放着一个指针作为分界点的指示器，分配内存就仅仅是把指针往空闲内存那边挪动一段与对象大小相等的距离罢了。</li></ul></li></ul><p><code>3.处理并发问题</code></p><ul><li>采用CAS+失败重试保证更新的原子性</li><li>每个线程预先分配TLAB - 通过设置 -XX:+UseTLAB参数来设置（区域加锁机制）</li><li>在Eden区给每个线程分配一块区域</li></ul><p><code>4.初始化分配的空间</code></p><ul><li>所有属性设置默认值，保证对象实例字段在不赋值可以直接使用</li><li>给对象属性赋值的顺序：</li><li>属性的默认值初始化</li><li>显示初始化/代码块初始化（并列关系，谁先谁后看代码编写的顺序）</li><li>构造器初始化</li></ul><p><code>5.设置对象的对象头</code></p><p>将对象的所属类（即类的元数据信息）、对象的HashCode和对象的GC信息、锁信息等数据存储在对象的对象头中。这个过程的具体设置方式取决于JVM实现。</p><p><code>6.执行init方法进行初始化</code></p><ol><li>在Java程序的视角看来，初始化才正式开始。初始化成员变量，执行实例化代码块，调用类的构造方法，并把堆内对象的首地址赋值给引用变量</li><li>因此一般来说（由字节码中跟随invokespecial指令所决定），new指令之后会接着就是执行init方法，把对象按照程序员的意愿进行初始化，这样一个真正可用的对象才算完成创建出来。</li></ol><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 测试对象实例化的过程</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  ① 加载类元信息 - ② 为对象分配内存 - ③ 处理并发问题  - ④ 属性的默认初始化（零值初始化）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  - ⑤ 设置对象头的信息 - ⑥ 属性的显式初始化、代码块中初始化、构造器中初始化</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  给对象的属性赋值的操作：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  ① 属性的默认初始化 - ② 显式初始化 / ③ 代码块中初始化 - ④ 构造器中初始化</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Customer</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1001</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">Account</span><span style="color:#A6ACCD;"> acct</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">匿名客户</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Customer</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        acct </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Account</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Account</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><code>Customer字节码</code></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"> 0 aload_0</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1 invokespecial #1 &lt;java/lang/Object.&lt;init&gt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> 4 aload_0</span></span>
<span class="line"><span style="color:#A6ACCD;"> 5 sipush 1001</span></span>
<span class="line"><span style="color:#A6ACCD;"> 8 putfield #2 &lt;com/atguigu/java/Customer.id&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">11 aload_0</span></span>
<span class="line"><span style="color:#A6ACCD;">12 ldc #3 &lt;匿名客户&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">14 putfield #4 &lt;com/atguigu/java/Customer.name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">17 aload_0</span></span>
<span class="line"><span style="color:#A6ACCD;">18 new #5 &lt;com/atguigu/java/Account&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">21 dup</span></span>
<span class="line"><span style="color:#A6ACCD;">22 invokespecial #6 &lt;com/atguigu/java/Account.&lt;init&gt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">25 putfield #7 &lt;com/atguigu/java/Customer.acct&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">28 return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>init() 方法的字节码指令： <ul><li>属性的默认值初始化：id = 1001;</li><li>显示初始化/代码块初始化：name = &quot;匿名客户&quot;;</li><li>构造器初始化：acct = new Account();</li></ul></li></ul><h3 id="对象内存布局" tabindex="-1">对象内存布局 <a class="header-anchor" href="#对象内存布局" aria-hidden="true">#</a></h3><p><img src="`+e+'" alt=""></p><h3 id="对象的访问定位" tabindex="-1">对象的访问定位 <a class="header-anchor" href="#对象的访问定位" aria-hidden="true">#</a></h3><p><code>JVM是如何通过栈帧中的对象引用访问到其内部的对象实例</code></p><p>栈帧的reference引用堆区对象实例，堆区对象实例引入方法区的instanceKlass</p><p><code>对象的两种访问方式：句柄访问和直接指针</code></p><ul><li>句柄访问 <ul><li>缺点：在栈空间中开辟一块空间作为句柄池，句柄池本身也会占用空间，通过两次访问才能找到堆中的对象，效率低</li><li>优点：reference中储存稳定句柄地址，对象被移动（垃圾收集时移动对象很普遍）时只会改变句柄中实例数据指针即可，reference本身不需要被修改 <img src="'+p+'" alt=""></li></ul></li><li>直接指针（HotSpot使用） <ul><li>优点：直接指针是局部变量表中的引用，直接指向堆中的实例，在对象实例中有类型指针，指向的是方法区中的对象类型数据</li><li>缺点：对象被移动（垃圾收集时移动对象很普遍）时需要修改 reference 的值 <img src="'+i+'" alt=""></li></ul></li></ul><h2 id="执行引擎" tabindex="-1">执行引擎 <a class="header-anchor" href="#执行引擎" aria-hidden="true">#</a></h2><h3 id="执行引擎概述" tabindex="-1">执行引擎概述 <a class="header-anchor" href="#执行引擎概述" aria-hidden="true">#</a></h3><p><img src="'+c+'" alt=""></p><ol><li>执行引擎是java虚拟机核心的组成部分</li><li><code>虚拟机</code>是一个相对于<code>物理机</code>的概念，这两种机器都有代码执行能力，其区别是物理机的执行引擎是直接建立在处理器、缓存、指令集和操作系统层面上的，而<code>虚拟机的执行引擎则是由软件自行实现的</code>，因此可以不受物理条件制约地定制指令集与执行引擎的结构体系，<code>能够执行那些不被硬件直接支持的指令集格式。</code></li><li>JVM的主要任务是负责<code>装载字节码到其内部</code>，但字节码不能够直接运行在操作系统上，因为字节码指令并非等价于本地机器指令，它内部包含的仅仅只是一些能够被JVM所识别的字节码指令、符号表，以及其他辅助信息。</li><li>那么，如果想要让一个Java程序运行起来，执行引擎（Execution Engine）的任务就是<code>将字节码指令解释/编译为对应平台上的本地机器指令才可以。</code>简单来说，JVM中的执行引擎充当了将高级语言翻译为机器语言的译者。</li></ol><h4 id="执行引擎工作过程" tabindex="-1">执行引擎工作过程 <a class="header-anchor" href="#执行引擎工作过程" aria-hidden="true">#</a></h4><ol><li>执行引擎在执行过程中需要执行什么样的字节码指令完全依赖于<code>PC寄存器（程序计数器）</code></li><li>每当执行完一项指令操作后，PC寄存器就会更新下一条需要被执行的指令地址。</li><li>当然方法在执行的过程中，执行引擎可能会通过储存在局部变量中的对象引用准确定位java堆区中的对象实例信息，以及通过对象头中的元数据指针定位到目标对象的类信息</li></ol><h2 id="java代码编译和执行过程" tabindex="-1">java代码编译和执行过程 <a class="header-anchor" href="#java代码编译和执行过程" aria-hidden="true">#</a></h2><p><img src="'+r+'" alt=""></p><ol><li>黄色的部分是编译生成字节码文件的过程（javac编译器来完成），和JVM没有关系 <img src="'+o+'" alt=""></li><li>绿色和蓝色的部分是JVM需要执行的指令 <img src="'+t+'" alt=""></li></ol><h3 id="什么是解释器-什么是jit编译器" tabindex="-1">什么是解释器，什么是JIT编译器 <a class="header-anchor" href="#什么是解释器-什么是jit编译器" aria-hidden="true">#</a></h3><ol><li>解释器：当Java虚拟机启动时会根据预定义的规范对字节码采用逐行解释的方式执行，将每条字节码文件中的内容“翻译”为对应平台的本地机器指令执行。</li><li>JIT（Just In Time Compiler）编译器：就是虚拟机将源代码一次性直接编译成和本地机器平台相关的机器语言，但并不是马上执行。</li></ol><p><code>注意：解释器和编译器并不是相斥的，由javac编译的字节码可以走两条路，一个就是通过解释器进行执行，这是早期java实现将字节码编译成物理机指令的方法，之后就有了JOT执行java字节码，使用缓存将字节码全部编译储存，提高了之后程序执行素的</code></p><ul><li>为什么java是半编译半解释型语言？ <ul><li>java早期使用字节码解释器编译字节码文件</li><li>现在主要使用JIT解释字节码文件</li><li>也就是既可以使用字节码解释器，也可以使用JIT解释器</li><li>现在JVM在执行Java代码的时候，通常都会将解释执行与编译执行二者结合起来进行。</li><li>JIT编译器将字节码翻译成本地代码后，就可以做一个缓存操作，存储在方法区的JIT 代码缓存中（执行效率更高了），并且在翻译成本地代码的过程中可以做优化。</li></ul></li></ul><h2 id="机器码-指令-汇编语言" tabindex="-1">机器码 指令 汇编语言 <a class="header-anchor" href="#机器码-指令-汇编语言" aria-hidden="true">#</a></h2><h3 id="机器码" tabindex="-1">机器码 <a class="header-anchor" href="#机器码" aria-hidden="true">#</a></h3><ol><li>各种用二级制编码方式表示的指令，叫做机器码指令，最开始，人们就用它才编写程序，这就是机器语言</li><li>机器语言虽然能够被计算机理解和接受，但和人们的语言差别太大，不易被人们理解和记忆，并且用它编程容易出差错。</li><li>用它编写的程序一经输入计算机，CPU直接读取运行，因此和其他语言编的程序相比，执行速度最快。</li><li>机器指令与CPU紧密相关，所以不同种类的CPU所对应的机器指令也就不同。</li></ol><h3 id="指令和指令集" tabindex="-1">指令和指令集 <a class="header-anchor" href="#指令和指令集" aria-hidden="true">#</a></h3><h4 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-hidden="true">#</a></h4><ul><li>由于机器码是由0和1组成的二进制序列，可读性实在太差，于是人们发明了指令。</li><li>指令就是把机器码中特定的0和1序列，简化成对应的指令（一般为英文简写，如mov，inc等），可读性稍好</li><li>由于不同的硬件平台，执行同一个操作，对应的机器码可能不同，所以不同的硬件平台的同一种指令（比如mov），对应的机器码也可能不同。</li></ul><h4 id="指令集" tabindex="-1">指令集 <a class="header-anchor" href="#指令集" aria-hidden="true">#</a></h4><p><code>不同的硬件平台，各自支持的指令，是有差别的。因此每个平台所支持的指令，称之为对应平台的指令集。如常见的</code></p><ul><li>x86指令集，对应的是x86架构的平台</li><li>RM指令集，对应的是ARM架构的平台</li></ul><h3 id="汇编语言" tabindex="-1">汇编语言 <a class="header-anchor" href="#汇编语言" aria-hidden="true">#</a></h3><ul><li>由于指令的可读性还是太差，于是人们又发明了汇编语言。</li><li>在汇编语言中，用助记符（Mnemonics）代替机器指令的操作码，用地址符号（Symbol）或标号（Label）代替指令或操作数的地址。</li><li>在不同的硬件平台，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。</li><li>由于计算机只认识指令码，所以用汇编语言编写的程序还必须翻译（汇编）成机器指令码，计算机才能识别和执行。</li></ul><h3 id="高级语言" tabindex="-1">高级语言 <a class="header-anchor" href="#高级语言" aria-hidden="true">#</a></h3><ol><li>为了使计算机用户编程序更容易些，后来就出现了各种高级计算机语言。高级语言比机器语言、汇编语言更接近人的语言</li><li>当计算机执行高级语言编写的程序时，仍然需要把程序解释和编译成机器的指令码。完成这个过程的程序就叫做解释程序或编译程序。</li></ol><h3 id="字节码" tabindex="-1">字节码 <a class="header-anchor" href="#字节码" aria-hidden="true">#</a></h3><ul><li>字节码是一种中间状态（中间码）的二进制代码（文件），它比机器码更抽象，需要直译器转译后才能成为机器码</li><li>字节码主要为了实现特定软件运行和软件环境、与硬件环境无关。</li><li>字节码的实现方式是通过编译器和虚拟机器。编译器将源码编译成字节码，特定平台上的虚拟机器将字节码转译为可以直接执行的指令。</li><li>字节码典型的应用为：Java bytecode</li></ul><h2 id="解释器" tabindex="-1">解释器 <a class="header-anchor" href="#解释器" aria-hidden="true">#</a></h2><h3 id="为什么要有解释器" tabindex="-1">为什么要有解释器 <a class="header-anchor" href="#为什么要有解释器" aria-hidden="true">#</a></h3><ol><li>JVM设计的初衷是为了满足一次编译多次运行，所以就需要JVM虚拟机将字节码文件编译成对应不同版本的机器指令</li><li>解释器真正意义上所承担的角色就是一个运行时“翻译者”，将字节码文件中的内容“翻译”为对应平台的本地机器指令执行。</li><li>当一条字节码指令被解释执行完成后，接着再根据PC寄存器中记录的下一条需要被执行的字节码指令执行解释操作。</li></ol><h3 id="解释器分类" tabindex="-1">解释器分类 <a class="header-anchor" href="#解释器分类" aria-hidden="true">#</a></h3><ul><li>java一共使用两种解释器，一种是字节码编译器，现在普遍使用模板解释器 <ul><li>字节码解释器在执行时通过纯软件代码模拟字节码的执行，效率非常低下。</li><li>而模板解释器将每一条字节码和一个模板函数相关联，模板函数中直接产生这条字节码执行时的机器码，从而很大程度上提高了解释器的性能。</li></ul></li><li>在HotSpot VM中，解释器主要由Interpreter模块和Code模块构成。 <ul><li>Interpreter模块：实现了解释器的核心功能</li><li>Code模块：用于管理HotSpot VM在运行时生成的本地机器指令</li></ul></li></ul><h3 id="解释器的缺点" tabindex="-1">解释器的缺点 <a class="header-anchor" href="#解释器的缺点" aria-hidden="true">#</a></h3><h2 id="jit编译器" tabindex="-1">JIT编译器 <a class="header-anchor" href="#jit编译器" aria-hidden="true">#</a></h2><h3 id="java代码执行的分类" tabindex="-1">java代码执行的分类 <a class="header-anchor" href="#java代码执行的分类" aria-hidden="true">#</a></h3><ol><li>第一种是将源代码编译成字节码文件，然后在运行时通过解释器将字节码文件转为机器码执行</li><li>第二种是编译执行（直接编译成机器码）。现代虚拟机为了提高执行效率，会使用即时编译技术（JIT，Just In Time）将方法编译成机器码后再执行</li></ol><h3 id="为什么还需要解释器" tabindex="-1">为什么还需要解释器 <a class="header-anchor" href="#为什么还需要解释器" aria-hidden="true">#</a></h3><ol><li>解释器和编译器是可以共存的，在冷机部署代码的时候，JIT并没有将字节码全部编译为机器代码以及检测高频代码，这是解释器就可以边编译边执行，不至于响应的时间过长</li></ol>',71),h=[u];function b(C,A,y,m,D,v){return a(),n("div",null,h)}const j=s(d,[["render",b]]);export{F as __pageData,j as default};