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
              <el-form-item label="姓名：" prop="name">
                <div v-if="isForm == false">
                  <el-input v-model="ruleForm.name" :readonly="true"></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.name"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="性别：" prop="gender">
                <el-input
                  v-model="ruleForm.gender"
                  :readonly="true"
                ></el-input>
              </el-form-item>
              <el-form-item label="年级：" prop="grade">
                <div v-if="isForm == false">
                  <el-input
                    v-model="ruleForm.grade"
                    :readonly="true"
                  ></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.grade"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="学院：" prop="academy">
                <el-input
                  v-model="ruleForm.academy"
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
              <el-table :show-header="false" :data="tableData" :cell-style="columnStyle" border
                style="width: 80%; margin-top: 20px">
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
              <el-button type="primary" @click="submitForm('ruleForm')">取消</el-button>
              <el-button @click="returnback">提交</el-button>
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
.fade-transform-enter-active{
  transition: all 0.3s;
}
.fade-transform-leave-active{
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
import { GETStudentsID } from "../../API/http";

export default {
  mounted() {
    console.log("aaa", this.$route.query.accountNumber);
    GETStudentsID(this.$route.query.accountNumber)
      .then((data) => {
        this.ruleForm.account = data.accountNumber;
        this.ruleForm.name = data.name;
        this.ruleForm.gender = data.gender;
        this.ruleForm.grade = data.grade;
        this.ruleForm.academy = data.academy;
        this.ruleForm.email = data.eMailAddress;
      })
      .catch((err) => {
        console.log(err);
        this.$message("信息获取错误");
      });
  },

  data() {
    return {
      ruleForm: {
        account: "",
        name: "",
        gender: "",
        grade: "",
        academy: "",
        email: "",
      },

      rules: {
        name: [
          { required: true, message: "请输入组织名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        user: [
          { required: true, message: "请输入负责人名称", trigger: "blur" },
        ],
        telephone: [
          {
            required: true,
            message: "请输入联系电话",
            trigger: "blur",
          },
          {
            pattern:
              /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
            message: "请正确输入联系电话，为11位数字",
            trigger: "change",
          },
        ],
        content: [{ required: true, message: "请输入介绍", trigger: "blur" }],
        state: [{ required: true, message: "请输入审核状态", trigger: "blur" }],
      },
      tableData: [
        {
          title: "账号",
          content: "",
        },
        {
          title: "姓名",
          content: "",
        },
        {
          title: "性别",
          content: "",
        },
        {
          title: "年级",
          content: "",
        },
        {
          title: "学院",
          content: "",
        },        
        {
          title: "邮箱",
          content: "",
        },
      ],
      isForm: false,
      isTable:true,
    };
  },

  methods: {
    columnStyle({ row, column, rowIndex, columnIndex }) {
      row;
      column;
      //console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0 && ((rowIndex == 0)||(rowIndex == 2)||(rowIndex == 4))) {
        return "background:#FBFBEF; font-weight: 700;";
      } else if (columnIndex == 0) {
        return "background:#EFFBEF; font-weight: 700;";
      }
    },
    returnData(){
      this.ruleForm.account = this.tableData[0].content;
      this.ruleForm.name = this.tableData[1].content;
      this.ruleForm.gender = this.tableData[2].content;
      this.ruleForm.grade = this.tableData[3].content;
      this.ruleForm.academy = this.tableData[4].content;
      this.ruleForm.email = this.tableData[5].content;
    },    
    updateData() {
      this.tableData[0].content=this.ruleForm.account;
      this.tableData[1].content=this.ruleForm.name;
      this.tableData[2].content=this.ruleForm.gender;
      this.tableData[3].content=this.ruleForm.grade;
      this.tableData[4].content=this.ruleForm.academy;
      this.tableData[5].content=this.ruleForm.email;
    },
    edit() {
      this.isTable = false;
      setTimeout(() => {
        this.isForm = true;
      }, 400);
    },
    returnback(){
      this.isForm = false;
      setTimeout(() => {
        this.isTable = true;
        this.returnData();
      }, 400);
    },    
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //this.setToDB();
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