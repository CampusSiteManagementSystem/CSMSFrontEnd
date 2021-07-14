<template>
  <div class="IdentitySelectionPage">
    <img
      src="../../assets/IdentitySelection.jpg"
      class="IdentitySelectionBackImage"
    />
    <!--"IdentitySelectionContainer"-->
    <el-card
      id="logincard"
      class="IdentitySelectionContainer"
      style="border-radius: 12px"
    >
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="24">
            <img src="../../assets/tjlogo.png" class="logoImage" />
          </el-col>
        </el-row>
      </div>

      <el-row>
        <el-col>
          <el-form
            ref="LoginForm"
            :model="form"
            :rules="rules"
            label-width="40px"
            :hide-required-asterisk="true"
            size="medium"
          >
            <el-form-item label="账号" prop="accountNumber">
              <el-input
                v-model.number="form.accountNumber"
                placeholder="请输入账号"
                clearable
                autofocus
                autocomplete
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="form.password"
                showPassword
                placeholder="请输入密码"
                clearable
                autofocus
                autocomplete
              ></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio-group v-model="identity" style="margin: 0px 0 15px 0px">
            <el-row :gutter="35" style="margin: 0px 0 5px 0px">
              <el-col :span="14">
                <el-radio :label="1">学生</el-radio>
              </el-col>
              <el-col :span="10">
                <el-radio :label="2">场地管理员</el-radio>
              </el-col>
            </el-row>
            <el-row :gutter="35" style="margin: 0px 0 5px 0px">
              <el-col :span="14">
                <el-radio :label="3">组织</el-radio>
              </el-col>
              <el-col :span="10">
                <el-radio :label="4">系统管理员</el-radio>
              </el-col>
            </el-row>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin: 0px 0 10px 0px">
        <el-button
          @click="submitForm('LoginForm')"
          size="medium"
          round
          style="width: 70%"
          type="primary"
          >登录</el-button
        >
        <el-button @click="test">test</el-button>
      </el-row>

      <el-row>
        <el-col :span="8" :offset="6">
          <router-link to="/Register">
            <el-link :underline="false">注册</el-link>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link to="/ForgetPassword">
            <el-link :underline="false">忘记密码</el-link>
          </router-link>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { Login, LoginTest } from "../../API/http";
//import store from "../../state/state";
export default {
  data() {
    return {
      res: null,
      form: {
        accountNumber: "",
        password: "",
      },
      rules: {
        accountNumber: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
          {
            type: "number",
            message: "账号只能由数字构成",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/,
            message:
              "必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间",
            trigger: "blur",
          },
        ],
      },
      identity: 1,
    };
  },
  methods: {
    test() {
      LoginTest()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交表单到后台验证身份，并路由到指定页面
          if (this.identity === 1) {
            Login({
              accountNumber: this.form.accountNumber,
              secretPassword: this.form.password,
            })
              .then((data) => {
                localStorage.setItem("membertype",this.identity);
                localStorage.setItem("uuid",this.form.accountNumber)
                localStorage.setItem("accessToken",data.accessToken)
              })
              .catch((err) => {
                console.log(err);
              });
            //this.$router.push("/StuFrame/Main");
          } else if (this.identity === 2) {
            this.$router.push("/GroundsAdmin/Main");
          } else if (this.identity === 3) {
            this.$router.push("/OrgFrame/Main");
          } else if (this.identity === 4) {
            this.$router.push("/SysAdminFrame");
          }
        }
      });
    },
    watch: {
      $route() {
        this.$router.go(0);
      },
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

.logoImage {
  height: 100%;
  width: 100%;
}

.blur {
  filter: blur(10px);
}
</style>