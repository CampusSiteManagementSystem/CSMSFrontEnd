<template>
  <el-container class="666" style="height=100%">
    <!-- 顶栏 -->
    <el-aside width="15%"><sidebar></sidebar></el-aside>

    <!-- 嵌套容器 -->
    <el-container>
      <!-- 侧边导航菜单 -->
      <el-header height="60px">
        <myheader></myheader>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <!-- 第一列栅格布局 -->
        <el-row class="upper-row">
          <el-col :span="10" class="upper-row-col1">
            <el-col :span="24" class="person-info-col">
              <el-card class="person-info-card">
                <el-col :span="8" class="person-info-card-photo-col">
                  <div>
                    <el-avatar
                      :size="130"
                      :src="personinfo.photosrc"
                    ></el-avatar>
                  </div>
                </el-col>
                <el-col :span="16">
                  <div class="name">{{ personinfo.name }}</div>
                  <div class="other-info">
                    <br />工号：1956666<br />管理场地：{{ personinfo.grounds
                    }}<br />{{ personinfo.date }}<br />祝您工作愉快！
                  </div>
                </el-col>
              </el-card>
            </el-col>
            <el-col :span="24" class="col4">
              <el-card class="unknown-card"> </el-card>
            </el-col>
          </el-col>
          <el-col :span="14" class="upper-row-col2">
            <el-card class="system-announcement-card">
              <div slot="header" class="clearfix">
                <span>系统公告</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >查看更多</el-button
                >
              </div>
              <el-table
                :data="systemannouncement"
                style="width: 100%"
                height="200px"
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
        <!-- 第二列布局 -->
        <el-row class="lower-row">
          <el-col :span="14" class="appointment-col">
            <el-card class="appointment-card">
              <div slot="header" class="clearfix">
                <span>待审核预约</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >查看更多</el-button
                >
              </div>
              <el-table
                :data="appointment"
                style="width: 100%"
                height="200px"
                :show-header="false"
              >
                <el-table-column prop="title" label="内容"> </el-table-column>
                <el-table-column prop="ground" label="日期"> </el-table-column>
                <el-table-column prop="datetime" label="日期">
                </el-table-column>
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
          <el-col :span="10" class="grand-col">
            <el-card class="grand-card">
              <div slot="header" class="clearfix">
                <span>占用中的场地</span>
                <router-link to="/groundinfo"
                  ><el-button style="float: right; padding: 3px 0" type="text"
                    >操作按钮</el-button
                  ></router-link
                >
              </div>
              <el-table
                :data="busyground"
                style="width: 100%"
                height="200px"
                :show-header="false"
              >
                <el-table-column prop="groundname" label="内容"> </el-table-column>
                <el-table-column prop="activityname" label="日期"> </el-table-column>
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
      </el-main>
    </el-container>
    <!-- 底栏 -->
    <!-- <el-footer height="30px">&copy;究极死胖兽 2019</el-footer> -->
  </el-container>
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

/* 系统公告字体 */
.busyground-groundname,
.announcement-text {
  text-align: left;
  width: 70%;
  float: left;
}
.busyground-activityname,
.announcement-date {
  text-align: right;
  width: 30%;
  float: left;
  color: darkgray;
}
.appointment-title {
  text-align: left;
  width: 50%;
  float: left;
}
.appointment-ground {
  text-align: left;
  width: 20%;
  float: left;
  color: darkgray;
}
.appointment-datetime {
  text-align: right;
  width: 30%;
  float: left;
  color: darkgray;
}

.name {
  font-size: 30px;
}
.other-info {
  font-size: 15px;
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

.el-col {
  height: 300px;
}

.person-info-col {
  /* background-color: teal; */
  height: 65%;
  padding: 5px;
}
.upper-row-col2 {
  /* background-color: tomato; */
  padding: 5px;
}
.appointment-col {
  /* background-color: thistle; */
  padding: 5px;
}
.grand-col {
  /* background-color: rgb(19, 179, 201); */
  padding: 5px;
}
.col4 {
  /* background-color: rgb(253, 237, 14); */
  height: 35%;
  padding: 5px;
}
.el-card {
  height: 100%; /*  卡片高度问题 */
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
</style>



<script>
import sidebar from "../components/sidebar.vue";
import myheader from "../components/myheader.vue";

export default {
  components: { myheader, sidebar },
  name: "homepage",
  data() {
    return {
      personinfo: {
        photosrc:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        name: "老王",
        id: 1956666,
        grounds: ["复楼", "诚楼"],
        date: "2020-2021学年度第2学期第13周",
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
        { groundname: "广楼666", activityname: "数据库会议" },
        { groundname: "广楼666", activityname: "数据库会议" },
        { groundname: "广楼666", activityname: "数据库会议" },
        { groundname: "广楼666", activityname: "数据库会议" },
        { groundname: "广楼666", activityname: "数据库会议" },
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