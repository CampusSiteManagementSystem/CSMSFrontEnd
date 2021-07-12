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
                <el-table-column prop="time" width="auto"> </el-table-column>
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
            <span><b>未来活动</b></span>
            <router-link to="/StuFrame/ViewActivities">
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
            <el-table-column prop="host" label="发起组织" width="auto">
            </el-table-column>
            <el-table-column prop="time" label="时间" width="auto">
            </el-table-column>
            <el-table-column prop="location" label="地点" width="auto">
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
            <el-table-column prop="position" label="地点" width="auto">
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
        <p><b>活动名称：</b>{{ activitySelected.name }}</p>
        <p><b>举办组织：</b>{{ activitySelected.host }}</p>
        <p><b>活动时间：</b>{{ activitySelected.time }}</p>
        <p><b>活动地点：</b>{{ activitySelected.location }}</p>
        <p><b>参与人数：</b>{{ activitySelected.participantnum }}</p>
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

      //弹出式公告
      dialogTitle: "",
      dialogContent: "",
      dialogVisible: false,
      activityVisible: false,
      activitySelected: {
        id: 65535,
        name: "批评大会",
        description: "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
        host: "德育办公室",
        time: "2021-5-28 14:30",
        location: "129礼堂",
        participantnum: 0,
      },
      groundAnnouncement: Array(20).fill(groundItem),
      systemAnnouncement: Array(20).fill(systemItem),

      //第三块卡片信息
      futureActivity: [
        {
          id: 65535,
          name: "批评大会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:30",
          location: "129礼堂",
          participantnum: 10,
        },
        {
          id: 65536,
          name: "批评大会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:31",
          location: "129礼堂",
          participantnum: 20,
        },
        {
          id: 65537,
          name: "新闻发布会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:32",
          location: "129礼堂",
          participantnum: 30,
        },
        {
          id: 65538,
          name: "批评大会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:33",
          location: "129礼堂",
          participantnum: 40,
        },
        {
          id: 65539,
          name: "批评大会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:34",
          location: "129礼堂",
          participantnum: 50,
        },
      ],
      //第四片卡片信息
      occupation: [
        {
          groundID: "12201",
          position: "F201",
          activityName: "数据结构",
        },
        {
          groundID: "21404",
          position: "G404",
          activityName: "数据库",
        },
        {
          groundID: "35130",
          position: "F201",
          activityName: "数据结构1",
        },
        {
          groundID: "35404",
          position: "G404",
          activityName: "数据库2",
        },
        {
          groundID: "21404",
          position: "F201",
          activityName: "数据结构3",
        },
        {
          groundID: "21404",
          position: "G404",
          activityName: "数据库4",
        },
        {
          groundID: "21404",
          position: "F201",
          activityName: "数据结构5",
        },
        {
          groundID: "21404",
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
      this.$router.push("/OrgFrame/ShowSchedule/" + row.groundID);
    }
  },
};
</script>

<style scpoed>
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