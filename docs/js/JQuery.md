# JQuery

作者: fbk
时间：2023-1-6
地点：济南
>足够优秀再大方拥有
## Jquery对象
- 原生dom对象获取 document.querySelector('div')
- jq对象获取 $('div')


jq查询的对象是对dom对象进行封装后产生的对象，已伪数组形式存储

将jq选择器中的兑现转化为dom对象就需要使用索引将伪书组的元素拿出来
## JQ选择器
jq中除了可以对class，id，element进行筛选，还可以对以下几个进行筛选，jq只能使用自己封装的方法操作自己查询的对象
## jq事件绑定
```html
<div></div>
<script>
  $('div').on({
    click:function(){
      console.log(1)
    },
    mouseover:function(){
      console.log(1)
    }
  })
</script>
```
## jq遍历
```html
<div></div>
<div></div>
<div></div>
<div></div>
<script>
  $('div').each((index,domEle){
    console.log(index)
    //domEle是dom对象
  })
</script>
```
## jq修改css
```html
<div></div>
<script>
$('div').css({
  backgroundColor:'red',
  width:300,
  height:400
})
</script>
```

## jq隐式迭代
```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<script>
  $('ul li').css('backgorund','red')
  //这里所有的li背景颜色都会变成red，这就是饮食迭代，jq会将匹配数组中所有的匹配数组进行遍历循环，然后给每个元素添加css方法
</script>
```

```js
//筛选隐藏元素
<div class="demo">111</div>
<div class="demo1"></div>
<div class="demo"><p>111</p></div>
<ul class="topnav">
  <li>Item 1</li>
  <li>Item 2
    <ul>
    <li>Nested item 1</li>
    <li>Nested item 2</li>
    <li>Nested item 3</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>
<div hahaha="hahaha1"></div>
<input name="man-news"></input>
<input name="milkman"></input>
<input name="letterman2"></input>
<input name="newmilk"></input>
$('.demo:hidden')
//筛选可见元素
$('.demo:visable')
//选择包含指定文本的元素
$('.demo:contains("111")')
//筛选没有子元素的节点，包括文本节点
$('.div:empty')
//筛选至少包含一个指定元素匹配器所包含的元素
$('div:has(p)')
// 选择至少具有一个子节点（元素或文本）的所有元素。
$('div:parent')
//选择正在运行动画的元素
$('div:animated')
//筛选属性
$('div[hahaha="hahaha1"]').css('border','1px solid red')
//筛选属性中包含字符串的元素
$('input[name*="man"]').val('success')
```
## JQ属性
### css属性
```js
<div class="demo">111</div>
$('.demo').css({
    color:'blue',
    backgroundColor:'gray',
    fontSize:'24px'
})
```
### 添加类,移除类，切换类
```js
<div class="demo"></div>
.haha{
    width:100px;
    height:100px;
    background-color:red;
}
$('.demo').addClass('haha')
$('.demo').removeClass('haha')
//切换类
$('.demo').toggleClass('haha')
//检查类是否存在
$('.demo').hasClass('haha')
```
## JQ操纵
```js
<div class="demo">
    <p>demo</p>
</div>
//克隆元素
$('.demo').clone()
//内部插入元素
//获取html
$('.demo').html()//可以获取demo中的属性以及标签
$('.demo').text()//只能获取文本
//删除元素的子元素以及所有文本,但是还是存在dom中
$('.demo').empty()
//删除元素的dom
$('.demo').remove()
//替换元素
$('<h1>hahah</h1>').replaceAll('p')
```