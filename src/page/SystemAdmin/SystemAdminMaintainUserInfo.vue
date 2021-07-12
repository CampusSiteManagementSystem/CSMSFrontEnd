<template>
  <div>
    <el-card class="mycard">
      <el-row>
        <el-col :span="18">
        <div class="main-title">维护用户信息</div>
        </el-col>

        <el-col :span="6">
          <el-input
            v-model="toMatch"
            placeholder="请输入用户ID搜索"
            @input="search"
          ></el-input>
        </el-col>
      </el-row>

      <el-table :data="tableData" max-height="480" stripe style="width: 100%"
      :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}">
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
      toMatch: "",
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