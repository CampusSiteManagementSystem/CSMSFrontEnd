<template>
  <el-container class="outcontainer" style="height=100%">
    <!-- 顶栏 -->
          <el-aside width="15%"><sidebar></sidebar></el-aside>

    <!-- 嵌套容器 -->
    <el-container>
      <el-header height="9%">
        <myheader></myheader>
    </el-header>
      <!-- 侧边导航菜单 -->
      <!-- 内容 -->
      <el-main>
        <el-card class="maincard">
          <h1 class="maintitle">发布场地公告</h1>
          <h1 class="groundinfo">场地：{{ building }}{{ roomno }}</h1>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公告内容">
              <el-input
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 10 }"
                v-model="content"
                placeholder="请输入公告内容"
                maxlength="100"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="publish">发布</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
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
.groundinfo {
  text-align: center;
}
.el-card {
  height: 99.6%;
}
.el-input {
  height: 50%;
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