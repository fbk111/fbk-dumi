# numpy函数
作者: fbk
时间：2023-1-18
地点：济南
>足够优秀再大方拥有 

## 使用arrange生成数组
在arrange生成数组可以进行type类型的zh


```python
import numpy as np
```


```python
array_2d=np.array([[1,2,3],[4,5,6]],dtype=np.int16)
print(array_2d)
```


```python
array_3D=np.array([[[1,2,3],[3,4,5]]])
print(array_3D)
print("检测维度",array_3D.ndim)
```

## 使用np.arange
arrange生成的所有数都储存在一个数组中，因为数组的类型必须都是统一的，所以在整数numpy也将他化成浮点数，这样就提高了速度


```python
arr=np.arange(0,100,2.5)
print(arr)
print(arr[0].dtype)
```

## shape
shape如果返回两个参数表示是几行几列，如果返回三个数值就是三维数组，第一个参数是几个二维数组，第二个是二维数组的行数，第三个参数是二维数组的列数


```python
print(array_3D.shape)
```

可以看到原酸结果就是一个二位数字，二维数组的行数和列数

## reshape
只要是行数和列数进行相乘，然后得到的结果和size相同就可以


```python
print(arr.size)
arr_2d=arr.reshape(5,8)
print(arr_2d)
```

## 初始化数组
如果是初始化的数组默认值为0，可以使用zeros，如果是1，使用ones，方法的形参就是shape形状


```python
zeros=np.zeros(5)
ones=np.ones((3,5))
print(zeros)
print(ones)
```


```python

```

可以看到原酸结果就是一个二位数字，二维数组的行数和列数

## reshape
只要是行数和列数进行相乘，然后得到的结果和size相同就可以


```python
print(arr.size)
arr_2d=arr.reshape(5,8)
print(arr_2d)
```

## 初始化数组
如果是初始化的数组默认值为0，可以使用zeros，如果是1，使用ones，方法的形参就是shape形状


```python
zeros=np.zeros(5)
ones=np.ones((3,5))
print(zeros)
print(ones)
```

## array
使用array可以生成数组


```python
row_students=[1,2,3,4,5,6]
row_math=[66,34,88,96,57,70]
row_English=[58,22,100,49,65,34]
row_Sport=[88,94,38,29,20,80]
student=np.array([row_students,row_math,row_English,row_Sport])
print(student)
print(student[1:,3])
print(student.shape)
```


```python

```

可以看到原酸结果就是一个二位数字，二维数组的行数和列数

## reshape
只要是行数和列数进行相乘，然后得到的结果和size相同就可以


```python
print(arr.size)
arr_2d=arr.reshape(5,8)
print(arr_2d)
```

## 初始化数组
如果是初始化的数组默认值为0，可以使用zeros，如果是1，使用ones，方法的形参就是shape形状


```python
zeros=np.zeros(5)
ones=np.ones((3,5))
print(zeros)
print(ones)
```

## array
使用array可以生成数组


```python
row_students=[1,2,3,4,5,6]
row_math=[66,34,88,96,57,70]
row_English=[58,22,100,49,65,34]
row_Sport=[88,94,38,29,20,80]
student=np.array([row_students,row_math,row_English,row_Sport])
print(student)
print(student[1:,3])
print(student.shape)
```

在读取的时候可以根据行和列读取，上述就是从第二行第四列读取到最后

### 读取1，3，5行数


```python
print(student[:,::2])
```

### 根据条件读取np中的数据
根据np.where使用条件筛选


```python
mask=(student>=60)&(student<90)
print(np.where(mask,student,np.nan))
```

使用这个条件就可以进行替换并且选出条件数值

### argwhere
可以显示符合数据的索引


```python
print(np.argwhere(mask))
```

## 广播



```python
eye=np.eye(5)
print(eye)
```


```python
print(eye+np.array([0.1,0.2,0.3,0.4,0.5]))
```


```python
print(eye+np.array([[10],[20],[30],[40],[50]]))
```

## 查看横轴或者纵轴的最大值
axis=0查看纵轴最大值，axis=1查看横轴最大值

三维数组当axis=0是每个二维数组进行逐个对比，axis=1是在每个二维数组的纵轴进行比较，然后选出最大值，最后进行比较，axis=2是在横轴进行对比


```python
print(student.max(axis=0))
```

## 随机生成数组


```python
arr2=np.random.randint(1,10,size=(3,2,3))
print(arr2)
```

## 创建平均数组
创建一个从0，5平均分成10分


```python
arr3=np.linspace(0,5,10)
print(arr3)
```

## 拷贝
使用view生成的是浅拷贝内容
使用copy生成的是一个新的数组


```python
arr4=student.view()
print(arr4)
```


```python
arr_copy=arr3.copy()
print(arr_copy)
```

## 数组的去重和合并
使用unique可以进去重
使用concatenate进行合并
使用delete进行删除
使用insert在特定位置进行插入数组


```python
arr5=np.array([1,2,2,31,1,2,3])
print(arr5)
print(np.unique(arr5))
```


```python
arr_demo=np.array([100,200])
print(np.concatenate(arr5,arr_demo)
```


```python

```

可以看到原酸结果就是一个二位数字，二维数组的行数和列数

## reshape
只要是行数和列数进行相乘，然后得到的结果和size相同就可以


```python
print(arr.size)
arr_2d=arr.reshape(5,8)
print(arr_2d)
```

    40
    [[ 0.   2.5  5.   7.5 10.  12.5 15.  17.5]
     [20.  22.5 25.  27.5 30.  32.5 35.  37.5]
     [40.  42.5 45.  47.5 50.  52.5 55.  57.5]
     [60.  62.5 65.  67.5 70.  72.5 75.  77.5]
     [80.  82.5 85.  87.5 90.  92.5 95.  97.5]]
    

## 初始化数组
如果是初始化的数组默认值为0，可以使用zeros，如果是1，使用ones，方法的形参就是shape形状


```python
zeros=np.zeros(5)
ones=np.ones((3,5))
print(zeros)
print(ones)
```

    [0. 0. 0. 0. 0.]
    [[1. 1. 1. 1. 1.]
     [1. 1. 1. 1. 1.]
     [1. 1. 1. 1. 1.]]
    

## array
使用array可以生成数组


```python
row_students=[1,2,3,4,5,6]
row_math=[66,34,88,96,57,70]
row_English=[58,22,100,49,65,34]
row_Sport=[88,94,38,29,20,80]
student=np.array([row_students,row_math,row_English,row_Sport])
print(student)
print(student[1:,3])
print(student.shape)
```

    [[  1   2   3   4   5   6]
     [ 66  34  88  96  57  70]
     [ 58  22 100  49  65  34]
     [ 88  94  38  29  20  80]]
    [96 49 29]
    (4, 6)
    

在读取的时候可以根据行和列读取，上述就是从第二行第四列读取到最后

### 读取1，3，5行数


```python
print(student[:,::2])
```

    [[  1   3   5]
     [ 66  88  57]
     [ 58 100  65]
     [ 88  38  20]]
    

### 根据条件读取np中的数据
根据np.where使用条件筛选


```python
mask=(student>=60)&(student<90)
print(np.where(mask,student,np.nan))
```

    [[nan nan nan nan nan nan]
     [66. nan 88. nan nan 70.]
     [nan nan nan nan 65. nan]
     [88. nan nan nan nan 80.]]
    

使用这个条件就可以进行替换并且选出条件数值

### argwhere
可以显示符合数据的索引


```python
print(np.argwhere(mask))
```

    [[1 0]
     [1 2]
     [1 5]
     [2 4]
     [3 0]
     [3 5]]
    

## 广播



```python
eye=np.eye(5)
print(eye)
```

    [[1. 0. 0. 0. 0.]
     [0. 1. 0. 0. 0.]
     [0. 0. 1. 0. 0.]
     [0. 0. 0. 1. 0.]
     [0. 0. 0. 0. 1.]]
    


```python
print(eye+np.array([0.1,0.2,0.3,0.4,0.5]))
```


```python
print(eye+np.array([[10],[20],[30],[40],[50]]))
```

    [[11. 10. 10. 10. 10.]
     [20. 21. 20. 20. 20.]
     [30. 30. 31. 30. 30.]
     [40. 40. 40. 41. 40.]
     [50. 50. 50. 50. 51.]]
    

## 查看横轴或者纵轴的最大值
axis=0查看纵轴最大值，axis=1查看横轴最大值

三维数组当axis=0是每个二维数组进行逐个对比，axis=1是在每个二维数组的纵轴进行比较，然后选出最大值，最后进行比较，axis=2是在横轴进行对比


```python
print(student.max(axis=0))
```

    [ 88  94 100  96  65  80]
    

## 随机生成数组


```python
arr2=np.random.randint(1,10,size=(3,2,3))
print(arr2)
```

    [[[8 7 8]
      [6 2 6]]
    
     [[5 4 1]
      [7 8 4]]
    
     [[9 2 5]
      [7 5 8]]]
    

## 创建平均数组
创建一个从0，5平均分成10分


```python
arr3=np.linspace(0,5,10)
print(arr3)
```

    [0.         0.55555556 1.11111111 1.66666667 2.22222222 2.77777778
     3.33333333 3.88888889 4.44444444 5.        ]
    

## 拷贝
使用view生成的是浅拷贝内容
使用copy生成的是一个新的数组


```python
arr4=student.view()
print(arr4)
```

    [[  1   2   3   4   5   6]
     [ 66  34  88  96  57  70]
     [ 58  22 100  49  65  34]
     [ 88  94  38  29  20  80]]
    


```python
arr_copy=arr3.copy()
print(arr_copy)
```

    [0.         0.55555556 1.11111111 1.66666667 2.22222222 2.77777778
     3.33333333 3.88888889 4.44444444 5.        ]
    

## 数组的去重和合并
使用unique可以进去重
使用concatenate进行合并
使用delete进行删除
使用insert在特定位置进行插入数组


```python
arr5=np.array([1,2,2,31,1,2,3])
print(arr5)
print(np.unique(arr5))
```

    [ 1  2  2 31  1  2  3]
    [ 1  2  3 31]
    


```python
arr_demo=np.array([100,200])
print(np.concatenate(arr5,arr_demo)
```


      Cell In [56], line 2
        print(np.concatenate(arr5,arr_demo)
                                           ^
    SyntaxError: unexpected EOF while parsing
    



```python

```
