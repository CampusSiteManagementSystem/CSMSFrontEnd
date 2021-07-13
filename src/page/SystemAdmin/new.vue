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
          <div id="content">
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
              <el-form-item label="名称：" prop="name">
                <div v-if="isSet == false">
                  <el-input v-model="ruleForm.name" :readonly="true"></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.name"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="负责人：" prop="user">
                <div v-if="isSet == false">
                  <el-input v-model="ruleForm.user" :readonly="true"></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.user"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="信用分：" prop="credit">
                <el-input v-model="ruleForm.credit" :readonly="true"></el-input>
              </el-form-item>
              <el-form-item label="联系方式：" prop="telephone">
                <div v-if="isSet == false">
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
                <div v-if="isSet == false">
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
                <div v-if="isSet == false">
                  <el-input v-model="ruleForm.state" :readonly="true"></el-input>
                </div>
                <div v-else>
                  <el-input v-model="ruleForm.state"></el-input>
                </div>
              </el-form-item>
            </el-form>
            <div v-if="isSet == false" class="modify">
              <el-button type="primary" @click="returnback">取消</el-button>
              <el-button type="primary" @click="edit">编辑</el-button>
            </div>
            <div v-else class="modify">
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
</style>

<script>
export default {
  data() {
    return {
      ruleForm: {
        account: "123456",
        name: "软件学院",
        user: "王某",
        credit: "90",
        telephone: "123456789",
        content: "很好",
        state: "已审核",
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

      isSet: false,
    };
  },

  methods: {
    returnback() {
      this.$router.push({ path: "MaintainUserInfo" });
    },
    // columnStyle({ row, column, rowIndex, columnIndex }) {
    //   console.log(row, column, rowIndex, columnIndex, "row");
    //   if (columnIndex == 0) {
    //     return "background:#EFFBEF; font-weight: 700;";
    //   }
    // },
    edit() {
      this.isSet = true;
    },
    success() {
      this.isSet = false;
      this.$alert("提交成功！", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
};
</script>