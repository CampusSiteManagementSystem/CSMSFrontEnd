<template>
  <div class="list">
      <h2>待审批组织</h2>
    <el-table :data="tableData" height="450" style="width: 100%" border>
      <el-table-column label="日期" width="200">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="组织" width="300">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>组织: {{ scope.row.name }}</p>
            <p>注册时间: {{ scope.row.date }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template>
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >审核
          </el-button> -->
          <router-link to="/groupverify" tag='el-button' type="primary">审核</router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      isCollapse: true,

      tableData: [
        {
          date: "2016-05-02",
          name: "公关部",
        },
        {
          date: "2016-05-04",
          name: "学生综合素质发展中心",
        },
        {
          date: "2016-05-01",
          name: "社发管",
        },
        {
          date: "2016-05-03",
          name: "钢琴协会",
        },
        {
          date: "2016-05-02",
          name: "公关部",
        },
        {
          date: "2016-05-04",
          name: "学生综合素质发展中心",
        },
        {
          date: "2016-05-01",
          name: "社发管",
        },
        {
          date: "2016-05-03",
          name: "钢琴协会",
        },
      ],
    };
  },
  methods: {
handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>


<style scoped>
.list {
  height: 100%;
  width: 100%;
   position:absolute;
   /* left:300px;
   top:90px; */
  display: flex;
  /* justify-content: center;
  align-items: center; */
 
}

 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

h2{
    color:rgb(0, 0, 0);
    position:relative;
    left:100px;
    top:-260px;
}

</style>