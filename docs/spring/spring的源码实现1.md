# spring源码编写day1

作者: fbk
时间：2022-12-15
地点：济南
>足够优秀再大方拥有 
## `代码地址`:[gitee](<https://gitee.com/fang-bokun/spring-source-code.git>)
## 1.前言
`💥为什么要去深入理解一下spring`

spring对于现在的java开发程序员可以说是一个饭碗，其中的设计理念如果可以理解的话绝对是最自己的代码水平有所提高的，要想深入的学习，我之前尝试过自己去看spring源码，发现代码体系太过庞大，学一会就学晕了，所以我选择从0开始，去学习一下spring的源码

## 2.begin
### 1.component和componentScan
component和componentScan的实现，在spring中，我们最重要的是要进行包扫描，注入容器，所以这两个注解必不可少，获取注解的方法和简单，就是通过
```java
  ComponentScan componentScan = (ComponentScan) configClass.getDeclaredAnnotation(ComponentScan.class);
```
### 2.三大类加载器
- 1.BootStrap ClassLoader:最顶层的加载类，主要加载核心类库
- 2.Extension ClassLoader:拓展的类加载器
- 3.App ClassLoader：加载当前应用的classpath

### 3.加载扫描包下有component注解的类
```java
         ClassLoader classLoader = FbkApplicationContext.class.getClassLoader();
         URL resource = classLoader.getResource("com/service");//获取扫描包
         File file=new File(resource.getFile());//获取文件目录
         if (file.isDirectory()) {
             File[] files = file.listFiles();
             for (File file1 : files) {
                 /**
                  * 输出System.out.println(file1.getAbsolutePath());
                  * C:\Users\lenovo\Desktop\WriteMaven\target\classes\com\service\Untils.class
                  * C:\Users\lenovo\Desktop\WriteMaven\target\classes\com\service\UserService.class
                  */
                 String absolutePath = file1.getAbsolutePath();//获取绝对路径
                 if(absolutePath.endsWith("class")) {
                     String substring = absolutePath.substring(absolutePath.indexOf("com"), absolutePath.lastIndexOf(".class")).replace("\\", ".");//替换成com.service的形式
                     try {
                         Class<?> aClass = classLoader.loadClass(substring);//类加载
                         if (aClass.isAnnotationPresent(Component.class)) {
 
                         }
                     } catch (ClassNotFoundException e) {
                         throw new RuntimeException(e);
                     }
                 }
             }
         }
```
### 4.类的作用域
`单例bean和原型bean的区别`<br>
- 1.单例bean全局使用一个对象
- 2.原型bean可以创建多个
- 3.上部分讲到了判断扫描的类上边是否有component的注解，所以我们接下来要对含有component注解的类进行操作<br>
1. 首先我们还是要获取`beanName`的，但是此时我们需要定义一个`BeanDefinition`
2. `why要定义一个BeanDefinition`：这其实是对类上注解的一个统计，包括在后边定义scope作用域的时候，我们都需要对`BeanDefinition`进行定义<br>
`BeanDefinition`
```java
package com.spring;
public class BeanDefinition {

    //类型
    private Class clazz;
    //作用域
    private String scope;

    public Class getClazz() {
        return clazz;
    }

    public void setClazz(Class clazz) {
        this.clazz = clazz;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }
}
```

很显然，定义了BeanDefination类后，我们就可以在一次的applicationContext加载后将所有的bean类加载到`beanDefinitionMap`中
```java
    private ConcurrentHashMap<String,BeanDefinition> beanDefinitionMap=new ConcurrentHashMap<>();
```
在扫描完包后，我们就能很清楚的知道那些类是定义的singleton，哪些定义的prototype，所以我们需要在给定义singleton的类提供一个map集合用来储存创建的实例
```java
    private ConcurrentHashMap<String,Object> singletonObjects=new ConcurrentHashMap<>();
```

```java
         for (Map.Entry<String, BeanDefinition> entry : beanDefinitionMap.entrySet()) {
             String beanName = entry.getKey();
             BeanDefinition beanDefinition = entry.getValue();
             if(beanDefinition.getScope().equals("singleton")){
                 singletonObjects.put(beanName,createBean(entry.getValue()));
             }
         }
```
`createBean`
```java
     private Object createBean(BeanDefinition beanDefinition){

         Class clazz = beanDefinition.getClazz();
         //创建实例
         try {
             Object instance = clazz.getDeclaredConstructor().newInstance();
             return instance;
         } catch (InstantiationException e) {
             throw new RuntimeException(e);
         } catch (IllegalAccessException e) {
             throw new RuntimeException(e);
         } catch (InvocationTargetException e) {
             throw new RuntimeException(e);
         } catch (NoSuchMethodException e) {
             throw new RuntimeException(e);
         }
     }
```
```java
    public Object getBean(String beanName){
         if(beanDefinitionMap.containsKey(beanName)){
             BeanDefinition beanDefinition = beanDefinitionMap.get(beanName);
             if(beanDefinition.getScope().equals("singleton")){
                 return singletonObjects.get(beanName);
             }else{
                 //创建bean对象
                return createBean(beanDefinitionMap.get(beanName));
             }
         }else{
             throw  new NullPointerException("不存在对应的bean");
         }
    }
```
- 4.TEST
1. ok,说了这么多，我们应该去测试一下代码<br>
`test`
```java
    public static void main(String[] args) {
        FbkApplicationContext fbkApplicationContext=new FbkApplicationContext(AppConfig.class);
        System.out.println(fbkApplicationContext.getBean("userService"));
        System.out.println(fbkApplicationContext.getBean("userService"));
        System.out.println(fbkApplicationContext.getBean("userService"));
    }
```
`result`
```xml
com.service.UserService@60e53b93
com.service.UserService@60e53b93
com.service.UserService@60e53b93
```
我们的答案显而易见，因为我的UserService是单例的，所以创建的路径就是相同的，也就是他们是公用一个实体类


