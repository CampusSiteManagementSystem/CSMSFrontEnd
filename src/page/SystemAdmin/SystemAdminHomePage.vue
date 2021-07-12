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
                @row-click="onRowClick"
                :show-header="false"
              >
                <el-table-column prop="title" width="auto"> </el-table-column>
                <el-table-column prop="time" width="auto"> </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="场地公告">
              <el-table
                :data="groundAnnouncement"
                stripe
                style="width: 100%"
                height="136"
                @row-click="onRowClick"
                :show-header="false"
              >
                <el-table-column prop="title" width="auto"> </el-table-column>
                <el-table-column prop="time" width="auto"> </el-table-column>
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
    const groundItem = {
      title: "关于图书馆暂停开放的通知",
      time: "2021-6-25 15:30",
      ground: "15335",
      content:
        "因疫情防控需要，图书馆于7月1日起暂停开放，恢复时间另行通知。不便之处，敬请谅解。",
    };
    const systemItem = {
      title: "关于系统停机维护的通知",
      time: "2021-7-5 15:30",
      accountNum: "14335",
      content:
        "本系统将于7月10日23:00至7月11日7:00停机维护。不便之处，敬请谅解。",
    };
    return {
      dialogTitle: "",
      dialogContent: "",
      dialogVisible: false,
      groundAnnouncement: Array(20).fill(groundItem),
      systemAnnouncement: Array(20).fill(systemItem),
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
      this.dialogContent = row.content;
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
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
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
}
.content {
  height: 320px;
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
</style>