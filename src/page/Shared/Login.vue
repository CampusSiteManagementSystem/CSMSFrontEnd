<template>
  <div class="IdentitySelectionPage">
    <img
      src="../../assets/IdentitySelection.jpg"
      class="IdentitySelectionBackImage"
    />
    <div class="IdentitySelectionContainer">
      <div>
        <h1>校园场地管理系统</h1>
        <h4>Campus Site Management</h4>
      </div>
      <div>
        <el-form
          ref="LoginForm"
          :model="form"
          :rules="rules"
          label-width="40px"
          :hide-required-asterisk="true"
        >
          <el-form-item label="账号" class="label-color" prop="accountNumber">
            <el-input
              v-model.number="form.accountNumber"
              placeholder="请输入账号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" class="label-color" prop="password">
            <el-input
              v-model="form.password"
              showPassword
              placeholder="请输入密码"
              clearable
            ></el-input>
          </el-form-item>
          <el-row type="flex" justify="center" class="bottom-margin">
            <router-link to="/Register" tag="el-button">注册</router-link>
            <router-link to="/ForgetPassword" tag="el-button">忘记密码</router-link>
            <!-- <el-button>忘记密码</el-button> -->
            <el-button @click="submitForm('LoginForm')">登录</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        accountNumber: "",
        password: "",
      },
      rules: {
        accountNumber: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { type: "number", message: "账号只能由数字构成", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/,
            message: "密码格式有误",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交表单到后台验证身份，并路由到指定页面
          alert("submit!");
        } else {
          alert("Recomplete!");
          this.$refs[formName].resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
@import "../../css/IdentitySelection.css";
@import "../../css/Login.css";

h1,
h4 {
  color: white;
}
</style>