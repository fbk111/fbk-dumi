import{_ as s,o as a,c as n,a as l}from"./app.19465836.js";const p="/assets/题目1.8687d458.jpg",e="/assets/题目2.f7afdcbb.jpg",u=JSON.parse('{"title":"平衡二叉树-110-简单","description":"","frontmatter":{},"headers":[{"level":2,"title":"原题","slug":"原题","link":"#原题","children":[{"level":3,"title":"示例1","slug":"示例1","link":"#示例1","children":[]},{"level":3,"title":"示例2","slug":"示例2","link":"#示例2","children":[]}]},{"level":2,"title":"思考","slug":"思考","link":"#思考","children":[]}],"relativePath":"算法/平衡二叉树-110.md","lastUpdated":1675090210000}'),o={name:"算法/平衡二叉树-110.md"},t=l('<h1 id="平衡二叉树-110-简单" tabindex="-1">平衡二叉树-110-简单 <a class="header-anchor" href="#平衡二叉树-110-简单" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-30 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="原题" tabindex="-1">原题 <a class="header-anchor" href="#原题" aria-hidden="true">#</a></h2><p>给定一个二叉树，判断它是否是高度平衡的二叉树。</p><p>本题中，一棵高度平衡二叉树定义为：</p><p>一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。</p><h3 id="示例1" tabindex="-1">示例1 <a class="header-anchor" href="#示例1" aria-hidden="true">#</a></h3><p><img src="'+p+`" alt=""></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：root = [3,9,20,null,null,15,7]</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="示例2" tabindex="-1">示例2 <a class="header-anchor" href="#示例2" aria-hidden="true">#</a></h3><p><img src="`+e+`" alt=""></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：root = [1,2,2,3,3,null,null,4,4]</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="思考" tabindex="-1">思考 <a class="header-anchor" href="#思考" aria-hidden="true">#</a></h2><p>在求二叉树的深度，一般是使用前序遍历，求二叉树的高度，一般是使用后序遍历</p><ul><li><code>深度</code>:二叉树的任意一个节点到根节点的距离</li><li><code>高度</code>:二叉树的任意一个节点到叶子结点的距离</li></ul><p>在求二叉树的最大深度的时候使用的是后序遍历，按理说求深度一般是使用前序遍历，为什么最大深度要使用后续遍历，因为叶子节点到根节点的高度和根节点的深度是相同的，所以说可以求，这个平衡二叉树要判断他的左右两个子树的高度差，所以可以使用后序遍历，</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isBalanced</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">judge</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)==-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;font-style:italic;">?</span><span style="color:#89DDFF;">false</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#89DDFF;">true;</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">judge</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//后序遍历，左右中</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">judge</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">==-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">judge</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">==-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//递归的条件,不成立的话返回-1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)&gt;</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,18),r=[t];function c(i,D,y,F,C,A){return a(),n("div",null,r)}const b=s(o,[["render",c]]);export{u as __pageData,b as default};
