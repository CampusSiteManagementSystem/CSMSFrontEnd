<template>
  <div>
    <el-row class="upper-row">
      <el-col :span="10" class="upper-row-col1"
        ><!--左上角的两块-->
        <el-card class="upper-card">
          <el-row>
            <el-col :span="9">
              <div>
                <el-avatar :size="130" :src="StuInfo.image"></el-avatar>
              </div>
            </el-col>
            <el-col :span="15">
              <div class="name">{{ StuInfo.name }}</div>
              <div class="other-info">
                <br />学号：{{ StuID }}<br />学院专业：<el-tag type="success">
                  {{ StuInfo.academy }}
                </el-tag>
                <el-tag type="warning">
                  {{ StuInfo.major }}
                </el-tag>
              </div>
              <div class="date">
                {{ semesterInfo.fromYear }}-{{ semesterInfo.toYear }}年度第{{
                  semesterInfo.semester
                }}学期第{{ semesterInfo.week }}周（数据库没有，要删了）
              </div>
              <div class="other-info">祝您学习愉快！</div>
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
                @row-click="onRowClick1"
                :show-header="false"
              >
                <el-table-column prop="accountNumber" width="auto">
                </el-table-column>
                <el-table-column prop="systemAnnouncementTime" width="auto">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="场地公告">
              <el-table
                :data="groundAnnouncement"
                stripe
                style="width: 100%"
                height="136"
                @row-click="onRowClick2"
                :show-header="false"
              >
                <el-table-column prop="groundId" width="auto">
                </el-table-column>
                <el-table-column prop="groundName" width="auto">
                </el-table-column>
                <el-table-column
                  prop="maintenanceAnnouncementTime"
                  width="auto"
                >
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
            <router-link to="/StuFrame/ViewActivities/AllActivities">
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
            </el-table-column>
            <el-table-column prop="groundName" label="地点" width="auto">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="9" class="lower-row-col2">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span><b>最近一周场地使用情况</b></span>
            <router-link to="/StuFrame/ShowPlaceDetail">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>
          <el-table
            :data="occupation"
            stripe
            style="width: 100%"
            @row-click="onOccupyRowClick"
            height="241"
            :show-header="false"
          >
            <el-table-column prop="position" label="地点" width="auto">
            </el-table-column>
            <el-table-column prop="activityName" label="活动名称" width="auto">
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
        <p><b>活动名称：</b>{{ activitySelected.name }}</p>
        <p><b>举办组织：</b>{{ activitySelected.organizationName }}</p>
        <p><b>活动时间：</b>{{ activitySelected.startTime }}</p>
        <p><b>活动地点：</b>{{ activitySelected.groundName }}</p>
        <p><b>预计持续时间：</b>{{ activitySelected.duration }}</p>
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
import store from "../../state/state";
import {
  GETMaintenanceAnnouncements,
  GETSystemAnnouncements,
  GETStudentsID,
  GETActivities,
  GETOccupyTimes
} from "../../API/http";
export default {
  created() {
    //获取场地公告
    GETMaintenanceAnnouncements()
      .then((data) => {
        //console.log(data);
        this.groundAnnouncement = data;
      })
      .catch((err) => {
        console.log(err);
        this.$message("场地公告数据请求错误");
      });
    //获取系统公告
    GETSystemAnnouncements()
      .then((data) => {
        //console.log(data);
        this.systemAnnouncement = data;
      })
      .catch((err) => {
        console.log(err);
        this.$message("系统公告数据请求错误");
      });
    //获取学生信息
    GETStudentsID(this.StuID)
      .then((data) => {
        this.StuInfo = data;
        //console.log(data);
      })
      .catch((err) => {
        console.log(err);
        this.$message("学生信息请求错误");
      });
    //未来活动
    GETActivities()
      .then((data) => {
        //console.log(data);
        this.futureActivity= data["审核中"]//未举办
      })
      .catch((err) => {
        console.log(err);
        this.$message("未来活动数据请求错误");
      });
      //场地占用情况
      GETOccupyTimes()
      .then((data) => {
        //console.log(data);
        this.occupation=data;
      })
      .catch(err=>{
        console.log(err);
        this.$message("场地占用数据请求错误");
      })
  },
  data() {
    return {
      //第一块卡片信息
      StuID: store.state.ID,
      StuInfo: {},
      semesterInfo: {
        //get semester from backend
        fromYear: "2020",
        toYear: "2021",
        semester: "2",
        week: "14",
      },
      //第二块卡片信息
      //弹出式公告
      dialogTitle: "",
      dialogContent: "",
      dialogVisible: false,
      activityVisible: false,
      activitySelected: {},
      groundAnnouncement: [],
      systemAnnouncement: [],

      //第三块卡片信息
      futureActivity: [],
      //第四片卡片信息
      occupation: [],
    };
  },
  methods: {
    showAnnouncement() {
      this.$router.push("/StuFrame/Announcement");
    },
    onRowClick1(row) {
      this.dialogTitle = row.groundName;
      this.dialogContent = row.content;
      this.dialogVisible = true;
    },
    onRowClick2(row) {
      this.dialogContent = row.content;
      this.dialogVisible = true;
    },
    onActivityRowClick(row) {
      this.activitySelected = row;
      this.activityVisible = true;
    },
    onOccupyRowClick(row) {
      this.$router.push("/StuFrame/ShowSchedule/" + row.groundId);
    },
  },
};
</script>

<style scpoed>
.upper-card,
.lower-card {
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
.content {
  height: 320px;
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