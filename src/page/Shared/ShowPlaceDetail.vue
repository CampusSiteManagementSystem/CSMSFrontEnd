<template>
  <div>
    <el-card class="box-card" v-show="!childPage">
      <div slot="header" class="clearfix">
        <el-row type="flex" align="middle">
          <el-col :span="18">
            <span><b>查看场地</b></span>
          </el-col>
          <el-col :span="6">
            <el-input
              clearable
              v-model="toMatch"
              placeholder="请输入关键字搜索"
              @input="search"
            ></el-input>
          </el-col>
        </el-row>
      </div>

      <div class="text item">
        <el-table
          :header-row-style="{ height: '10px' }"
          :cell-style="{ padding: '1px' }"
          :data="matchList"
          height="500"
          stripe
        >
          <el-table-column prop="groundId" label="场地编号"> </el-table-column>

          <el-table-column label="类型" width="auto">
            <template slot-scope="scope">
              <el-tag
                size="medium"
                :type="scope.row.type == '室内' ? 'primary' : 'success'"
                >{{ scope.row.type }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column prop="name" label="场地名称"> </el-table-column>
          <el-table-column prop="capacity" label="容量"> </el-table-column>
          <el-table-column prop="description" label="详情"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!-- <router-link
                to="/ShowSchedule"
                size="mini"
                type="primary"
                tag="el-button"
                @click="handleEdit(scope.$index, scope.row)"
                class="el-icon-edit choose-button"
                >查看</router-link
              > -->
              <!-- 这个是学生的 -->
              <!-- class="el-icon-edit choose-button" -->
              <router-link
                v-show="membertype"
                :to="{
                  name: 'ShowScheduleforStu',
                  params: {
                    groundId: scope.row.groundId,
                    placeType: scope.row.type,
                    membertype: true,
                  },
                }"
                size="mini"
                type="success"
                tag="el-button"
                @click.native="handleEdit"
                >查看</router-link
              >
              <!-- 这个是组织的 -->
              <router-link
                v-show="othertype"
                :to="{
                  name: 'ShowScheduleforOrg',
                  params: {
                    groundId: scope.row.groundId,
                    placeType: scope.row.type,
                    membertype: false,
                  },
                }"
                size="mini"
                type="success"
                tag="el-button"
                @click="handleEdit(scope.$index, scope.row)"
                >查看</router-link
              >
              <router-link
                :to="{
                  name: 'ApplySiteWindow',
                  query: { groundId: scope.row.groundId },
                }"
                v-show="othertype"
                size="mini"
                type="primary"
                tag="el-button"
                @click="addFood(scope.$index, scope.row)"
                >申请</router-link
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- <el-pagination :page-size="20" layout="prev, pager, next" :total="1000">
        </el-pagination> -->
      </div>
    </el-card>
    <keep-alive v-show="childPage">
      <transition name="fade-transform" mode="out-in">
        <router-view style="height: 100%"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import { GETGrounds } from "../../API/http";
export default {
  data() {
    return {
      tableData: [],

      matchList: [],
      toMatch: "",

      childPage: false,
      axiosdata: null,
      othertype: !this.membertype,
    };
  },

  computed: {},
  mounted() {
    const that = this;

    GETGrounds()
      .then((data) => {
        that.axiosdata = data;
        for (var i = 0; i < data.length; i++) {
          var temp = {
            groundId: "123123",
            name: "F202",
            type: "室外",
            capacity: 100,
            description: "F楼402大教室",
          };
          temp.groundId = data[i].groundId;
          temp.name = data[i].name;
          temp.description = data[i].description;
          temp.type = data[i].type;
          temp.capacity = data[i].area;
          that.tableData.push(temp);
          that.matchList = that.tableData;
          if (that.$route.params.building != "") {
            that.toMatch = that.$route.params.building;
            that.search();
          }
        }
      })
      .catch((err) => {
        that.data = err;
      });

    // this.childPage = this.$route.name == "StuShowPlaceDetail" ? false : true;
    // this.item.details = this.item.building + this.item.room;
    this.childPage =
      this.$route.name == "StuShowPlaceDetail" ||
      this.$route.name == "OrgCheckSite"
        ? false
        : true;
  },
  updated() {
    this.childPage =
      this.$route.name == "StuShowPlaceDetail" ||
      this.$route.name == "OrgCheckSite"
        ? false
        : true;
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "handleEdit", //getOrderInfo为自定义方法
  },
  methods: {
    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.tableData;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.tableData.length; i++) {
          if (
            this.tableData[i].name.search(this.toMatch) != -1 ||
            this.tableData[i].type.search(this.toMatch) != -1
          ) {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },

    handleEdit() {
      console.log("handleedit");
      console.log(this.$route);
      this.childPage =
        this.$route.name == "StuShowPlaceDetail" ||
        this.$route.name == "OrgCheckSite"
          ? false
          : true;
    },
  },
  props: {
    membertype: {
      //true代表学生，false代表组织
      type: Boolean,
      // default: true,
    },
  },
};
</script>

<style scoped>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.box-card{
  height: 100%;
}
.text {
  font-size: 14px;
}
.el-card {
  border-radius: 15px;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
