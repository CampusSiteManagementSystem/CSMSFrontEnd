<template>
  <div>
    <el-row class="upper-row">
      <el-col :span="10" class="upper-row-col1"
        ><!--左上角的两块-->
        <el-card class="upper-card">
          <el-row>
            <el-col :span="9">
              <div>
                <el-avatar :size="130" :src="orgnizationInfo.image"></el-avatar>
              </div>
            </el-col>
            <el-col :span="15">
              <div class="name">{{ orgnizationInfo.username }}</div>
              <div class="other-info">
                <br />ID：{{ orgnizationInfo.orgnizationID }}<br />负责人：{{
                  orgnizationInfo.functionary
                }}<br />组织类型：<el-tag type="success">
                  {{ orgnizationInfo.type }}
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
          <el-tabs addable="true" @tab-add="showAnnouncement">
            <el-tab-pane label="系统公告">
              <el-table
                :data="systemAnnouncement"
                stripe
                style="width: 100%"
                height="150"
                :show-header="false"
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
                height="150"
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
            <span>未来活动</span>
            <router-link to="/OrgFrame/CheckActivity">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>

          <el-table
            :data="futureActivity"
            stripe
            style="width: 100%"
            height="260"
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
      <el-col :span="9" class="lower-row-col2">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span>占用中的场地</span>
            <router-link to="/OrgFrame/CheckSite">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>

          <el-table :data="occupation" stripe style="width: 100%" height="260">
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
      orgnizationInfo: {
        image:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        username: "数据库爱好者",
        orgnizationID: "1850668",
        type: "学生社团",
        functionary: "小王",
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
  methods: {
    showAnnouncement() {
      this.$router.push("/OrgFrame/Announcement");
    },
  },
};
</script>

<style scoped>
.el-card {
  border-radius: 15px;
  height: 100%;
}
.upperrow {
  padding: 5px;
  height: 40%;
}
.lowerrow {
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