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
                <el-form-item label="名称：" prop="name">
                  <el-input v-model="ruleForm.name" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="信用分：" prop="credit">
                  <el-input v-model="ruleForm.credit" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="加入时间：" prop="joinTime">
                  <el-input v-model="ruleForm.joinTime" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="类型：" prop="type">
                  <div v-if="isForm == false">
                    <el-input v-model="ruleForm.type" :readonly="true"></el-input>
                  </div>
                  <div v-else>
                      <el-select v-model="ruleForm.type" placeholder="请选择">
                      <el-option
                        v-for="item in types"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                      </el-select>
                  </div>                  
                </el-form-item>
                <el-form-item label="邮箱：" prop="email">
                  <div v-if="isForm == false">
                    <el-input v-model="ruleForm.email" :readonly="true"></el-input>
                  </div>
                  <div v-else>
                    <el-input v-model="ruleForm.email"></el-input>
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
                    <el-input v-model="ruleForm.telephone" :readonly="true"></el-input>
                  </div>
                  <div v-else>
                    <el-input v-model="ruleForm.telephone"></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="详细信息：" prop="content">
                  <div v-if="isForm == false">
                    <el-input v-model="ruleForm.content" :readonly="true"></el-input>
                  </div>
                  <div v-else>
                    <el-input v-model="ruleForm.content"></el-input>
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
.el-card {
  border-radius: 15px;
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
import {GETOrganizationsID} from "../../API/http"
import {PUTOrganizationsID} from "../../API/http"
import store from "../../state/state";
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        name: "",
        type: "",
        user: "",
        credit: 0,
        telephone: "",
        email: "",
        joinTime:"",
        content: "",
      },

      rules: {
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
            trigger: "blur",
          },
        ],
        content: [{ required: true, message: "请输入介绍", trigger: "blur" }],
        user: [{ required: true, message: "请输入负责人", trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            massage: "请正确输入邮箱",
            trigger: "blur",
          },
        ],
      },
      types:[{
        value: '社团',
        label: '社团'
      }, {
        value: '班级',
        label: '班级'
      }, {
        value: '学院',
        label: '学院'
      }, {
        value: '学生组织',
        label: '学生组织'
      },{
        value: '其他',
        label: '其他'
      },
      ],
      tableData: [
        {
          title: "账号",
          content: "",
        },
        {
          title: "名称",
          content: "",
        },
        {
          title: "信用分",
          content: "",
        },
        {
          title: "加入时间",
          content: 0,
        },
        {
          title: "类型",
          content: "",
        },        
        {
          title: "邮箱",
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
      ],
      radio: "1",
      textarea: "",
      isForm: false,
      isTable:true,
      OrgID: store.state.ID,
    };
  },

  created() {
    GETOrganizationsID(this.OrgID)
    .then(data =>{
      this.ruleForm.account=this.OrgID;
      this.ruleForm.name=data.name;
      this.ruleForm.type=data.type;
      this.ruleForm.credit=data.credit;
      console.log(data);
      this.ruleForm.joinTime=data.joinDate.replace(
          "T",
          " "
        );
      this.ruleForm.user=data.functionary;
      this.ruleForm.email=data.emailAddress;
      this.ruleForm.telephone=data.telephone;
      this.ruleForm.content=data.detailInfo;
      this.updateData();
    })
    .catch((err) => {
      console.log(err);
      this.$message("组织信息获取错误");
    })
  },
  methods: {
    columnStyle({ row, column, rowIndex, columnIndex }) {
      row;
      column;
      //console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0 && rowIndex < 4) {
        return "background:#FBFBEF; font-weight: 700;";
      } else if (columnIndex == 0) {
        return "background:#EFFBEF; font-weight: 700;";
      }
    },
    returnData(){
      this.ruleForm.account = this.tableData[0].content;
      this.ruleForm.name = this.tableData[1].content;
      this.ruleForm.credit = this.tableData[2].content;
      this.ruleForm.joinTime = this.tableData[3].content;
      this.ruleForm.type = this.tableData[4].content;      
      this.ruleForm.email = this.tableData[5].content;
      this.ruleForm.user = this.tableData[6].content;
      this.ruleForm.telephone = this.tableData[7].content;
      this.ruleForm.content = this.tableData[8].content;
    },    
    updateData() {
      this.tableData[0].content=this.ruleForm.account;
      this.tableData[1].content=this.ruleForm.name;
      this.tableData[2].content=this.ruleForm.credit;
      this.tableData[3].content=this.ruleForm.joinTime;
      this.tableData[4].content=this.ruleForm.type;      
      this.tableData[5].content=this.ruleForm.email;
      this.tableData[6].content=this.ruleForm.user;
      this.tableData[7].content=this.ruleForm.telephone;
      this.tableData[8].content=this.ruleForm.content;
    },
    setToDB() {
      PUTOrganizationsID(this.OrgID,{
          accountNumber: this.ruleForm.account,
          name: this.ruleForm.name,
          detailInfo: this.ruleForm.content,
          emailAddress: this.ruleForm.email,
          functionary: this.ruleForm.user,
          telephone: this.ruleForm.telephone,
          type: this.ruleForm.type,
          state: "s2"
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