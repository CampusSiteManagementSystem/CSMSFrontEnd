<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span><b>预约记录</b></span>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待举办" name="first">
          <el-table
            v-loading="loading"
            :header-row-style="{ height: '20px' }"
            :cell-style="{ padding: '5px' }"
            ref="filterTable1"
            :data="tableData.待举办"
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
                    <label slot="label">活动ID</label>
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
            <el-table-column prop="date" label="日期" sortable>
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="time" label="开始时间" sortable>
            </el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
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
            <el-table-column label="操作" width="400" align="center">
              <template slot-scope="scope">
                <router-link
                  :to="{
                    name: 'ApplySiteWindow',
                    query: { activityID: scope.row.ID },
                  }"
                >
                  <el-button size="mini">更改预约</el-button>
                </router-link>
                <el-button
                  size="mini"
                  type="danger"
                  class="modify"
                  @click="handleDelete(scope.$index, scope.row, 1)"
                  >删除预约</el-button
                ><el-button
                  type="primary"
                  size="mini"
                  @click="preview(scope.$index, scope.row)"
                  >预览使用凭证</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="审核中" name="second">
          <el-table
            :header-row-style="{ height: '20px' }"
            :cell-style="{ padding: '5px' }"
            v-loading="loading"
            ref="filterTable2"
            :data="tableData.审核中"
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
                  label-width="150px"
                >
                  <el-form-item label="活动ID">
                    <label slot="label">活动ID</label>
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
            <el-table-column prop="date" label="日期" sortable>
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="time"
              label="开始时间"
              sortable
            ></el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
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
            <el-table-column label="操作" width="250px" align="center">
              <template slot-scope="scope">
                <el-row gutter="10">
                  <el-col span="12">
                    <el-button
                      size="mini"
                      @click.stop="handleChange(scope.$index, scope.row, 1)"
                      >更改预约</el-button
                    >
                  </el-col>
                  <el-col span="12">
                    <el-button
                      size="mini"
                      type="danger"
                      class="modify"
                      @click.stop="handleDelete(scope.$index, scope.row, 2)"
                      >删除预约
                    </el-button>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- <el-tab-pane label="已完成" name="third">
            <el-table
              :header-row-style="{ height: '20px' }"
              :cell-style="{ padding: '5px' }"
              ref="filterTable"
              v-loading="loading"
              :data="tableData.已完成"
              height="465"
              stripe
              highlight-current-row
              @current-change="handleCurrentChange3"
              style="width: 100%"
              :default-sort="{ prop: 'date', order: 'descending' }"
            > -->
        <!-- <template slot-scope="scope">
                <el-tag
                  :type="scope.row.tag === '室内' ? 'primary' : 'success'"
                  disable-transitions
                  >{{ scope.row.tag }}
                </el-tag>
              </template>
            </el-table-column> -->
        <!-- <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click.stop="handleChange(scope.$index, scope.row, 1)"
                  >更改预约</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  class="modify"
                  @click.stop="handleDelete(scope.$index, scope.row, 2)"
                  >删除预约
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane> -->
        <el-tab-pane label="已完成" name="third">
          <el-table
            :header-row-style="{ height: '20px' }"
            :cell-style="{ padding: '5px' }"
            ref="filterTable"
            v-loading="loading"
            :data="tableData.已完成"
            height="465"
            stripe
            highlight-current-row
            @current-change="handleCurrentChange3"
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
                    <label slot="label">活动ID</label>
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
            <el-table-column prop="date" label="日期" sortable>
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="time"
              label="开始时间"
              sortable
            ></el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
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
                    scope.row.activityState === '已反馈' ? 'primary' : 'success'
                  "
                  disable-transitions
                  >{{ scope.row.activityState }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
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
        <el-tab-pane label="被驳回" name="fourth">
          <el-table
            :header-row-style="{ height: '20px' }"
            :cell-style="{ padding: '5px' }"
            ref="filterTable"
            v-loading="loading"
            :data="tableData.被驳回"
            height="465"
            stripe
            highlight-current-row
            @current-change="handleCurrentChange4"
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
                    <label slot="label">活动ID</label>
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
            <el-table-column prop="date" label="日期" sortable>
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="time"
              label="开始时间"
              sortable
            ></el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
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
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <router-link
                  :to="{
                    name: 'ApplySiteWindow',
                    query: { activityName: scope.row.name },
                  }"
                >
                  <el-button
                    size="mini"
                    type="success"
                    @click.stop="handleRenew(scope.$index, scope.row)"
                    >重新申请
                  </el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 以下是场地反馈的弹出窗口 -->
    <!-- <FeedbackDialog
        :feedbackVisible="feedbackVisible"
        :message="feedbackRow"
      /> -->

    <!-- 以下需要增加参数  -->

    <div>
      <el-dialog
        title="使用凭证预览和下载"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose"
        class="dialog"
      >
        <div id="pdfDom">
          <div class="proBox">
            <p class="tit">场地使用凭证</p>
            <p class="proid">
              <span>编号：</span> <span>{{ drawDetail.ID }}</span>
            </p>
            <p class="con">
              <span class="con-name">{{ drawDetail.groupname }}</span>
              组织于<span>{{ drawDetail.date }} {{ drawDetail.time }}</span
              >申请使用{{ drawDetail.groundname }}场地，经批准，予以使用。
            </p>
            <div class="con-unit">
              <p>同济大学校园场地管理系统</p>
              <p class="time">{{ formatTime.replace("T", " ") }}</p>
            </div>
            <p class="con-footer">同济大学校务处 监制</p>

            <div class="chapter" v-show="isShow">
              <canvas id="chapterCanvas" height="150"></canvas>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-switch
            inactive-color="#67c23a"
            v-model="downType"
            active-text="图片下载"
            inactive-text="pdf下载"
            style="margin-right: 20px"
          >
          </el-switch>
          <el-checkbox v-model="isShow" style="margin-right: 20px"
            >添加盖章</el-checkbox
          >
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="getPdf('#pdfDom')">下载</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- <feedback-dialog :feedbackRow="feedbackRow" :feedbackVisible="feedbackVisible" @closeDialog="feedbackVisible=false"></feedback-dialog> -->
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
                maxlength="100"
                show-word-limit
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
  DELETEActivitiesID,
  POSTFeedbackRecords,
} from "../../API/http";
// import FeedbackDialog from '../../components/FeedbackDialog.vue';
export default {
  //  components: {
  //     FeedbackDialog,
  //  },
  data() {
    return {
      //这是下载pdf的参数 别删了嗷
      drawDetail: "", //这是选中那一行
      dialogVisible: false,
      pageData: null, //接收html格式代码
      isShow: true,
      isCanvas: false,
      downType: true, // false为 pdf , true为图片
      htmlTitle: "场地使用凭证",
      loading: true,
      tableData: {
        审核中: [],
        待举办: [],
        待反馈: [],
        已反馈: [],
        被驳回: [],
        已完成: [],

        已过期: [],
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

      feedbackRow: {
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
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      activeName: "second",

      //以下是调用api后新增的内容
      axiosdata: "",
      orgId: store.state.ID,
      feedbackVisible: false,
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
      return row.groundname;
    },
    // handleEdit(index, row) {
    //   console.log(index, row);
    // },
    //wy编辑
    handleDelete(index, row, type) {
      console.log(index, row);

      this.$confirm("此操作将永久删除该活动信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const tempList =
            type == 1 ? this.tableData.待举办 : this.tableData.审核中;

          for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].ID == row.ID) {
              tempList.splice(i, 1);

              this.deleteAppointment(row.ID);
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
    handleChange(index, row, type) {
      index;
      type;
      this.$router.push({
        name: "ApplySiteWindow",
        query: {
          activityID: row.ID,
        },
      });
    },
    handleFeedback(row) {
      console.log(row);
      this.feedbackVisible = true;
      this.feedbackRow = row;
    },
    handleRenew(index, row) {
      console.log(index, row);
    },
    handleCurrentChange1(val) {
      this.currentRow = val;
      //this.$router.push('/Recorddescription')
    },
    handleCurrentChange2(val) {
      this.currentRow = val;
      this.$router.push({
        name: "PendingWindow",
        params: {
          activityID: val.ID,
        },
      });
    },
    handleCurrentChange3(val) {
      this.currentRow = val;
      this.$router.push({
        name: "RecordWindow",
        params: {
          activityID: val.ID,
        },
      });
    },
    handleCurrentChange4(val) {
      this.currentRow = val;
      this.$router.push({
        name: "RejectedWindow",
        params: {
          activityID: val.ID,
        },
      });
    },
    //以下是调用api后新增的函数，有问题找wy
    //删除某一条活动信息
    deleteAppointment(id) {
      DELETEActivitiesID(id)
        .then((data) => {
          console.log("run deleteAppointment", data);
        })
        .catch((err) => {
          console.log(err);
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
          //console.log("that.axiosdata", that.axiosdata);
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
            activityState: "审核中",
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
          temp.activityState = data[key][i].activityState;
          temp.tag = data[key][i].isGroundIndoor ? '室内' : '室外';
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
    //以下是下载的函数，有问题找wy
    handleClose() {
      this.dialogVisible = false;
    },
    preview(index, row) {
      this.drawDetail = row;
      this.dialogVisible = true;
      this.$nextTick(() => {
        if (!this.isCanvas) {
          // 只绘画一次
          this.isCanvas = true;
          this.getChapter();
        }
      });
    },
    // 生成印章
    getChapter() {
      let canvas = document.getElementById("chapterCanvas");
      let context = canvas.getContext("2d");

      // let text = "xxx专用章";
      let companyName = "  同济大学校园场地管理  ";
      //  context.translate(0, 0);
      // context.clearRect(0, 0, 200, 200);//清除整个画布
      // 绘制印章边框
      let width = canvas.width / 2;
      let height = canvas.height / 2;
      context.lineWidth = 3;
      context.strokeStyle = "#cf0c0c";
      context.beginPath();
      context.arc(width, height, 60, 0, Math.PI * 2); //宽、高、半径
      context.stroke();

      //画五角星
      create5star(context, width, height, 15, "#cf0c0c", 0);

      // 绘制印章名称
      context.font = "20px 宋体";
      context.textBaseline = "middle"; //设置文本的垂直对齐方式
      context.textAlign = "center"; //设置文本的水平对对齐方式
      context.lineWidth = 1;
      context.strokeStyle = "#cf0c0c";
      // context.strokeText(text, width, height + 30); // 名称 xx专用章

      // 绘制印章单位
      context.translate(width, height); // 平移到此位置,
      context.font = "20px 宋体";
      let count = companyName.length; // 字数
      let angle = (5 * Math.PI) / (3 * (count - 1)); // 字间角度
      let chars = companyName.split("");
      let c;
      for (let i = 0; i < count; i++) {
        c = chars[i]; // 需要绘制的字符
        if (i == 0) {
          context.rotate((4 * Math.PI) / 6); // 文字起始位置
        } else {
          context.rotate(angle);
        }

        context.save();
        context.translate(45, 0); // 平移到此位置,此时字和x轴垂直，公司名称和最外圈的距离
        context.rotate(Math.PI / 2); // 旋转90度,让字平行于x轴
        context.strokeText(c, 0, 0); // 此点为字的中心点
        context.restore();
      }

      //绘制五角星
      function create5star(context, sx, sy, radius, color, rotato) {
        context.save();
        context.fillStyle = color;
        context.translate(sx, sy); //移动坐标原点
        context.rotate(Math.PI + rotato); //旋转
        context.beginPath(); //创建路径
        // const x = Math.sin(0);
        // const y = Math.cos(0);
        const dig = (Math.PI / 5) * 4;
        for (let i = 0; i < 5; i++) {
          //画五角星的五条边
          const x = Math.sin(i * dig);
          const y = Math.cos(i * dig);
          context.lineTo(x * radius, y * radius);
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
      }
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
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
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
body {
  margin: 0;
}
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
.el-dialog__header {
  border-bottom: 1px solid #ebebeb;
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
.el-card {
  border-radius: 15px;
  height: 100%;
}
.modify {
  margin-left: 0.3cm;
}
.demo-table-expand {
  font-size: 0;
}
.el-card {
  border-radius: 15px;
}
.demo-table-expand label {
  width: 90px;
  font-weight: 700;
}
.dialog {
  backdrop-filter: blur(10px);
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

::v-deep .el-dialog__body {
  padding: 0px;
  display: flex;
  justify-content: center;
}
#pdfDom {
  /* 要想pdf周边留白，要在这里设置 */
  padding: 20px;
  width: 750px;
}
.proBox {
  /* background: url("../../assets/zs.jpg") no-repeat; */
  background-size: cover;
  width: 750px;
  height: 525px;
  padding: 90px 94px;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  color: #000;
  font-family: SimSun;
}
.tit {
  color: #cf0c0c;
  font-size: 36px;
  font-weight: 700;
  position: relative;
  top: -6px;
  left: 8px;
  letter-spacing: 20px;
  font-family: STHeiti;
  margin: 20px 0;
}
.proid {
  text-align: right;
  margin: 0;
  font-weight: 500;
  /* margin-right: 5px; */
}
.con {
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  margin: 10px 0;
  line-height: 32px;
  text-indent: 2em;
}
.con-name {
  font-family: 华文行楷, STXingkai;
  border-bottom: 2px solid #000;
}
.con-unit {
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  right: 100px;
  bottom: 100px;
  text-align: center;
  letter-spacing: 3px;
}
.con-unit p {
  margin: 5px 0;
}
.con-footer {
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  bottom: 45px;
  left: 0;
  right: 0;
  text-align: center;
}
.chapter {
  border-radius: 50%;
  position: absolute;
  bottom: 75px;
  right: 134px;
}
</style>