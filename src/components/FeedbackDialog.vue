<template>
    <el-dialog title="场地反馈" :visible.sync="feedbackVisible" class="dialog">
      <div class="content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          class="demo-table"
          label-width="150px"
        >
          <el-form-item label="活动ID">
            <label slot="label"><b>活动ID</b></label>
            <span>{{ feedbackRow.ID }}</span>
          </el-form-item>
          <el-form-item label="活动时间">
            <label slot="label"><b>活动时间</b></label>
            <span>{{ feedbackRow.time }}</span>
          </el-form-item>
          <el-form-item label="活动地点">
            <label slot="label"><b>活动地点</b></label>
            <span>{{ feedbackRow.groundname }}</span>
          </el-form-item>
          <el-form-item label="活动评分">
            <label slot="label"><b>活动评分</b></label>
            <div>
              <p>
                <el-rate
                  class="block"
                  v-model="ruleForm.score"
                  :colors="colors"
                  show-text
                ></el-rate>
              </p>
            </div>
          </el-form-item>
          <el-form-item label="详细意见">
            <label slot="label"><b>详细意见</b></label>
            <span>
              <el-input
                :autosize="{ minRows: 2, maxRows: 6 }"
                class="input"
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="ruleForm.textarea"
              >
              </el-input>
            </span>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$emit('closeDialog')">取消</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </span>
    </el-dialog>
</template>

<script>
import { POSTFeedbackRecords } from "../API/http";
export default {
  name: "FeedbackDialog",
  data() {
    // let vm = {
    //   ID: "111111",
    //   time: "2021-6-7 17：00-19：00",
    //   place: "G403",
    //   feedBackDate:Date(),
    //   feedBackTime:Date(),
    // };
    return {
      ruleForm: {
          score: null,
          textarea: "",
      },
      rules: {
        textarea: [
          { required: true, message: "请输入场地反馈", trigger: "blur" },
        ],
      },
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  props: {
    feedbackVisible: Boolean,
    feedbackRow: {
      ID: String,
      additionalRequest: String,
      date: String,
      description: String,
      groundname: String,
      groupname: String,
      name: String,
      participantNum: Number,
      tag: String,
      time: String,
    },

  },
  methods: {
    submit() {
      if (this.ruleForm.score == null || this.ruleForm.textarea == "") {
          this.$alert("未输入所有备选项", "反馈失败", {
            confirmButtonText: "确定",
            callback: (action) => {
              if (action === "confirm") {
                this.$message({
                  type: "error",
                  message: "反馈失败",
                });
              }
            },
          });
      } 
      else {
        var tmp = {
          feedbackDate: this.formatTime,
          feedbackTime: this.formatTime,
          content: this.ruleForm.textarea,
          score: this.ruleForm.score,
          id: this.feedbackRow.ID,
          groundName: this.feedbackRow.groundname,
        };
        console.log(tmp);
        POSTFeedbackRecords(tmp)
            .then((data) => {
              console.log(data);
              this.$message({ message: "反馈成功", type: "success" });
              this.$router.push({ path: "/GroundsAdmin/Main" });
            })
            .catch((err) => {
              err;
              this.$message({ message: "反馈失败", type: "error" });
            });
      }
      this.$emit('closeDialog');
    }
  }
}
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
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
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
.demo-table {
  font-family: Helvetica;
}
</style>