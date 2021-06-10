**简要描述：**

- 审核组织账号信息

- `http://xx.com/api/mesh/team`

**请求方式：**

- POST

**Query Params：**

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| groupid | 是   | String | 组织ID |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "group": {
      "groupid": "asdfhgdsfxbsd",
      "status": "0",
      "groupName": "公关部",
      "adminName": "王某",
      "applyTime": "yy-mm-dd",        
    }

    "examine": {
"result": "1";
"decription": "已通过";

  }
}
```

**返回参数说明**

| 参数名       | 类型    | 说明                                                                                   |
| :----------- | :------ | -------------------------------------------------------------------------------------- |
| isSuccess    | Boolean | 是否成功加入队伍                                                                       |
| msg          | String  | 错误信息，若成功返回空                                                                 |
| group         | Obejct  | 组织信息                                                                               |
| groupid       | String  | 组织Id                                                                                |
| status   | Boolean  | 审核状态，0代表未审核，1代表已审核                                                                    |
| groupName     | String  | 组织的名称                                                                             |
| adminName    | String  | 团队负责人                                                                             |
| applyTime      | Time   | 申请时间时间戳                                                                                                                                                                                                                                     |
| examine    | ?  | 审核结果                                                                             |
| result      | Boolean   | 审核结果，0代表未通过，1代表已通过                                                                                                                                                                                                                                     |
| description      | String   | 审核详情描述                                                                                                                                                                                                |

**备注**

- 更多返回错误代码请看首页的错误代码描述