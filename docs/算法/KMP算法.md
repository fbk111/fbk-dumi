# KMP算法

作者: fbk
时间：2022-12-19
地点：济南
>足够优秀再大方拥有

## 前缀表

## 例(aabaaf)
### 前缀(不包含尾字母)
- a
- aab
- aaba
- aabaa
### 后缀(不含首字母的字符串)
- af
- aaf
- baaf
- abaaf
### 最长相等前后缀
- a 0
- aa 1
- aab 0
- aaba 1
- aabaa 2
- aabaaf 0
### next数组
遇见冲突
## 例题
```java
// 0 1 0 1 2 0
//i是后缀，j是前缀
public boolean repeatedSubstringPattern（String s）{
    if(s.equals("") ) return false;
    s+=" "+s;
    char[] chars=s.toCharArray();
    int len=s.length();
    int [] next=new int[len+1];
    for(int i=2,j=0;i<len;i++){
        while(j>0&&chars[i]!=chars[j+1]) j=next[j];
    }
}
```