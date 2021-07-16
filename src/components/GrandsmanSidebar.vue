<template>
  <div>
    <el-row type="flex" justify="center" align="middle">
      <el-row type="flex">
        <img src="../assets/tjlogo.svg" class="logoImage" />
      </el-row>
    </el-row>
    <el-menu
      default-active="/GroundsAdmin/Main"
      class="el-menu-vertical-demo"
      
      style="height=100%"
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
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scpoed>
  .logoImage {
    height: 90%;
    width: 90%;
    padding: 5%;
  }
</style>