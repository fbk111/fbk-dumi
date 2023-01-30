import{_ as s,o as a,c as n,a as l}from"./app.19465836.js";const C=JSON.parse('{"title":"Path和Paths","description":"","frontmatter":{},"headers":[{"level":2,"title":"Files","slug":"files","link":"#files","children":[]}],"relativePath":"Netty/Path.md","lastUpdated":1672758722000}'),p={name:"Netty/Path.md"},o=l(`<h1 id="path和paths" tabindex="-1">Path和Paths <a class="header-anchor" href="#path和paths" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-2 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><p>jdk7引入了Path和Paths类</p><ul><li>path表示文件路径</li><li>Paths表示工具类</li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 相对路径 使用 user.dir 环境变量来定位 1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">1.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 绝对路径 代表了  d:\\1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d:/1.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 绝对路径 同样代表了  d:\\1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> projects </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">projects</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 代表了  d:\\data\\projects</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">data</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">projects</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">normalize</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 正常化路径</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="files" tabindex="-1">Files <a class="header-anchor" href="#files" aria-hidden="true">#</a></h2><p>检查文件是否存在</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">helloword/data.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exists</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>创建文件目录</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">helloworld/data.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createDirectory</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>如果目录已存在，会抛异常 FileAlreadyExistsException</li><li>不能一次创建多级目录，否则会抛异常 NoSuchFileException</li></ul><p>创建多级目录</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">helloword/d1/d2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createDirectories</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>拷贝文件</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">helloworld/h1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> path1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">helloworld/h2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">path1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果文件已存在需要覆盖</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">helloworld/h1.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> path1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">helloworld/h2.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">path1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StandardCopyOption</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">REPLACE_EXISTING</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>删除文件</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">helloword/target.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>删除目录</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">helloword/h1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>遍历文件目录</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> throws IOException </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">AtomicInteger</span><span style="color:#A6ACCD;"> dirCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AtomicInteger</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">AtomicInteger</span><span style="color:#A6ACCD;"> fileCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AtomicInteger</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//为什么不同int dirCount;计数，在lambda表达式中，我们访问全局的数据类型，前边都会默认添加final修饰，所以在lambda里面改变数值不可能</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//访问者模式</span></span>
<span class="line"><span style="color:#A6ACCD;">        Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">walkFileTree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Program Files</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">java</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">jdk1.8.0_91</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">SimpleFileVisitor</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Path</span><span style="color:#89DDFF;">&gt;(){</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//检测到目录之前</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FileVisitResult</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">preVisitDirectory</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">BasicFileAttributes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">basicFileAttributes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                dirCount</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">incrementAndGet</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preVisitDirectory</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">basicFileAttributes</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//检测到文件</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FileVisitResult</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">visitFile</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">BasicFileAttributes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">basicFileAttributes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                fileCount</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">incrementAndGet</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">visitFile</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> basicFileAttributes</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>统计jar包数目</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo3</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> throws IOException </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">AtomicInteger</span><span style="color:#A6ACCD;"> jarCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AtomicInteger</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">walkFileTree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Program Files</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">java</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">jdk1.8.0_91</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">SimpleFileVisitor</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Path</span><span style="color:#89DDFF;">&gt;(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FileVisitResult</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">visitFile</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">BasicFileAttributes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">basicFileAttributes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">endsWith</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.jar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    jarCount</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">incrementAndGet</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">visitFile</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> basicFileAttributes</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>删除多级目录</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo4</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> throws IOException </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">walkFileTree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Paths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Program Files</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">java</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">jdk1.8.0_91</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">SimpleFileVisitor</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Path</span><span style="color:#89DDFF;">&gt;(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FileVisitResult</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">visitFile</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">BasicFileAttributes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">basicFileAttributes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">visitFile</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> basicFileAttributes</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FileVisitResult</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">postVisitDirectory</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Path</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                Files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">postVisitDirectory</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> e</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,29),e=[o];function t(r,c,D,y,F,A){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{C as __pageData,u as default};
