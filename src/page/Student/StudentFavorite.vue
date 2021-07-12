<template>
  <div>
    <el-card v-if="!childPage">
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="20">
            <div>
              <h3>我的收藏</h3>
            </div>
          </el-col>
          <el-col :span="4">
            <el-input
              clearable
              v-model="toMatch"
              placeholder="请输入关键字搜索"
              @input="search"
            ></el-input>
          </el-col>
        </el-row>
      </div>

      <el-table :data="matchList" style="width: 100%" stripe>
        <el-table-column
          label="场地编号"
          prop="groundID"
          width="auto"
        ></el-table-column>
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
          <template slot-scope="scope">
            <router-link
              :to="{
                name: 'ShowScheduleforStuFav',
                params: { groundID: scope.row.groundID },
              }"
            >
              <el-button
                size="small"
                @click.native="handleEdit"
                round
                >查看</el-button
              >
            </router-link>
          </template>
        </el-table-column>
      </el-table>
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
  created() {
    this.matchList = this.favoriteList;
  },
  data() {
    return {
      childPage:false,
      favoriteList: [
        {
          groundID: 123,
          isBusy: true,
          position: "F201",
          type: "室内",
        },
        {
          groundID: 124,
          isBusy: false,
          position: "篮球场",
          type: "室外",
        },
        {
          groundID: 125,
          isBusy: true,
          position: "G201",
          type: "室内",
        },
        {
          groundID: 126,
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
    handleEdit(){
      this.childPage = !this.childPage;

    }
  },
  mounted() {
    
   
        this.childPage = this.$route.meta.title == "收藏" ? false : true;
  },
  updated() {
     
      this.childPage = this.$route.meta.title == "收藏" ? false : true;
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