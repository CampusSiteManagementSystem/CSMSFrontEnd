<template>
  <div>
    <el-col :span="12" class="left-col">
      <el-card class="maincard">
        <div class="maintitle">活动详情</div>
        <div class="detailinfo">
          <p class="">活动名称：{{ activityName }}</p>
          <p class="">主办组织：{{ groupName }}</p>
          <p class="">活动日期：{{ date }}</p>
          <p class="">活动时间：{{ startTime }}</p>
          <p class="">参与人数：{{ participantNum }}</p>
          <p class="">
            场地名称：{{ indoorOrOutdoor ? building + roomNo : groundName }}
          </p>
          <p class="">活动描述：{{ description }}</p>
        </div>
        <!-- <el-divider content-position="center">详细信息</el-divider> -->
      </el-card>
    </el-col>

    <el-col :span="12" class="right-col">
      <el-card class="maincard">
        <h1 class="maintitle">场地反馈</h1>
        <!-- <div class="detailinfo">
          <p>评分:</p>
          
          
        </div> -->

        <el-form ref="form" label-width="80px">
          <el-form-item label="评分：">
            <el-rate
              class="block"
              v-model="score"
              :colors="colors"
              disabled="yes"
              show-text
            >
            </el-rate>
          </el-form-item>
          <el-form-item label="反馈：">
            <!-- <el-input
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 10 }"
              v-model="feedBack"
              placeholder=""
              maxlength="50"
              :disabled="true"
              show-word-limit
            ></el-input> -->
            {{ feedBack }}
          </el-form-item>
          <el-form-item>
            <router-link
              to="/GroundsAdmin/FeedbackActivityList"
              tag="el-button"
              class="primary"
              >返回</router-link
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </div>
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
}

.maintitle {
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
}

.maincard {
  height: 100%;
}

.detailinfo {
  padding: 15px;
}
.left-col,
.right-col {
  padding: 5px;
  height: 100%;
}

.block {
  /* margin: 0;
  height: 30%;
  width: 60%; */
  position: relative;
  left: 0px;
  top: 10px;
}
</style>



<script>
export default {
  name: "creditscoring",
  data() {
    return {
      score: 4.5,
      textarea: "",
      feedBack:
        "场地很不错呦场地很不错呦场地很不错呦场地很不错呦场地很不错呦场地很不错呦场地很不错呦",
      activityName: "数据库会议",
      date: "2021-6-1",
      startTime: 13154112315,
      description: "数据库要建表了",
      additionalRequest: "需要两台电脑",
      participantNum: 20,
      duration: 60,
      groundID: 666,
      groupID: 777,

      groupName: "数据库小组",
      indoorOrOutdoor: false,
      building: null,
      roomNo: null,
      groundName: "操场",
    };
  },
  methods: {
    cancle() {
      this.$router.push({
        path: "/GroundsAdmin/ScoringActivityList",
      });
    },
    publish() {
      this.isReviewed = 1;
      this.$message({
        message: "评分成功",
        type: "success",
      });
    },
    form() {},
    created() {
      // 路由器，包含所有的路由 整个项目中VueRouter
      // console.log(this.$router); //输出所有东西
      // // 当前页面 这条路由
      // console.log(this.$route); //这里接收到home页面传过来商品的id 及其页面信息 可去输出查看
      console.log(String(this.activityID));
      this.activityID = Number(this.$route.params.activityID); //具体信息
      // if(itemId){ //先判断值有没有
      //     this.axios({//${itemId} axios传递参数获取数据通过参数获取相对应的数据
      //         url:`/api/item/${itemId}`
      //     }).then(res=>{
      //         this.item = res.data;
      //         console.log(this.item)//输出的放请求里面，写外面还没请求到数据呢，肯定输出报错
      //     }).catch(err=>{});
      //}
    },
  },
};
</script>