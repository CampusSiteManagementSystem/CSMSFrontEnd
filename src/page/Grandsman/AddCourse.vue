<template>
  <div>
    <el-row class="mainRow">
      <el-col :span="24" class="upperCol">
        <el-card class="upperCard">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="课程名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
           
            <el-form-item label="课程时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
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
                    placeholder="选择时间"
                    v-model="ruleForm.date2"
                    style="width: 100%"
                  ></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="持续时间" prop="during">
              <el-input v-model.number="ruleForm.during" type="text" placeholder="单位：分钟"></el-input>
            </el-form-item>
            <el-form-item> 
          <el-button type="primary" @click="(onSubmit('ruleForm'))">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="24" class="lowerCol">
        <div class="maindiv">
          <el-card class="lowerCard">
            <h1 class="maintitle">待评分活动</h1>
            <!-- <p class="groundinfo">{{ num }}个活动</p> -->
            <el-table
              height="475"
              ref="filterTable"
              :data="tableData"
              style="width: 100%"
              :default-sort="{ prop: 'time', order: 'descending' }"
            >
              <el-table-column
                prop="time"
                label="开始时间"
                sortable
                width="180"
              >
              </el-table-column>
              <el-table-column prop="activityname" label="活动" width="180">
              </el-table-column>
              <el-table-column prop="groupname" label="组织" width="180">
              </el-table-column>
              <el-table-column prop="ground" label="场地" width="180">
              </el-table-column>
              <el-table-column
                prop="scoreingtag"
                label="是否评分"
                column-key="scoreingtag"
                :filters="[
                  { text: '已评分', value: true },
                  { text: '未评分', value: false },
                ]"
                :filter-method="filterHandler"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="
                      scope.row.scoreingtag == false ? 'primary' : 'success'
                    "
                    disable-transitions
                    >{{
                      scope.row.scoreingtag == false ? "未评分" : "已评分"
                    }}</el-tag
                  >
                </template>
              </el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <router-link
                    :to="{
                      name: 'ScoringActivity',
                      params: { ID: scope.row.activityID },
                    }"
                  >
                    <el-button @click="handleClick(scope.row)" type="text"
                      >查看详情</el-button
                    >
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { number } from "echarts";
export default {
  name: "ActivityList",
  components: {},
  data() {
    const item = {
      id: "16472",
      organization: "软件学院",
      activity: "年级大会",
      ground: "济事楼434",
      time: "2021-6-25 15:30",
      state: "待审批",
    };
    return {
      tableData: Array(20).fill(item),

      ruleForm: {
        name: "",
        // region: "",
        date1: "",
        date2: "",
        during: "",
      },
      rules: {
        name: [
          {  required: true, message: "请输入课程名称", trigger: "blur" },
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
           { type: "number",min: 45, max: 300, message: "持续时间在45~300分钟", trigger: "blur" }
        ],
      },
    };
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
onSubmit(formName){
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

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    filterHandler(){
      
    },
  },
};
</script>

<style>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

.el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
}
.maintitle {
  text-align: center;
  font-size: 27px;
}

.el-input {
  height: 50%;
}
.detailinfo {
  padding: 15px;
}
.el-col {
  padding: 5px;
  /* height: */
  height: 100%;
}
.upperCol {
  height: 50%;
}
.lowerCol {
  height: 50%;
}
.mainRow {
  height: 100%;
}
.lowerCard {
  height: 300px;
}
.upperCard {
  height: 300px;
}
</style>
