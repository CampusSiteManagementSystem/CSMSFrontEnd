<template>
  <div>
    <el-card>
      <div>
        <h2>审核组织注册</h2>
      </div>
      <div>
        <el-table :data="tableData">
          <el-table-column label="日期" width="250">
            <template slot-scope="scope">
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
          <el-table-column label="操作" width="200">
            <template>
              <router-link
                to="/SysAdminFrame/GroupVerify"
                tag="el-button"
                type="primary"
                >审核</router-link
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<style scoped>

.el-card {
  height: 100%;
}
</style>


<script>
export default {
  data() {
    return {
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
};
</script>