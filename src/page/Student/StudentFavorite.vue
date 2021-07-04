<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="20">
            <p>我的收藏</p>
          </el-col>
          <el-col :span="4">
            <el-input
              v-model="toMatch"
              placeholder="请输入关键字搜索"
              @input="search"
            ></el-input>
          </el-col>
        </el-row>
      </div>

      <el-table :data="matchList" style="width: 100%">
        <el-table-column
          label="地点"
          prop="position"
          width="auto"
        ></el-table-column>

        <el-table-column label="状态" width="auto">
          <template slot-scope="scope">
            <el-tag
              size="medium"
              :type="scope.row.isBusy ? 'danger' : 'success'"
              >{{ scope.row.isBusy ? "占用" : "空闲" }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column label="种类" prop="type" width="auto">
        </el-table-column>

        <el-table-column label="查看" width="auto">
          <el-button size="mini">前往</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  created() {
    this.matchList = this.favoriteList;
  },
  data() {
    return {
      favoriteList: [
        {
          isBusy: true,
          position: "F201",
          type: "室内",
        },
        {
          isBusy: false,
          position: "篮球场",
          type: "室外",
        },
        {
          isBusy: true,
          position: "G201",
          type: "室内",
        },
        {
          isBusy: true,
          position: "A201",
          type: "室内",
        },
      ],
      matchList: [],
      toMatch: "",
    };
  },
  methods: {
    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.favoriteList;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.favoriteList.length; i++) {
          if (
            this.favoriteList[i].position.search(this.toMatch) != -1 ||
            this.favoriteList[i].type.search(this.toMatch) != -1
          ) {
            this.matchList.push(this.favoriteList[i]);
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>