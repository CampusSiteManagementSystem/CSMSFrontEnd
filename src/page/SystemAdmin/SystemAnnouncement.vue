<template>
  <el-card class="maincard">
    <div class="maintitle">发布系统公告</div>
    <el-form
      ref="ruleform"
      :rules="rules"
      :model="ruleform"
      label-width="100px"
    >
      <el-form-item label="选择日期：" prop="date">
        <el-date-picker
          v-model="ruleform.date"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="公告内容：" prop="content">
        <el-input
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 10 }"
          v-model="ruleform.content"
          placeholder="请输入公告内容"
          maxlength="100"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item style="float: right">
        <el-button type="primary" @click="publish">发布</el-button>
        <el-button @click="back">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scpoed>
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}

.info-row {
  height: 250px;
}

.maintitle {
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 30px;
}
.groundinfo {
  text-align: center;
}
</style>


// <script>
export default {
  name: "ReleaseGroundAnnouncement",
  data() {
    return {
      rules: {
        date: [
          { required: true, message: "请选择公告发布日期", trigger: "blur" },
        ],
        time: [
          { required: true, message: "请选择公告发布时间段", trigger: "blur" },
        ],
        content: [
          { required: true, message: "请输入公告内容", trigger: "blur" },
        ],
      },

      ruleform: {
        date: "",
        time: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        name: "",
        content: "",
      },
    };
  },
  methods: {
    publish() {
      this.$message({
        message: "公告发布成功",
        type: "success",
      });
      this.$router.push({ path: "/SysAdminFrame/SysAdminHomePage" });
    },
    back() {
      this.$router.push({ path: "/SysAdminFrame/SysAdminHomePage" });
    },
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    onSubmit() {
      this.editstate = false;
    },
    handleChange(value) {
      console.log(value);
    },
    onRowClick(row) {
      this.nameSelected = row.name;
      this.description = row.description;
      this.idSelected = row.id;
    },
  },
};
</script>