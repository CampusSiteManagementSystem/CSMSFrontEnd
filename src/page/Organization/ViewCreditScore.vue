<template>
  <div class="page">
    <el-row :gutter="20" type="flex">
      <el-col :span="6">
        <div class="grid-content1">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="groupname1">{{group.name}}</div>
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
        <div class="grid-content2">
          <el-card class="box-card1">
            <div id="chartColumn" style="width: 100%; height: 350px;">
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex">
      <el-col :span="24">
        <div class="grid-content3">
          <el-card class="box-card2">
            <div slot="header" class="clearfix">
              <span class="groupname2">信用分记录</span>
            </div>
            <div class="text item">
              <el-table :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}" :data="tableData" style="width: 100%" height="200" stripe
                :default-sort="{prop: 'creditTime', order: 'descending'}">
                <el-table-column prop="activityName" label="名称">
                </el-table-column>
                <el-table-column prop="creditTime" label="日期" sortable>
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.creditTime }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="groundName" label="地址">
                </el-table-column>
                <el-table-column prop="relativeScore" label="分数" sortable filter-placement="bottom-end">
                  <template slot-scope="scope">
                    <el-tag :type="scope.row.relativeScore >= 0 ? 'success' : 'danger'" disable-transitions>
                      {{scope.row.relativeScore}}</el-tag>
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
import {GETOrganizationsID, 
        GETCreditRecords
        } from "../../API/http"
import store from "../../state/state.js"
export default {
  created(){

  },
  data() {
    return {
      group: {
        name: '',
        score: 0
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
      tableData: [],
      OrgID: store.state.ID,
      date:[],
      creditScore:[],
      activity:[],
    };
  },
  mounted() {
    GETOrganizationsID(this.OrgID)
    .then(data =>{
      this.group.name=data.name;
    })
    .catch((err) => {
      console.log(err);
      this.$message("组织信息获取错误");
    });
    GETCreditRecords({accountNumber:this.OrgID,
                      recentNum:40})
    .then(data =>{
      this.activity = data;
      this.dealWithCredits(this.activity);
      this.drawLine();
      //console.log("activity",this.activity);
    })
    .catch((err) => {
      console.log(err);
      this.$message("组织信用分历史信息获取错误");
    });
  },
  methods: {
    format(percentage) {
      return `${percentage}分`;
    },
    dealWithCredits(data) {
      if(data.length>0){
      for (var i = 0; i < data.length; i++) {
        var temp = {
          activityName: "",
          creditTime:"",
          groundName: "",
          relativeScore: "",
          reason: "",
        };
        temp.activityName=data[i].activityName;
        temp.groundName=data[i].groundName;
        temp.relativeScore=data[i].relativeScore;
        temp.reason=data[i].reason;
        temp.creditTime=(data[i].creditTime.replace("T"," ").split('.'))[0];
        this.date.push(temp.creditTime);
        this.creditScore.push(data[i].absoluteScore);
        this.tableData.push(temp);
      }
        this.group.score=this.creditScore[data.length-1];
      }
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
          data: this.date,
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
          data: this.creditScore,
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
    left:50px;
    top:10px; 
}
#grade1{
    position:relative;
    left:35px;
    top:-60px;
}
#grade2{
    position:relative;
    left:45px;
    top:-220px;
}
#grade3{
    position:relative;
    left:235px;
    top:-245px;
}
#grade4{
    position:relative;
    left:245px;
    top:-122px;
}
  .groupname1{
    font-family:Helvetica;
    font-weight:bold;
    font-size:200%;
    position:relative;
    text-align: center;
}
  .groupname2{
    font-family:Helvetica;
    font-weight:bold;
    font-size:100%;
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
    border-radius: 12px;
  }
  .box-card1 {
    position:absolute;
    height:100%;
    width: 73%;
    border-radius: 12px;
  }
  .box-card2 {
    position:absolute;
    height:95%;
    width: 98%;
    border-radius: 12px;
  }
  .el-card {
  border-radius: 15px;
}
</style>