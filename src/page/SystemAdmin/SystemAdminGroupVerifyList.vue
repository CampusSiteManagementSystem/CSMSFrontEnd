<template>
  <div>
    <el-card style="border-radius: 12px">
      <div class="main-title">审核组织注册</div>
      <div>
        <el-table
          :data="tableData"
          max-height="480"
          stripe
          style="width: 100%"
          :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}"
        >
          <el-table-column label="负责人">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.person }}</span>
            </template>
          </el-table-column>
          <el-table-column label="组织">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>组织: {{ scope.row.name }}</p>
                <p>申请人: {{ scope.row.person }}</p>
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
/* .el-card {
  height: 100%;
} */
</style>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          person: "呵呵",
          name: "公关部",
        },
        {
          person: "呵呵",
          name: "学生综合素质发展中心",
        },
        {
          person: "呵呵",
          name: "社发管",
        },
        {
          person: "嘿嘿",
          name: "钢琴协会",
        },
        {
          person: "呵呵",
          name: "公关部",
        },
        {
          person: "嘻嘻",
          name: "学生综合素质发展中心",
        },
        {
          person: "哈哈",
          name: "社发管",
        },
        {
          person: "haha",
          name: "钢琴协会",
        },
      ],
    };
  },
};
</script>