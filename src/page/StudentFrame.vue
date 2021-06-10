<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-aside style="width: 15%">
        <div>
          <el-row type="flex">
            <img src="../assets/TongJiLogo.jpg" class="logoImage" />
            <p>校园场地管理系统</p>
          </el-row>
          <el-menu mode="vertical" default-active="Main" router>
            <el-menu-item index="Main">
              <i class="el-icon-s-home"></i
              ><!--to do添加route属性-->
              主页
            </el-menu-item>
            <el-menu-item index="ShowMap">
              <i class="el-icon-map-location"></i>
              查看地图
            </el-menu-item>
            <el-menu-item index="ShowPlaceDetail">
              <i class="el-icon-location"></i>
              查找地点
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-claim"></i>
              查找活动
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-s-custom"></i>
              查找组织
            </el-menu-item>
            <el-menu-item index="Favorite">
              <i class="el-icon-s-flag"></i>
              查看收藏
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-s-release"></i>
              查看公告
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header style="height:10%">
          <el-row type="flex" justify="end">
            <el-col :span="1">
              <p><i class="el-icon-bell"></i></p>
              <!--这是干嘛用的 to do-->
            </el-col>
            <el-col :span="1">
              <p><i class="el-icon-search"></i></p>
              <!--这是干嘛用的 to do-->
            </el-col>
            <el-col :span="2">
              <p><i class="el-icon-user"></i>啦啦啦</p>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <keep-alive>
            <router-view style="height:100%"></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logoImage {
  height: 25%;
  width: 25%;
}
</style>