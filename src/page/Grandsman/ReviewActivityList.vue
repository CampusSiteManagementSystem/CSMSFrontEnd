<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div class="maintitle">审核预约记录</div>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="待审批" name="panel1">
          <el-table
            :data="
              tableData.filter((item, index, arr) => {
                return item.activityState === '审核中';
              })
            "
            :default-sort="{ prop: 'time', order: 'ascending' }"
            height="480"
          >
            <el-table-column prop="groupname" label="组织">
            </el-table-column>
            <el-table-column prop="activityname" label="活动名称">
            </el-table-column>
            <el-table-column prop="ground" label="场地">
            </el-table-column>
            <el-table-column prop="time" sortable label="时间">
            </el-table-column>
            <el-table-column
              prop="activityState"
              label="状态"
              column-key="activityState"
              :filters="[
                { text: '审核中', value: '审核中' },
                { text: '待举办', value: '待举办' },
                { text: '待反馈', value: '待反馈' },
                { text: '已反馈', value: '已反馈' },
                { text: '被驳回', value: '被驳回' },
              ]"
              :filter-method="filterTag"
              filter-placement="bottom-end"
            >
              <template slot-scope="scope1">
                <el-tag
                  :type="tagType[scope1.row.activityState]"
                  disable-transitions
                >
                  {{ scope1.row.activityState }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <router-link
                  :to="{
                    name: 'OrgActivityInfo',
                    params: { ID: scope.row.activityID },
                  }"
                >
                  <el-button @click="handleClick(scope.row)" type="text"
                    >查看</el-button
                  >
                </router-link>
              </template>
              <router-link to="/GroundsAdmin/ActivityInfo"></router-link>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已审批" name="pane2">
          <el-table
            :data="
              tableData.filter((item, index, arr) => {
                return item.activityState != '审核中';
              })
            "
            :default-sort="{ prop: 'time', order: 'descending' }"
            height="480"
          >
            <el-table-column prop="groupname" label="组织">
            </el-table-column>
            <el-table-column prop="activityname" label="活动名称">
            </el-table-column>
            <el-table-column prop="ground" label="场地">
            </el-table-column>
            <el-table-column prop="time" sortable label="时间">
            </el-table-column>
            <el-table-column
              prop="activityState"
              label="状态"
              column-key="activityState"
              :filters="[
                { text: '审核中', value: '审核中' },
                { text: '待举办', value: '待举办' },
                { text: '待反馈', value: '待反馈' },
                { text: '已反馈', value: '已反馈' },
                { text: '被驳回', value: '被驳回' },
                { text: '已过期', value: '已过期' },
              ]"
              :filter-method="filterTag"
              filter-placement="bottom-end"
            >
              <template slot-scope="scope1">
                <el-tag
                  :type="tagType[scope1.row.activityState]"
                  disable-transitions
                >
                  {{ scope1.row.activityState }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <router-link
                  :to="{
                    name: 'OrgActivityInfo',
                    params: { ID: scope.row.activityID },
                  }"
                >
                  <el-button @click="handleClick(scope.row)" type="text"
                    >查看</el-button
                  >
                </router-link>
              </template>
              <router-link to="/GroundsAdmin/ActivityInfo"></router-link>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { GETActivities } from "../../API/http";
// import store from "../../state/state.js"
export default {
  name: "ActivityList",
  components: {},
  data() {
    return {
      axiosdata: null,
      activeTab: "panel1",
      tableData: [],
      tagType: {
        审核中: "warning",
        待举办: "danger",
        待反馈: "primary",
        已反馈: "success",
        被驳回: "info",
        已过期: "",
      },
    };
  },
  mounted() {
    const that = this;
    console.log("run mounted");
    GETActivities() //应该加accountNumber
      .then((data) => {
        console.log("run GETActivities");
        that.axiosdata = data;
        that.dealWithActivities(that.axiosdata);
        //console.log(that.axiosdata);
      })
      .catch((err) => {
        that.data = err;
      });
  },
  methods: {
    dealWithActivities(data) {
      console.log("run dealwithActivities");
      for (var key in data) {
        for (var i = 0; i < data[key].length; i++) {
          var temp = {
            activityID: "22222",
            time: "2016-05-03",
            activityname: "王小虎",
            groupname: "上海市普陀区金沙江路 1516 弄",
            ground: "同心楼666",
            activityState: "审核中",
          };
          temp.activityID = data[key][i].id;
          temp.time = data[key][i].activityDate.replace("T", " ");
          temp.activityname = data[key][i].name;
          temp.groupname = data[key][i].organizationName;
          temp.ground = data[key][i].groundName;
          temp.activityState = data[key][i].activityState;
          this.tableData.push(temp);
        }
      }
      console.log(this.tableData);
    },
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    handleClick() {},
  },
};
</script>

<style scpoed>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

.maintitle {
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 8px;
}

.detailinfo {
  padding: 15px;
}
.maincard {
  border-radius: 15px;
  height: 100%;
}
</style>
