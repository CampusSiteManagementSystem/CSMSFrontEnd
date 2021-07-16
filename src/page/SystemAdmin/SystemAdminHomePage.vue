<template>
  <div>
    <el-row class="upper-row">
      <el-col :span="10" class="upper-row-col1"
        ><!--左上角的两块-->

        <el-card class="upper-card">
          <el-row>
            <el-col :span="9">
              <div>
                 <br />
                <el-avatar :size="130" :src="sysInfo.image"></el-avatar>
              </div>
            </el-col>
            <el-col :span="15">
              <br />
              <div class="name">系统管理员 </div>
              <div class="other-info">
                <br />账号：<el-tag type="success">
                  {{ sysInfo.accountNumber }}
                </el-tag><br />
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
          <el-tabs  :addable='true' @tab-add="showAnnouncement">
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
                <el-table-column prop="systemAnnouncementDate" width="auto">
                </el-table-column>
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
                <el-table-column
                  prop="maintenanceAnnouncementDate"
                  width="auto"
                >
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="lower-row">
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
            <el-table-column prop="joinDate" label="申请时间" width="auto">
            </el-table-column>
            <el-table-column prop="functionary" label="申请人" width="auto">
            </el-table-column>
            <el-table-column prop="name" label="组织" width="auto">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="9" class="lower-row-col2">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span>学生信息</span>
            <router-link to="/SysAdminFrame/MaintainUserInfo">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>
          <el-table
            :data="userInfo"
            stripe
            style="width: 100%"
            height="241"
            :show-header="false"
          >
            <el-table-column prop="accountNumber" label="ID" width="auto">
            </el-table-column>
            <el-table-column prop="name" label="账号" width="auto">
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
import store from "../../state/state";
import {
  GETMaintenanceAnnouncements,
  GETSystemAnnouncements,
  GETOrganizations,
  GETStudents,
  GETSystemAdministratorsID,

  // GETStudentsID,
  // GETActivities,
  // GETOccupyTimes
} from "../../API/http";
export default {
  created() {
    //获取场地公告
    GETMaintenanceAnnouncements()
      .then((data) => {
        console.log(data);
        this.axiosdata = data;
        this.dealWithmaintenanceAnnouncements(this.axiosdata);
      })
      .catch((err) => {
        console.log(err);
        this.$message("场地公告数据请求错误");
      });

    //获取系统公告
    GETSystemAnnouncements()
      .then((data) => {
        console.log("data");
        this.axiosdata = data;
        this.dealWithAnnouncements(this.axiosdata);
      })
      .catch((err) => {
        console.log(err);
        this.$message("系统公告数据请求错误");
      });

    //获取组织注册信息
    GETOrganizations()
      .then((data) => {
        this.groupInfo = data;
        for(var i = 0; i < data.length; i++)
        {
          this.groupInfo[i].joinDate=data[i].joinDate.replace("T", " ");
        }
        console.log(">>>>>>", data);
      })
      .catch((err) => {
        console.log(err);
        this.$message("组织注册信息请求错误");
      });

    //获取学生信息
    GETStudents()
      .then((data) => {
        this.userInfo = data;
        console.log(">>>>>>", data);
      })
      .catch((err) => {
        console.log(err);
        this.$message("学生信息请求错误");
      });

    //获取管理员信息
    GETSystemAdministratorsID(store.state.ID)
      .then((data) => {
        this.sysInfo = data;
        this.sysInfo.image = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
        console.log(">>>>>>", data);
      })
      .catch((err) => {
        console.log(err);
        this.$message("管理员信息请求错误");
      });
  },
  data() {
    return {
      dialogTitle: "",
      dialogContent: "",
      dialogVisible: false,
      groundAnnouncement: [],
      systemAnnouncement: [],

      axiosdata: null,

      //第一块卡片信息
      // SysID=store.stats.ID,
      sysInfo: {},
      semesterInfo: {
        fromYear: "2020",
        toYear: "2021",
        semester: "2",
        week: "14",
      },
      //第三块卡片信息
      groupInfo: [],
      //第四片卡片信息
      userInfo: [
        {
          userid: "123",
          account: "你",
        },
        {
          userid: "456",
          account: "我",
        },
        {
          userid: "789",
          account: "他",
        },
        {
          userid: "321",
          account: "她",
        },
        {
          userid: "654",
          account: "它",
        },
        {
          userid: "987",
          account: "嗨",
        },
      ],
    };
  },
  methods: {
    dealWithAnnouncements(data) {
      console.log("run dealwith");
      for (var i = 0; i < data.length; i++) {
        var temp = {
          accountNumber: "123123",
          title: "关于饮水机的公告##C楼饮水机坏了，望周知",
          systemAnnouncementDate: "2020-05-17T00:00:00",
          content: "C楼饮水机坏了，望周知",
        };
        temp.accountNumber = data[i].accountNumber;
        temp.systemAnnouncementDate = data[i].systemAnnouncementDate.replace(
          "T",
          " "
        );
        temp.title = data[i].content.substr(0, data[i].content.search("##"));
        temp.content = data[i].content.slice(data[i].content.search("##") + 2);
        this.systemAnnouncement.push(temp);
      }
      console.log(this.systemAnnouncement);
    },

    dealWithmaintenanceAnnouncements(data) {
      console.log("run dealwith");
      for (var i = 0; i < data.length; i++) {
        var temp = {
          groundName: "123123",
          groundId: "1000001",
          title: "关于饮水机的公告##C楼饮水机坏了，望周知",
          maintenanceAnnouncementDate: "2020-05-17T00:00:00",
          content: "C楼饮水机坏了，望周知",
        };
        temp.groundName = data[i].groundName;
        temp.groundId = data[i].groundId;
        temp.maintenanceAnnouncementDate = data[
          i
        ].maintenanceAnnouncementDate.replace("T", " ");
        temp.title = data[i].content.substr(0, data[i].content.search("##"));
        temp.content = data[i].content.slice(data[i].content.search("##") + 2);
        this.groundAnnouncement.push(temp);
      }
      console.log(this.groundAnnouncement);
    },

    showAnnouncement() {
      this.$router.push("/SysAdminFrame/Announcement");
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
/* .upper-row {
  padding: 5px;
  height: 40%;
}
.lower-row {
  padding: 5px;
  height: 60%;
} */
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
.el-dialog__header {
  border-bottom: 1px solid #ebebeb;
}
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
}
.el-card {
  border-radius: 15px;
}
</style>