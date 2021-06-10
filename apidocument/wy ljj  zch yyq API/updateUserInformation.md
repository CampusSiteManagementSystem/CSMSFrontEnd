**简要描述：**

- 系统管理员修改个人信息
- 权限：systemAdministrator

**请求 URL：**

- `http://xx.com/api/mesh/user

**请求方式：**

- PATCH

**Data：**

| 参数名   | 必选 | 类型   | 说明     |
| :------- | :--- | :----- | -------- |
| username | 是   | String | 用户名     |
| gender | 否 | Number | 性别 |
| age | 否 | Number | 年龄 |
| institute | 否 | String | 学院 |
| class | 否 | String | 班级 |
| userid | 否 | String | 学号|
| email| 否   | String | 邮箱   |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "username": "王某",
    "gender": 1,
    "age": 18,
    "institute": "软件学院",
    "class": "一班",
    "userid": "123456",
    "email": "9876543@qq.com",
  }
}
```

**返回参数说明**

| 参数名    | 类型    | 说明                           |
| :-------- | :------ | ------------------------------ |
| isSuccess | Boolean | 是否成功修改                   |
| msg       | String  | 返回错误信息，若成功则返回空， |
| username           | String  | 用户名                                                                                                            |
| gender             | Number  | 性别，0为无性别，1为男性，2位女性                            
|
| age            | Number  | 年龄                                               |
| description        | String  | 用户个人描述                                                 |
| institute          | String  | 学院                                               |
| class            | String  | 班级                                                  |                                           
| userid        | String  | 用户学号                                                     |
| email   | String  | 邮箱                                  |                                         

**备注**

- 更多返回错误代码请看首页的错误代码描述

