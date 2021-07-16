<template>
  <el-card class="maincard">
    <div slot="header" class="clearfix">
      <span><b>使用场地申请</b></span>
    </div>
    <el-row class="mainrow" type="flex">
      <el-col class="col1" :span="12">
        <el-form
          ref="applyform"
          :rules="rules"
          :model="ruleform"
          label-width="100px"
        >
          <el-form-item label="活动名称：" prop="name">
            <el-input
              class="titlename"
              type="text"
              placeholder="请输入内容"
              v-model="ruleform.name"
              maxlength="10"
              clearable
            >
            </el-input>
          </el-form-item>
          <el-form-item label="场地：" prop="site">
            <el-cascader
              placeholder="搜索"
              :options="options"
              :show-all-levels="false"
              v-model="ruleform.site"
              @change="getSite"
              clearable
              filterable
            ></el-cascader>
          </el-form-item>
          <el-form-item label="选择日期：" prop="date">
            <el-date-picker
              clearable
              v-model="ruleform.date"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
              value-format="yyyy-MM-dd"
              disabled
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="选择时间：" prop="time">
            <el-time-picker
              is-range
              v-model="ruleform.time"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
              @change="getDurTime"
              value-format="HH:mm"
              disabled
            ></el-time-picker>
          </el-form-item>
          <el-form-item label="活动描述：" prop="description">
            <el-input
              clearable
              class="input"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="ruleform.description"
              maxlength="100"
              show-word-limit
            >
            </el-input>
          </el-form-item>
          <el-form-item label="人数：" prop="people">
            <el-input-number
              v-model="ruleform.people"
              @change="handleChange"
              :min="1"
              :max="200"
              label="描述文字"
              size="medium"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="特殊需求：" prop="special">
            <el-input
              clearable
              class="input"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="ruleform.special"
              maxlength="100"
              show-word-limit
            >
            </el-input>
          </el-form-item>
          <el-form-item align="center">
            <el-button size="medium" type="primary" @click="submitForm('applyform')"
              >提交</el-button
            >
            <el-button size="medium" type="primary" @click="back"
              >取消</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>

      <el-col class="col2" :span="12">
        <!-- <el-card> -->
        <transition name="fade-transform" mode="in-out">
          <!-- <div v-if="this.groundId != null" style="padding-left:5%;height:500px"> -->
          <div v-if="this.groundId != null">
            <Mycalendar
              class="calendar-card"
              :groundId="groundId"
              @handleSelect="myfun($event)"
            />
          </div>
          <!-- </div> -->
        </transition>
        <!-- </el-card> -->
      </el-col>
    </el-row>
  </el-card>
</template>

<script scoped>
import Mycalendar from "../../components/Mycalendar.vue";
import store from "../../state/state";
import { POSTActivities,
         PUTActivitiesID } from "../../API/http";
export default {
  components: {
    Mycalendar,
  },
  created() {
    this.getAllSite();
  },
  data() {
    return {
      iGroundTable: [],
      oGroundTable: [],
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        date: [{ required: true, message: "请选择活动日期", trigger: "blur" }],
        time: [
          { required: true, message: "请选择活动时间", trigger: "blur" },
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (
                (this.ruleform.time[1][0] - this.ruleform.time[0][0]) * 600 +
                  (this.ruleform.time[1][1] - this.ruleform.time[0][1]) * 60 +
                  (this.ruleform.time[1][3] - this.ruleform.time[0][3]) * 10 +
                  (this.ruleform.time[1][4] - this.ruleform.time[0][4]) * 1 <
                30
              ) {
                callback(new Error("时长不超过30分钟"));
              } else if (
                this.ruleform.time[1][0] == "2" &&
                this.ruleform.time[1][1] >= "2"
              ) {
                callback(new Error("场地晚间22点之后关闭申请"));
              } else if (
                this.ruleform.time[0][0] == "0" &&
                this.ruleform.time[0][1] < "8"
              ) {
                callback(new Error("场地8点之前关闭申请"));
              } else {
                callback();
              }
            },
          },
        ],
        special: [
          { required: false, message: "请输入特殊需求", trigger: "blur" },
          {
            max: 100,
            message: "长度在小于100个字符",
            trigger: "blur",
          },
        ],
        description: [
          { required: true, message: "请输入活动描述", trigger: "blur" },
          {
            max: 100,
            message: "长度在小于100个字符",
            trigger: "blur",
          },
        ],
        site: [
          { required: true, message: "请选择一个活动地点", trigger: "blur" },
        ],
        people: [
          { required: true, message: "请选择活动人数", trigger: "blur" },
        ],
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      options: [],
      ruleform: {
        id: store.state.ID,
        site: [],
        date: "",
        time: [],
        name:
          typeof this.$route.query.activityName == undefined
            ? ""
            : this.$route.query.activityName,
        description: "",
        special: "",
        duration: 0,
        people: 1,
        startTime: "",
      },
      OrgID: store.state.ID,
      groundId: null,
    };
  },
  methods: {
    back(){
      this.$router.push("/OrgFrame/Appointment" );
    },
    myfun(a) {
      console.log("aaaaaaaaaaabbbbbb", a);
      let start = a.start;
      let end = a.end;

      this.ruleform.date = start.replace("T", " ").toString();
      console.log("aaaaaaaaaaabbbbbb", this.ruleform.time);
      console.log(start.split("T")[1].toString());
      console.log(end.split("T")[1].toString());
      var time = [];
      time[0] = start.split("T")[1].toString().substr(0, 5);
      time[1] = end.split("T")[1].toString().substr(0, 5);
      console.log(time);
      this.ruleform.time = [
        new Date(
          2016,
          9,
          10,
          parseInt(time[0][0] + time[0][1]),
          parseInt(time[0][3] + time[0][4])
        ),
        new Date(
          2016,
          9,
          10,
          parseInt(time[1][0] + time[1][1]),
          parseInt(time[1][3] + time[1][4])
        ),
      ];
      this.ruleform.duration =
        (time[1][0] - time[0][0]) * 600 +
        (time[1][1] - time[0][1]) * 60 +
        (time[1][3] - time[0][3]) * 10 +
        (time[1][4] - time[0][4]) * 1;
      this.ruleform.startTime = start.split("T")[0] + "T" + time[0] + ":00.000";
      console.log(this.ruleform.startTime);
      //       {start: "2021-07-12T09:00:00+08:00", end: "2021-07-12T12:30:00+08:00"}
      // end: "2021-07-12T12:30:00+08:00"
      // start: "2021-07-12T09:00:00+08:00"

      //用这个函数转化
      // var date = new Date(Date.parse(time.replace("T", " ").toString()));
    },
    handleChange(value) {
      console.log(value);
    },
    getSite(value) {
      JSON.parse(JSON.stringify(value));
      console.log(this.ruleform.site);
      console.log(this.options);
      this.groundId = this.ruleform.site[this.ruleform.site.length - 1];
      //console.log("name",this.$route.params.ID);
    },
    getDurTime(value) {
      console.log(value);
      // JSON.parse(JSON.stringify(value));
      // this.ruleform.duration =
      //   (this.ruleform.time[1][0] - this.ruleform.time[0][0]) * 600 +
      //   (this.ruleform.time[1][1] - this.ruleform.time[0][1]) * 60 +
      //   (this.ruleform.time[1][3] - this.ruleform.time[0][3]) * 10 +
      //   (this.ruleform.time[1][4] - this.ruleform.time[0][4]) * 1;
      // this.ruleform.startTime="T"+this.ruleform.time[0]+":00.000";
      // console.log(this.ruleform.time);
      // console.log(this.ruleform.duration);
    },
    getAllSite: async function () {
      var axios = require("axios");
      var config1 = {
        method: "get",
        url: "http://139.196.114.7/api/IndoorGrounds", //改
        headers: {},
      };

      var config2 = {
        method: "get",
        url: "http://139.196.114.7/api/OutdoorGrounds", //改
        headers: {},
      };
      //室外级联选择
      await axios(config1)
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

      await axios(config2)
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

      this.searchSite();
    },
    setToDB(){
      if (this.$route.query.activityID) {
        PUTActivitiesID(this.$route.query.activityID,
        {id:this.$route.query.activityID,
        name:this.ruleform.name,
        accountNumber:this.OrgID,
        activityDate:this.ruleform.startTime,
        startTime:this.ruleform.startTime,
        participantNum:this.ruleform.people,
        description:this.ruleform.description,
        additionalRequest:this.ruleform.special,
        duration:this.ruleform.duration,
        groundId:this.ruleform.site[this.ruleform.site.length-1],}
        )
        .then(()=>{
          this.$alert("您的活动ID为" + this.$route.query.activityID, "活动ID分配", {
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
        this.ruleform.id=this.$route.query.activityID;
      })
      .catch((err) => {
          console.log(err);
          this.$message("活动申请信息传输错误");
        })
      }
      else{
              POSTActivities({
        name: this.ruleform.name,
        accountNumber: this.OrgID,
        activityDate: this.ruleform.startTime,
        startTime: this.ruleform.startTime,
        participantNum: this.ruleform.people,
        description: this.ruleform.description,
        additionalRequest: this.ruleform.special,
        duration: this.ruleform.duration,
        groundId: this.ruleform.site[this.ruleform.site.length - 1],
      })
        .then((data) => {
          this.$alert("您的活动ID为" + data.id, "活动ID分配", {
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
          this.ruleform.id = data.id;
        })
        .catch((err) => {
          console.log(err);
          this.$message("活动申请信息传输错误");
        })

      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.setToDB();
        } else {
          console.log("ID", this.$route.query.activityID);
          console.log("name", this.$route.query.activityName);
          console.log("ground", this.$route.query.groundId);
          console.log("error submit!!");
          return false;
        }
      });
    },
    searchSite() {
      console.log("name", this.$route.query.groundId);
      console.log(this.options);
      if (typeof this.$route.query.groundId != undefined) {
        for (var i = 0; i < this.options.length; i++) {
          if (this.options.length - i > this.oGroundTable.length) {
            //判断室内室外
            for (var j = 0; j < this.options[i].children.length; j++) {
              for (
                var k = 0;
                k < this.options[i].children[j].children.length;
                k++
              ) {
                if (
                  this.$route.query.groundId ==
                  this.options[i].children[j].children[k].value
                ) {
                  this.groundId = this.$route.query.groundId;
                  console.log("sureIn", this.$route.query.groundId);
                  this.ruleform.site = [
                    this.options[i].value,
                    this.options[i].children[j].value,
                    this.options[i].children[j].children[k].value,
                  ];
                  return;
                }
              }
            }
          } else {
            if (this.$route.query.groundId == this.options[i].value) {
              this.groundId = this.$route.query.groundId;
              console.log("sureOut", this.$route.query.groundId);
              this.ruleform.site = [this.options[i].value];
              return;
            }
          }
        }
      } else {
        console.log("sure", this.$route.query.groundId);
      }
    },
  },
};
</script>

<style scoped>
.mainrow {
  height: 100%;
}
.calendar-card {
  height: 510px;
  overflow: auto;
  border: 0;
  border-radius: 0px;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.1)
}
.col1,
.col2 {
  height: 100%;
  padding: 0px;
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
.fade-transform-enter-active {
  transition: all 0.3s;
}
.fade-transform-leave-active {
  transition: all 0.3s;
}
.maincard {
  border-radius: 15px;
  height: 100%;
  overflow: auto;
}
/* #content {
  position: absolute;
  left: 350px;
  top: 90px;
} */
.titlename {
  width: 100%;
}
.el-card {
  border-radius: 15px;
}
</style>