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
            <el-button type="primary" @click="success">更改照片</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <h3>用户信息</h3>
          </div>
          <!-- <el-table
            :show-header="false"
            :data="tableData"
            :cell-style="columnStyle"
            border
            style="width: 80%; margin-top: 20px"
          >
            <el-table-column width="180" prop="title" label="标题">
            </el-table-column>
            <el-table-column prop="content" label="内容"> </el-table-column>
          </el-table> -->
          <div id="content">
            <el-form ref="ruleform" :model="ruleform" label-width="100px">
              <el-form-item label="名称：" prop="name">
                <el-input
                  class="name"
                  type="text"
                  v-model="ruleform.name"
                  maxlength="10"
                >
                </el-input>
              </el-form-item>
              <el-form-item label="账号：" prop="id">
                <el-input
                  class="id"
                  type="text"
                  v-model="ruleform.id"
                  maxlength="10"
                >
                </el-input>
              </el-form-item>
              <el-form-item label="信用分：" prop="credit">
                <el-input
                  class="credit"
                  type="text"
                  v-model="ruleform.credit"
                  maxlength="10"
                >
                </el-input>
              </el-form-item>
              <el-form-item label="邮箱：" prop="email">
                <el-input
                  class="email"
                  type="text"
                  v-model="ruleform.email"
                  maxlength="10"
                >
                </el-input>
              </el-form-item>
              <el-form-item label="学院：" prop="college">
                <el-input
                  class="college"
                  type="text"
                  v-model="ruleform.college"
                  maxlength="10"
                >
                </el-input>
              </el-form-item>

              <el-form-item align="right">
                <router-link
                  to="/SysAdminFrame/MaintainUserInfo"
                  tag="el-button"
                  >取消</router-link
                >
                <el-button type="primary" @click="submitForm('ruleform')"
                  >编辑</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.infoMain {
  height: 100%;
}

.info {
  text-align: left;
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
  height: 50%;
  width: 50%;
  margin-top: 1cm;
  margin-left: 2.2cm;
}
</style>




<script>
export default {
  // data() {
  //   return {
  //     tableData: [
  //       {
  //         title: "账号",
  //         content: "1850668",
  //       },
  //       {
  //         title: "名称",
  //         content: "王某",
  //       },
  //       {
  //         title: "身份",
  //         content: "学生",
  //       },
  //       {
  //         title: "信用分",
  //         content: "100",
  //       },
  //       {
  //         title: "邮箱地址",
  //         content: "www.ljj@sjk.com",
  //       },
  //       {
  //         title: "联系方式",
  //         content: "14515485465",
  //       },
  //     ],
  //     radio: "1",
  //     textarea: "",
  //   };
  // },
  data() {
    return {
      ruleform: {
        name: "李某",
        id: "222222",
        credit: "100",
        email: "987654321@qq.com",
        college: "软件学院",
      },
    };
  },

  methods: {
    columnStyle({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0 && rowIndex < 4) {
        //第三第四列的背景色就改变了2和3都是列数的下标
        return "background:#FBFBEF; font-weight: 700;";
      } else if (columnIndex == 0) {
        return "background:#EFFBEF; font-weight: 700;";
      }
    },
    success() {
      this.$alert("编辑成功！", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$alert("您的活动ID为" + this.ruleform.id, "活动ID分配", {
              confirmButtonText: "确定",
              callback: (action) => {
                if (action === "confirm") {
                  this.$message({
                    type: "success",
                    message: "申请成功",
                  });
                }
              },
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
    },
  },
};
</script>