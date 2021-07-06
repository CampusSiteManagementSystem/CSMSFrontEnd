<template>
  <div class="page">
    <div>
      <h2>审批组织注册</h2>
    </div>
    <el-card>
      <el-row>
        <el-col :span="20"
          ><div class="info"> 
            <p>组织信息:</p>         
            <p>组织名称:</p>          
            <p>详细信息:</p>
            </div></el-col
      ></el-row>

      <el-row>
        <el-col :span="20"
          ><div class="status">
            <p>审核意见</p>
            <el-radio v-model="radio" label="1">通过</el-radio>
            <el-radio v-model="radio" label="2">不通过</el-radio>

            <br />
            <p>审核说明</p>
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input></div
        ></el-col>
      </el-row>

      <div class="submit">
        <el-button type="primary" @click="success">提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.el-card {
  height: 100%;
}
.info {
  text-align: left;
}

.submit {
  margin: 1cm 1cm 1cm 19cm;
}

p {
  color: rgb(0, 0, 0);
  position: relative;
  /* left: 20px; */
}
</style>

<script>
export default {
  data() {
    return {
      radio: "1",
      textarea: "",
    };
  },

  methods: {
    success() {
      this.$alert("审核成功！", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
};
</script>