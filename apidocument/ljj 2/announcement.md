**简要描述：**

- 获取公告接口
- 权限：all

**请求 URL：**

- `http://xx.com/api/mesh/getAnnouncement`

**请求方式：**

- GET

**Data：**

| 参数名                   | 必选 | 类型 | 说明 |
| :----------------------- | :--- | :--- | ---- |
| 也许是有的，比如当前时间 |      |      |      |

**返回示例**

```json
{
  "error_code": 0,
  "data": {
    "isSuccess": true,
    "msg": "",
    "token":"token",
		"systemAnnouncement":[{
      "title":"5月29日10:00-18:00停机维护",
      "date":"2018-9-10",
      "time":"12:00",
    }],
    "activityAnnouncement":[{
      		"title": "emmmmmm",
          "date": "2021-9-10",
          "time": "13:00",
    }]
  }
}
```

**返回参数说明**

| 参数名                     | 类型    | 说明                   |
| :------------------------- | :------ | ---------------------- |
| isSuccess                  | Boolean | 是否成功登录           |
| msg                        | String  | 错误信息，若成功返回空 |
| token                      | String  | token                  |
| systemAnnouncement.title   | String  | 系统公告标题           |
| systemAnnouncement.date    | String  | 系统公告日期           |
| systemAnnouncement.time    | String  | 系统公告时间           |
| activityAnnouncement.title | String  | 活动公告标题           |
| activityAnnouncement.date  | String  | 活动公告日期           |
| activityAnnouncement.time  | String  | 活动公告时间           |
| activityAnnouncement       | Array   | 活动公告列表           |
| systemAnnouncement         | Array   | 系统公告列表           |

**备注**

- 更多返回错误代码请看首页的错误代码描述