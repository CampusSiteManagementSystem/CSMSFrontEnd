<template>
  <div>
    <el-card class="box-card" v-if="!childPage">
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="18">
            <div>
              <h2>查看场地</h2>
            </div>
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
          height="450"
          stripe
        >
          <el-table-column prop="groundID" label="场地编号"> </el-table-column>

          <el-table-column label="类型" width="auto">
            <template slot-scope="scope">
              <el-tag
                size="medium"
                :type="scope.row.type == '室内' ? 'primary' : 'success'"
                >{{ scope.row.type }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column prop="details" label="房间号"> </el-table-column>
          <el-table-column prop="capacity" label="可容纳人数">
          </el-table-column>
          <el-table-column prop="description" label="详情"> </el-table-column>
          <el-table-column label="操作" width="200">
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
                  params: { groundID: scope.row.groundID, membertype: true },
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
                  params: { groundID: scope.row.groundID, membertype: false },
                }"
                size="mini"
                type="success"
                tag="el-button"
                @click="handleEdit(scope.$index, scope.row)"
                >查看</router-link
              >
              <router-link
                v-show="othertype"
                to="/OrgFrame/ApplySite"
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
    <keep-alive v-else>
      <transition name="fade-transform" mode="out-in">
        <router-view style="height: 100%"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      groundID: "123123",
      type: "室外",
      building: "F",
      floor: "4",
      room: "402",
      capacity: 100,
      description: "F楼402大教室",
      details: this.building + this.room,
    };
    // const places = [
    //   {
    //     // eslint-disable-line no-unused-vars
    //     value: "indoor",
    //     label: "室内",
    //     children: [
    //       {
    //         value: "F",
    //         label: "F",
    //         children: [
    //           {
    //             value: "F1",
    //             label: "F1",
    //           },
    //           {
    //             value: "F2",
    //             label: "F2",
    //           },
    //           {
    //             value: "F3",
    //             label: "F3",
    //           },
    //           {
    //             value: "F4",
    //             label: "F4",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     value: "outdoor",
    //     label: "室外",
    //     children: [
    //       {
    //         value: "basketballPlace",
    //         label: "篮球场",
    //         children: [
    //           {
    //             value: "basketballPlace1",
    //             label: "篮球场1",
    //           },
    //           {
    //             value: "basketballPlace2",
    //             label: "篮球场2",
    //           },
    //         ],
    //       },
    //       {
    //         value: "footballPlace",
    //         label: "足球场",
    //         children: [
    //           {
    //             value: "footballPlace1",
    //             label: "足球场1",
    //           },
    //           {
    //             value: "footballPlace2",
    //             label: "足球场2",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ];

    return {
      tableData: Array(20).fill(item),
      // options: places,
      othertype: !this.membertype,
      matchList: [],
      toMatch: "",
      item: item,
      childPage: false,
      // baseUrl,
      // baseImgPath,
      // city: {},
      // offset: 0,
      // limit: 20,
      // count: 0,
      // // tableData: [],
      // currentPage: 1,
      // selectTable: {},
      // dialogFormVisible: false,
      // categoryOptions: [],
      // selectedCategory: [],
      // address: {},
    };
  },
  created() {
    this.matchList = this.tableData;
  },
  mounted() {
    console.log("run mounted");
    this.item.details = this.item.building + this.item.room;
    this.childPage = this.$route.name == "StuShowPlaceDetail" ? false : true;
  },
  updated() {
    this.childPage = this.$route.name == "StuShowPlaceDetail" ? false : true;
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
          if (this.tableData[i].details.search(this.toMatch) != -1) {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },
    handleEdit() {
      console.log("handleedit");
      this.childPage = this.$route.name == "StuShowPlaceDetail" ? false : true;
    },

    // mounted(){

    // },F
    // beforeUpdate() {

    // }

    // handleEdit() {},
    // handleEdit(index, row) {

    //   this.selectTable = row;
    //   this.address.address = row.address;
    //   this.dialogFormVisible = true;
    //   this.selectedCategory = row.category.split("/");
    //   if (!this.categoryOptions.length) {
    //     this.getCategory();
    //   }
    // },
    // addFood(index, row) {
    //   this.$router.push({ path: "addGoods", query: { restaurant_id: row.id } });
    // },
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
.text {
  font-size: 14px;
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
