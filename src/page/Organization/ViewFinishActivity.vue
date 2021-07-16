<template>
<div>
      <el-card class="maincard">
        <div slot="header" class="clearfix">
            <span><b>完成活动列表</b></span>
          </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="待反馈" name="p1">
            <el-table
              :header-row-style="{ height: '20px' }"
              :cell-style="{ padding: '5px' }"
              ref="filterTable"
              :data="tableData1"
              height="465"
              stripe
              highlight-current-row
              style="width: 100%"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column prop="date" label="日期" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称">
              </el-table-column>
              <el-table-column
                prop="groundname"
                label="场地名称"
              >
              </el-table-column>

              <el-table-column
                prop="isGroundIndoor"
                label="场地类型"
                :filters="[
                  { text: '室内', value: true },
                  { text: '室外', value: false },
                ]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.isGroundIndoor == true ? 'primary' : 'success'"
                    disable-transitions
                    >{{ scope.row.isGroundIndoor ? '室内':'室外' }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click.stop="handleFeedback(scope.row, false)"
                    >反馈
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已反馈" name="p2">
            <el-table
              :header-row-style="{ height: '20px' }"
              :cell-style="{ padding: '5px' }"
              ref="filterTable"
              :data="tableData2"
              height="465"
              stripe
              highlight-current-row
              style="width: 100%"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column prop="date" label="日期" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称">
              </el-table-column>
              <el-table-column
                prop="groundname"
                label="场地名称"
              >
              </el-table-column>

              <el-table-column
                prop="isGroundIndoor"
                label="场地类型"
                :filters="[
                  { text: '室内', value: true },
                  { text: '室外', value: false },
                ]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.isGroundIndoor == true ? 'primary' : 'success'"
                    disable-transitions
                    >{{ scope.row.isGroundIndoor ? '室内':'室外' }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click.stop="handleFeedback(scope.row, true)"
                    >查看反馈
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    <el-dialog title="场地反馈" :visible.sync="feedbackVisible" class="dialog">
      <div class="content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          class="demo-table"
        >
          <el-form-item label="活动ID">
            <label slot="label"><b>活动ID</b></label>
            <span>{{ feedbackRow.ID }}</span>
          </el-form-item>
          <el-form-item label="活动时间">
            <label slot="label"><b>活动时间</b></label>
            <span>{{ feedbackRow.date + " " + feedbackRow.time }}</span>
          </el-form-item>
          <el-form-item label="活动地点">
            <label slot="label"><b>活动地点</b></label>
            <span>{{ feedbackRow.groundname }}</span>
          </el-form-item>
          <div v-if="feedbackState">
            <el-form-item>
              <label slot="label"><b>活动评分</b></label>
              <div>
                <p>
                  <el-rate
                    class="block"
                    v-model="score"
                    :colors="colors"
                    show-text
                    disabled
                  ></el-rate>
                </p>
              </div>
            </el-form-item>
            <el-form-item>
              <label slot="label"><b>详细意见</b></label>
              <span>{{ comment }}</span>
            </el-form-item>
          </div>
          <div v-else>
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
                  maxlength="100"
                show-word-limit
                >
                </el-input>
              </span>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer" v-if="feedbackState">
        <el-button @click="feedbackVisible = false" type="primary">确定</el-button>
      </span>
      <span slot="footer" class="dialog-footer" v-else>
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
      feedbackState: true,
      activeName: "p1",
      axiosdata: null,
      tableData1: [],
      tableData2: [],
      score: -1,
      comment: "",
      feedbackRow: {
        date: "",
        time: "",
        name: "",
        groundname: "",
        isGroundIndoor: "",
        ID: "",
        participantNum: 0,
        additionalRequest: "",
        description: "",
        activityState: "",
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
    this.fetchData();
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
    handleFeedback(row, feedbackState) {
      console.log(row);
      this.feedbackVisible = true;
      this.feedbackRow = row;
      this.feedbackState = feedbackState;
      if (feedbackState) {
        var axios = require('axios');
        var config = {
          method: 'get',
          url: 'http://139.196.114.7/api/FeedbackRecords/' + row.ID,
          headers: { }
        };
                    
        axios(config)
        .then(response => {
          this.score = response.data.score;
          this.comment = response.data.content;
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    handleRenew(index, row) {
      console.log(index, row);
    },
    // handleCurrentChange1(val) {
    //   this.currentRow = val;
    //   this.$router.push({
    //     name: "FeedBackWindow",
    //     query: {
    //       activityID: val.ID,
    //     },
    //   });
    // },
    // handleCurrentChange2(val) {
    //   this.currentRow = val;
    //   this.$router.push({
    //     name: "FeedBackWindow",
    //     query: {
    //       activityID: val.ID,
    //     },
    //   });
    // },
    fetchData() {
 //const that = this;
        this.tableData1=[];
        this.tableData2=[];
    GETActivities({ orgId: this.orgId })
      .then((data) => {
        this.axiosdata = data;
        console.log(data)
        if ("待反馈" in this.axiosdata) {
          for (var i = 0; i < this.axiosdata.待反馈.length; i++) {
            var temp = {
              date: this.axiosdata.待反馈[i].activityDate.split("T")[0],
              time: this.axiosdata.待反馈[i].activityDate.split("T")[1],
              name: this.axiosdata.待反馈[i].name,
              groundname: this.axiosdata.待反馈[i].groundName,
              isGroundIndoor: this.axiosdata.待反馈[i].isGroundIndoor,
              ID: this.axiosdata.待反馈[i].id,
              participantNum: this.axiosdata.待反馈[i].participantNum,
              additionalRequest: this.axiosdata.待反馈[i].additionalRequest,
              description: this.axiosdata.待反馈[i].description,
              activityState: this.axiosdata.待反馈[i].activityState,
            };
            this.tableData1.push(temp);
          }
          console.log("TABLEDATA_1");
          console.log(this.tableData1);
        }
        
        if ("已反馈" in this.axiosdata) {
          for (i = 0; i < this.axiosdata.已反馈.length; i++) {
            temp = {
              date: this.axiosdata.已反馈[i].activityDate.split("T")[0],
              time: this.axiosdata.已反馈[i].activityDate.split("T")[1],
              name: this.axiosdata.已反馈[i].name,
              groundname: this.axiosdata.已反馈[i].groundName,
              isGroundIndoor: this.axiosdata.已反馈[i].isGroundIndoor,
              ID: this.axiosdata.已反馈[i].id,
              participantNum: this.axiosdata.已反馈[i].participantNum,
              additionalRequest: this.axiosdata.已反馈[i].additionalRequest,
              description: this.axiosdata.已反馈[i].description,
              activityState: this.axiosdata.已反馈[i].activityState,
            };
            this.tableData2.push(temp);
          }
          console.log("TABLEDATA_2");
          console.log(this.tableData2);
        }
      })
      .catch((err) => {
        this.data = err;
      });
    },
    submit() {
      if (this.ruleForm.score == 0 || this.ruleForm.textarea == "") {
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
            this.fetchData();
          })
          .catch((err) => {
            console.log(err);
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


<style>
.el-card {
  border-radius: 15px;
  height: 100%;
}
.el-dialog {
  border-radius: 12px;
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
</style>
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
.dialog {
  backdrop-filter: blur(10px);
}
/* .background {
  margin: 0;
  height: 98%;
  width: 99%;
  background-color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  position: relative;
} */
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