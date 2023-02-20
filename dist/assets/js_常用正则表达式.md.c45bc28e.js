import{_ as s,o as a,c as n,a as l}from"./app.05a04f5e.js";const C=JSON.parse('{"title":"常用正则表达式","description":"","frontmatter":{},"headers":[{"level":2,"title":"匹配移动手机电话","slug":"匹配移动手机电话","link":"#匹配移动手机电话","children":[]},{"level":2,"title":"qq号码","slug":"qq号码","link":"#qq号码","children":[]},{"level":2,"title":"颜色匹配","slug":"颜色匹配","link":"#颜色匹配","children":[]},{"level":2,"title":"邮箱匹配","slug":"邮箱匹配","link":"#邮箱匹配","children":[]},{"level":2,"title":"匹配url","slug":"匹配url","link":"#匹配url","children":[]},{"level":2,"title":"匹配html","slug":"匹配html","link":"#匹配html","children":[]},{"level":2,"title":"ipv4","slug":"ipv4","link":"#ipv4","children":[]},{"level":2,"title":"身份证匹配","slug":"身份证匹配","link":"#身份证匹配","children":[]}],"relativePath":"js/常用正则表达式.md","lastUpdated":1673446306000}'),p={name:"js/常用正则表达式.md"},o=l(`<h1 id="常用正则表达式" tabindex="-1">常用正则表达式 <a class="header-anchor" href="#常用正则表达式" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-1-4 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="匹配移动手机电话" tabindex="-1">匹配移动手机电话 <a class="header-anchor" href="#匹配移动手机电话" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">345678</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{9}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//全局模式</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="qq号码" tabindex="-1">qq号码 <a class="header-anchor" href="#qq号码" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{4,9}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="颜色匹配" tabindex="-1">颜色匹配 <a class="header-anchor" href="#颜色匹配" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">?([</span><span style="color:#C3E88D;">0-9a-fA-F</span><span style="color:#89DDFF;">]{6}|[</span><span style="color:#C3E88D;">0-9a-fA-F</span><span style="color:#89DDFF;">]{3})/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="邮箱匹配" tabindex="-1">邮箱匹配 <a class="header-anchor" href="#邮箱匹配" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">A-Za-z0-9_\\-</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">]+</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">A-Za-z0-9_\\-</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">]+</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-zA-Z</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">{2-6}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="匹配url" tabindex="-1">匹配url <a class="header-anchor" href="#匹配url" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;">https</span><span style="color:#89DDFF;">?|</span><span style="color:#C3E88D;">ftp</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">\\/\\/</span><span style="color:#89DDFF;">)?([</span><span style="color:#C3E88D;">\\da-z</span><span style="color:#A6ACCD;">\\.\\-</span><span style="color:#89DDFF;">]+)</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">a-z</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">]{2,6})([</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">\\w</span><span style="color:#A6ACCD;">\\.\\-</span><span style="color:#89DDFF;">]*)*</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="匹配html" tabindex="-1">匹配html <a class="header-anchor" href="#匹配html" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//\\s表示空格</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">&lt;</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">a-z</span><span style="color:#89DDFF;">]+)([^</span><span style="color:#C3E88D;">&gt;</span><span style="color:#89DDFF;">]+)*(?:</span><span style="color:#C3E88D;">&gt;</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*)</span><span style="color:#C3E88D;">&lt;</span><span style="color:#A6ACCD;">\\/</span><span style="color:#F78C6C;">\\1</span><span style="color:#C3E88D;">&gt;</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">&gt;</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">gm</span><span style="color:#676E95;font-style:italic;">//m表示匹配多行</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="ipv4" tabindex="-1">ipv4 <a class="header-anchor" href="#ipv4" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(([</span><span style="color:#C3E88D;">01</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]?|</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-4</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">25</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-5</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">){3}([</span><span style="color:#C3E88D;">01</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]?|</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-4</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">25</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-5</span><span style="color:#89DDFF;">])</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="身份证匹配" tabindex="-1">身份证匹配 <a class="header-anchor" href="#身份证匹配" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{5}(</span><span style="color:#C3E88D;">18</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">19</span><span style="color:#89DDFF;">|([</span><span style="color:#C3E88D;">23</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]))[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{2}(</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">0-2</span><span style="color:#89DDFF;">])(</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|[</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">01</span><span style="color:#89DDFF;">])[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{3}[</span><span style="color:#C3E88D;">0-9Xx</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,19),e=[o];function t(r,c,D,i,y,F){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{C as __pageData,h as default};
