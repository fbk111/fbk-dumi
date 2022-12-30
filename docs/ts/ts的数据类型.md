# spring源码编写day1

作者: fbk
时间：2022-12-28
地点：济南
>足够优秀再大方拥有 

# 1.ts的数据类型有哪些
- boolean
- number
- string
- array
- tuple
- enum
- any
- null和undefiend
- void 
- never
- object
## tuple
```ts
let tupleArr:[number,string,boolean]
tupleArr=[12,'34',true]
//tuple必须保证元素的数量和类型一致
```
## enum
```ts
enum Color{Rrd,Green,Blue}
let c:Color=Color.Red
```
### 数字枚举
```ts
enum Direction{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
```
给第一个枚举赋值
```ts
enum Direction{
    Up=10,
    Down,
    Left,
    Right
}
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right); // 10 11 12 13
```

