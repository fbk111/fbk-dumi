# selector

作者: fbk
时间：2023-1-3
地点：济南
>足够优秀再大方拥有 

## 阻塞和非阻塞
### 阻塞
- 阻塞模式下面的方法都会让线程暂停
  - ServerSocketChannel.accept在没有连接的时候线程暂停
  - SocketChannel.read会在没有数据可读让线程暂停
  - 阻塞就是线程暂停了并且不会占用cpu，相当于线程闲置
- 单线程下，阻塞方法之间相互影响，不能工作，需要多线程
- 但多线程也有问题
  * 32 位 jvm 一个线程 320k，64 位 jvm 一个线程 1024k，如果连接数过多，必然导致 OOM，并且线程太多，反而会因为频繁上下文切换导致性能降低
  * 可以采用线程池技术来减少线程数和线程上下文切换，但治标不治本，如果有很多连接建立，但长时间 inactive，会阻塞线程池中所有线程，因此不适合长连接，只适合短连接
### 服务器端
```java
    public static void main(String[] args) throws IOException {
        ServerSocketChannel ssc = ServerSocketChannel.open();//创建服务器
        ByteBuffer buffer = ByteBuffer.allocate(16);
        ssc.bind(new InetSocketAddress(8080));//监听8080端口
        //创建连接
        List<SocketChannel> channels=new ArrayList<>();
        while(true){
            log.debug("connecting");
            SocketChannel socketChannel = ssc.accept();//线程停止运行
            channels.add(socketChannel);
            for (SocketChannel channel : channels) {
                channel.read(buffer);
                buffer.flip();
                buffer.clear();
            }
        }
    }
```
### 客户端
```java
SocketChannel sc=SocketChannel.open();
sc.connent(new InetSocketAddress('localhost',8080))
System.out.println('waiting')
```
## 非阻塞模式
- 非阻塞模式不管是accept还是read都不会让线程暂停
  - 在ServerSocketChannel.accept()没有建立连接会返回SocketChannel是null
  - 在SocketChannel.read没有数据时，会返回0，不会阻塞，也可以执行read或者accept方法
- 但是缺点是没有建立连接和刻度数据，线程仍然需要运行，浪费cpu
- 数据复制，线程还是阻塞
### 服务器端修改
```java
    public static void main(String[] args) throws IOException {
        ByteBuffer buffer = ByteBuffer.allocate(16);
        ServerSocketChannel ssc=ServerSocketChannel.open();
        ssc.configureBlocking(false);//设置非阻塞模式
        ssc.bind(new InetSocketAddress(8080));
        List<SocketChannel> channels=new ArrayList<>();
        while(true){
            SocketChannel sc = ssc.accept();
            if(sc!=null){
                sc.configureBlocking(false);
                channels.add(sc);
            }
            for (SocketChannel channel : channels) {
                int read = channel.read(buffer);
                if(read>0){
                    buffer.flip();
                    buffer.clear();
                }
            }
        }
    }
```
### 多路复用
单线程可以配合Selector完成对多个channel可读写事件的监控，称为多路复用
- 多路复用只针对网络，IO，普通文件没法利用多路复用
- 如果不使用selector，线程在没有连接请求的时候也会占用cpu，但是selector可以保证
  - 有事件连接才去读取
  - 有可读事件才去读取
  - 有可写事件才去读取
    - 限于网络传输能力，channel未必时时可写，一旦channel可写，会触发selector的可写事件
## selector

### 好处
- 一个线程配合selector可以监控多个channel事件，事件发生线程才去处理
- 线程充分利用
- 节约线程数量
- 减少线程上下文切换

### 创建
```java
        Selector selector = Selector.open();
```
### 绑定socketChannel事件
只有注册后的事件selector才会关心
```java
        Selector selector = Selector.open();
        SocketChannel socketChannel = SocketChannel.open();
        socketChannel.register(selector,绑定事件);
```
- channel必须工作在非阻塞模式
- fileChannel没有非阻塞模式也就不能使用selector
- 绑定事件类型
  - connent - 客户端连接成功触发
  - accept - 服务器端成功接受触发
  - read - 数据可读入触发
  - write - 数据可写入触发
  ### 监听channel事件
  #### 方法1:阻塞到绑定事件发生
  ```java
  int count=selector.select();
  ```
  #### 方法2：阻塞到绑定事件发生或者超时
  ```java
  int count=selector.select(long times);
  ```
  #### 方法3：不会阻塞，也就是不管有没有事件，立刻返回，自己根据返回值检查是否有事件
  ```java
  int count=selector.selectNow();
  ```
  ### 💡 select 何时不阻塞

> * 事件发生时
>   * 客户端发起连接请求，会触发 accept 事件
>   * 客户端发送数据过来，客户端正常、异常关闭时，都会触发 read 事件，另外如果发送的数据大于 buffer 缓冲区，会触发多次读取事件
>   * channel 可写，会触发 write 事件
>   * 在 linux 下 nio bug 发生时
> * 调用 selector.wakeup()
> * 调用 selector.close()
> * selector 所在线程 interrupt

## 处理accept事件
客户端代码
```java
    public static void main(String[] args) throws IOException {
        try (Socket socket = new Socket("localhost", 8080)) {
            System.out.println(socket);
            socket.getOutputStream().write("world".getBytes());
            System.in.read();
        }
    }
```
服务器端代码
```java
    public static void main(String[] args) throws IOException {
        try (ServerSocketChannel channel = ServerSocketChannel.open()) {
            channel.bind(new InetSocketAddress(8080));
            Selector selector = Selector.open();
            channel.configureBlocking(false);
            channel.register(selector, SelectionKey.OP_ACCEPT);
            while(true){
                int count = selector.select();//没有绑定事件的时候阻塞，也就是没有服务端响应客户端连接前一直阻塞
                Set<SelectionKey> keys = selector.selectedKeys();//获取所有事件accept
                Iterator<SelectionKey> iter = keys.iterator();
                while(iter.hasNext()){
                    //为什么不使用增强for循环，在增强for中我们不能删除元素，但是在迭代器中我们可以删除元素
                    SelectionKey key = iter.next();
                    if(key.isAcceptable()){
                        //判断事件类型
                        try{
                        ServerSocketChannel c = (ServerSocketChannel)key.channel();
                        ByteBuffer buffer=ByteBuffer.allocate(16);
                        int read=channel.read(buffer);//正常断开返回-1
                        if(read==-1){
                            key.cancel()
                        }else{
                            buffer.flip();
                            
                        }
                        }catch(IOEcpection e){
                            e.printStarce();
                            key.cancel();
                        }
                        
                    }
                    iter.remove();//删除事件
                }
            }
        }
    }
```

### 为什么进行iter.remove()
- 在select事件触发后，将相关的key放在selectKeys中，但不会移除，such as
- 第一次触发accept事件，没有移除sscKey
- 第二次触发scKey中的read事件，在集合中还有上次的sscKey，在处理没有serverSocket连接，就会导致空指针
### 💡 cancel
- cancel会取消注册在selector的channel，并从keys集合删除key，selector不再监听channel
### 不处理边界的问题

服务器端
```java
public void Server(){
            ServerSocket ss = new ServerSocket(8080);
        while(true){
            Socket s = ss.accept();
            InputStream in = s.getInputStream();
            byte[] arr=new byte[4];
            while (true){
                int read = in.read(arr);
                if(read==-1){
                    break;
                }
                System.out.println(new String(arr,0,read));
            }
        }
}
```
客户端
```java
Socket socket=new Socket("localhost",8080);
OutputStream out=socket.getOutputStream();
out.write("hello".getBytes());
sicket.close();
```