<template>
  <el-container style="height: 100%">
    <el-header class="header" style="height: 8%">
      <el-row class="header-row">
        <el-col :span="19" class="header-row-col1"
          ><el-row class="headerrow" type="flex" justify="left" align="middle">
            <el-button class="fold-button" @click="test" type="text">
              <i v-if="isCollapse" class="el-icon-s-unfold"></i
              ><i v-else class="el-icon-s-fold"></i
            ></el-button>
            <!-- <i class="el-icon-s-unfold" @click="test"></i> -->
            <img src="../../assets/tjlogo.svg" class="logoImage" />

            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item
                v-for="(item, index) in breadList"
                :key="index"
                @click="this.$router.go(-1)"
                >{{ item.meta.title }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </el-row></el-col
        >
        <el-col :span="2" class="header-row-col2">
          <el-row class="headerrow" type="flex" justify="end" align="middle">
            <el-popover width="340" trigger="click">
              <el-container id="clock" style="width: 350%; height: 350px">
              </el-container>
              <el-button
                type="text"
                style="white-space: pre-wrap"
                slot="reference"
                >{{ this.nowDate }} {{ this.nowWeek }} {{ this.nowTime }}
              </el-button>
            </el-popover>
          </el-row>
        </el-col>
        <el-col :span="3" class="header-row-col2">
          <el-row class="headerrow" type="flex" justify="end" align="middle">
            <el-button type="text" @click="clickAccountInfo"
              ><el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar
            ></el-button>
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link" trigger="click">
                {{ id }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="accountInfo"
                  >账号信息</el-dropdown-item
                >
                <el-dropdown-item command="modifyPassword"
                  >修改密码</el-dropdown-item
                >
                <el-dropdown-item command="confirmLogout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <el-menu
          default-active="/GroundsAdmin/Main"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          style="height: 100%"
          router
        >
          <el-menu-item index="/GroundsAdmin/Main">
            <i class="el-icon-house"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="/GroundsAdmin/Map">
            <i class="el-icon-map-location"></i>
            <span slot="title">查看地图</span>
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
      <el-main>
        <keep-alive>
          <transition name="fade-transform" mode="out-in">
            <router-view style="height: 100%"></router-view>
          </transition>
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
  overflow: hidden;
}

.el-main {
  overflow: auto;
  /* background-color: wheat; */
  background-color: rgb(237, 241, 245);
}
.header {
  background-color: white;
  padding-left: 16px;
  border-bottom: 0.5px solid rgba(85, 79, 78, 0.178);
}
.header-row {
  height: 100%;
}
.header-row-col1 {
  height: 100%;
}
.header-row-col2 {
  height: 100%;
  /* background-color: azure; */
}
.header-row-col3 {
  height: 100%;
}
.logoImage {
  height: 100%;
  padding-left: 20px;
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
.headerrow {
  font-size: 30px;
  height: 100%;
}
/* .el-icon-s-unfold {
  height: 40px;
  width: 40px;
} */

/* 面包屑导航 */
.el-breadcrumb {
  /* background-color: thistle; */
  box-sizing: border-box;
  /* height: 100%;
  width: 90%; */
  padding: 5%;
  /* border-bottom: 1px solid #eee; */
}
.el-card {
  border-radius: 15px;
}
.el-main {
  overflow: auto;
}
</style>



<script>
// import router from "../../router/index";
// import sidebar from "../../components/GrandsmanSidebar.vue";
import store from "../../state/state.js";
import * as echarts from "echarts";
export default {
  // components: { myheader },
  name: "homepage",
  data() {
    return {
      timeUpdatedStatus: {
        second: false,
        minute: false,
        hour: false,
      },
      nowWeek: "",
      nowDate: "",
      nowTime: "",
      weeks: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
      clock: null,
      option: null,
      isCollapse: true,
      value: "",
      breadList: [],
      id: store.state.ID,
    };
  },
  mounted() {
    this.breadList = this.$route.matched;
    this.drawClock();
    console.log("option", this.option);
    const that = this;
    setInterval(function () {
      var date = new Date();
      var second = date.getSeconds();
      var minute = date.getMinutes() + second / 60;
      var hour = (date.getHours() % 12) + minute / 60;
      //console.log(that.option);
      that.updateSeries(second, that.option.series[2], "second");
      that.updateSeries(minute, that.option.series[1], "minute");
      that.updateSeries(hour, that.option.series[0], "hour");
      that.option.animationDurationUpdate = 300;
      that.reNewTime();
      //console.log("Week", that.nowTime);
      that.clock.setOption(that.option, true);
      date = null;
    }, 1000);
  },
  methods: {
    test() {
      this.isCollapse = !this.isCollapse;
    },

    handleCommand(command) {
      switch (command) {
        case "accountInfo":
          this.$router.push({ path: "/GroundsAdmin/AccountModify" });
          break;
        case "modifyPassword":
          this.$router.push({ path: "/GroundsAdmin/ModifyPassword" });
          break;
        default:
          this.confirmLogout();
      }
    },

    confirmLogout() {
      this.$confirm("确认退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        localStorage.removeItem("uuid");
        localStorage.removeItem("uutype");
        localStorage.removeItem("uutoken");
        store.state.ID = null;
        // const routeHistory = history.length - 1;
        // router.go(-routeHistory);
        // router.replace("/");
        this.$router.push({path: "/"});
      });
    },

    clickAccountInfo() {
      this.$router.push({ path: "/GroundsAdmin/AccountModify" });
    },
    /**
     * @description 获取路由数组
     * @params val 路由参数
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
    updateSeries(time, series, type) {
      var isCritical =
        Math.floor(time) === 0 || (type === "second" && time === 1);
      if (isCritical && this.timeUpdatedStatus[type] === true) {
        this.timeUpdatedStatus[type] = false;
        series.data[0].value = 0;
        series.clockwise = true;
        this.option.animationDurationUpdate = 0;
        //this.myChart.setOption(this.option, true);
      }
      series.data[0].value = time;
      series.clockwise = true;
      if (time === 0) {
        this.timeUpdatedStatus[type] = true;
        series.clockwise = false;
      }
    },
    reNewTime() {
      let myDate = new Date();
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      let sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      );
      let week = this.weeks[wk];
      this.nowDate = yy + "-" + mm + "-" + dd;
      this.nowTime = hou + ":" + min + ":" + sec;
      this.nowWeek = week;
    },
    drawClock() {
      this.clock = echarts.init(document.getElementById("clock"));
      this.option = {
        series: [
          {
            name: "hour",
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 12,
            splitNumber: 12,
            axisLine: {
              lineStyle: {
                width: 15,
                color: [[1, "rgba(0,0,0,0.7)"]],
                shadowColor: "rgba(0, 0, 0, 0.5)",
                shadowBlur: 15,
              },
            },
            splitLine: {
              lineStyle: {
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 3,
                shadowOffsetX: 1,
                shadowOffsetY: 2,
              },
            },
            axisLabel: {
              fontSize: 18,
              distance: 25,
              formatter: function (value) {
                if (value === 0) {
                  return "";
                }
                return value;
              },
            },
            anchor: {
              show: true,
              icon: "path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z",
              showAbove: false,
              offsetCenter: [0, "-35%"],
              size: 120,
              keepAspect: true,
              itemStyle: {
                color: "#707177",
              },
            },
            pointer: {
              icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
              width: 12,
              length: "55%",
              offsetCenter: [0, "8%"],
              itemStyle: {
                color: "#C0911F",
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            detail: {
              show: false,
            },
            title: {
              offsetCenter: [0, "30%"],
            },
            data: [
              {
                value: 0,
              },
            ],
          },
          {
            name: "minute",
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
              width: 8,
              length: "70%",
              offsetCenter: [0, "8%"],
              itemStyle: {
                color: "#C0911F",
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            anchor: {
              show: true,
              size: 20,
              showAbove: false,
              itemStyle: {
                borderWidth: 15,
                borderColor: "#C0911F",
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            detail: {
              show: false,
            },
            title: {
              offsetCenter: ["0%", "-40%"],
            },
            data: [
              {
                value: 0,
              },
            ],
          },
          {
            name: "second",
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            animationEasingUpdate: "bounceOut",
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
              width: 4,
              length: "85%",
              offsetCenter: [0, "8%"],
              itemStyle: {
                color: "#C0911F",
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            anchor: {
              show: true,
              size: 15,
              showAbove: true,
              itemStyle: {
                color: "#C0911F",
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4,
              },
            },
            detail: {
              show: false,
            },
            title: {
              offsetCenter: ["0%", "-40%"],
            },
            data: [
              {
                value: 0,
              },
            ],
          },
        ],
      };
      console.log(this.option);
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
