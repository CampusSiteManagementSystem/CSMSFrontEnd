<template>
  <div class="maindiv">
    <el-card class="maincard">
      <el-row>
        <el-col :span="18">
          <div>
            <h2>查看场地</h2>
          </div>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="toMatch"
            placeholder="输入场地名称以搜索"
            @input="search"
          ></el-input>
        </el-col>
      </el-row>
      <el-table :data="matchList" height="450">
        <el-table-column prop="name" label="场地名称"> </el-table-column>
        <el-table-column prop="description" label="场地描述">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类别"
          column-key="type"
          :filters="[
            { text: '室内', value: 0 },
            { text: '室外', value: 1 },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.type === 0 ? 'primary' : 'success'"
              disable-transitions
              >{{ scope.row.type === 0 ? "室内" : "室外" }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="area" label="面积/平方米"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link
              :to="{
                name: 'ShowScheduleforStu',
                params: { groundID: scope.row.id },
              }"
            >
              <el-button type="text" size="small">查看详情</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>


<style scpoed>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.miancard{
  height: 100%;
}
.el-card {
  border-radius: 15px;
}
.maintitle {
  text-align: center;
  font-size: 27px;
}
.maintabs {
  border-radius: 8px;
}
.detailinfo {
  padding: 15px;
}
</style>

  <script>
export default {
  data() {
    return {
      toMatch: "",
      matchList: [],
      tableData: [
        {
          name: "篮球场",
          description:
            "肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...",
          type: 1,
          area: 520.1314,
        },
        {
          name: "足球场",
          description:
            "肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...",
          type: 1,
          area: 520.1314,
        },
        {
          name: "A101",
          description:
            "肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...",
          type: 0,
          area: 520.1314,
        },
        {
          name: "A102",
          description:
            "肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...",
          type: 0,
          area: 520.1314,
        },
        {
          name: "A103",
          description:
            "肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...",
          type: 0,
          area: 520.1314,
        },
      ],
    };
  },
  created() {
    this.matchList = this.tableData;
  },
  methods: {
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    search: function () {
      if (this.toMatch == "") {
        this.matchList = this.tableData;
      } else {
        this.matchList = [];
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].name.search(this.toMatch) != -1) {
            this.matchList.push(this.tableData[i]);
          }
        }
      }
    },
  },
};
</script>