<template>
  <div>
    <el-col :span="12" class="left-col">
      <el-card class="maincard">
        <div slot="header" class="clearfix">
          <span class="maintitle">活动详情 </span>
        </div>
        <div class="detailinfo">
          <p class=""><b>活动名称：</b>{{ activityName }}</p>
          <p class=""><b>主办组织：</b>{{ groupName }}</p>
          <p class=""><b>活动日期：</b>{{ date }}</p>
          <p class=""><b>活动时间：</b>{{ startTime }}</p>
          <p class=""><b>参与人数：</b>{{ participantNum }}</p>
          <p class=""><b>场地名称：</b>{{ groundName }}</p>
          <p class=""><b>活动描述：</b>{{ description }}</p>
        </div>
        <!-- <el-divider content-position="center">详细信息</el-divider> -->
      </el-card>
    </el-col>

    <el-col :span="12" class="right-col">
      <el-card class="maincard">
        <div slot="header" class="clearfix">
          <span class="maintitle">场地反馈 </span>
        </div>
        <el-form ref="form" label-width="100px">
          <el-form-item label="评分：">
            <el-rate
              class="block"
              v-model="score"
              :colors="colors"
              disabled
              show-text
            >
            </el-rate>
          </el-form-item>
          <el-form-item label="反馈日期：">
            {{ feedbackDate }}
          </el-form-item>
          <el-form-item label="反馈时间：">
            {{ feedbackTime }}
          </el-form-item>
          <el-form-item label="反馈：">
            {{ content }}
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="back">返回</el-button>
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
  border-radius: 15px;
}

.detailinfo {
  padding-left: 30px;
  /* padding: 15px; */
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
.el-card {
  border-radius: 15px;
}
</style>



<script>
// import store from
import { GETActivitiesID } from "../../API/http";
import { GETFeedbackRecordsID } from "../../API/http";

// store.state.id
export default {
  name: "creditscoring",
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      score: null,
      textarea: null,
      feedBack: null,
      activityName: null,
      date: null,
      startTime: null,
      description: null,
      additionalRequest: null,
      participantNum: null,
      duration: null,
      groundID: null,
      groupID: null,
      groupName: null,
      groundName: null,
      feedbackDate: null,
      feedbackTime: null,
      content: null,
    };
  },
  mounted() {
    GETFeedbackRecordsID(this.$route.params.ID)
      .then((data) => {
        this.feedbackDate = data.feedbackDate.substr(
          0,
          data.feedbackDate.search("T")
        );
        this.feedbackTime = data.feedbackDate.slice(
          data.feedbackDate.search("T") + 1
        );
        this.content = data.content;
        this.score = data.score;
        console.log(this.score);
      })
      .catch((err) => {
        console.log(err);
        this.$message("场地数据请求错误");
      });
    GETActivitiesID(this.$route.params.ID)
      .then((data) => {
        this.date = data.activityDate.substr(0, data.activityDate.search("T"));
        this.startTime = data.activityDate.slice(
          data.activityDate.search("T") + 1
        );
        this.activityName = data.name;
        this.groupID = data.accountNumber;
        this.groupName = data.organizationName;
        this.participantNum = data.participantNum;
        this.description = data.description;
        this.additionalrequest = data.additionalRequest;
        this.duration = data.duration;
        this.groundName = data.groundName;
      })
      .catch((err) => {
        console.log(err);
        this.$message("场地数据请求错误");
      });
  },
  methods: {
    back() {
      this.$router.push("/GroundsAdmin/FeedbackActivityList");
    },
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
      console.log(String(this.activityID));
      this.activityID = Number(this.$route.params.activityID); //具体信息
    },
  },
};
</script>