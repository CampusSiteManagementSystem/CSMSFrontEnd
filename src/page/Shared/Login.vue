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
      </el-form>

      <el-radio-group v-model="identity" style="margin: 0px 0 5px 0px">
        <el-row :gutter="35">
          <el-col :span="14">
            <el-radio :label="1">学生</el-radio>
          </el-col>
          <el-col :span="10">
            <el-radio :label="2">场地管理员</el-radio>
          </el-col>
        </el-row>
        <el-row :gutter="35">
          <el-col :span="14">
            <el-radio :label="3">组织</el-radio>
          </el-col>
          <el-col :span="10">
            <el-radio :label="4">系统管理员</el-radio>
          </el-col>
        </el-row>
      </el-radio-group>

      <el-row :gutter="50" style="margin: 0px 0 5px 0px">
        <el-col :span="10" :offset="2">
          <el-button
            @click="submitForm('LoginForm')"
            type="primary"
            plain
            size="medium"
            >登录</el-button
          >
        </el-col>
        <el-col :span="12">
          <el-button @click="forgetPassword" type="primary" plain size="medium"
            >忘记密码</el-button
          >
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="24" :span="24">
          <el-button plain @click="register" size="mini">注册</el-button>
        </el-col>
      </el-row>
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
      identity: 1,
    };
  },
  methods: {
    forgetPassword: function () {
      this.$router.push("/ForgetPassword");
    },
    register: function () {
      this.$router.push("/Register");
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交表单到后台验证身份，并路由到指定页面
          this.$router.push("/StudentFrame");
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