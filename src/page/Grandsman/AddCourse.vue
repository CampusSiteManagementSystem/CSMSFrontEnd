<template>
  <div>
    <el-row class="mainRow">
      <el-col :span="24" class="upperCol">
        <el-card class="upperCard">
          <div slot="header" class="clearfix">
            <span><b>新建课程</b></span>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="课程名称" prop="name">
              <el-input clearable v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="上课场地" prop="site" required>
              <el-cascader
                clearable
                v-model="ruleForm.site"
                :options="options"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="课程时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    clearable
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker
                    clearable
                    placeholder="选择时间"
                    v-model="ruleForm.date2"
                    style="width: 100%"
                  ></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="持续时间" prop="during">
              <el-input
                clearable
                v-model.number="ruleForm.during"
                type="text"
                placeholder="单位：分钟"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('ruleForm')"
                >提交</el-button
              >
              <el-button @click="back">返回</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="24" class="lowerCol">
        <div class="maindiv">
          <el-card class="lowerCard">
            <div slot="header" class="clearfix">
              <span><b>场地课程表</b></span>
            </div>
            <el-table
              height="219"
              ref="filterTable"
              :data="tableData"
              style="width: 100%"
              :default-sort="{ prop: 'courseDate', order: 'descending' }"
            >
              <el-table-column prop="courseName" label="课程名称" width="300">
              </el-table-column>
              <el-table-column
                prop="courseDate"
                label="日期"
                width="300"
                sortable
              >
              </el-table-column>
              <el-table-column
                prop="courseTime"
                label="开始时间"
                width="300"
                sortable
              >
              </el-table-column>
              <el-table-column prop="courseDuring" label="持续时间">
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GETDefaultOccupyTime } from "../../API/http";

// import store from "../../state/state.js"
export default {
  name: "ActivityList",
  components: {},

  data() {
    // const course = {
    //   courseName: "数据库课程设计",
    //   courseDate: "2021-7-10",
    //   courseTime: "15:00",
    //   courseDuring: "95",
    // };
    return {
      groundId: "1000003",
      // tableData: Array(20).fill(course),
      tableData: [],
      iGroundTable: [],
      oGroundTable: [],

      ruleForm: {
        site: [],
        name: "",
        // region: "",
        date1: "",
        date2: "",
        during: "",
      },

      options: [],

      rules: {
        name: [
          { required: true, message: "请输入课程名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],

        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],

        during: [
          {
            type: "number",
            required: true,
            message: "课程持续时间必须为数字",
            trigger: "change",
          },
          {
            type: "number",
            min: 45,
            max: 300,
            message: "持续时间在45~300分钟",
            trigger: "blur",
          },
        ],
      },
    };
  },

  mounted() {
    var axios = require("axios");
    var config1 = {
      method: "get",
      url: "http://139.196.114.7/api/IndoorGrounds?accountNumber=1000003", //改
      headers: {},
    };

    var config2 = {
      method: "get",
      url: "http://139.196.114.7/api/OutdoorGrounds?accountNumber=1000003", //改
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
              this.options[cPos].children[cFloor].push({
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

  //   console.log(this.ruleForm.site[this.ruleForm.site.length - 1]);
  //   GETDefaultOccupyTime()
  //     .then((data) => {
  //       console.log("run GETDefaultOccupyTime");
  //       console.log(data);
  //       for (var i = 0; i < data.length; i++) {
  //         var temp = {
  //           courseName: "数据库课程设计",
  //           courseDate: "2021-7-10",
  //           courseTime: "15:00",
  //           courseDuring: "95",
  //         };
  //         temp.courseName = data.name;
  //         temp.courseDate = data.occupyDate.substr(
  //           0,
  //           data.occupyDate.search("T")
  //         );
  //         temp.courseTime = data.occupyDate.slice(
  //           data.occupyDate.search("T") + 1
  //         );
  //         temp.courseDuring = data.duration;
  //         this.tableData.push(temp);
  //       }
  //       console.log(this.tableData);
  //     })
  //     .catch((err) => {
  //       this.data = err;
  //     });
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    back() {
      this.$router.push({ path: "/GroundsAdmin/AddCourseGroundList" });
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "课程添加成功",
            type: "success",
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleChange(value) {
      console.log(value);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    filterHandler() {},
  },
};
</script>

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

.detailinfo {
  padding: 15px;
}

.upperCol {
  /* height: 48%; */
  padding-bottom: 15px;
}
/* .lowerCol {
  height: 50%;
} */
.mainRow {
  height: 100%;
}
.lowerCard {
  height: 320px;
}
.upperCard {
  height: 280px;
}
.upperCard,
.lowerCard {
  overflow: auto;
  border-radius: 15px;
}
</style>
