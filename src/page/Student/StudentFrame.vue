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
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link" trigger="click">
                张三<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="accountInfo">账号信息</el-dropdown-item>
                <el-dropdown-item command="modifyPassword">修改密码</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row></el-col
        >
      </el-row>
    </el-header>
    <el-container style="height: 100%">
      <el-aside style="width: auto">
        <el-menu
          class="el-menu-vertical-demo"
          default-active="/StuFrame/Main"
          router
          active-text-color="#409EFF"
          :collapse="isCollapse"
          style="height: 100%"
        >
          <el-menu-item index="/StuFrame/Main">
            <i class="el-icon-s-home"></i>
            <span style="font-size: 14px">主页</span>
          </el-menu-item>
          <el-menu-item index="/StuFrame/Map">
            <i class="el-icon-map-location"></i>
            <span style="font-size: 14px">查看地图</span>
          </el-menu-item>
          <el-menu-item index="/StuFrame/ShowPlaceDetail">
            <i class="el-icon-location"></i>
            <span style="font-size: 14px">查找地点</span>
          </el-menu-item>
          <el-menu-item index="/StuFrame/ViewActivities">
            <i class="el-icon-s-claim"></i>
            <span style="font-size: 14px">查找活动</span>
          </el-menu-item>
          <el-menu-item index="/StuFrame/ViewOrgs">
            <i class="el-icon-s-custom"></i>
            <span style="font-size: 14px">查找组织</span>
          </el-menu-item>
          <el-menu-item index="/StuFrame/Favorite">
            <i class="el-icon-s-flag"></i>
            <span style="font-size: 14px">查看收藏</span>
          </el-menu-item>
          <el-menu-item index="/StuFrame/Announcement">
            <i class="el-icon-s-release"></i>
            <span style="font-size: 14px">查看公告</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main
        style="height: 100%; overflow: auto; background: rgb(237, 241, 245)"
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
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
.el-card {
  overflow: auto;
  border-radius: 15px;
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
  width: 170px;
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
      this.$router.push("/StuFrame/AccountModify");
    },

    handleCommand(command) {
      switch(command) {
        case 'accountInfo':
          this.$router.push({ path: "/StuFrame/AccountModify" });
          break;
        case 'modifyPassword':
          this.$router.push({ path: "/StuFrame/ModifyPassword" });
          break;
        default:
          this.confirmLogout();
      }
    },

    confirmLogout() {
      this.$confirm('确认退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({ path: "/" });
      })
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
