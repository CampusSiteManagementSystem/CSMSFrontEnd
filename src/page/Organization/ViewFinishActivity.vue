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
              :data="tableData.待反馈"
              height="465"
              stripe
              highlight-current-row
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
                    <el-form-item label="活动日期">
                      <label slot="label">活动日期</label>
                      <span>{{ props.row.date }}</span>
                    </el-form-item>
                    <el-form-item label="活动开始时间">
                      <label slot="label">活动开始时间</label>
                      <span>{{ props.row.time }}</span>
                    </el-form-item>
                    <el-form-item label="申请地点">
                      <label slot="label">申请地点</label>
                      <span>{{ props.row.groundname }}</span>
                    </el-form-item>
                    <el-form-item label="参加人数">
                      <label slot="label">参加人数</label>
                      <span>{{ props.row.participantNum }}</span>
                    </el-form-item>
                    <el-form-item label="特殊要求">
                      <label slot="label">特殊要求</label>
                      <span>{{ props.row.additionalRequest }}</span>
                    </el-form-item>
                    <el-form-item label="活动描述">
                      <label slot="label">活动描述</label>
                      <span>{{ props.row.description }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="日期" width="230" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="time"
                label="开始时间"
                width="180"
                sortable
              ></el-table-column>
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column
                prop="groundname"
                label="场地名称"
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
              <el-table-column prop="activityState" label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="
                      scope.row.activityState === '已反馈'
                        ? 'primary'
                        : 'success'
                    "
                    disable-transitions
                    >{{ scope.row.activityState }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row.activityState === '待反馈'"
                    size="mini"
                    type="primary"
                    @click.stop="handleFeedback(scope.row)"
                    >反馈
                  </el-button>
                  <el-button v-else size="mini" type="primary" disabled
                    >已反馈
                  </el-button>
                  <!-- <router-link
                    :to="{
                      name: 'FeedBackWindow',
                      query: { activityID: scope.row.ID },
                    }"
                  >
                    <el-button
                      size="mini"
                      type="primary"
                      @click.stop="handleFeedback(scope.$index, scope.row)"
                      >反馈
                    </el-button>
                  </router-link> -->
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已反馈" name="fourth">
            <el-table
              :header-row-style="{ height: '20px' }"
              :cell-style="{ padding: '5px' }"
              ref="filterTable"
              :data="tableData.已反馈"
              height="465"
              stripe
              highlight-current-row
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
                    <el-form-item label="活动日期">
                      <label slot="label">活动日期</label>
                      <span>{{ props.row.date }}</span>
                    </el-form-item>
                    <el-form-item label="活动开始时间">
                      <label slot="label">活动开始时间</label>
                      <span>{{ props.row.time }}</span>
                    </el-form-item>
                    <el-form-item label="申请地点">
                      <label slot="label">申请地点</label>
                      <span>{{ props.row.groundname }}</span>
                    </el-form-item>
                    <el-form-item label="参加人数">
                      <label slot="label">参加人数</label>
                      <span>{{ props.row.participantNum }}</span>
                    </el-form-item>
                    <el-form-item label="特殊要求">
                      <label slot="label">特殊要求</label>
                      <span>{{ props.row.additionalRequest }}</span>
                    </el-form-item>
                    <el-form-item label="活动描述">
                      <label slot="label">活动描述</label>
                      <span>{{ props.row.description }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="日期" width="230" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="time"
                label="开始时间"
                width="180"
                sortable
              ></el-table-column>
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column
                prop="groundname"
                label="场地名称"
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
              <el-table-column prop="activityState" label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="
                      scope.row.activityState === '已反馈'
                        ? 'primary'
                        : 'success'
                    "
                    disable-transitions
                    >{{ scope.row.activityState }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row.activityState === '待反馈'"
                    size="mini"
                    type="primary"
                    @click.stop="handleFeedback(scope.row)"
                    >反馈
                  </el-button>
                  <el-button v-else size="mini" type="primary" disabled
                    >已反馈
                  </el-button>
                  <!-- <router-link
                    :to="{
                      name: 'FeedBackWindow',
                      query: { activityID: scope.row.ID },
                    }"
                  >
                    <el-button
                      size="mini"
                      type="primary"
                      @click.stop="handleFeedback(scope.$index, scope.row)"
                      >反馈
                    </el-button>
                  </router-link> -->
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    <el-dialog title="场地反馈" :visible.sync="feedbackVisible" class="dialog">
      <div class="content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          class="demo-table"
          label-width="150px"
        >
          <el-form-item label="活动ID">
            <label slot="label"><b>活动ID</b></label>
            <span>{{ feedbackRow.ID }}</span>
          </el-form-item>
          <el-form-item label="活动时间">
            <label slot="label"><b>活动时间</b></label>
            <span>{{ feedbackRow.time }}</span>
          </el-form-item>
          <el-form-item label="活动地点">
            <label slot="label"><b>活动地点</b></label>
            <span>{{ feedbackRow.groundname }}</span>
          </el-form-item>
          <el-form-item label="活动评分">
            <label slot="label"><b>活动评分</b></label>
            <div>
              <p>
                <el-rate
                  class="block"
                  v-model="ruleForm.score"
                  :colors="colors"
                  show-text
                ></el-rate>
              </p>
            </div>
          </el-form-item>
          <el-form-item label="详细意见">
            <label slot="label"><b>详细意见</b></label>
            <span>
              <el-input
                :autosize="{ minRows: 2, maxRows: 6 }"
                class="input"
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="ruleForm.textarea"
              >
              </el-input>
            </span>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="feedbackVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import store from "../../state/state";
import {
  GETActivities,
  /*  DELETEActivitiesID, */
  POSTFeedbackRecords,
} from "../../API/http";
export default {
  data() {
    return {
      orgId: store.state.ID,
      feedbackVisible: false,
      activeName: "third",
      axiosdata: null,
      tableData: {
        待反馈: [],
        已反馈: [],
      },feedbackRow: {
        ID: "",
        additionalRequest: "",
        date: "",
        description: "",
        groundname: "",
        groupname: "",
        name: "",
        participantNum: 0,
        tag: "",
        time: "",
      },
      ruleForm: {
        score: null,
        textarea: "",
      },
      rules: {
        textarea: [
          { required: true, message: "请输入场地反馈", trigger: "blur" },
        ],
      },
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
  mounted() {
    const that = this;
    GETActivities({ orgId: that.orgId }) //应该加accountNumber
      .then((data) => {
        // console.log("run GETActivities");
        console.log("ID=", that.orgId);
        console.log("AXDT",data);
        that.axiosdata = data;
        // console.log("that.axiosdata", that.axiosdata);
        for (var key in this.tableData.key) {
          if (key in that.axiosdata.key) {
            // console.log("key",key);
            for (var i = 0; i < that.axiosdata[key].length; i++) {
              // console.log(data[key][i]);
              var temp = {
                date: "2016-05-03",
                name: "活动2",
                groundname: "a楼",
                ID: "11117",
                participantNum: 40,
                additionalRequest: "无",
                description: "听数据库开会",
                tag: "室外",
                activityState: "审核中",
              };
              temp.ID = that.axiosdata[key][i].id;
              temp.date = that.axiosdata[key][i].activityDate.split("T")[0];
              temp.time = that.axiosdata[key][i].activityDate.split("T")[1];
              temp.name = that.axiosdata[key][i].name;
              temp.description = that.axiosdata[key][i].description;
              temp.participantNum = that.axiosdata[key][i].participantNum;
              temp.groupname = that.axiosdata[key][i].organizationName;
              temp.groundname = that.axiosdata[key][i].groundName;
              temp.additionalRequest = that.axiosdata[key][i].additionalRequest;
              temp.activityState = that.axiosdata[key][i].activityState;

              this.tableData[key].push(temp);
            }
          }
        }
        console.log("TABLEDATA",this.tableData);
      })
      .catch((err) => {
        that.data = err;
      });

    
    console.log(this.tableData);
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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
    submit() {
      if (this.ruleForm.score == null || this.ruleForm.textarea == "") {
        this.$alert("未输入所有备选项", "反馈失败", {
          confirmButtonText: "确定",
          callback: (action) => {
            if (action === "confirm") {
              console.log("ID", this.$route.query.activityID);
              this.$message({
                type: "error",
                message: "反馈失败",
              });
            }
          },
        });
      } else {
        var tmp = {
          feedbackDate: this.formatTime,
          feedbackTime: this.formatTime,
          content: this.ruleForm.textarea,
          score: this.ruleForm.score,
          id: this.feedbackRow.ID,
          groundName: this.feedbackRow.groundname,
        };
        console.log(tmp);
        POSTFeedbackRecords(tmp)
          .then((data) => {
            console.log(data);
            this.$message({ message: "反馈成功", type: "success" });
            this.$router.push({ path: "/OrgFrame/Appointment" });
          })
          .catch((err) => {
            err;
            this.$message({ message: "反馈失败", type: "error" });
          });
      }
      this.feedbackVisible = false;
    },
  },
  computed: {
    formatTime() {
      var Y, m, d, H, i, s, sresult;

      const date = new Date();

      (Y = date.getFullYear()),
        (m = date.getMonth() + 1),
        (d = date.getDate()),
        (H = date.getHours()),
        (i = date.getMinutes()),
        (s = date.getSeconds());
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      if (H < 10) {
        H = "0" + H;
      }
      if (i < 10) {
        i = "0" + i;
      }
      if (s < 10) {
        s = "0" + s;
      }
      sresult = String(Y) + "-" + m + "-" + d + "T" + H + ":" + i + ":" + s;

      return sresult;
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