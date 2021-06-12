<template>
    <el-container class="outcontainer" style="height=100%">
    <el-header>查看活动</el-header>

    

    <!-- 选择活动类型 -->
      <el-select v-model="value" placeholder="活动类型">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
    </el-option>
    </el-select>

    <el-select v-model="value" placeholder="选择排序方式">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
    </el-option>
    </el-select>


      <el-container>
           <el-aside width="200px">
               
           </el-aside>
           <el-container>
           <!-- 表格项 -->
            <el-table
            :data="tableData"
            style="width: 100%">

            <!-- 活动名字 -->
            <el-table-column
                prop="name"
                label="活动名字">
            </el-table-column>
            
            <!-- 活动描述 -->
            <el-table-column
                prop="description"
                label="活动描述"
                width="450">
            </el-table-column>

            <!-- 举办组织 -->
            <el-table-column
                prop="host"
                label="举办组织">
            </el-table-column>

            <!-- 举办时间 -->
             <el-table-column
                prop="time"
                label="举办时间"
                width="250"
                align="center">
            </el-table-column>

            <!-- 举办地点 -->
            <el-table-column
                prop="location"
                label="举办地点"
                align="center">
            </el-table-column>

             <!-- 查看详情 -->
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                </template>
                </el-table-column>
            
            </el-table>

            <!-- 翻页器 -->
            <el-footer height="30px">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </el-footer>
        </el-container>

        </el-container>
        <el-container>

        </el-container>
    </el-container>
 </template>

<!-- 布局容器的style -->
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer {
    background-color: white;
    color: blue;
    text-align: center;
    line-height: 20px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

  <script>
    export default {
      data() {
        return {
        
         //选择器1的返回值
            options1: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '已举办'
        }, {
          value: '选项3',
          label: '未举办'
        }],
            
             

        //选择器2的返回值
            options2: [{
          value: '选项1',
          label: '最新'
        }, {
          value: '选项2',
          label: '最远'
        }],
        
          //表格的返回值
          tableData: [{
            name: '批评大会',
            description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
            host: '德育办公室',
            time: '2021-5-28 14：30',
            location: '129礼堂'
          }, {
            name: '批评大会',
            description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
            host: '德育办公室',
            time: '2021-5-28 14：30',
            location: '129礼堂'
          }, {
            name: '批评大会',
            description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
            host: '德育办公室',
            time: '2021-5-28 14：30',
            location: '129礼堂'
          }, {
            name: '批评大会',
            description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
            host: '德育办公室',
            time: '2021-5-28 14：30',
            location: '129礼堂'
          }, {
            name: '批评大会',
            description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
            host: '德育办公室',
            time: '2021-5-28 14：30',
            location: '129礼堂'
          }
          ]
        }
      }
    }
  </script>