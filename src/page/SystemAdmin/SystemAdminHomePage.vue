<template>
  <div>
    <el-row class="upper-row">
      <el-col :span="10" class="upper-row-col1"
        ><!--左上角的两块-->
        <el-card class="upper-card">
          <el-row>
            <el-col :span="9">
              <div>
                <el-avatar :size="130" :src="studentInfo.image"></el-avatar>
              </div>
            </el-col>
            <el-col :span="15">
              <div class="name">{{ studentInfo.username }}</div>
              <div class="other-info">
                <br />账号：{{ studentInfo.adminID }}<br />
              </div>
              <div class="date">
                {{ semesterInfo.fromYear }}-{{ semesterInfo.toYear }}年度第{{
                  semesterInfo.semester
                }}学期第{{ semesterInfo.week }}周
              </div>
              <div class="other-info">祝您工作愉快！</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="14" class="upper-row-col2">
        <el-card class="upper-card">
          <el-tabs>
            <!-- addable="true" @tab-add="showAnnouncement" -->
            <el-tab-pane label="系统公告">
              <el-table
                :data="systemAnnouncement"
                stripe
                style="width: 100%"
                height="136"
                :show-header="false"
                @row-click="onRowClick"
              >
                <el-table-column prop="title" label="活动名" width="auto">
                </el-table-column>
                <el-table-column prop="date" label="发起人" width="auto">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="活动公告">
              <el-table
                :data="activityAnnouncement"
                stripe
                style="width: 100%"
                height="136"
                :show-header="false"
              >
                <el-table-column prop="title" label="活动名" width="auto">
                </el-table-column>
                <el-table-column prop="date" label="发起人" width="auto">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="lowerrow">
      <el-col :span="15" class="lower-row-col1">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span>组织注册信息</span>
            <router-link to="/SysAdminFrame/GroupVerifyList">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>
          <el-table
            :data="groupInfo"
            stripe
            style="width: 100%"
            height="241"
            :show-header="false"
          >
            <el-table-column prop="applyTime" label="申请时间" width="auto">
            </el-table-column>
            <el-table-column prop="applyUser" label="申请人" width="auto">
            </el-table-column>
            <el-table-column prop="organization" label="组织" width="auto">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="9" class="lower-row-col2">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span>用户信息</span>
            <router-link to="/SysAdminFrame/MaintainUserInfo">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>
          <el-table :data="userInfo" stripe style="width: 100%" height="241" :show-header="false">
            <el-table-column prop="userid" label="ID" width="auto">
            </el-table-column>
            <el-table-column prop="account" label="账号" width="auto">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="dialogVisible" width="50%" class="dialog">
      <span slot="title">
        <h3>{{ dialogTitle }}</h3>
      </span>
      <div class="content">
        <span>{{ dialogContent }}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {

      dialogTitle: "",
      dialogContent: "",
      dialogVisible: false,

      //第一块卡片信息
      studentInfo: {
        image:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        username: "系统管理员",
        adminID: "50003",
      },
      semesterInfo: {
        //get semester from backend

        fromYear: "2020",
        toYear: "2021",
        semester: "2",
        week: "14",
      },
      //第二块卡片信息
      systemAnnouncement: [
        //从服务器获取
        {
          title: "5月29日10:00-18:00停机维护",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "翟晨浩爬",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "5月29日10:00-18:00停机维护1",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "翟晨浩爬2",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "5月29日10:00-18:00停机维护3",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "翟晨浩爬4",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "5月29日10:00-18:00停机维护5",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "翟晨浩爬6",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "5月29日10:00-18:00停机维护8",
          date: "2018-9-10",
          time: "12:00",
        },
        {
          title: "翟晨浩爬7",
          date: "2018-9-10",
          time: "12:00",
        },
      ],
      activityAnnouncement: [
        {
          title: "emmmmmm",
          date: "2021-9-10",
          time: "13:00",
        },
      ],
      //第三块卡片信息
      groupInfo: [
        {
          applyTime: "2021-9-10",
          applyUser:"张某",
          organization:"游泳协会",
        },
        {
          applyTime: "2021-8-11",
          applyUser:"贺某",
          organization:"跑步协会",
        },
         {
          applyTime: "2021-9-10",
          applyUser:"张某",
          organization:"羽毛球协会",
        },
         {
          applyTime: "2021-9-10",
          applyUser:"张某",
          organization:"乒乓球协会",
        },
      ],
      //第四片卡片信息
      userInfo: [
        {
          userid:"123",
          account:"你",
        },
        {
          userid:"456",
          account:"我",
        },
        {
           userid:"789",
          account:"他",
        },
        {
           userid:"321",
          account:"她",
        },
        {
          userid:"654",
          account:"它",
        },
        {
           userid:"987",
          account:"嗨",
        }
      ],
    };
  },
  methods: {
    showAnnouncement() {
      this.$router.push("/StuFrame/Announcement");
    },

    onRowClick(row) {
      this.dialogTitle = row.title;
      this.dialogContent = row.title;
      this.dialogVisible = true;
    },

  },
};
</script>

<style scoped>
.upper-card,
.lower-card {
  overflow: auto;
  border-radius: 15px;
}
.upper-row {
  padding: 5px;
  height: 40%;
}
.lower-row {
  padding: 5px;
  height: 60%;
}
.lower-row-col1,
.lower-row-col2,
.upper-row-col1,
.upper-row-col2 {
  height: 100%;
  padding: 5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.upper-card {
  height: 230px;
}
.lower-card {
  height: 340px;
}

.name {
  font-size: 25px;
  font-weight: 550;
  line-height: 20px;
}
.other-info {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
}
.date {
  font-size: 18px;
  line-height: 40px;
  font-weight: 600;
}

.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
}

</style>