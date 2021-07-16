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
                <el-avatar :size="130" :src="orgnizationInfo.header"></el-avatar>
              </div>
            </el-col>
            <el-col :span="15">
              <div class="name">{{ orgnizationInfo.name }}</div>
              <div class="other-info">
                <br />ID：{{ orgnizationInfo.accountNumber }}<br />负责人：{{
                  orgnizationInfo.functionary==null?"请完善个人信息":orgnizationInfo.functionary
                }}<br />组织类型：<el-tag type="success" class="tag">
                  {{ orgnizationInfo.type==null?"请完善个人信息":orgnizationInfo.type }}
                </el-tag>
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
          <el-tabs :addable='true' @tab-add="showAnnouncement">
            <el-tab-pane label="系统公告">
              <el-table
                :data="systemAnnouncement"
                stripe
                style="width: 100%"
                height="146"
                @row-click="onRowClick"
                :show-header="false"
              >
                <el-table-column prop="title" width="auto"> </el-table-column>
                <el-table-column prop="systemAnnouncementDate" width="auto"> 
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.systemAnnouncementDate }}</span>
                  </template> 
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="场地公告">
              <el-table
                :data="groundAnnouncement"
                stripe
                style="width: 100%"
                height="146"
                @row-click="onRowClick"
                :show-header="false"
              >
                <el-table-column prop="title" width="auto"> </el-table-column>
                <el-table-column prop="maintenanceAnnouncementDate" width="auto">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.maintenanceAnnouncementDate }}</span>
                  </template>
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
            <span><b>未来活动</b></span>
            <router-link to="/OrgFrame/CheckActivity/AllActivities">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>
          <el-table
            :data="futureActivity"
            stripe
            style="width: 100%"
            height="241"
            @row-click="onActivityRowClick"
            :show-header="false"
          >
            <el-table-column prop="name" label="活动名称" width="auto">
            </el-table-column>
            <el-table-column prop="organizationName" label="发起组织" width="auto">
            </el-table-column>
            <el-table-column prop="startTime" label="时间" width="auto">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.startTime }}</span>
                  </template> 
            </el-table-column>
            <el-table-column prop="groundName" label="地点" width="auto">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="9" class="lower-row-col2">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span><b>占用中的场地</b></span>
            <router-link to="/OrgFrame/CheckSite">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>

          <el-table :data="occupation" stripe style="width: 100%"  @row-click="onOccupyRowClick" height="241" :show-header="false">
            <el-table-column prop="name" label="地点" width="auto">
            </el-table-column>
            <el-table-column prop="activityName" label="活动名" width="auto">
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
    <el-dialog
      :visible.sync="activityVisible"
      width="50%"
      title="活动详情"
      class="dialog"
    >
      <div class="content">
        <p><b>活动ID：</b>{{ activitySelected.id }}</p>
        <p><b>活动名称：</b>{{ activitySelected.name }}</p>
        <p><b>举办组织：</b>{{ activitySelected.organizationName }}</p>
        <p><b>活动时间：</b>{{ activitySelected.startTime }}</p>
        <p><b>活动地点：</b>{{ activitySelected.groundName }}</p>
        <p><b>参与人数：</b>{{ activitySelected.participantNum }}</p>
        <p><b>活动描述：</b>{{ activitySelected.description }}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="activityVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  GETOrganizationsID,
  GETSystemAnnouncements,
  GETMaintenanceAnnouncements,
  GETActivities,
  GETGrounds,
  } from "../../API/http"
import store from "../../state/state";
export default {
  created() {
    GETOrganizationsID(this.OrgID)
      .then(data => {
        //console.log("12345698",data);
        this.orgnizationInfo = data;
        this.orgnizationInfo.header="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
      })
      .catch((err) => {
        console.log(err);
        this.$message("组织信息获取错误");
      }); //获取组织信息
    GETSystemAnnouncements()
      .then((data) => {
        this.systemData = data;
        this.dealWithSystemAnnouncements(this.systemData);
      })
      .catch((err) => {
        this.data = err;
      });
    GETMaintenanceAnnouncements()
      .then((data) => {
        this.maintenanceData = data;
        this.dealWithMaintenanceAnnouncements(this.maintenanceData);
      })
      .catch((err) => {
        this.data = err;
      });
    GETActivities()
      .then((data) => {
        this.futureActivity = data["待举办"];
        console.log("12345698",this.futureActivity[0].startTime);
        for(var i = 0; i < this.futureActivity.length; i++)
        {
          this.futureActivity[i].startTime = (this.futureActivity[i].startTime.replace(
            "T",
            " "
          ).split('.'))[0];
        }
      })
      .catch((err) => {
        this.data = err;
      });
    var curTime = this.getCurrentTime();
    console.log("curTime", curTime);
    GETGrounds({
        occupyDateTime:curTime
      })
      .then((data) => {
        //console.log("12345698",data);
        this.dealWithOccupyGrounds(data); //这里需要根据state来进行筛选
      })
      .catch((err) => {
        this.data = err;
      });
  },
  data() {
    return {
      systemData: null,
      maintenanceData:null,
      //第一块卡片信息
      orgnizationInfo: {},
      semesterInfo: {
        //get semester from backend

        fromYear: "2021",
        toYear: "2022",
        semester: "2",
        week: "20",
      },
      //第二块卡片信息
      OrgID:store.state.ID,
      //弹出式公告
      dialogTitle: "",
      dialogContent: "",
      dialogVisible: false,
      activityVisible: false,
      activitySelected: {
        id: "",
        name: "",
        description: "",
        organizationName: "",
        startTime: "",
        groundName: "",
        participantNum: "",
      },
      groundAnnouncement: [],
      systemAnnouncement: [],

      //第三块卡片信息
      futureActivity: [],
      //第四片卡片信息
      occupation: [
      ],
    };
  },
  methods: {
    dealWithSystemAnnouncements(data) {
      console.log("run dealwith");
      for (var i = 0; i < data.length; i++) {
        var temp = {
          accountNumber: "",
          title: "",
          systemAnnouncementDate: "",
          content: "",
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
    dealWithMaintenanceAnnouncements(data) {
      console.log("run dealwith");
      for (var i = 0; i < data.length; i++) {
        var temp = {
          groundId: "",
          groundName:"",
          title: "",
          maintenanceAnnouncementDate: "",
          content: "",
        };
        temp.groundName= data[i].groundName;
        temp.groundId = data[i].groundId;
        temp.maintenanceAnnouncementDate = data[i].maintenanceAnnouncementDate.replace(
          "T",
          " "
        );
        temp.title = data[i].content.substr(0, data[i].content.search("##"));
        temp.content = data[i].content.slice(data[i].content.search("##") + 2);
        this.groundAnnouncement.push(temp);
      }
      console.log(this.groundAnnouncement);
    },
    dealWithOccupyGrounds(data){
      for (var i = 0; i < data.length; i++) {
        if(data[i].state=="占用")
        {
          this.occupation.push(data[i]);
        }
      }
      console.log(this.occupation);
    },
    getCurrentTime() {
        //获取当前时间并打印
        var curTime = this;
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth() + 1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
        curTime.getTime = yy + '-' + mm + '-' + dd + 'T' + hh + ':' + mf + ':' + ss;
        return curTime.getTime;
    },
    showAnnouncement() {
      this.$router.push("/OrgFrame/Announcement");
    },
    onRowClick(row) {
      this.dialogTitle = row.title;
      this.dialogContent = row.content;
      this.dialogVisible = true;
    },
    onActivityRowClick(row) {
      this.activitySelected = row;
      this.activityVisible = true;
    },
    onOccupyRowClick(row) {
      this.$router.push("/OrgFrame/CheckSite/ShowSchedule/" + row.groundId);
    }
  },
};
</script>

<style scpoed>
html,
body
 {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.tag{
  margin-top: 4px;
  margin-bottom: 1px;
  margin-right: 5px;
}
.upper-card,
.lower-card{
  overflow: auto;
  border-radius: 15px;
}
.upperrow {
  padding: 5px;
  height: 40%;
}
.lowerrow {
  padding: 5px;
  height: 60%;
}
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
}
.content{
  height: 320px;
}
.lower-row-col1,
.lower-row-col2,
.upper-row-col1,
.upper-row-col2 {
  height: 100%;
  padding: 5px;
}
.el-card {
  border-radius: 15px;
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
  height: 240px;
}
.lower-card {
  height: 340px;
}
.el-dialog__header {
  border-bottom: 1px solid #ebebeb;
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
</style>