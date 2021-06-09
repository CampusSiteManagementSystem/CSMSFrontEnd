<template>
  <el-container class="outcontainer" style="height=100%">
    <!-- 顶栏 -->
         <el-aside width="15%"><sidebar></sidebar></el-aside>

    <!-- 嵌套容器 -->
    <el-container>
      <!-- 侧边导航菜单 -->
       <el-header height="9%">
        <myheader></myheader>
    </el-header>
      <!-- 内容 -->
      <el-main>
        <el-card class="maincard">
          <h1 class="maintitle">信用分详情</h1>
        </el-card>
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
  background-color: chartreuse;
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
  height: 99.6%;
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
      group: {
        name: "数据库小组",
        id: "1956666",
        score: 65,
      },
      activity: {
        id: "oo66666",
        name: "数据库会议",
        num: 20,
        time: "2021-6-1 15:00-17:00",
        describe: "讨论数据库课设有关内容",
      },
      ground: {
        id: "423546",
      },
      creditrecord: {
        score: -3,
        reason: "破坏公物，乱丢垃圾，大声吵闹，不讲文明",
      },
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
  },
};
</script>