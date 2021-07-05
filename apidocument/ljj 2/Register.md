**简要描述：**

- 用户注册接口
- 权限：all

**请求 URL：**

- `http://xx.com/api/mesh/register`

**请求方式：**

- POST

**Data：**

| 参数名   | 必选 | 类型   | 说明     |
| :------- | :--- | :----- | -------- |
| username | 是   | String | 用户昵称 |
| password | 是   | String | 密码     |
| email    | 是   | String | 注册邮箱 |

**返回示例**

```json
{
  "error_code": 0,
  "token":"hfuwha",
  "data": {
    "isSuccess": true,
    "msg": "",
  }
}
```

**返回参数说明**

| 参数名    | 类型    | 说明                           |
| :-------- | :------ | ------------------------------ |
| isSuccess | Boolean | 是否注册登录                   |
| msg       | String  | 错误信息，若成功返回空         |
| token     | String  | token，若注册成功返回登录token |

**备注**

- 更多返回错误代码请看首页的错误代码描述