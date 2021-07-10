<template>
  <div style="height: 100%">
    <el-container style="border: 1px solid #eee; height: 100%">
      <el-aside style="width: 15%">
        <el-row>
          <img src="../../assets/tjlogo.png" class="logoImage" />
        </el-row>
        <el-row>
          <el-menu mode="vertical" router active-text-color="#409EFF">
            <el-menu-item index="/StudentFrame/Main">
              <i class="el-icon-s-home"></i>
              <span style="font-size: 14px">主页</span>
            </el-menu-item>
            <el-menu-item index="/StudentFrame/ShowMap">
              <i class="el-icon-map-location"></i>
              <span style="font-size: 14px">查看地图</span>
            </el-menu-item>
            <el-menu-item index="/StudentFrame/ShowPlaceDetail">
              <i class="el-icon-location"></i>
              <span style="font-size: 14px">查找地点</span>
            </el-menu-item>
            <el-menu-item index="/StudentFrame/ShowSchedule">
              <i class="el-icon-s-claim"></i>
              <span style="font-size: 14px">查找活动</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-s-custom"></i>
              <span style="font-size: 14px">查找组织</span>
            </el-menu-item>
            <el-menu-item index="/StudentFrame/Favorite">
              <i class="el-icon-s-flag"></i>
              <span style="font-size: 14px">查看收藏</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-s-release"></i>
              <span style="font-size: 14px">查看公告</span>
            </el-menu-item>
          </el-menu>
        </el-row>
      </el-aside>

      <el-container style="height: 100%">
        <el-header style="height: 10%">
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
            <el-button type="text" @click="handleClick">学生</el-button>
          </el-row>
        </el-header>

        <el-main
          style="height: 90%; overflow: auto; background: rgb(237, 241, 245)"
        >
          <keep-alive>
            <router-view></router-view>
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
.el-header {
  background-color: #d7e4f7;
  color: #333;
  line-height: 55px;
  text-align: right;
  font-size: 15px;
  display: inline-block;
}

.logoImage {
  height: 100%;
  width: 85%;
  padding: 5%;
  margin: 0 1px 0 0;
}
</style>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push({ path: "SystemAdminAccountModify" });
    },
  },
};
</script>
