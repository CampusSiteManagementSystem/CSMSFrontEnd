<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span
        ><b>添加场地 - {{ this.ruleForm.PositionName }}</b></span
      >
    </div>
    <el-row v-if="tag">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-position="left"
        class="demo-table"
        label-width="90px"
      >
        <!-- <el-form-item label="场地位置" prop="PositionName" >
        <el-input clearable v-model="ruleForm.PositionName" disabled></el-input>
      </el-form-item> -->
        <el-form-item label="楼层" prop="floor">
          <el-input clearable v-model.number="ruleForm.floor" class="input"></el-input>
        </el-form-item>
        <el-form-item label="房间号" prop="roomNo">
          <el-input clearable v-model.number="ruleForm.roomNo" class="input"></el-input>
        </el-form-item>
        <el-form-item label="座位数" prop="seatNum">
          <el-input clearable v-model.number="ruleForm.seatNum" class="input"></el-input>
        </el-form-item>
        <el-form-item label="面积" prop="area">
          <el-input clearable v-model.number="ruleForm.area" class="input"></el-input>
        </el-form-item>
        <el-form-item label="电脑数" prop="computerNum">
          <el-input clearable v-model.number="ruleForm.computerNum" class="input"></el-input>
        </el-form-item>
        <el-form-item label="场地描述" prop="description">
          <el-input
            :autosize="{ minRows: 2, maxRows: 6 }"
            type="textarea"
            :rows="5"
            maxlength="100"
            show-word-limit
            placeholder="请输入场地描述"
            v-model="ruleForm.description"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="back">返回地图</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row v-else>
        
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-position="left"
        class="demo-table"
        label-width="90px"
        hide-required-asterisk
      >
        <el-form-item label="楼层：" prop="floor">
          {{ ruleForm.floor }}
        </el-form-item>
        <el-form-item label="房间号：" prop="roomNo">
          {{ ruleForm.roomNo }}
        </el-form-item>
        <el-form-item label="座位数：" prop="seatNum">
          {{ ruleForm.seatNum }}
        </el-form-item>
        <el-form-item label="面积：" prop="area">
          {{ ruleForm.area }}
        </el-form-item>
        <el-form-item label="电脑数：" prop="computerNum">
          {{ ruleForm.computerNum }}
        </el-form-item>
        <el-form-item label="场地描述：" prop="description">
          {{ ruleForm.description }}
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">继续添加</el-button>
          <el-button @click="back">返回地图</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </el-card>
</template>

<script>
// import newVue from "../SystemAdmin/new.vue";
// import { GETDefaultOccupyTime } from "../../API/http";
// import { POSTDefaultOccupyTime } from "../../API/http";

import store from "../../state/state.js";
export default {
  data() {
    return {
      tag: true,
      ruleForm: {
        seatNum: "",
        computerNum: "",
        PositionName: "",
        floor: "",
        roomNo: "",
        area: "",
        description: "",
        accountNumber: "",
      },
      rules: {
        seatNum: [
          { required: true, message: "请输入座位数", trigger: "blur" },
          {
            min: 1,
            max: 1000,
            message: "大小为1~1000",
            trigger: "blur",
            type: "number",
          },
        ],
        computerNum: [
          { required: true, message: "请输入电脑数", trigger: "blur" },
          {
            min: 1,
            max: 1000,
            message: "大小为1~1000",
            trigger: "blur",
            type: "number",
          },
        ],
        floor: [
          { required: true, message: "请输入楼层", trigger: "blur" },
          {
            min: 1,
            max: 9,
            message: "大小为1~9",
            trigger: "blur",
            type: "number",
          },
        ],
        roomNo: [
          { required: true, message: "请输入房间号", trigger: "blur" },
          {
            min: 100,
            max: 999,
            message: "楼号必须是三位数",
            trigger: "blur",
            type: "number",
          },
        ],
        area: [
          {
            type: "number",
            required: true,
            message: "请输入场地面积",
            trigger: "change",
          },
          {
            type: "number",
            max: 10000,
            message: "面积在0~10000之间",
            trigger: "blur",
          },
        ],
        description: [
          { required: false, message: "请输入场地描述", trigger: "blur" },
          { max: 100, message: "长度小于100个字符", trigger: "blur" },
        ],
      },
    };
  },

  mounted() {
    //   console.log(this.ruleForm.PositionName);
    this.ruleForm.PositionName = this.$route.params.PositionName;
    console.log(this.ruleForm.PositionName);
  },

  methods: {
    add() {
      this.$refs["ruleForm"].resetFields();
      this.tag = true;
    },
    back() {
      this.$router.push("/GroundsAdmin/Map");
    },
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          console.log(parseInt(this.ruleForm.roomNo/100),this.ruleForm.floor);
          if (parseInt(this.ruleForm.roomNo/100)==this.ruleForm.floor) {
            var axios = require("axios");
            const that = this;
            var config = {
              method: "post",
              url: "http://139.196.114.7/api/IndoorGrounds",
              data: {
                seatNum: this.ruleForm.seatNum,
                computerNum: this.ruleForm.computerNum,
                PositionName: this.ruleForm.PositionName,
                floor: this.ruleForm.floor,
                roomNo: this.ruleForm.roomNo,
                area: this.ruleForm.area,
                description: this.ruleForm.area,
                accountNumber: store.state.ID,
              },
              // headers: {},
            };
            axios(config)
              .then(function (response) {
                that.$message({ message: "场地添加成功", type: "success" });
                that.tag = false;
                console.log("成功", response.data);
              })
              .catch(function (error) {
                console.log(error);
                this.$message({ message: "场地添加失败", type: "error" });
              });
          }
          else{
             this.$message({ message: "楼层与房间号不符", type: "error" });
          }
        }
        else{
          this.$message({ message: "请输入规范的数据", type: "error" });
        }
      });
    },
  },
};
</script>

<style scpoed>
.input{
  width: 60%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.demo-table {
  padding-left: 40px;
  padding-right: 40px;
}
.el-card {
  border-radius: 15px;
  height: 100%;
  overflow: auto;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  font-size: 20px;
}
</style>
