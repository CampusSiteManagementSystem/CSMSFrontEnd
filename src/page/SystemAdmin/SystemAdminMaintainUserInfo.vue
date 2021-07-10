<template>
  <div>
    <el-card class="mycard">
      <div>
        <h2>用户信息维护</h2>
      </div>

      <div class="search">
        <el-select v-model="value1" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <el-select
          class="keysearch"
          v-model="value2"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
        >
        </el-select>
        <router-link
          to="/accountmodifylist"
          tag="el-button"
          type="primary"
          icon="el-icon-search"
          >搜索</router-link
        >
      </div>

      <el-table :data="tableData">
        <el-table-column label="账户" width="400">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="400">
          <template>
            <router-link
              to="/SysAdminFrame/AccountModify"
              tag="el-button"
              type="primary"
              >编辑信息</router-link
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped>
html,
body,
.el-card {
  height: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",

      tableData: [
        {
          name: "公关部",
        },
        {
          name: "学生综合素质发展中心",
        },
        {
          name: "社发管",
        },
        {
          name: "钢琴协会",
        },
        {
          name: "公关部",
        },
        {
          name: "学生综合素质发展中心",
        },
      ],

      options: [
        {
          value: "选项1",
          label: "公关部",
        },
        {
          value: "选项2",
          label: "钢琴协会",
        },
        {
          value: "选项3",
          label: "定向越野协会",
        },
      ],
    };
  },
};
</script>