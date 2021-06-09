<template id="sysside">
     <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      style="height=100%"
      router>
        <el-menu-item index="/">
          <i class="el-icon-house"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-menu-item index="/Groundsman/ActivityList">
          <i class="el-icon-finished"></i>
          <span slot="title">审核活动记录</span>
        </el-menu-item>
        <el-menu-item index="/creditscoring">
          <i class="el-icon-edit"></i>
          <span slot="title">活动评价</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">发布场地公告</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-date"></i>
          <span slot="title">导入课表</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-chat-dot-square"></i>
          <span slot="title">查看反馈</span>
        </el-menu-item>
        <el-menu-item index="/Groundsman/GroundList">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">维护场地信息</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    name:'Sysside',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>