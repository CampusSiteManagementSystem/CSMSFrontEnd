<template>
  <el-card class="maincard">
    <div slot="header" class="clearfix">
            <span><b>发布场地公告</b></span>
          </div>
    <!-- <div class="maintitle">发布场地公告</div> -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="场地" prop="site" required>
        <el-cascader
          clearable
          v-model="ruleForm.site"
          :options="options"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="公告标题" prop="title" style="width: 30%">
        <el-input
          v-model="ruleForm.title"
          placeholder="请输入公告标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="公告内容" prop="content">
        <el-input
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 10 }"
          v-model="ruleForm.content"
          placeholder="请输入公告内容"
          maxlength="100"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="publish">发布</el-button>
        <!-- <el-button @click="back">取消</el-button> -->
      </el-form-item>
    </el-form>
  </el-card>
</template>




<style scpoed>
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
.info-row {
  height: 250px;
}
/* .el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
} */
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
.el-card {
  border-radius: 15px;
}
</style>



// <script>
import { POSTMaintenanceAnnouncements } from "../../API/http";

import store from "../../state/state.js";
export default {
  name: "ReleaseGroundAnnouncement",
  data() {
    return {
      ruleForm: {
        site: [],
        content: "",
        title: "",
      },
      rules: {
        content: [
          { required: true, message: "请输入公告内容", trigger: "blur" },
        ],
        title: [
          { required: true, message: "请输入公告标题", trigger: "blur" },
          { max: 10, message: "长度为1~10个字符", trigger: "blur" },
        ],
      },

      /* 级联选择框 */
      options: [],
      /* end of options */
    };
  },

  mounted() {
    var axios = require("axios");
    var config1 = {
      method: "get",
      url: "http://139.196.114.7/api/IndoorGrounds?accountNumber="+store.state.ID,
      headers: {},
    };

    var config2 = {
      method: "get",
      url: "http://139.196.114.7/api/OutdoorGrounds?accountNumber="+store.state.ID,
      headers: {},
    };

    axios(config1)
      .then((response) => {
        this.iGroundTable = [];
        console.log(response.data);
        for (let gnd of response.data) {
          this.iGroundTable.push(gnd);
        }
        console.log("ig");
        console.log(this.iGroundTable);
        this.options = [];
        if (this.iGroundTable.length != 0) {
          this.options.push({
            value: this.iGroundTable[0].positionName,
            label: this.iGroundTable[0].positionName,
            children: [
              {
                value: this.iGroundTable[0].floor,
                label: String(this.iGroundTable[0].floor) + "楼",
                children: [
                  {
                    value: this.iGroundTable[0].groundId,
                    label: this.iGroundTable[0].roomNo,
                  },
                ],
              },
            ],
          });

          for (var k = 1; k < this.iGroundTable.length; ++k) {
            if (
              this.iGroundTable[k].positionName !=
              this.iGroundTable[k - 1].positionName
            ) {
              this.options.push({
                value: this.iGroundTable[k].positionName,
                label: this.iGroundTable[k].positionName,
                children: [
                  {
                    value: this.iGroundTable[k].floor,
                    label: String(this.iGroundTable[k].floor) + "楼",
                    children: [
                      {
                        value: this.iGroundTable[k].groundId,
                        label: this.iGroundTable[k].roomNo,
                      },
                    ],
                  },
                ],
              });
            } else if (
              this.iGroundTable[k].floor != this.iGroundTable[k - 1].floor
            ) {
              this.options[this.options.length - 1].children.push({
                value: this.iGroundTable[k].floor,
                label: String(this.iGroundTable[k].floor) + "楼",
                children: [
                  {
                    value: this.iGroundTable[k].groundId,
                    label: this.iGroundTable[k].roomNo,
                  },
                ],
              });
            } else {
              var cPos = this.options.length - 1,
                cFloor = this.options[cPos].children.length - 1;
              this.options[cPos].children[cFloor].children.push({
                value: this.iGroundTable[k].groundId,
                label: this.iGroundTable[k].roomNo,
              });
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios(config2)
      .then((response) => {
        this.oGroundTable = [];
        for (let gnd of response.data) {
          this.oGroundTable.push(gnd);
        }
        for (var k = 0; k < this.oGroundTable.length; ++k) {
          this.options.push({
            value: this.oGroundTable[k].groundId,
            label: this.oGroundTable[k].positionName,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    publish() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          // console.log("公告数据");
          // console.log(this.ruleForm.site[this.ruleForm.site.length - 1]);
          // console.log(this.ruleForm.title + "##" + this.ruleForm.content);

          POSTMaintenanceAnnouncements({
            groundId: this.ruleForm.site[this.ruleForm.site.length - 1],
            content: this.ruleForm.title + "##" + this.ruleForm.content,
          })
            .then((data) => {
              console.log(data);
              this.$message({ message: "公告发布成功", type: "success" });
              this.$router.push({ path: "/GroundsAdmin/Main" });
              this.$refs["ruleForm"].resetFields();
            })
            .catch((err) => {
              err;
              // console.log("errann", err);
              // console.log(this.ruleForm.site[this.ruleForm.site.length-1]);
              // console.log(this.ruleForm.title + "##" + this.ruleForm.content);
              this.$message({ message: "公告发布失败", type: "error" });
              this.$router.push({path: "/GroundsAdmin/Main"});
            });
        } else {
          this.$message({ message: "请输入符合规范的数据", type: "warning" });
        }
      });
    },

    // back() {
    //   this.$router.push({ path: "/GroundsAdmin/Main" });
    // },
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] === value;
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