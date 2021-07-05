<template>
  <div class="maindiv">
    <el-card class="maincard">
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
            <router-link to="/ActivityInfo"><el-button type="primary">查看</el-button></router-link>
        </el-table-column>
        <el-table-column>

        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'ActivityList',
      components: {
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
