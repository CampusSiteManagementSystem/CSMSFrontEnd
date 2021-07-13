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
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="pic" />
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
              <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="100px"
                :hide-required-asterisk="true">
                <el-form-item label="账号：" prop="account">
                  <el-input v-model="ruleForm.account" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="姓名：" prop="name">
                  <el-input v-model="ruleForm.name" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="性别：" prop="gender">
                  <el-input v-model="ruleForm.gender" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="国籍：" prop="country">
                  <el-input v-model="ruleForm.country" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="年级：" prop="grade">
                  <el-input v-model="ruleForm.grade" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：" prop="email">
                  <div v-if="isForm == false">
                    <el-input v-model="ruleForm.email" :readonly="true"></el-input>
                  </div>
                  <div v-else>
                    <el-input v-model="ruleForm.email"></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="学院：" prop="college">
                  <div v-if="isForm == false">
                    <el-input v-model="ruleForm.college" :readonly="true"></el-input>
                  </div>
                  <div v-else>
                      <el-select v-model="ruleForm.college" placeholder="请选择">
                      <el-option
                        v-for="item in colleges"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                      </el-select>
                  </div>
                </el-form-item>

                <el-form-item label="专业：" prop="specialty">
                  <div v-if="isForm == false">
                    <el-input v-model="ruleForm.specialty" :readonly="true"></el-input>
                  </div>
                  <div v-else>
                      <el-select v-model="ruleForm.specialty" placeholder="请选择" @focus="focusText">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                      </el-select>
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
          <div v-if="isForm == true"  class="modify">
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
.fade-transform-enter-active{
  transition: all 0.3s;
}
.fade-transform-leave-active{
  transition: all 0.3s;
}
.image{
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
</style>

<script>

import {GETStudentsID} from "../../API/http"
import store from "../../state/state";

export default {
  created() {
    GETStudentsID(this.StuID)
    .then(data =>{
      this.tableData[0].content=this.StuID;
      this.tableData[1].content=data.name;
      this.tableData[2].content=data.gender===1?'女':'男';
      this.tableData[3].content=data.nation;
      this.tableData[4].content=data.grade;
      this.tableData[5].content=data.eMailAddress;
      this.tableData[6].content=data.academy;
      this.tableData[7].content=data.major;
    })
    .catch((err) => {
      console.log(err);
      this.$message("学生信息获取错误");
    })
  },
  data() {
    return {
      ruleForm: {
        account: "123456",
        name: "软件学院",
        gender: "男",
        country: "中国",
        grade: "大一",
        email: "puupuuu@163.com",
        college: "软件学院",
        specialty: "软件工程",
      },
      dicSpecialty: {
        software: ["软件工程"],
        civilEngineering: ["土木工程", "智能建造", "地质工程", "港口航道与海岸工程"],
        manage: ["工程管理", "信息管理与信息系统", "金融学", "市场管理"],
        math: ["统计学", "应用数学"],
        electronic: ["计算机科学与技术", "通信工程", "自动化", "信息安全", "电气工程及其自动化"]
      },
      rules: {
        email: [{
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          },
          {
            type: "email",
            massage: "请正确输入邮箱",
            trigger: "blur",
          },
        ],
        college: [{
          required: true,
          message: "请输入学院",
          trigger: "blur"
        }, ],
        specialty: [{
            required: true,
            message: "请输入专业",
            trigger: "blur"
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
                for (let i = 0; i < this.dicSpecialty.civilEngineering.length; i++) {
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
      colleges: [{
        value: '软件学院',
        label: '软件学院'
      }, {
        value: '土木工程学院',
        label: '土木工程学院'
      }, {
        value: '经济与管理学院',
        label: '经济与管理学院'
      }, {
        value: '数学科学学院',
        label: '数学科学学院'
      }, {
        value: '电子与信息工程学院',
        label: '电子与信息工程学院'
      }],
      options: [],
      StuID: store.state.ID,
      tableData: [{
        title: '账号',
        content: '',
      }, {
        title: '姓名',
        content: '',
      }, {
        title: '性别',
        content: '',
      }, {
        title: '国籍',
        content: '',
      }, {
        title: '年级',
        content: '',
      }, {
        title: '邮箱',
        content: '',
      }, {
        title: '学院',
        content: '',
      }, {
        title: '专业',
        content: '',
      }],
      radio: "1",
      textarea: "",
      isForm: false,
      isTable: true
    };
  },
  mounted() {
    this.updateData();
  },
  methods: {
    columnStyle({
      row,
      column,
      rowIndex,
      columnIndex
    }) {
      row;
      column;
      //console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0 && rowIndex < 5) { //第三第四列的背景色就改变了2和3都是列数的下标
        return 'background:#FBFBEF; font-weight: 700;'
      } else if (columnIndex == 0) {
        return 'background:#EFFBEF; font-weight: 700;'
      }
    },
    focusText() {
      console.log("this.ruleForm.college")
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
    returnData(){
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
  }
};
</script>