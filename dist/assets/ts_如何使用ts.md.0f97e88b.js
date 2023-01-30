import{_ as s,o as n,c as a,a as l}from"./app.19465836.js";const i=JSON.parse('{"title":"写一个ts","description":"","frontmatter":{},"headers":[],"relativePath":"ts/如何使用ts.md","lastUpdated":1672415033000}'),p={name:"ts/如何使用ts.md"},o=l(`<h1 id="写一个ts" tabindex="-1">写一个ts <a class="header-anchor" href="#写一个ts" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-12-23 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#A6ACCD;">随即一只猫</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">thead</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">图片id</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">图片预览</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">图片高度</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">图片宽度</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">图片地址</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">删除图片</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">thead</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tbody</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">idxxx</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">高度xxx</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">宽度xxx</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">地址xxx</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tbody</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//初始化ts配置文件tsc--init</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//初始化js文件tsc</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//tec-s:只要ts文件保存，就会更新js文件</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> button</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">HTMLButtonElement</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tableBody</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">HTMLBodyElement</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">body</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CatType</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">?:</span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CatType</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">?:</span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">height</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">width</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">url</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">height</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">width</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WebDisplay</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">addData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">CatType</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cat</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Cat</span><span style="color:#89DDFF;">=new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Cat</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tableRow</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">HTMLTableRowElement</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tr</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">tableRow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;td&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">cat</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/td&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;td&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">cat</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/td&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;td&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">cat</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/td&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;td&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">cat</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/td&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;td&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">cat</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/td&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;td&gt;&lt;a href=&quot;#&quot;&gt;&lt;/a&gt;&lt;/td&gt;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">tableBody</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">append</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">tableRow</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">deleteData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">deleteButton</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">HTMLAnchorElement</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">deleteButton</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">HTMLTableCellElement</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tr</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">HTMLTableRowElement</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">tr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getJSON</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Response</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">json</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getData</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">json</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">CatType</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getJSON</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CatType</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">CatType</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">json</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">WebDisplay</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addData</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Error</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">getData)</span></span>
<span class="line"><span style="color:#A6ACCD;">tableBody</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,(</span><span style="color:#A6ACCD;font-style:italic;">ev</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">MouseEvent</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">WebDisplay</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deleteData</span><span style="color:#F07178;">(&lt;</span><span style="color:#FFCB6B;">HTMLAnchorElement</span><span style="color:#F07178;">&gt;</span><span style="color:#A6ACCD;">ev</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div>`,5),e=[o];function t(r,c,F,D,y,C){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{i as __pageData,b as default};
