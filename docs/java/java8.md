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