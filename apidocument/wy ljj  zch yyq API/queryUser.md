**简要描述：**

- 根据关键词查询用户（注意：这条 api 返回的 users 数组仅包含普通用户，不包含管理员）
- 权限：所有用户

**请求 URL：**

- `http://xx.com/api/mesh/user`

**请求方式：**

- GET

**Query Params：**

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 否   | String | 用户名 |
| userid | 是   | String | 用户账号 |
| keyword  | 是   | String | 关键词 |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "users": [
      {
        "username": "王某",
        "userid": "123456",
      }
    ]
  }
}
```

**返回参数说明**

| 参数名      | 类型    | 说明                                                                           |
| :---------- | :------ | ------------------------------------------------------------------------------ |
| isSuccess   | Boolean | 是否成功加入队伍                                                               |
| msg         | String  | 错误信息，若成功返回空                                                         |
| project     | Object  | 查询返回的项目信息                                                             |
| username    | String  | 用户名                                                                         |
| userid     | String  | 用户账号                                                                                                                                                |

**备注**

- 更多返回错误代码请看首页的错误代码描述
