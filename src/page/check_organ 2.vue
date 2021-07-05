<template>
    <el-container class="outcontainer" style="height=100%">
    <el-header>查看组织</el-header>

    <!-- 选择组织类型 -->
      <el-select v-model="value" placeholder="选择组织类型">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :size='small'
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

            <!-- 组织名字 -->
            <el-table-column
                prop="name"
                label="组织名字">
            </el-table-column>
            
            <!-- 组织描述 -->
            <el-table-column
                prop="description"
                label="组织描述"
                width="450">
            </el-table-column>

            <!-- 负责人 -->
            <el-table-column
                prop="manager"
                label="负责人">
            </el-table-column>

            <!-- 联系方式 -->
             <el-table-column
                prop="telephone"
                label="联系方式"
                width="250"
                align="center">
            </el-table-column>

            <!-- 组织类型 -->
            <el-table-column
                prop="type"
                label="组织类型"
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

             //选择器的返回值
            options: [{
          value: '选项1',
          label: '类型1'
        }, {
          value: '选项2',
          label: '类型2'
        }, {
          value: '选项3',
          label: '类型3'
        }, {
          value: '选项4',
          label: '类型4'
        }, {
          value: '选项5',
          label: '类型5'
        }],
        
          //表格的返回值
          tableData: [{
            name: '躺平什维克',
            description: '打倒压在tj人民头上的三座大山——报告主义、ppt主义、ui主义',
            manager: '躺平代表',
            telephone: '120',
            type: 1
          }, {
            name: '躺平什维克',
            description: '打倒压在tj人民头上的三座大山——报告主义、ppt主义、ui主义',
            manager: '躺平代表',
            telephone: '120',
            type: 1
          }, {
            name: '躺平什维克',
            description: '打倒压在tj人民头上的三座大山——报告主义、ppt主义、ui主义',
            manager: '躺平代表',
            telephone: '120',
            type: 1
          }, {
            name: '躺平什维克',
            description: '打倒压在tj人民头上的三座大山——报告主义、ppt主义、ui主义',
            manager: '躺平代表',
            telephone: '120',
            type: 1
          }, {
            name: '躺平什维克',
            description: '打倒压在tj人民头上的三座大山——报告主义、ppt主义、ui主义',
            manager: '躺平代表',
            telephone: '120',
            type: 1
          }
          ]
        }
      }
    }
  </script>