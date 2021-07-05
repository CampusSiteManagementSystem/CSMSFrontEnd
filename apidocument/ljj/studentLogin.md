**简要描述：**

- 学生登录接口
- 权限：all

**请求 URL：**

- `http://xx.com/api/mesh/studentLogin`

**请求方式：**

- GET

**Data：**

| 参数名        | 必选 | 类型   | 说明     |
| :------------ | :--- | :----- | -------- |
| accountNumber | 是   | String | 登录账号 |
| password      | 是   | String | 登录密码 |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "token":"token",
    "studentInfo":{
      "username":"xxx",
    	"studentID":"1850668",
      "image":"image-url",
      "role":"uesrrole"
    },
    "semesterInfo":{
      	"fromYear": "2020",
        "toYear": "2021",
        "semester": "2",
        "week": "14",
    }
  }
}
```

**返回参数说明**

| 参数名    | 类型    | 说明                   |
| :-------- | :------ | ---------------------- |
| isSuccess | Boolean | 是否成功登录           |
| msg       | String  | 错误信息，若成功返回空 |
| username  | String  | 用户名                 |
| studentID | String  | 学生学号               |
| image     | String  | 学生头像url            |
| token     | String  | token                  |
| fromYear  | String  | 起始学年               |
| toYear    | String  | 终止学年               |
| semester  | String  | 学期                   |
| week      | String  | 周                     |

**备注**

- 更多返回错误代码请看首页的错误代码描述