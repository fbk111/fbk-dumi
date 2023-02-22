import{_ as s,o as a,c as n,a as l}from"./app.1ab3fa21.js";const F=JSON.parse('{"title":"对调变量","description":"","frontmatter":{},"headers":[{"level":2,"title":"临时变量法","slug":"临时变量法","link":"#临时变量法","children":[]},{"level":2,"title":"加减法","slug":"加减法","link":"#加减法","children":[]},{"level":2,"title":"数组法","slug":"数组法","link":"#数组法","children":[]},{"level":2,"title":"对象法","slug":"对象法","link":"#对象法","children":[]},{"level":2,"title":"数组运算法","slug":"数组运算法","link":"#数组运算法","children":[]},{"level":2,"title":"按位异或法","slug":"按位异或法","link":"#按位异或法","children":[]},{"level":2,"title":"解构赋值","slug":"解构赋值","link":"#解构赋值","children":[]}],"relativePath":"js/对调变量.md","lastUpdated":1673446306000}'),p={name:"js/对调变量.md"},e=l(`<h1 id="对调变量" tabindex="-1">对调变量 <a class="header-anchor" href="#对调变量" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-1-4 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="临时变量法" tabindex="-1">临时变量法 <a class="header-anchor" href="#临时变量法" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">c</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="加减法" tabindex="-1">加减法 <a class="header-anchor" href="#加减法" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">b</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b</span><span style="color:#676E95;font-style:italic;">//a是8，b是3，对调</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b</span><span style="color:#676E95;font-style:italic;">//a是8，b是5.上边的b已经修改值了</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="数组法" tabindex="-1">数组法 <a class="header-anchor" href="#数组法" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b]</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="对象法" tabindex="-1">对象法 <a class="header-anchor" href="#对象法" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">={</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">b</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="数组运算法" tabindex="-1">数组运算法 <a class="header-anchor" href="#数组运算法" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a][</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="按位异或法" tabindex="-1">按位异或法 <a class="header-anchor" href="#按位异或法" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">b</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">a</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">b</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//例</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//3的二进制是0011</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//5的二进制是0101</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">b</span><span style="color:#676E95;font-style:italic;">//a结果就是0110</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">a</span><span style="color:#676E95;font-style:italic;">//b结果就是0011</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">b</span><span style="color:#676E95;font-style:italic;">//a最终结果就是0101</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="解构赋值" tabindex="-1">解构赋值 <a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">[a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b]</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">a]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,18),o=[e];function r(c,t,i,C,D,y){return a(),n("div",null,o)}const d=s(p,[["render",r]]);export{F as __pageData,d as default};
