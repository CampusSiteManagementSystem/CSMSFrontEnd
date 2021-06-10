**简要描述：**

- 获取未来活动接口
- 权限：all

**请求 URL：**

- `http://xx.com/api/mesh/getfutureActivity`

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
		"futureActivity":[{
      		"activityName": "百团大战",
          "initiator": "社团联",
          "startDate": "2021-9-10",
          "startTime": "12:00",
          "position": "F201",
    }]
  }
}
```

**返回参数说明**

| 参数名         | 类型    | 说明                   |
| :------------- | :------ | ---------------------- |
| isSuccess      | Boolean | 是否成功登录           |
| msg            | String  | 错误信息，若成功返回空 |
| token          | String  | token                  |
| activityName   | String  | 未来活动名称           |
| initiator      | String  | 发起者                 |
| startDate      | String  | 开始日期               |
| startTime      | String  | 开始时间               |
| position       | String  | 地点                   |
| futureActivity | Array   | 未来活动列表           |

**备注**

- 更多返回错误代码请看首页的错误代码描述