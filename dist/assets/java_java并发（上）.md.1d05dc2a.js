import{_ as s,o as a,c as n,a as l}from"./app.1ab3fa21.js";const e="/assets/jvm线程.9dcf5143.jpg",C=JSON.parse('{"title":"java并发（上）","description":"","frontmatter":{},"headers":[{"level":2,"title":"进程和线程","slug":"进程和线程","link":"#进程和线程","children":[{"level":3,"title":"何为进程","slug":"何为进程","link":"#何为进程","children":[]},{"level":3,"title":"何为线程","slug":"何为线程","link":"#何为线程","children":[]}]},{"level":2,"title":"JVM与线程的关系","slug":"jvm与线程的关系","link":"#jvm与线程的关系","children":[{"level":3,"title":"程序计数器的作用","slug":"程序计数器的作用","link":"#程序计数器的作用","children":[]},{"level":3,"title":"虚拟机栈和本地方法栈为什么是私有的","slug":"虚拟机栈和本地方法栈为什么是私有的","link":"#虚拟机栈和本地方法栈为什么是私有的","children":[]},{"level":3,"title":"堆和方法区","slug":"堆和方法区","link":"#堆和方法区","children":[]}]}],"relativePath":"java/java并发（上）.md","lastUpdated":1673882463000}'),p={name:"java/java并发（上）.md"},o=l(`<h1 id="java并发-上" tabindex="-1">java并发（上） <a class="header-anchor" href="#java并发-上" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-15 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="进程和线程" tabindex="-1">进程和线程 <a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a></h2><h3 id="何为进程" tabindex="-1">何为进程 <a class="header-anchor" href="#何为进程" aria-hidden="true">#</a></h3><p>每个应用都有一个exe文件，每个exe文件执行都相当于一个进程，在java中，运行main函数将相当于启动了一个JVM进程，而main函数所在的线程就相当于这个进程中的主线程</p><h3 id="何为线程" tabindex="-1">何为线程 <a class="header-anchor" href="#何为线程" aria-hidden="true">#</a></h3><p>线程和进程相似，但线程是一个比进程更小的执行单位，与进程不同的是线程共享JVM的堆和方法区的方法，但是每个线程都有自己的<code>程序计数器</code>，<code>虚拟机栈</code>，<code>本地方法栈</code></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//或者java线程管理MAXBean</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ThreadMXBean</span><span style="color:#A6ACCD;"> threadMXBean </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ManagementFactory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getThreadMXBean</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//不需要同步monitor和synchroizer信息</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ThreadInfo</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> threadInfos </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> threadMXBean</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dumpAllThreads</span><span style="color:#89DDFF;">(false,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ThreadInfo</span><span style="color:#A6ACCD;"> threadInfo </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> threadInfos</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">threadInfo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getThreadName</span><span style="color:#89DDFF;">()+</span><span style="color:#A6ACCD;">threadInfo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getThreadId</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">main1 主线程</span></span>
<span class="line"><span style="color:#A6ACCD;">Reference Handler2</span></span>
<span class="line"><span style="color:#A6ACCD;">Finalizer3</span></span>
<span class="line"><span style="color:#A6ACCD;">Signal Dispatcher4</span></span>
<span class="line"><span style="color:#A6ACCD;">Attach Listener5</span></span>
<span class="line"><span style="color:#A6ACCD;">Common-Cleaner21</span></span>
<span class="line"><span style="color:#A6ACCD;">Monitor Ctrl-Break22</span></span>
<span class="line"><span style="color:#A6ACCD;">Notification Thread23</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="jvm与线程的关系" tabindex="-1">JVM与线程的关系 <a class="header-anchor" href="#jvm与线程的关系" aria-hidden="true">#</a></h2><p><img src="`+e+'" alt=""> 一个进程中有多个线程，多个线程共享堆和方法区（JDK1.8之后是元空间），但是每个线程有自己的虚拟计数器，虚拟机栈和本地方法栈</p><h3 id="程序计数器的作用" tabindex="-1">程序计数器的作用 <a class="header-anchor" href="#程序计数器的作用" aria-hidden="true">#</a></h3><ol><li>字节码解释器通过改变程序计数器来依次读取指令，从而控制代码的执行流程</li><li>在多线程执行模式，程序计数器用于记录当前线程执行的位置，当线程切换回来就知道运行到哪了</li></ol><h3 id="虚拟机栈和本地方法栈为什么是私有的" tabindex="-1">虚拟机栈和本地方法栈为什么是私有的 <a class="header-anchor" href="#虚拟机栈和本地方法栈为什么是私有的" aria-hidden="true">#</a></h3><ul><li><code>虚拟机栈</code>：每个java方法在执行的同时都会创建一个战阵用于储存局部变量表，操作数栈，常量池引用等信息，从方法调用直到执行完过程，就对应的一个栈帧在java虚拟机栈入栈和操作的出栈过程</li><li><code>本地方法栈</code>： 和虚拟机栈所发挥的作用非常相似，区别是： 虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。 在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。</li></ul><p>所以，为了保证线程中的局部变量不被别的线程访问到，虚拟机栈和本地方法栈是线程私有的。</p><h3 id="堆和方法区" tabindex="-1">堆和方法区 <a class="header-anchor" href="#堆和方法区" aria-hidden="true">#</a></h3><p>堆和方法区是所有线程共享的资源，堆是最大的一块内存，主要是存放引用类型，方法区主要储存</p>',19),r=[o];function t(c,i,d,D,A,y){return a(),n("div",null,r)}const F=s(p,[["render",t]]);export{C as __pageData,F as default};
