# volatile

作者: fbk
时间：2023-2-27
地点：天津

- 线程安全要考虑三个方面：可见性，原子性，有序性
  1. 可见性：一个线程对变量结果修改，另一个线程可见
  2. 有序性：一个线程内代码按编写顺序执行
  3. 原子性：一个线程内多行代码以一个整体运行
- volatile只能保证可见性，有序性，但是不能保证原子性
## 可见性例子
```java
/**
 * @Author 房博坤
 * @Date 2023/2/27 19:49
 * @Version 1.0.1
 */
public class AddAndSubtract {
    
    static volatile int balance=10;
     public static void add(){
         balance+=5;
     }

     public static void delete(){
         balance-=5;
     }

    public static void main(String[] args) throws InterruptedException {
        CountDownLatch latch = new CountDownLatch(2);

        ThreadPoolExecutor service = new ThreadPoolExecutor(2, 2, 60L, TimeUnit.SECONDS, new SynchronousQueue<>());

        service.execute(()->{
            add();
            latch.countDown();
        });
        service.execute(()->{
            delete();
            latch.countDown();
        });
        latch.await();
        service.shutdown();
        System.out.println(balance);
    }
}
```

## 可见性演示
```java
class ForverLoop{
    static boolean stop=false;

    public static void main(String[] args) {
        new Thread(()->{
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            stop=true;
        },"t1").start();

        foo();
    }

    public static void foo(){
        int i=0;
        while(!stop){
            i++;
        }

        System.out.println(i);

    }
}

```
1. java在将java文件编译成class文件后，并不会立即交给CPU去执行，而是要经过`JIT(代码优化器)`去优化代码，因为每次执行`while(!stop)`都需要去物理内存中寻找stop的值，在t1线程sleep的1s中，`while(!stop)`可以向内存要千万次，所以及其消耗内存
2. JIT会把stop=false为了优化代码，减少向内存读取stop的次数，会把`while(!stop)`优化成`while(!false)`
3. 所以这就是造成上述结果的原因
## 有序性
