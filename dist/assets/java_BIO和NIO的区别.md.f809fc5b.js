import{_ as s,o as n,c as a,a as l}from"./app.19465836.js";const C=JSON.parse('{"title":"BIO和NIO的区别","description":"","frontmatter":{},"headers":[{"level":2,"title":"BIO和NIO的区别","slug":"bio和nio的区别-1","link":"#bio和nio的区别-1","children":[{"level":3,"title":"BIO","slug":"bio","link":"#bio","children":[]},{"level":3,"title":"简单的bio实现","slug":"简单的bio实现","link":"#简单的bio实现","children":[]},{"level":3,"title":"NIO","slug":"nio","link":"#nio","children":[]},{"level":3,"title":"简单的nio实现","slug":"简单的nio实现","link":"#简单的nio实现","children":[]}]}],"relativePath":"java/BIO和NIO的区别.md","lastUpdated":1674294569000}'),p={name:"java/BIO和NIO的区别.md"},o=l(`<h1 id="bio和nio的区别" tabindex="-1">BIO和NIO的区别 <a class="header-anchor" href="#bio和nio的区别" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-20 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="bio和nio的区别-1" tabindex="-1">BIO和NIO的区别 <a class="header-anchor" href="#bio和nio的区别-1" aria-hidden="true">#</a></h2><ul><li>NIO以流的方式处理数据，NIO以块的方式处理数据，块IO的效率比流IO高很多。（比如说流IO他是一个流，你必须时刻去接着他，不然一些流就会丢失造成数据丢失，所以处理这个请求的线程就阻塞了他无法去处理别的请求，他必须时刻盯着这个请求防止数据丢失。而块IO就不一样了，线程可以等他的数据全部写入到缓冲区中形成一个数据块然后再去处理他，在这期间该线程可以去处理其他请求）</li><li>BIO是阻塞的，NIO是非阻塞的</li><li>BIO基于字节流和字符流进行操作的，而NIO基于Channel（通道）和Buffer（缓冲区）进行操作的，数据总是从通道读取到缓冲区中，或者从缓冲区写入到通道中。Selector（选择器）用于监听多个通道事件，因此使用单个线程就可以监听多个客户端通道</li></ul><h3 id="bio" tabindex="-1">BIO <a class="header-anchor" href="#bio" aria-hidden="true">#</a></h3><ul><li>BIO是传统的Java IO编程，其基本的类和接口在java.io包中</li><li>BIO(blocking I/O)：同步阻塞，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销</li><li>BIO方式使用于连接数目比较小且固定的架构，这种服务方式对服务器资源要求比价高，并且局限于应用中，JDK1.4以前的唯一选择，程序简单易理解 BIO基本模型：</li></ul><h3 id="简单的bio实现" tabindex="-1">简单的bio实现 <a class="header-anchor" href="#简单的bio实现" aria-hidden="true">#</a></h3><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">server</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ServerSocket</span><span style="color:#A6ACCD;"> serverSocket</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ServerSocket</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(true){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">Socket</span><span style="color:#A6ACCD;"> socket</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">serverSocket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">accept</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> byte</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Byte</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">InputStream</span><span style="color:#A6ACCD;"> ip</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInputStream</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(true){</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> read</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ip</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">read</span><span style="color:#89DDFF;">==-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">read</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Client</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">Socket</span><span style="color:#A6ACCD;"> socket</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Socket</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">OutPutStream</span><span style="color:#A6ACCD;"> outputStream</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOutputStream</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">   outputStream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBytes</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="nio" tabindex="-1">NIO <a class="header-anchor" href="#nio" aria-hidden="true">#</a></h3><ul><li>NIO全称 java non-blocking IO。从JDK 1.4开始，java提供了一些列改进的输入/输出（I/O）的新特性，被称为NIO，是同步非阻塞的</li><li>NIO相关类都被放在java.nio包及其子包下</li><li>NIO三大核心部分：Channel（通道），Buffer（缓冲区），Selector（选择器）</li><li>NIO是面向缓冲区的，或者面向块编程的。数据读取到一个它稍后处理的缓冲区，需要时可在缓冲区内前后移动，这就增加了处理过程中的灵活性，使用它可以提供非阻塞的高伸缩性网络</li><li>Java NIO的非阻塞模式，使一个线程从某通道发送或者读取数据，但是它仅能得到目前可用的数据，如果目前没有可用的数据时，就什么都不会获取，而不是保持线程阻塞，所以直至数据变的可读取之前，该线程可以继续做其他事情。非阻塞就是如此，一个线程请求写入一些数据到某通道，但不需要等待它完全写入，这个线程同时可以去做别的事情</li><li>通俗来讲：NIO是可以做到用一个线程处理多个操作的。假设有10000个请求过来，根据实际情况，可以分配50或100个线程来处理。不想BIO一样需要分配10000个线程来处理</li></ul><h3 id="简单的nio实现" tabindex="-1">简单的nio实现 <a class="header-anchor" href="#简单的nio实现" aria-hidden="true">#</a></h3><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Server</span><span style="color:#89DDFF;">(){</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">ByteBuffer</span><span style="color:#A6ACCD;"> buffer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ByteBuffer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">allocate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//创建服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ServerSocketChannel</span><span style="color:#A6ACCD;"> ssc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ServerSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">configureBlocking</span><span style="color:#89DDFF;">(false);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//在进行accept时候设置线程是多线成，不用等待</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">InetSocketAddress</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ArrayList</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">SocketChannel</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> channels </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ArrayList</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(true){</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//建立与客户点的连接</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">SocketChannel</span><span style="color:#A6ACCD;"> sc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ssc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">accept</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            sc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">configureBlocking</span><span style="color:#89DDFF;">(false);</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//设置read的时候是多线成，不会等待</span></span>
<span class="line"><span style="color:#A6ACCD;">            channels</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sc</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">SocketChannel</span><span style="color:#A6ACCD;"> channel </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> channels</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                channel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">buffer</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                buffer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flip</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">                buffer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Client</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">SocketChannel</span><span style="color:#A6ACCD;"> sc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> SocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        sc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">InetSocketAddress</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        sc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Charset</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defaultCharset</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">encode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">连接</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,14),e=[o];function c(r,t,D,F,y,i){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{C as __pageData,b as default};
