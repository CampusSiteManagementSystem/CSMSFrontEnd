<template>
  <div class="page">
    <el-container style="border: 1px solid #eee">
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
          <el-menu-item index="/SystemAdminHomePage">
            <i class="el-icon-house"></i>
            <span style="font-size: 14px">主页</span>
          </el-menu-item>
          <el-menu-item index="/SystemAdminFrame/SystemAdminGroupVerifyList">
            <i class="el-icon-finished"></i>
            <span style="font-size: 14px">审核组织注册</span>
          </el-menu-item>
          <el-menu-item index="/SystemAdminFrame/SystemAdminMaintainUserInfo">
            <i class="el-icon-edit"></i>
            <span style="font-size: 14px">维护用户信息</span>
          </el-menu-item>
          <el-menu-item index="/SystemAdminHomePage">
            <i class="el-icon-document"></i>
            <span style="font-size: 14px">发布系统公告</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- header -->
      <el-container>
        <el-header>
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
        </el-header>

        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  background-color: #d7e4f7;
  color: #333;
  height: 50px;
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
</style>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ path: "SystemAdminAccountModify" });
    },
  },
};
</script>
