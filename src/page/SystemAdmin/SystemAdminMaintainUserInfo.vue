<template>
  <div>
    <el-card class="mycard">
      <el-row :gutter="1" type="flex" align="middle">
        <el-col :span="16">
          <div class="maintitle">维护用户信息</div>
        </el-col>
        <el-col :span="3">
          <el-button size="medium" @click="addUser()" type="primary" plain
            >添加用户</el-button
          >
        </el-col>
        <el-col :span="5">
          <el-input
            clearable
            v-model="toMatch"
            placeholder="请输入用户ID搜索"
            @input="search"
          ></el-input>
        </el-col>
      </el-row>

      <el-table
        :data="matchList"
        max-height="480"
        stripe
        style="width: 100%"
        :header-row-style="{ height: '20px' }"
        :cell-style="{ padding: '5px' }"
      >
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
          <template slot-scope="scope">
            <el-button size="small" @click="handleChange()">编辑信息</el-button>
            <el-button
              size="small"
              type="danger"
              @click="userdelete(scope.$index, scope.row)"
              >删除</el-button
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
  /* height: 100%; */
  border-radius: 12px;
}

.maintitle {
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      toMatch: "",
      matchList: [],
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

  created() {
    this.matchList = this.tableData;
  },

  methods: {
    handleChange() {
      this.$router.push({ path: "UserModify" });
    },

    addUser() {
      this.$router.push({ path: "AddUser" });
    },

    userdelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          for (var i = 0; i < this.tableData.length; i++) {
            if (this.tableData[i].id == row.id) {
              this.tableData.splice(i, 1);
              break;
            }
          }
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.tableData;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].id.search(this.toMatch) != -1) {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },
  },
};
</script>