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
            clearable
            v-model="toMatch"
            placeholder="输入活动名称以搜索"
            @input="search"
          ></el-input>
        </el-col>
      </el-row>
      <el-tabs v-model="activeTab" :before-leave='leaveTab'>
        <el-tab-pane label="未举办" name="pane1">
          <el-table
            :header-row-style="{ height: '10px' }"
            :cell-style="{ padding: '5px' }"
            :data="matchList"
            :default-sort="{ prop: 'time', order: 'ascending' }"
            height="450"
            stripe
          >
            <el-table-column prop="name" label="活动名称"> </el-table-column>
            <el-table-column prop="description" label="描述" width="450">
            </el-table-column>
            <el-table-column prop="host" label="举办组织"> </el-table-column>
            <el-table-column prop="time" label="时间" width="250" sortable>
            </el-table-column>
            <el-table-column prop="location" label="地点"> </el-table-column>
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
            :default-sort="{ prop: 'time', order: 'ascending' }"
            height="450"
            stripe
          >
            <el-table-column prop="name" label="活动名称"> </el-table-column>
            <el-table-column prop="description" label="描述" width="450">
            </el-table-column>
            <el-table-column prop="host" label="举办组织"> </el-table-column>
            <el-table-column prop="time" label="时间" width="250" sortable>
            </el-table-column>
            <el-table-column prop="location" label="地点"> </el-table-column>
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
        <p><b>举办组织：</b>{{ siteSelected.host }}</p>
        <p><b>活动时间：</b>{{ siteSelected.time }}</p>
        <p><b>活动地点：</b>{{ siteSelected.location }}</p>
        <p><b>参与人数：</b>{{ siteSelected.participantnum }}</p>
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
      nextTab:"",
      toMatch: "",
      matchList: [],
      siteSelected: {
        id: 65535,
        name: "批评大会",
        description: "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
        host: "德育办公室",
        time: "2021-5-28 14:30",
        location: "129礼堂",
        participantnum: 0,
      },
      dialogVisible: false,
      activeTab: "pane1",
      tableData1: [
        {
          id: 65535,
          name: "批评大会1",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:30",
          location: "129礼堂",
          participantnum: 10,
        },
        {
          id: 65536,
          name: "批评大会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:31",
          location: "129礼堂",
          participantnum: 20,
        },
        {
          id: 65537,
          name: "新闻发布会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:32",
          location: "129礼堂",
          participantnum: 30,
        },
        {
          id: 65538,
          name: "批评大会1",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:33",
          location: "129礼堂",
          participantnum: 40,
        },
        {
          id: 65539,
          name: "批评大会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:34",
          location: "129礼堂",
          participantnum: 50,
        },
      ],
      tableData2: [
        {
          id: 65535,
          name: "批评大会2",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:30",
          location: "129礼堂",
          participantnum: 10,
        },
        {
          id: 65536,
          name: "批评大会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:31",
          location: "129礼堂",
          participantnum: 20,
        },
        {
          id: 65537,
          name: "新闻发布会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:32",
          location: "129礼堂",
          participantnum: 30,
        },
        {
          id: 65538,
          name: "批评大会2",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:33",
          location: "129礼堂",
          participantnum: 40,
        },
        {
          id: 65539,
          name: "批评大会",
          description:
            "某同学在知乎上批评学校，给学校的招生和声誉造成恶劣影响。",
          host: "德育办公室",
          time: "2021-5-28 14:34",
          location: "129礼堂",
          participantnum: 50,
        },
      ],
    };
  },
  created() {
    this.matchList = this.tableData1;
  },
  methods: {
    viewInfo(row) {
      this.siteSelected = row;
      this.dialogVisible = true;
    },
    leaveTab(activeName, oldActiveName) {
      console.log(activeName, oldActiveName);
    if(activeName =="pane1")
    {
      this.nextTab="pane1";
      this.search();
      this.nextTab="";
    }
    else{
      this.nextTab="pane2";
      this.search();
      this.nextTab="";
    }
    },
    search: function () {
      if ((this.activeTab == "pane1"&&this.nextTab == "")||(this.nextTab == "pane1")) {
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
      } else if ((this.activeTab == "pane2"&&this.nextTab == "")||(this.nextTab == "pane2")) {
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