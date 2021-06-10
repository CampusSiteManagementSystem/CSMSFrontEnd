<template>
  <div class="page">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(255, 255, 255)">
        <el-row type="flex">
          <img src="../assets/logo.png" class="logoImage" />
          <p>校园场地管理系统</p>
        </el-row>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          style="height=100%"
          router
        >
          <el-menu-item index="/SystemAdminHomePage">
            <i class="el-icon-house"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="/SystemAdminFrame/SystemAdminGroupVerifyList">
            <i class="el-icon-finished"></i>
            <span slot="title">审核组织注册</span>
          </el-menu-item>
          <el-menu-item index="/SystemAdminFrame/SystemAdminMaintainUserInfo">
            <i class="el-icon-edit"></i>
            <span slot="title">维护用户信息</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="el-icon-document"></i>
            <span slot="title">发布系统公告</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>系统管理员</span>
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
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.logoImage {
  height: 25%;
  width: 25%;
}

.search {
  margin-bottom: 1cm;
}
</style>

<script>
export default {
  data() {
    return {
      // radio: "1",
      // textarea: ''
      options: [
        {
          value: "选项1",
          label: "用户ID",
        },
        {
          value: "选项2",
          label: "用户名",
        },
      ],
      value: "",
    };
  },
};
</script>
