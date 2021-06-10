**简要描述：**

- 获取学生收藏场地接口
- 权限：student

**请求 URL：**

- `http://xx.com/api/mesh/getStudentFavoriteSite`

**请求方式：**

- GET

**Data：**

| 参数名        | 必选 | 类型   | 说明     |
| :------------ | :--- | :----- | -------- |
| accountNumber | 是   | String | 学生账号 |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "token":"token",
		"favoriteList":[{
      		"isBusy": true,
          "position": "F201",
          "type": "室内",
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
| isBusy       | String  | 是否占用               |
| position     | String  | 地点                   |
| type         | String  | 种类                   |
| favoriteList | Array   | 收藏列表               |

**备注**

- 更多返回错误代码请看首页的错误代码描述