# kotlin的基本用法

作者: fbk
时间：2022-1-16
地点：济南

## 数字
### 整数类型
|类型|大小|最小值|最大值|
|------|---------------|-------------|----------|
|Byte|8|-128|127|
|Short|16|-32768|32767|
|Int|32|-2,147,483,648 (-231)|2,147,483,647 (231 - 1)|
|Long|64|-9,223,372,036,854,775,808 (-263)|9,223,372,036,854,775,807 (263 - 1)|
使用val声明变量，编译器会自动推断可以表达该数值的最小类型
### 浮点类型
- Float 32位
- Double 64位
- 注：对于以小数初始化的变量，编译器会推断为 Double 类型：
- 注：与一些其他语言不同，Kotlin 中的数字没有隐式拓宽转换。 例如，具有 Double 参数的函数只能对 Double 值调用，而不能对 Float、 Int 或者其他数字值调用：
## 类型转换
所有数字类型都持支转换为其他类型
- toByte()
- toShort()
- toInt()
- toLong()
- toFloat()
- toDouble()
## 数组的声明
```java
//使用arrayof进行声明
val array1=arrayOf(1,2,3)
//使用构造方法
val array2=Array(5){i->(i*i).toString()} 
//声明指定大小所有元素都为空的数组
val array3=arrayOfNulls(5)
```
指定类型声明数组
- IntArray intArrayof
- ShortArray shortArrayof
- ByteArray byteArrayof
```java
// 大小为 5、值为 [0, 0, 0, 0, 0] 的整型数组
val arr = IntArray(5)

// 用常量初始化数组中的值的示例
// 大小为 5、值为 [42, 42, 42, 42, 42] 的整型数组
val arr = IntArray(5) { 42 }

// 使用 lambda 表达式初始化数组中的值的示例
// 大小为 5、值为 [0, 1, 2, 3, 4] 的整型数组（值初始化为其索引值）
var arr = IntArray(5) { it * 1 }
```
## 类型检测
```java
val obj:String="haha"
print(obj is String)
print(obj !is String)
```
## if
```java
  val a=1
        val b=2
        val max:Int = if(a>b){
            print('a')
            a
        }else{
            print('b')
           b
        }
        print(max)
```
## when
```java
        val a:Int=1
        when(a){
            1-> print(1)
            2-> print(2)
            3-> print(3)
            else->{
                print("没有找到")
            }
        }
```

## 类
### 构造函数
在 Kotlin 中的一个类可以有一个主构造函数以及一个或多个次构造函数。主构造函数是类头的一部分：它跟在类名与可选的类型参数后。
```java
class Person constructor(firstName:String)
```
如果主构造函数没有任何注解或者可见性修饰符，可以省略这个 constructor 关键字。
```java
class Person(firstName:String)
```
## 属性
使用var声明的属性是可变的，使用val声明只是可写的
```java
class Adress{
        var name: String = "Holmes, Sherlock"
    var street: String = "Baker"
    var city: String = "London"
    var state: String? = null
    var zip: String = "123456"
}
```
### Getter-Setter
在val声明的属性是只读，只有getter没有setter

自定义属性getter函数
```java
class Rectangle(val width:Int,val height:Int){
    val area:Int
    get() = this.width * this.height
}

fun main(){
    val rectangle=Rectangle(3,4)

}
```

## 接口
```java
interface MyInterface{
    fun bar()
    fun foo()
}
class Child:MyInterface{

}
```
## 可见修饰符
- private 只在本文件内可用
- protected 
- internal 模块可见
- public 默认修饰符

例如
```java
//文件名字example.kt
package foo
private fun foo(){} 在example.kt可见
public var bar: Int = 5 // 该属性随处可见
private set         // setter 只在 example.kt 内可见

internal val baz = 6    // 相同模块内可见
```

## 拓展函数
