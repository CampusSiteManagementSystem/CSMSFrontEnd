<template>
  <el-card class="maincard">
    <div class="maintitle">发布场地公告</div>
        <el-form ref="form" :model="form" label-width="80px">
           <el-form-item label="场地" prop="site" required>
              <el-cascader
                v-model="form.site"
                :options="options"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          <el-form-item label="公告内容">
            <el-input
              type="textarea"
              :autosize="{ minRows: 8, maxRows: 10 }"
              v-model="form.content"
              placeholder="请输入公告内容"
              maxlength="100"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item>
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

/* .el-header {
  background-color: white;
} */
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

</style>



// <script>
export default {
  name: "ReleaseGroundAnnouncement",
  data() {
    return {
      form: {
        site: [],
        content: "",
      },
      groundTable: [
        {
          id: "6553",
          name: "济事楼434",
          area: "济事楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "6554",
          name: "济事楼435",
          area: "济事楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "6555",
          name: "济事楼436",
          area: "济事楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "6555",
          name: "济事楼436",
          area: "济事楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "3545",
          name: "篮球场",
          area: "篮球场",
          class: 1,
          description: "仅限体育课教学时间以外预约",
        },
        {
          id: "5454",
          name: "足球场",
          area: "足球场",
          class: 1,
          description: "仅限体育课教学时间以外预约",
        },
        {
          id: "4585",
          name: "F101",
          area: "复楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "1254",
          name: "A101",
          area: "安楼",
          class: 0,
          description: "暂无描述",
        },
      ],

      /* 级联选择框 */
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
        /* end of options */
    };
  },
  methods: {
    publish() {
      this.$message({
        message: "公告发布成功",
        type: "success",
      });
      this.$router.push({ path: "/GroundsAdmin/Main" });
    },
    back() {
      this.$router.push({ path: "/GroundsAdmin/Main" });
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