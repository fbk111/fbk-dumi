# optional类
作者: fbk
时间：2023-2-16
地点：济南
>足够优秀再大方拥有

## 之前判断空
```java
@Test
public void test01(){
//String userName = "张三";
String userName = null;
if(userName != null){
System.out.println("字符串的长度：" + userName.length());
}else{
System.out.println("字符串为空");
}
}
```
## Optional类

`Optional是一个没有子类的工具类，Optional是一个可以为null的容器对象，它的主要作用就是为了避免Null检查，防止NullpointerException，`

## Optional的基本使用

```java
    private static void test1(){
        // 第一种方式 通过of方法 of方法是不支持null的
        Optional<String> optional = Optional.of("fbk");
        // 第二种方式通过 ofNullable方法 支持null
        Optional<Object> optional1 = Optional.ofNullable(null);
        Optional<String> optional2 = Optional.ofNullable("fbk");
        // 第三种方式 通过empty方法直接创建一个空的Optional对象
        Optional<Object> optional3 = Optional.empty();
        
    }
```

## Optional的常用方法

```java
    /**
     * Optional中的常用方法介绍
     * get(): 如果Optional有值则返回，否则抛出NoSuchElementException异常
     * get()通常和isPresent方法一块使用
     * isPresent():判断是否包含值，包含值返回true，不包含值返回false
     * orElse(T t):如果调用对象包含值，就返回该值，否则返回t
     * orElseGet(Supplier s):如果调用对象包含值，就返回该值，否则返回 Lambda表达式的返回值
     */

    private static void test2(){
        Optional<String> op1 = Optional.of("fbk");
        Optional<String> op2 = Optional.empty();
        if(op1.isPresent()){
            System.out.println("用户名称"+op1.get());
        }
        if(op2.isPresent()){
            System.out.println(op2.get());
        }else{
            System.out.println("op2是一个空Optional对象");
        }

        String o1 = op2.orElse("我是空对象的替换对象");

        String o2 = op2.orElseGet(() -> "我是空对象的替换方法");

        String o3 = op2.orElseThrow();

    }
```