import{_ as s,o as n,c as a,a as l}from"./app.210eb53c.js";const i=JSON.parse('{"title":"bind,call,apply","description":"","frontmatter":{},"headers":[],"relativePath":"js/bind,apply,call.md","lastUpdated":1672415033000}'),p={name:"js/bind,apply,call.md"},o=l(`<h1 id="bind-call-apply" tabindex="-1">bind,call,apply <a class="header-anchor" href="#bind-call-apply" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-12-22 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h1 id="_1-call" tabindex="-1">1.call <a class="header-anchor" href="#_1-call" aria-hidden="true">#</a></h1><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">newCall</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newArguments</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">newArguments</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">arguments[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">eval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">obj.p(</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">newArguments</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">result</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">delete</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">p</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                name</span><span style="color:#89DDFF;">:this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">               a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">d</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fbk</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">newCall</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>apply()使用数组接收</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">newApply</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;">window</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">=this</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">p</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newArguments</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">newArguments</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">arr[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">eval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">obj.p(</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">newArguments</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">delete</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">p</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                name</span><span style="color:#89DDFF;">:this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">               a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">d</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fbk</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">newApply</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul><li>bind</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">newBind</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">that</span><span style="color:#89DDFF;">=this</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">splice</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">slice</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrSum</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">concat</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">that</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">arrSum</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">f</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">f</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fbk</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">newBind</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,9),e=[o];function r(c,t,F,D,y,A){return n(),a("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};