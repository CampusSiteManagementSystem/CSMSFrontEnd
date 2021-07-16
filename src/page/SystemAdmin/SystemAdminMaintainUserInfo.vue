<template>
  <div>
    <el-card class="mycard">
 <div slot="header" class="clearfix">
        <el-row type="flex" align="middle">
          <el-col :span="18">
            <span><b>维护用户信息 </b></span>
          </el-col>
          <el-col :span="2" class="buttoncol">
            <el-button size="medium" @click="addUser()" type="primary" plain
            >添加用户</el-button
          >
          </el-col>
          <el-col :span="4">
             <el-input
            clearable
            v-model="toMatch"
            placeholder="请输入用户ID搜索"
            @input="search"
          ></el-input>
          </el-col>
        </el-row>
      </div>

      <!-- <el-row :gutter="1" type="flex" align="middle">
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
      </el-row> -->

      <el-table
        :data="matchList"
        max-height="500"
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
        <el-table-column
          label="身份"
          prop="status"
          :filters="[
            { text: '组织', value: '组织' },
            { text: '学生', value: '学生' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
                <el-tag
                  :type="scope.row.status=='组织'?'primary':'success'"
                  disable-transitions
                >
                  {{ scope.row.status }}
                </el-tag>
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
  height: 100%;
  border-radius: 12px;
}
.buttoncol{
  float:right;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  font-size: 18px;
}

.maintitle {
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 30px;
}
.el-card {
  border-radius: 15px;
}
</style>

<script>
import {
  GETStudents,
  GETOrganizations,
  // DELETEOrganizationsID,
  DELETEStudentsID,
  PUTOrganizations,
} from "../../API/http";

export default {
  mounted() {
    this.fetchData();
  },

  methods: {
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    fetchData: async function () {
      const that = this;
      GETStudents()
        .then((data) => {
          console.log("这是从后端获取的学生信息", data);
          that.axiosdata = data;
          for (var i = 0; i < data.length; i++) {
            var temp = {
              name: "李",
              accountNumber: "180034",
              status: "学生",
            };

            temp.name = data[i].name;
            temp.accountNumber = data[i].accountNumber;

            that.tableData.push(temp);
            that.matchList = that.tableData;
          }
        })
        .catch((err) => {
          console.log(err);
          that.$message("学生数据请求错误");
        });

      console.log("这是已经加好的学生信息", that.matchList);

      GETOrganizations()
        .then((data) => {
          that.axiosdata = data;
          // console.log("这是从后端获取的组织信息", data);

          // console.log("这是信息长度", data.length);

          for (var j = 0; j < data.length; j++) {
            var temp = {
              name: "软件学院",
              accountNumber: "12234",
              status: "组织",
              state: "0",
            };

            temp.name = data[j].name;
            temp.accountNumber = data[j].accountNumber;
            temp.state = data[j].state;

            console.log("这是每次获得的temp数据", j,data[j]);
            console.log("这是每个组织的state", j,data[j].state);

            if (data[j].state == "通过") {
              // console.log("这是要添加的组织信息", temp.state);
              that.matchList.push(temp);
              // console.log("这是通过的组织信息", that.matchList);
            }

            // that.matchList += that.tableData;
            // that.matchList.status = "组织";
            //console.log("测试",that.$route.params);
            // if (that.$route.params.state != "") {
            //   that.toMatchStatus = that.$route.params.building;
            //   that.searchGroup();
            // }
          }
        })
        .catch((err) => {
          console.log(err);
          that.$message("组织数据请求错误");
        });

      // that.matchList = that.tableData;
    },
    handleChange() {
      this.$router.push({ path: "UserModify" });
    },

    // searchGroup: function () {
    //   this.toMatchStatus = "通过";
    //   console.log("aaaaaaaaaaa",this.toMatchStatus)
    //   if (this.toMatchStatus == "") {
    //     this.matchList = this.tableData;
    //   } else {
    //     console.log("searchGroup函数中的tableData", this.tableData);
    //     this.matchList = [];
    //     for (var i = 0; i < this.tableData.length; i++) {
    //       console.log("aaaaa", this.tableData[i].state);
    //       if (this.tableData[i].state == "通过") {
    //         this.matchList.push(this.tableData[i]);
    //       }
    //     }
    //   }
    // },

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
      PUTOrganizations({accountNumber:id,state:"未审批"})
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
              if (row.status == "组织") {
              that.deleteOrg(row.accountNumber);
            } else {
              that.deleteStu(row.accountNumber);
            }
              break;
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
  data() {
    return {
      axiosdata: null,
      //axiosdata2: null,
      toMatch: "",
      toMatchStatus: "",
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
};
</script>