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
            <el-form-item label="上课场地" prop="site" required>
              <el-cascader
                v-model="ruleForm.site"
                :options="options"
                @change="handleChange"
              ></el-cascader>
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
              <el-input
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
            <h2 class="maintitle">场地课程表</h2>
            <!-- <p class="groundinfo">{{ num }}个活动</p> -->
            <el-table
              height="475"
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

              <!-- <el-table-column label="操作" width="100">
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
              </el-table-column> -->
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
    const course = {
      courseName: "数据库课程设计",
      courseDate: "2021-7-10",
      courseTime: "15:00",
      courseDuring: "95",
    };
    return {
      tableData: Array(20).fill(course),

      ruleForm: {
        site: [],
        name: "",
        // region: "",
        date1: "",
        date2: "",
        during: "",
      },

      options: [{
          value: 'A',
          label: 'A楼',
          children: [{
            value: '1',
            label: '1楼',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: '2',
            label: '2楼',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'B',
          label: 'B楼',
          children: [{
            value: '1',
            label: '1楼',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: '2',
            label: '2楼',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: '3',
            label: '3楼',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: '4',
            label: '4楼',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }]
        }, {
          value: 'C',
          label: 'C楼',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],

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
html,
body,
#app,
/* .el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
} */

/* .el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
} */
.maintitle {
  text-align: left;
  font-size: 17px;
}

/* .el-input {
  height: 50%;
} */
.detailinfo {
  padding: 15px;
}
/* .el-col {
  padding: 5px;
  height: 100%;
} */
.upperCol {
  height: 48%;
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
  height: 280px;
  overflow: auto;
}
</style>
