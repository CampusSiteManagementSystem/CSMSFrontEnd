<template>
  <div class="page">
    <el-card class="infoMain">
     <div slot="header" class="clearfix">
            <span><b>添加用户</b></span>
          </div>
      <el-row>
        <el-col :span="18" :offset="3">
          <div>
            <h3>用户信息</h3>
          </div>
          <div id="content">
            <el-form
              ref="ruleForm"
              :rules="rules"
              :model="ruleForm"
              label-width="100px"
              :hide-required-asterisk="true"
            >
              <el-form-item label="账号：" prop="account">
                <el-input v-model.number="ruleForm.account"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password" showPassword>
                <el-input v-model="ruleForm.password" show-password></el-input>
              </el-form-item>
            </el-form>
            <div class="modify" style="float: right">
              <el-button type="primary" @click="returnback">取消</el-button>
              <el-button type="primary" @click="success">提交</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.info {
  text-align: left;
}
.infoMain{
  height: 100%;
}
p {
  color: rgb(0, 0, 0);
  position: relative;
}

.image {
  margin-top: -0.5cm;
}

.modify {
  margin-top: 1cm;
  margin-left: 5cm;
}

.pic {
  height: 45%;
  width: 45%;
  margin-top: 1cm;
  margin-left: 2.2cm;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  font-size: 18px;
}
.el-card {
  border-radius: 15px;
}
</style>

<script>
import { POSTOrganizations } from "../../API/http";

export default {
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
        email: "",
      },

      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { type: "number", message: "账号必须为7位数字", trigger: "change" ,min: 1000000,
            max:9999999,},
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/,
            message:
              "必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
          { type: "email", message: "请填写正确的邮箱", trigger: "change" },
        ],
      },

      isSet: false,
    };
  },

  methods: {
    returnback() {
      this.$router.push({ path: "MaintainUserInfo" });
    },

    success() {
      this.isSet = false;
      // this.$alert("提交成功！", {
      //   confirmButtonText: "确定",
      //   callback: (action) => {
      //     this.$message({
      //       type: "info",
      //       message: `action: ${action}`,
      //     });
      //   },
      // });
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          POSTOrganizations({
            accountNumber: this.ruleForm.account,
            secretPassword: this.ruleForm.password,
            eMailAddress: this.ruleForm.email,
          })
            .then((data) => {
              data;
              this.$alert("提交成功！", {
                confirmButtonText: "确定",
                callback: (action) => {
                  this.$message({
                    type: "info",
                    message: `action: ${action}`,
                  });

                  this.$router.push({ path: "MaintainUserInfo" });
                },
              });
            })
            .catch((err) => {
              console.log(err);
              this.$message("信息获取错误");
            });
        } else {
          this.$message({ message: "请输入符合规范的数据", type: "warning" });
        }
      });
    },
  },
};
</script>