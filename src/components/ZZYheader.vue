<template>
  <el-row
    class="headerrow"
    type="flex"
    justify="end"
    align="middle"
    @click="handleClick"
  >
    <el-col :span="6"
      ><el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item, index) in breadList"
          :key="index"
          @click="this.$router.go(-1)"
          >{{ item.meta.title }}</el-breadcrumb-item
        >
      </el-breadcrumb></el-col
    >
    <el-col :span="6">
      <el-button type="text"
        ><el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar
      ></el-button>
      <el-button type="text" @click="handleClick">王二狗</el-button>
    </el-col>
  </el-row>
</template>



<script>
export default {
  name: "GroundsmanHeader",
   data() {
    return {
      value: "",
      breadList: [],
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ path: "Home" });
    },
    /**
     * @description 获取路由数组
     * @params val 路由参数
     */
    getBreadList(val) {
      // 过滤路由matched对象
      console.log("val.matched", val.matched);
      if (val.matched) {
        let matched = val.matched.filter(
          (item) => item.meta && item.meta.title
        );
        console.log("matched", matched);
        // 拿到过滤好的路由v-for遍历出来
        this.breadList = matched;
      }
      this.breadList = val.matched;
      console.log("this.breadList", this.breadList);
    },
  },
  watch: {
    // 监听路由
    $route(val) {
      // 调用获取路由数组方法
      this.getBreadList(val);
      console.log("调用获取路由数组方法", this.getBreadList(val));
    },
  },
};
</script>








<style scoped>
/* 面包屑导航 */
.el-breadcrumb {
  box-sizing: border-box;
    height: 90%;
  width: 90%;
  padding: 5%;
  /* border-bottom: 1px solid #eee; */
}
</style>