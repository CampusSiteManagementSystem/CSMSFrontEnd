<template>
  <div class="maindiv">
    <el-card class="mycard">
      <h3>组织注册</h3>
      <el-row>
        <el-col :span="23" :offset="1"
          ><div class="info">
            <el-form
              ref="ruleForm"
              :model="ruleForm"
              label-width="100px"
              :hide-required-asterisk="true"
            >
              <el-form-item label="组织名称：" prop="name">
                <el-input v-model="ruleForm.name" :readonly="true"></el-input>
              </el-form-item>
              <el-form-item label="详细信息：" prop="content">
                <el-input
                  v-model="ruleForm.content"
                  :readonly="true"
                ></el-input>
              </el-form-item>
            </el-form></div></el-col
      ></el-row>

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
import { GETOrganizationsID } from "../../API/http";
//import store from "../../state/state";
 
export default {
  mounted() {
    console.log("aaa",this.$route.query.accountNumber)
    GETOrganizationsID(this.$route.query.accountNumber)
      .then((data) => {
        this.ruleForm.name = data.name;
        this.ruleForm.content = data.detailInfo;
      })
      .catch((err) => {
        console.log(err);
        this.$message("组织信息获取错误");
      });    
  },

  data() {
    return {
      radio: "1",
      textarea: "",
      //OrgID:"this.$route.params.accountNumber",
      ruleForm: {
        name: "",
        content: "",
      },
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