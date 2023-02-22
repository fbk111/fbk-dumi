import{_ as s,o as n,c as a,a as l}from"./app.1ab3fa21.js";const i=JSON.parse('{"title":"二叉树搜素-501-简单","description":"","frontmatter":{},"headers":[{"level":2,"title":"原题","slug":"原题","link":"#原题","children":[]},{"level":2,"title":"解题","slug":"解题","link":"#解题","children":[]}],"relativePath":"算法/二叉搜索树的众数-501.md","lastUpdated":1675436020000}'),p={name:"算法/二叉搜索树的众数-501.md"},o=l(`<h1 id="二叉树搜素-501-简单" tabindex="-1">二叉树搜素-501-简单 <a class="header-anchor" href="#二叉树搜素-501-简单" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-2-1 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="原题" tabindex="-1">原题 <a class="header-anchor" href="#原题" aria-hidden="true">#</a></h2><p>给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。</p><p>如果树中有不止一个众数，可以按 任意顺序 返回。</p><p>假定 BST 满足如下定义：</p><p>结点左子树中所含节点的值 小于等于 当前节点的值 结点右子树中所含节点的值 大于等于 当前节点的值 左子树和右子树都是二叉搜索树</p><h2 id="解题" tabindex="-1">解题 <a class="header-anchor" href="#解题" aria-hidden="true">#</a></h2><p><code>暴力算法</code></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findMode</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> map</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">HashMap</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ArrayList</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stream</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">mapToInt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Integer</span><span style="color:#89DDFF;font-style:italic;">::</span><span style="color:#A6ACCD;">intValue</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">toArray</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">Demo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Map</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Entry</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> collect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entrySet</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">stream</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">sorted</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getValue</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">compareTo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getValue</span><span style="color:#89DDFF;">())).</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Collectors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toList</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">collect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">getKey</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> collect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">collect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">getValue</span><span style="color:#89DDFF;">()==</span><span style="color:#A6ACCD;">collect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">getValue</span><span style="color:#89DDFF;">()){</span></span>
<span class="line"><span style="color:#A6ACCD;">                   list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">collect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">getKey</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stream</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">mapToInt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Integer</span><span style="color:#89DDFF;font-style:italic;">::</span><span style="color:#A6ACCD;">intValue</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">toArray</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Demo</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Integer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> map</span><span style="color:#89DDFF;">){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOrDefault</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">Demo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">Demo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><code>使用中序遍历，双指针搜索</code></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">ArrayList</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> resList</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> maxCount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> pre</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findMode</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">//使用中序遍历，为什么，因为中序遍历可以规则排布</span></span>
<span class="line"><span style="color:#A6ACCD;">        resList</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ArrayList</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxCount</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        count</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        pre</span><span style="color:#89DDFF;">=null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">Demo1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> resList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stream</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">mapToInt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Integer</span><span style="color:#89DDFF;font-style:italic;">::</span><span style="color:#A6ACCD;">intValue</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">toArray</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Demo1</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">TreeNode</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">==null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">Demo1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> rootValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pre</span><span style="color:#89DDFF;">==null||</span><span style="color:#A6ACCD;">rootValue</span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;">pre</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">maxCount</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            resList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            resList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rootValue</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            maxCount</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;">maxCount</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            resList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rootValue</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        pre</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">Demo1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,13),e=[o];function r(t,c,D,F,y,A){return n(),a("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
