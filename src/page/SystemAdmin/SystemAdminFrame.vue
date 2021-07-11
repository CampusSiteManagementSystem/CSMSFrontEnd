<template>
  <div style="height: 100%">
    <el-container style="border: 1px solid #eee; height: 100%">
      <!-- 侧边栏 -->
      <el-aside width="15%">
        <el-row type="flex" justify="center" align="middle">
          <img src="../../assets/tjlogo.png" class="logoImage" />
        </el-row>
        <el-menu
          :default-active="$route.path"
          class="menu"
          style="height=100%"
          router
        >
          <el-menu-item index="/SysAdminHomePage">
            <i class="el-icon-house"></i>
            <span style="font-size: 14px">主页</span>
          </el-menu-item>
          <el-menu-item index="/SysAdminFrame/GroupVerifyList">
            <i class="el-icon-finished"></i>
            <span style="font-size: 14px">审核组织注册</span>
          </el-menu-item>
          <el-menu-item index="/SysAdminFrame/MaintainUserInfo">
            <i class="el-icon-edit"></i>
            <span style="font-size: 14px">维护用户信息</span>
          </el-menu-item>
          <el-menu-item index="/SysAdminFrame/Announcement">
            <i class="el-icon-document"></i>
            <span style="font-size: 14px">发布系统公告</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- header -->
      <el-container style="height: 100%">
        <el-header class="myheader" style="height: 10%">
          <el-row :gutter="20">
            <el-col :span="6"  
              >
              <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top:15%">
            <!-- // 首页我是写死的，其他的遍历出来
            <el-breadcrumb-item :to="{ name: 'home' }">首页</el-breadcrumb-item> -->
            <!-- // 因为路由是后台返回的，所以取title是按照后台格式来取的 -->
            <el-breadcrumb-item
              v-for="(item, index) in breadList"
              :key="index"
              @click="this.$router.go(-1)"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb> -->


            </el-col>
            <el-col :span="6" :offset="10"
              >
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
            <el-button type="text" @click="handleClick">系统管理员</el-button>
          </el-row>
              
              </el-col>
          </el-row>

          

         
        </el-header>

        <el-main style="height: 90%; overflow: auto">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.myheader {
  background-color: #d7e4f7;
  color: #333;
  line-height: 55px;
  text-align: right;
  font-size: 15px;
  display: inline-block;
}

.logoImage {
  height: 90%;
  width: 90%;
  padding: 5%;
}

.personalButton {
  font-size: 15px;
}

/* 面包屑导航 */
.el-breadcrumb {
  box-sizing: border-box;
  /* border-bottom: 1px solid #eee; */
}
</style>

<script>
export default {
  data() {
    return {
      value: "",
      breadList: [],
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ path: "SystemAdminAccountModify" });
    },

    /**
     * @description 获取路由数组
     * @params val 路由参数
     * @author tw
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
