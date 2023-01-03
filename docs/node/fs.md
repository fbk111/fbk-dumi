# fs模块
作者: fbk
时间：2023-1-3
地点：济南
>足够优秀再大方拥有 

## 简介
在js中，我们操作本地机器的文件会使用到fs模块

导入方式
```js
const fs=require('fs')
```
## 标识位
| 符号 | 含义 |
| ---------- | --------------------------|
|r|读取文件|
|r+|读取并写入文件|
|rs|读取并写入文件，只是操作系统绕开本地文件系统缓存|
|w|写入文件，文件不存在则自动创建|
|wx|写入文件，排他方式打开|
|w+|读取并写入文件，没有创建，有清空创建|
|wx+|和w+类似|
|a|追加写入，文件不存在创建|
|ax|排他方式打开|
|a+|读取并追加，不存在创建|
|ax+|和a+类似，排他方式打开|

## 方法
### 文件读取
#### readFileSync
```js
let data=fs.readFileSync('./demo.txt','utf-8')
console.log(data)
```
#### readFile
```js
fs.readFileSync('./demo.txt','utf-8',(err,dataStr)=>{
    if(!err){
        console.log('读取的数据是'+dataStr)
    }
})
```
### 文件写入

#### writeFile
```js
fs.writeFileStnc('./demo.txt','hello world','utf-8')
```
#### writeFile
```js
fs.writeFileSync('./demo/txt','hello world','utf-8',(err)=>{
    if(!err){
        console.log('写入成功')
    }
})
```
### 文件追加
#### appendFileSync
```js
fs.appendFileSync('./demo.txt','world','utf-8')
```
#### appendFile
```js
fs,appendFile('./demo.txt','world',err=>{
    if(!err){
        console.log('添加成功')
    }
})
```
#### appendFileSync
```js
fs.appendFileSync('./demo.txt','world','utf-8')
```
### 文件拷贝
#### copyFileSync
```js
fs.copyFileSync('1.txt','2.txt')
let data=fs.readFileSync('2.txt','utf-8')
console.log(data)
```
#### copyFile
```js

fs.copyFile("3.txt", "4.txt", () => {
    fs.readFile("4.txt", "utf8", (err, data) => {
        console.log(data); // Hello world
    });
});
```
### 创建目录
#### mkdirSync
```js
fs.mkdirSync('a/b/c')

```
#### mkdir
```js
fs.mkdir('a/b/c',err=>{
    if(!err) console.log('创建成功')
})
```