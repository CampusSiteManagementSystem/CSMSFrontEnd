<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="search">
          <el-cascader
            :options="options"
            :props="{ multiple: true, checkStrictly: true }"
            clearable
          ></el-cascader>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
      <div class="text item">
        <el-table :data="tableData">
          <el-table-column prop="type" label="是否室内"> </el-table-column>
          <el-table-column prop="building" label="楼号"> </el-table-column>
          <el-table-column prop="floor" label="层号"> </el-table-column>
          <el-table-column prop="room" label="房间号"> </el-table-column>
          <el-table-column prop="capacity" label="可容纳人数">
          </el-table-column>
          <el-table-column prop="description" label="详情"> </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <router-link
                to="/ShowSchedule"
                size="mini"
                type="primary"
                tag="el-button"
                @click="handleEdit(scope.$index, scope.row)"
                class="el-icon-edit choose-button"
                >查看</router-link
              >
              <router-link
                to="/ShowSchedule"
                size="mini"
                type="primary"
                tag="el-button"
                @click="addFood(scope.$index, scope.row)"
                class="el-icon-check choose-button"
                >申请</router-link
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :page-size="20"
          layout="prev, pager, next"
          :total="1000"
          
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      type: "室内",
      building: "F",
      floor: "4",
      room: "402",
      capacity: 100,
      description: "F楼大教室",
    };
    const places = [
      {
        // eslint-disable-line no-unused-vars
        value: "indoor",
        label: "室内",
        children: [
          {
            value: "F",
            label: "F",
            children: [
              {
                value: "F1",
                label: "F1",
              },
              {
                value: "F2",
                label: "F2",
              },
              {
                value: "F3",
                label: "F3",
              },
              {
                value: "F4",
                label: "F4",
              },
            ],
          },
        ],
      },
      {
        value: "outdoor",
        label: "室外",
        children: [
          {
            value: "basketballPlace",
            label: "篮球场",
            children: [
              {
                value: "basketballPlace1",
                label: "篮球场1",
              },
              {
                value: "basketballPlace2",
                label: "篮球场2",
              },
            ],
          },
          {
            value: "footballPlace",
            label: "足球场",
            children: [
              {
                value: "footballPlace1",
                label: "足球场1",
              },
              {
                value: "footballPlace2",
                label: "足球场2",
              },
            ],
          },
        ],
      },
    ];

    return {
      tableData: Array(20).fill(item),
      options: places,

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
  methods: {
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

.box-card {
  /* width: 480px; */
}
</style>
