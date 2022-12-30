# 写一个ts

作者: fbk
时间：2022-12-23
地点：济南
>足够优秀再大方拥有

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button >随即一只猫</button>
    <table>
        <thead>
            <tr>
                <th>图片id</th>
                <th>图片预览</th>
                <th>图片高度</th>
                <th>图片宽度</th>
                <th>图片地址</th>
                <th>删除图片</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>idxxx</td>
                <td>img</td>
                <td>高度xxx</td>
                <td>宽度xxx</td>
                <td>地址xxx</td>
                <td><a href="#"></a></td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```


```ts
//初始化ts配置文件tsc--init
//初始化js文件tsc
//tec-s:只要ts文件保存，就会更新js文件
const url:String=''
const button:HTMLButtonElement| null=document.querySelector('button')
const tableBody:HTMLBodyElement|null=document.querySelector('body')
interface CatType{
    id:String;
    url:String
    height:number
    width:number
    test?:boolean
}
class Cat implements CatType{
    id:String
    url:String
    height:number
    width:number
    test?:boolean
    constructor(id:string,url:string,height:number,width:number){
        this.id=id
        this.url=url
        this.height=height
        this.width=width
    }
}
class WebDisplay{
    public static addData(data:CatType):void{
        const cat:Cat=new Cat(data.id,data.url,data.height,data.width)
        const tableRow:HTMLTableRowElement=document.querySelector('tr')
        tableRow.innerHTML=`
        <td>${cat.id}</td>
        <td>${cat.url}</td>
        <td>${cat.height.toString()}</td>
        <td>${cat.width.toString()}</td>
        <td>${cat.url}</td>
        <td><a href="#"></a></td>`
        tableBody?.append(tableRow)
    }
    public static deleteData(deleteButton:HTMLAnchorElement):void{
      const td=deleteButton.parentElement as HTMLTableCellElement
      const tr=td.parentElement as HTMLTableRowElement
      tr.remove()
    }
}
async function getJSON<T>(url:String):Promise<T> {
    const response:Response=await fetch(url)
    const json:Promise<T>=await response.json()
    return json
}
async function getData() {
    try {
        const json:CatType[]=await getJSON<CatType[]>(url)
        const data:CatType=json[0]
        WebDisplay.addData(data)
    } catch (error:Error|unknown) {
        let message:string
        if(error instanceof Error){
            message=error.message

        }else{
            message=String(error)
        }
        console.log(error)
    }
}
button?.addEventListener<'click'>('click',getData)
tableBody?.addEventListener<'click'>('click',(ev:MouseEvent)=>{
    WebDisplay.deleteData(<HTMLAnchorElement>ev.target)
})
```