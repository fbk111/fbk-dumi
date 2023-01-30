# JUC-基础

作者: fbk
时间：2023-1-29
地点：济南

## 共享模型之无锁
```java
public class AccountUnsafe implements Account {
    private Integer balance;

    public AccountUnsafe(Integer balance) {
        this.balance = balance;
    }

    @Override
    public Integer getBalance() {
        return balance;
    }

    @Override
    public void withdraw(Integer amount) {
        balance -= amount;
    }

    public static void main(String[] args) {
        Account.demo(new AccountUnsafe(10000));
    }
}
```
```java
public interface Account {

    Integer getBalance();

    void withdraw(Integer amount);

    static void demo(Account account) {
        List<Thread> ts = new ArrayList<>();
        long start = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            ts.add(new Thread(() -> {
                account.withdraw(10);
            }));
        }
        ts.forEach(Thread::start);
        ts.forEach(t -> {
            try {
                t.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        long end = System.nanoTime();
        System.out.println(account.getBalance()
                + " cost: " + (end-start)/1000_000 + " ms");
    }
}
```
```
460 cost: 90 ms
```
为什么最终的结果不是0，也就是balance最终不是0
```java
    public void withdraw(Integer amount) {
        balance -= amount;
    }
```
`对应字节码`
```java
ALOAD 0                                                          // <- this
ALOAD 0
GETFIELD cn/itcast/AccountUnsafe.balance : Ljava/lang/Integer;   // <- this.balance
INVOKEVIRTUAL java/lang/Integer.intValue ()I                     // 拆箱
ALOAD 1                                                          // <- amount
INVOKEVIRTUAL java/lang/Integer.intValue ()I                     // 拆箱
ISUB                                                             // 减法
INVOKESTATIC java/lang/Integer.valueOf (I)Ljava/lang/Integer;    // 结果装箱
PUTFIELD cn/itcast/AccountUnsafe.balance : Ljava/lang/Integer;   // -> this.balance北京市昌
```