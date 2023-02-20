import{_ as s,o as n,c as a,a as l}from"./app.05a04f5e.js";const C=JSON.parse('{"title":"optional类","description":"","frontmatter":{},"headers":[{"level":2,"title":"之前判断空","slug":"之前判断空","link":"#之前判断空","children":[]},{"level":2,"title":"Optional类","slug":"optional类-1","link":"#optional类-1","children":[]},{"level":2,"title":"Optional的基本使用","slug":"optional的基本使用","link":"#optional的基本使用","children":[]},{"level":2,"title":"Optional的常用方法","slug":"optional的常用方法","link":"#optional的常用方法","children":[]}],"relativePath":"java/Optional类.md","lastUpdated":1676813369000}'),p={name:"java/Optional类.md"},o=l(`<h1 id="optional类" tabindex="-1">optional类 <a class="header-anchor" href="#optional类" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-2-16 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="之前判断空" tabindex="-1">之前判断空 <a class="header-anchor" href="#之前判断空" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Test</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test01</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//String userName = &quot;张三&quot;;</span></span>
<span class="line"><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> userName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">userName </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null){</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">字符串的长度：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> userName</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">字符串为空</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="optional类-1" tabindex="-1">Optional类 <a class="header-anchor" href="#optional类-1" aria-hidden="true">#</a></h2><p><code>Optional是一个没有子类的工具类，Optional是一个可以为null的容器对象，它的主要作用就是为了避免Null检查，防止NullpointerException，</code></p><h2 id="optional的基本使用" tabindex="-1">Optional的基本使用 <a class="header-anchor" href="#optional的基本使用" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 第一种方式 通过of方法 of方法是不支持null的</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Optional</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> optional </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Optional</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">of</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fbk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 第二种方式通过 ofNullable方法 支持null</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Optional</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Object</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> optional1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Optional</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ofNullable</span><span style="color:#89DDFF;">(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Optional</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> optional2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Optional</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ofNullable</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fbk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 第三种方式 通过empty方法直接创建一个空的Optional对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Optional</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Object</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> optional3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Optional</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="optional的常用方法" tabindex="-1">Optional的常用方法 <a class="header-anchor" href="#optional的常用方法" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Optional中的常用方法介绍</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * get(): 如果Optional有值则返回，否则抛出NoSuchElementException异常</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * get()通常和isPresent方法一块使用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * isPresent():判断是否包含值，包含值返回true，不包含值返回false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * orElse(T t):如果调用对象包含值，就返回该值，否则返回t</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * orElseGet(Supplier s):如果调用对象包含值，就返回该值，否则返回 Lambda表达式的返回值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test2</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Optional</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> op1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Optional</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">of</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fbk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Optional</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> op2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Optional</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">op1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isPresent</span><span style="color:#89DDFF;">()){</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">用户名称</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">op1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">op2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isPresent</span><span style="color:#89DDFF;">()){</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">op2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">op2是一个空Optional对象</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> o1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> op2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">orElse</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我是空对象的替换对象</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> o2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> op2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">orElseGet</span><span style="color:#89DDFF;">(()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我是空对象的替换方法</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> o3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> op2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">orElseThrow</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,11),e=[o];function t(r,c,D,i,y,F){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{C as __pageData,b as default};
