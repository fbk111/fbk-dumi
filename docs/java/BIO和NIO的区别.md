# BIO和NIO的区别
作者: fbk
时间：2023-1-20
地点：济南
>足够优秀再大方拥有

## BIO和NIO的区别
- NIO以流的方式处理数据，NIO以块的方式处理数据，块IO的效率比流IO高很多。（比如说流IO他是一个流，你必须时刻去接着他，不然一些流就会丢失造成数据丢失，所以处理这个请求的线程就阻塞了他无法去处理别的请求，他必须时刻盯着这个请求防止数据丢失。而块IO就不一样了，线程可以等他的数据全部写入到缓冲区中形成一个数据块然后再去处理他，在这期间该线程可以去处理其他请求）
- BIO是阻塞的，NIO是非阻塞的
- BIO基于字节流和字符流进行操作的，而NIO基于Channel（通道）和Buffer（缓冲区）进行操作的，数据总是从通道读取到缓冲区中，或者从缓冲区写入到通道中。Selector（选择器）用于监听多个通道事件，因此使用单个线程就可以监听多个客户端通道
### BIO
- BIO是传统的Java IO编程，其基本的类和接口在java.io包中
- BIO(blocking I/O)：同步阻塞，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销
- BIO方式使用于连接数目比较小且固定的架构，这种服务方式对服务器资源要求比价高，并且局限于应用中，JDK1.4以前的唯一选择，程序简单易理解
BIO基本模型：
### 简单的bio实现
```java
public static void main(String[] args){

}
public static void server(){
 ServerSocket serverSocket=new ServerSocket(8080);
 while(true){
    Socket socket=serverSocket.accept();
    byte[] byte=new Byte[4];
    InputStream ip=socket.getInputStream();
    while(true){
      int read= ip.read(byte)
      if(read==-1){
        break;
      }
      System.out.println(new String(byte,0,read));
    }
 }
}

public static void Client(){
   Socket socket= new Socket("localhost",8080);
   OutPutStream outputStream=socket.getOutputStream();
   outputStream.write("hello world".getBytes());
}
```
### NIO
- NIO全称 java non-blocking IO。从JDK 1.4开始，java提供了一些列改进的输入/输出（I/O）的新特性，被称为NIO，是同步非阻塞的
- NIO相关类都被放在java.nio包及其子包下
- NIO三大核心部分：Channel（通道），Buffer（缓冲区），Selector（选择器）
- NIO是面向缓冲区的，或者面向块编程的。数据读取到一个它稍后处理的缓冲区，需要时可在缓冲区内前后移动，这就增加了处理过程中的灵活性，使用它可以提供非阻塞的高伸缩性网络
- Java NIO的非阻塞模式，使一个线程从某通道发送或者读取数据，但是它仅能得到目前可用的数据，如果目前没有可用的数据时，就什么都不会获取，而不是保持线程阻塞，所以直至数据变的可读取之前，该线程可以继续做其他事情。非阻塞就是如此，一个线程请求写入一些数据到某通道，但不需要等待它完全写入，这个线程同时可以去做别的事情
- 通俗来讲：NIO是可以做到用一个线程处理多个操作的。假设有10000个请求过来，根据实际情况，可以分配50或100个线程来处理。不想BIO一样需要分配10000个线程来处理
### 简单的nio实现
```java
public static void Server(){ 
   ByteBuffer buffer = ByteBuffer.allocate(16);
        //创建服务器
        ServerSocketChannel ssc = ServerSocketChannel.open();
        ssc.configureBlocking(false);
        //在进行accept时候设置线程是多线成，不用等待
        ssc.bind(new InetSocketAddress(8080));
        ArrayList<SocketChannel> channels = new ArrayList<>();
        while(true){
            //建立与客户点的连接
            SocketChannel sc = ssc.accept();
            sc.configureBlocking(false);
            //设置read的时候是多线成，不会等待
            channels.add(sc);
            for (SocketChannel channel : channels) {
                channel.read(buffer);
                buffer.flip();
                buffer.clear();
            }
        }
}
```
```java
public static void Client(){
        SocketChannel sc = SocketChannel.open();
        sc.connect(new InetSocketAddress("localhost",8080));
        sc.write(Charset.defaultCharset().encode("hello world"));
        System.out.println("连接");
}
```