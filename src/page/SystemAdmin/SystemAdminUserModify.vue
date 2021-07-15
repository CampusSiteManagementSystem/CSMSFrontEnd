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
                <el-input v-model="ruleForm.account" :readonly="true"></el-input>
              </el-form-item>
              <el-form-item label="信用分：" prop="credit">
                <el-input v-model="ruleForm.credit" :readonly="true"></el-input>
              </el-form-item>
              <el-form-item label="名称：" prop="name">
                <div v-if="isForm == false">
                  <el-input v-model="ruleForm.name" :readonly="true"></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.name"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="负责人：" prop="user">
                <div v-if="isForm == false">
                  <el-input v-model="ruleForm.user" :readonly="true"></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.user"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="联系方式：" prop="telephone">
                <div v-if="isForm == false">
                  <el-input
                    v-model="ruleForm.telephone"
                    :readonly="true"
                  ></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.telephone"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="详细信息：" prop="content">
                <div v-if="isForm == false">
                  <el-input
                    v-model="ruleForm.content"
                    :readonly="true"
                  ></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.content"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="组织状态：" prop="state">
                <div v-if="isForm == false">
                  <el-input v-model="ruleForm.state" :readonly="true"></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.state"></el-input>
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
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
.el-card {
  border-radius: 15px;
}
</style>

<script>

import { GETOrganizationsID,
         PUTOrganizationsID
 } from "../../API/http";

export default {

  mounted() {
    console.log("aaa",this.$route.query.accountNumber)
    GETOrganizationsID(this.$route.query.accountNumber)
      .then((data) => {
        this.ruleForm.account = data.accountNumber;
        this.ruleForm.name = data.name;
        this.ruleForm.user = data.functionary;
        this.ruleForm.credit = data.credit;
        this.ruleForm.telephone = data.telephone;
        this.ruleForm.content = data.detailInfo;
        this.ruleForm.state = data.state;
        this.updateData();
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
        credit: "",        
        name: "",
        user: "",
        telephone: "",
        content: "",
        state: "",
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
            pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
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
          title: "信用分",
          content: 0,
        },
        {
          title: "名称",
          content: "",
        },
        {
          title: "负责人",
          content: "",
        },
        {
          title: "联系方式",
          content: "",
        },        
        {
          title: "详细信息",
          content: "",
        },
        {
          title: "组织状态",
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
      if (columnIndex == 0 && rowIndex < 5) {
        return "background:#FBFBEF; font-weight: 700;";
      } else if (columnIndex == 0) {
        return "background:#EFFBEF; font-weight: 700;";
      }
    },
    returnData(){
      this.ruleForm.account = this.tableData[0].content;
      this.ruleForm.credit = this.tableData[1].content;
      this.ruleForm.name = this.tableData[2].content;
      this.ruleForm.user = this.tableData[3].content;
      this.ruleForm.telephone = this.tableData[4].content;
      this.ruleForm.content = this.tableData[5].content;
      this.ruleForm.state = this.tableData[6].content;
    },    
    updateData() {
      this.tableData[0].content=this.ruleForm.account;
      this.tableData[1].content=this.ruleForm.credit;
      this.tableData[2].content=this.ruleForm.name;
      this.tableData[3].content=this.ruleForm.user;
      this.tableData[4].content=this.ruleForm.telephone;
      this.tableData[5].content=this.ruleForm.content;
      this.tableData[6].content=this.ruleForm.state;
    },
    setToDB() {
      PUTOrganizationsID(this.ruleForm.account,{
          accountNumber: this.ruleForm.account,
          name: this.ruleForm.name,
          detailInfo: this.ruleForm.content,
          credit: this.ruleForm.credit,
          functionary: this.ruleForm.user,
          telephone: this.ruleForm.telephone,
          state: this.ruleForm.state,
      })
        .catch((err) => {
          console.log(err);
          this.$message("组织信息传输错误");
        })
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
          this.setToDB();
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