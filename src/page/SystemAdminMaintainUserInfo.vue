<template>
  <div>
    <div>
      <h2>用户信息维护</h2>
    </div>
    <div class="search">
      <el-select v-model="value" filterable placeholder="请选择">
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
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
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
      <el-table-column label="账户" width="500">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="500">
        <template>
          <router-link to="/SystemAdminFrame/SystemAdminAccountModify" tag="el-button" type="primary"
            >编辑信息</router-link
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        {
          name: "社发管",
        },
        {
          name: "钢琴协会",
        },
      ],
    };
  },
};
</script>