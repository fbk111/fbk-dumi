import{_ as s,o as a,c as n,a as l}from"./app.a41eff6c.js";const p="/assets/反转链表示意图.bc69b3bd.jpg",d=JSON.parse('{"title":"反转链表-对应力扣206-简单","description":"","frontmatter":{},"headers":[],"relativePath":"算法/反转链表-206.md","lastUpdated":1672418623000}'),e={name:"算法/反转链表-206.md"},o=l('<h1 id="反转链表-对应力扣206-简单" tabindex="-1">反转链表-对应力扣206-简单 <a class="header-anchor" href="#反转链表-对应力扣206-简单" aria-hidden="true">#</a></h1><p>作者: fbk 时间：2022-12-29 地点：济南</p><blockquote><p>足够优秀再大方拥有</p></blockquote><h1 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-hidden="true">#</a></h1><p>给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。 <img src="'+p+`" alt=""> 输入：head = [1,2,3,4,5] 输出：[5,4,3,2,1]</p><h1 id="思路-双指针思想" tabindex="-1">思路（双指针思想） <a class="header-anchor" href="#思路-双指针思想" aria-hidden="true">#</a></h1><p>反转链表就是改变指针指向的问题，在上述图片上，我们在第一个链表中可以将指向反转一下，也就是5指向4指向3等等</p><h1 id="解法" tabindex="-1">解法 <a class="header-anchor" href="#解法" aria-hidden="true">#</a></h1><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">ListNode</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">ListNode</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">ListNode</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> next</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reverseList</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> current</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//当前的head是1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> pre</span><span style="color:#89DDFF;">=null;</span><span style="color:#676E95;font-style:italic;">//head之前没有节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ListNode</span><span style="color:#A6ACCD;"> temp</span><span style="color:#89DDFF;">=null;</span><span style="color:#676E95;font-style:italic;">//记录head的next的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">!=null){</span></span>
<span class="line"><span style="color:#A6ACCD;">            temp</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//记录temp</span></span>
<span class="line"><span style="color:#A6ACCD;">            current</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">pre</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//节点指向断了</span></span>
<span class="line"><span style="color:#A6ACCD;">            pre</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//pre向后一位</span></span>
<span class="line"><span style="color:#A6ACCD;">            current</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> pre</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,10),t=[o];function r(c,D,y,A,C,i){return a(),n("div",null,t)}const b=s(e,[["render",r]]);export{d as __pageData,b as default};
