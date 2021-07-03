<template>
    <el-container class="outcontainer" style="height=100%">
    <el-header>查看场地</el-header>

    <!-- 选择场地类型 -->
      <el-cascader :options="options" clearable></el-cascader>


      <el-container>
           <el-aside width="200px">
               
           </el-aside>
           <el-container>
           <!-- 表格项 -->
            <el-table
            :data="tableData"
            style="width: 100%">

            <!-- 场地名字 -->
            <el-table-column
                prop="name"
                label="场地名字">
            </el-table-column>
            
            <!-- 场地描述 -->
            <el-table-column
                prop="description"
                label="场地描述"
                width="450">
            </el-table-column>

            <!-- 场地种类 -->
            <el-table-column
                prop="type"
                label="场地种类">
            </el-table-column>

            <!-- 面积/平米 -->
             <el-table-column
                prop="area"
                label="面积/平米"
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
<style scoped>
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

             //选择器的返回值
            options: [{
          value: 'outdoor',
          label: '室外',
          
        }, {
          value: 'indoor',
          label: '室内',
          children: [{
            value: 'basic',
            label: '普通教室'
          }, {
            value: 'large',
            label: '阶梯教室',
          }, {
            value: 'smart',
            label: '智慧教室'
            
          }]
        }],
        
          //表格的返回值
          tableData: [{
            name: '♂♂摔跤室',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出♂...',
            type: 1,
            area: 520.1314
          },{
            name: '♂♂摔跤室',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出♂...',
            type: 1,
            area: 520.1314
          }, {
            name: '♂♂摔跤室',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出♂...',
            type: 1,
            area: 520.1314
          }, {
            name: '♂♂摔跤室',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出♂...',
            type: 1,
            area: 520.1314
          }, {
            name: '♂♂摔跤室',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出♂...',
            type: 1,
            area: 520.1314
          }
          ]
        }
      }
    }
  </script>