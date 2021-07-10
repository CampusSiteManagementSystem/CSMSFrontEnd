<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div>
        <h2>查看活动</h2>
      </div>
    <el-tabs v-model="activeTab">
        <el-tab-pane label="未举办" name="pane1">
        <el-table
          :header-row-style="{height:'10px'}" :cell-style="{padding:'5px'}"
          :data="tableData"
          :default-sort = "{prop: 'time', order: 'ascending'}"
          height="450"
        >
          <el-table-column
              prop="name"
              label="活动名称">
          </el-table-column>
          <el-table-column
              prop="description"
              label="描述"
              width="450">
          </el-table-column>
          <el-table-column
              prop="host"
              label="举办组织">
          </el-table-column>
          <el-table-column
              prop="time"
              label="时间"
              width="250"
              sortable>
          </el-table-column>
          <el-table-column
              prop="location"
              label="地点">
          </el-table-column>
          <el-table-column
            fixed="right"
            width="100"
            label="操作">
            <template slot-scope="scope">
              <router-link
              :to="{ name: 'ActivityInfo', params: { ID: scope.row.id } }"
              >
                <el-button type="text" size="small">查看详情</el-button>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        </el-tab-pane>
        <el-tab-pane label="已举办" name="pane2">
        <el-table
          header-row-style="{height:'10px'}" :cell-style="{padding:'5px'}"
          :data="tableData"
          :default-sort = "{prop: 'time', order: 'ascending'}"
          height="450"
        >
          <el-table-column
              prop="name"
              label="活动名称">
          </el-table-column>
          <el-table-column
              prop="description"
              label="描述"
              width="450">
          </el-table-column>
          <el-table-column
              prop="host"
              label="举办组织">
          </el-table-column>
          <el-table-column
              prop="time"
              label="时间"
              width="250"
              sortable>
          </el-table-column>
          <el-table-column
              prop="location"
              label="地点">
          </el-table-column>
          <el-table-column
            fixed="right"
            width="100"
            label="操作">
            <template slot-scope="scope">
              <router-link
              :to="{ name: 'ActivityInfo', params: { ID: scope.row.id } }"
              >
                <el-button type="text" size="small">查看详情</el-button>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>


<style>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

.el-header {
  background-color: white;
}
.el-aside {
  background-color: white;
}
.el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
}
.el-card {
  height: 100%;
}
.el-input {
  height: 50%;
}
.detailinfo {
  padding: 15px;
}
.el-col {
  padding: 5px;
  /* height: */
  height: 100%;
}
.header-row {
  background-color: rgb(158, 29, 29);
}
</style>

<script>
  export default {
    data() {
      return {    
        activeTab: 'pane1',
        tableData: [{
          id: 65535,
          name: '批评大会',
          description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
          host: '德育办公室',
          time: '2021-5-28 14:30',
          location: '129礼堂'
        }, {
          id: 65536,
          name: '批评大会',
          description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
          host: '德育办公室',
          time: '2021-5-28 14:31',
          location: '129礼堂'
        }, {
          id: 65537,
          name: '批评大会',
          description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
          host: '德育办公室',
          time: '2021-5-28 14:32',
          location: '129礼堂'
        }, {
          id: 65538,
          name: '批评大会',
          description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
          host: '德育办公室',
          time: '2021-5-28 14:33',
          location: '129礼堂'
        }, {
          id: 65539,
          name: '批评大会',
          description: '某王姓同学在知乎上批评学校，给学校的招生和声誉造成了恶劣...',
          host: '德育办公室',
          time: '2021-5-28 14:34',
          location: '129礼堂'
        }
        ]
      }
    }
  }
</script>