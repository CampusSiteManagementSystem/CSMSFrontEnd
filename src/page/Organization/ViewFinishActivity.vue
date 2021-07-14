<template>
  <div class="page">
    <div class="background">
      <el-card>
        <div>
          <h2>完成活动列表</h2>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="待反馈" name="third">
            <el-table
              :header-row-style="{ height: '20px' }"
              :cell-style="{ padding: '5px' }"
              ref="filterTable"
              :data="tableData"
              height="465"
              stripe
              highlight-current-row
              @current-change="handleCurrentChange1"
              style="width: 100%"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form
                    label-position="left"
                    class="demo-table-expand"
                    label-width="150px"
                  >
                    <el-form-item label="活动ID">
                      <label slot="label">活&nbsp;&nbsp;动&nbsp;&nbsp;ID</label>
                      <span>{{ props.row.ID }}</span>
                    </el-form-item>
                    <el-form-item label="活动名称">
                      <label slot="label">活动名称</label>
                      <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="活动时间">
                      <label slot="label">活动时间</label>
                      <span>{{ props.row.date }}</span>
                    </el-form-item>
                    <el-form-item label="申请地点">
                      <label slot="label">申请地点</label>
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="参加人数">
                      <label slot="label">参加人数</label>
                      <span>{{ props.row.people }}</span>
                    </el-form-item>
                    <el-form-item label="特殊要求">
                      <label slot="label">特殊要求</label>
                      <span>{{ props.row.require }}</span>
                    </el-form-item>
                    <el-form-item label="活动描述">
                      <label slot="label">活动描述</label>
                      <span>{{ props.row.details }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="日期" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称" >
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter"
              >
              </el-table-column>

              <el-table-column
                prop="tag"
                label="标签"
                
                :filters="[
                  { text: '室内', value: '室内' },
                  { text: '室外', value: '室外' },
                ]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.tag === '室内' ? 'primary' : 'success'"
                    disable-transitions
                    >{{ scope.row.tag }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link
                    :to="{
                      name: 'FeedBackWindow',
                      query: { activityID: scope.row.ID },
                    }"
                  >
                    <el-button
                      size="mini"
                      type="primary"
                      @click="handleFeedback(scope.$index, scope.row)"
                      >反馈
                    </el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已反馈" name="fourth">
            <el-table
              :header-row-style="{ height: '20px' }"
              :cell-style="{ padding: '5px' }"
              ref="filterTable"
              :data="tableData"
              height="465"
              stripe
              highlight-current-row
              @current-change="handleCurrentChange2"
              style="width: 100%"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form
                    label-position="left"
                    class="demo-table-expand"
                    
                  >
                    <el-form-item label="活动ID">
                      <label slot="label">活&nbsp;&nbsp;动&nbsp;&nbsp;ID</label>
                      <span>{{ props.row.ID }}</span>
                    </el-form-item>
                    <el-form-item label="活动名称">
                      <label slot="label">活动名称</label>
                      <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="活动时间">
                      <label slot="label">活动时间</label>
                      <span>{{ props.row.date }}</span>
                    </el-form-item>
                    <el-form-item label="申请地点">
                      <label slot="label">申请地点</label>
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="参加人数">
                      <label slot="label">参加人数</label>
                      <span>{{ props.row.people }}</span>
                    </el-form-item>
                    <el-form-item label="特殊要求">
                      <label slot="label">特殊要求</label>
                      <span>{{ props.row.require }}</span>
                    </el-form-item>
                    <el-form-item label="活动描述">
                      <label slot="label">活动描述</label>
                      <span>{{ props.row.details }}</span>
                    </el-form-item>
                    <el-form-item label="反馈信息">
                      <label slot="label">反馈信息</label>
                      <span>{{ props.row.back }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="日期" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter"
              >
              </el-table-column>

              <el-table-column
                prop="tag"
                label="标签"
                width="100"
                :filters="[
                  { text: '室内', value: '室内' },
                  { text: '室外', value: '室外' },
                ]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.tag === '室内' ? 'primary' : 'success'"
                    disable-transitions
                    >{{ scope.row.tag }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link
                    :to="{
                      name: 'FeedBackWindow',
                      query: { activityID: scope.row.ID },
                    }"
                  >
                    <el-button
                      size="mini"
                      type="success"
                      @click="handleRenew(scope.$index, scope.row)"
                      >修改反馈</el-button
                    >
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import store from "../../state/state";
// import FeedbackDialog from "../../components/FeedbackDialog";
import { GETActivities } from "../../API/http";
export default {
  data() {
    return {
     orgId: store.state.ID,
      tableData: { 待反馈: [], 已反馈: [] },
      activeName: "third",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    formatter(row) {
      return row.address;
    },

    handleFeedback(index, row) {
      console.log(index, row);
    },
    handleRenew(index, row) {
      console.log(index, row);
    },
    handleCurrentChange1(val) {
      this.currentRow = val;
      this.$router.push({
        name: "FeedBackWindow",
        query: {
          activityID: val.ID,
        },
      });
    },
    handleCurrentChange2(val) {
      this.currentRow = val;
      this.$router.push({
        name: "FeedBackWindow",
        query: {
          activityID: val.ID,
        },
      });
    },
    //取得所有活动信息
    fetchData() {
      this.loading = true;
      const that = this;
      GETActivities({ orgId: that.orgId }) //应该加accountNumber
        .then((data) => {
          // console.log("run GETActivities");
          that.axiosdata = data;
          that.dealWithActivities(that.axiosdata);
          // console.log("that.axiosdata", that.axiosdata);
        })
        .catch((err) => {
          that.data = err;
        });

      this.loading = false;
    },
    dealWithActivities(data) {
      console.log("run dealwithActivities", data);

      for (var key in data) {
        // console.log("key",key);
        for (var i = 0; i < data[key].length; i++) {
          // console.log(data[key][i]);
          var temp = {
            // activityID: "22222",
            // time: "2016-05-03",
            // activityname: "王小虎",
            // groupname: "上海市普陀区金沙江路 1516 弄",
            // ground: "同心楼666",
            // activityState: "审核中",

            //           "待反馈": [
            // {
            //   "id": "1000012",
            //   "name": "活动4",
            //   "accountNumber": "1000064",
            //   "organizationName": "一班",
            //   "activityDate": "2021-07-11T17:30:11",
            //   "startTime": "2021-07-11T13:30:11.795",
            //   "participantNum": 0,
            //   "description": "string",
            //   "additionalRequest": "string",
            //   "duration": 60,
            //   "activityState": "待反馈",
            //   "groundId": "1000007",
            //   "groundName": "越野场",
            //   "isGroundIndoor": false,
            //   "hasCredit": false
            // },

            date: "2016-05-03",
            name: "活动2",
            groundname: "a楼",
            ID: "11117",
            participantNum: 40,
            additionalRequest: "无",
            description: "听数据库开会",
            tag: "室外",
          };
          temp.ID = data[key][i].id;
          temp.date = data[key][i].activityDate.split("T")[0];
          temp.time = data[key][i].activityDate.split("T")[1];
          temp.name = data[key][i].name;
          temp.description = data[key][i].description;
          temp.participantNum = data[key][i].participantNum;
          temp.groupname = data[key][i].organizationName;
          temp.groundname = data[key][i].groundName;
          temp.additionalRequest = data[key][i].additionalRequest;

          this.tableData[key].push(temp);
        }
      }

      for (let j = 0; j < this.tableData["待反馈"].length; j++) {
        this.tableData["已完成"].push(this.tableData["待反馈"][j]);
      }
      for (let j = 0; j < this.tableData["已反馈"].length; j++) {
        this.tableData["已完成"].push(this.tableData["已反馈"][j]);
      }
      console.log(this.tableData);
    },
  },
};
</script>

<style scoped>
.page {
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  background-color: rgb(236, 233, 233);
  background: rgba(240, 235, 235, 0.5);
  justify-content: center;
  align-items: center;
}
.background {
  margin: 0;
  height: 98%;
  width: 99%;
  background-color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  position: relative;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  font-weight: 700;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>