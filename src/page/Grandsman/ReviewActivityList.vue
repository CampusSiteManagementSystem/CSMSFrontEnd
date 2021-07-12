<template>
  <div class="maindiv">
    <el-card class="maincard">
    <div class="maintitle">审核预约记录</div>
    <el-tabs v-model="activeTab">
        <el-tab-pane label="待审批" name="panel1">
        <el-table
          :data="tableData.filter((item, index, arr)=>{return item.state === 0})"
          :default-sort = "{prop: 'time', order: 'ascending'}"
          height="480"
        >
        <el-table-column prop="organization" label="组织" width="220">
        </el-table-column>
        <el-table-column prop="activity" label="活动名称" width="380">
        </el-table-column>
        <el-table-column prop="ground" label="场地" width="180">
        </el-table-column>
        <el-table-column prop="time" sortable label="时间" width="180">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="120"
        >
          <template slot-scope="scope1">
            <el-tag
              :type="scope1.row.state === 0 ? 'primary' : (scope1.row.state === 1 ? 'success' : 'danger')"
              disable-transitions
            >
              {{scope1.row.state === 0 ? '待审核' : (scope1.row.state === 1 ? '已批准' : '已驳回')}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column>
            <template slot-scope="scope">
            <router-link
              :to="{ name: 'OrgActivityInfo', params: { ID: scope.row.activityID } }"
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
          :data="tableData.filter((item, index, arr)=>{return item.state != 0})"
          :default-sort = "{prop: 'time', order: 'descending'}"
          height="480"
        >
        <el-table-column prop="organization" sortable label="组织" width="220">
        </el-table-column>
        <el-table-column prop="activity" label="活动名称" width="380">
        </el-table-column>
        <el-table-column prop="ground" sortable label="场地" width="180">
        </el-table-column>
        <el-table-column prop="time" sortable label="时间" width="180">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="120"
          column-key="state"
          :filters="[{ text: '已批准', value: 1 }, { text: '已驳回', value: 2 }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope1">
            <el-tag
              :type="scope1.row.state === 1 ? 'success' : 'danger'"
              disable-transitions
            >
              {{scope1.row.state === 1 ? '已批准' : '已驳回'}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column>
            <template slot-scope="scope">
            <router-link
              :to="{ name: 'OrgActivityInfo', params: { ID: scope.row.activityID } }"
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

export default {
  name: 'ActivityList',
      components: {
    },
    data() {
      const item1 = {
        activityID: '16472',
        organization: '软件学院',
        activity: '年级大会',
        ground: '济事楼434',
        time: '2021-6-26 15:30',
        state: 0
      };
      const item2 = {
        activityID: '16472',
        organization: '软件学院',
        activity: '年级大会',
        ground: '济事楼432',
        time: '2021-6-25 15:30',
        state: 1
      };
      const item3 = {
        activityID: '16472',
        organization: '软件学院',
        activity: '年级大会',
        ground: '济事楼432',
        time: '2021-6-24 15:30',
        state: 2
      };
      return {
        activeTab: 'panel1',
        tableData: Array(20).fill(item1).concat(Array(10).fill(item2)).concat(Array(10).fill(item3))
      }
    },
    methods: {
      filterTag(value, row, column) {
        const property = column["property"];
        return row[property] === value;
    },
    handleClick(){

    },
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
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 8px;
}

.detailinfo {
  padding: 15px;
}


</style>
