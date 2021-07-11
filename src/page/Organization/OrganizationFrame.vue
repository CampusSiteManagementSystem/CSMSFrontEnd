<template>
  <el-container style="border: 1px solid #eee; height: 100%">
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
            <el-button type="text" @click="handleClick">软件学院</el-button>
          </el-row></el-col
        >
      </el-row>
    </el-header>

    <el-container style="height: 100%">
      <el-aside style="width: auto">
        <el-menu
          class="el-menu-vertical-demo"
          default-active="/OrgFrame/Main"
          router
          active-text-color="#409EFF"
          :collapse="isCollapse"
          style="height: 100%"
        >
          <!-- <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item> -->

          <el-menu-item index="/OrgFrame/Main">
            <i class="el-icon-s-home"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu>
            <template slot="title">
              <i class="el-icon-search"></i>
              <span slot="title">查看</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/OrgFrame/CheckActivity">
                <i class="el-icon-date"></i>
                查看活动
              </el-menu-item>
              <el-menu-item index="/OrgFrame/CheckOrgan">
                <i class="el-icon-s-flag"></i>
                查看组织
              </el-menu-item>
              <el-menu-item index="/OrgFrame/CheckSite">
                <i class="el-icon-s-home"></i>
                查看地点
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/OrgFrame/ShowMap">
            <i class="el-icon-map-location"></i>
            <span slot="title">查看地图</span>
          </el-menu-item>
          <el-menu-item index="/OrgFrame/ApplySite">
            <i class="el-icon-location"></i>
            <span slot="title">预约场地</span>
          </el-menu-item>
          <el-menu-item index="/OrgFrame/Appointment">
            <i class="el-icon-s-claim"></i>

            <span slot="title">查看预约记录</span>
          </el-menu-item>
          <el-menu-item index="/OrgFrame/CreditScore">
            <i class="el-icon-s-custom"></i>

            <span slot="title">查看信用分</span>
          </el-menu-item>
          <el-menu-item index="/OrgFrame/OrgFavorite">
            <i class="el-icon-star-on"></i>

            <span slot="title">查看收藏</span>
          </el-menu-item>
          <el-menu-item index="/OrgFrame/FinishActivity">
            <i class="el-icon-chat-line-round"></i>

            <span slot="title">活动反馈</span>
          </el-menu-item>
          <el-menu-item index="/OrgFrame/Announcement">
            <i class="el-icon-postcard"></i>

            <span slot="title">查看公告</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main
        style="height: 100%; overflow: auto; background: rgb(237, 241, 245)"
      >
        <keep-alive>
          <router-view style="height: 100%"></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
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
      this.$router.push("/OrgFrame/OrgAccountModify");
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
  overflow: hidden;
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