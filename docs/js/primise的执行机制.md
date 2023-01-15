# promise 的执行机制

作者: fbk
时间：2023-1-14
地点：济南

> 足够优秀再大方拥有

## 异步

为了防止 DOM 冲突，js 是单线程运行的

- DOM 冲突，以一个线程在增加 DOM，有一个线程在删除 DOM，会造成冲突

像定时器是如何执行的，因为 js 是单线程，他的解决方式是异步，异步的解决方案是事件轮询

```js
console.log("hi");
setTimeOut(() => {
  console.log("定时器");
});
console.log("down");
```

### 什么是事件轮询

如果主线程的事件栈是空的，那么就会进行事件轮询去轮询回调队列的任务

### 事件轮询的核心--回调函数

```js
arr.sort((a, b) => {});
```

其中(a,b)={}就是回调函数

## promise 的执行顺序

```js
function readFile(pathName) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

let promise = readFile("./data.txt");
promise.then((res) => {
  console.log("第一次调用");
  promise.then((res) => {
    console.log("第二次调用");
  });
  promise.then((res) => {
    console.log("第三次次奥用");
  });
});
```

输出结果

```js
第一次调用我是data;
第二次调用我是data;
第三次调用我是data;
```

也就说在接收到 promise 的状态由 peending 转化为 fullfield，他之后的状态都是固化的

```js
let primise = new Promise((resolve, reject) => {
  console.log("我是promise");
});
setTimeout(() => {
  console.log("我是timeout");
}, 0);
console.log("hi");
```

执行结果

```js
我是promise;
hi;
我是timeout;
```

也就是说在 promise 的状态是 pending 的时候，函数是同步函数

我们使用 resolve 进行返回，查看执行结构

```js
let promise = new Promise((resolve, reject) => {
  console.log("我是promise");
  resolve("我是成功回调函数");
});
promise.then((res) => {
  console.log(res);
});
setTimeout(() => {
  console.log("我是timeout");
}, 0);
console.log("hi");
```

```js
我是promise;
hi;
我是成功的回调函数;
我是timeout;
```

## promise

```js
let p1 = new Promise((resolve, reject) => {
  setTimeOut((resolve, reject) => {
    resolve(10);
  }, 1000);
});
p1.then((res) => console.log(res));
let p1 = new Promise((resolve, reject) => {
  setTimeOut((resolve, reject) => {
    resolve(20);
  }, 2000);
});
let p1 = new Promise((resolve, reject) => {
  setTimeOut((resolve, reject) => {
    resolve(30);
  }, 3000);
});
```

首先分析他的执行顺序，在这个 new Promise 中是执行的同步函数，setTimeout 就进入了 webAPIs 去进行时间等待，在他里边的函数也是不会执行的，所以 resolve 并没有执行

### promsie.all

```js
//依据上边的代码
let p4 = Promise.all([p1, p2, p3]);
p4.then((res) => {
  console.log(res);
});
//执行中虽然时间不同，但是拿到的时间都是在最长的时间也就是3秒后拿到
```

### promise.race

```js
let p4 = Promise.race([p1, p2, p3]);
p4.then((res) => console.log(res));
```

race 拿到的时间执行最快的 resolve 函数

### 举例

```js
fs.readFile("./name.txt", "utf-8", (err, data) => {
  fs.readFile(data, "utf-8", (err, data) => {
    fs.readFile(data, "utf-8", (err, data) => {
      resolve(data);
    });
  });
});
//我们用promise怎么实现上述的链式调用读取文件
function readFile2(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      resolve(data);
    });
  });
}
readFile2("./data.txt")
  .then((res) => readFile2(res))
  .then((res) => console.log(res));
```

### 如何写一个通用函数，将函数变成 promise 函数

```js
function promisify(fn) {
  return function (...args) {
    let _this = this;
    return new Promise((resolve, reject) => {
      fn.call(_this, ...args, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  };
}
let promise = promisify(fs.readFile);
promise("./data.txt", "utf-8")
  .then((res) => promise(res, "utf-8"))
  .then((res) => console.log(res));
```

## 如何使用函数实现迭代器

### 首先讲一下迭代器的使用

在 js 中有四种数据集合，array，object，map，set，这四种数据虽然类型不相同，但是都可以通过迭代器 iteration 进行遍历

#### 什么是 iteration

iteration 成为迭代器，又叫遍历器。 它的作用是给不同的数据结构提供统一的遍历访问机制，这种机制可以使得数据结构里的成员按照顺序依次被遍历访问，最常见的就是数组、map 的遍历了。 比如

```js
const arr = ["a", "b", "c"];
for (let i of arr) {
  console.log(i);
}
//a,b,c
const map = new Map([1, "x"], [2, "y"], [3, "z"]);
for (const i of map) {
  console.log(i);
}
//[1,'x'],[2,'y'],[3,'z']
```

#### 简单实现 iteration

```js
function myIteration(arr){
  let index=0
  return{
    next:function(){
      return index<arr.length?{value:arr[index],done:false}:{value:undefiend:done:true}
    }
  }
}
let iter=myIteration([1,2,3])
console.log(iter.next()) //{value:1,done:false}
console.log(iter.next()) //{value:2,done:false}
console.log(iter.next()) //{value:3,done:false}
console.log(iter.next()) //{value:undefiend,done:true}
```

#### 不是 array,set,map 怎么实现迭代器

在 js 中，有时候定义对象的时候并不能使用迭代器

```js
let obj = {
  name: "fbk",
  age: 19,
  sex: "男",
};
for (let i of obj) console.log(i); //这是会报错的
```

怎么使用自定义迭代器对 obj 进行改造

```js
let obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    let index = 0;
    let map = new Map();
    map.set("a", 1);
    map.set("b", 2);
    map.set("c", 3);
    return {
      next() {
        let mapEntries = [...map];
        return index < map.size()
          ? { value: mapEntries[index], done: false }
          : { value: undefiend, done: true };
      },
    };
  },
};
let demo = obj[Symbol.iterator]();
console.log(demo.next());
console.log(demo.next());
console.log(demo.next());
```

### iteration 接口什么时候使用

#### 解构赋值

```js
let set = new Set("a").add("b").add("c");
let [first, ...rest] = set;
console.log(first);
console.log(...rest);
```

#### 拓展运算符

```js
let str = "hello";
console.log(...str); //h,e,l,l,o
const arr = ["a", "b"];
console.log(1, ...arr, 2); //1,a,b,2
```

#### generator 函数

```js
function* demo() {
  yield 1;
  yield 2;
  yield 3;
}
let iter = demo();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
```

### 迭代器实现

```js
function promisify(fn) {
  return function (...args) {
    let _this = this;
    return new Promise((resolve, reject) => {
      fn.call(_this, ...args, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  };
}
let promise = promisify(fs.readFile);
function* read() {
  let value1 = yield promise("./data.txt", "utf-8");
  let value2 = yield promise(value1, "utf-8");
  console.log(value2);
}
let iter = read();
let { value, done } = iter.next();
value.then((res) => {
  //res返回./data.txt的文件内容===>./number.txt
  let { value, done } = iter.next(res);
  value.then((res) => iter.next(res));
});
```

```js
function CO(iter) {
  return new Promise((resolve, reject) => {
    let next = function (data) {
      let { value, done } = iter.next(data);
      if (done) {
        resolve(data);
      } else {
        value.then((val) => {
          next(val);
        }, reject);
      }
    };
    next();
  });
}
```
