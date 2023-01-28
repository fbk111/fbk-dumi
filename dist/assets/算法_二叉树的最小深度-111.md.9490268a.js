import{_ as s,o as a,c as n,a as l}from"./app.1382543f.js";const p="/assets/最小深度.12415532.jpg",e="/assets/算法解析.3250689a.jpg",h=JSON.parse('{"title":"二叉树的最小深度-111-简单","description":"","frontmatter":{},"headers":[{"level":2,"title":"原题","slug":"原题","link":"#原题","children":[]},{"level":2,"title":"思考","slug":"思考","link":"#思考","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"relativePath":"算法/二叉树的最小深度-111.md","lastUpdated":null}'),o={name:"算法/二叉树的最小深度-111.md"},t=l('<h1 id="二叉树的最小深度-111-简单" tabindex="-1">二叉树的最小深度-111-简单 <a class="header-anchor" href="#二叉树的最小深度-111-简单" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-28 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="原题" tabindex="-1">原题 <a class="header-anchor" href="#原题" aria-hidden="true">#</a></h2><p>给定一个二叉树，找出其最小深度。</p><p>最小深度是从根节点到最近叶子节点的最短路径上的节点数量。</p><p>说明：叶子节点是指没有子节点的节点。</p><p><img src="'+p+`" alt=""></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：root = [3,9,20,null,null,15,7]</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="思考" tabindex="-1">思考 <a class="header-anchor" href="#思考" aria-hidden="true">#</a></h2><p>这个题也是使用后序遍历，为什么是后序遍历（包括前面的求二叉树最大深度），因为java运行的时候方法区是一个栈，在每次递归的时候，方法区都会加载当前的方法入栈，为什么这次的代码不直接修改Math.max变成Math.min，如下图所示，因为这里求的最小深度是15而不是9，所以应该判断节点是否为空 <img src="`+e+`" alt=""></p><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minDepth</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">minDepth</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">minDepth</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,13),r=[t];function c(i,D,y,C,F,A){return a(),n("div",null,r)}const u=s(o,[["render",c]]);export{h as __pageData,u as default};
