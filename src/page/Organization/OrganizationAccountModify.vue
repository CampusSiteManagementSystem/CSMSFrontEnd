<template>
  <div class="page">
    <div>
      <h2>组织用户信息</h2>
    </div>
<el-card>
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
          <p>信用分:</p>
          <br />
          <p>邮箱地址:</p>
          <br />
          <p>类型:</p>
          </div
      ></el-col>

      <el-col :span="6"
        ><div class="infol">
          <br />
          <p>负责人:</p>
          <br />
          <p>联系方式:</p>
          <br />
          <p>详细信息:</p>
          </div
      ></el-col>
    </el-row>
    <div class="modify">
      <el-button type="primary" @click="success">编辑</el-button>
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

p {
  color: rgb(0, 0, 0);
  position: relative;
}

.modify {
  margin-top: 4cm;
  margin-left: 15cm;
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