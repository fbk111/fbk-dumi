import{_ as s,o as n,c as a,a as l}from"./app.304b93dc.js";const p="/assets/vuex数据.73a1e66d.jpg",e="/assets/state和mutations.353f8096.jpg",o="/assets/vuex总结.7aa50b5f.jpg",m=JSON.parse('{"title":"vuex","description":"","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"组件介绍","slug":"组件介绍","link":"#组件介绍","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"在组件中使用store","slug":"在组件中使用store","link":"#在组件中使用store","children":[]},{"level":2,"title":"在组件中修改mutations","slug":"在组件中修改mutations","link":"#在组件中修改mutations","children":[]},{"level":2,"title":"Vuex-state-mutation-getters 小结","slug":"vuex-state-mutation-getters-小结","link":"#vuex-state-mutation-getters-小结","children":[]},{"level":2,"title":"vuex在actions中发起异步请求","slug":"vuex在actions中发起异步请求","link":"#vuex在actions中发起异步请求","children":[]},{"level":2,"title":"action小结","slug":"action小结","link":"#action小结","children":[]},{"level":2,"title":"vuex用modules拆分复杂业务","slug":"vuex用modules拆分复杂业务","link":"#vuex用modules拆分复杂业务","children":[]},{"level":2,"title":"访问和修改数据","slug":"访问和修改数据","link":"#访问和修改数据","children":[]},{"level":2,"title":"vuex中的map函数","slug":"vuex中的map函数","link":"#vuex中的map函数","children":[{"level":3,"title":"mapState","slug":"mapstate","link":"#mapstate","children":[]},{"level":3,"title":"在模块中使用state","slug":"在模块中使用state","link":"#在模块中使用state","children":[]}]}],"relativePath":"vue/vuex.md","lastUpdated":null}'),t={name:"vue/vuex.md"},r=l('<h1 id="vuex" tabindex="-1">vuex <a class="header-anchor" href="#vuex" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2023-1-15 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><p>在组件通信中，vuex是一个可以全局储存并且全局读取的数据，vuex是一个专为 Vue.js 应用程序开发的状态管理模式， 采用集中式存储管理应用的所有组件的状态，解决多组件数据通信。(简单来说就是管理数据的,相当于一个仓库,里面存放着各种需要共享的数据,所有组件都可以拿到里面的数据)</p><ul><li>数据变化是可预测的</li><li>集中式管理数据状态方案 <img src="'+p+`" alt=""></li></ul><h2 id="组件介绍" tabindex="-1">组件介绍 <a class="header-anchor" href="#组件介绍" aria-hidden="true">#</a></h2><ol><li>state统一管理公共数据</li><li>mutations修改数据</li><li>getters计算属性</li><li>action进行异步请求</li><li>modules模块拆分</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vuex </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vuex</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(Vuex)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Vuex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Store</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 存放数据 和data类似</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 用来修改state和getters里面的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 相当于计算属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// vuex中用于发起异步请求</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">// 拆分模块</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><ol><li>安装</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i vuex</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>实例化store</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vuex </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vuex</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(Vuex)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> store</span><span style="color:#89DDFF;">=new</span><span style="color:#A6ACCD;"> Vuex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">store</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> store</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li>项目中使用</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> store </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./store</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    store</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="在组件中使用store" tabindex="-1">在组件中使用store <a class="header-anchor" href="#在组件中使用store" aria-hidden="true">#</a></h2><p><code>直接使用this.$store.state.属性名</code>获取数据</p><h2 id="在组件中修改mutations" tabindex="-1">在组件中修改mutations <a class="header-anchor" href="#在组件中修改mutations" aria-hidden="true">#</a></h2><p><code>this.$store.commit(&#39;mutation事件&#39;,mapper参数)</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> Vuex</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    mutations:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">setCount</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">val</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">method</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getCount</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setCount</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setCount</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="vuex-state-mutation-getters-小结" tabindex="-1">Vuex-state-mutation-getters 小结 <a class="header-anchor" href="#vuex-state-mutation-getters-小结" aria-hidden="true">#</a></h2><p><img src="`+e+`" alt=""></p><h2 id="vuex在actions中发起异步请求" tabindex="-1">vuex在actions中发起异步请求 <a class="header-anchor" href="#vuex在actions中发起异步请求" aria-hidden="true">#</a></h2><p>在actions中，我们主要定义axios异步请求去请求url</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Vuex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">store</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 省略其他...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// context对象会自动传入，它与store实例具有相同的方法和属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">action的名字</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">载荷</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 1. 发异步请求, 请求数据</span></span>
<span class="line"><span style="color:#F07178;">      </span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 2. commit调用mutation来修改/保存数据</span></span>
<span class="line"><span style="color:#F07178;">      </span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// context.commit(&#39;mutation名&#39;, 载荷)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>组件中使用this.$store.dispatch(&#39;actions名字&#39;,&#39;参数&#39;)</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">actions</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getBooks</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">axios</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            url</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https:www.baidu.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            method</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commmit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setBooks</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="action小结" tabindex="-1">action小结 <a class="header-anchor" href="#action小结" aria-hidden="true">#</a></h2><p><img src="`+o+`" alt=""></p><h2 id="vuex用modules拆分复杂业务" tabindex="-1">vuex用modules拆分复杂业务 <a class="header-anchor" href="#vuex用modules拆分复杂业务" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Vuex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Store</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// state: 用来保存所有的公共数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  	模块名1： {</span></span>
<span class="line"><span style="color:#89DDFF;">    		</span><span style="color:#676E95;font-style:italic;">// namespaced为true，则在使用mutations时，就必须要加上模块名</span></span>
<span class="line"><span style="color:#A6ACCD;">      	</span><span style="color:#F07178;">namespaced</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  		  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  			</span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  			</span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  			</span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  			</span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">，</span></span>
<span class="line"><span style="color:#A6ACCD;">    模块名2： </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// namespaced不写，默认为false，则在使用mutations时，不需要加模块名</span></span>
<span class="line"><span style="color:#A6ACCD;">  		  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  			</span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  			</span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  			</span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;">store </span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#89DDFF;">|-------</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js # 引入模块</span></span>
<span class="line"><span style="color:#89DDFF;">|-------</span><span style="color:#A6ACCD;"> modules</span></span>
<span class="line"><span style="color:#89DDFF;">|--------------</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> mod1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js # 模块1</span></span>
<span class="line"><span style="color:#89DDFF;">|--------------</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> mod2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js # 模块2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="访问和修改数据" tabindex="-1">访问和修改数据 <a class="header-anchor" href="#访问和修改数据" aria-hidden="true">#</a></h2><ul><li>访问数据要加上模块名</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">获取数据 </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">模块名</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">属性名</span></span>
<span class="line"><span style="color:#A6ACCD;">获取getters： </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getters</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">模块名/getters名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>如果namespaced为true，则需要额外去补充模块名</li><li>如果namespaced为false，则不需要额外补充模块名</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mutations名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)        </span><span style="color:#676E95;font-style:italic;">// namespaced为false</span></span>
<span class="line"><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">模块名/mutations名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// namespaced为true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="vuex中的map函数" tabindex="-1">vuex中的map函数 <a class="header-anchor" href="#vuex中的map函数" aria-hidden="true">#</a></h2><h3 id="mapstate" tabindex="-1">mapState <a class="header-anchor" href="#mapstate" aria-hidden="true">#</a></h3><p>当vuex的数据与本组件内数据名字相同，可以使用...mapState([&#39;名字&#39;]),...mapState({&#39;姓名字&#39;:&#39;名字&#39;})</p><h3 id="在模块中使用state" tabindex="-1">在模块中使用state <a class="header-anchor" href="#在模块中使用state" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">computed</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">mapState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">模块名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">属性名字</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">mapState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">模块名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">新名字</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">名字</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,44),c=[r];function i(D,y,F,C,A,u){return n(),a("div",null,c)}const d=s(t,[["render",i]]);export{m as __pageData,d as default};
