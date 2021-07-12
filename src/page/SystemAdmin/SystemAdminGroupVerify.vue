<template>
  <div class="maindiv">
    <el-card class="mycard">
      <h3>组织注册</h3>
      <el-row>
        <el-col :span="23" :offset="1"
          ><div class="info">
            <p>组织信息:</p>
            <p>组织名称:</p>
            <p>详细信息:</p>
          </div></el-col
        ></el-row
      >

      <el-row>
        <el-col :span="20"
          ><div class="status">
            <h3>审核意见</h3>
            <el-col :span="2" :offset="1">
            <el-radio v-model="radio" label="1">通过</el-radio>
            </el-col>
            <el-col :span="2">
            <el-radio v-model="radio" label="2">不通过</el-radio>
            </el-col>
          </div></el-col
        >
      </el-row>

      <el-row>
        <div class="submit">
          <router-link
            to="/SysAdminFrame/GroupVerifyList"
            tag="el-button"
            type="primary"
            >返回</router-link
          >
          <el-button type="primary" @click="success">提交</el-button>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
html,
body,
.mycard {
  height: 100%;
  border-radius: 12px;
}
.info {
  text-align: left;
}

.submit {
  /* margin: 1cm 1cm 1cm 17cm; */
  float: right;
}

p {
  color: rgb(0, 0, 0);
  position: relative;
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

    returnback() {
      this.$router.push({ path: "SystemAdminAccountModify" });
    },
  },
};
</script>