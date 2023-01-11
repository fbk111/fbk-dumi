# css小知识

作者: fbk
时间：2023-1-9
地点：济南
>足够优秀再大方拥有

## 布局原理
- 当我们为父盒子设置flex布局，子元素的float，clear，vertical-align属性都失效
## 父元素
- flex-direction:设置主轴方向
- jusitify-content:设置主轴子元素排列方向
  1. flex-start 开头
  2. flex-end 结尾
  3. center：居中
  4. space-round 平均分配
  5. space-between:两边贴边，分配中间
- flex-wrap:设置子元素是否换行
- align-content:设置侧轴子元素排列方式（多行）
  1. flex-start
  2. flex-end
  3. center
  4. space-around
  5. space-between
  6. stretch
- align-items:设置侧轴上子元素排列方式（单行）
  1. flex-start
  2. flex-end
  3. center
  4. stretch 不能给高度
- flex-flow:符合属性 flex-direction和flex-wrap
## 子元素
- flex 子项目的占有份数
- align-self 控制子项自己在侧轴的排列方式
- order 定义子项的排列顺序
