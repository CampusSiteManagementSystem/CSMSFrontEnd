<template>
  <div>
    <!-- 第一行布局 -->
    <el-row class="upper-row">
      <el-col :span="10" class="upper-row-col1">
        <el-card class="upper-card">
          <el-row>
            <el-col :span="8" class="person-info-card-photo-col">
              <div>
                <br />
                <el-avatar :size="130" :src="personinfo.photosrc"></el-avatar>
              </div>
            </el-col>
            <el-col :span="16">
              <br />
              <div class="name">{{ personinfo.name }}</div>
              <div class="other-info" >
                <br />工号：{{ this.personinfo.id }}<br />管理场地：<el-tag
                  v-for="(ground, i) in personinfo.grounds"
                  :key="i"
                  :type="personinfo.type[(i + 1) % 5]"
                  class="tag"
                >
                  {{ ground }}
                </el-tag>
              </div>
              <div class="date">{{ personinfo.date }}</div>
              <div class="other-info">祝您工作愉快！</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="14" class="upper-row-col2">
        <el-card class="upper-card">
          <div slot="header" class="clearfix">
            <span><b>占用中的场地</b></span>
          </div>
          <el-table
            :header-row-style="{ height: '20px' }"
            :cell-style="{ padding: '8px' }"
            :data="busyground"
            style="width: 100%"
            height="129px"
            :show-header="false"
            empty-text="目前没有场地被占用"
            stripe
            highlight-current-row
          >
            <el-table-column prop="position" label="内容"> </el-table-column>
            <el-table-column prop="activityName" label="活动名称">
            </el-table-column>
            <el-table-column prop="time" label="活动名称"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <!-- 第二行布局 -->
    <el-row class="lower-row">
      <el-col :span="14" class="lower-row-col1">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span><b>待审核预约</b></span>
            <router-link to="/GroundsAdmin/ReviewActivityList">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>
          <el-table
            :header-row-style="{ height: '20px' }"
            :cell-style="{ padding: '8px' }"
            :data="appointment"
            style="width: 100%"
            height="249px"
            :show-header="false"
            @row-click="onReviewRowClick"
            empty-text="目前没有待审核预约"
            stripe
            highlight-current-row
          >
            <el-table-column prop="title" label="内容"> </el-table-column>
            <el-table-column prop="ground" label="日期"> </el-table-column>
            <el-table-column prop="datetime" label="日期"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="10" class="lower-row-col2">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span><b>系统公告</b></span>
            <router-link to="/GroundsAdmin/Announcement"
              ><el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              ></router-link
            >
          </div>
          <el-table
            :header-row-style="{ height: '20px' }"
            :cell-style="{ padding: '8px' }"
            :data="systemAnnouncement"
            style="width: 100%"
            height="249px"
            :show-header="false"
            @row-click="onRowClick"
            stripe
            highlight-current-row
          >
            <el-table-column prop="title" width="auto"> </el-table-column>
            <el-table-column prop="systemAnnouncementDate" width="auto">
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

<style scpoed>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.clearfix {
  font-size: 18px;
}
.name {
  font-size: 30px;
  font-weight: 550;
  line-height: 20px;
}
.other-info {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
}
.date {
  font-size: 20px;
  line-height: 40px;
  font-weight: 700;
}

.lower-row-col1,
.lower-row-col2,
.upper-row-col1,
.upper-row-col2 {
  height: 100%;
  padding: 5px;
}
/* 系统公告卡片 */

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.tag{
  margin-top: 2px;
  margin-bottom: 1px;
  margin-right: 5px;
}
/* .upperrow {
  padding: 5px;
  height: 40%;
}
.lowerrow {
  padding: 5px;
  height: 60%;
} */
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
}
.content {
  height: 320px;
}
.upper-card {
  height: 230px;
}
.lower-card {
  height: 350px;
}
.upper-card,
.lower-card {
  overflow: auto;
  border-radius: 15px;
}
.el-card {
  border-radius: 15px;
}
.el-dialog__header {
  border-bottom: 1px solid #ebebeb;
}
</style>


<script>
import { GETSystemAnnouncements } from "../../API/http";
import { GETActivities } from "../../API/http";
import { GETGrounds } from "../../API/http";
import { GETOutdoorGrounds } from "../../API/http";
import { GETIndoorGrounds } from "../../API/http";

import store from "../../state/state.js";
export default {
  name: "GrandsmanHome",
  mounted() {
    this.personinfo.grounds = [];
    const that = this;
    // console.log(this.testtitle.substr(0,this.testtitle.search("##")));
    GETSystemAnnouncements()
      .then((data) => {
        that.axiosdata = data;
        that.dealWithAnnouncements(that.axiosdata);
      })
      .catch((err) => {
        console.log(err);
        this.$message({
          showClose: true,
          message: "获取系统公告失败",
          type: "error",
        });
      });

    GETActivities({accountNumber:this.OrgID}) //应该加accountNumber
      .then((data) => {
        that.axiosdata = data;
        that.dealWithActivities(that.axiosdata);
        //console.log(that.axiosdata);
      })
      .catch((err) => {
        console.log(err);
        this.$message({
          showClose: true,
          message: "获取待审核预约失败",
          type: "error",
        });
      });

    GETIndoorGrounds({
      accountNumber: store.state.ID,
    })
      .then((data) => {
        // console.log("type",this.personinfo.grounds.includes("sd"));
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].positionName);
          console.log(this.personinfo.grounds.includes(data[i].positionName));
          if (!this.personinfo.grounds.includes(data[i].positionName)) {
            this.personinfo.grounds.push(data[i].positionName);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        this.$message({
          showClose: true,
          message: "获取室内场地失败",
          type: "error",
        });
      });

    GETOutdoorGrounds({
      accountNumber: store.state.ID,
    })
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          if (!this.personinfo.grounds.includes(data[i].positionName)) {
            this.personinfo.grounds.push(data[i].positionName);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        this.$message({
          showClose: true,
          message: "获取室外场地失败",
          type: "error",
        });
      });

    GETGrounds({
      occupyDateTime: this.getFullTime(),
      accountNumber: store.state.ID,
    })
      .then((data) => {
        // console.log("run GETActivities");
        // console.log("grouds", data);
        that.axiosdata = data;
        that.dealWithGrounds(that.axiosdata);
        //console.log(that.axiosdata);
      })
      .catch((err) => {
        console.log(err);
        this.$message({
          showClose: true,
          message: "获取占用中场地失败",
          type: "error",
        });
      });
  },

  data() {
    return {
      axiosdata: null,
      personinfo: {
        photosrc:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        name: "场地管理员",
        // id: state.ID,
        id: store.state.ID,
        grounds: [],
        type: ["", "success", "info", "warning", "danger"],
        date: "2021-2022学年第2学期20周",
      },

      //弹出式公告
      dialogTitle: "",
      dialogContent: "",
      dialogVisible: false,
      activityVisible: false,
      activitySelected: {
        id: "",
        name: "",
        description: "",
        host: "",
        time: "",
        location: "",
        participantnum: 0,
      },
      // systemAnnouncement: Array(20).fill(systemItem),
      systemAnnouncement: [],
      appointment: [],
      busyground: [],
      msg: "666",
      OrgID: store.state.ID,
    };
  },
  methods: {
    getFullTime() {
      let date = new Date(), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + "",
        M =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1,
        D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
        h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        m =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        s =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + "-" + M + "-" + D + "T" + h + ":" + m + ":" + s;
    },

    getEndTime(startTime, duration) {
      var date = new Date(startTime);
      var mins = date.getMinutes();
      date.setMinutes(duration + mins);
      // date = this.getFullTime(
      //   Date(date).setMinutes(duration + date.getMinutes())
      // );
      let Y = date.getFullYear() + "",
        M =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1,
        D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
        h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        m =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        s =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + "-" + M + "-" + D + "T" + h + ":" + m + ":" + s;
    },

    dealWithActivities(data) {
      if (data["审核中"] != null) {
        for (var i = 0; i < data["审核中"].length; i++) {
          var temp = {
            activityID: "0006",
            title: "数据库会议",
            ground: "广楼101",
            datetime: "2021-6-2 00:00",
          };
          temp.activityID = data["审核中"][i].id;
          temp.datetime = data["审核中"][i].activityDate.replace("T", " ");
          temp.title = data["审核中"][i].name;
          temp.ground = data["审核中"][i].groundName;
          this.appointment.push(temp);
        }
      }
    },

    dealWithAnnouncements(data) {
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
    },

    dealWithGrounds(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].state == "占用") {
          var temp = {
            groundID: "12201",
            position: "F201",
            activityName: "数据结构",
            startTime: "",
            duration: "",
            endTime: "",
            time: "",
          };
          temp.groundID = data[i].groundId;
          temp.position = data[i].name;
          temp.activityName = data[i].activityName;
          temp.startTime = data[i].startTime.replace("T", " ");
          temp.duration = parseInt(data[i].duration);
          temp.endTime = this.getEndTime(data[i].startTime, temp.duration);
          temp.time =
            temp.startTime +
            "~" +
            temp.endTime.substr(temp.endTime.search("T") + 1);
          this.busyground.push(temp);
          // console.log(i,temp);
        }
      }
      // console.log(this.busyground);
    },

    onRowClick(row) {
      this.dialogTitle = row.title;
      this.dialogContent = row.content;
      this.dialogVisible = true;
    },
    // onOccupyRowClick(row) {
    //   this.$router.push("/GroundsAdmin/ShowSchedule/" + row.groundID);
    // },
    onReviewRowClick(row) {
      this.$router.push("/GroundsAdmin/ActivityInfo/" + row.activityID);
    },
  },
};
</script>