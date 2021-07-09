<template>
  <div>
    <el-row :gutter="4" style="height: 45%">
      <el-col :span="10" style="height: 100%"
        ><!--左上角的两块-->
        <el-card class="bottom" style="height: 44%">
          <el-row>
            <el-col :span="9">
              <img :src="studentInfo.image" alt="未找到文件" />
            </el-col>
            <el-col :span="12">
              <div>昵称：{{ studentInfo.username }}</div>
              <div>学号：{{ studentInfo.studentID }}</div>
              <div>
                {{ semesterInfo.fromYear }}-{{ semesterInfo.toYear }}年度第{{
                  semesterInfo.semester
                }}学期第{{ semesterInfo.week }}周祝您学习愉快!
              </div>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="bottom" style="height: 51%">
          图上说没想好画什么。。。
        </el-card>
      </el-col>
      <el-col :span="14" style="height: 100%">
        <el-card class="bottom" style="height: 97%; overflow: auto">
          <el-tabs>
            <el-tab-pane label="系统公告">
              <el-row
                v-for="announcement in systemAnnouncement"
                :key="announcement.title"
              >
                <el-col :span="19">{{ announcement.title }}</el-col>
                <el-col :span="5"
                  >{{ announcement.date }} {{ announcement.time }}</el-col
                >
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="活动公告">
              <el-row
                v-for="announcement in activityAnnouncement"
                :key="announcement.title"
              >
                <el-col :span="19">{{ announcement.title }}</el-col>
                <el-col :span="5"
                  >{{ announcement.date }} {{ announcement.time }}</el-col
                >
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="4" style="height: 60%">
      <el-col :span="15" style="height: 100%">
        <el-card class="bottom" style="height: 93%">
          <div slot="header" class="clearfix">未来活动</div>
          <el-table
            :data="futureActivity"
            stripe
            style="width: 100%"
            height="270"
          >
            <el-table-column prop="activityName" label="活动名" width="auto">
            </el-table-column>
            <el-table-column prop="initiator" label="发起人" width="auto">
            </el-table-column>
            <el-table-column prop="startDate" label="开始日期" width="auto">
            </el-table-column>
            <el-table-column prop="startTime" label="开始时间" width="auto">
            </el-table-column>
            <el-table-column prop="position" label="地点" width="auto">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="9" style="height: 100%">
        <el-card class="bottom" style="height: 93%">
          <div slot="header" class="clearfix">占用中的场地</div>
          <el-table :data="occupation" stripe style="width: 100%" height="270">
            <el-table-column prop="position" label="地点" width="auto">
            </el-table-column>
            <el-table-column prop="activityName" label="活动名" width="auto">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //第一块卡片信息
      studentInfo: {
        image: "",
        username: "hhh",
        studentID: "1850668",
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
      futureActivity: [
        {
          activityName: "百团大战",
          initiator: "社团联",
          startDate: "2021-9-10",
          startTime: "12:00",
          position: "F201",
        },
        {
          activityName: "赵子昱演讲",
          initiator: "软件学院教务",
          startDate: "2021-12-31",
          startTime: "12:00",
          position: "G404",
        },
      ],
      //第四片卡片信息
      occupation: [
        {
          position: "F201",
          activityName: "数据结构",
        },
        {
          position: "G404",
          activityName: "数据库",
        },
        {
          position: "F201",
          activityName: "数据结构1",
        },
        {
          position: "G404",
          activityName: "数据库2",
        },
        {
          position: "F201",
          activityName: "数据结构3",
        },
        {
          position: "G404",
          activityName: "数据库4",
        },
        {
          position: "F201",
          activityName: "数据结构5",
        },
        {
          position: "G404",
          activityName: "数据库6",
        },
      ],
    };
  },
};
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.bottom {
  margin-bottom: 1%;
}
</style>