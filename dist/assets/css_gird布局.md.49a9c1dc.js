import{_ as s,o as a,c as n,d as e}from"./app.93bd220f.js";const l="/assets/grid-area.5521f9dc.png",y=JSON.parse('{"title":"gird布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"grid-template-columns和 grid-template-rows","slug":"grid-template-columns和-grid-template-rows","link":"#grid-template-columns和-grid-template-rows","children":[]},{"level":2,"title":"grid-row-gap和grid-coloums-gap","slug":"grid-row-gap和grid-coloums-gap","link":"#grid-row-gap和grid-coloums-gap","children":[]},{"level":2,"title":"grid-template-areas","slug":"grid-template-areas","link":"#grid-template-areas","children":[]},{"level":2,"title":"对齐方式jusitify-items align-items(对容器中的每个item对齐)","slug":"对齐方式jusitify-items-align-items-对容器中的每个item对齐","link":"#对齐方式jusitify-items-align-items-对容器中的每个item对齐","children":[{"level":3,"title":"jusitify-items","slug":"jusitify-items","link":"#jusitify-items","children":[]},{"level":3,"title":"align-items","slug":"align-items","link":"#align-items","children":[]}]},{"level":2,"title":"容器对齐jusitify-content align-content(整个容器进行对齐)","slug":"容器对齐jusitify-content-align-content-整个容器进行对齐","link":"#容器对齐jusitify-content-align-content-整个容器进行对齐","children":[{"level":3,"title":"jusitify-content","slug":"jusitify-content","link":"#jusitify-content","children":[]},{"level":3,"title":"align-content","slug":"align-content","link":"#align-content","children":[]}]},{"level":2,"title":"grid-auto-rows gird-auto-coloums","slug":"grid-auto-rows-gird-auto-coloums","link":"#grid-auto-rows-gird-auto-coloums","children":[]},{"level":2,"title":"grid-rows-start gird-row-end grid-colum-statr gird-column-end","slug":"grid-rows-start-gird-row-end-grid-colum-statr-gird-column-end","link":"#grid-rows-start-gird-row-end-grid-colum-statr-gird-column-end","children":[]},{"level":2,"title":"区域","slug":"区域","link":"#区域","children":[]},{"level":2,"title":"jusitify-self align-self place-self","slug":"jusitify-self-align-self-place-self","link":"#jusitify-self-align-self-place-self","children":[]}],"relativePath":"css/gird布局.md","lastUpdated":1672418623000}'),i={name:"css/gird布局.md"},r=e(`<h1 id="gird布局" tabindex="-1">gird布局 <a class="header-anchor" href="#gird布局" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-12-30 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h1 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-hidden="true">#</a></h1><ul><li>grid-template-columns</li><li>grid-template-rows</li><li>grid-row-gap</li><li>grid-coloum-gap</li></ul><h2 id="grid-template-columns和-grid-template-rows" tabindex="-1">grid-template-columns和 grid-template-rows <a class="header-anchor" href="#grid-template-columns和-grid-template-rows" aria-hidden="true">#</a></h2><p>例: grid-template-columns:100px,100px,100px,100px就是指定4行100px的列<br> 语法糖： grid-template-columns(循环的 次数,宽度)<br> grid-template-columns(4,100px)<br> grid-template-columns(auto-fill,100px)<br> grid-template-columns:1fr,2fr,3fr进行均分 grid-template-columns:1fr,minmax(150px,1fr)minmax设置最小值和最大值<br></p><h2 id="grid-row-gap和grid-coloums-gap" tabindex="-1">grid-row-gap和grid-coloums-gap <a class="header-anchor" href="#grid-row-gap和grid-coloums-gap" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">grid-row-gap</span><span style="color:#A6ACCD;">:20px//行与行之间的距离</span></span>
<span class="line"><span style="color:#FFCB6B;">grid-coloums-gap</span><span style="color:#A6ACCD;">:20px//列于列之间的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">合并写法</span></span>
<span class="line"><span style="color:#FFCB6B;">grid-gap</span><span style="color:#A6ACCD;">:20px 20px</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="grid-template-areas" tabindex="-1">grid-template-areas <a class="header-anchor" href="#grid-template-areas" aria-hidden="true">#</a></h2><p><img src="`+l+`" alt=""></p><h2 id="对齐方式jusitify-items-align-items-对容器中的每个item对齐" tabindex="-1">对齐方式jusitify-items align-items(对容器中的每个item对齐) <a class="header-anchor" href="#对齐方式jusitify-items-align-items-对容器中的每个item对齐" aria-hidden="true">#</a></h2><h3 id="jusitify-items" tabindex="-1">jusitify-items <a class="header-anchor" href="#jusitify-items" aria-hidden="true">#</a></h3><p>横向居中对齐</p><h3 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-hidden="true">#</a></h3><p>纵向居中对齐</p><h2 id="容器对齐jusitify-content-align-content-整个容器进行对齐" tabindex="-1">容器对齐jusitify-content align-content(整个容器进行对齐) <a class="header-anchor" href="#容器对齐jusitify-content-align-content-整个容器进行对齐" aria-hidden="true">#</a></h2><h3 id="jusitify-content" tabindex="-1">jusitify-content <a class="header-anchor" href="#jusitify-content" aria-hidden="true">#</a></h3><p>整个容器居横向中对齐</p><h3 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-hidden="true">#</a></h3><p>整个容器居中纵向对齐</p><h2 id="grid-auto-rows-gird-auto-coloums" tabindex="-1">grid-auto-rows gird-auto-coloums <a class="header-anchor" href="#grid-auto-rows-gird-auto-coloums" aria-hidden="true">#</a></h2><p>item没有设置宽高并且多出来的可以设置item的宽高</p><h1 id="项目属性" tabindex="-1">项目属性 <a class="header-anchor" href="#项目属性" aria-hidden="true">#</a></h1><h2 id="grid-rows-start-gird-row-end-grid-colum-statr-gird-column-end" tabindex="-1">grid-rows-start gird-row-end grid-colum-statr gird-column-end <a class="header-anchor" href="#grid-rows-start-gird-row-end-grid-colum-statr-gird-column-end" aria-hidden="true">#</a></h2><p>例</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">dmeo</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    gird-template-colums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[c1] </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> [c2] </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> [c3] </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> [c4]</span></span>
<span class="line"><span style="color:#A6ACCD;">    grid-template-rows:[c1]</span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> [c2] </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> [c3] </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> [c4] </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> [c5]</span></span>
<span class="line"><span style="color:#A6ACCD;">    //上述相当于一个4行3列</span></span>
<span class="line"><span style="color:#A6ACCD;">    gird-colums-satrt:</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    gird-colums-end:</span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">    //从第一个开始，第三个结束</span></span>
<span class="line"><span style="color:#A6ACCD;">    //简写</span></span>
<span class="line"><span style="color:#A6ACCD;">    gird-colums:</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">/</span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">    gird-colums-start:span </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> 向右跨越三个</span></span>
<span class="line"><span style="color:#A6ACCD;">    gird-columns-end:span </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">向左两个</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="区域" tabindex="-1">区域 <a class="header-anchor" href="#区域" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    gird-template-areas</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a a a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a a a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c c c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d d d</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">gird-area</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">b</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 将b区域全占了 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="jusitify-self-align-self-place-self" tabindex="-1">jusitify-self align-self place-self <a class="header-anchor" href="#jusitify-self-align-self-place-self" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">jusitify-self</span><span style="color:#A6ACCD;">:item里边对齐，和jusitify-item一样，只是jusitify-item定义在容器，</span><span style="color:#FFCB6B;">jusitify-self定义在item</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,31),t=[r];function p(o,c,d,u,g,m){return a(),n("div",null,t)}const C=s(i,[["render",p]]);export{y as __pageData,C as default};
