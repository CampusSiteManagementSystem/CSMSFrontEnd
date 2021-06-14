**简要描述：**

- 新增场地的收藏
- 权限：学生，组织

**请求 URL：**

- `http://xx.com/api/mesh/likes

**请求方式：**

- POST

**Data：**

| 参数名        | 必选 | 类型   | 说明        |
| :------------ | :--- | :----- | ----------- |
| accountNumber     | 是   | String | 当前用户 Id |
| groundID | 是   | String | 场地ID    |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "uploadMsg": {
      "createTime":"",
      "accountNumber": "1910000",
      "uploaderName": "组织部"
    }
  }
}
```

**返回参数说明**

| 参数名        | 类型    | 说明                                                               |
| :------------ | :------ | ------------------------------------------------------------------ |
| isSuccess     | Boolean | 是否成功创建                                                       |
| msg           | String  | 返回错误信息，若成功则返回空，否则之后所有项均为 null 或不存在该项 |
| createTime    | Number  | 创建时间时间戳                                                     |
| uploaderName  | String  | 上传者用户名                                                       |
|accountNumber|String|当前用户 Id|

**备注**

- 更多返回错误代码请看首页的错误代码描述
