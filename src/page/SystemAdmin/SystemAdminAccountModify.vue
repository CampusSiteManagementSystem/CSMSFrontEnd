<template>
  <div class="page">
    <div>
      <h2>用户信息</h2>
    </div>

    <el-row>
      <el-col :span="6"
        ><div class="pic">
          <img src="../../assets/logo.png" class="pic" /></div
      ></el-col>

      <el-col :span="6"
        ><div class="info">
          <br />
          <p>姓名:</p>
          <br />
          <p>学号:</p>
          <br />
          <p>年龄:</p>
          <br />
          <p>性别:</p>
          <br /></div
      ></el-col>

      <el-col :span="6"
        ><div class="infol">
          <br />
          <p>学院:</p>
          <br />
          <p>班级:</p>
          <br />
          <p>邮箱:</p>
          <br /></div
      ></el-col>
    </el-row>
    <div class="modify">
      <el-button type="primary" @click="success">编辑</el-button>
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
  text-align: left;
}

p {
  color: rgb(0, 0, 0);
  position: relative;
  /* left: 20px; */
}

.modify {
  margin-top: 5cm;
  margin-left: 15cm;
}

.logoImage {
  height: 25%;
  width: 25%;
}

.pic {
  height: 45%;
  width: 60%;
  margin-top: 1cm;
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
        this.$alert('编辑成功！', {
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