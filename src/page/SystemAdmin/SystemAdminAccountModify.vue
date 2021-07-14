<template>
  <div class="page">
    <el-card class="infoMain">
      <div>
        <h2>用户信息</h2>
      </div>
      <el-row>
        <el-col :span="12">
          <div>
            <h3>用户头像</h3>
          </div>
          <div class="image">
            <img
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              class="pic"
            />
          </div>
          <div class="modify">
            <el-button type="primary">更改照片</el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <h3>用户信息</h3>
          </div>
          <div id="content">
            <transition name="fade-transform" mode="out-in">
              <div v-if="isForm == true">
                <el-form
                  ref="ruleForm"
                  :rules="rules"
                  :model="ruleForm"
                  label-width="100px"
                  :hide-required-asterisk="true"
                >
                  <el-form-item label="账号：" prop="account">
                    <el-input
                      v-model="ruleForm.account"
                      :readonly="true"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="密码：" prop="password">
                    <el-input
                      v-model="ruleForm.password"
                      :readonly="true"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱：" prop="email">
                    <div v-if="isForm == false">
                      <el-input
                        v-model="ruleForm.email"
                        :readonly="true"
                      ></el-input>
                    </div>
                    <div v-else>
                      <el-input v-model="ruleForm.email"></el-input>
                    </div>
                  </el-form-item>
                </el-form>
              </div>
            </transition>

            <transition name="fade-transform" mode="out-in">
              <div v-if="isTable == true">
                <el-table
                  :show-header="false"
                  :data="tableData"
                  :cell-style="columnStyle"
                  border
                  style="width: 80%; margin-top: 20px"
                >
                  <el-table-column width="180" prop="title" label="标题">
                  </el-table-column>
                  <el-table-column prop="content" label="内容">
                  </el-table-column>
                </el-table>
              </div>
            </transition>
            <div v-if="isTable == true" class="modify">
              <el-button type="primary" @click="edit">编辑个人信息</el-button>
            </div>
            <div v-if="isForm == true" class="modify">
              <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="returnback">取消</el-button>
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

p {
  color: rgb(0, 0, 0);
  position: relative;
}
.fade-transform-enter-active {
  transition: all 0.3s;
}
.fade-transform-leave-active {
  transition: all 0.3s;
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
</style>


<script>

import {GETSystemAdministrators} from "../../API/http"

export default {
  created() {
    GETSystemAdministrators()
      .then((data) => {
        this.ruleForm.account = data.accountNumber;
        this.ruleForm.password = data.secretPassword;
        this.ruleForm.email = data.eMailAddress;
        this.updateData();
      })
      .catch((err) => {
        console.log(err);
        this.$message("管理员信息获取错误");
      });
  },

  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
        email: "",
      },

      rules: {
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
          {
            type: "email",
            massage: "请正确输入邮箱",
            trigger: "blur",
          },
        ],
      },
      tableData: [
        {
          title: "账号",
          content: "122234",
        },
        {
          title: "密码",
          content: "7788Acb",
        },
        {
          title: "邮箱",
          content: "www.ljj@sjk.com",
        },
      ],
      isForm: false,
      isTable: true,
    };
  },
  mounted() {
    this.updateData();
  },
  methods: {
    columnStyle({ row, column, rowIndex, columnIndex }) {
      row;
      column;
      //console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0 && rowIndex < 2) {
        return "background:#FBFBEF; font-weight: 700;";
      } else if (columnIndex == 0) {
        return "background:#EFFBEF; font-weight: 700;";
      }
    },
    returnData() {
      this.ruleForm.account = this.tableData[0].content;
      this.ruleForm.password = this.tableData[1].content;
      this.ruleForm.email = this.tableData[2].content;
    },
    updateData() {
      this.tableData[0].content = this.ruleForm.account;
      this.tableData[1].content = this.ruleForm.password;
      this.tableData[2].content = this.ruleForm.email;
    },
    edit() {
      this.isTable = false;
      setTimeout(() => {
        this.isForm = true;
      }, 400);
    },
    returnback() {
      this.isForm = false;
      setTimeout(() => {
        this.isTable = true;
        this.returnData();
      }, 400);
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isForm = false;
          setTimeout(() => {
            this.isTable = true;
            this.updateData();
          }, 400);
          this.$alert("编辑成功！", {
            confirmButtonText: "确定",
            callback: (action) => {
              if (action === "confirm") {
                this.$message({
                  type: "success",
                  message: "编辑成功",
                });
              }
            },
          });
        }
      });
    },
  },
};
</script>