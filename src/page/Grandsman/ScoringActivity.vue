<template>
  <div>
    <!-- <el-col :span="12"> -->
    <el-row class="upper-row">
      <el-card class="maincard">
        <div slot="header" class="clearfix">
          <span class="maintitle">活动详情 </span>
        </div>
        <!-- <h1 class="maintitle">活动详情</h1>
          <el-divider></el-divider> -->
        <div class="detailinfo">
          <el-col :span="12">
            <p class="">活动名称：{{ activityName }}</p>
            <p class="">主办组织：{{ groupName }}</p>
            <p class="">活动日期：{{ date }}</p>
            <p class="">活动时间：{{ startTime }}</p>
          </el-col>
          <el-col :span="12">
            <p class="">参与人数：{{ participantNum }}</p>
            <p class="">
              场地名称：{{ indoorOrOutdoor ? building + roomNo : groundName }}
            </p>
            <p class="">活动描述：{{ description }}</p>
          </el-col>
        </div>
        <!-- <el-divider content-position="center">详细信息</el-divider> -->
      </el-card>
      <!-- </el-col> -->
    </el-row>
    <el-row class="lower-row">
      <!-- <el-col :span="12"> -->
      <el-card class="maincard">
        <div slot="header" class="clearfix">
          <span class="maintitle">信用评分 </span>
        </div>
        <div class="scoringForm" v-if="!isReviewed">
          <!-- <div class="detailinfo">
            评分：
            <el-input-number
              size="small"
              v-model="score"
              :step="1"
              :max="5"
              :min="-5"
            ></el-input-number>
          </div> -->
          <!-- <el-divider content-position="center">详细信息</el-divider> -->

          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
          >
            <el-form-item label="评分">
              <el-input-number
                size="small"
                v-model="score"
                :step="1"
                :max="5"
                :min="-5"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="评分理由" prop="reason">
              <el-input
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 10 }"
                v-model="reason"
                placeholder="请输入评分理由"
                maxlength="50"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="publish">发布</el-button>
              <!-- <router-link to="/GroundsmanFrame/ScoringActivityList"> -->
              <el-button @click="cancle">取消</el-button>
              <!-- </router-link> -->
            </el-form-item>
          </el-form>
        </div>
        <div class="detailinfo" v-else>
          <p class="">信用评分：{{ score }}</p>
          <p class="">评分日期：{{ creditDate }}</p>
          <p class="">评分时间：{{ creditTime }}</p>
          <p class="">评分理由：{{ reason }}</p>
          <div style="float: right">
            <!-- <router-link to="/ScoringActivityList"> -->
            <el-button type="primary" @click="cancle">返回</el-button>
            <!-- </router-link> -->
          </div>
        </div>
      </el-card>
      <!-- </el-col> -->
    </el-row>
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

.upper-row {
  height: 45%;
  padding-bottom: 15px;
}
.lower-row {
  height: 55%;
}
.maintitle {
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.maincard {
  height: 100%;
}

.detailinfo {
  padding-left: 15px;
}
</style>



<script>
export default {
  name: "creditscoring",
  data() {
    return {
      ruleForm: {
        reason: "",
      },
      rules: {
        reason: [
          { required: true, message: "请输入评分理由", trigger: "blur" },
        ],
      },
      activityName: "数据库会议",
      date: "2021-6-1",
      startTime: 13154112315,
      description: "数据库要建表了",
      additionalRequest: "需要两台电脑",
      participantNum: 20,
      duration: 60,
      groundID: 666,
      groupID: 777,
      isReviewed: 0,
      creditDate: "2021-6-1",
      creditTime: 15645321,
      reason: "乱扔垃圾",
      score: -2,
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