**简要描述：**

- 查询该场地的详细信息和占用时间

**请求 URL：**

- `http://xx.com/api/mesh/schedule `

**请求方式：**

- GET

**Query Params：**

| 参数名    | 必选 | 类型   | 说明    |
| :-------- | :--- | :----- | ------- |
| groundID | 是   | String | 场地ID |
| date | 是   | Number | 时间 |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "type": ,
    "building": "",
    "floor": {
      "room": "",
      "capacity": "",
      "description": "",
      "isPublic": true,
      "occupation": [
        { "class1": "操作系统", "class2": "操作系统","class3":"操作系统","class4": "","class5":"","class6": "","class7": "","class8": "", "class9": "","class10": "","class1": "",},
        { "class1": "操作系统", "class2": "操作系统","class3":"操作系统","class4": "","class5":"","class6": "","class7": "","class8": "", "class9": "","class10": "","class1": "",},
        { "class1": "操作系统", "class2": "操作系统","class3":"操作系统","class4": "","class5":"","class6": "","class7": "","class8": "", "class9": "","class10": "","class1": "",},
        { "class1": "操作系统", "class2": "操作系统","class3":"操作系统","class4": "","class5":"","class6": "","class7": "","class8": "", "class9": "","class10": "","class1": "",}
        { "class1": "操作系统", "class2": "操作系统","class3":"操作系统","class4": "","class5":"","class6": "","class7": "","class8": "", "class9": "","class10": "","class1": "",}
        { "class1": "操作系统", "class2": "操作系统","class3":"操作系统","class4": "","class5":"","class6": "","class7": "","class8": "", "class9": "","class10": "","class1": "",}
        { "class1": "操作系统", "class2": "操作系统","class3":"操作系统","class4": "","class5":"","class6": "","class7": "","class8": "", "class9": "","class10": "","class1": "",}
      ]
    }
  }
}
```

**返回参数说明**

| 参数名       | 类型    | 说明                           |
| :----------  | :------ | ------------------------------ |
| type         | Boolean | 室内或者室外               |
| building     | String  | 楼号         |
| floor        | Object  | 层号             |
| room         | String  | 房间号                      |
| capacity     | Number  | 容量             |
| description  | String  | 对场地的描述                     |
| occupation   | Array   | 占用时间表 |
| class1       | String  | 第一节课在该场地开展的活动名                       |


**备注**

- 更多返回错误代码请看首页的错误代码描述
