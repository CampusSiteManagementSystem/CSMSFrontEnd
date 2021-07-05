<template>
  <div class="maindiv">
    <el-card class="maincard">
    <h1 class="maintitle">关于图书馆暂停开放的通知</h1>
    <p>因疫情防控需要，图书馆于7月1日起暂停开放，恢复时间另行通知。不便之处，敬请谅解。</p>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'AnnouncementInfo',
      components: {
    },
    data() {
    }
  };
</script>

<style>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
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
</style>
