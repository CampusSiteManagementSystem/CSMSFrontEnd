**简要描述：**

- 查询某个时间段的空闲场地

**请求 URL：**

- `http://xx.com/api/mesh/building `

**请求方式：**

- GET

**Query Params：**

| 参数名    | 必选 | 类型   | 说明    |
| :-------- | :--- | :----- | ------- |
| date | 是   | Number | 时间 |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
      "buildings": [
        { "type": "室内", "building": "F","description":"",
        "isPublic":true,
        "coordinates":["121.21004743281384", "31.288682727520325"],
        "allRooms":"20",
        "freeRooms":"2",
        },   
      ]
    }
  }
}
```

**返回参数说明**

| 参数名       | 类型    | 说明                           |
| :----------  | :------ | ------------------------------ |
| buildings         | Array | 场地列表               |
| type         | Boolean | 室内或者室外               |
| building     | String  | 楼号         |
| description  | String  | 对场地的描述                     |
| isPublic       | Boolean  | 是否可以被公开                       |
|coordinates|Array|经纬度|
|allRooms|Number|房间数目|
|freeRooms|Number|空闲房间数目|


**备注**

- 更多返回错误代码请看首页的错误代码描述
