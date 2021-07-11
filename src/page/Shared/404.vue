<template>
  <div class="maindiv">
      <h1>404</h1>
      <h2>抱歉，您要访问的页面不存在！</h2>
      <el-button @click="back">返回</el-button>
  </div>
</template>


<style>
html,
body,
#app,
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
</style>

<script>
export default {
  name: "404",
  components: {},
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
