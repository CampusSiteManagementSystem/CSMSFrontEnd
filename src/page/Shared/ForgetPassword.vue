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
            <el-form-item label="账号" prop="accountNumber">
              <el-input
                v-model.number="form.accountNumber"
                placeholder="请输入账号"
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
  GETOrgEmail,
  PUTStuPassword,
  PUTOrgPassword,
} from "../../API/http";
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
          { type: "number", message: "账号必须为7位数字", trigger: "blur" ,min: 1000000,
            max: 9999999,},
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
          if (this.type === "1") {
            this.$message("验证码发送成功");
            this.timeCnt = 30;
            this.isOK = true;
            this.cnt();
            GETStuEmail({ email: this.form.email })
              .then((data) => {
                data;
              })
              .catch((err) => {
                err;
                this.$message.error("验证码发送失败");
              });
          } else if (this.type === "3") {
            this.$message("验证码发送成功");
            this.timeCnt = 30;
            this.isOK = true;
            this.cnt();
            GETOrgEmail({ email: this.form.email })
              .then((data) => {
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
            PUTStuPassword({
              accountNumber: this.form.accountNumber,
              secretPassword: md5(this.form.password,"hhh"),
              eMailAddress: this.form.email,
              verificationCode: this.form.verifyEmail,
            })
              .then((data) => {
                data;
                this.$message("学生密码修改成功，请重新登录");
              })
              .catch((err) => {
                err;
                this.$message("学生密码修改失败");
              });
          } else if (this.type === "3") {
            PUTOrgPassword({
              accountNumber: this.form.accountNumber,
              secretPassword: md5(this.form.password,"hhh"),
              eMailAddress: this.form.email,
              verificationCode: this.form.verifyEmail,
            })
              .then((data) => {
                data;
                this.$message("组织密码修改成功，请重新登录");
              })
              .catch((err) => {
                err;
                this.$message("组织密码修改失败");
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