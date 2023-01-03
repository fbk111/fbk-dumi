# js实现数据结构

作者: fbk
时间：2022-12-19
地点：济南
>足够优秀再大方拥有

## 栈
```js
       //栈：先进后出，只能从一个地方进和出，具有记忆结构
        class Stack {
            constructor() {
                this.items = []
            }
            push(element) {
                return this.items.push(element)
            }
            //返回栈顶元素并移除
            pop() {
                return this.items.pop()
            }
            //返回栈顶元素
            peek() {
                return this.items[this.items.length - 1]
            }
            isEmpty() {
                return this.items.length == 0
            }
            clear() {
                this.items = []
            }
            size() {
                return this.itemss.length
            }
        }
```
## 队列
```js
//队列只在尾添加元素，头删除元素,单向队列的弊端，头删除元素后指针必须向后移动，且不能在添加元素
        class Queue {
            constructor() {
                this.list = []
                this.frontIndex = 0//首指
                this.tailIndex = 0//尾指向
            }
            enqueue(item) {
                //入队
                this.list[this.tailIndex++] = item
            }
            unqueue() {
                //出队
                const item = this.items[frontIndex]
                this.frontIndex++
                return item
            }
        }
```
## 循环队列
```js
        class cycleQueue {
            constructor(size) {
                this.size = size; // 长度需要限制, 来达到空间的利用, 代表空间的长度
                this.list = [];
                this.font = 0; // 指向首元素
                this.rear = 0;  // 指向准备插入元素的位置
            }
            enQueue() {
                if (this.isFull() == true) {
                    return false
                }
                this.rear = this.rear % this.k;
                this._data[this.rear++] = value;
                return true
            }
            deQueue() {
                if (this.isEmpty()) {
                    return false;
                }
                this.font++;
                this.font = this.font % this.k;
                return true;
            }
            isEmpty() {
                return this.font == this.rear - 1;
            }
            isFull() {
                console.log('k',this.k)
                return this.rear % this.k == this.font;
            }
        }
```