import{_ as s,o as n,c as a,a as l}from"./app.1ab3fa21.js";const F=JSON.parse('{"title":"IO基础","description":"","frontmatter":{},"headers":[{"level":2,"title":"装饰器模式","slug":"装饰器模式","link":"#装饰器模式","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]}]},{"level":2,"title":"适配器模式","slug":"适配器模式","link":"#适配器模式","children":[{"level":3,"title":"inputStream部分源码","slug":"inputstream部分源码","link":"#inputstream部分源码","children":[]},{"level":3,"title":"outPutStreamWriter部分源码","slug":"outputstreamwriter部分源码","link":"#outputstreamwriter部分源码","children":[]},{"level":3,"title":"适配器和装饰器的去啊u别","slug":"适配器和装饰器的去啊u别","link":"#适配器和装饰器的去啊u别","children":[]}]},{"level":2,"title":"工厂模式","slug":"工厂模式","link":"#工厂模式","children":[]},{"level":2,"title":"观察者模式","slug":"观察者模式","link":"#观察者模式","children":[]}],"relativePath":"java/IO设计模式.md","lastUpdated":1673446306000}'),p={name:"java/IO设计模式.md"},e=l(`<h1 id="io基础" tabindex="-1">IO基础 <a class="header-anchor" href="#io基础" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-11 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="装饰器模式" tabindex="-1">装饰器模式 <a class="header-anchor" href="#装饰器模式" aria-hidden="true">#</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h3><p>可以在不改变原有对象的情况下拓展其功能</p><p>装饰器模式可以通过组合替代继承来拓展原始类的功能，在一些继承关系比较复杂的场景</p><p>对于字节流，<code>FileInputStream</code>和<code>FileOutputStream</code>是装饰器模式的核心，分别增强InputStream和OutputStream</p><p>我们通过BufferedInputStream来增强FileInputStream功能</p><p><code>BufferedInputStream</code>构造函数</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BufferedInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">InputStream</span><span style="color:#A6ACCD;"> in</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this(</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> DEFAULT_BUFFER_SIZE</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BufferedInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">InputStream</span><span style="color:#A6ACCD;"> in</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> size</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    super</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">size </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IllegalArgumentException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Buffer size &lt;= 0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    buf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>BufferedInputStream</code>实例</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">BufferedInputStream</span><span style="color:#A6ACCD;"> bis </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BufferedInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FileInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> skip </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> bis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">skip</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">content </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> bis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">((</span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>提问：<code>为什么直接不制造一个BufferedFileInputStream</code></p><p>如果inputStream子类比较少，为每个inputStream制造一个缓冲流，太麻烦了</p><h2 id="适配器模式" tabindex="-1">适配器模式 <a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a></h2><p>举例：通过适配器，我们可以将字节流转换成字符流，然后我们就可以通过字节流对象来读取字节流和字符流</p><p><code>inputStreamReader</code>和<code>OutputStreamWriter</code>是两个适配器，也是字符流和字节流转换的桥梁，<code>InputStreamReader</code>使用<code>StreamDecoder</code>对字节流进行解码，实现字节流到字符流，<code>OutputStreamWriter</code>使用<code>StreamEncoder</code>进行编码，实现字符流到字节流</p><h3 id="inputstream部分源码" tabindex="-1">inputStream部分源码 <a class="header-anchor" href="#inputstream部分源码" aria-hidden="true">#</a></h3><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InputStreamReader</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Reader</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//用于解码的对象</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">StreamDecoder</span><span style="color:#A6ACCD;"> sd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">InputStreamReader</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">InputStream</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">in</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        super</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 获取 StreamDecoder 对象</span></span>
<span class="line"><span style="color:#A6ACCD;">            sd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> StreamDecoder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forInputStreamReader</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">)null);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">UnsupportedEncodingException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 使用 StreamDecoder 对象做具体的读取工作</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> sd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="outputstreamwriter部分源码" tabindex="-1">outPutStreamWriter部分源码 <a class="header-anchor" href="#outputstreamwriter部分源码" aria-hidden="true">#</a></h3><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InputStreamReader</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Reader</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//用于解码的对象</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">StreamDecoder</span><span style="color:#A6ACCD;"> sd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">InputStreamReader</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">InputStream</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">in</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        super</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 获取 StreamDecoder 对象</span></span>
<span class="line"><span style="color:#A6ACCD;">            sd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> StreamDecoder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forInputStreamReader</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">)null);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">UnsupportedEncodingException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 使用 StreamDecoder 对象做具体的读取工作</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> sd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="适配器和装饰器的去啊u别" tabindex="-1">适配器和装饰器的去啊u别 <a class="header-anchor" href="#适配器和装饰器的去啊u别" aria-hidden="true">#</a></h3><p>装饰器测试增强原始类的功能，装饰器类需要跟原始类继承相同的抽象类或者实现相同接口，并且装饰器模式支持对原始嵌套类使用多个装饰器</p><p>适配器侧重让不兼容的接口进行交互工作</p><h2 id="工厂模式" tabindex="-1">工厂模式 <a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a></h2><p>工厂模式用于创建对象,NIO中大量用到工厂模式</p><ul><li>Files.newInputStream()</li><li>Paths.get()</li><li>ZipFileSystem</li></ul><h2 id="观察者模式" tabindex="-1">观察者模式 <a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a></h2>`,29),o=[e];function t(r,c,D,y,i,A){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
