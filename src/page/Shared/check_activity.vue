<template>
  <div class="maindiv">
    <el-card class="maincard">
      <el-row>
        <el-col :span="18">
          <div>
            <h2>查看活动</h2>
          </div>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="toMatch"
            placeholder="输入活动名称以搜索"
            @input="search"
          ></el-input>
        </el-col>
      </el-row>
      <el-tabs v-model="activeTab">
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
            <el-table-column prop="description" label="描述" width="450">
            </el-table-column>
            <el-table-column prop="organizationName" label="举办组织"> </el-table-column>
            <el-table-column prop="startTime" label="时间" width="250" sortable>
            </el-table-column>
            <el-table-column prop="groundName" label="地点"> </el-table-column>
            <el-table-column fixed="right" width="100" label="操作">
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
            <el-table-column prop="description" label="描述" width="450">
            </el-table-column>
            <el-table-column prop="organizationName" label="举办组织"> </el-table-column>
            <el-table-column prop="startTime" label="时间" width="250" sortable>
            </el-table-column>
            <el-table-column prop="groundName" label="地点"> </el-table-column>
            <el-table-column fixed="right" width="100" label="操作">
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

.detailinfo {
  padding: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      errored: false,
      toMatch: "",
      tableData: [],
      matchList: [],
      siteSelected:{
        id:"",
        name:"",
        accountNumber:"",
        organizationName:"",
        activityDate:"",
        startTime:"",
        participantNum:0,
        description:"",
        additionalRequest:"",
        duration:0,
        activityState:"",
        groundId:"",
        groundName:"",
        isGroundIndoor:true
      },
      dialogVisible: false,
      activeTab: "pane1",
    };
  },
  mounted() {
    var axios = require('axios');
            
    var config = {
        method: 'get',
        url: 'http://139.196.114.7/api/activities?notHeld=false',
        headers: { }
    };
                
    axios(config)
        .then(response => {
        this.tableData = [];
        for (let key of Object.keys(response.data)){
          for (let a of response.data[key]){
            this.tableData.push(a);
          }
        }
        this.matchList = this.tableData;
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods: {
    viewInfo(row) {
      this.siteSelected = row;
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