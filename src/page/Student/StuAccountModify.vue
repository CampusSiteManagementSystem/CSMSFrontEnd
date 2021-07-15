<template>
  <div class="page">
    <el-card>
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
          <transition name="fade-transform" mode="out-in">
            <div v-if="isForm == true">
              <el-form
                ref="ruleForm"
                :rules="rules"
                :model="ruleForm"
                :hide-required-asterisk="true"
              >
                <el-form-item label="账号：" prop="account">
                  <el-input
                    v-model="ruleForm.account"
                    :readonly="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="姓名：" prop="name">
                  <el-input v-model="ruleForm.name" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="性别：" prop="gender">
                  <el-input
                    v-model="ruleForm.gender"
                    :readonly="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="民族：" prop="country">
                  <el-input
                    v-model="ruleForm.country"
                    :readonly="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="年级：" prop="grade">
                  <el-input
                    v-model="ruleForm.grade"
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
                <el-form-item label="学院：" prop="college">
                  <div v-if="isForm == false">
                    <el-input
                      v-model="ruleForm.college"
                      :readonly="true"
                    ></el-input>
                  </div>
                  <div v-else>
                    <el-select v-model="ruleForm.college" placeholder="请选择">
                      <el-option
                        v-for="item in colleges"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </el-form-item>

                <el-form-item label="专业：" prop="specialty">
                  <div v-if="isForm == false">
                    <el-input
                      v-model="ruleForm.specialty"
                      :readonly="true"
                    ></el-input>
                  </div>
                  <div v-else>
                    <el-select
                      v-model="ruleForm.specialty"
                      placeholder="请选择"
                      @focus="focusText"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
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
                <el-table-column prop="title" label="标题">
                </el-table-column>
                <el-table-column prop="content" label="内容"> </el-table-column>
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
  height: 57%;
  width: 57%;
  margin-top: 1cm;
  margin-left: 2.2cm;
}
.el-card {
  border-radius: 15px;
}
</style>

<script>
import { GETStudentsID, PUTStudentsID } from "../../API/http";
import store from "../../state/state";

export default {
  created() {
    GETStudentsID(this.StuID)
      .then((data) => {
        this.ruleForm.account = this.StuID;
        this.ruleForm.name = data.name;
        this.ruleForm.gender = data.gender;
        this.ruleForm.country = data.nation;
        this.ruleForm.grade = data.grade;
        this.ruleForm.email = data.eMailAddress;
        this.ruleForm.college = data.academy;
        this.ruleForm.specialty = data.major;
        this.NumToStr();
        this.updateData();
      })
      .catch((err) => {
        console.log(err);
        this.$message("学生信息获取错误");
      });
  },
  data() {
    return {
      submitState: true,
      ruleForm: {
        account: "",
        name: "",
        gender: 0,
        country: 0,
        grade: 0,
        email: "",
        college: 0,
        specialty: "",
      },
      dicSpecialty: {
        software: ["软件工程"],
        civilEngineering: [
          "土木工程",
          "智能建造",
          "地质工程",
          "港口航道与海岸工程",
        ],
        manage: ["工程管理", "信息管理与信息系统", "金融学", "市场管理"],
        math: ["统计学", "应用数学"],
        electronic: [
          "计算机科学与技术",
          "通信工程",
          "自动化",
          "信息安全",
          "电气工程及其自动化",
        ],
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
        college: [
          {
            required: true,
            message: "请输入学院",
            trigger: "blur",
          },
        ],
        specialty: [
          {
            required: true,
            message: "请输入专业",
            trigger: "blur",
          },
          {
            validator: (rule, value, callback) => {
              if (this.ruleForm.college == "软件学院") {
                for (let i = 0; i < this.dicSpecialty.software.length; i++) {
                  if (value == this.dicSpecialty.software[i]) {
                    callback();
                    return;
                  }
                }
                callback(new Error("该学院中没有该专业"));
              } else if (this.ruleForm.college == "土木工程学院") {
                for (
                  let i = 0;
                  i < this.dicSpecialty.civilEngineering.length;
                  i++
                ) {
                  if (value == this.dicSpecialty.civilEngineering[i]) {
                    callback();
                    return;
                  }
                }
                callback(new Error("该学院中没有该专业"));
              } else if (this.ruleForm.college == "经济与管理学院") {
                for (let i = 0; i < this.dicSpecialty.manage.length; i++) {
                  if (value == this.dicSpecialty.manage[i]) {
                    callback();
                    return;
                  }
                }
                callback(new Error("该学院中没有该专业"));
              } else if (this.ruleForm.college == "数学科学学院") {
                for (let i = 0; i < this.dicSpecialty.math.length; i++) {
                  if (value == this.dicSpecialty.math[i]) {
                    callback();
                    return;
                  }
                }
                callback(new Error("该学院中没有该专业"));
              } else if (this.ruleForm.college == "电子与信息工程学院") {
                for (let i = 0; i < this.dicSpecialty.electronic.length; i++) {
                  if (value == this.dicSpecialty.electronic[i]) {
                    callback();
                    return;
                  }
                }
                callback(new Error("该学院中没有该专业"));
              }
            },
            trigger: "change",
          },
        ],
      },
      countrys: [
        {
          value: "汉族",
          label: "汉族",
        },
        {
          value: "回族",
          label: "回族",
        },
        {
          value: "满族",
          label: "满族",
        },
        {
          value: "傣族",
          label: "傣族",
        },
        {
          value: "白族",
          label: "白族",
        },
        {
          value: "维吾尔族",
          label: "维吾尔族",
        },
        {
          value: "藏族",
          label: "藏族",
        },
        {
          value: "蒙古族",
          label: "蒙古族",
        },
        {
          value: "苗族",
          label: "苗族",
        },
        {
          value: "其他",
          label: "其他",
        },
      ],
      sexy: [
        {
          value: "女",
          label: "女",
        },
        {
          value: "男",
          label: "男",
        },
      ],
      grades: [
        {
          value: "大一",
          label: "大一",
        },
        {
          value: "大二",
          label: "大二",
        },
        {
          value: "大三",
          label: "大三",
        },
        {
          value: "大四",
          label: "大四",
        },
        {
          value: "研究生",
          label: "研究生",
        },
        {
          value: "其他",
          label: "其他",
        },
      ],
      colleges: [
        {
          value: "软件学院",
          label: "软件学院",
        },
        {
          value: "土木工程学院",
          label: "土木工程学院",
        },
        {
          value: "经济与管理学院",
          label: "经济与管理学院",
        },
        {
          value: "数学科学学院",
          label: "数学科学学院",
        },
        {
          value: "电子与信息工程学院",
          label: "电子与信息工程学院",
        },
      ],
      options: [],
      StuID: store.state.ID,
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
          title: "民族",
          content: "",
        },
        {
          title: "年级",
          content: "",
        },
        {
          title: "邮箱",
          content: "",
        },
        {
          title: "学院",
          content: "",
        },
        {
          title: "专业",
          content: "",
        },
      ],
      numData: {
        gender: null,
        country: null,
        grade: null,
        college: null,
      },
      radio: "1",
      textarea: "",
      isForm: false,
      isTable: true,
    };
  },
  methods: {
    columnStyle({ row, column, rowIndex, columnIndex }) {
      row;
      column;
      //console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0 && rowIndex < 5) {
        //第三第四列的背景色就改变了2和3都是列数的下标
        return "background:#FBFBEF; font-weight: 700;";
      } else if (columnIndex == 0) {
        return "background:#EFFBEF; font-weight: 700;";
      }
    },
    NumToStr() {
      if (this.ruleForm.country < this.countrys.length) {
        this.ruleForm.country = this.countrys[this.ruleForm.country].label;
      }
      if (this.ruleForm.gender < this.sexy.length) {
        this.ruleForm.gender = this.sexy[this.ruleForm.gender].label;
      }
      if (this.ruleForm.grade < this.grades.length) {
        this.ruleForm.grade = this.grades[this.ruleForm.grade].label;
      }
      if (this.ruleForm.college < this.colleges.length) {
        this.ruleForm.college = this.colleges[this.ruleForm.college].label;
      }
    },
    StrToNum() {
      for (let i = 0; i < this.countrys.length; i++) {
        if (this.ruleForm.country == this.countrys[i].label) {
          this.numData.country = i;
          break;
        }
      }
      for (let i = 0; i < this.sexy.length; i++) {
        if (this.ruleForm.gender == this.sexy[i].label) {
          this.numData.gender = i;
          break;
        }
      }
      for (let i = 0; i < this.grades.length; i++) {
        if (this.ruleForm.grade == this.grades[i].label) {
          this.numData.grade = i;
          break;
        }
      }
      for (let i = 0; i < this.colleges.length; i++) {
        if (this.ruleForm.college == this.colleges[i].label) {
          this.numData.college = i;
          break;
        }
      }
    },
    focusText() {
      console.log("this.ruleForm.college");
      this.options = [];
      if (this.ruleForm.college == "软件学院") {
        for (let i = 0; i < this.dicSpecialty.software.length; i++) {
          this.options.push({
            label: this.dicSpecialty.software[i],
            value: this.dicSpecialty.software[i],
          });
        }
      } else if (this.ruleForm.college == "土木工程学院") {
        for (let i = 0; i < this.dicSpecialty.civilEngineering.length; i++) {
          this.options.push({
            label: this.dicSpecialty.civilEngineering[i],
            value: this.dicSpecialty.civilEngineering[i],
          });
        }
      } else if (this.ruleForm.college == "经济与管理学院") {
        for (let i = 0; i < this.dicSpecialty.manage.length; i++) {
          this.options.push({
            label: this.dicSpecialty.manage[i],
            value: this.dicSpecialty.manage[i],
          });
        }
      } else if (this.ruleForm.college == "数学科学学院") {
        for (let i = 0; i < this.dicSpecialty.math.length; i++) {
          this.options.push({
            label: this.dicSpecialty.math[i],
            value: this.dicSpecialty.math[i],
          });
        }
      } else if (this.ruleForm.college == "电子与信息工程学院") {
        for (let i = 0; i < this.dicSpecialty.electronic.length; i++) {
          this.options.push({
            label: this.dicSpecialty.electronic[i],
            value: this.dicSpecialty.electronic[i],
          });
        }
      }
    },
    returnData() {
      this.ruleForm.account = this.tableData[0].content;
      this.ruleForm.name = this.tableData[1].content;
      this.ruleForm.gender = this.tableData[2].content;
      this.ruleForm.country = this.tableData[3].content;
      this.ruleForm.grade = this.tableData[4].content;
      this.ruleForm.email = this.tableData[5].content;
      this.ruleForm.college = this.tableData[6].content;
      this.ruleForm.specialty = this.tableData[7].content;
    },
    updateData() {
      this.tableData[0].content = this.ruleForm.account;
      this.tableData[1].content = this.ruleForm.name;
      this.tableData[2].content = this.ruleForm.gender;
      this.tableData[3].content = this.ruleForm.country;
      this.tableData[4].content = this.ruleForm.grade;
      this.tableData[5].content = this.ruleForm.email;
      this.tableData[6].content = this.ruleForm.college;
      this.tableData[7].content = this.ruleForm.specialty;
    },
    setToDB() {
      PUTStudentsID(this.ruleForm.account, {
        accountNumber: this.ruleForm.account,
        name: this.ruleForm.name,
        gender: this.numData.gender,
        grade: this.numData.grade,
        academy: this.numData.college,
        eMailAddress: this.ruleForm.email,
        major: this.ruleForm.specialty,
        nation: this.numData.country,
      }).catch((err) => {
        console.log(err);
        this.submitState = false;
        this.$message("学生信息传输错误");
      });
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
          this.StrToNum();
          this.setToDB();
          if (this.submitState == true) {
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
          } else {
            this.$message({
              type: "error",
              message: "编辑失败",
            });
          }
          this.submitState = false;
        }
      });
    },
  },
};
</script>