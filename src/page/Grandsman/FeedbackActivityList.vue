<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div class="maintitle">活动反馈</div>
      <!-- <p class="groundinfo">{{ num }}个活动</p> -->
      <el-table
        height="520"
        ref="filterTable"
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'time', order: 'descending' }"
      >
        <el-table-column prop="time" label="开始时间" sortable width="180">
        </el-table-column>
        <el-table-column prop="activityname" label="活动" width="180">
        </el-table-column>
        <el-table-column prop="groupname" label="组织" width="180">
        </el-table-column>
        <el-table-column prop="ground" label="场地" width="180">
        </el-table-column>
        <el-table-column
          prop="feedbackTag"
          label="是否反馈"
          column-key="feedbackTag"
          :filters="[
            { text: '已反馈', value: true },
            { text: '未反馈', value: false },
          ]"
          :filter-method="filterHandler"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.feedbackTag == false ? 'primary' : 'success'"
              disable-transitions
              >{{
                scope.row.feedbackTag == false ? "未反馈" : "已反馈"
              }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text"
              >查看反馈</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
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

.maintitle {
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
}
.groundinfo {
  text-align: right;
}
/* .el-card {
  height: 100%;
} */
.maindiv {
  /* background-color: floralwhite; */
  height: 100%;
}
</style>



// <script>
export default {
  name: "ActivityList",
  data() {
    return {
      content: "",
      building: "同心楼",
      roomno: 666,
      num: 16,
      tableData: [
        {
          activityID: "11111",
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          feedbackTag: true,
        },
        {
          activityID: "22222",
          time: "2016-05-04",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1517 弄",
          ground: "同心楼666",
          feedbackTag: false,
        },
        {
          activityID: "33333",
          time: "2016-05-01",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1519 弄",
          ground: "同心楼666",
          feedbackTag: false,
        },
        {
          activityID: "44444",
          time: "2016-05-03",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1516 弄",
          ground: "同心楼666",
          feedbackTag: true,
        },
        {
          activityID: "55555",
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          feedbackTag: true,
        },
        {
          activityID: "66666",
          time: "2016-05-04",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1517 弄",
          ground: "同心楼666",
          feedbackTag: false,
        },
        {
          activityID: "66666",
          time: "2016-05-01",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1519 弄",
          ground: "同心楼666",
          feedbackTag: false,
        },
        {
          activityID: "22222",
          time: "2016-05-03",
          activityname: "王小虎",
          groupname: "上海市普陀区金沙江路 1516 弄",
          ground: "同心楼666",
          feedbackTag: true,
        },
        {
          activityID: "22222",
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          feedbackTag: true,
        },
        {
          activityID: "22222",
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          feedbackTag: true,
        },
        {
          activityID: "22222",
          time: "2016-05-02",
          activityname: "数据库会议",
          groupname: "上海市普陀区金沙江路 1518 弄",
          ground: "同心楼666",
          feedbackTag: true,
        },
      ],
    };
  },
  methods: {
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
      if (row.feedbackTag == false) {
        this.$message({
          showClose: true,
          message: "此活动未收到反馈",
          type: "error",
        });
      } else {
        this.$router.push({
          name: "FeedbackInfo",
          params: { ID: row.activityID },
        });
      }
    },
  },
};
</script>