<template>
  <div style="height:100%">
    <el-container style="border: 1px solid #eee; height: 100%">
      <el-aside style="width: 15%">
        <div>
          <el-row type="flex" justify="center" align="middle">
            <img src="../../assets/tjlogo.png" class="logoImage" />
          </el-row>
          <el-menu mode="vertical" default-active="/OrgFrame/Main" router active-text-color="#409EFF">
            <el-menu-item index="/OrgFrame/Main">
              <i class="el-icon-s-home"></i>
              <!--to do添加route属性-->
              主页
            </el-menu-item>
            <el-submenu index="">
              <template slot="title">
                <i class="el-icon-search"></i>
                <span>查看</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/OrgFrame/CheckActivity">
                  <i class="el-icon-date"></i>
                  查看活动
                </el-menu-item>
                <el-menu-item index="/OrgFrame/CheckOrgan">
                  <i class="el-icon-s-flag"></i>
                  查看组织
                </el-menu-item>
                <el-menu-item index="/OrgFrame/CheckSite">
                  <i class="el-icon-s-home"></i>
                  查看地点
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/OrgFrame/ShowMap">
              <i class="el-icon-map-location"></i>
              查看地图
            </el-menu-item>
            <el-menu-item index="/OrgFrame/ApplySite">
              <i class="el-icon-location"></i>
              预约场地
            </el-menu-item>
            <el-menu-item index="/OrgFrame/Appointment">
              <i class="el-icon-s-claim"></i>
              查看预约记录
            </el-menu-item>
            <el-menu-item index="/OrgFrame/CreditScore">
              <i class="el-icon-s-custom"></i>
              查看信用分
            </el-menu-item>
            <el-menu-item index="/OrgFrame/OrgFavorite">
              <i class="el-icon-star-on"></i>
              查看收藏
            </el-menu-item>
            <el-menu-item index="/OrgFrame/FinishActivity">
              <i class="el-icon-chat-line-round"></i>
              活动反馈
            </el-menu-item>
            <el-menu-item index="/OrgFrame/Announcement">
              <i class="el-icon-postcard"></i>
              查看公告
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container style="height: 100%">
        <el-header class="myheader" style="height:10%">
          <el-row class="headerrow" type="flex" justify="end" align="middle" @click="handleClick">
            <el-col>

            </el-col>
            <el-col>
            <el-button type="text">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-button>
            <el-button type="text" @click="handleClick">软件学院</el-button>
            </el-col>
          </el-row>
        </el-header>
        <el-main
          style="height: 90%; overflow: auto; background: rgb(237, 241, 245)"
        >
          <keep-alive>
            <router-view style="height:100%"></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    data() {
    return {
      value: "",
    };
  },
    methods: {
    handleClick() {
      this.$router.push('/OrgFrame/OrgAccountModify');
    }
  },
};
</script>

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
</style>