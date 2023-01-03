import{_ as s,o as n,c as a,a as l}from"./app.a41eff6c.js";const F=JSON.parse('{"title":"二分查找-对应力扣704-简单","description":"","frontmatter":{},"headers":[],"relativePath":"算法/二分查找-704.md","lastUpdated":1672454661000}'),p={name:"算法/二分查找-704.md"},e=l(`<h1 id="二分查找-对应力扣704-简单" tabindex="-1">二分查找-对应力扣704-简单 <a class="header-anchor" href="#二分查找-对应力扣704-简单" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-12-16 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h1 id="_1-题目" tabindex="-1">1.题目 <a class="header-anchor" href="#_1-题目" aria-hidden="true">#</a></h1><p>给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。</p><h1 id="_2-示例" tabindex="-1">2.示例 <a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a></h1><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入: nums = [-1,0,3,5,9,12], target = 9</span></span>
<span class="line"><span style="color:#A6ACCD;">输出: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">解释: 9 出现在 nums 中并且下标为 4</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="_3-思路" tabindex="-1">3.思路 <a class="header-anchor" href="#_3-思路" aria-hidden="true">#</a></h1><p>这个数组是一个双闭的类型，我们是可以考虑left指针和right指针相等的情况，还有<code>左闭右开的数组\`\`右闭左开的数组</code>他们的讨论都很简单，无非是划分一个确定的范围</p><h1 id="_4-步骤" tabindex="-1">4.步骤 <a class="header-anchor" href="#_4-步骤" aria-hidden="true">#</a></h1><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">search</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">target</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//定义左指针</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//定义右指针，如果是右开的话，则是nums.length</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">){</span><span style="color:#676E95;font-style:italic;">//左闭右闭，可以相等</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> middle</span><span style="color:#89DDFF;">=(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//每次都要重新计算middle</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">middle</span><span style="color:#89DDFF;">]==</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> middle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">middle</span><span style="color:#89DDFF;">]&gt;</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">             right</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">middle</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//为什么不是middle=right，因为这是一个左闭右闭的区间所以说nums[middle]肯定是包含在区间内并且判断了，所以我们可以直接-1，相反如果是一个右开，那我们不用-</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">middle</span><span style="color:#89DDFF;">]&lt;</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">             left</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">middle</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,11),o=[e];function t(r,c,D,i,y,C){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
