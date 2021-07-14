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
        <el-table-column label="ID" prop="accountNumber">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.accountNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="身份" prop="status">
          <template slot-scope="scope">
            <span>{{ scope.row.status }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户名称" prop="name">
          <template slot-scope="scope">
            <span style="margin-left: ">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="small" @click="handleChange()">编辑信息</el-button> -->
            <div v-if="scope.row.status == '组织'">
              <router-link
                :to="{
                  ////////////name不可以 path可以？
                  path: 'UserModify',
                  //name:'SystemAdminUserModify',
                  query: {
                    accountNumber: scope.row.accountNumber,
                  },
                }"
                size="small"
                type="primary"
                tag="el-button"
                @click.native="
                  uhandleEdit(scope.row.accountNumber, scope.$index)
                "
                >编辑信息</router-link
              >
              <el-button
                size="small"
                type="danger"
                @click="userdelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </div>
            <div v-else>
              <router-link
                :to="{
                  ////////////name不可以 path可以？
                  path: 'StuModify',
                  //name:'SystemAdminUserModify',
                  query: {
                    accountNumber: scope.row.accountNumber,
                  },
                }"
                size="small"
                type="primary"
                tag="el-button"
                @click.native="
                  uhandleEdit(scope.row.accountNumber, scope.$index)
                "
                >编辑信息</router-link
              >
              <el-button
                size="small"
                type="danger"
                @click="userdelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </div>
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
import {
  GETStudents,
  GETOrganizations,
  DELETEOrganizationsID,
  DELETEStudentsID,
} from "../../API/http";

export default {
  created() {
    GETStudents()
      .then((data) => {
        this.axiosdata = data;
        for (var i = 0; i < data.length; i++) {
          var temp = {
            name: "李",
            accountNumber: "180034",
            status: "学生",
          };

          temp.name = data[i].name;
          temp.accountNumber = data[i].accountNumber;

          this.tableData.push(temp);

          this.matchList = this.tableData;
        }
      })
      .catch((err) => {
        console.log(err);
        this.$message("学生数据请求错误");
      });
    GETOrganizations()
      .then((data) => {
        this.axiosdata = data;
        for (var i = 0; i < data.length; i++) {
          var temp = {
            name: "软件学院",
            accountNumber: "12234",
            status: "组织",
          };

          temp.name = data[i].name;
          temp.accountNumber = data[i].accountNumber;
          this.tableData.push(temp);

          this.matchList = this.tableData;
          this.matchList.status = "组织";
        }
      })
      .catch((err) => {
        console.log(err);
        this.$message("组织数据请求错误");
      });

    this.matchList = this.tableData;
  },

  data() {
    return {
      axiosdata: null,
      toMatch: "",
      matchList: [],
      tableData: [],

      status: "",

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
    handleChange() {
      this.$router.push({ path: "UserModify" });
    },

    addUser() {
      this.$router.push({ path: "AddUserTest" });
    },
    deleteStu(id) {
      DELETEStudentsID(id)
        .then(() => {
          console.log("删除学生成功");
        })
        .catch((err) => {
          console.log(err);
          this.$message("删除学生错误");
        });
    },
    deleteOrg(id) {
      DELETEOrganizationsID(id)
        .then(() => {
          console.log("删除组织成功");
        })
        .catch((err) => {
          console.log(err);
          this.$message("删除组织错误");
        });
    },

    userdelete(index, row) {
      const that = this;
      console.log(index, row);
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          for (var i = 0; i < that.tableData.length; i++) {
            if (that.tableData[i].accountNumber == row.accountNumber) {
              that.tableData.splice(i, 1);
              break;
            }

            if (row.status == '组织') {
              that.deleteOrg(row.accountNumber);
            } else {
              that.deleteStu(row.accountNumber);
            }
          }
          that.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          that.$message({
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
          if (this.tableData[i].accountNumber.search(this.toMatch) != -1) {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },

    uhandleEdit() {
      console.log("handleedit");
      console.log(this.$route);
      this.childPage = this.$route.name == "SystemAdminGroupVerify";
    },
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "uhandleEdit", //getOrderInfo为自定义方法
  },
};
</script>