<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div slot="header" class="clearfix">
         <el-row type="flex" align="middle">
          <el-col :span="18">
            <span><b>待评分活动</b></span>
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
      </div>
      <el-table
        :header-row-style="{height:'20px'}" :cell-style="{padding:'3px'}"
        height="520"
        ref="filterTable"
        :data="matchList"
        style="width: 100%"
        :default-sort="{ prop: 'time', order: 'descending' }"
        stripe
      >
        <el-table-column prop="time" label="开始时间" sortable>
        </el-table-column>
        <el-table-column prop="activityname" label="活动">
        </el-table-column>
        <el-table-column prop="groupname" label="组织">
        </el-table-column>
        <el-table-column prop="ground" label="场地">
        </el-table-column>
        <el-table-column
          prop="scoreingtag"
          label="是否评分"
          column-key="scoreingtag"
          :filters="[
            { text: '已评分', value: true },
            { text: '未评分', value: false },
          ]"
          :filter-method="filterHandler"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.scoreingtag == false ? 'primary' : 'success'"
              disable-transitions
              >{{
                scope.row.scoreingtag == false ? "未评分" : "已评分"
              }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link
              :to="{
                name: 'ScoringActivity',
                params: { ID: scope.row.activityID },
              }"
            >
              <el-button @click="handleClick(scope.row)" type="text"
                >查看详情</el-button
              >
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>


<style scpoed>
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
.groundinfo {
  text-align: right;
}
.maincard {
  border-radius: 15px;
  height: 100%;
}
.maindiv {
  /* background-color: floralwhite; */
  height: 100%;
}
.el-card {
  border-radius: 15px;
}
</style>



<script>
import { GETActivities } from "../../API/http";
import store from "../../state/state.js"
export default {
  name: "ActivityList",
  data() {
    return {
      tagType: {
        '审核中': "warning",
        '待举办': "danger",
        '待反馈': "",
        '已反馈': "success",
        '被驳回': "info",
      },
      axiosdata: null,
      toMatch: "",
      matchList: [],
      content: "",
      building: "同心楼",
      roomno: 666,
      num: 16,
      tableData: [
      ],
      OrgID: store.state.ID,
    };
  },
  created(){
    this.search();
  },
  mounted() {
    const that = this;
    console.log("run mounted");
    // console.log(this.testtitle.substr(0,this.testtitle.search("##")));
    GETActivities({accountNumber:this.OrgID}) //应该加accountNumber(已添加)
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
        if((key=="待反馈")||(key=="已反馈")){
        for (var i = 0; i < data[key].length; i++) {
          var temp = {
            activityID: "22222",
            time: "2016-05-03",
            activityname: "王小虎",
            groupname: "上海市普陀区金沙江路 1516 弄",
            ground: "同心楼666",
            activityState: "审核中",
            scoreingtag:true,
          };
          temp.activityID = data[key][i].id;
          temp.time = data[key][i].activityDate.replace("T", " ");
          temp.activityname = data[key][i].name;
          temp.groupname = data[key][i].organizationName;
          temp.ground = data[key][i].groundName;
          temp.activityState = data[key][i].activityState;
          temp.scoreingtag = data[key][i].hasCredit;
          this.tableData.push(temp);
        }
        }
      }
    },
    publish() {
      this.$message({
        message: "公告发布成功",
        type: "success",
      });
    },
    onSubmit() {
      this.editstate = false;
    },
    formatter(row) {
      return row.address;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    handleClick(row) {
      console.log(row.activityID);
    },
    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.tableData;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.tableData.length ; i++) {
          if (this.tableData[i].activityname.search(this.toMatch) != -1) {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },
  },
};
</script>