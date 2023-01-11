# IO基础
作者: fbk
时间：2023-1-11
地点：济南
>足够优秀再大方拥有

## 装饰器模式
### 简介
可以在不改变原有对象的情况下拓展其功能

装饰器模式可以通过组合替代继承来拓展原始类的功能，在一些继承关系比较复杂的场景

对于字节流，`FileInputStream`和`FileOutputStream`是装饰器模式的核心，分别增强InputStream和OutputStream

我们通过BufferedInputStream来增强FileInputStream功能

`BufferedInputStream`构造函数
```java
public BufferedInputStream(InputStream in) {
    this(in, DEFAULT_BUFFER_SIZE);
}

public BufferedInputStream(InputStream in, int size) {
    super(in);
    if (size <= 0) {
        throw new IllegalArgumentException("Buffer size <= 0");
    }
    buf = new byte[size];
}
```
`BufferedInputStream`实例
```java
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("input.txt"))) {
    int content;
    long skip = bis.skip(2);
    while ((content = bis.read()) != -1) {
        System.out.print((char) content);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

提问：`为什么直接不制造一个BufferedFileInputStream`

如果inputStream子类比较少，为每个inputStream制造一个缓冲流，太麻烦了

## 适配器模式
举例：通过适配器，我们可以将字节流转换成字符流，然后我们就可以通过字节流对象来读取字节流和字符流

`inputStreamReader`和`OutputStreamWriter`是两个适配器，也是字符流和字节流转换的桥梁，`InputStreamReader`使用`StreamDecoder`对字节流进行解码，实现字节流到字符流，`OutputStreamWriter`使用`StreamEncoder`进行编码，实现字符流到字节流
### inputStream部分源码
```java
public class InputStreamReader extends Reader {
	//用于解码的对象
	private final StreamDecoder sd;
    public InputStreamReader(InputStream in) {
        super(in);
        try {
            // 获取 StreamDecoder 对象
            sd = StreamDecoder.forInputStreamReader(in, this, (String)null);
        } catch (UnsupportedEncodingException e) {
            throw new Error(e);
        }
    }
    // 使用 StreamDecoder 对象做具体的读取工作
	public int read() throws IOException {
        return sd.read();
    }
}

```

### outPutStreamWriter部分源码
```java
public class InputStreamReader extends Reader {
	//用于解码的对象
	private final StreamDecoder sd;
    public InputStreamReader(InputStream in) {
        super(in);
        try {
            // 获取 StreamDecoder 对象
            sd = StreamDecoder.forInputStreamReader(in, this, (String)null);
        } catch (UnsupportedEncodingException e) {
            throw new Error(e);
        }
    }
    // 使用 StreamDecoder 对象做具体的读取工作
	public int read() throws IOException {
        return sd.read();
    }
}

```
### 适配器和装饰器的去啊u别
装饰器测试增强原始类的功能，装饰器类需要跟原始类继承相同的抽象类或者实现相同接口，并且装饰器模式支持对原始嵌套类使用多个装饰器

适配器侧重让不兼容的接口进行交互工作

## 工厂模式
工厂模式用于创建对象,NIO中大量用到工厂模式
- Files.newInputStream()
- Paths.get()
- ZipFileSystem

## 观察者模式
