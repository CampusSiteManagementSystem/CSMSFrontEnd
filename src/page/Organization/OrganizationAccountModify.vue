<template>
  <div class="page">
    <el-card>
      <div>
        <h2>组织用户信息</h2>
      </div>
      <el-row>
        <el-col :span="12">
          <div>
            <h3>组织画像</h3>
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
            <h3>组织信息</h3>
          </div>
          <transition name="fade-transform" mode="out-in">
            <div v-if="isForm == true">
              <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="100px"
                :hide-required-asterisk="true">
                <el-form-item label="组织账号：" prop="account">
                  <el-input v-model="ruleForm.account" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="组织名称：" prop="name">
                  <el-input v-model="ruleForm.name" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="组织类型：" prop="type">
                  <el-input v-model="ruleForm.type" :readonly="true"></el-input>
                </el-form-item>
                <el-form-item label="信用分：" prop="credit">
                  <el-input v-model="ruleForm.credit" :readonly="true"></el-input>
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
  height: 57%;
  width: 57%;
  margin-top: 1cm;
  margin-left: 2.2cm;
}
</style>




<script>
export default {
  data() {
    return {
      ruleForm: {
        account: "123456",
        name: "软件学院",
        type: "班级",
        user: "王某",
        credit: "90",
        telephone: "13525415456",
        email: "puupuuu@163.com",
        content: "很好",
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
      tableData: [
        {
          title: "组织账号",
          content: "122234",
        },
        {
          title: "组织名称",
          content: "数据库小组",
        },
        {
          title: "组织类型",
          content: "班级",
        },
        {
          title: "信用分",
          content: "100",
        },
        {
          title: "邮箱",
          content: "www.ljj@sjk.com",
        },
        {
          title: "负责人",
          content: "李俊杰",
        },
        {
          title: "联系方式",
          content: "14515485465",
        },
        {
          title: "详细信息",
          content: "数据库小组ddl赶工中！",
        },
      ],
      radio: "1",
      textarea: "",
      isForm: false,
      isTable:true
    };
  },
  mounted() {
    this.updateData();
  },
  methods: {
    columnStyle({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0 && rowIndex < 4) {
        return "background:#FBFBEF; font-weight: 700;";
      } else if (columnIndex == 0) {
        return "background:#EFFBEF; font-weight: 700;";
      }
    },
    updateData() {
      this.tableData[0].content=this.ruleForm.account;
      this.tableData[1].content=this.ruleForm.name;
      this.tableData[2].content=this.ruleForm.type;
      this.tableData[3].content=this.ruleForm.credit;
      this.tableData[4].content=this.ruleForm.email;
      this.tableData[5].content=this.ruleForm.user;
      this.tableData[6].content=this.ruleForm.telephone;
      this.tableData[7].content=this.ruleForm.content;
    },
    edit() {
      this.isTable = false;
      setTimeout(() => {
        this.isForm = true;
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