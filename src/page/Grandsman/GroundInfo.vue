<template>
  <el-card class="maincard">
    <el-row class="upper-row">
      <div class="block">
        <el-image :src="groundinfo.imgsrc">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
      <h1>{{ groundinfo.name }}</h1>

      <p v-if="!editstate">{{ groundinfo.description }}</p>
      <el-input
        v-else
        class="descriptioninput"
        v-model="groundinfo.description"
      ></el-input>
      <!-- <el-col :span="12" class="upper-row-left-col"></el-col>
                <el-col :span="12" class="upper-row-left-right"></el-col> -->
    </el-row>
    <el-divider content-position="center">详细信息</el-divider>
    <el-row class="lower-row">
      <div v-if="this.groundinfo.indoor">
        <el-form
          v-if="editstate"
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="80px"
        >
          <el-form-item label="座位数" prop="seatnum">
            <el-input v-model="groundinfo.seatnum"></el-input>
          </el-form-item>
          <el-form-item label="电脑数" prop="computernum">
            <el-input v-model="groundinfo.computernum"></el-input>
          </el-form-item>
          <el-form-item label="楼层" prop="floor">
            <el-input v-model="groundinfo.floor" disabled></el-input>
          </el-form-item>
          <el-form-item label="面积" prop="area">
            <el-input v-model="groundinfo.area"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="back">场地列表</el-button>
          </el-form-item>
        </el-form>
        <div v-else>
          <p><b>座位数：</b>{{ groundinfo.seatnum }}</p>
          <p><b>电脑数：</b>{{ groundinfo.computernum }}</p>
          <p><b>楼层：</b>{{ groundinfo.floor }}</p>
          <p><b>面积：</b>{{ groundinfo.area + "m²" }}</p>
          <div class="editbutton">
            <el-button @click="edit" type="primary" icon="el-icon-edit"
              >修改信息</el-button
            >
            <el-button @click="back">场地列表</el-button>
          </div>
        </div>
      </div>
      <div v-else>
        <el-form
          v-if="editstate"
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="80px"
        >
          <el-form-item label="面积" prop="area">
            <el-input v-model="groundinfo.area"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="back">场地列表</el-button>
            <!-- <router-link to="/GroundsAdmin/GroundList">
              <el-button class="modify">取消</el-button></router-link
            > -->
          </el-form-item>
        </el-form>
        <div v-else>
          <p><b>面积：</b>{{ groundinfo.area + "m²" }}</p>
          <div class="editbutton">
            <el-button @click="edit" type="primary" icon="el-icon-edit"
              >修改信息</el-button
            >
          </div>
        </div>
      </div>
    </el-row>
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
.modify {
  margin-left: 3cm;
}
.maincard {
  border-radius: 15px;
  height: 100%;
  overflow: auto;
}
.el-card {
  border-radius: 15px;
}
.upper-row {
  height: 250px;
  padding: 20px;
}
.lower-row {
  padding: 20px;
  /* height: 100%; */
}

.block {
  float: right;
  width: 300px;
  height: 300px;
}
.detailinfo {
  height: 30px;
}
.editbutton {
  height: 60px;
  float: right;
}

.descriptioninput {
  height: 20px;
  width: 30%;
}

.seatnumcol {
  height: 100%;
}
.el-input {
  height: auto;
}
</style>



<script>
import { GETGroundsID } from "../../API/http";
import { GETIndoorGroundsID } from "../../API/http";
import store from "../../state/state.js";

// import store from "../../state/state.js"
export default {
  name: "groundinfo",
  data() {
    return {
      ruleForm: {
        seatnum: "",
        computernum: "",
        area: "",
        floor: "",
      },
      rules: {
        seatnum: [
          { required: true, message: "请输入座椅数量", trigger: "blur" },
        ],
        computernum: [
          { required: true, message: "请输入电脑数量", trigger: "blur" },
        ],
        floor: [{ required: false, message: "请输入层数", trigger: "blur" }],
        area: [{ required: true, message: "请输入面积", trigger: "blur" }],
      },
      editstate: false,
      groundinfo: {
        name: null,
        seatnum: null,
        computernum: null,
        building: null,
        floor: null,
        roomno: null,
        area: null,
        description: null,
        imgsrc:
          "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        indoor: null,
      },
    };
  },

  mounted() {
    const that = this;
    GETGroundsID(that.$route.params.ID)
      .then((data) => {
        that.groundinfo.indoor = data.type == "室内";
        that.groundinfo.name = data.name;
        that.groundinfo.area = data.area;
        that.groundinfo.description = data.description;
      })
      .then(function () {
        if (that.groundinfo.indoor) {
          GETIndoorGroundsID(that.$route.params.ID).then((data) => {
            that.groundinfo.building = data.positionName;
            that.groundinfo.floor = data.floor;
            that.groundinfo.roomno = data.roomNo;
            that.groundinfo.seatnum = data.seatNum;
            that.groundinfo.computernum = data.computerNum;
          });
        }
      })
      .catch((err) => {
        that.data = err;
      });
  },

  methods: {
    back() {
      this.$router.push("/GroundsAdmin/GroundList");
    },
    edit() {
      this.editstate = true;
    },
    onSubmit() {
      var axios = require("axios"),
        data,
        config;
      if (this.groundinfo.indoor) {
        data = JSON.stringify({
          groundId: this.$route.params.ID,
          seatNum: this.groundinfo.seatnum,
          computerNum: this.groundinfo.computernum,
          floor: this.groundinfo.floor,
          roomNo: this.groundinfo.roomno,
        });
        console.log(data);
        config = {
          method: "put",
          url:
            "http://139.196.114.7/api/IndoorGrounds/" + this.$route.params.ID,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            console.log("修改信息");
            this.$message({ message: "室内信息修改成功", type: "success" });
            // this.$router.push("/GroundsAdmin/GroundList");
          })
          .catch((error) => {
            console.log(error);
            this.$message({ message: "修改失败", type: "error" });
            // this.$router.push("/GroundsAdmin/GroundList");
          });

        data = JSON.stringify({
          groundId: this.$route.params.ID,
          area: this.groundinfo.area,
          description: this.groundinfo.description,
          accountNumber: store.state.ID,
        });

        config = {
          method: "put",
          url: "http://139.196.114.7/api/Grounds/" + this.$route.params.ID,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.$message({ message: "室外场地修改成功", type: "success" });
            // this.$router.push("/GroundsAdmin/GroundList");
          })
          .catch((error) => {
            console.log(error);
            this.$message({ message: "修改失败", type: "error" });
            // this.$router.push("/GroundsAdmin/GroundList");
          });
      } else {
        data = JSON.stringify({
          groundId: this.$route.params.ID,
          area: this.groundinfo.area,
          description: this.groundinfo.description,
          accountNumber: store.state.ID,
        });

        config = {
          method: "put",
          url: "http://139.196.114.7/api/Grounds/" + this.$route.params.ID,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.$message({ message: "修改成功", type: "success" });
            // this.$router.push("/GroundsAdmin/GroundList");
          })
          .catch((error) => {
            console.log(error);
            this.$message({ message: "修改失败", type: "error" });
            // this.$router.push("/GroundsAdmin/GroundList");
          });
      }
      this.editstate = false;
    },
  },
};
</script>