<template>
  <div class="page">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(255, 255, 255)">
        <el-row type="flex">
          <img src="../assets/userpic.jpg" class="logoImage" />
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
          <el-menu-item index="/">
            <i class="el-icon-house"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="testl">
            <i class="el-icon-finished"></i>
            <span slot="title">审核组织注册</span>
          </el-menu-item>
          <el-menu-item index="/testml">
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
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>系统管理员</span>
        </el-header>

        <el-main>
          <div>
            <h2>用户信息</h2>
          </div>

          <el-row gutter="10">
            <el-col :span="6"
              ><div class="pic">
                <img src="../assets/logo.png" class="pic" /></div
            ></el-col>

            <el-col :span="6"
              ><div class="info">
                <br />
                <p>姓名:</p>
                <br />
                <p>学号:</p>
                <br />
                <p>年龄:</p>
                <br />
                <p>性别:</p>
                <br />
            </div></el-col>

            <el-col :span="6"
              ><div class="infol">
                <br />
                <p>学院:</p>
                <br />
                <p>班级:</p>
                <br />
                <p>邮箱:</p>
                <br /></div
            ></el-col>

          </el-row>
          <div class="modify">
            <el-button type="primary">编辑</el-button>
          </div>
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

.info {
  text-align: left;
}

p {
  color: rgb(0, 0, 0);
  position: relative;
  /* left: 20px; */
}

.modify {
  margin-top: 5cm;
  margin-left: 15cm;
}

.logoImage {
  height: 25%;
  width: 25%;
}

.pic {
  height:45%;
  width: 60%;
  margin-top:1cm;
}
</style>




<script>
export default {
  data() {
    return {
      radio: "1",
      textarea: "",
    };
  },
};
</script>