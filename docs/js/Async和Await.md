# Async和Await

作者: fbk
时间：2022-12-31
地点：济南
>足够优秀再大方拥有


```javascript
async function bb(){
    return Promise.resolve('别bb了')
}
bb().then(value=>{
    console.log(value)//别bb了
})
```

```javascript
async function bb(){
    console.log(1)
    let two=await Promise.resolve('2')
    console.log(two)
    console.log(3)
    return Promise.resolve('别bb了')
}
bb().then(value=>{
    console.log(value)
})
```

