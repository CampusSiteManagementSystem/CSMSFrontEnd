<template>
  <el-card class="maincard">
    <div slot="header" class="clearfix">
      <span><b>使用场地申请</b></span>
    </div>
    <el-row>
      <el-col :span="12">
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
            maxlength="20"
            show-word-limit
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
            @change="getTime"
            value-format="HH:mm"
          ></el-time-picker>
        </el-form-item>
        <el-form-item label="活动描述：" prop="description">
          <el-input
            clearable
            class="input"
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="ruleform.description"
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
          >
          </el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" @click="submitForm('applyform')"
            >提交</el-button
          >
          <router-link to="/OrgFrame/Appointment" tag="el-button"
            >取消</router-link
          >
        </el-form-item>
      </el-form>
      </el-col>
      <el-col :span="12">
      </el-col>
    </el-row>
  </el-card>
</template>

<script scoped>
export default {
  mounted() {
    this.searchSite();
  },
  data() {
    return {
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 0,
            max: 20,
            message: "长度在 0 到 20 个字符",
            trigger: "blur",
          },
        ],
        date: [{ required: true, message: "请选择活动日期", trigger: "blur" }],
        time: [
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
              } else if(this.ruleform.time[1][0]=='2'&&this.ruleform.time[1][1]>='2'){
                callback(new Error("场地晚间22点之后关闭申请"));
              }else if(this.ruleform.time[0][0]<'8'){
                callback(new Error("场地8点之前关闭申请"));
              }else {
                callback();
              }
            },
          },
        ],
        description: [
          { required: true, message: "请输入活动描述", trigger: "blur" },
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
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "123123",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      ruleform: {
        id: "222222",
        site: [],
        date: "",
        time: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        name:
          typeof this.$route.query.activityName == undefined
            ? ""
            : this.$route.query.activityName,
        description: "",
        special: "",
        doration: 0,
        people: 1,
      },
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    getSite(value) {
      JSON.parse(JSON.stringify(value));
      console.log(this.ruleform.site);
      console.log(this.options);
      //console.log("name",this.$route.params.ID);
    },
    getTime(value) {
      JSON.parse(JSON.stringify(value));
      this.ruleform.doration =
        (this.ruleform.time[1][0] - this.ruleform.time[0][0]) * 600 +
        (this.ruleform.time[1][1] - this.ruleform.time[0][1]) * 60 +
        (this.ruleform.time[1][3] - this.ruleform.time[0][3]) * 10 +
        (this.ruleform.time[1][4] - this.ruleform.time[0][4]) * 1;
      console.log(this.ruleform.time);
      console.log(this.ruleform.doration);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$alert("您的活动ID为" + this.ruleform.id, "活动ID分配", {
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
        } else {
          console.log("ID", this.$route.query.activityID);
          console.log("name", this.$route.query.activityName);
          console.log("ground", this.$route.query.groundID);
          console.log("error submit!!");
          return false;
        }
      });
    },
    searchSite() {
      console.log("name", this.$route.query.groundID);
      console.log(this.options);
      if (typeof this.$route.query.groundID != undefined) {
        for (var i = 0; i < this.options.length; i++) {
          for (var j = 0; j < this.options[i].children.length; j++) {
            for (
              var k = 0;
              k < this.options[i].children[j].children.length;
              k++
            ) {
              if (
                this.$route.query.groundID ==
                this.options[i].children[j].children[k].value
              ) {
                console.log("sure", this.$route.query.groundID);
                this.ruleform.site = [
                  this.options[i].value,
                  this.options[i].children[j].value,
                  this.options[i].children[j].children[k].value,
                ];
                return;
              }
            }
          }
        }
      } else {
        console.log("sure", this.$route.query.groundID);
      }
    },
  },
};
</script>

<style scoped>

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
</style>