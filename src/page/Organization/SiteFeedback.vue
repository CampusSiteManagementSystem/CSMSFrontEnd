<template>
  <div class="page">
    <div class="background">
      <el-card>
        <div>
          <h2>场地反馈</h2>
        </div>
        <div id="content">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-position="left"
            class="demo-table"
            label-width="150px"
          >
            <el-form-item label="活动ID">
              <label slot="label">活&nbsp;&nbsp;动&nbsp;&nbsp;ID</label>
              <span>{{ value1.ID }}</span>
            </el-form-item>
            <el-form-item label="活动时间">
              <label slot="label">活动时间</label>
              <span>{{ value1.time }}</span>
            </el-form-item>
            <el-form-item label="活动地点">
              <label slot="label">活动地点</label>
              <span>{{ value1.place }}</span>
            </el-form-item>
            <el-form-item label="活动评分">
              <label slot="label">活动评分</label>
              <div>
                <p>
                  <el-rate
                    class="block"
                    v-model="score"
                    :colors="colors"
                    show-text
                  ></el-rate>
                </p>
              </div>
            </el-form-item>
            <el-form-item label="详细意见" prop="textarea">
              <label slot="label">详细意见</label>
              <span>
                <el-input
                  :autosize="{ minRows: 2, maxRows: 6 }"
                  class="input"
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                  v-model="textarea"
                >
                </el-input>
              </span>
            </el-form-item>
            <el-form-item align="center" class="modify">
              <el-button type="primary" @click="submit">提交</el-button>
              <router-link to="/OrgFrame/FinishActivity" tag="el-button"
                >取消</router-link
              >
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let vm = {
      ID: "111111",
      time: "2021-6-7 17：00-19：00",
      place: "G403",
      feedBackDate:Date(),
      feedBackTime:Date(),
    };
    return {
      ruleForm: {
        textarea: "",
      },
      rules: {
        textarea: [
          { required: true, message: "请输入场地反馈", trigger: "blur" },
        ],
      },
      value1: vm,
      score: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      textarea: "",
    };
  },
  methods: {
    submit() {
      if (this.score == null || this.textarea == "") {
        this.$alert("未输入所有备选项", "反馈失败", {
          confirmButtonText: "确定",
          callback: (action) => {
            if (action === "confirm") {
              console.log("ID", this.$route.query.activityID);
              this.$message({
                type: "error",
                message: "反馈失败",
              });
            }
          },
        });
      } else {
        this.$alert("感谢您的反馈", "反馈成功", {
          confirmButtonText: "确定",
          callback: (action) => {
            if (action === "confirm") {
              this.$message({
                type: "success",
                message: "反馈成功",
              });
            }
            this.$router.push("/OrgFrame/FinishActivity");
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.page {
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  background-color: rgb(236, 233, 233);
  background: rgba(240, 235, 235, 0.5);
  justify-content: center;
  align-items: center;
}
.background {
  margin: 0;
  height: 98%;
  width: 99%;
  background-color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  position: relative;
}
#content {
  position: absolute;
  left: 150px;
  top: 130px;
}
.input {
  margin: 0;
  height: 80%;
  width: 200%;
  position: relative;
}
.modify {
  margin-top: 2cm;
  margin-left: 2cm;
}
.choose-button {
  margin: 10px 20px;
  width: 35%;
  height: 10%;
}
.el-card {
  height: 100%;
}
.el-card {
  border-radius: 15px;
}
.demo-table {
  font-family: Helvetica;
}
</style>