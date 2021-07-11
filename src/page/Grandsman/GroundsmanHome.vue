
<template>
  <div>
    <!-- 第一行布局 -->
    <el-row class="upperrow">
      <el-col :span="10" class="upper-row-col1">
        <el-card class="person-info-card">
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
      </el-col>
      <el-col :span="14" class="upper-row-col2">
        <el-card class="system-announcement-card">
          <div slot="header" class="clearfix">
            <span>系统公告</span>
            <router-link to="/GroundsAdmin/ReviewActivityList"><el-button style="float: right; padding: 3px 0" type="text"
              >查看更多</el-button
            ></router-link>
          </div>
          <el-table
            :data="systemannouncement"
            style="width: 100%"
            height="140px"
            :show-header="false"
          >
            <el-table-column prop="text" label="内容"> </el-table-column>
            <el-table-column prop="date" label="日期"> </el-table-column>
          </el-table>
          <!-- <div
                v-for="(item, index) in systemannouncement"
                :key="index"
                class="text item"
              >
                <div class="announcement-text">{{ item.text }}</div>
                <div class="announcement-date">{{ item.date }}</div>
              </div> -->
        </el-card>
      </el-col>
    </el-row>
    <!-- 第二行布局 -->
    <el-row class="lowerrow">
      <el-col :span="14" class="appointment-col">
        <el-card class="appointment-card">
          <div slot="header" class="clearfix">
            <span>待审核预约</span>
            <router-link to="/GroundsAdmin/ReviewActivityList">
            <el-button style="float: right; padding: 3px 0" type="text"
              >查看更多</el-button
            >
            </router-link>
          </div>
          <el-table
            :data="appointment"
            style="width: 100%"
            height="200px"
            :show-header="false"
          >
            <el-table-column prop="title" label="内容"> </el-table-column>
            <el-table-column prop="ground" label="日期"> </el-table-column>
            <el-table-column prop="datetime" label="日期"> </el-table-column>
          </el-table>
          <!-- <div
                v-for="(item, index) in appointment"
                :key="index"
                class="text item"
              >
                <div class="appointment-title">{{ item.title }}</div>
                <div class="appointment-ground">{{ item.ground }}</div>
                <div class="appointment-datetime">{{ item.datetime }}</div>
              </div> -->
        </el-card>
      </el-col>
      <el-col :span="10" class="ground-col">
        <el-card class="grand-card">
          <div slot="header" class="clearfix">
            <span>占用中的场地</span>
            <!-- <router-link to="/groundinfo"
              ><el-button style="float: right; padding: 3px 0" type="text"
                >操作按钮</el-button
              ></router-link
            > -->
          </div>
          <el-table
            :data="busyground"
            style="width: 100%"
            height="200px"
            :show-header="false"
          >
            <el-table-column prop="groundname" label="内容"> </el-table-column>
            <el-table-column prop="activityname" label="日期">
            </el-table-column>
            <el-table-column prop="time" label="占用时间"> </el-table-column>
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
      </el-col>
    </el-row>
  </div>
</template>

<style>
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
  line-height:20px
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
.el-header {
  background-color: white;
}
.el-aside {
  background-color: white;
}
.el-main {
  background-color: rgb(237, 241, 245);
}

.person-info-col {
  /* background-color: teal; */
  height: 50%;
  padding: 5px;
}

.appointment-col {
  /* background-color: thistle; */
  padding: 5px;
}
.ground-col {
  /* background-color: rgb(19, 179, 201); */
  padding: 5px;
}

.el-card {
  border-radius: 15px;
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

.box-card {
  width: 480px;
}

.upper-row-col1 {
  height: 100%;
  padding: 5px;
}
.upper-row-col2 {
  height: 100%;
  padding: 5px;
}
.person-info-card {
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
.appointment-col {
  height: 100%;
}
.ground-col {
  height: 100%;
}
</style>



<script>
export default {
  name: "GrandsmanHome",
  data() {
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
      systemannouncement: [
        { text: "明天维护", date: "2021-6-1" },
        { text: "明天维护", date: "2021-6-1" },
        { text: "明天维护", date: "2021-6-1" },
        { text: "明天维护", date: "2021-6-1" },
        { text: "明天维护", date: "2021-6-1" },
        { text: "明天维护", date: "2021-6-1" },
        { text: "明天维护", date: "2021-6-1" },
        { text: "明天维护", date: "2021-6-1" },
      ],
      appointment: [
        { title: "数据库会议", ground: "广楼101", datetime: "2021-6-1 19:00" },
        { title: "数据库会议", ground: "广楼101", datetime: "2021-6-1 19:00" },
        { title: "数据库会议", ground: "广楼101", datetime: "2021-6-1 19:00" },
        { title: "数据库会议", ground: "广楼101", datetime: "2021-6-1 19:00" },
        { title: "数据库会议", ground: "广楼101", datetime: "2021-6-1 19:00" },
        { title: "数据库会议", ground: "广楼101", datetime: "2021-6-1 19:00" },
      ],
      busyground: [
        {
          groundname: "广楼666",
          activityname: "数据库会议",
          time: "16:00-18:00",
        },
        {
          groundname: "广楼666",
          activityname: "数据库会议",
          time: "16:00-18:00",
        },
        {
          groundname: "广楼666",
          activityname: "数据库会议",
          time: "16:00-18:00",
        },
        {
          groundname: "广楼666",
          activityname: "数据库会议",
          time: "16:00-18:00",
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
  methods: {},
};
</script>