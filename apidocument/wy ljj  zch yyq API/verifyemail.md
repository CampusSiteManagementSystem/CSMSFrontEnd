**简要描述：**

- 邮箱发送接口
- 权限：all

**请求 URL：**

- `http://xx.com/api/mesh/sendemail`

**请求方式：**

- GET

**Data：**

| 参数名 | 必选 | 类型   | 说明     |
| :----- | :--- | :----- | -------- |
| email  | 是   | String | 注册邮箱 |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "verifuEmail":"234156"
  }
}
```

**返回参数说明**

| 参数名      | 类型    | 说明                   |
| :---------- | :------ | ---------------------- |
| isSuccess   | Boolean | 是否成功登录           |
| msg         | String  | 错误信息，若成功返回空 |
| verifuEmail | String  | 邮箱验证码             |

**备注**

- 更多返回错误代码请看首页的错误代码描述