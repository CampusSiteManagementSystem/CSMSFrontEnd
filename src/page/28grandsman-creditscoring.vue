<template>
  <el-container class="outcontainer" style="height=100%">
    <!-- 顶栏 -->
          <el-aside width="15%"><sidebar></sidebar></el-aside>

    
    <!-- 嵌套容器 -->
    <el-container >
      <!-- 侧边导航菜单 -->
      <!-- 内容 -->
      <el-header height="9%">
        <myheader></myheader>
      <!-- <h2>Element 页面布局</h2> -->
    </el-header>
      <el-main>
        <el-col :span="12">
          <el-card class="maincard">
            <h1 class="maintitle">活动详情</h1>
            <div class="detailinfo">
              <p class="">场地：{{ building }}{{ roomno }}</p>
              <p class="">活动名称：{{ activityname }}</p>
              <p class="">活动时间：{{ activitytime }}</p>
              <p class="">主办组织：{{ groupname }}</p>
            </div>
            <!-- <el-divider content-position="center">详细信息</el-divider> -->
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="maincard">
            <h1 class="maintitle">信用评分</h1>
            <div class="detailinfo">
              评分：
              <el-input-number
                size="small"
                v-model="score"
                :step="1"
                :max="5"
                :min="-5"
              ></el-input-number>
            </div>
            <el-divider content-position="center">详细信息</el-divider>

            <el-form ref="form" label-width="80px">
              <el-form-item label="评分理由">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 5, maxRows: 10 }"
                  v-model="reason"
                  placeholder="请输入评分理由"
                  maxlength="50"
                  show-word-limit
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="publish">发布</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
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

.el-card {
  height: 100%;
}
.el-input {
  height: 50%;
}
.detailinfo {
  padding: 15px;
}
.el-col {
  padding: 5px;
  /* height: */
  height: 100%;
}
.header-row{
  background-color: rgb(158, 29, 29);
}
</style>



<script>
import sidebar from "../components/sidebar.vue";
import myheader from "../components/myheader.vue";

export default {
  components: {myheader, sidebar, },
  name: "creditscoring",
  data() {
    return {
      reason: "",
      building: "同心楼",
      roomno: 666,
      activityname: "数据库会议",
      activitytime: "2021-6-1 17:00-21:00",
      groupname: "李经理",
      score: 0,
    };
  },
  methods: {
    publish() {
      this.$message({
        message: "评分成功",
        type: "success",
      });
    },
    form() {},
  },
};
</script>