<template>
  <el-container style="height: 100%">
    <el-header style="height: 8%; background-color: white">
      <el-row class="header-row">
        <el-col :span="18" class="header-row-col1"
          ><el-row class="headerrow" type="flex" justify="left" align="middle">
            <el-button class="fold-button" @click="test" type="text">
              <i v-if="isCollapse" class="el-icon-s-unfold"></i
              ><i v-else class="el-icon-s-fold"></i
            ></el-button>
            <!-- <i class="el-icon-s-unfold" @click="test"></i> -->
            <img src="../../assets/tjlogo.png" class="logoImage" />

            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item
                v-for="(item, index) in breadList"
                :key="index"
                @click="this.$router.go(-1)"
                >{{ item.meta.title }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </el-row></el-col
        ><el-col :span="6" class="header-row-col2">
          <el-row class="headerrow" type="flex" justify="end" align="middle">
            <el-button type="text" @click="handleClick"
              ><el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar
            ></el-button>
            <el-button type="text" @click="handleClick">管理员</el-button>
          </el-row></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <el-menu
          default-active="/GroundsAdmin/Main"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          style="height: 100%"
          router
        >
          <el-menu-item index="/GroundsAdmin/Main">
            <i class="el-icon-house"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="/GroundsAdmin/ReviewActivityList">
            <i class="el-icon-finished"></i>
            <span slot="title">审核活动记录</span>
          </el-menu-item>
          <el-menu-item index="/GroundsAdmin/ScoringActivityList">
            <i class="el-icon-edit"></i>
            <span slot="title">活动评价</span>
          </el-menu-item>
          <el-menu-item index="/GroundsAdmin/ReleaseGroundAnnouncement">
            <i class="el-icon-document"></i>
            <span slot="title">发布场地公告</span>
          </el-menu-item>
          <el-menu-item index="/GroundsAdmin/AddCourse">
            <i class="el-icon-date"></i>
            <span slot="title">导入课表</span>
          </el-menu-item>
          <el-menu-item index="/GroundsAdmin/FeedbackActivityList">
            <i class="el-icon-chat-dot-square"></i>
            <span slot="title">查看反馈</span>
          </el-menu-item>
          <el-menu-item index="/GroundsAdmin/GroundList">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">维护场地信息</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- <el-button @click="test"> test</el-button> -->
      <el-main>
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
  overflow: hidden;
}

.el-main {
  overflow: auto;
  /* background-color: wheat; */
  background-color: rgb(237, 241, 245);
}
.header-row {
  height: 100%;
}
.header-row-col1 {
  height: 100%;
}
.header-row-col2 {
  height: 100%;
  /* background-color: azure; */
}
.logoImage {
  height: 40px;
  padding-left: 10px;
  padding-bottom: 5px;
  /* background-color: yellow; */
  /* width: 40%; */
  /* padding: 5%; */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.fold-button {
  font-size: 30px;

  /* border-style: hidden;
  border-color: white;
  background-color: white; */
}
.headerrow {
  font-size: 30px;
  height: 100%;
}
/* .el-icon-s-unfold {
  height: 40px;
  width: 40px;
} */
.el-card {
  border-radius: 15px;
}
/* 面包屑导航 */
.el-breadcrumb {
  /* background-color: thistle; */
  box-sizing: border-box;
  /* height: 100%;
  width: 90%; */
  padding: 5%;
  /* border-bottom: 1px solid #eee; */
}
</style>



<script>
// import sidebar from "../../components/GrandsmanSidebar.vue";
// import myheader from "../../components/ZZYheader.vue";

export default {
  // components: { myheader },
  name: "homepage",
  data() {
    return {
      isCollapse: true,
      value: "",
      breadList: [],
    };
  },
  methods: {
    test() {
      this.isCollapse = !this.isCollapse;
    },

    handleClick() {
      this.$router.push({ path: "/GroundsAdmin/AccountModify" });
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
