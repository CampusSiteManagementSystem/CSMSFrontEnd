<template>
  <div class="IdentitySelectionPage">
    <img
      src="../../assets/IdentitySelection.jpg"
      class="IdentitySelectionBackImage"
    />
    <!--"IdentitySelectionContainer"-->
    <el-card class="IdentitySelectionContainer" style="border-radius:12px">
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="24">
            <img src="../../assets/tjlogo.png" class="logoImage" />
          </el-col>
        </el-row>
      </div>
          <el-form
          ref="RegisterForm"
          :model="form"
          :rules="rules"
          label-width="70px"
          :hide-required-asterisk="true"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model.number="form.username"
              placeholder="请输入用户名"
              clearable
            ></el-input>
          </el-form-item>
          
          <el-form-item label="邮箱" prop="email">
            <el-row type="flex">
              <el-input
                v-model="form.email"
                placeholder="请输入邮箱"
                clearable
              ></el-input>
              <el-button type="primary" plain @click="sendEmail('RegisterForm')">验证</el-button>
            </el-row>
          </el-form-item>
          <el-form-item label="验证码" prop="verifyEmail">
            <el-input
              v-model="form.verifyEmail"
              placeholder="请输入验证码"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <el-input
              v-model="form.password"
              showPassword
              placeholder="请输入新密码"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="确认密码"
            prop="checkPassword"
            clearable
          >
            <el-input
              v-model="form.checkPassword"
              showPassword
              placeholder="请再次输入密码"
              clearable
            ></el-input>
          </el-form-item>
          <el-row type="flex" justify="center" style="margin: 0px 0 10px 0px">
            <el-button
              @click="submitForm('RegisterForm')"
              size="medium"
              round
              style="width: 70%"
              type="primary"
              >找回</el-button
            >
            <!-- <el-button type="primary" @click="submitForm('RegisterForm')">找回</el-button> -->
          </el-row>
        </el-form>
        <el-row type="flex" justify="center">
          <router-link to="/">
            <el-link :underline="false">返回</el-link>
          </router-link>
        </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        checkPassword: "",
        email: "",
        verifyEmail: "",
      },
      verifyCode: undefined, //从后端接收的验证码

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
            message: "用户名必须以字母开头,长度4-15",
            trigger: "change",
          },
        ],
        // password: [
        //   { required: true, message: "请输入密码", trigger: "change" },
        //   {
        //     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/,
        //     message:
        //       "密码必须包含大小写字母和数字的组合，长度8-10，不能使用特殊字符",
        //     trigger: "change",
        //   },
        // ],
        // checkPassword: [
        //   { required: true, message: "请再次输入密码", trigger: "change" },
        //   {
        //     validator: (rule, value, callback) => {
        //       if (value !== this.form.password) {
        //         callback(new Error("两次输入密码不一致"));
        //       } else {
        //         callback();
        //       }
        //     },
        //     trigger: "change",
        //   },
        // ],
        email: [
          { required: true, message: "请填写邮箱", trigger: "change" },
          { type: "email", message: "请填写正确的邮箱", trigger: "change" },
        ],
        verifyEmail: [
          { required: true, message: "请输入验证码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    sendEmail: function (formName) {
      this.$refs[formName].validateField("email", (ErrorMessage) => {
        if (ErrorMessage) {
          //验证失败
          alert("邮箱填写有误" + ErrorMessage);
        } else {
          //向后端请求发送验证码并接收该验证码
            //to do 
          alert("验证码发送成功"); //just test
        }
      });
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //校验邮箱验证码，然后发送请求
          //to do
          //向后端请求创建账户
          alert("用户密码修改成功"); //just test
        } else {
          this.$refs[formName].resetFields();
          alert("填写数据有误，请重新填写!");
        }
      });
    },
  },
};
</script>

<style scoped>
@import "../../css/IdentitySelection.css";

.IdentitySelectionChooseButton {
  width: auto;
  height: 10%;
}

.logoImage {
  height: 100%;
  width: 100%;
}

</style>