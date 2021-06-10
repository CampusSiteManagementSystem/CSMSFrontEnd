**简要描述：**

- 查询某个时间段的空闲场地

**请求 URL：**

- `http://xx.com/api/mesh/place `

**请求方式：**

- GET

**Query Params：**

| 参数名    | 必选 | 类型   | 说明    |
| :-------- | :--- | :----- | ------- |
| building | 否   | String | 楼号 |
| floor | 否   | String | 层号 |
| room | 否   | String | 房间号 |
| date | 是   | Number | 时间 |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
      "places": [
        { "groundID":"F202","type": "室内", "building": "F","floor":"2","room":"202","description": "","isPublic":true,},
        { "groundID":"F202","type": "室外", "building": "篮球场","floor":"","description": "","isPublic":true,},      
      ]
    }
  }
}
```

**返回参数说明**

| 参数名       | 类型    | 说明                           |
| :----------  | :------ | ------------------------------ |
| places         | Array | 场地列表               |
| type         | Boolean | 室内或者室外               |
| building     | String  | 楼号         |
| floor        | Object  | 层号             |
| room         | String  | 房间号                      |
| description  | String  | 对场地的描述                     |
| isPublic       | Boolean  | 是否可以被公开                       |


**备注**

- 更多返回错误代码请看首页的错误代码描述
