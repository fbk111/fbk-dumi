# jvm-字符串常量池

作者: fbk
时间：2023-2-6
地点：济南

## 基本特性
```java
String s1="fbk"
String s2=new String("fbk")
```
1. String被声明为final，不可继承
2. String实现Serializable接口，表示字符串是支持序列化，实现了comparable接口，可以进行比较
3. String在jdk8及以前内部定义了`final char value[]`用于存储字符串数据。JDK9时改为`byte[]`
## 为什么JDK9改变了String结构
1. String类的当前实现将字符串储存在char数组，每个字符串使用两个字节
2. 

### String基本特征
- String代表不可变的字符序列，简称：不可变性
1. 当对字符串重新赋值，需要重写指定内存区域赋值，不能使用原有的value赋值
2. 当对现有的字符串进行连接操作时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值
3. 当调用String的replace()方法修改执行字符或字符串，也需要重新指定内存区域赋值，不能使用原有的value进行赋值
4. 通过字面量的方式给字符串赋值，此时的字符串值声明在字符串常量池中。
`当对字符串重新赋值，需要重写指定内存区域赋值，不能使用原有的value进行赋值`
```java
@Test
   public void test1() {
       String s1 = "abc";//字面量定义的方式，"abc"存储在字符串常量池中
       String s2 = "abc";
       s1 = "hello";

       System.out.println(s1 == s2);//判断地址：true  --> false

       System.out.println(s1);//
       System.out.println(s2);//abc

   }
```
- 取字符串 “abc” 时，使用的是同一个符号引用：#2
- 取字符串 “hello” 时，使用的是另一个符号引用：#3

`对现有的字符串进行连接操作，也需要重新指定内存区域，不能使用原有的value进行赋值`
```java
@Test
   public void test2() {
       String s1 = "abc";
       String s2 = "abc";
       s2 += "def";
       System.out.println(s2);//abcdef
       System.out.println(s1);//abc
   }
```
`当调用string的replace()方法修改指定字符或字符串时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值`
```java
@Test
public void test3() {
    String s1 = "abc";
    String s2 = s1.replace('a', 'm');
    System.out.println(s1);//abc
    System.out.println(s2);//mbc
}
```
### String底层结构
`字符串常量池是不会存储相同内容的字符串的`
1. String的String pool是一个固定大小的HashTable，默认长度是1009，如果放进String Pool的String非常多，就会造成Hash冲突严重，从而导致链表会很长，而链表长了后直接会造成的影响就是当调用String.intern()方法时性能会大幅下降。
2. 使用-XX:StringTablesize可设置StringTable的长度
3. 在JDK6中StringTable是固定的，就是1009的长度，所以如果常量池中的字符串过多就会导致效率下降很快，StringTablesize设置没有要求
4. 在JDK7中，StringTable的长度默认值是60013，StringTablesize设置没有要求
5. 在JDK8中，StringTable的长度默认值是60013，StringTable可以设置的最小值为1009
`不同的StringTable长度下，程序的性能`
```java
/**
 * @Author 房博坤
 * @Date 2023/2/6 9:49
 * @Version 1.0.1
 */
@Slf4j
public class GenerateString {
    private static void demo1() {
        try (FileWriter fw = new FileWriter("words.txt")) {
            for (int i = 0; i < 100000; i++) {
                int length = (int) (Math.random() * (10 - 1 + 1) + 1);
                 fw.write(getString(length));
            }
        }catch (IOException e){
            e.printStackTrace();
        }
    }

    private static String getString(int length){
        String str = "";
        for (int i = 0; i < length; i++) {
            //65 - 90, 97-122
            int num = (int)(Math.random() * (90 - 65 + 1) + 65) + (int)(Math.random() * 2) * 32;
            str += (char)num;
        }
        return str;
    }
}

```
## String内存分配
1. 在java语言中有8中基本数据和一种特殊的String，这些类为了在运行期间更快，都提供了常量池概念
2. 常量池就类似一个Java系统级别提供的缓存。8种基本数据类型的常量池都是系统协调的，String类型的常量池比较特殊。它的主要使用方法有两种。
  - 直接使用双引号声明出来的String对象会直接存储在常量池中。比如：String info="atguigu.com";
  - 如果不是用双引号声明的String对象，可以使用String提供的intern()方法。
3. Java 6及以前，字符串常量池存放在永久代
4. java 7中 Oracle的工程师对字符串池的逻辑做了很大的改变，即将字符串常量池的位置调整到Java堆内
  - 所有的字符串都保存在堆（Heap）中，和其他普通对象一样，这样可以让你在进行调优应用时仅需要调整堆大小就可以了。
  - 字符串常量池概念原本使用得比较多，但是这个改动使得我们有足够的理由让我们重新考虑在Java 7中使用String.intern()。
5. Java8元空间，字符串常量在堆
### StringTable 为什么要调整？
1. 为什么要调整位置
  - 永久代的默认空间大小比较小
  - 永久代垃圾回收频率低，大量的字符串无法及时回收，容易进行Full GC产生STW或者容易产生OOM：PermGen Space
  - 堆中空间足够大，字符串可被及时回收
2. 在JDK7中，interned字符串不再java堆中，而是在java堆的主要部分，
```java
    private static void demo2(){
        //使用set保持常量池引用，避免full gc回收常量池行为
        HashSet<String> set = new HashSet<>();
        //在short可以取值的范围内足以让6MB的PermSize或heap产生OOM了。
        short i = 0;
        while(true){
            set.add(String.valueOf(i++).intern());
        }
    }
```

## String的基本操作
```java
public class StringTest4 {
    public static void main(String[] args) {
        System.out.println();//2293
        System.out.println("1");//2294
        System.out.println("2");
        System.out.println("3");
        System.out.println("4");
        System.out.println("5");
        System.out.println("6");
        System.out.println("7");
        System.out.println("8");
        System.out.println("9");
        System.out.println("10");//2303
        //如下的字符串"1" 到 "10"不会再次加载
        System.out.println("1");//2304
        System.out.println("2");//2304
        System.out.println("3");
        System.out.println("4");
        System.out.println("5");
        System.out.println("6");
        System.out.println("7");
        System.out.println("8");
        System.out.println("9");
        System.out.println("10");//2304
    }
}
```
1. 程序启动已经加载了2293 个字符串常量
![](../img/2023-2-6/string%E5%8A%A0%E8%BD%BD.png)
2. 向下执行,增加一个字符串常量，空格符
![](../img/2023-2-6/string%E5%8A%A0%E8%BD%BD2.jpg)
3. 一直加载到10
![](../img/2023-2-6/string%E5%8A%A0%E8%BD%BD3.jpg)
4. 执行到1
![](../img/2023-2-6/string%E5%8A%A0%E8%BD%BD4.jpg)
5. 之后执行因为常量池字符串已经存在了1-10字符串，所以线程池就不重新添加
![](../img/2023-2-6/string%E5%8A%A0%E8%BD%BD5.png)
```java
//官方示例代码
class Memory {
    public static void main(String[] args) {//line 1
        int i = 1;//line 2
        Object obj = new Object();//line 3
        Memory mem = new Memory();//line 4
        mem.foo(obj);//line 5
    }//line 9

    private void foo(Object param) {//line 6
        String str = param.toString();//line 7
        System.out.println(str);
    }//line 8
}
```


## 字符串拼接
1. 常量与常量的拼接结果在常量池中，原理是编译器优化
2. 常量池中不会存在相同内容的变量
3. 拼接前后，只要其中有一个是变量，结果就在堆中。变量拼接的原理是StringBuilder
4. 如果拼接的结果调用intern()方法，根据该字符串是否在常量池中存在，分为：
   - 如果存在，则返回字符串在常量池中的地址
   - 如果字符串常量池中不存在该字符串，则在常量池中创建一份，并返回此对象的地址
```java
@Test
    public void test1(){
        String s1 = "a" + "b" + "c";//编译期优化：等同于"abc"
        String s2 = "abc"; //"abc"一定是放在字符串常量池中，将此地址赋给s2
        /*
         * 最终.java编译成.class,再执行.class
         * String s1 = "abc";
         * String s2 = "abc"
         */
        System.out.println(s1 == s2); //true
        System.out.println(s1.equals(s2)); //true
    }
```
```
0 ldc #2 <abc>
2 astore_1
3 ldc #2 <abc>
5 astore_2
6 getstatic #3 <java/lang/System.out>
9 aload_1
10 aload_2
11 if_acmpne 18 (+7)
14 iconst_1
15 goto 19 (+4)
18 iconst_0
19 invokevirtual #4 <java/io/PrintStream.println>
22 getstatic #3 <java/lang/System.out>
25 aload_1
26 aload_2
27 invokevirtual #5 <java/lang/String.equals>
30 invokevirtual #4 <java/io/PrintStream.println>
33 return
```

2. 拼接前后，只要其中有一个是变量，结果就在堆中
调用intern如果字符串常量池中有字符串就不需要在堆内存中新创建实例，包括使用变量拼接的字符串，使用intern方法就不会创建新的实例
```java
@Test
    public void test2(){
        String s1 = "javaEE";
        String s2 = "hadoop";

        String s3 = "javaEEhadoop";
        String s4 = "javaEE" + "hadoop";//编译期优化
        //如果拼接符号的前后出现了变量，则相当于在堆空间中new String()，具体的内容为拼接的结果：javaEEhadoop
        String s5 = s1 + "hadoop";
        String s6 = "javaEE" + s2;
        String s7 = s1 + s2;

        System.out.println(s3 == s4);//true
        System.out.println(s3 == s5);//false
        System.out.println(s3 == s6);//false
        System.out.println(s3 == s7);//false
        System.out.println(s5 == s6);//false
        System.out.println(s5 == s7);//false
        System.out.println(s6 == s7);//false
        //intern():判断字符串常量池中是否存在javaEEhadoop值，如果存在，则返回常量池中javaEEhadoop的地址；
        //如果字符串常量池中不存在javaEEhadoop，则在常量池中加载一份javaEEhadoop，并返回次对象的地址。
        String s8 = s6.intern();
        System.out.println(s3 == s8);//true
    }

```
### 字符串拼接的细节
```java
@Test
public void test3(){
    String s1 = "a";
    String s2 = "b";
    String s3 = "ab";
    /*
    如下的s1 + s2 的执行细节：(变量s是我临时定义的）
    ① StringBuilder s = new StringBuilder();
    ② s.append("a")
    ③ s.append("b")
    ④ s.toString()  --> 约等于 new String("ab")，但不等价

    补充：在jdk5.0之后使用的是StringBuilder,在jdk5.0之前使用的是StringBuffer
     */
    String s4 = s1 + s2;//
    System.out.println(s3 == s4);//false
}
```
```java
/*
    1. 字符串拼接操作不一定使用的是StringBuilder!
       如果拼接符号左右两边都是字符串常量或常量引用，则仍然使用编译期优化，即非StringBuilder的方式。
    2. 针对于final修饰类、方法、基本数据类型、引用数据类型的量的结构时，能使用上final的时候建议使用上。
     */
    @Test
    public void test4(){
        final String s1 = "a";
        final String s2 = "b";
        String s3 = "ab";
        String s4 = s1 + s2;
        System.out.println(s3 == s4);//true
    }
```
`拼接操作与 append 操作的效率对比`
```java

    @Test
    public void test6(){

        long start = System.currentTimeMillis();

//        method1(100000);//4014
        method2(100000);//7

        long end = System.currentTimeMillis();

        System.out.println("花费的时间为：" + (end - start));
    }

    public void method1(int highLevel){
        String src = "";
        for(int i = 0;i < highLevel;i++){
            src = src + "a";//每次循环都会创建一个StringBuilder、String
        }
//        System.out.println(src);

    }

    public void method2(int highLevel){
        //只需要创建一个StringBuilder
        StringBuilder src = new StringBuilder();
        for (int i = 0; i < highLevel; i++) {
            src.append("a");
        }
//        System.out.println(src);
    }
```
1. StringBuilder的append方式添加字符串的效率要高于字符串拼接方式
2. 原因
   1. StringBuilder的append方式，自始至终只创建一个StringBuilder
   2. 使用String的字符串拼接方法
      - 创建多个StringBuilder和String（调用toString方法）的对象，内存占用更大
      - 如果进行GC,需要花费额外的时间（在拼接的过程中产生的一些中间字符串可能永远也用不到，会产生大量垃圾字符串）。）
3. 改进空间
   - 在开发环境中，如果基本确定要前前后后添加的字符串长度不高于某个限定值highLevel的情况下，建议使用构造器实例化：
   - `StringBuilder s=new StringBuilder(highLevel) //new Char[highLevel]`
   - 这样可以避免扩容
## intern使用
```java
public native String intern()
//native表明java修饰的是一个原生方法
```
1. intern是一个原生方法，调用的是底层的c方法
2. 字符串常量池最初是空的，由String类私有地维护。在调用intern方法时，如果池中已经包含了由equals(object)方法确定的与该字符串内容相等的字符串，则返回池中的字符串地址。否则，该字符串对象将被添加到池中，并返回对该字符串对象的地址。（这是源码里的大概翻译）
3. 如果不是用双引号声明的String对象，可以使用String提供的intern方法：intern方法会从字符串常量池中查询当前字符串是否存在，若不存在就会将当前字符串放入常量池中。比如：
```java
String myInfo=new String("fbk").intern();
```
4. 如果在任意字符串上调用String.intern方法，那么其返回结果所指向的那个类实例，必须和直接以常量形式出现的字符串实例完全相同。因此，下列表达式的值必定是true
```java
 ("a"+"b"+"c").intern()=="abc"
```
5. 通俗点讲，Interned String就是确保字符串在内存里只有一份拷贝，这样可以节约内存空间，加快字符串操作任务的执行速度。注意，这个值会被存放在字符串内部池（String Intern Pool）
### new String
#### new String("ab")会创建几个对象
```java
public static void main(String [] args){
    String demo=new String("ab");
    /**
    1. 创建一个对象存放在堆内存中
    2. 在字符串常量池中储存ab
     */
}
```
```
0 new #2 <java/lang/String>
3 dup
4 ldc #3 <ab>
6 invokespecial #4 <java/lang/String.<init>>
9 astore_1
10 return
```
1. ` new #2`:在堆中创建了String对象
2. `ldc #3 <ab>`:在字符串常量池中放入"ab"(如果常量池中没有ab)
#### new String("a")和new String("b")会创建几个对象
```java
/**
 * 思考：
 * new String("a") + new String("b")呢？
 *  对象1：new StringBuilder()
 *  对象2： new String("a")
 *  对象3： 常量池中的"a"
 *  对象4： new String("b")
 *  对象5： 常量池中的"b"
 *
 *  深入剖析： StringBuilder的toString():
 *      对象6 ：new String("ab")
 *       强调一下，toString()的调用，在字符串常量池中，没有生成"ab"
 *
 */
public class StringNewTest {
    public static void main(String[] args) {

        String str = new String("a") + new String("b");
    }
}
```
```
0 new #2 <java/lang/StringBuilder>
3 dup
4 invokespecial #3 <java/lang/StringBuilder.<init>>
7 new #4 <java/lang/String>
10 dup
11 ldc #5 <a>
13 invokespecial #6 <java/lang/String.<init>>
16 invokevirtual #7 <java/lang/StringBuilder.append>
19 new #4 <java/lang/String>
22 dup
23 ldc #8 <b>
25 invokespecial #6 <java/lang/String.<init>>
28 invokevirtual #7 <java/lang/StringBuilder.append>
31 invokevirtual #9 <java/lang/StringBuilder.toString>
34 astore_1
35 return
```
1. 拼接字符串`0 new #2 <java/lang/StringBuilder>`会创建一个StringBuilder对象
2. `7 new #4 java/lang/String` ：创建 String 对象，对应于 new String(“a”)
3. `11 ldc #5 <a>` ：在字符串常量池中放入 “a”（如果之前字符串常量池中没有 “a” 的话）
4. `19 new #4 <java/lang/String> `：创建 String 对象，对应于 new String(“b”)
5. `23 ldc #8 <b>` ：在字符串常量池中放入 “b”（如果之前字符串常量池中没有 “b” 的话） 
6. `31 invokevirtual #9 <java/lang/StringBuilder.toString>` ：调用 StringBuilder 的 toString() 方法，会生成一个 String 对象

> 面试题
```java
/**
 * 如何保证变量s指向的是字符串常量池中的数据呢？
 * 有两种方式：
 * 方式一： String s = "shkstart";//字面量定义的方式
 * 方式二： 调用intern()
 *         String s = new String("shkstart").intern();
 *         String s = new StringBuilder("shkstart").toString().intern();
 *
 */
public class 	StringIntern {
    public static void main(String[] args) {

        String s = new String("1");
        s.intern();//调用此方法之前，字符串常量池中已经存在了"1"
        String s2 = "1";
        System.out.println(s == s2);//jdk6：false   jdk7/8：false
        
        /*
         1、s3变量记录的地址为：new String("11")
         2、经过上面的分析，我们已经知道执行完pos_1的代码，在堆中有了一个new String("11")
         这样的String对象。但是在字符串常量池中没有"11"
         3、接着执行s3.intern()，在字符串常量池中生成"11"
           3-1、在JDK6的版本中，字符串常量池还在永久代，所以直接在永久代生成"11",也就有了新的地址
           3-2、而在JDK7的后续版本中，字符串常量池被移动到了堆中，此时堆里已经有new String（"11"）了
           出于节省空间的目的，直接将堆中的那个字符串的引用地址储存在字符串常量池中。没错，字符串常量池
           中存的是new String（"11"）在堆中的地址
         4、所以在JDK7后续版本中，s3和s4指向的完全是同一个地址。
         */
        String s3 = new String("1") + new String("1");//pos_1
	    s3.intern();
        
        String s4 = "11";//s4变量记录的地址：使用的是上一行代码代码执行时，在常量池中生成的"11"的地址
        System.out.println(s3 == s4);//jdk6：false  jdk7/8：true
    }


}

```
```java

```
### intern方法
```