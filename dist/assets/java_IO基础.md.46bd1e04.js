import{_ as s,o as n,c as a,a as l}from"./app.19465836.js";const C=JSON.parse('{"title":"IO基础","description":"","frontmatter":{},"headers":[{"level":2,"title":"字节流","slug":"字节流","link":"#字节流","children":[{"level":3,"title":"inputStream","slug":"inputstream","link":"#inputstream","children":[]},{"level":3,"title":"OutputStream(字节输出流)","slug":"outputstream-字节输出流","link":"#outputstream-字节输出流","children":[]}]},{"level":2,"title":"字符流","slug":"字符流","link":"#字符流","children":[{"level":3,"title":"Render","slug":"render","link":"#render","children":[]},{"level":3,"title":"write","slug":"write","link":"#write","children":[]}]},{"level":2,"title":"字符缓冲流","slug":"字符缓冲流","link":"#字符缓冲流","children":[]},{"level":2,"title":"随机访问流","slug":"随机访问流","link":"#随机访问流","children":[]}],"relativePath":"java/IO基础.md","lastUpdated":1673446306000}'),p={name:"java/IO基础.md"},e=l(`<h1 id="io基础" tabindex="-1">IO基础 <a class="header-anchor" href="#io基础" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-11 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="字节流" tabindex="-1">字节流 <a class="header-anchor" href="#字节流" aria-hidden="true">#</a></h2><h3 id="inputstream" tabindex="-1">inputStream <a class="header-anchor" href="#inputstream" aria-hidden="true">#</a></h3><ul><li>read()：返回输入流中下一个字节的数据，返回值介于0-255，如果没有读到任何字节，返回-1，表示文件结束</li><li>read(byte b[]):从输入流中读取字节数组b中，如果数组b中的长度是0，则不读取，如果没有可用字节读取，返回-1，如果有可用字节读取，最多读取字节数是b.length,返回读取字节数这个方法相当于read(b,0,b.length)</li><li>read(byte b[],int off,int len)</li><li>skip(long n):忽略输入流中的n个字节返回世界忽略的字节数</li><li>available():返回输入流中可以读取的字节数 从java9，inputStream新增了多个方法</li><li>readAllBytes():返回输入流中的所有字节，返回字节数组</li><li>readNBytes(byte[] b,int off,int len):阻塞直到读取len个数组</li><li>transferTo(OutputStream out):将所有字节从一个输入流传递给另一个数组流</li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">InputStream</span><span style="color:#A6ACCD;"> fis </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FileInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">可读取字节数</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">fis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">available</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> skip</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">fis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">skip</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">fis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())!=-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">                System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">((</span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>使用DataInputStream中读取</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">FileInputStream</span><span style="color:#A6ACCD;"> fileInputStream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            fileInputStream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FileInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">FileNotFoundException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">DataInputStream</span><span style="color:#A6ACCD;"> dataInputStream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DataInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fileInputStream</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dataInputStream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readByte</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">((</span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="outputstream-字节输出流" tabindex="-1">OutputStream(字节输出流) <a class="header-anchor" href="#outputstream-字节输出流" aria-hidden="true">#</a></h3><ul><li>write(int b):将特定字节写入输出流</li><li>write(byte b[]):将数组b写入输出流</li><li>write(byte [] b,int off,int len)</li><li>flush():刷新此输出流并写出所有缓冲的输出字节</li><li>close():关闭输出流释放相关的系统资源</li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">FileOutputStream</span><span style="color:#A6ACCD;"> fileOutputStream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FileOutputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">output.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> bytes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBytes</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            fileOutputStream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bytes</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用BufferedOutPutStream读取</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">FileOutputStream</span><span style="color:#A6ACCD;"> fileOutputStream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FileOutputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">output.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">BufferedOutputStream</span><span style="color:#A6ACCD;"> dataOutPutStream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BufferedOutputStream</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fileOutputStream</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        fileOutputStream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        dataOutPutStream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>使用ObjectOutputStream</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ObjectOutputStream</span><span style="color:#A6ACCD;"> objectOutputStream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ObjectOutputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FileOutputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">file.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))){</span></span>
<span class="line"><span style="color:#A6ACCD;">            objectOutputStream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeObject</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="字符流" tabindex="-1">字符流 <a class="header-anchor" href="#字符流" aria-hidden="true">#</a></h2><p>为什么要分字符流操作还是字符流操作</p><ul><li>字符流使用JVM将字节转换得到</li><li>不知道编码类型容易出现乱码问题</li><li>utf8 英文1个字符，中文3个字符</li><li>unicode 任何字符都是2个字节</li><li>gbk 英文1个字节，中文2个字节</li></ul><h3 id="render" tabindex="-1">Render <a class="header-anchor" href="#render" aria-hidden="true">#</a></h3><p>Render是所有的字符输入流的父类 Render读取的是文本，outputStream读取的是原始字节</p><ul><li>read():读取一个字符</li><li>read(byte [] bytes):从输出流读取字符，储存到字符数组中</li><li>read(byte [] bytes,int off,int len)</li><li>skip(long n) 忽略输入流中的n个字符</li><li>close() <code>fileReader读取</code></li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">FileReader</span><span style="color:#A6ACCD;"> fileReader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FileReader</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">Byte</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> bytes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Byte</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            fileReader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">skip</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fileReader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())!=-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">                System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">((</span><span style="color:#C792EA;">char</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IOException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="write" tabindex="-1">write <a class="header-anchor" href="#write" aria-hidden="true">#</a></h3><ul><li>write(int c):写入单个字符</li><li>write(char [] charf)写入字符数组</li><li>write(String str,0,str.length()) 写入字符串</li><li>append(CharSequence csq):将指定的字符序列附加到指定的writer对象并返回该writer对象</li><li>append(char c) 将指定的字符附加到指定的 Writer 对象并返回该 Writer 对象。</li><li>flush():刷新输出流并强制写入所有的字符</li><li>close() 关闭字符输出流</li></ul><h2 id="字符缓冲流" tabindex="-1">字符缓冲流 <a class="header-anchor" href="#字符缓冲流" aria-hidden="true">#</a></h2><p>IO流是很消耗性能的，缓冲流将数据加载到缓冲区，一次读取写入多个字符串，避免IO操作，提高效率 使用BufferedInputStream增强FileInputStream</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">BufferedInputStream</span><span style="color:#A6ACCD;"> bufferedInputStream</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BufferededInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FileInputStream</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>字节流和字节缓冲流的差距是我们使用两个都会调用write和read方法只能写入或者读取一个字节，但是在使用缓冲区我们可以将字节存放在缓冲区，减少IO次数，提高读取速度</p><p>当我们只是使用read或者write进行单个字节或者字符的读取或写入，这样有缓冲区的话那么读取的速度会很快，如果我们使用byte数组进行读取，那么速度差距不会太过明显</p><h2 id="随机访问流" tabindex="-1">随机访问流 <a class="header-anchor" href="#随机访问流" aria-hidden="true">#</a></h2><p>支持跳转到文件的任意位置读取</p><p>构造方法</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//openAndDelete是否打开文件就删除文件</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RandomAccessFile</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">File</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> mode</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> openAndDelete</span><span style="color:#89DDFF;">){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>mode</p><ul><li>r:只读模式</li><li>rw：读写模式</li><li>rws: 相对于 rw，rws 同步更新对“文件的内容”或“元数据”的修改到外部存储设备。</li><li>rwd : 相对于 rw，rwd 同步更新对“文件的内容”的修改到外部存储设备。</li></ul>`,36),o=[e];function t(r,c,D,i,y,F){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{C as __pageData,u as default};
