# java8新特性
作者: fbk
时间：2023-2-8
地点：济南
>足够优秀再大方拥有

## Stream.max()
```java
Optional<T> max(Comparator<? super T> comparator) 
```
- `参数`：传递比较器(Comparator)来比较元素。
- `返回`：该方法返回提供最小元素或为空的选择。
- `异常`：如果最小值为null，则该方法抛出NullPointerException。
### Stream.min()
```java
Optional<T> min(Comparator<? super T> comparator) 
```
- `参数`：传递比较器(Comparator)来比较元素。
- `返回`：该方法返回提供最大元素或为空的选择。
- `异常`：如果最小值为null，则该方法抛出NullPointerException。

### 在字符串(String)和整数(Integer)中如何使用min和max方法
```java
        List<Integer> numList = Arrays.asList(42, 44, 43, 41);

        Comparator<Integer> comparator = Comparator.comparing(Integer::intValue);

        Optional<Integer> minOptional = numList.stream().min(comparator);
        minOptional.ifPresent(System.out::println);

        Optional<Integer> maxOptional = numList.stream().max(comparator);

        maxOptional.ifPresent(System.out::println);
```
### 使用compare
```java
        List<Integer> list = Arrays.asList(42, 44, 43, 41);

        //for min
        list.stream().reduce(Integer::min).ifPresent(System.out::println);

        //for max

        list.stream().reduce(Integer::max).ifPresent(System.out::println);

        //for min

        list.stream().reduce((a,b)->{
            if(a.compareTo(b)<=0){
                return a;
            }
            return b;
        }).ifPresent(System.out::println);


        //for max
        list.stream().reduce((a,b)->{
            if(a.compareTo(b)>=0){
                return a;
            }
            return b;
        }).ifPresent(System.out::println);
```
### 对象比较
```java
public static void main(String[] args) {
	List<User> users = Arrays.asList(
		new User("Mahesh", 30),
		new User("Krishna", 29),
		new User("Virat", 28)
	);
    
	System.out.println("---Min and Max on the basis of user name---");
	
	users.stream()
	   .min(Comparator.comparing(u -> u.getUserName()))
	   .ifPresent(e -> System.out.println("Min: " + e.getUserName()));

	users.stream()
	   .max(Comparator.comparing(u -> u.getUserName()))
	   .ifPresent(e -> System.out.println("Max: " + e.getUserName()));	

	System.out.println("---Min and Max on the basis of age---");	
	users.stream()
	   .min(Comparator.comparing(User::getAge))
	   .ifPresent(e -> System.out.println("Min: " + e.getUserName()));
	
	users.stream()
	   .max(Comparator.comparing(User::getAge))
	   .ifPresent(e -> System.out.println("Max: " + e.getUserName()));

  }

class User {
  private String userName;
  private int age;
  public User(String userName, int age) {
	this.userName = userName;
	this.age = age;
  }
}
```
## Supplier和Consumer
### suppiler
一个供应商，提供者，就像一个工厂
```java
    private static void demo1(){
        Supplier<TreeNode> sup = TreeNode::new;
        System.out.println("每次创建都会创建不同的对象");
        System.out.println(sup.get());
        System.out.println(sup.get());
    }
```
### consumer
1. accept方法
   - 该函数的唯一抽象方法，接收一个参数，没有返回值
```java
        Consumer<Integer> consumer1=x->{
            int num=x/2;
            System.out.println(num);
        };

        Consumer<Integer>consumer2 = x -> {
            int num = x * 3;
            System.out.println(num);
        };

        consumer1.accept(10);//5
```
2. andThen
   - 在执行完调用者方法后再执行传入参数的方法
```java
        Consumer<Integer> consumer1=x->{
            int num=x/2;
            System.out.println(num);
        };

        Consumer<Integer>consumer2 = x -> {
            int num = x * 3;
            System.out.println(num);
        };

        // consumer1.accept(10);

        consumer1.andThen(consumer2).accept(10);
        //先输出5，在输出30
```
3. BiConsumer
```java
        BiConsumer<List<Integer>,Integer> biConsumer=(array,num)->{
            array.forEach(item->{
                System.out.println(item*num);
            });
        };
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
        biConsumer.accept(list,10);
```
## Supplier
```java
public class SupplierTest {


    //Supplier是一个提供者，可以返回泛型的数据

    private static void test1(Supplier<Integer> supplier){
        System.out.println("获取最大值是"+supplier.get());
    }

    private static void test1Come(){
        test1(()->{
            int arr[] = {22,33,55,66,44,99,10};
            Arrays.sort(arr);
            return arr[arr.length-1];
        });
    }
}
```
## consumer
```java
    public static void main(String[] args) {
        test1((msg)->{
            System.out.println("msg转小写"+msg.toLowerCase());
        },(msg)->{
            System.out.println("msg转大写"+msg.toUpperCase());
        });
    }


    private static void test1(Consumer<String> c1,Consumer<String> c2){
        c1.accept("Hello World");
        c2.accept("Hello World");
    }
```
### andThen方法
```java
    public static void main(String[] args) {
        test1((msg)->{
            System.out.println("msg转小写"+msg.toLowerCase());
        },(msg)->{
            System.out.println("msg转大写"+msg.toUpperCase());
        });
    }


    private static void test1(Consumer<String> c1,Consumer<String> c2){
       c1.andThen(c2).accept("Hello World");
    }
```

## function
```java
    public static void main(String[] args) {
        test1(Object::toString);
    }

    private static void test1(Function<Integer,String>  function){
        //第二个泛型是返回的类型
        //第一个泛型是提供的类型
        String apply = function.apply(111);
        System.out.println(apply);
    }
```
### andThen方法
```java
    public static void main(String[] args) {
       test2(Integer::parseInt, Objects::toString);
    }
        private static void test2(Function<String,Integer> f1,Function<Integer,String> f2){
        String apply = f1.andThen(f2).apply("11");
        System.out.println(apply);
    }
```

## predicate
`有参并且返回布尔值`
```java
    public static void main(String[] args) {
        test1(num->num>10);
    }

    private static void test1(Predicate<Integer> predicate){
        boolean test = predicate.test(10);
        System.out.println("10是否大于10"+test);
    }
```

## 方法引用
### 1.为什么要使用方法引用
#### lambda表达式冗余
##### 实例
```java
public static void main(String[] args) {
printMax(a->{
// Lambda表达式中的代码和 getTotal中的代码冗余了
int sum = 0;
for (int i : a) {
sum += i;
}
System.out.println("数组之和：" + sum);
});
}
/**
* 求数组中的所有元素的和
* @param a
*/
public void getTotal(int a[]){
int sum = 0;
for (int i : a) {
sum += i;
}
System.out.println("数组之和：" + sum);
}
private static void printMax(Consumer<int[]> consumer){
int[] a= {10,20,30,40,50,60};
consumer.accept(a);
}

```
##### 解决方案
上述方法中，每次进行数组排序我们都要写一遍求和方法，那么我们可以定义一个方法让所有的consumer都使用他

```java
    public static void main(String[] args) {
        test1(StreamDemo::getTotal);
    }

    private static void test1(Consumer<int[]> consumer){
        int arr[]={1,2,3,4,5};
        consumer.accept(arr);
        
    }

    public static void getTotal(int a[]){
        int sum = 0;
        for (int i : a) {
            sum += i;
        }
        System.out.println("数组之和：" + sum);
    }
```
#### 方法引用格式
1. instanceName::methodName 对象::方法名
2. ClassName::staticMethodName 类名::静态方法
3. ClassName::methodName 类名::普通方法
4. ClassName::new 类名::new 调用的构造器
5. TypeName[]::new String[]::new 调用数组的构造器

##### 对象名：方法名

这是最常见的一种用法。如果一个类中的已经存在了一个成员方法，则可以通过对象名引用成员方法
```java
    private static void test2(){
        Date date = new Date();
        Supplier<Long> supplier = () -> date.getTime();
        System.out.println(supplier.get());
        //使用对象+引用
        Supplier<Long> supplier1 =date::getTime;
        System.out.println(supplier1.get());
    }
```
##### 类名：静态方法名
```java
    private static void test3(){
        Supplier<Long> supplier1 = () -> System.currentTimeMillis();
        System.out.println(supplier1.get());
        //使用静态方法引用
        Supplier<Long> supplier2 = System::currentTimeMillis;
        System.out.println(supplier2.get());
    }

```

##### 类名：引用实例方法
```java
    private static void test4(){
        Function<String,Integer> f1 = (s) -> s.length();
        Integer i1 = f1.apply("111");
        System.out.println(i1);

        //通过方法引用
        Function<String,Integer> f2=String::length;

        System.out.println(f2.apply("111"));
        
        //第一个形参是操作的类型，第二个是形参，第三个是返回的类型
        BiFunction<String,Integer,String> f3=String::substring;

        String result = f3.apply("hello world", 3);

        System.out.println(result);
    }
```
##### 类名：构造器
```java
        Supplier<Person> s1=()->new Person();

        System.out.println(s1.get());

        Supplier<Person> s2=Person::new;

        System.out.println(s1.get());

        BiFunction<String,Integer,Person>b1=(name,age)->new Person(name,age);
        b1.apply("fbk",20);
        BiFunction<String,Integer,Person> b2=Person::new;
        Person person = b2.apply("fbk", 21);
        System.out.println(person.toString());
```
##### 数组：构造器
```java
        Function<Integer,String[]> f1=len->new String[len];

        String[] s1 = f1.apply(3);

        System.out.println("数组是"+s1.length);
        
        Function<Integer,String[]> f2=String[]::new;

        String[] s2 = f2.apply(2);
        System.out.println("f2数组长度是"+s2.length);
        
```
### stream流的获取方式
`Collections`接口下的所有的实现都可以通过stream方式来获取steam流

#### stream的of方法
```java
public static void main(String[] args) {
Stream<String> a1 = Stream.of("a1", "a2", "a3");
String[] arr1 = {"aa","bb","cc"};
Stream<String> arr11 = Stream.of(arr1);
Integer[] arr2 = {1,2,3,4};
Stream<Integer> arr21 = Stream.of(arr2);
arr21.forEach(System.out::println);
// 注意：基本数据类型的数组是不行的
int[] arr3 = {1,2,3,4};
Stream.of(arr3).forEach(System.out::println);
}

```

### stream的常用方法
![](../img/2023-2-16/stream%E6%96%B9%E6%B3%95.png)

`终结方法`：返回值类型不再是 Stream 类型的方法，不再支持链式调用。本小节中，终结方法包括`count`和`foreach`

`非终结方法`：返回值类型仍然是 Stream 类型的方法，支持链式调用。（除了终结方法外，其余方法均为非终结方法。）

1. Stream只能操作一次
2. Stream方法返回的是新的流
3. Stream不调用终结方法，中间的操作不会执行

1. forEach
2. count
3. filter
4. limit
5. skip
```java
public static void main(String[] args) {
Stream.of("a1", "a2", "a3","bb","cc","aa","dd")
.skip(3)
.forEach(System.out::println);
}
```
```
bb
cc
aa
dd
```
6. map返回一个新集合
7. sorted
8. distinct 去除重复元素
```java
        Stream.of("1","2","3","4")
                .map(Integer::parseInt)
                .sorted((a,b)->a-b)
                .distinct()
                .forEach(System.out::println);
```
9. match
```java
boolean anyMatch(Predicate<? super T> predicate); // 元素是否有任意一个满足条件
boolean allMatch(Predicate<? super T> predicate); // 元素是否都满足条件
boolean noneMatch(Predicate<? super T> predicate); // 元素是否都不满足条件
```
10. find

```java
Optional<T> findFirst();
Optional<T> findAny();
```

11. max-min

```java
        Optional<Integer> max = Stream.of("1", "3", "3", "4", "5", "1", "7")
                .map(Integer::parseInt)
                .max(Comparator.comparingInt(a -> a));
        System.out.println(max.get());
        Optional<Integer> max1 = Stream.of("1", "3", "3", "4", "5", "1", "7")
                .map(Integer::parseInt)
                .max((a,b)->a-b);

        System.out.println(max1.get());
```
12. reduce
```java
        Integer sum = Stream.of("1", "3", "3", "4", "5", "1", "7")
                .map(Integer::parseInt)
                .reduce(0, Integer::sum);

        System.out.println(sum);
```
13. map和reduce组合
```java
        Integer ageSum = Stream.of(
                        new Person("张三", 18)
                        , new Person("李四", 22)
                        , new Person("张三", 13)
                        , new Person("王五", 15)
                        , new Person("张三", 19)

                ).map(Person::getAge)
                .reduce(0, Integer::sum);

        System.out.println(ageSum);

```
14. mapToInt
`如果需要将Stream中的Integer类型转换成int类型，可以使用mapToInt方法来实现`
```java
// Integer占用的内存比int多很多，在Stream流操作中会自动装修和拆箱操作
Integer arr[] = {1,2,3,5,6,8};
Stream.of(arr)
.filter(i->i>0)
.forEach(System.out::println);
System.out.println("---------");
// 为了提高程序代码的效率，我们可以先将流中Integer数据转换为int数据，然后再操作
IntStream intStream = Stream.of(arr)
.mapToInt(Integer::intValue);
intStream.filter(i->i>3)
.forEach(System.out::println);
```
15. concat
```java
Stream<String> stream1 = Stream.of("a","b","c");
Stream<String> stream2 = Stream.of("x", "y", "z");
// 通过concat方法将两个流合并为一个新的流
Stream.concat(stream1,stream2).forEach(System.out::println)
```
## stream结果收集
### 结果收集到集合中
```java
        //使用list收集

        List<Integer> list = Stream.of(1, 2, 3, 4, 5).collect(Collectors.toList());
        
        //使用set收集
        Set<Integer> set = Stream.of(1, 2, 3, 4, 5).collect(Collectors.toSet());
        
        //使用ArrayList收集

        ArrayList<Integer> arrayList = Stream.of(1, 2, 3, 4, 5).collect(Collectors.toCollection(ArrayList::new));
        
        //使用hashSet收集

        HashSet<Integer> hashSet = Stream.of(1, 2, 3, 4, 5).collect(Collectors.toCollection(HashSet::new));
```
### 结果收集到数组中
```java
        Object[] objects = Stream.of("aa", "bb", "cc", "aa").toArray();
        //指定类型
        String[] strings = Stream.of("aa", "bb", "cc", "aa").toArray(String[]::new);
```
###  对流中的数据做聚合计算
```java
        Optional<Person> maxAge = Stream.of(
                new Person("张三", 18)
                , new Person("李四", 22)
                , new Person("张三", 13)
                , new Person("王五", 15)
                , new Person("张三", 19)
        ).collect(Collectors.maxBy(Comparator.comparingInt(Person::getAge)));

        System.out.println(maxAge.get().getAge());

        maxAge.ifPresent(person -> System.out.println(person.getAge()));
                //求和

        Integer ageSum = Stream.of(
                new Person("张三", 18)
                , new Person("李四", 22)
                , new Person("张三", 13)
                , new Person("王五", 15)
                , new Person("张三", 19)
        ).collect(Collectors.summingInt(Person::getAge));

        System.out.println(ageSum);


        //求平均值

        Double averageAge = Stream.of(
                new Person("张三", 18)
                , new Person("李四", 22)
                , new Person("张三", 13)
                , new Person("王五", 15)
                , new Person("张三", 19)
        ).collect(Collectors.averagingInt(Person::getAge));

        System.out.println(averageAge);

        //统计数量

        long count = Stream.of(
                new Person("张三", 18)
                , new Person("李四", 22)
                , new Person("张三", 13)
                , new Person("王五", 15)
                , new Person("张三", 19)
        ).filter(person -> person.getAge() < 20).count();

        System.out.println(count);
```
### 对流中数据做分组操作

```java
        Map<String, List<Person>> map1 = Stream.of(
                new Person("张三", 18)
                , new Person("李四", 22)
                , new Person("张三", 13)
                , new Person("王五", 15)
                , new Person("张三", 19)
        ).collect(Collectors.groupingBy(Person::getName));

        map1.forEach((s, people) -> System.out.println(s+people.toString()));
                //多级分组

        Map<String, Map<Boolean, List<Person>>> map2 = Stream.of(
                new Person("张三", 18)
                , new Person("李四", 22)
                , new Person("张三", 13)
                , new Person("王五", 15)
                , new Person("张三", 19)
        ).collect(Collectors.groupingBy(Person::getName, Collectors.groupingBy(person -> person.getAge() > 18)));

```
### 对流中的数据做分区操作

```java
        Map<Boolean, List<Person>> map = Stream.of(
                new Person("张三", 18, 175)
                , new Person("李四", 22, 177)
                , new Person("张三", 14, 165)
                , new Person("李四", 15, 166)
                , new Person("张三", 19, 182)
        ).collect(Collectors.partitioningBy(p -> p.getAge() > 18));

      map.forEach((aBoolean, people) -> System.out.println(aBoolean+ people.toString()));
```

### 对流中的数据做拼接

```java
String s1 = Stream.of(
new Person("张三", 18, 175)
, new Person("李四", 22, 177)
, new Person("张三", 14, 165)
, new Person("李四", 15, 166)
, new Person("张三", 19, 182)
).map(Person::getName)
.collect(Collectors.joining());
// 张三李四张三李四张三
System.out.println(s1);
String s2 = Stream.of(
new Person("张三", 18, 175)
, new Person("李四", 22, 177)
, new Person("张三", 14, 165)
, new Person("李四", 15, 166)
, new Person("张三", 19, 182)
).map(Person::getName)
.collect(Collectors.joining("_"));
// 张三_李四_张三_李四_张三
System.out.println(s2);
String s3 = Stream.of(
new Person("张三", 18, 175)
, new Person("李四", 22, 177)
, new Person("张三", 14, 165)
, new Person("李四", 15, 166)
, new Person("张三", 19, 182)
).map(Person::getName)
.collect(Collectors.joining("_", "###", "$$$"));
// ###张三_李四_张三_李四_张三$$$
System.out.println(s3);
```

## 并行的Stream流
### 串行的Stream流

`我们前面使用的Stream流都是串行，也就是在一个线程上面执行。`
```java
        long count = Stream.of(5, 6, 8, 3, 1, 6)
                .filter(s -> {
                    System.out.println(Thread.currentThread().getName());
                    return s > 3;
                }).count();

        System.out.println(count);
```
```
main
main
main
main
main
main
4
```
### 并行流

#### 获取并行流

1. 通过List接口中的parallelStream方法来获取
2. 通过已有的串行流转换为并行流(parallel)

```java
/**
* 获取并行流的两种方式
*/
@Test
public void test02(){
List<Integer> list = new ArrayList<>();
// 通过List 接口 直接获取并行流
Stream<Integer> integerStream = list.parallelStream();
// 将已有的串行流转换为并行流
Stream<Integer> parallel = Stream.of(1, 2, 3).parallel();
}

```
#### 并行流操作

```java
        Stream.of(1,4,2,6,1,5,9)
                .parallel() // 将流转换为并发流，Stream处理的时候就会通过多线程处理
                .filter(s->{
                    System.out.println(Thread.currentThread() + " s=" +s);
                    return s > 2;
                }).count();
```
```
Thread[main,5,main] s=1
Thread[ForkJoinPool.commonPool-worker-1,5,main] s=4
Thread[ForkJoinPool.commonPool-worker-5,5,main] s=5
Thread[ForkJoinPool.commonPool-worker-2,5,main] s=1
Thread[ForkJoinPool.commonPool-worker-4,5,main] s=6
Thread[ForkJoinPool.commonPool-worker-6,5,main] s=2
Thread[ForkJoinPool.commonPool-worker-3,5,main] s=9
```
#### 并行流操作线程安全
```java
    private static final Object lock = new Object();

    private static void test3() {
        List<Integer> list = new ArrayList<>();
        //加锁实现
        IntStream.rangeClosed(1, 1000)
                .parallel()
                .forEach(i -> {
                    synchronized (lock) {
                        list.add(i);
                    }
                });

        System.out.println(list.size());

        //使用线程安全的容器
        Vector<Integer> integers = new Vector<>();
        IntStream.rangeClosed(1,1000)
                .parallel()
                .forEach(integers::add);
        System.out.println(integers.size());

        //将线程不安全的容器转换为线程安全的容器

        ArrayList<Integer> newList = new ArrayList<>();
        List<Integer> synchronizedList = Collections.synchronizedList(newList);
        IntStream.rangeClosed(1,1000).parallel().forEach(synchronizedList::add);
        System.out.println(synchronizedList.size());
        /*
         我们还可以通过Stream中的 toArray方法或者 collect方法来操作
         就是满足线程安全的要求
        */
        List<Integer> collect = IntStream.rangeClosed(1, 1000)
                .parallel()
                .boxed().toList();

        System.out.println(collect.size());
    }
```