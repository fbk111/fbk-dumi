# Proxy
作者: fbk
时间：2022-12-19
地点：济南
>足够优秀再大方拥有

## 前言
相信不少的同学在js或者是java上都看见过Proxy
js:Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
java:代理模式（Proxy）是通过代理对象访问目标对象，这样可以在目标对象基础上增强额外的功能，如添加权限，访问控制和审计等功能。

## 静态代理
```java
/**
 * @Author 房博坤
 * @Date 2023/2/9 16:31
 * @Version 1.0.1
 */
public interface Shopping {
    void buy();
}

class Client implements Shopping{

    @Override
    public void buy() {
        System.out.println("我要买这个商品");
    }
}
class StaticProxy implements Shopping{

    private Shopping shopping;

    public StaticProxy(Shopping shopping) {
        this.shopping = shopping;
    }

    @Override
    public void buy() {
        System.out.println("疯狂大甩卖");
        shopping.buy();
    }
}

class StaticProxyTest{
    public static void main(String[] args) {
        Shopping client = new Client();
        StaticProxy staticProxy = new StaticProxy(client);
        staticProxy.buy();
    }
}
```
## jdk动态代理


动态代理可以让我们在运行时动态生成代理类，解耦程度更高。Java 动态代理的实现主要借助于 java.lang.reflect 包中的 Proxy 类与 InvocationHandler 接口，所有对动态代理对象的方法调用都会转发到 InvocationHandler 中的 invoke() 方法中实现。一般我们称实现了 InvocationHandler 接口的类为调用处理器。

```java
public static Object newProxyInstance(ClassLoader loader,
                                          Class<?>[] interfaces,
                                          InvocationHandler h) 

```

```java
/**
 * @Author 房博坤
 * @Date 2023/2/9 16:39
 * @Version 1.0.1
 */
public class DynamicProxy implements InvocationHandler {

    private Object target=null;

    public DynamicProxy(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("代理前");
        method.invoke(target,args);
        System.out.println("代理后");
        return null;
    }
}
class DyProxyTest {
    public static void main(String[] args) {
        Shopping client=new Client();
        DynamicProxy dyProxy = new DynamicProxy(client);
        Shopping shopping = (Shopping) Proxy.newProxyInstance(Shopping.class.getClassLoader(), new Class[]{Shopping.class}, dyProxy);
        shopping.buy();
    }
}
```

当然我们也可以将 Proxy.newProxyInstance 方法放到调用处理器中，使客户端编程更为简单。

```java
/**
 * @Author 房博坤
 * @Date 2023/2/9 16:39
 * @Version 1.0.1
 */
public class DynamicProxy<T> implements InvocationHandler {

    private T target=null;

    public DynamicProxy() {
    }

    public DynamicProxy(T target) {
        this.target = target;
    }

    public T bind(T target){
        this.target=target;
        return (T) Proxy.newProxyInstance(target.getClass().getClassLoader(),target.getClass().getInterfaces(),this);
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("执行前");
        method.invoke(target,args);
        System.out.println("执行后");
        return null;
    }


}
class DyProxyTest {
    public static void main(String[] args) {
        Shopping client=new Client();
        DynamicProxy<Shopping> proxy = new DynamicProxy<>();
        Shopping shopping = proxy.bind(client);
        shopping.buy();

    }
}
```


## 拦截器

```java
public interface Interceptor {
    public boolean before(Object proxy, Object target, Method method, Object[] args);
    public void around(Object proxy, Object target, Method method, Object[] args);
    public void after(Object proxy, Object target, Method method, Object[] args);
}

```

```java
public class MyInterceptor implements Interceptor {

    @Override
    public boolean before(Object proxy, Object target, Method method, Object[] args) {
        System.out.println("before");
        return false;
    }

    @Override
    public void around(Object proxy, Object target, Method method, Object[] args) {
        System.out.println("around");
    }

    @Override
    public void after(Object proxy, Object target, Method method, Object[] args) {
        System.out.println("after");
    }
}

```

## cglib代理
```java
class ClientProxy implements MethodInterceptor {

    @Override
    public Object intercept(Object proxy, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        System.out.println("before");
        Object obj = methodProxy.invokeSuper(proxy, args);
        System.out.println("after");
        return obj;
    }

}
public class CglibTest {
    public static void main(String[] args) {
        ClientProxy clientProxy = new ClientProxy();
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(Client.class);
        enhancer.setCallback(clientProxy);
        Client client = (Client) enhancer.create();
        client.buy();
    }
}

```
```
before
我想买这件商品
after
```