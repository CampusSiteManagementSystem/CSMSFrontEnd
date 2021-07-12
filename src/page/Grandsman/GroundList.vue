<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div slot="header" class="clearfix">
            <el-row type="flex" align="middle">
          <el-col :span="18">
            <span><b>维护场地信息</b></span>
          </el-col>
          <el-col :span="6">
            <el-input
              clearable
              v-model="toMatch"
              placeholder="输入场地名称以搜索"
              @input="search"
            ></el-input>
          </el-col>
        </el-row>
          </div>
      <el-table
        :data="matchList"
        height="520"
        :header-row-style="{ height: '20px' }"
        :cell-style="{ padding: '5px' }"
        stripe=""
      >
        <el-table-column prop="name" label="场地名称" min-width="25%">
        </el-table-column>
        <el-table-column prop="id" label="场地ID" min-width="12.5%">
        </el-table-column>
        <el-table-column prop="area" label="区域" min-width="15%">
        </el-table-column>
        <el-table-column
          prop="class"
          label="类别"
          min-width="8%"
          column-key="class"
          :filters="[
            { text: '室内', value: 0 },
            { text: '室外', value: 1 },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.class === 0 ? 'primary' : 'success'"
              disable-transitions
              >{{ scope.row.class === 0 ? "室内" : "室外" }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" min-width="27.5%">
        </el-table-column>
        <el-table-column min-width="12%">
          <template slot-scope="scope">
            <router-link
              :to="{ name: 'GroundInfo', params: { ID: scope.row.id } }"
              ><el-button type="text">编辑信息</el-button></router-link
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "GroundList",
  components: {},
  data() {
    const ground = {
      id: "6553",
      name: "济事楼434",
      area: "济事楼",
      class: 0,
      description: "暂无描述",
    };
    return {
      toMatch: "",
      matchList: [],
      groundTable: Array(20).fill(ground),
    };
  },
  created(){
    this.search();
  },
  methods: {
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.groundTable;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.groundTable.length ; i++) {
          if (this.groundTable[i].name.search(this.toMatch) != -1) {
            this.matchList.push(this.groundTable[i]);
          }
        }
      }
    },
  },
};
</script>

<style scoped>
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.clearfix {
  font-size: 20px;
}
.groundinfo {
  text-align: right;
}
.maincard{
  border-radius: 15px;
  height: 100%;
}
.maindiv {
  height: 100%;
}
</style>