import{_ as s,o as a,c as n,a as l}from"./app.05a04f5e.js";const C=JSON.parse('{"title":"有效的括号-对应力扣 20-简单","description":"","frontmatter":{},"headers":[{"level":2,"title":"原题","slug":"原题","link":"#原题","children":[{"level":3,"title":"示例 1","slug":"示例-1","link":"#示例-1","children":[]},{"level":3,"title":"示例 2：","slug":"示例-2","link":"#示例-2","children":[]},{"level":3,"title":"示例 3：","slug":"示例-3","link":"#示例-3","children":[]}]},{"level":2,"title":"解题思路","slug":"解题思路","link":"#解题思路","children":[]}],"relativePath":"算法/有效的括号-20.md","lastUpdated":1673882463000}'),p={name:"算法/有效的括号-20.md"},o=l(`<h1 id="有效的括号-对应力扣-20-简单" tabindex="-1">有效的括号-对应力扣 20-简单 <a class="header-anchor" href="#有效的括号-对应力扣-20-简单" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-15 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="原题" tabindex="-1">原题 <a class="header-anchor" href="#原题" aria-hidden="true">#</a></h2><p>给定一个只包括 &#39;(&#39;，&#39;)&#39;，&#39;{&#39;，&#39;}&#39;，&#39;[&#39;，&#39;]&#39;  的字符串 s ，判断字符串是否有效。</p><p>有效字符串需满足：</p><ol><li>左括号必须用相同类型的右括号闭合。</li><li>左括号必须以正确的顺序闭合。</li><li>每个右括号都有一个对应的相同类型的左括号。</li></ol><h3 id="示例-1" tabindex="-1">示例 1 <a class="header-anchor" href="#示例-1" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：s = &quot;()&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="示例-2" tabindex="-1">示例 2： <a class="header-anchor" href="#示例-2" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：s = &quot;()[]{}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="示例-3" tabindex="-1">示例 3： <a class="header-anchor" href="#示例-3" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">输入：s = &quot;(]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-hidden="true">#</a></h2><p>这个题一开始想的是使用 map 去判断添加的元素所对应的元素，然后把他 add 进栈中，但是因为元素很少，所以可以直接使用 if 进行判断</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isValid</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">Deque</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Character</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> deque</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Deque</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Character</span><span style="color:#89DDFF;">&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++){</span></span>
<span class="line"><span style="color:#A6ACCD;">         c</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">==</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">==</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">==</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">()||</span><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">peek</span><span style="color:#89DDFF;">()!=</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">){</span><span style="color:#676E95;font-style:italic;">//发现前边啥元素都没有匹配</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>使用 hashMap 的方式 1</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isValid</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#C792EA;">HashMap</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Character</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">Character</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> map</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">HashMap</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">       map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">       map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">       map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#C792EA;">Stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Character</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> stack</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Stack</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//如果map包含当前的char，就证明我们要想stack添加一个相对应的元素</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">containsKey</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)))</span><span style="color:#A6ACCD;"> stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//如果没有包含对应的元素，就要检查时候栈是空的，或者是栈peek出的元素和当前的元素不相等</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">()||</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">peek</span><span style="color:#89DDFF;">()!=</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,18),e=[o];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
