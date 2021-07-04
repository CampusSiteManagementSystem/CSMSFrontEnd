<template>
  <div class="page">
    <div>
      <h2>审批组织注册</h2>
    </div>
    <el-row>
      <el-col :span="20"
        ><div class="info">
          <br />
          <p>组织信息:</p>
          <br />
          <p>组织名称:</p>
          <br />
          <p>详细信息:</p>
          <br /></div></el-col
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
  </div>
</template>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.info {
  /* background-color: rgb(7, 7, 7);
  background: rgba(7, 7, 7, 0.116); */
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

.logoImage {
  height: 25%;
  width: 25%;
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
        this.$alert('审核成功！', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
}

};
</script>