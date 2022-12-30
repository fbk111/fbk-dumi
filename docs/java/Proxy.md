# Proxy
作者: fbk
时间：2022-12-19
地点：济南
>足够优秀再大方拥有

# 1.前言
## 1.`Proxy`的应用为何如此广泛
相信不少的同学在js或者是java上都看见过Proxy
js:Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
java:代理模式（Proxy）是通过代理对象访问目标对象，这样可以在目标对象基础上增强额外的功能，如添加权限，访问控制和审计等功能。
```js
let obj={
    func:function(){
        console.log(111)
    }
}
let o=new Proxy(obj,{
    get(target,key){
        console.log('执行方法前面')
        target[key]()
        console.log('执行方法后面')
    }
})
o.demo
/*
执行方法前面
Demo1.html:13 111
Demo1.html:22 执行方法后面
*/
```
java的代理其实分为静态代理和cglib代理，spring采用的是cglib代理
静态代理，`以下均为在src目录下直接创建`
```java
public interface AdminService{
    void update();
    Object find();
} 
public class AdminServiceImpl implements AdminService{
    public void update(){

System.out.println('我是更新操作')
    }
    public void find(){
        System.out.println('我是查找操作')
    }
}

public class AdminServiceProxy{
    private AdminService AdminService;
    public AdminServiceProxy(AdminService adminService){
       this.adminServvice=adminService;
    }
    public void update(){
        System.out.println('我是更新上一步操作');
        adminService.update();
        System.out.println('我是更新下一步操作');
    }
}

public class Demo{
    public static void main(String [] args){
     AdminService adminService=new AdminServiceImpl();
     AdminServiceProxy proxy=new AdminServiceProxy(adminService);
     proxy.update();
    }
}
```
由此可见，静态代理是在目标对象不会改变的情况下，实现了对目标的拓展，但是我们的接口一旦增加了方法，后边的操作都要修改
# 动态代理
```java
//AdminSerivce和AdminServiceImpl如上图所示，不在重写
public class AdminServiceInvocation implements InvocationHandler {
private Object target;//代理对象
public AdminServiceInvocation(Object target){
    this.target=target;
}
public Object invoke(Object proxy,Method method,Object [] args){
    System.out.println('我是使用动态代理的方法')
    Object obj=method.invode(target);
    System.out.println('我是使用动态代理操作后的方法')
    return obj;
}

}

public class AdminServiceDynamicProxy(){
    private Object proxy;

    private AdminServiceInvocation adminServiceInvocation;
    public AdminServiceDynamicProxy(Object target,AdmionServiceInvocation adminServiceInvocation){
        this.proxy=proxy;
        this.adminServiceInvocation=adminServiceInvocation
    }
    
    public Object getPersonProxy{
        return Proxy.newInstance(target.getClass().getClassLoader(),,target.getClass().getInterface(),adminServiceInvocation);
    }
}

public class Demo{
    public static void main(String [] args){
        AdminService adminService=new AdminServiceImpl();
        AdminServiceInvocation adminServiceInvocation=new AdminServiceInvocation(adminService);//创建invocationHandler实例
        AdminService proxy=(AdminService)new AdminServiceDynamicProxy(adminService,adminServiceInvocation);
        proxy.update();
    }
}
```

# cglib：直接在对象上操作，而不是在一个实现接口的对象上操作
```java
public class AdminService{
    public void update(){

System.out.println('我是更新操作')
    }
    public void find(){
        System.out.println('我是查找操作')
    }
}


public class AdminServiceCglibProxy implements MethodInterceptor {
    private Object target;
    public AdminServiceCglibProxy(Object target){
        this.target=target;
    }
    public Object getProxyInstance(){
        Enhancer en=new Enhancer();
        en.setSupperclass(target.getClass());
        en.setCallback(this);
        return en.create();//治理并没有图稿一个接口的形参，这就是cglib
    }
    public Object intercept(Object object,Method method,Object [] args,MethodProxy proxy){
    System.out.println('我是执行前面');
    method,invoke(target);
    System.out.println('我是执行后面');
    }

    public class Demo(){
        public static void main(String [] args){
            AdminService adminService=new AdminService();
            AdminServiceCglibProxy adminServiceCglibProxy=new AdminServiceCglibProxy();
            AdminService proxy=(AdminService)adminServiceCglibProxy.getProxyInstance();
            proxy.update();
        }
    }
}
```
# 总结·
其实并不难发现，cglib与js的Proxy跟为相似也只有和他能相似（因为js新特性中只给了class但是没有给interface概念）

