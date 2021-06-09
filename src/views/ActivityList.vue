<template>
<div>
  <el-container style="border: 1px solid #eee">
    <sysside></sysside>
      <el-main>
          <h1>审核预约记录</h1>
        <el-row>
            <el-button type="primary" plain>全部</el-button>
            <el-button type="primary" plain>待审批</el-button>
            <el-button type="primary" plain>已审批</el-button>
        </el-row>
    
      <el-table :data="tableData" :default-sort = "{prop: 'time', order: 'descending'}">

        <el-table-column prop="organization" sortable label="组织" width="180">
        </el-table-column>
        <el-table-column prop="activity" label="活动名称" width="350">
        </el-table-column>
        <el-table-column prop="ground" sortable label="场地" width="150">
        </el-table-column>
        <el-table-column prop="time" sortable label="时间" width="160">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="100">
        </el-table-column>
        <el-table-column width="80">
            <el-button type="primary">查看</el-button>
        </el-table-column>
        <el-table-column>

        </el-table-column>
      </el-table>
      
  </el-main>
  </el-container>
</div>
</template>

<script>
import Sysside from '@/components/Sysside.vue'

export default {
  name: 'ActivityList',
      components: {
      Sysside
    },
    data() {
      const item = {
        id: '16472',
        organization: '软件学院',
        activity: '年级大会',
        ground: '济事楼434',
        time: '2021-6-25 15:30',
        state: '待审批'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style scoped>
  .el-input {
    width: 600px;
  }
  .el-row {
    text-align: center;
    line-height: 50px;
  }
  .el-main {
    text-align: left;
    line-height: 50px;
    margin-left: 100px;
    margin-right: 100px;
  }
  h1{
    font-size: 25px;
  }

</style>
