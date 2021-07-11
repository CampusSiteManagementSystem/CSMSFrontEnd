<template>
  <div>
    <el-card class="mycard">
      <div>
        <h2>用户信息维护</h2>
      </div>
      <div class="mysearch">
        <el-col :span="6">
          <el-input
            v-model="toMatch"
            placeholder="请输入用户ID搜索"
            @input="search"
          ></el-input>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleContentChange"
            >搜索</el-button
          >
        </el-col>
      </div>

      <el-table :data="tableData" max-height="480" style="width: 100%">
        <el-table-column label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="账户">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
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
.mycard {
  height: 100%;
  border-radius: 12px;
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
          id: "0000",
          name: "公关部",
        },
        {
          id: "0001",
          name: "学生综合素质发展中心",
        },
        {
          id: "0003",
          name: "社发管",
        },
        {
          id: "1003",
          name: "王某",
        },
        {
          id: "1007",
          name: "李某",
        },
        {
          id: "1010",
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
    handleContentChange() {},

    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.tableData;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].details.search(this.toMatch) != -1) {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },
  },
};
</script>