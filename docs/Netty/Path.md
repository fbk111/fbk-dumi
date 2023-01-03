# Path和Paths

作者: fbk
时间：2023-1-2
地点：济南
>足够优秀再大方拥有 

jdk7引入了Path和Paths类
* path表示文件路径
* Paths表示工具类
```java
Path source = Paths.get("1.txt"); // 相对路径 使用 user.dir 环境变量来定位 1.txt

Path source = Paths.get("d:\\1.txt"); // 绝对路径 代表了  d:\1.txt

Path source = Paths.get("d:/1.txt"); // 绝对路径 同样代表了  d:\1.txt

Path projects = Paths.get("d:\\data", "projects"); // 代表了  d:\data\projects
```
```java
Path path = Paths.get("d:\\data\\projects\\a\\..\\b");
System.out.println(path);
System.out.println(path.normalize()); // 正常化路径
```
## Files
检查文件是否存在
```java
Path path = Paths.get("helloword/data.txt");
System.out.println(Files.exists(path));
```

创建文件目录
```java
Path path=Paths.get('helloworld/data.txt')
Files.createDirectory(path);
```
* 如果目录已存在，会抛异常 FileAlreadyExistsException
* 不能一次创建多级目录，否则会抛异常 NoSuchFileException

创建多级目录
```java
Path path = Paths.get("helloword/d1/d2");
Files.createDirectories(path);
```

拷贝文件
```java
        Path path = Paths.get("helloworld/h1");
        Path path1 = Paths.get("helloworld/h2");
        try {
            Files.copy(path,path1);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
```

如果文件已存在需要覆盖
```java
        Path path = Paths.get("helloworld/h1.txt");
        Path path1 = Paths.get("helloworld/h2.txt");
        try {
            Files.copy(path,path1, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
```

删除文件
```java
Path target = Paths.get("helloword/target.txt");
Files.delete(target);
```

删除目录
```java
Path target = Paths.get("helloword/h1");
Files.delete(target);
```

遍历文件目录
```java
    public static void demo2() throws IOException {
        AtomicInteger dirCount = new AtomicInteger();
        AtomicInteger fileCount = new AtomicInteger();
        //为什么不同int dirCount;计数，在lambda表达式中，我们访问全局的数据类型，前边都会默认添加final修饰，所以在lambda里面改变数值不可能
//访问者模式
        Files.walkFileTree(Paths.get("C:\\Program Files\\java\\jdk1.8.0_91"),new SimpleFileVisitor<Path>(){
            //检测到目录之前
            @Override
            public FileVisitResult preVisitDirectory(Path path, BasicFileAttributes basicFileAttributes) throws IOException {
                dirCount.incrementAndGet();
                return super.preVisitDirectory(path,basicFileAttributes);
            };

            //检测到文件
            @Override
            public FileVisitResult visitFile(Path path, BasicFileAttributes basicFileAttributes) throws IOException {
                fileCount.incrementAndGet();
                return super.visitFile(path, basicFileAttributes);
            }
        });
    }
```

统计jar包数目
```java
    public static void demo3() throws IOException {
        AtomicInteger jarCount = new AtomicInteger();
        Files.walkFileTree(Paths.get("C:\\Program Files\\java\\jdk1.8.0_91"),new SimpleFileVisitor<Path>(){
            @Override
            public FileVisitResult visitFile(Path path, BasicFileAttributes basicFileAttributes) throws IOException {
                if(path.toString().endsWith(".jar")){
                    jarCount.incrementAndGet();
                }
                return super.visitFile(path, basicFileAttributes);
            }
        });
    }
```

删除多级目录
```java
    public static void demo4() throws IOException {
        Files.walkFileTree(Paths.get("C:\\Program Files\\java\\jdk1.8.0_91"),new SimpleFileVisitor<Path>(){
            @Override
            public FileVisitResult visitFile(Path path, BasicFileAttributes basicFileAttributes) throws IOException {
                Files.delete(path);
                return super.visitFile(path, basicFileAttributes);
            }

            @Override
            public FileVisitResult postVisitDirectory(Path path, IOException e) throws IOException {
                Files.delete(path);
                return super.postVisitDirectory(path, e);
            }
        });
    }
```