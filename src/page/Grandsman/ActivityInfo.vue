<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div class="maintitle">审批预约记录</div>
      <el-row gutter="20">
        <el-col :span="10">
          <el-card class="info-card">
            <el-row gutter="20">
              <el-col :span="9">
                <div class="image">
                  <img
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    class="pic"
                  />
                </div>
              </el-col>
              <el-col :span="15">
                <p><b>组织名称：</b>{{ organization }}</p>
                <p><b>组织账号：</b>{{ accountnumber }}</p>
                <p><b>组织信用分：</b>{{ credit }}</p>
                <p><b>组织邮箱：</b>{{ email }}</p>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="14">
          <el-card class="info-card">
            <p><b>活动名称：</b>{{ name }}</p>
            <p><b>参与人数：</b>{{ participantnum }}</p>
            <p><b>活动时间：</b>{{ date + " " + time }}</p>
            <p><b>活动描述：</b>{{ description }}</p>
            <p><b>特殊需求：</b>{{ additionalrequest }}</p>
          </el-card>
        </el-col>
      </el-row>
      <p></p>

      <el-form ref="form" :model="form" label-width="80px" v-if="state == 0">
        <el-form-item label="意见：">
          <el-radio-group :disabled="state != 0" v-model="form.state">
            <el-radio label="批准"></el-radio>
            <el-radio label="不批准"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="说明：">
          <el-input
            class="reason-input"
            type="textarea"
            v-model="form.comment"
            rows="3"
            v-if="state == 0"
          ></el-input>
          <p v-else>{{ form.comment }}</p>
        </el-form-item>
        <el-form-item>
          <el-button v-if="state == 0" type="primary" @click="onSubmit"
            >确认</el-button
          >
          <el-button @click="back">返回列表</el-button>
        </el-form-item>
      </el-form>

      <div v-else>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="审核结果：">
            <el-radio-group v-model="form.state" v-if="state == 2">
              <el-radio label="批准"></el-radio>
              <el-radio label="不批准"></el-radio>
            </el-radio-group>
            <span v-else>{{ form.state == 0 ? "不批准" : "批准" }}</span>
          </el-form-item>
          <!-- <el-form-item label="说明：">
          <p><b>审核意见：</b>{{ comment }}</p>
        </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="reReview" v-if="state != 2"
              >重审</el-button
            >
            <el-button type="primary" @click="submitReReview" v-else
              >提交</el-button
            >
            <el-button @click="back">返回列表</el-button>
          </el-form-item>
        </el-form>
        <!-- <p><b>审核结果：</b>{{ state == 1 ? "审核通过" : "不通过" }}</p>
        <p><b>审核意见：</b>{{ comment }}</p>
        <el-button type="primary" @click="back">返回</el-button> -->
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  name: "ActivityInfo",
  components: {},
  data() {
    return {
      id: "16472",
      organization: "软件学院1906班",
      accountnumber: "6159",
      credit: 95,
      email: "65b4g6y8@tongji.edu.cn",
      name: "班会",
      date: "2021-6-25",
      time: " 15:30-16:00",
      participantnum: 40,
      description: "进行专业方向介绍，开展防范电信诈骗教育",
      additionalrequest: "无",
      state: 0, //0未审核，1已审核，2重审
      comment: "",
      form: {
        state: "批准",
        comment: "",
      },
    };
  },
  methods: {
    reReview() {
      this.state = 2; //重审
    },
    submitReReview() {
      this.state = 1; //审核过
      this.$message({
        message: "重审成功",
        type: "success",
      });
    },
    onSubmit() {
      console.log("submit!");
      this.state = this.form.state;
      this.$message({
        message: "审核提交成功",
        type: "success",
      });
    //   this.comment = this.form.comment;
    //   this.$alert("您已批准该活动。", "审核完成", {
    //     confirmButtonText: "返回列表",
    //     callback: (action) => {
    //       this.$message({
    //         type: "info",
    //         message: `action: ${action}`,
    //       });
    //       this.back();
    //     },
    //   });
     },
    back() {
      this.$router.push({ path: "/GroundsAdmin/ReviewActivityList" });
    },
  },
};
</script>

<style scoped>
.reason-input {
  width: 600px;
}

.maintitle {
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 20px;
}

.grid-content {
  border-radius: 6px;
  min-height: 36px;
}
.info-card {
  height: 320px;
  border-radius: 12px;
  /* background: white; */
}
.maincard {
  border-radius: 15px;
  height: 100%;
}
</style>