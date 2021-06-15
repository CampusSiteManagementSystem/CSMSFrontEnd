**简要描述：**

- 场地管理员更新某个场地的信息
- 权限：场地管理员

**请求 URL：**



**请求方式：**

- PUT

**Query Params：**

| 参数名            | 类型   | 说明             |
| :---------------- | :----- | ---------------- |
| ground_ID         | String | 场地ID           |
| ground_name       | String | 场地名称         |
| area              | Number | 场地面积         |
| indoor_or_outdoor | Bool   | 场地室内还是室外 |
| building          | String | 室内场地的楼名   |
| room_no           | Number | 室内场地房间号   |
| seat_num          | Number | 室内场地座位数   |
| computer_num      | Number | 室内场地电脑数   |

**返回示例**

```json
{
  "error_code": 0,
    "data": {
    "isSuccess": true,
      "msg": ""
  }
}
```

**返回参数说明**

| 参数名      | 类型    | 说明                           |
| :---------- | :------ | ------------------------------ |
| isSuccess | Boolean | 是否成功更新                 |
| msg       | String  | 返回错误信息，若成功则返回空 |
