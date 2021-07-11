<template>
  <div class="maindiv">
      <h1 class="title1">404</h1>
      <h2 class="title2">抱歉，您要访问的页面不存在！</h2>
      <el-row type="flex" justify="center" style="margin: 0px 0 10px 0px">
      <el-button @click="back" type="primary" class="backbutton" style="text-align:center">返回</el-button>
      </el-row>
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
.title1 {
  font-size: 28px;
  text-align: center;
  font-weight: bold;
}
.title2 {
  font-size: 22px;
  text-align: center;
  font-weight: bold;
}
.maindiv {
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
