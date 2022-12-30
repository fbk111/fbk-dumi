# bind,call,apply

作者: fbk
时间：2022-12-22
地点：济南
>足够优秀再大方拥有

# 1.call
```js
        Function.prototype.newCall = function (obj) {
            obj = obj || window
            obj.p = this
            let newArguments = []
            for (var i = 1; i < arguments.length; i++) {
                newArguments.push(`arguments[${i}]`)
            }
            var result = eval(`obj.p(${newArguments})`)
            console.log('result',result)
            delete obj.p
            return result
        }
        function person(a,b,c,d) {
            return {
                name:this.name,
               a:a,b:b,c:c,d:d
            }
        }
        let obj = {
            name: 'fbk'
        }

        console.log(person.newCall(obj,'1','2','3','4'))
```
- apply()使用数组接收
```js
        Function.prototype.newApply = function (obj,arr) {
          obj=obj||window
          var result
          obj.p=this
          if(!arr){
            result=obj.p()

          }else{
            let newArguments=[]
            for(var i=0;i<arr.length;i++){
                newArguments.push(`arr[${i}]`)
            }
            result=eval(`obj.p(${newArguments})`)
          }
          delete obj.p
          return result
        }
        function person(a,b,c,d) {
            return {
                name:this.name,
               a:a,b:b,c:c,d:d
            }
        }
        let obj = {
            name: 'fbk'
        }

        console.log(person.newApply(obj,['1','2','3','4']))
```

- bind
```js
       Function.prototype.newBind=function(obj){
          var that=this
          var arr=Array.prototype.splice.call(arguments,1)
          return function(){
            var arr2=Array.prototype.slice.call(arguments)
            var arrSum=arr.concat(arr2)
            that.apply(obj,arrSum)
          }
          }
       
        function person(a,b,c,d,f) {
            console.log(a,b,c,d,f)
            console.log(this.name)
        }
        let obj = {
            name: 'fbk'
        }

        console.log(person.newBind(obj,'1','2','3','4')('5'))
```
