import{_ as s,o as n,c as l,a}from"./app.05a04f5e.js";const e="/assets/offset.9b74f1b7.png",C=JSON.parse('{"title":"判断元素在可视范围内","description":"","frontmatter":{},"headers":[{"level":2,"title":"offsetLeft","slug":"offsetleft","link":"#offsetleft","children":[]},{"level":2,"title":"clientWidth","slug":"clientwidth","link":"#clientwidth","children":[]}],"relativePath":"js/如何判断元素是否在可视区域.md","lastUpdated":1674743384000}'),o={name:"js/如何判断元素是否在可视区域.md"},t=a('<h1 id="判断元素在可视范围内" tabindex="-1">判断元素在可视范围内 <a class="header-anchor" href="#判断元素在可视范围内" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-12-22 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><ul><li>借着这个机会，复习一下dom</li></ul><h1 id="_1-实现" tabindex="-1">1.实现 <a class="header-anchor" href="#_1-实现" aria-hidden="true">#</a></h1><p>判断一个元素在可视区域,有三张方法</p><ul><li>offsetTop,offSetLeft,offSetRight,offSetWidh,offSetHeight</li><li>getBoundingClientRect</li><li>Intersection Observer</li></ul><h2 id="offsetleft" tabindex="-1">offsetLeft <a class="header-anchor" href="#offsetleft" aria-hidden="true">#</a></h2><p><img src="'+e+`" alt=""></p><h2 id="clientwidth" tabindex="-1">clientWidth <a class="header-anchor" href="#clientwidth" aria-hidden="true">#</a></h2><ul><li>clientWidth是元素内容区宽度加左右内边距宽度</li><li>clientHeight是元素内容区加上下内边距宽度</li><li>scrollWidth是元素内容区宽度</li><li>scrollHeight是元素内容区高度</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isInViewPortOfOne</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">viewPort</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">documentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clientHeight</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clientHeight</span><span style="color:#676E95;font-style:italic;">//屏幕的宽度</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">offsetTop</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">offsetTop</span><span style="color:#676E95;font-style:italic;">//距离最上边的高度</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">documentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#676E95;font-style:italic;">//滚动条的距离</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">offsetTop</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">scrollTop</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">viewPortHeight</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,12),p=[t];function c(r,i,y,D,d,f){return n(),l("div",null,p)}const F=s(o,[["render",c]]);export{C as __pageData,F as default};
