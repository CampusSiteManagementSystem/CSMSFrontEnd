<template>
  <el-container class="666" style="height=100%">
    <el-header style="height: 8%; background-color: white">
      <el-row class="header-row">
        <el-col :span="12" class="header-row-col1"
          ><el-row class="tjlogo-row" type="flex" justify="left" align="middle"> 
            <el-button class="fold-button" @click="test"  type="text" > <i v-if="isCollapse" class="el-icon-s-unfold" ></i><i v-else class="el-icon-s-fold" ></i></el-button>
            <!-- <i class="el-icon-s-unfold" @click="test"></i> -->
            <img
              src="../../assets/tjlogo.png"
              class="logoImage"
            /> </el-row></el-col
        ><el-col :span="12" class="header-row-col2">
          <el-row
            class="headerrow"
            type="flex"
            justify="end"
            align="middle"
            @click="handleClick"
          >
            <el-button type="text"
              ><el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar
            ></el-button>
            <el-button type="text" @click="handleClick">王二狗</el-button>
          </el-row></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <!-- <el-aside :width="siderWidth + 'px'"> -->

        <!-- <el-row type="flex" justify="center" align="middle">
          <el-row type="flex">
            <img src="../../assets/tjlogo.png" class="logoImage" />
          </el-row>
        </el-row> -->
        <el-menu
          default-active="/GroundsAdmin/Main"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          collapse-transition="true"
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
      <el-main style="overflow: auto">
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
.header-row {
  height: 100%;
}
.header-row-col1 {
  height: 100%;
  /* background-color: aqua; */
}
.header-row-col2 {
  height: 100%;
  /* background-color: azure; */
}
.logoImage {
  height: 40px;
  padding-left: 10px;
  padding-bottom: 5px;
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
.tjlogo-row{
  font-size: 30px;
}
/* .el-icon-s-unfold {
  height: 40px;
  width: 40px;
} */
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
      siderWidth: 64,
    };
  },
  methods: {
    test() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>




// <div v-if>

// <div>

// <keep-alive v-else>
//           <router-view style="height: 100%"></router-view>
// </keep-alive>