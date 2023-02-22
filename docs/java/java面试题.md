# java面试题
作者: fbk
时间：2023-2-21
地点：天津
>足够优秀再大方拥有

## HashTable和ConcurrentHashMap

1. HashTable和ConcurrentHashMap都是线程安全的
2. hashTable都对应一把锁，只有一个线程操作他
3. 1.8之前concurrentHashMap使用了segment+数组+链表的结构，每个segment对应一把锁
4. 1.8开始concurrentHashMap将数组的每个头节点作为锁


一开始segment的初始容量是16个`(数组的容量也要符合2^n)`，也就证明可以有16个线程同时进行操作
![](../img/2023-2-22/concurrentHashMap.png)
在添加key为a的一项数据，a的原始hash是97，经过concurrentHashMap
```java
            int hash = spread(key.hashCode());
```
这个方法会再次生成一个二次hash，通过二次哈希我们将他转换为二进制

最终的结果就是`1100 1011 1110 1100 1000 1100 0001 0000`,找到这个数的高次位`1100`换算成10进制就是12，所以存放在12的segment的下标，在segment下标位12的地方，还要进行细分索引位置，上述二级制结果的最后一位就是存放在segment位置的下标

### 扩容的条件
1. 排除初始化集合的大小，在以后向集合添加元素，当集合的元素长度>=集合的长度的四分之三，就要进行扩容，对集合大小*2
2. 在一开始初始化集合长度是要考虑集合的`capacity和factor`这两个因素，capacity表示将来要放多少个元素
   - 假设capacity是12，factor是0.75，初始化集合长度是16的话，放入集合12个元素，集合容量还是要进行扩容，所以集合的长度应该设置为32

### 扩容的流程

1. 一个数组在满足里边的数组容量大于等于四分之三的情况下，那么就要进行扩容，扩容会在每个数组的末尾开始，每个segment的下标在经过扩容后会显示forwardingNode
2. segment下标下如果只有一个元素，那么就是直接将这个元素进行复制到新扩容的数组中去
3. 如果是多个元素的情况下，就要考虑重新对链表的元素排序
4. 假设在扩容的时候我们进行了put或者get，在迁移之前也就是segment没有变成forwardingNode的情况下，可以进行get或者put，
5. 如果put或者get的是当前正在迁移的链表，只能将这个线程进行阻塞
6. 如果是get或者put是后续已经处理的segment下标，也就是变成forwardingNode的下标，是不可以去新的数组中取出元素的，而是要帮忙将老的线程扩容到新的线程
![](../img/2023-2-22/concurment%E6%89%A9%E5%AE%B9.png)


## springApplication refresh
在这个步骤我们可以注解在类上的属性的获取properties文件的值
```java
/**
 * @Author 房博坤
 * @Date 2023/2/22 16:15
 * @Version 1.0.1
 */
public class TestEnviroment {
    public static void main(String[] args) throws NoSuchFieldException, IOException {
        System.out.println("获取@value值");

        QualifierAnnotationAutowireCandidateResolver resolver = new QualifierAnnotationAutowireCandidateResolver();

        Object name = resolver.getSuggestedValue(new DependencyDescriptor(Bean1.class.getDeclaredField("name"), false));

        System.out.println(name);

        System.out.println("解析value的值");

        Object javaHome = resolver.getSuggestedValue(new DependencyDescriptor(Bean1.class.getDeclaredField("javaHome"), false));

        System.out.println(javaHome);


        System.out.println("解析sqlEl表达式");

        Object expression = resolver.getSuggestedValue(new DependencyDescriptor(Bean1.class.getDeclaredField("expression"), false));

        System.out.println(expression);

        System.out.println(getEnvironment().resolvePlaceholders(expression.toString()));

        System.out.println("");
    }

    private static Environment getEnvironment() throws IOException {
        StandardEnvironment env = new StandardEnvironment();
        env.getPropertySources().addLast(new ResourcePropertySource("jdbc",new ClassPathResource("jdbc properties")));
        return env;
    }

    static class Bean1{

        @Value("hello")
        private String name;

        @Value("${JAVA_HOME}")
        private String javaHome;


        @Value("#{'class version:'+'${java.class.version}'}")
        private String expression;
    }
}

```

可以通过`QualifierAnnotationAutowireCandidateResolver`类的`getSuggestedValue(new DependencyDescriptor(Bean1.class.getDeclaredField("name"), false));`获取属性注解@value的值


## obtainFreshBeanFactory

- 获取beanFactory，beanFactory负责bean的创建，依赖注入和初始化

- BeanDefinition作为bean的设立蓝图，规定了bean的特征，如单例多例，依赖关系，初始销毁

1. 在最开始可以获取默认的beanFactory

```java
        System.out.println("一开始");

        DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();

        System.out.println(Arrays.toString(beanFactory.getBeanDefinitionNames()));
```
2. 从xml获取加载bean定义
```java
        System.out.println("从xml获取");

        XmlBeanDefinitionReader reader1 = new XmlBeanDefinitionReader(beanFactory);

        reader1.loadBeanDefinitions(new ClassPathResource("ld.xml"));

        System.out.println(Arrays.toString(beanFactory.getBeanDefinitionNames()));
```
3. 从配置类进行获取
```java
        System.out.println("从配置类获取");

        beanFactory.registerBeanDefinition("config1", BeanDefinitionBuilder.genericBeanDefinition(Config1.class).getBeanDefinition());

        ConfigurationClassPostProcessor postProcessor = new ConfigurationClassPostProcessor();

        postProcessor.postProcessBeanDefinitionRegistry(beanFactory);

        System.out.println(Arrays.toString(beanFactory.getBeanDefinitionNames()));
```
4. 包扫描获取

```java
        System.out.println("包扫描");

        ClassPathBeanDefinitionScanner scanner = new ClassPathBeanDefinitionScanner(beanFactory);

        scanner.scan("day04.refresh.sub");

        System.out.println(Arrays.toString(beanFactory.getBeanDefinitionNames()));
```
```java
    static class Config1{
        @Bean
        public Bean2 bean2(){
            return new Bean2();
        }
    }

    static class Bean1{

    }
    static class Bean2{

    }
```
## 准备bean工厂

`完善beanFactory`

- standardBeanExpressionResolver来解析SQLEL
- ResoueceEditorRegister会注释类型转换器，并且ApplicationContext提供的Enviroment完成${}解析
- 特殊bean指beanFactory以及ApplicationContext，通过registerResolveableDependency来注册
- ApplicationContextAwareProcessor用来解析Aware接口

## postProcessBeanFactory

`子类拓展器`

一般ApplciationContext都要利用呀注册新的scope，完善web的BeanFactory


## invokeBenaFactoryPostProcessors

`bean后处理器的作用`

- beanFactory后处理器，充当beanFactory拓展点
- ConfigurationClassPostProcessor 解析`@Configuration,@Bean,@Import,@PropertySource`


## registerBeanPostProcessors

## 拓展beanFactory处理器

```java
public class TestBeanPostProcessor {

    public static void main(String[] args) {
        GenericApplicationContext context = new GenericApplicationContext();

        DefaultListableBeanFactory beanFactory = context.getDefaultListableBeanFactory();

        beanFactory.registerBeanDefinition("bean1", BeanDefinitionBuilder.genericBeanDefinition(Bean1.class).getBeanDefinition());
        beanFactory.registerBeanDefinition("bean2", BeanDefinitionBuilder.genericBeanDefinition(Bean2.class).getBeanDefinition());
        beanFactory.registerBeanDefinition("bean3", BeanDefinitionBuilder.genericBeanDefinition(Bean3.class).getBeanDefinition());

        context.refresh();

        beanFactory.getBean(Bean1.class).foo();

        //在执行的过程中发现并不能执行注解相关操作，那么就要配置后处理器进行解析注解

    }

    static class Bean1{
      Bean2 bean2;
      Bean3 bean3;

      @Autowired
        public void setBean2(Bean2 bean2) {
            this.bean2 = bean2;
        }

        @Resource
        public void setBean3(Bean3 bean3) {
            System.out.println("执行了注解")
            this.bean3 = bean3;
        }

        public void foo(){
            System.out.println("foo");
        }
    }

    @Aspect
    static class Bean2{

    }
    @Before("execution(* foo())")
    static class Bean3{

    }


    static class Aspect1{

        public void before(){
            System.out.println("before...");
        }
    }
}
```
```
foo
```
没有加入拓展器我们就不能识别这些注解，所以要去beanFactory去注册可以解析@Autowired注解解析器

```java
        //解析@autowared,@value注解
        beanFactory.registerBeanDefinition("processor1",BeanDefinitionBuilder.genericBeanDefinition(AutowiredAnnotationBeanPostProcessor.class).getBeanDefinition());

        //解析resource，preDestroy，PostConstruct注解
        beanFactory.registerBeanDefinition("processor2",BeanDefinitionBuilder.genericBeanDefinition(CommonAnnotationBeanPostProcessor.class).getBeanDefinition());

        //注解aspect和after，before等注解
        beanFactory.registerBeanDefinition("processor3",BeanDefinitionBuilder.genericBeanDefinition(AnnotationAwareAspectJAutoProxyCreator.class).getBeanDefinition());
```
通过向beanFactory注册注释解析器就可以实现注解解析

## initMessageSource

applicationContext进行功能增强，国际化增强

先找到ApplicationContext里边是否存在messageSource的bean，如果没有，则提供空的MessageSource实现，这个功能只存在ApplicationContext当中

## initApplicationEventMulticaster

- 用来发布事件给监听器
- 可以从容器中找到名为ApplicationEventMulticaster的bean作为时间监听广播器，若没有，也会创建新的事件广播器
- 可以调用ApplicationContext.publishEvent来发布事件
## onRresh

`空实现`

## registerListeners

- 用来接收事件
- 一部分监听器是事先编程添加的，另一部分监听器来自容器中的bean，还有一部分来源于@EventListener的解析

- 接收事件实现ApplicationListener接口，重写其中的onApplicationEvent(E e)方法即可


## finishBeanFactoryInitlialization

- conversionService是一套转换机制，作为对PropertyEditor的补充
- 单例池用来缓存所有的单例对象，对象创建都分为三部分，每一阶段都有不同的bean后处理器参与，拓展功能

## finishRefresh
- 控制容器内需要生命周期管理的bean
- 如果容器中名称为lifecycleProcessor的bean就用它，否则创建默认生命周期管理器，相当于这个生命周期start，继承lifeCycle的bean就开始start，生命周期end，继承lifeCycle的bean就开始end
