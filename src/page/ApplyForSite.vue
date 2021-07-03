<template>
    <div class="page">
        <div class="background">
            <span id="applytitle">场地使用申请</span>
            <div id="content">
                <table>
                    <colgroup>
                        <col span="2">
                    </colgroup>
                    <tr>
                        <td>活动名称：</td>
                        <td>
                            <el-input class="name" type="text" placeholder="请输入内容" v-model="name" maxlength="20"
                                show-word-limit></el-input>
                        </td>
                    </tr>
                    <br>
                    <tr>
                        <td>选择日期：</td>
                        <td>
                            <el-date-picker v-model="date" align="right" type="date" placeholder="选择日期"
                                :picker-options="pickerOptions" value-format="yyyy-MM-dd"></el-date-picker>
                        </td>
                    </tr>
                    <br>
                    <tr>
                        <td>选择时间：</td>
                        <td>
                            <el-time-picker is-range v-model="time" range-separator="至" start-placeholder="开始时间"
                                end-placeholder="结束时间" placeholder="选择时间范围" @change="getTime" value-format="HH:mm"></el-time-picker>
                        </td>
                    </tr>
                    <br>
                    <tr>
                        <td valign="top">活动描述：</td>
                        <td>
                            <el-input class="input" type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea">
                            </el-input>
                        </td>
                    </tr>
                    <br>
                    <tr>
                        <td align="right">场地：</td>
                        <td>
                            <el-cascader placeholder="搜索" :options="options" :show-all-levels="false" v-model="site"  @change="getSite" clearable
                                filterable></el-cascader>
                        </td>
                    </tr>
                    <br>
                    <tr>
                        <td align="right">人数：</td>
                        <td>
                            <el-input-number v-model="num" @change="handleChange" :min="1" :max="200" label="描述文字">
                            </el-input-number>
                        </td>
                    </tr>
                    <br>
                    <tr>
                        <td>特殊需求：</td>
                        <td>
                            <el-input class="input" type="textarea" :rows="2" placeholder="请输入内容" v-model="specialtext">
                            </el-input>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="margin: 20px 0;"></div>
                <el-button type="primary" class="submit"  @click="open">提交</el-button>
            <router-link to="/" tag='el-button' class="cancel">取消</router-link>
        </div>
    </div>
</template>

<script scoped>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
                options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
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
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
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
            value: 'form',
            label: 'Form',
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
            value: 'data',
            label: 'Data',
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
            value: 'notice',
            label: 'Notice',
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
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
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
        id:'222222',
        site: [],
        date: '',
        time: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        name: '',
        textarea: '',
        specialtext: '',
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      getSite(value){
        JSON.parse(JSON.stringify(value));
        console.log(this.site);
      },
      getTime(value){
        JSON.parse(JSON.stringify(value));
        console.log(this.time);
      },
      open() {
        this.$alert('您的活动ID为'+this.id, '活动ID分配', {
          confirmButtonText: '确定',
          callback: action => {
          if (action === 'confirm') {
            this.$message({
              type: 'success',
              message: '申请成功'
            });
          }
          }
        });
      }
    }
  };
</script>

<style scoped>
.logoImage {
  height: 25%;
  width: 25%;
}
.page{
    height: 100%;
    width: 100%;
    margin:0;
    display: flex;
    background-color: rgb(236, 233, 233);
    background: rgba(240, 235, 235, 0.5);
    justify-content: center;
    align-items: center;
}
.background{
    margin:0;
    height:98%;
    width:99%;
    background-color: rgb(255, 255, 255);
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    position:relative;
}
#applytitle{
    font-family:Helvetica;
    font-weight:bold;
    font-size:200%;
    position:absolute;
    left:100px;
    top:20px;
}
#content{
    font-family:Helvetica;
    position:absolute;
    left:150px;
    top:70px;
}
.name{
width:120%;
}
.submit{
    margin:0;
    width:10%;
    position: relative;
    left:250px;
    top:580px
}
.cancel{
    margin:0;
    width:10%;
    position: relative;
    left:300px;
    top:580px
}

</style>