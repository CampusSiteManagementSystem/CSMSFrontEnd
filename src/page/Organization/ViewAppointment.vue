<template>
  <div class="page">
    <div class="background">
      <el-card>
        <div>
          <h2>预约记录</h2>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="待举办" name="first">
            <el-table :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}" ref="filterTable1"
              :data="tableData" height="465" stripe highlight-current-row @current-change="handleCurrentChange1"
              style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" class="demo-table-expand" label-width="150px">
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
              <el-table-column prop="date" label="日期" width="180" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址" :formatter="formatter">
              </el-table-column>

              <el-table-column prop="tag" label="标签" width="100" :filters="[
                { text: '室内', value: '室内' },
                { text: '室外', value: '室外' },
              ]" :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                  <el-tag :type="scope.row.tag === '室内' ? 'primary' : 'success'" disable-transitions>{{ scope.row.tag }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                <router-link :to="{
                name: 'ApplySiteWindow',
                params: { ID: scope.row.ID },
              }">
                  <el-button size="mini">更改预约</el-button>
                </router-link>
                  <el-button size="mini" type="danger" class="modify" @click="handleDelete1(scope.$index, scope.row)">删除预约</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="审核中" name="second">
            <el-table :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}" ref="filterTable2"
              :data="tableData" height="465" stripe highlight-current-row @current-change="handleCurrentChange2"
              style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" class="demo-table-expand" label-width="150px">
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
              <el-table-column prop="date" label="日期" width="180" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址" :formatter="formatter">
              </el-table-column>

              <el-table-column prop="tag" label="标签" width="100" :filters="[
                { text: '室内', value: '室内' },
                { text: '室外', value: '室外' },
              ]" :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                  <el-tag :type="scope.row.tag === '室内' ? 'primary' : 'success'" disable-transitions>{{ scope.row.tag }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                <router-link :to="{
                name: 'ApplySiteWindow',
                params: { ID: scope.row.ID },
              }">
                  <el-button size="mini">更改预约</el-button>
                </router-link>
                  <el-button size="mini" type="danger" class="modify" @click.stop="handleDelete2(scope.$index, scope.row)">删除预约
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已完成" name="third">
            <el-table :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}" ref="filterTable"
              :data="tableData" height="465" stripe highlight-current-row @current-change="handleCurrentChange3"
              style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" class="demo-table-expand" label-width="150px">
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
              <el-table-column prop="date" label="日期" width="180" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址" :formatter="formatter">
              </el-table-column>

              <el-table-column prop="tag" label="标签" width="100" :filters="[
                { text: '室内', value: '室内' },
                { text: '室外', value: '室外' },
              ]" :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                  <el-tag :type="scope.row.tag === '室内' ? 'primary' : 'success'" disable-transitions>{{ scope.row.tag }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
              <router-link :to="{
                name: 'FeedBackWindow',
                params: { ID: scope.row.ID },
              }">
                    <el-button size="mini" type="primary" @click.stop="handleFeedback(scope.$index, scope.row)">反馈
                    </el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="被驳回" name="fourth">
            <el-table :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}" ref="filterTable"
              :data="tableData" height="465" stripe highlight-current-row @current-change="handleCurrentChange4"
              style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" class="demo-table-expand" label-width="150px">
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
              <el-table-column prop="date" label="日期" width="180" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址" :formatter="formatter">
              </el-table-column>

              <el-table-column prop="tag" label="标签" width="100" :filters="[
                { text: '室内', value: '室内' },
                { text: '室外', value: '室外' },
              ]" :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                  <el-tag :type="scope.row.tag === '室内' ? 'primary' : 'success'" disable-transitions>{{ scope.row.tag }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <router-link to="/OrgFrame/ApplySite">
                    <el-button size="mini" type="success" @click.stop="handleRenew(scope.$index, scope.row)">重新申请
                    </el-button>
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
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          ID: "1111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室内",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          ID: "11111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室内",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          ID: "11111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室内",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          ID: "11111121111111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室内",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          ID: "11111121111111111111111",
          people: 4,
          require: "无",
          details: "听数据库开会",
          tag: "室内",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          ID: "11111121111111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室外",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          ID: "11111121111111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室外",
        },
        {
          date: "2016-05-15",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          ID: "11111121111111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室内",
        },
        {
          date: "2016-06-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          ID: "11111121111111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室内",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          ID: "11111121111111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室外",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          ID: "11111121111111111111111",
          people: 40,
          require: "无",
          details: "听数据库开会",
          tag: "室外",
        },
      ],
      activeName: "second",
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
    handleDelete1(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该活动信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
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
    handleDelete2(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该活动信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
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
    handleFeedback(index, row) {
      console.log(index, row);
    },
    handleRenew(index, row) {
      console.log(index, row);
    },
    handleCurrentChange1(val) {
      this.currentRow = val;
      //this.$router.push('/RecordDetails')
    },
    handleCurrentChange2(val) {
      this.currentRow = val;
      this.$router.push("/OrgFrame/Pending");
    },
    handleCurrentChange3(val) {
      this.currentRow = val;
      this.$router.push("/OrgFrame/RecordDetails");
    },
    handleCurrentChange4(val) {
      this.currentRow = val;
      this.$router.push("/OrgFrame/Rejected");
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
.modify {
  margin-left: 0.3cm;
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