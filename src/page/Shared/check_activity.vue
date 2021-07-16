<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div slot="header" class="clearfix">
        <el-row type="flex" align="middle">
          <el-col :span="18">
            <span
              ><b>{{
                this.$route.params.ID == "AllActivities"
                  ? "全部活动"
                  : this.orgName + "举办的活动"
              }}</b></span
            >
          </el-col>
          <el-col :span="6">
            <el-input
              clearable
              v-model="toMatch"
              placeholder="输入活动名称以搜索"
              @input="search"
            ></el-input>
          </el-col>
        </el-row>
      </div>
      <!-- <el-row>
        <el-col :span="18">
          <div>
            <h2>
              {{
                this.$route.params.ID == "AllActivities"
                  ? "全部活动"
                  : this.orgName + "举办的活动"
              }}
            </h2>
          </div>
        </el-col>
        <el-col :span="6">
          <el-input
            clearable
            v-model="toMatch"
            placeholder="输入活动名称以搜索"
            @input="search"
          ></el-input>
        </el-col>
      </el-row> -->
      <el-tabs v-model="activeTab" :before-leave="leaveTab">
        <el-tab-pane label="未举办" name="pane1">
          <el-table
            :header-row-style="{ height: '10px' }"
            :cell-style="{ padding: '5px' }"
            :data="matchList"
            :default-sort="{ prop: 'startTime', order: 'ascending' }"
            height="450"
            stripe
          >
            <el-table-column prop="name" label="活动名称"> </el-table-column>
            <el-table-column label="描述">
              <template slot-scope="scope">
                <div>
                  {{
                    scope.row.description != null ? (scope.row.description.length > 10
                      ? scope.row.description.substr(0, 10) + "..."
                      : scope.row.description) : null
                  }}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="organizationName" label="举办组织">
            </el-table-column>
            <el-table-column prop="startTime" label="时间" sortable>
            </el-table-column>
            <el-table-column prop="groundName" label="地点"> </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="viewInfo(scope.row)"
                  type="text"
                  size="small"
                >
                  查看详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已举办" name="pane2">
          <el-table
            :header-row-style="{ height: '10px' }"
            :cell-style="{ padding: '5px' }"
            :data="matchList"
            :default-sort="{ prop: 'startTime', order: 'ascending' }"
            height="450"
            stripe
          >
            <el-table-column prop="name" label="活动名称"> </el-table-column>
            <el-table-column prop="description" label="描述"> </el-table-column>
            <el-table-column prop="organizationName" label="举办组织">
            </el-table-column>
            <el-table-column prop="startTime" label="时间" sortable>
            </el-table-column>
            <el-table-column prop="groundName" label="地点"> </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="viewInfo(scope.row)"
                  type="text"
                  size="small"
                >
                  查看详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      title="活动详情"
      class="dialog"
    >
      <div class="content">
        <p><b>活动名称：</b>{{ siteSelected.name }}</p>
        <p><b>举办组织：</b>{{ siteSelected.organizationName }}</p>
        <p><b>开始时间：</b>{{ siteSelected.startTime }}</p>
        <p><b>活动时长：</b>{{ siteSelected.duration }}分钟</p>
        <p><b>活动地点：</b>{{ siteSelected.groundName }}</p>
        <p><b>参与人数：</b>{{ siteSelected.participantNum }}</p>
        <p><b>活动描述：</b>{{ siteSelected.description }}</p>
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
.el-card {
  border-radius: 15px;
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
.el-aside {
  background-color: white;
}
.el-dialog__header {
  border-bottom: 1px solid #ebebeb;
}
.detailinfo {
  padding: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      nextTab: "",
      orgName: "",
      errored: false,
      toMatch: "",
      tableData1: [],
      tableData2: [],
      matchList: [],
      siteSelected: {
        id: "",
        name: "",
        accountNumber: "",
        organizationName: "",
        activityDate: "",
        startTime: "",
        participantNum: 0,
        description: "",
        additionalRequest: "",
        duration: 0,
        activityState: "",
        groundId: "",
        groundName: "",
        isGroundIndoor: true,
      },
      dialogVisible: false,
      activeTab: "pane1",
    };
  },
  mounted() {
    var axios = require("axios");
    var url =
      this.$route.params.ID == "AllActivities"
        ? "http://139.196.114.7/api/activities"
        : "http://139.196.114.7/api/activities?orgId=" + this.$route.params.ID;
    var config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
    };

    axios(config)
      .then((response) => {
        this.tableData1 = [];
        this.tableData2 = [];
        console.log(response.data.待反馈);
        if ("待举办" in response.data) {
          for (let a of response.data.待举办) {
            a.startTime =
              a.startTime.substr(0, 10) + " " + a.startTime.substr(11, 8);
            this.tableData1.push(a);
          }
        }
        if ("待反馈" in response.data) {
          for (let a of response.data.待反馈) {
            a.startTime =
              a.startTime.substr(0, 10) + " " + a.startTime.substr(11, 8);
            this.tableData2.push(a);
          }
        }
        if ("已反馈" in response.data) {
          for (let a of response.data.已反馈) {
            a.startTime =
              a.startTime.substr(0, 10) + " " + a.startTime.substr(11, 8);
            this.tableData2.push(a);
          }
        }
        this.matchList = this.tableData1;
      })
      .catch(function (error) {
        console.log(error);
      });

    if (this.$route.params.ID != "AllActivities") {
      var url1 =
        "http://139.196.114.7/api/Organizations/" + this.$route.params.ID;
      var config1 = {
        method: "get",
        url: url1,
        headers: {},
      };

      axios(config1)
        .then((response) => {
          this.orgName = response.data.name;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  methods: {
    viewInfo(row) {
      this.siteSelected = row;
      this.dialogVisible = true;
    },
    leaveTab(activeName, oldActiveName) {
      console.log(activeName, oldActiveName);
      if (activeName == "pane1") {
        this.nextTab = "pane1";
        this.search();
        this.nextTab = "";
      } else {
        this.nextTab = "pane2";
        this.search();
        this.nextTab = "";
      }
    },
    search: function () {
      if (
        (this.activeTab == "pane1" && this.nextTab == "") ||
        this.nextTab == "pane1"
      ) {
        if (this.toMatch == "") {
          this.matchList = this.tableData1;
        } else {
          this.matchList = [];
          for (var i = 0; i < this.tableData1.length; i++) {
            if (this.tableData1[i].name.search(this.toMatch) != -1) {
              this.matchList.push(this.tableData1[i]);
            }
          }
        }
      } else if (
        (this.activeTab == "pane2" && this.nextTab == "") ||
        this.nextTab == "pane2"
      ) {
        if (this.toMatch == "") {
          this.matchList = this.tableData2;
        } else {
          this.matchList = [];
          for (var j = 0; j < this.tableData2.length; j++) {
            if (this.tableData2[j].name.search(this.toMatch) != -1) {
              this.matchList.push(this.tableData2[j]);
            }
          }
        }
      }
      console.log(this.nextTab);
    },
  },
};
</script>