**简要描述：**

- 获取场地占用信息接口
- 权限：all

**请求 URL：**

- `http://xx.com/api/mesh/getSiteOccupation`

**请求方式：**

- GET

**Data：**

| 参数名         | 必选 | 类型 | 说明 |
| :------------- | :--- | :--- | ---- |
| 也许是当前时间 |      |      |      |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "token":"token",
		"occupation":[{
      		"position": "F201",
          "activityName": "数据结构",
    }]
  }
}
```

**返回参数说明**

| 参数名       | 类型    | 说明                   |
| :----------- | :------ | ---------------------- |
| isSuccess    | Boolean | 是否成功登录           |
| msg          | String  | 错误信息，若成功返回空 |
| token        | String  | token                  |
| position     | String  | 地点                   |
| activityName | String  | 活动名称               |
| occupation   | Array   | 场地占用信息列表       |

**备注**

- 更多返回错误代码请看首页的错误代码描述