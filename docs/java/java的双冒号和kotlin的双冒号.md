# java的双冒号和kotlin的双冒号
作者: fbk
时间：2023-1-19
地点：济南
>足够优秀再大方拥有
## java
### 介绍
双冒号在java8中被用作叫做方法引用，大致意思就是lambda表达式创建匿名方法，但有时候需要使用一个lambda表达式只调用一个已经存在的方法
### 方法
- 静态方法引用 classname::methodname 例如:Person::getAge
- 对象的实例方法引用语法 instancename::methodname 例如 System.out::println
- 对象的超类方法引用语法 super::methodname
- 类构造器引用方法: classname::new 例如 ArrayList::new
- 数组构造器引用语法: typename[]::new 例如 String[]::new
### 例子
```java
public class Demo1 implements a {

    @Override
    public int method(String str) {
//        return new Integer(str);
        return Integer.parseInt(str);

    }

    public static void main(String[] args) {
        a a=str -> Integer.parseInt(str);
        //这里的Integer.parseInt方法是静态引用，所以可以使用双冒号形式
        a a1=Integer::parseInt;
        a a2=Integer::new;
    }
}

interface a{
    int method(String str);
}

```