<template>
  <div>
    <el-card class="maincard" v-if="!childPage">
      <div slot="header" class="clearfix">
        <el-row type="flex" align="middle">
          <el-col :span="18">
            <span><b>我的收藏 </b></span>
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
      <!-- <div slot="header" class="clearfix">
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
      </div> -->

      <el-table :data="matchList" style="width: 100%" stripe height="500">
        <el-table-column
          label="场地编号"
          prop="groundId"
          width="auto"
        ></el-table-column>
        <el-table-column
          label="地点"
          prop="groundName"
          width="auto"
        ></el-table-column>

        <el-table-column label="状态" width="auto">
          <template slot-scope="scope">
            <el-tag
              size="medium"
              :type="
                scope.row.groundState == '空闲' ? 'successdanger' : 'danger'
              "
              >{{ scope.row.groundState }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column label="种类" prop="type" width="auto">
        </el-table-column>

        <el-table-column label="查看" width="auto">
          <template slot-scope="scope">
            <router-link
              :to="{
                name: 'ShowScheduleforOrg',
                params: { groundId: scope.row.groundId },
              }"
              style="padding-right: 5px"
              @click.native="handleEdit"
            >
              <el-button size="small" round>查看</el-button>
            </router-link>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, matchList)"
              circle
              type="danger"
              icon="el-icon-delete"
              size="small"
            >
            </el-button>
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
import {
  GETOrgFavorites,
  //   DELETEOrgFavorites,
   DELETEOrgFavorites,
} from "../../API/http";
import store from "../../state/state";
export default {
  data() {
    return {
      id: store.state.ID,
      childPage: false,
      favoriteList: "",
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
            this.favoriteList[i].groundName.search(this.toMatch) != -1 ||
            this.favoriteList[i].type.search(this.toMatch) != -1
          ) {
            this.matchList.push(this.favoriteList[i]);
          }
        }
      }
    },
    handleEdit() {
      this.childPage = !this.childPage;
    },
    fetchData() {
      const that = this;
      GETOrgFavorites({accountNumber:that.id})
        .then((data) => {
          that.favoriteList = data;
          this.matchList = this.favoriteList;
        })
        .catch((err) => {
          this.data = err;
        });
    },
    deleteRow(index, rows) {
      var tempRow=rows[index];
      rows.splice(index, 1);
      console.log(tempRow)
      const that=this;



      DELETEOrgFavorites({accountNumber:that.id,
      groundId:tempRow.groundId
      })
        .then((data) => {
          console.log("data",data);
          this.fetchData();
        })
        .catch((err) => {
          this.data = err;
        });

      




     
    },
  },
  mounted() {
    this.fetchData();

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
.maincard{
  height: 100%;
}
.el-card {
  border-radius: 15px;
}
</style>