<template>
  <div>
    <!-- 第一行布局 -->
    <el-row class="upperrow">
      <el-col :span="10" class="upper-row-col1">
        <!-- <el-collapse-transition> -->
        <el-card class="upper-card">
          <el-col :span="8" class="person-info-card-photo-col">
            <div>
              <el-avatar :size="130" :src="personinfo.photosrc"></el-avatar>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="name">{{ personinfo.name }}</div>
            <div class="other-info">
              <br />工号：1956666<br />管理场地：<el-tag
                v-for="(ground, i) in personinfo.grounds"
                :key="i"
                :type="personinfo.type[i % 5]"
              >
                {{ ground }}
              </el-tag>
            </div>
            <div class="date">{{ personinfo.date }}</div>
            <div class="other-info">祝您工作愉快！</div>
          </el-col>
        </el-card>
        <!-- </el-collapse-transition> -->
      </el-col>
      <el-col :span="14" class="upper-row-col2">
        <!-- <el-collapse-transition> -->
        <el-card class="upper-card">
          <div slot="header" class="clearfix">
            <span>系统公告</span>
            <router-link to="/GroundsAdmin/Announcement"
              ><el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              ></router-link
            >
          </div>
          
          <el-table
            :data="systemAnnouncement"
            style="width: 100%"
            height="131px"
            :show-header="false"
            @row-click="onRowClick"
          >
            <el-table-column prop="title" label="内容"> </el-table-column>
            <el-table-column prop="time" label="日期"> </el-table-column>
          </el-table>
        </el-card>
        <!-- </el-collapse-transition> -->
      </el-col>
    </el-row>
    <!-- 第二行布局 -->
    <el-row class="lowerrow">
      <el-col :span="14" class="appointment-col">
        <!-- <el-collapse-transition> -->
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
            :data="appointment"
            style="width: 100%"
            height="251px"
            :show-header="false"
            @row-click="onReviewRowClick"
          >
            <el-table-column prop="title" label="内容"> </el-table-column>
            <el-table-column prop="ground" label="日期"> </el-table-column>
            <el-table-column prop="datetime" label="日期"> </el-table-column>
          </el-table>
        </el-card>
        <!-- </el-collapse-transition> -->
      </el-col>
      <el-col :span="10" class="ground-col">
        <!-- <el-collapse-transition> -->
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span><b>占用中的场地</b></span>
            <!-- <router-link to="/groundinfo"
              ><el-button style="float: right; padding: 3px 0" type="text"
                >操作按钮</el-button
              ></router-link
            > -->
          </div>
          <el-table
            :data="busyground"
            style="width: 100%"
            height="252px"
            :show-header="false"
            @row-click="onOccupyRowClick"
          >
            <el-table-column prop="position" label="内容"> </el-table-column>
            <el-table-column prop="activityName" label="活动名称">
            </el-table-column>
          </el-table>
          <!-- <div
                v-for="(item, index) in busyground"
                :key="index"
                class="text item"
              >
                <div class="busyground-groundname">{{ item.groundname }}</div>
                <div class="busyground-activityname">
                  {{ item.activityname }}
                </div> 
              </div>-->
        </el-card>
        <!-- </el-collapse-transition> -->
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
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
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

.appointment-col {
  /* background-color: thistle; */
  padding: 5px;
}
.ground-col {
  /* background-color: rgb(19, 179, 201); */
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

.upper-row-col1 {
  height: 100%;
  padding: 5px;
}
.upper-row-col2 {
  height: 100%;
  padding: 5px;
}

.upperrow {
  padding: 5px;
  height: 40%;
}
.lowerrow {
  padding: 5px;
  height: 60%;
}
.appointment-col {
  height: 100%;
}
.ground-col {
  height: 100%;
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
</style>



<script>
export default {
  name: "GrandsmanHome",
  data() {
    const systemItem = {
      title: "关于系统停机维护的通知",
      time: "2021-7-5 15:30",
      accountNum: "14335",
      content:
        "本系统将于7月10日23:00至7月11日7:00停机维护。不便之处，敬请谅解。",
    };

    return {
      personinfo: {
        photosrc:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        name: "老王",
        id: 1956666,
        grounds: ["复楼", "诚楼"],
        type: ["", "success", "info", "warning", "danger"],
        date: "2020-2021学年第2学期第13周",
      },

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
      systemAnnouncement: Array(20).fill(systemItem),

      appointment: [
        {
          activityID: "0001",
          title: "数据库会议",
          ground: "广楼101",
          datetime: "2021-6-1 19:00",
        },
        {
          activityID: "0002",
          title: "数据库会议",
          ground: "广楼101",
          datetime: "2021-6-1 20:00",
        },
        {
          activityID: "0003",
          title: "数据库会议",
          ground: "广楼101",
          datetime: "2021-6-1 21:00",
        },
        {
          activityID: "0004",
          title: "数据库会议",
          ground: "广楼101",
          datetime: "2021-6-1 22:00",
        },
        {
          activityID: "0005",
          title: "数据库会议",
          ground: "广楼101",
          datetime: "2021-6-1 23:00",
        },
        {
          activityID: "0006",
          title: "数据库会议",
          ground: "广楼101",
          datetime: "2021-6-2 00:00",
        },
      ],
      busyground: [
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
      msg: "666",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    onRowClick(row) {
      this.dialogTitle = row.title;
      this.dialogContent = row.content;
      this.dialogVisible = true;
    },
    onOccupyRowClick(row) {
      this.$router.push("/GroundsAdmin/ShowSchedule/" + row.groundID);
    },
    onReviewRowClick(row) {
      this.$router.push("/GroundsAdmin/ActivityInfo/" + row.activityID);
    },
  },
};
</script>