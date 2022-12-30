# symbol类型

作者: fbk
时间：2022-12-24
地点：济南
>足够优秀再大方拥有
## symbol类型的简单应用
```js
        const demo = {
            prince: ['demo1', 'demo2', 'demo3'],
            princeness: ['demo1', 'demo2', 'demo3']
        }
        const prince =Symbol('demo')
        demo[prince] = 'demo1'
        console.log(demo)
```
![](../../assets/img/2022-12-24/symbol%E5%BA%94%E7%94%A8.png)