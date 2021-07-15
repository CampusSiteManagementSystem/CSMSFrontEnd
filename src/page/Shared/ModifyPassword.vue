<template>
  <div class="page">
    <div class="background">
      <el-card>
        <div>
          <h2>修改密码</h2>
        </div>
        <div id="content">
          <el-form
            ref="RegisterForm"
            :model="form"
            :rules="rules"
            label-width="70px"
            :hide-required-asterisk="true"
            size="medium"
          >
            <el-form-item label="账号" prop="accountNumber">
              <el-input
                v-model.number="form.accountNumber"
                placeholder="请输入账号"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item label="原密码" prop="oldPassword">
              <el-input
                v-model="form.oldPassword"
                showPassword
                placeholder="请输入原密码"
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
            <el-form-item label="新密码" prop="password">
              <el-input
                v-model="form.password"
                showPassword
                placeholder="请输入新密码"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPassword">
              <el-input
                v-model="form.checkPassword"
                showPassword
                placeholder="请再次输入新密码"
                clearable
              ></el-input>
            </el-form-item>
            <el-row type="flex" justify="center" style="margin: 0px 0 10px 0px">
              <el-button
                @click="submitForm('RegisterForm')"
                size="medium"
                type="primary"
                >确认修改</el-button
              >
            </el-row>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {  PUTStuPassword } from "../../API/http";
export default {
  props: ["type"],
  data() {
    return {
      //发送邮箱避免频繁发送
      timeCnt: "验证",
      isOK: false,
      cnthandler: null,
      form: {
        accountNumber: "",
        password: "",
        checkPassword: "",
        email: "",
        verifyEmail: "",
      },

      rules: {
        accountNumber: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { type: "number", message: "账号必须为7位数字", trigger: "blur",min: 1000000,
            max: 9999999, },
        ],
        oldPassword: [
          { required: true, message: "请输入原密码", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/,
            message:
              "必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间",
            trigger: "blur",
          },
        ],
        checkPassword: [
          { required: true, message: "请再次输入新密码", trigger: "change" },
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
          this.$message(ErrorMessage);
        } else {

          this.timeCnt = 30;
          this.isOK = true;
          this.cnt();
          // GETEmail({ email: this.form.email })
          //   .then((data) => {
          //     data;
          //     this.$message("验证码发送成功");
          //   })
          //   .catch((err) => {
          //     err;
          //     this.$message.error("验证码发送失败");
          //   });
        }
      });
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.type === 1) {
            PUTStuPassword({
              accountNumber: this.form.accountNumber,
              secretPassword: this.form.password,
              eMailAddress: this.form.email,
              verificationCode: this.form.verifyEmail,
            })
              .then((data) => {
                data;
                this.$message("学生密码修改成功");
              })
              .catch((err) => {
                err;
                this.$message("学生密码修改失败");
              });
          }
        } else {
          this.$refs[formName].clearValidate();
          this.$message("填写数据有误，请重新填写!");
        }
      });
    },
  },
};
</script>

<style scoped>
.logoImage {
  height: 25%;
  width: 25%;
}
.el-card {
  border-radius: 15px;
}
.maintitle {
  text-align: center;
  font-size: 27px;
}
.page {
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  background-color: rgb(236, 233, 233);
  background: rgba(240, 235, 235, 0.5);
  justify-content: center;
  align-items: center;
}
.background {
  margin: 0;
  height: 98%;
  width: 99%;
  background-color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  position: relative;
}
.el-card {
  height: 100%;
}
#content {
  position: absolute;
  left: 350px;
  top: 90px;
}
.titlename {
  width: 100%;
}
</style>