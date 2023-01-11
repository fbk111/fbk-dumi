# IO基础
作者: fbk
时间：2023-1-11
地点：济南
>足够优秀再大方拥有

## 字节流
### inputStream
- read()：返回输入流中下一个字节的数据，返回值介于0-255，如果没有读到任何字节，返回-1，表示文件结束
- read(byte b[]):从输入流中读取字节数组b中，如果数组b中的长度是0，则不读取，如果没有可用字节读取，返回-1，如果有可用字节读取，最多读取字节数是b.length,返回读取字节数这个方法相当于read(b,0,b.length)
- read(byte b[],int off,int len)
- skip(long n):忽略输入流中的n个字节返回世界忽略的字节数
- available():返回输入流中可以读取的字节数
从java9，inputStream新增了多个方法
- readAllBytes():返回输入流中的所有字节，返回字节数组
- readNBytes(byte[] b,int off,int len):阻塞直到读取len个数组
- transferTo(OutputStream out):将所有字节从一个输入流传递给另一个数组流
```java
   try (InputStream fis = new FileInputStream("input.txt")) {
            System.out.println("可读取字节数"+fis.available());
            int content;
            long skip=fis.skip(2);
            while((content=fis.read())!=-1){
                System.out.println((char) content);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
```
使用DataInputStream中读取
```java
        FileInputStream fileInputStream = null;
        try {
            fileInputStream = new FileInputStream("input.txt");

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        DataInputStream dataInputStream = new DataInputStream(fileInputStream);
        int i = 0;
        try {
            i = dataInputStream.readByte();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        System.out.println((char)i);
```
### OutputStream(字节输出流)
- write(int b):将特定字节写入输出流
- write(byte b[]):将数组b写入输出流
- write(byte [] b,int off,int len)
- flush():刷新此输出流并写出所有缓冲的输出字节
- close():关闭输出流释放相关的系统资源
```java
        try (FileOutputStream fileOutputStream = new FileOutputStream("output.txt")) {
            byte[] bytes = "demo".getBytes();
            fileOutputStream.write(bytes,0,1);
        } catch (IOException e) {
        }
```
使用BufferedOutPutStream读取
```java
   FileOutputStream fileOutputStream = new FileOutputStream("output.txt");
        BufferedOutputStream dataOutPutStream = new BufferedOutputStream(fileOutputStream);
        fileOutputStream.close();
        dataOutPutStream.close();
```
使用ObjectOutputStream
```java
     try(ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream("file.txt"))){
            objectOutputStream.writeObject(new Person("demo"));

        }catch (IOException e){
            e.printStackTrace();
        }
```
## 字符流
为什么要分字符流操作还是字符流操作
- 字符流使用JVM将字节转换得到
- 不知道编码类型容易出现乱码问题
- utf8 英文1个字符，中文3个字符
- unicode 任何字符都是2个字节
- gbk 英文1个字节，中文2个字节
### Render
Render是所有的字符输入流的父类
Render读取的是文本，outputStream读取的是原始字节
- read():读取一个字符
- read(byte [] bytes):从输出流读取字符，储存到字符数组中
- read(byte [] bytes,int off,int len)
- skip(long n) 忽略输入流中的n个字符
- close()
`fileReader读取`
```java
   try (FileReader fileReader = new FileReader("input.txt")) {
            Byte [] bytes=new Byte[1024];
            int count=0;
            fileReader.skip(3);
            while((count= fileReader.read())!=-1){
                System.out.println((char)count);
            }
        } catch (IOException e) {
        }
```
### write
- write(int c):写入单个字符
- write(char [] charf)写入字符数组
- write(String str,0,str.length()) 写入字符串
- append(CharSequence csq):将指定的字符序列附加到指定的writer对象并返回该writer对象
- append(char c) 将指定的字符附加到指定的 Writer 对象并返回该 Writer 对象。
- flush():刷新输出流并强制写入所有的字符
- close() 关闭字符输出流
## 字符缓冲流
IO流是很消耗性能的，缓冲流将数据加载到缓冲区，一次读取写入多个字符串，避免IO操作，提高效率
使用BufferedInputStream增强FileInputStream
```java
BufferedInputStream bufferedInputStream=new BufferededInputStream(new FileInputStream("input.txt"));
```
字节流和字节缓冲流的差距是我们使用两个都会调用write和read方法只能写入或者读取一个字节，但是在使用缓冲区我们可以将字节存放在缓冲区，减少IO次数，提高读取速度

当我们只是使用read或者write进行单个字节或者字符的读取或写入，这样有缓冲区的话那么读取的速度会很快，如果我们使用byte数组进行读取，那么速度差距不会太过明显
## 随机访问流
支持跳转到文件的任意位置读取

构造方法
```java
//openAndDelete是否打开文件就删除文件
public RandomAccessFile(File file,String mode,boolean openAndDelete){

}
```
mode
- r:只读模式
- rw：读写模式
- rws: 相对于 rw，rws 同步更新对“文件的内容”或“元数据”的修改到外部存储设备。
- rwd : 相对于 rw，rwd 同步更新对“文件的内容”的修改到外部存储设备。