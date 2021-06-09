<template>
  <el-container class="outcontainer" style="height=100%">
    <!-- 顶栏 -->
         <el-aside width="15%"><sidebar></sidebar></el-aside>

    <!-- 嵌套容器 -->
    <el-container >
      <!-- 侧边导航菜单 -->
       <el-header height="9%">
        <myheader></myheader>
    </el-header>
      <!-- 内容 -->
      <el-main>
        <div class="maindiv">
          <el-card class="maincard">
            <h1 class="maintitle">待评分活动</h1>
            <!-- <p class="groundinfo">{{ num }}个活动</p> -->
            <el-table
              height="475"
              ref="filterTable"
              :data="tableData"
              style="width: 100%"
              :default-sort="{ prop: 'time', order: 'descending' }"
            >
              <el-table-column
                prop="time"
                label="开始时间"
                sortable
                width="180"
              >
              </el-table-column>
              <el-table-column prop="activityname" label="活动" width="180">
              </el-table-column>
              <el-table-column prop="groupname" label="组织" width="180">
              </el-table-column>
              <el-table-column prop="ground" label="场地" width="180">
              </el-table-column>
              <el-table-column
                prop="scoreingtag"
                label="是否评分"
                column-key="scoreingtag"
                :filters="[
                  { text: '已评分', value: true },
                  { text: '未评分', value: false },
                ]"
                :filter-method="filterHandler"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="
                      scope.row.scoreingtag == false ? 'primary' : 'success'
                    "
                    disable-transitions
                    >{{
                      scope.row.scoreingtag == false ? "未评分" : "已评分"
                    }}</el-tag
                  >
                </template>
              </el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <router-link to="/creditscoring">
                  <el-button @click="handleClick(scope.row)" type="text"
                    >查看详情</el-button
                  >
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
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

.el-header {
  background-color: white;
}
.el-aside {
  background-color: white;
}
.el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
}
.maintitle {
  text-align: center;
  font-size: 27px;
}
.groundinfo {
  text-align: right;
}
.el-card {
  height: 100%;
}
.maindiv {
  /* background-color: floralwhite; */
  height: 100%;
}
.sidebar{
  height: 500px;
  background-color: violet;
}
</style>



// <script>
import sidebar from "../components/sidebar.vue";
import myheader from "../components/myheader.vue";

export default {
  components: {myheader, sidebar, },
  name: "groundannouncement",
  data() {
    return {
      content: "",
      building: "同心楼",
      roomno: 666,
      num: 16,
      tableData: [
        {
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          scoreingtag: true,
        },
        {
          time: "2016-05-04",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1517 弄",
          ground: "同心楼666",
          scoreingtag: false,
        },
        {
          time: "2016-05-01",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1519 弄",
          ground: "同心楼666",
          scoreingtag: false,
        },
        {
          time: "2016-05-03",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1516 弄",
          ground: "同心楼666",
          scoreingtag: true,
        },
        {
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          scoreingtag: true,
        },
        {
          time: "2016-05-04",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1517 弄",
          ground: "同心楼666",
          scoreingtag: false,
        },
        {
          time: "2016-05-01",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1519 弄",
          ground: "同心楼666",
          scoreingtag: false,
        },
        {
          time: "2016-05-03",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1516 弄",
          ground: "同心楼666",
          scoreingtag: true,
        },
        {
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          scoreingtag: true,
        },
        {
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          scoreingtag: true,
        },
        {
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          scoreingtag: true,
        },
      ],
    };
  },
  methods: {
    publish() {
      this.$message({
        message: "公告发布成功",
        type: "success",
      });
    },
    onSubmit() {
      this.editstate = false;
    },
    formatter(row) {
      return row.address;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    handleClick(row) {
      console.log(row.activityname);
    },
  },
};
</script>