import{_ as s,o as n,c as a,a as l}from"./app.1ab3fa21.js";const F=JSON.parse('{"title":"spring源码编写day1","description":"","frontmatter":{},"headers":[{"level":2,"title":"tuple","slug":"tuple","link":"#tuple","children":[]},{"level":2,"title":"enum","slug":"enum","link":"#enum","children":[{"level":3,"title":"数字枚举","slug":"数字枚举","link":"#数字枚举","children":[]}]}],"relativePath":"ts/ts的数据类型.md","lastUpdated":1672415033000}'),p={name:"ts/ts的数据类型.md"},e=l(`<h1 id="spring源码编写day1" tabindex="-1">spring源码编写day1 <a class="header-anchor" href="#spring源码编写day1" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-12-28 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h1 id="_1-ts的数据类型有哪些" tabindex="-1">1.ts的数据类型有哪些 <a class="header-anchor" href="#_1-ts的数据类型有哪些" aria-hidden="true">#</a></h1><ul><li>boolean</li><li>number</li><li>string</li><li>array</li><li>tuple</li><li>enum</li><li>any</li><li>null和undefiend</li><li>void</li><li>never</li><li>object</li></ul><h2 id="tuple" tabindex="-1">tuple <a class="header-anchor" href="#tuple" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> tupleArr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">tupleArr</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">34</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//tuple必须保证元素的数量和类型一致</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="enum" tabindex="-1">enum <a class="header-anchor" href="#enum" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Rrd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Green</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Blue</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Color</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Red</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="数字枚举" tabindex="-1">数字枚举 <a class="header-anchor" href="#数字枚举" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Direction</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Up</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Down</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Left</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Right</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Direction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Up </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Direction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Down </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Direction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Direction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>给第一个枚举赋值</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Direction</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Up</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Down</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Left</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Right</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Direction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Up</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Direction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Down</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Direction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Direction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Right)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 10 11 12 13</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,13),o=[e];function r(t,c,i,D,y,C){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{F as __pageData,u as default};
