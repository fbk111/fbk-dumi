# vue使用ts

作者: fbk
时间：2022-12-29
地点：济南
>足够优秀再大方拥有 


# vue3初始化数据
## 1.使用ref声明
```ts
import { ref } from 'vue';
import type { Ref } from 'vue' // vue官方的type
const name:Ref<string>=ref('fbk')
const age:Ref<number>=ref(18)
```

## 2.使用reactive进行声明
```ts
import {reactive} from 'vue'
interface Book{
    title:string
    price:number
    desc:string
}
const book:Book=reactive(
    {
    title: "百年孤独",
    price: 30.3,
    desc: "他是个强有力的作家，有着丰富的想象。他继承了欧洲政治小说的伟大传统，其结果是历史剧与个人戏剧合二为一" 
    }
)
```
## 3.computed计算属性的使用
```ts
import {computed,ref} from 'vue'
import type{Ref} from 'vue'
const num:Ref<number>=ref(11)
const double=computed<number>(()=>num.value*2)
```
# 4.使用defineProps接收属性
父组件
```html
<template>
<div>
  <Second bookName="百年孤独" :price="55" />
</div>
</template>

<script setup lang="ts">
import Second from './Second.vue'
</script>
```
子组件
```html
<template>
<div>
  Second组件接收参数
  <div>{{bookName}} -- {{price}}</div>
</div>
</template>
<script setup lang='ts'>
    import {defineProps} from 'vue'
    interface Book{
        bookName?:string
        price?:number|string
    }
    const props=defineProps<Book>()
    console.log(props.bookName,props.price)
</script>
```
# 5.使用provice和inject
父组件
```html
<template>
<div>
</div>
</template>

<script setup lang="ts">
import { provide } from "vue";
/*provide inject*/
provide<string>('keys','string类型')
provide<Array<number>>('lists',[1,2,3])
</script>
```
```ts
import {inject} from 'vue'
console.log(inject<string>('keys'))
console.log(inject<Array<number>>('lists'))
```


