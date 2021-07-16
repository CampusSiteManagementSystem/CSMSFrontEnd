<template>
  <div class="IdentitySelectionPage">
    <img
      src="../../assets/IdentitySelection.jpg"
      class="IdentitySelectionBackImage"
    />
    <!--"IdentitySelectionContainer"-->
    <el-card class="IdentitySelectionContainer" style="border-radius: 12px">
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="24">
            <img src="../../assets/tjlogo.svg" class="logoImage" />
          </el-col>
        </el-row>
      </div>
      <el-row>
        <el-col>
          <el-form
            ref="RegisterForm"
            :model="form"
            :rules="rules"
            label-width="70px"
            :hide-required-asterisk="true"
            size="medium"
          >
            <el-form-item label="账号" prop="accountNo">
              <el-input
                v-model.number="form.accountNo"
                placeholder="请输入账号"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="form.username"
                placeholder="请输入用户名"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="form.password"
                showPassword
                placeholder="请输入密码"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPassword" clearable>
              <el-input
                v-model="form.checkPassword"
                showPassword
                placeholder="请再次输入密码"
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
                <el-button
                  type="primary"
                  plain
                  @click="sendEmail('RegisterForm')"
                  :disabled="isOK"
                  >{{ timeCnt }}</el-button
                >
              </el-row>
            </el-form-item>
            <el-form-item label="验证码" prop="verifyEmail">
              <el-input
                v-model="form.verifyEmail"
                placeholder="请输入验证码"
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
                >注册</el-button
              >
            </el-row>
          </el-form>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <router-link to="/">
          <el-link :underline="false">返回</el-link>
        </router-link>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import md5 from 'js-md5';
import {
  GETStuEmail,
  POSTStudents,
  POSTOrganizations,
  GETOrgEmail,
  Login,
} from "../../API/http";
import store from "../../state/state";
export default {
  props: ["type"],
  data() {
    return {
      //发送邮箱避免频繁发送
      timeCnt: "验证",
      isOK: false,
      cnthandler: null,
      form: {
        accountNo: "",
        username: "",
        password: "",
        checkPassword: "",
        email: "",
        verifyEmail: "",
      },
      rules: {
        accountNo: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            type: "number",
            message: "账号必须为7位数字",
            trigger: "change",
            min: 1000000,
            max: 9999999,
          },
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            // pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
            max: 10, message: "长度为1~10个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/,
            message:
              "必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间",
            trigger: "blur",
          },
        ],
        checkPassword: [
          { required: true, message: "请再次输入密码", trigger: "change" },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.password) {
                callback(new Error("两次输入密码不一致"));
              } else {
                callback();
              }
            },
            trigger: "change",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "change" },
          { type: "email", message: "请填写正确的邮箱", trigger: "change" },
        ],
        verifyEmail: [
          { required: true, message: "请输入验证码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    cnt: function () {
      this.cnthandler = setTimeout(() => {
        if (this.timeCnt === 0) {
          clearInterval(this.cnthandler);
          this.timeCnt = "验证";
          this.isOK = false;
          return;
        }
        this.timeCnt--;
        this.cnt();
      }, 1000);
    },
    sendEmail: function (formName) {
      this.$refs[formName].validateField("email", (ErrorMessage) => {
        if (ErrorMessage) {
          //验证失败
          this.$message(ErrorMessage);
        } else {
          if (this.type === "1") {
            this.timeCnt = 30;
            this.isOK = true;
            this.cnt();
            GETStuEmail({ email: this.form.email })
              .then((data) => {
                this.$message("验证码发送成功");
                data;
              })
              .catch((err) => {
                err;
                this.$message.error("验证码发送失败");
              });
          } else if (this.type === "3") {
            this.timeCnt = 30;
            this.isOK = true;
            this.cnt();
            GETOrgEmail({ email: this.form.email })
              .then((data) => {
                this.$message("验证码发送成功");
                data;
              })
              .catch((err) => {
                err;
                this.$message.error("验证码发送失败");
              });
          }
        }
      });
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.type === "1") {
            //stu
            POSTStudents({
              accountNumber: this.form.accountNo,
              secretPassword: md5(this.form.password,"hhh"),
              eMailAddress: this.form.email,
              name: this.form.username,
              verificationCode: this.form.verifyEmail,
            })
              .then((data) => {
                data;
                //console.log(data);
                this.$message("学生用户创建成功");
                Login({
                  accountNumber: this.form.accountNo,
                  secretPassword: md5(this.form.password,"hhh"),
                  role: 'student',
                })
                  .then((data) => {
                    localStorage.setItem("uutype", 'student');
                    localStorage.setItem("uuid", this.form.accountNo);
                    localStorage.setItem("uutoken", data.accessToken);
                    store.state.ID = this.form.accountNo;
                    store.state.membertype = 'student';
                    this.$router.push("/StuFrame/Main");
                  })
                  .catch((err) => {
                    this.$message("登录失败");
                    console.log(err);
                  });
              })
              .catch((err) => {
                //console.log(err);
                err;
                this.$message.error("学生用户创建失败");
              });
          } else if (this.type === "3") {
            //
            POSTOrganizations({
              accountNumber: this.form.accountNo,
              secretPassword: md5(this.form.password,"hhh"),
              eMailAddress: this.form.email,
              name: this.form.username,
              verificationCode: this.form.verifyEmail,
            })
              .then((data) => {
                data;
                this.$router.push("/");
                this.$message("组织用户创建成功");
              })
              .catch(()=>{
                this.$message("组织用户创建失败");
              })
          }
        } else {
          //alert(msg);
          this.$message("信息填写有误，请重新填写");
          this.$refs[formName].clearValidate();
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
.el-card {
  border-radius: 15px;
}
.logoImage {
  height: 100%;
  width: 100%;
}
</style>