# npm注意事项

作者: fbk
时间：2023-1-3
地点：济南
>足够优秀再大方拥有 

## 下载执行版本包
```
npm i demo@2.22.2
```
- 第一位数字：大版本
- 第二位数字：功能版本
- 第三位数字：Bug修复版本
```javascript
//创建package.json文件
npm init -y
```
删除包
```
npm uninstall demo
```
将包安装到dev
```
npm i demo -D==npm i --save-dev demo
```
安装全局包
```
npm i demo -g
```
小知识
```
npm i -g i5ting_toc
安装这个包可以将md文件转为html
i5ting_toc -f md文件路径 -o
```
## 开发自己的npm包
