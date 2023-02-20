import{_ as s,o as n,c as a,a as l}from"./app.05a04f5e.js";const p="/assets/对称二叉树.ba915226.jpg",b=JSON.parse('{"title":"对称二叉树-101-简单","description":"","frontmatter":{},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[{"level":3,"title":"示例1","slug":"示例1","link":"#示例1","children":[]}]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"原题","slug":"原题","link":"#原题","children":[]}],"relativePath":"算法/对称二叉树-101.md","lastUpdated":1674743384000}'),e={name:"算法/对称二叉树-101.md"},o=l('<h1 id="对称二叉树-101-简单" tabindex="-1">对称二叉树-101-简单 <a class="header-anchor" href="#对称二叉树-101-简单" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-26 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-hidden="true">#</a></h2><p>给你一个二叉树的根节点 root ， 检查它是否轴对称。</p><h3 id="示例1" tabindex="-1">示例1 <a class="header-anchor" href="#示例1" aria-hidden="true">#</a></h3><p><img src="'+p+`" alt=""></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：root = [1,2,2,3,4,4,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-hidden="true">#</a></h2><p>在比较的时候应该外侧和外侧进行比较，内侧和内测进行比较</p><h2 id="原题" tabindex="-1">原题 <a class="header-anchor" href="#原题" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isSymmetric</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compare</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compare</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">left</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">right</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#676E95;font-style:italic;">//分为4种情况</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#676E95;font-style:italic;">//1.如果左边为空，右边不为空返回false</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">==null&amp;&amp;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">!=null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#676E95;font-style:italic;">//2.左边不为空，右边为空</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">!=null&amp;&amp;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;font-style:italic;">//如果两边都是null</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">==null&amp;&amp;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#676E95;font-style:italic;">//如果两边的数值不相等</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#89DDFF;">       </span><span style="color:#676E95;font-style:italic;">//如果都没有返回，则进行递归</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 比较外侧</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> compareOutside </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compare</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 比较内侧</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> compareInside </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compare</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> compareOutside </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> compareInside</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,12),t=[o];function r(c,D,i,y,A,C){return n(),a("div",null,t)}const u=s(e,[["render",r]]);export{b as __pageData,u as default};
