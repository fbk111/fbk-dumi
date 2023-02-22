import{_ as s,o as n,c as a,a as l}from"./app.1ab3fa21.js";const p="/assets/vue的data定义.3a806a6e.png",u=JSON.parse('{"title":"vue2和vue3的数据定义","description":"","frontmatter":{},"headers":[{"level":2,"title":"definePrototype","slug":"defineprototype","link":"#defineprototype","children":[]},{"level":2,"title":"vue2中使用defineProperty","slug":"vue2中使用defineproperty","link":"#vue2中使用defineproperty","children":[]},{"level":2,"title":"proxy","slug":"proxy","link":"#proxy","children":[]}],"relativePath":"js/vue2和vue3的数据定义.md","lastUpdated":1677076303000}'),e={name:"js/vue2和vue3的数据定义.md"},o=l(`<h1 id="vue2和vue3的数据定义" tabindex="-1">vue2和vue3的数据定义 <a class="header-anchor" href="#vue2和vue3的数据定义" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-2-20 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="defineprototype" tabindex="-1">definePrototype <a class="header-anchor" href="#defineprototype" aria-hidden="true">#</a></h2><p>在es6之前，defineProperty一直都是定义属性的最基本的api，最简单的使用</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//之前我对defineProperty一直存在误区，我认为他和proxy一样，都是可以通过一个对象去进行属性的定义，但是如果我们这样使用</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> failObj</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(failObj</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">failObj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">set</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">failObj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//这是错误的写法，这样会导致栈溢出</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj1</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj2</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(obj2</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//可枚举的，就证明这个属性可以在Object.keys或者是for in 遍历时使用，可以枚举，</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">writable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//可修改的</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//控制属性是否可以被删除</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">set</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">obj1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="vue2中使用defineproperty" tabindex="-1">vue2中使用defineProperty <a class="header-anchor" href="#vue2中使用defineproperty" aria-hidden="true">#</a></h2><ol><li>在data定义的数据，都会显示在vm当中，是通过vm.age的数据和data中的数据进行相互的修改，通过修改data中的数据去修改vm中的数据</li><li>在vm中_data可以获取 <img src="`+p+`" alt=""></li><li>但是在新增属性或者是删除属性的时候，defineProperty都不会执行set或者get函数，在通过下标修改数组，页面也不会进行更新</li></ol><h2 id="proxy" tabindex="-1">proxy <a class="header-anchor" href="#proxy" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10),r=[o];function t(c,i,y,D,F,C){return n(),a("div",null,r)}const A=s(e,[["render",t]]);export{u as __pageData,A as default};
