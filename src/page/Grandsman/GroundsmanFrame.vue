<template>
  <el-container class="666" style="height=100%">
    <el-aside width="15%"><sidebar></sidebar></el-aside>
    <el-container>
      <el-header style="height: 10%;background-color: #d7e4f7">
        <myheader></myheader>
      </el-header>
      <el-main style="height: 90%; overflow: auto">
        <keep-alive>
          <router-view style="height: 100%"></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>



<style scpoed>
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

</style>



<script>
import sidebar from "../../components/GrandsmanSidebar.vue";
import myheader from "../../components/ZZYheader.vue";

export default {
  components: { myheader, sidebar },
  name: "homepage",
};
</script>