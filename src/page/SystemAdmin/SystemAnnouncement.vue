<template>
  <el-card class="maincard">
    <div slot="header" class="clearfix">
            <span><b>发布系统公告</b></span>
          </div>
    <el-form
      ref="ruleform"
      :rules="rules"
      :model="ruleform"
      label-width="100px"
    >
      <el-form-item label="公告标题：" prop="name" style="width: 30%">
        <el-input
          v-model="ruleform.name"
          placeholder="请输入公告标题"
        ></el-input>
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
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  font-size: 18px;
}
.el-card {
  border-radius: 15px;
}
</style>


// <script>
import { POSTSystemAnnouncements } from "../../API/http";

import store from "../../state/state.js";
export default {
  name: "ReleaseGroundAnnouncement",
  data() {
    return {
      rules: {
        content: [
          { required: true, message: "请输入公告内容", trigger: "blur" },
          { max: 100, message: "长度为1~100个字符", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入公告标题", trigger: "blur" },
          { max: 10, message: "长度为1~10个字符", trigger: "blur" },
        ],
      },

      ruleform: {
        name: "",
        content: "",
      },
    };
  },
  methods: {
    getFullTime() {
      let date = new Date(), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + "",
        M =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1,
        D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
        h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        m =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        s =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + "-" + M + "-" + D + "T" + h + ":" + m + ":" + s;
    },

    publish() {
      console.log(this.ruleform.content);
      if (this.ruleform.content != "") {
        POSTSystemAnnouncements({
          accountNumber: store.state.ID,
          systemAnnouncementDate: this.getFullTime(),
          systemAnnouncementTime: this.getFullTime(),
          content: this.ruleform.name + "##" + this.ruleform.content,
        })
          .then((data) => {
            // this.res = data;
            console.log(data);
            this.$message({ message: "公告发布成功", type: "success" });
            this.$router.push("/SysAdminFrame/Announcement");
          })
          .catch((err) => {
            console.log("err", err);
            this.$message({ message: "公告发布失败", type: "error" });
          });
      } else {
        this.$message({ message: "请输入公告内容", type: "warning" });
      }
    },
    back() {
      this.$router.push({ path: "/SysAdminFrame/SysAdminHomePage" });
    },
  },
};
</script>