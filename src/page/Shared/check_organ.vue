<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div slot="header" class="clearfix">
        <el-row type="flex" align="middle">
          <el-col :span="18">
            <span><b>查看组织 </b></span>
          </el-col>
          <el-col :span="6">
            <el-input
              clearable
              v-model="toMatch"
              placeholder="输入组织名称以搜索"
              @input="search"
            ></el-input>
          </el-col>
        </el-row>
      </div>

      <el-table
        :header-row-style="{ height: '10px' }"
        :cell-style="{ padding: '5px' }"
        :data="matchList"
        :default-sort="{ prop: 'time', order: 'ascending' }"
        height="500"
        stripe
      >
        <el-table-column prop="name" label="组织名称"> </el-table-column>
        <el-table-column prop="detailInfo" label="组织描述">
          <template slot-scope="scope">
            <div>
              {{
                scope.row.detailInfo != null ? (scope.row.detailInfo.length > 10
                  ? scope.row.detailInfo.substr(0, 10) + "..."
                  : scope.row.detailInfo) : null
              }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="functionary" label="负责人"> </el-table-column>
        <el-table-column prop="telephone" label="联系方式" align="center">
        </el-table-column>
        <el-table-column prop="type" label="组织类型" align="center">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="viewInfo(scope.row)" type="text" size="small"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" width="50%" class="dialog">
      <span slot="title">
        <h3>{{ orgSelected.name }}</h3>
      </span>
      <div class="content">
        <el-row>
          <el-col :span="8">
            <div class="image">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                class="pic"
              />
            </div>
          </el-col>
          <el-col :span="16">
            <p><b>组织账号：</b>{{ orgSelected.accountNumber }}</p>
            <p>
              <b>组织类型：</b>{{ orgSelected.type }}
            </p>
            <p><b>邮箱：</b>{{ orgSelected.emailAddress }}</p>
            <p><b>负责人：</b>{{ orgSelected.functionary }}</p>
            <p><b>联系电话：</b>{{ orgSelected.telephone }}</p>
            <p><b>组织简介：</b>{{ orgSelected.detailInfo }}</p>
            <router-link
              :to="{
                name: toRooterName,
                params: { ID: orgSelected.accountNumber },
              }"
            >
              <el-button type="text">查看此组织举办的活动</el-button>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<style scpoed>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.maincard {
  height: 100%;
}
.el-card {
  border-radius: 15px;
}
.maintabs {
  border-radius: 8px;
}
.content {
  height: 320px;
}
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
}
.el-dialog__header {
  border-bottom: 1px solid #ebebeb;
}
.detailinfo {
  padding: 15px;
}
</style>

  <script>
import store from "../../state/state.js";

export default {
  data() {
    return {
      toRooterName:
        store.state.membertype == "student"
          ? "ViewActivities"
          : "ViewActivitiesForOrg",
      toMatch: "",
      matchList: [],
      dialogVisible: false,
      orgSelected: {
        accountNumber: "asdfng ",
        name: "string",
        credit: 100,
        detailInfo: "string",
        emailAddress: "string",
        joinDate: "2021-07-06T06:40:42",
        functionary: "string",
        telephone: "string",
        type: "0",
        state: "0",
      },
      //表格的返回值
      tableData: [],
    };
  },
  mounted() {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://139.196.114.7/api/Organizations",
      headers: {},
    };

    axios(config)
      .then((response) => {
        this.tableData = [];
        for (let org of response.data) {
          this.tableData.push(org);
        }
        this.matchList = this.tableData;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  methods: {
    viewInfo(row) {
      this.orgSelected = row;
      this.dialogVisible = true;
    },
    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.tableData;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].name.search(this.toMatch) != -1) {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },
  },
};
</script>