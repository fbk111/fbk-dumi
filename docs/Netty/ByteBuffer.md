# ByteBuffer

作者: fbk
时间：2022-12-31
地点：济南
>足够优秀再大方拥有

## 读取数据
有一个普通的txt文件，命名为data,txt
```xml
1234567890abcd
```
使用FileChannel读取数据
```java
@Slf4j
public class ChannelDemo1 {
    public static void main(String[] args) {
        try (RandomAccessFile file = new RandomAccessFile("data.txt", "rw")) {
            FileChannel channel = file.getChannel();
            ByteBuffer buffer = ByteBuffer.allocate(10);
            do {
                int read = channel.read(buffer);//写入buffer数据
                log.debug("接收字节数{}",read);
                if(read==-1){
                    break;
                }
                buffer.flip();//切换读模式
                while(buffer.hasRemaining()){
                    log.debug("{}",(char)buffer.get());
                }
                buffer.clear();//切换写模式
            }while (true);
        } catch (IOException e) {
        }
    }
}
```
输出
```xml
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 读到字节数：10
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 1
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 2
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 3
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 4
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 5
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 6
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 7
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 8
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 9
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 0
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 读到字节数：4
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - a
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - b
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - c
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - d
10:39:03 [DEBUG] [main] c.i.n.ChannelDemo1 - 读到字节数：-1
```
## ByteBuffer使用
1. 向buffer写入数据,channel.read(buffer)
2. 切换读模式 buffer.clip()
3. 切换写模式 **buffer.clear()/buffer.compact()**
4. 读模式获取数据 `buffer.get()`
## byteBuffer属性
- capacity 容器容量
- position
- limit

## byteBuffer常见方法
### 分配空间
```java
ByteBuffer buffer=ByteBuffer.allocate(16);
```
### 向buffer写入数据
```java
int len=channel.read(bytebuffer);
buffer.put((byte)123);
buffer.put((byte[])[1,2,3])
```
### 从buffer读取数据
```java
byte b=buffer.get();
/*
get方法会让position向后移动
解决
1.使用rewind使position变为0
2.使用get(index)方式获取,position不会改变
*/
int writeBytes=channel.write(buffer);
```
### 标记buffer
```java
buffer.mark()//使用mark标记当前的位置
buffer.reset()//position返回到mark的位置
//注:rewind和flip都会清楚mark的位置
```
### 字符串与ByteBuffer转化
```java
ByteBuffer byteBuffer = StandardCharsets.UTF_8.encode("你好");//六个字节
ByteBuffer byteBuffer1 = Charset.forName("utf-8").encode("世界");//六个字节
//ByteBuffer转化为字符串
System.out.println(byteBuffer.toString())

```
### ByteBuffer是非线程安全的

### Scattering Reads
```java
    public static void demo2(){
        try (RandomAccessFile file = new RandomAccessFile("word.txt", "rw")) {
            FileChannel channel = file.getChannel();//十个字节的word.txt
            ByteBuffer byteBuffer = ByteBuffer.allocate(3);
            ByteBuffer byteBuffer1 = ByteBuffer.allocate(3);
            ByteBuffer byteBuffer2 = ByteBuffer.allocate(4);
            long len = channel.read(new ByteBuffer[]{byteBuffer, byteBuffer1, byteBuffer2});
            byteBuffer.flip();
            byteBuffer1.flip();
            byteBuffer2.flip();
            
        } catch (IOException e) {
        }
    }
```
结果
```
         +-------------------------------------------------+
         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |
+--------+-------------------------------------------------+----------------+
|00000000| 6f 6e 65                                        |one             |
+--------+-------------------------------------------------+----------------+
         +-------------------------------------------------+
         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |
+--------+-------------------------------------------------+----------------+
|00000000| 74 77 6f                                        |two             |
+--------+-------------------------------------------------+----------------+
         +-------------------------------------------------+
         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |
+--------+-------------------------------------------------+----------------+
|00000000| 74 68 72 65 65                                  |three           |
+--------+-------------------------------------------------+----------------+
```
### Gathering Writes
```java
    public static void demo3(){
        try (RandomAccessFile file = new RandomAccessFile("word.txt","rw")) {
            FileChannel channel = file.getChannel();
            ByteBuffer d = ByteBuffer.allocate(4);
            ByteBuffer e = ByteBuffer.allocate(4);
            channel.position(11);
            d.put(new byte[]{'f', 'o', 'u', 'r'});
            e.put(new byte[]{'f', 'i', 'v', 'e'});
            d.flip();
            e.flip();
            debugAll(d);
            debugAll(e);
            channel.write(new ByteBuffer[]{d, e});
        } catch (IOException e) {
        }
    }
```
输出
```
         +-------------------------------------------------+
         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |
+--------+-------------------------------------------------+----------------+
|00000000| 66 6f 75 72                                     |four            |
+--------+-------------------------------------------------+----------------+
         +-------------------------------------------------+
         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |
+--------+-------------------------------------------------+----------------+
|00000000| 66 69 76 65                                     |five            |
+--------+-------------------------------------------------+----------------+
```
### Demo
网络上有多条数据发送给服务端，数据之间使用 \n 进行分隔 但由于某种原因这些数据在接收时，被进行了重新组合，例如原始数据有3条为
* Hello,world\n
* I'm zhangsan\n
* How are you?\n

变成了下面的两个 byteBuffer (黏包，半包)

* Hello,world\nI'm zhangsan\nHo
* w are you?\n
```java
    public static void main(String[] args) {
        ByteBuffer source = ByteBuffer.allocate(32);
        source.put("Hello,world\nI'm zhangsan\nHo".getBytes());
        split(source);

        source.put("w are you?\nhaha!\n".getBytes());
        System.out.println(2+""+source);
        split(source);
    }
    public static void split(ByteBuffer source){
        source.flip();
        for(int i=0;i<source.limit();i++){
            if(source.get(i)=='\n'){//为什么这里是get(i)，因为要记录一开始的位置，所以只能用get(i)让position不移动
                int length=i+1-source.position();
                for(int j=0;j<length;j++){
                    target.put(source.get());//这里是get
                }
            }
        }
        source.compact();
    }
```
#### get(i)和get()区别
1. get(i)不会移动position
2. get()会移动position