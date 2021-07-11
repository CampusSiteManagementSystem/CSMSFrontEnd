<template>
  <div>
    <el-card class="mycard">
      <div>
        <h2>用户信息维护</h2>
      </div>

      <!-- <div class="search">
        <el-select v-model="value1" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <router-link
          to="/accountmodifylist"
          tag="el-button"
          type="primary"
          icon="el-icon-search"
          >搜索</router-link
        >
      </div> -->

      <div class="search">
        <el-cascader
          :options="options"
          :props="{ multiple: true, checkStrictly: true }"
          clearable
        ></el-cascader>
        <el-button type="primary" icon="el-icon-search" @click="handleContentChange"
          >搜索</el-button
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
              to="/SystemAdminFrame/SystemAdminAccountModify"
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
          name: "王某",
        },
        {
          name: "李某",
        },
        {
          name: "张某",
        },
      ],

      options: [
        {
          value: "option1",
          label: "组织",
        },
        {
          value: "option2",
          label: "学生",
        },
      ],
    };
  },
  methods: {
    handleContentChange() {
      
    },
  },
};
</script>