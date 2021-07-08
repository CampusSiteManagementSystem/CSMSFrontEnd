<template>
  <div class="maindiv">
    <el-card class="maincard">
    <h1 class="maintitle">查看组织</h1>
      <el-table
        :data="tableData"
        :default-sort = "{prop: 'time', order: 'ascending'}"
        height="450"
      >
        <el-table-column
            prop="name"
            label="组织名称">
        </el-table-column>
        <el-table-column
            prop="description"
            label="组织描述"
            width="450">
        </el-table-column>
        <el-table-column
            prop="manager"
            label="负责人">
        </el-table-column>
          <el-table-column
            prop="telephone"
            label="联系方式"
            width="250"
            align="center">
        </el-table-column>
        <el-table-column
            prop="type"
            label="组织类型"
            align="center">
        </el-table-column>
        <el-table-column
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style>
  html,
  body,
  #app,
  .el-container {
    padding: 0px;
    margin: 0px;
    height: 100%;
  }

  .el-header {
    background-color: white;
  }
  .el-aside {
    background-color: white;
  }
  .el-main {
    background-color: rgb(237, 241, 245);
    height: 100%;
  }
  .maintitle {
    text-align: center;
    font-size: 27px;
  }
  .maintabs {
    border-radius: 8px;
  }
  .el-card {
    height: 100%;
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
  .header-row {
    background-color: rgb(158, 29, 29);
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