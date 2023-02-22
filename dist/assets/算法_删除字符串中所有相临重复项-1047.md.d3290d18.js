import{_ as s,o as n,c as a,a as l}from"./app.1ab3fa21.js";const C=JSON.parse('{"title":"删除字符串中所有相临重复项-对应力扣1047-简单","description":"","frontmatter":{},"headers":[{"level":2,"title":"原题","slug":"原题","link":"#原题","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]}],"relativePath":"算法/删除字符串中所有相临重复项-1047.md","lastUpdated":1673882463000}'),p={name:"算法/删除字符串中所有相临重复项-1047.md"},e=l(`<h1 id="删除字符串中所有相临重复项-对应力扣1047-简单" tabindex="-1">删除字符串中所有相临重复项-对应力扣1047-简单 <a class="header-anchor" href="#删除字符串中所有相临重复项-对应力扣1047-简单" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-16 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="原题" tabindex="-1">原题 <a class="header-anchor" href="#原题" aria-hidden="true">#</a></h2><p>给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。</p><p>在 S 上反复执行重复项删除操作，直到无法继续删除。</p><p>在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：&quot;abbaca&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：&quot;ca&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">解释：</span></span>
<span class="line"><span style="color:#A6ACCD;">例如，在 &quot;abbaca&quot; 中，我们可以删除 &quot;bb&quot; 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 &quot;aaca&quot;，其中又只有 &quot;aa&quot; 可以执行重复项删除操作，所以最后的字符串为 &quot;ca&quot;。tring</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-hidden="true">#</a></h2><p>这个可以使用栈的形式去做，遍历String，如果说他在栈里边已经存在，那就证明他们是相邻的重复元素，所以可以直接pop出去</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeDuplicates</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">ArrayDeque</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Character</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> deque</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ArrayDeque</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Character</span><span style="color:#89DDFF;">&gt;();</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//为什么选择ArrayDeque，因为在删除他比LinkedList快</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> ch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        ch</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">()||</span><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">peek</span><span style="color:#89DDFF;">()!=</span><span style="color:#A6ACCD;">ch</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//说明里边没有</span></span>
<span class="line"><span style="color:#A6ACCD;">            deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ch</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">()){</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeLast</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>直接使用字符串作为栈</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeDuplicates</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">StringBuffer</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StringBuffer</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> top</span><span style="color:#89DDFF;">=-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> ch</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">)==</span><span style="color:#A6ACCD;">ch</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deleteCharAt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            top</span><span style="color:#89DDFF;">--;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ch</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            top</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,14),o=[e];function r(t,c,D,y,F,i){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{C as __pageData,u as default};
