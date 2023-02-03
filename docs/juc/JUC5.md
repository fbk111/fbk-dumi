# JUC-基础

作者: fbk
时间：2023-2-3
地点：济南


## 共享模型之不可变
### 日期转化问题
```java
 public static void main(String[] args) {
        Demo1();
    }

    private static void Demo1() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for (int i = 0; i < 10; i++) {
            new Thread(() -> {
                try {
                    log.debug("{}", sdf.parse("2002-11-27"));
                } catch (ParseException e) {
                    throw new RuntimeException(e);
                }
            }).start();
        }
    }
```
有很大的概率会出现`java.lang.NumberFormatExpection`或者日期解析不正常

```
java.lang.NumberFormatException: empty String
	at sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:1842)
	at sun.misc.FloatingDecimal.parseDouble(FloatingDecimal.java:110)
	at java.lang.Double.parseDouble(Double.java:538)
	at java.text.DigitList.getDouble(DigitList.java:169)
	at java.text.DecimalFormat.parse(DecimalFormat.java:2089)
	at java.text.SimpleDateFormat.subParse(SimpleDateFormat.java:1869)
	at java.text.SimpleDateFormat.parse(SimpleDateFormat.java:1514)
	at java.text.DateFormat.parse(DateFormat.java:364)
	at com.fbk.juc.gongxaingTest.lambda$Demo1$0(gongxaingTest.java:25)
	at java.lang.Thread.run(Thread.java:748)
java.lang.NumberFormatException: For input string: "11111111.E111111112.11111111E2"
	at sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:2043)
	at sun.misc.FloatingDecimal.parseDouble(FloatingDecimal.java:110)
	at java.lang.Double.parseDouble(Double.java:538)
	at java.text.DigitList.getDouble(DigitList.java:169)
	at java.text.DecimalFormat.parse(DecimalFormat.java:2089)
	at java.text.SimpleDateFormat.subParse(SimpleDateFormat.java:1869)
	at java.text.SimpleDateFormat.parse(SimpleDateFormat.java:1514)
	at java.text.DateFormat.parse(DateFormat.java:364)
	at com.fbk.juc.gongxaingTest.lambda$Demo1$0(gongxaingTest.java:25)
	at java.lang.Thread.run(Thread.java:748)
```
#### 解决-同步锁
```java
    private static void Demo2(){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for (int i = 0; i < 10; i++) {
            new Thread(()->{
                synchronized (lock) {
                    try {
                        log.debug("{}", sdf.parse("2002-11-27"));
                    } catch (ParseException e) {
                        throw new RuntimeException(e);
                    }
                }
            }).start();
        }
    }
```
#### 解决-不可变
如果一个对象不能够修改其内部的状态，那么他就是线程安全的，在jdk1.8后，提供了一个线程安全的日期格式化类
```java
    private static void Demo3(){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        for (int i = 0; i < 10; i++) {
            new Thread(()->{
                LocalDate date = dtf.parse("2002-11-27", LocalDate::from);
                log.debug("{}",date);
            }).start();
        }
    }
```
```
16:26:50 [DEBUG] [Thread-7] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-4] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-3] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-8] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-6] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-9] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-1] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-0] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-5] c.f.j.gongxaingTest - 2002-11-27
16:26:50 [DEBUG] [Thread-2] c.f.j.gongxaingTest - 2002-11-27
```
### 不可改变设计
`String也是不可改变的`
```java
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {
    /** The value is used for character storage. */
    private final char value[];
 
    /** Cache the hash code for the string */
    private int hash; // Default to 0
    
    // ...
    
}
```
## 共享模型之工具
### 线程池
1. 自定义线程池
![](../img/2023-2-3/%E7%BA%BF%E7%A8%8B%E6%B1%A0.png)
