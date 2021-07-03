<template>
  <div class="page">
    <el-row :gutter="20" type="flex">
      <el-col :span="6">
        <div class="grid-content1 bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="groupname">{{group.name}}</div>
            </div>
            <div>
              <el-progress class="dashboard" type="dashboard" :width='200' :stroke-width='10' :percentage="group.score"
                :format="format" :color="colors"></el-progress>
              <div align="center"><b>信用分</b></div>
              <div id="grade1">差</div>
              <div id="grade2">中</div>
              <div id="grade3">良</div>
              <div id="grade4">优</div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content2 bg-purple">
          <el-card class="box-card1">
            <div id="chartColumn" style="width: 100%; height: 350px;">
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex">
      <el-col :span="24">
        <div class="grid-content3 bg-purple">
          <el-card class="box-card2">
            <div slot="header" class="clearfix">
              <span class="groupname">信用分记录</span>
            </div>
            <div class="text item">
              <el-table :data="tableData" style="width: 100%" height="200" stripe
                :default-sort="{prop: 'score', order: 'descending'}">
                <el-table-column prop="name" label="名称" width="180">
                </el-table-column>
                <el-table-column prop="date" label="日期" width="180" sortable>
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column prop="score" label="分数" width="80" sortable filter-placement="bottom-end">
                  <template slot-scope="scope">
                    <el-tag :type="scope.row.score === 7 ? 'success' : 'danger'" disable-transitions>
                      {{scope.row.score}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="reason" label="原因">
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript"> 
import * as echarts from 'echarts'
export default {
  data() {
    return {
      group: {
        name: '数据库项目小组',
        score: 40
      },
      colors: [{
          color: '#f56c6c',
          percentage: 20
        },
        {
          color: '#e6a23c',
          percentage: 40
        },
        {
          color: '#5cb87a',
          percentage: 60
        },
        {
          color: '#1989fa',
          percentage: 80
        },
        {
          color: '#6f7ad3',
          percentage: 100
        }
      ],
      tableData: [{
        date: '2017-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        score: -10,
        reason: '不来数据库开会',
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        score: 7,
        reason: '不来数据库开会',
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        score: -5,
        reason: '不来数据库开会',
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        score: -5,
        reason: '不来数据库开会',
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        score: -5,
        reason: '不来数据库开会',
      }]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    format(percentage) {
      return `${percentage}分`;
    },
    drawLine() {
      this.chartColumn = echarts.init(document.getElementById('chartColumn'));

      this.chartColumn.setOption({
        title: {
          text: '信用分变化趋势'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: 'horizontal',
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: 'right',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: 'top',
          data: ['信用分']
        },
        xAxis: {
          name: '日期',
          type: 'category',
           axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: '#912CEE'
            }
          },
          data: ["2020-11-18 00:08:36", "2020-11-18 00:18:42", "2020-11-18 00:28:46", "2020-11-18 00:38:33",
            "2020-11-18 00:48:43", "2020-11-18 00:58:36", "2020-11-18 01:08:40", "2020-11-18 01:18:36", "2020-11-18 01:28:42",
            "2020-11-18 01:38:39", "2020-11-18 01:48:45", "2020-11-18 01:58:35", "2020-11-18 02:08:34", "2020-11-18 02:18:32",
            "2020-11-18 02:28:38", "2020-11-18 02:38:37", "2020-11-18 02:48:44", "2020-11-18 02:58:49", "2020-11-18 03:08:38",
            "2020-11-18 03:18:42", "2020-11-18 03:28:35", "2020-11-18 03:38:44", "2020-11-18 03:48:35", "2020-11-18 03:58:50",
            "2020-11-18 04:08:40", "2020-11-18 04:18:46", "2020-11-18 04:28:48", "2020-11-18 04:38:46", "2020-11-18 04:48:35",
            "2020-11-18 04:58:46", "2020-11-18 05:08:38", "2020-11-18 05:18:34", "2020-11-18 05:28:46", "2020-11-18 05:38:35",
            "2020-11-18 05:48:41", "2020-11-18 05:58:38", "2020-11-18 06:08:41", "2020-11-18 06:18:49", "2020-11-18 06:28:46",
            "2020-11-18 06:38:43", "2020-11-18 06:48:40", "2020-11-18 06:58:47", "2020-11-18 07:08:36", "2020-11-18 07:18:35",
            "2020-11-18 07:28:51", "2020-11-18 07:38:45", "2020-11-18 07:48:39", "2020-11-18 07:58:42", "2020-11-18 08:08:51",
            "2020-11-18 08:18:37", "2020-11-18 08:28:43", "2020-11-18 08:38:46", "2020-11-18 08:48:54", "2020-11-18 08:58:52",
            "2020-11-18 09:08:51", "2020-11-18 09:18:36", "2020-11-18 09:28:41", "2020-11-18 09:38:42", "2020-11-18 09:48:48",
            "2020-11-18 09:58:52", "2020-11-18 10:08:48", "2020-11-18 10:18:38", "2020-11-18 10:28:49", "2020-11-18 10:38:44",
            "2020-11-18 10:48:37", "2020-11-18 11:08:49", "2020-11-18 11:18:49"
          ]
        },
        yAxis: {
          name: '分数',
          type: 'value',
           axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#87CEFA'
            }
          },
          min: 0, // 设置y轴刻度的最小值
          max: 100, // 设置y轴刻度的最大值
          splitNumber: 7,
        },
        series: [{
          name: '信用分',
          data: [80, 42, 90, 91, 47, 99, 10, 78, 61, 15, 16, 79, 42, 79, 81, 64, 70, 89, 10, 86, 62, 60, 74, 71,
            12, 89, 81, 97, 90, 62, 90, 100, 99, 4, 70, 93, 13, 14, 74, 86, 35, 80, 96, 34, 41, 98, 93,
            93, 100, 60, 78, 79, 93, 69, 98, 100, 65, 74, 100, 75
          ],
          type: 'line'
        }]
      });
    }
  }
}
</script>

<style scoped>
.page{
    height: 100%;
    width: 100%;
    margin:0;
    background-color: rgb(236, 233, 233);
    background: rgba(240, 235, 235, 0.5);
}
  .el-row {
    margin-bottom: 12px;
    display: flex;
    flex-flow:row wrap;
  }
.el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content1 {
    border-radius: 4px;
    min-height: 350px;
  }
    .grid-content2 {
    border-radius: 4px;
    min-height: 350px;
  }
    .grid-content3 {
    border-radius: 4px;
    min-height:310px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
   .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
.dashboard{
    position:relative;
    left:25px;
    top:10px; 
}
#grade1{
    position:relative;
    left:10px;
    top:-60px;
}
#grade2{
    position:relative;
    left:20px;
    top:-220px;
}
#grade3{
    position:relative;
    left:210px;
    top:-245px;
}
#grade4{
    position:relative;
    left:220px;
    top:-122px;
}
  .groupname{
    font-family:Helvetica;
    font-weight:bold;
    font-size:200%;
    position:relative;
    text-align: center;
}
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    position:absolute;
    height:100%;
    width: 24%;
  }
    .box-card1 {
    position:absolute;
    height:100%;
    width: 73%;
  }
        .box-card2 {
    position:absolute;
    height:100%;
    width: 98%;
  }
</style>