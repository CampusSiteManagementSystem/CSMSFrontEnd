<template>
  <div>
    <el-card class="miancard" style="border-radius: 12px">
      <div slot="header" class="clearfix">
            <span><b>审核组织注册</b></span>
          </div>
      <div>
        <el-table 
          :data="matchList"
          height="520"
          stripe
          style="width: 100%"
          :header-row-style="{ height: '20px' }"
          :cell-style="{ padding: '5px' }"
        >
          <el-table-column prop="functionary" label="负责人">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.functionary }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="accountNumber" label="ID"> 
             <template slot-scope="scope">
              <span>{{ scope.row.accountNumber }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="name" label="组织">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>组织: {{ scope.row.name }}</p>
                <p>申请人: {{ scope.row.functionary }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <router-link
                :to="{
                  ////////////name不可以 path可以？
                  path: 'GroupVerify',
                  //name:'SystemAdminGroupVerify',
                  query: {
                    accountNumber: scope.row.accountNumber,
                  },
                }"
                size="medium"
                type="primary"
                tag="el-button"
                @click.native="
                  shandleEdit(scope.row.accountNumber, scope.$index)
                "
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
.maintitle {
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 30px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.el-card {
  border-radius: 15px;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  font-size: 18px;
}
.miancard{
  height: 100%;
}
</style>


<script>
import { GETOrganizations } from "../../API/http";

export default {
  created() {

    GETOrganizations()
      .then((data) => {
        this.axiosdata = data;
        for (var i = 0; i < data.length; i++) {
          var temp = {
            name: "软件学院",
            functionary: "他",
            accountNumber: "12234",
            state: "未审批",
          };

          temp.functionary = data[i].functionary;
          temp.name = data[i].name;
          temp.accountNumber = data[i].accountNumber;
          temp.state = data[i].state;
          this.tableData.push(temp);

          this.matchList = this.tableData;
          if (this.$route.params.building != "") {
            this.toMatch = this.$route.params.building;
            this.search();
          }
        }
      })
      .catch((err) => {
        console.log(err);
        this.$message("未审批组织数据请求错误");
      });
  },
 
  methods: {
    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.tableData;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].state == "未审批") {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },

    shandleEdit() {
      console.log("handleedit");
      console.log(this.$route);
      this.childPage = this.$route.name == "SystemAdminGroupVerify";
    },
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "shandleEdit", //getOrderInfo为自定义方法
  },

  data() {
    return {
      toMatch: "",
      matchList: [],
      tableData: [],
      axiosdata: null,
    };
  },
};
</script>