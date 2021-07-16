<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div slot="header" class="clearfix">
            <span><b>审批预约记录</b></span>
          </div>
      <!-- <div class="maintitle">审批预约记录</div> -->
      <el-row :gutter= '20'>
        <el-col :span="10">
          <el-card class="info-card">
            <el-row :gutter= '20'>
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
                <p><b>组织账号：</b>{{ accountNumber }}</p>
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
            <p><b>活动时间：</b>{{ time }}</p>
            <p><b>活动时长：</b>{{ duration }}分钟</p>
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
        <el-form-item>
          <el-button v-if="state == 0" type="primary" @click="onSubmit"
            >提交</el-button
          >
          <el-button @click="back">活动列表</el-button>
        </el-form-item>
      </el-form>

      <div v-else>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="审核结果：">
            <el-radio-group v-model="form.state" v-if="state == 2">
              <el-radio label="批准"></el-radio>
              <el-radio label="不批准"></el-radio>
            </el-radio-group>
            <span v-else>{{ form.state }}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="reReview" v-if="state != 2"
              >重审</el-button
            >
            <el-button type="primary" @click="submitReReview" v-else
              >提交</el-button
            >
            <el-button @click="back">活动列表</el-button>
          </el-form-item>
        </el-form>
       
      </div>
    </el-card>
  </div>
</template>


<script>
import { GETActivitiesID } from "../../API/http";
import { GETOrganizationsID } from "../../API/http";
import { POSTExamineAndApproves } from "../../API/http";
import { PUTExamineAndApprovesID } from "../../API/http";

import store from "../../state/state.js";
export default {
  name: "ActivityInfo",
  mounted() {
    const that = this;
    GETActivitiesID(that.$route.params.ID)
      .then((data) => {
        return new Promise(function (resolve) {
          console.log("run GETActivities");
          // console.log(data);
          that.axiosdata = data;
          that.dealWithActivitiy(that.axiosdata);
          console.log(that.axiosdata);
          resolve(data.accountNumber);
        });
      })
      .then((accountNumber) => {
        GETOrganizationsID(accountNumber).then((data) => {
          that.credit = data.credit;
          that.email = data.emailAddress;
        });
      })
      .catch((err) => {
        console.log(err);
        this.$message("场地数据请求错误");
      });
  },
  data() {
    return {
      axiosdata: null,
      id: null,
      organization: null,
      accountNumber: null,
      credit: null,
      email: null,
      name: null,
      time: null,
      duration: null,
      participantnum: null,
      description: null,
      additionalrequest: null,
      state: null, //0未审核，1已审核，2重审
      form: {
        orgState: null,
        state: null,
      },
    };
  },
  methods: {
    dealWithActivitiy(data) {
      this.id = data.id;
      this.name = data.name;
      console.log("DATA",data);
      this.accountNumber = data.accountNumber;
      this.organization = data.organizationName;
      // this.credit  没有组织信用分
      this.time = data.activityDate.replace("T", " ");
      this.participantnum = data.participantNum;
      this.description = data.description;
      this.additionalrequest = data.additionalRequest;
      this.state = data.activityState == "审核中" ? 0 : 1;
      this.duration = data.duration;
      if (this.state == 1) {
        if (data.activityState != "被驳回") {
          this.form.state = "批准";
        } else {
          this.form.state = "不批准";
        }
      }
      this.form.orgState = this.state;
    },
    reReview() {
      //判断活动是否应经举办过
      if (this.form.state != null) {
        GETActivitiesID(this.$route.params.ID)
          .then((data) => {
            console.log("run GETActivities");
            var dateActivity = new Date(data.activityDate);
            var dateNow = new Date();
            if (dateActivity > dateNow) {
              this.state = 2; //重审
            } else {
              this.$message({ message: "活动已完成，不能重审", type: "error" });
            }
          })
          .catch((err) => {
            console.log("err", err);
            this.$message({ message: "活动时间获取失败", type: "error" });
          });
      }
    },
    submitReReview() {
      if (this.form.state != this.form.orgState) {
        console.log("活动id", this.id);
        PUTExamineAndApprovesID(this.id, {
          activityId: this.id,
          // accountNumber: store.state.ID,
          state: this.form.state == "批准" ? "通过" : "拒绝",
        })
          .then((data) => {
            // this.res = data;
            this.form.orgState = this.form.state;
            this.state = 1;
            console.log(data);
            this.$message({ message: "重审提交成功", type: "success" });
          })
          .catch((err) => {
            this.form.state = this.form.orgState;
            console.log("err", err);
            this.$message({ message: "重审提交失败", type: "error" });
          });
      }
      // }
    },
    onSubmit() {
      if (this.form.state != null) {
        GETActivitiesID(this.$route.params.ID)
          .then((data) => {
            console.log("run GETActivities");
            var dateActivity = new Date(data.activityDate);
            var dateNow = new Date();
            // console.log(dateActivity >= dateNow)
            if (dateActivity < dateNow) {
              this.$message({ message: "活动已过期", type: "error" });
            } else { 
              if (this.form.state != this.form.orgState) {
                POSTExamineAndApproves({
                  activityId: this.id,
                  accountNumber: store.state.ID,
                  state: this.form.state == "批准" ? "通过" : "拒绝",
                })
                  .then((data) => {
                    // this.res = data;
                    this.state = 1;
                    this.form.orgState = this.form.state;
                    console.log(data);
                    this.$message({ message: "审核提交成功", type: "success" });
                  })
                  .catch((err) => {
                    this.form.state = this.form.orgState;
                    console.log("err", err);
                    this.$message({ message: "审核提交失败", type: "error" });
                  });
              }
            }
          })
          .catch((err) => {
            console.log("err", err);
            this.$message({ message: "活动时间获取失败", type: "error" });
          });
      }
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
.el-card {
  border-radius: 15px;
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