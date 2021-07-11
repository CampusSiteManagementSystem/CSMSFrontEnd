<template>
  <div class="maindiv">
    <el-card class="mycard" style="height=400;border-radius: 12px">
      <!-- <div> -->
      <h2>用户信息</h2>
      <!-- </div> -->
      <el-row>
        <el-col :span="6"
          ><div class="pic">
            <img src="../../assets/logo.png" class="pic" /></div
        ></el-col>
        <el-col :span="6"
          ><div class="info">
            <br />
            <!-- <el-form-item label="姓名：" prop="name">
              <el-input
                class="name"
                type="text"
                placeholder="王某"
                v-model="ruleform.name"
                maxlength="20"
                show-word-limit
              >
              </el-input>
            </el-form-item> -->
            <!-- <el-input class="name" type="text" placeholder="请输入内容" v-model="ruleform.name" maxlength="20" show-word-limit>
            </el-input> -->
            <br />
            <p>学号:</p>
            <br />
            <p>年龄:</p>
            <br />
            <p>性别:</p>
          </div></el-col
        >

        <el-col :span="6"
          ><div class="infol">
            <br />
            <p>学院:</p>
            <br />
            <p>班级:</p>
            <br />
            <p>邮箱:</p>
          </div></el-col
        >
      </el-row>

      <div class="modify">
        <router-link
          to="/SysAdminFrame/MaintainUserInfo"
          tag="el-button"
          type="primary"
          >返回</router-link
        >
        <el-button type="primary" @click="success">编辑</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
/* .el-card {
  height: 400;
} */

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
      this.$alert("编辑成功！", {
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