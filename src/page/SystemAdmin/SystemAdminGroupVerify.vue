<template>
  <div class="maindiv">
    <el-card class="mycard">
      <div slot="header" class="clearfix">
        <span><b>组织注册</b></span>
      </div>
      <el-row>
        <el-col :span="10" :offset="2"
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
        <el-col :span="10" :offset="2"
          ><div class="status">
            <h3>审核意见</h3>
            <el-col :span="2" :offset="2">
              <el-radio v-model="radio" label="通过">通过</el-radio>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-radio v-model="radio" label="不通过">不通过</el-radio>
            </el-col>
          </div></el-col
        >
      </el-row>

      <el-row>
        <el-col :span="5" :offset="15">
          <div class="submit">
            <router-link
              to="/SysAdminFrame/GroupVerifyList"
              tag="el-button"
              type="primary"
              >返回</router-link
            >
            <el-button type="primary" @click="submit">提交</el-button>
          </div>
        </el-col>
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
.el-card {
  border-radius: 15px;
}
/* .submit {
  margin: 1cm 1cm 1cm 17cm;
   float: right;
} */

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
    console.log("aaa", this.$route.query.accountNumber);
    GETOrganizationsID(this.$route.query.accountNumber)
      .then((data) => {
        console.log(data);
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
      radio: "",
      textarea: "",
      //OrgID:"this.$route.params.accountNumber",
      ruleForm: {
        name: "",
        content: "",
      },
    };
  },

  methods: {
    submit() {
      var axios = require("axios");
      var data = JSON.stringify({
        accountNumber: this.$route.query.accountNumber,
        state: this.radio,
      });

      var config = {
        method: "put",
        url: "http://139.196.114.7/api/Organizations",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.$message({ message: "修改成功", type: "success" });
          this.$router.push("/SysAdminFrame/GroupVerifyList");
        })
        .catch((error) => {
          console.log(error);
          this.$message({ message: "修改失败", type: "error" });
          this.$router.push("/SysAdminFrame/GroupVerifyList");
        });
    },
  },
};
</script>