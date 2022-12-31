import{_ as s,o as n,c as a,d as p}from"./app.93bd220f.js";const b=JSON.parse('{"title":"state和prop的区别","description":"","frontmatter":{},"headers":[],"relativePath":"react/state和props的区别.md","lastUpdated":1672415033000}'),l={name:"react/state和props的区别.md"},e=p(`<h1 id="state和prop的区别" tabindex="-1">state和prop的区别 <a class="header-anchor" href="#state和prop的区别" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-12-28 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h1 id="_1-state" tabindex="-1">1.state <a class="header-anchor" href="#_1-state" aria-hidden="true">#</a></h1><p>在React类中，state是在constructor中进行初始化</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#F07178;">            name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fbk</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">updateCount</span><span style="color:#89DDFF;">=()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//因为setState是一个异步的操作，所以第一个可以设置set的属性，第二个可以设置返回的函数，也就是setState更新后组件开始渲染所调用的参数</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#F07178;">setState(</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">log(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setState</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        )</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> onClick=</span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">updateCount</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            click</span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">        )</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h1 id="_2-props" tabindex="-1">2.props <a class="header-anchor" href="#_2-props" aria-hidden="true">#</a></h1><p><code>props</code>主要是父组件向子组件传输，子组件进行接收</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Welcome</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">hello</span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> element</span><span style="color:#89DDFF;">=&lt;</span><span style="color:#FFCB6B;">Welcome</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fbk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onNameChanged</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleName</span><span style="color:#89DDFF;">}/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,9),o=[e];function t(r,c,F,D,y,i){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{b as __pageData,u as default};
