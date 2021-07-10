<template>
  <el-card class="maincard">
    <h1 class="maintitle">发布场地公告</h1>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-row>
          <p><b>选择一个场地以发布公告</b></p>
        </el-row>
        <el-table
          :data="groundTable"
          height="460"
          highlight-current-row
          @row-click="onRowClick"
        >
          <el-table-column prop="name" label="场地名称" min-width="40%">
          </el-table-column>
          <el-table-column prop="id" label="场地ID" min-width="20%">
          </el-table-column>
          <el-table-column
            prop="class"
            label="类别"
            min-width="15%"
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
          <el-table-column prop="area" label="区域" min-width="25%">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-row class="info-row">
          <p><b>当前选择：{{this.nameSelected}}</b></p>
          <p>{{this.description}}</p>
        </el-row>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="公告内容">
            <el-input
              type="textarea"
              :autosize="{ minRows: 7, maxRows: 10 }"
              v-model="form.content"
              placeholder="请输入公告内容"
              maxlength="100"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="publish">发布</el-button>
            <el-button @click="back">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>



<style>
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

.el-header {
  background-color: white;
}
.info-row {
  height: 250px;
}
.el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
}
.maintitle {
  text-align: center;
  font-size: 27px;
}
.groundinfo {
  text-align: center;
}
.el-card {
  height: 99.6%;
}
.el-input {
  height: 50%;
}
</style>



// <script>
export default {
  name: "ReleaseGroundAnnouncement",
  data() {
    return {
      nameSelected: "请选择一个场地以发布公告",
      idSelected: -1,
      description: "",
      form:{
        content: "",
      },
      groundTable: [
        {
          id: "6553",
          name: "济事楼434",
          area: "济事楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "6554",
          name: "济事楼435",
          area: "济事楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "6555",
          name: "济事楼436",
          area: "济事楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "6555",
          name: "济事楼436",
          area: "济事楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "3545",
          name: "篮球场",
          area: "篮球场",
          class: 1,
          description: "仅限体育课教学时间以外预约",
        },
        {
          id: "5454",
          name: "足球场",
          area: "足球场",
          class: 1,
          description: "仅限体育课教学时间以外预约",
        },
        {
          id: "4585",
          name: "F101",
          area: "复楼",
          class: 0,
          description: "暂无描述",
        },
        {
          id: "1254",
          name: "A101",
          area: "安楼",
          class: 0,
          description: "暂无描述",
        },
      ],
    };
  },
  methods: {
    publish() {
      this.$message({
        message: "公告发布成功",
        type: "success",
      });
      this.$router.push({path:'/Home'});
    },
    back() {
      this.$router.push({path:'/Home'});
    },
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    onSubmit() {
      this.editstate = false;
    },
    onRowClick(row) {
      this.nameSelected = row.name;
      this.description = row.description;
      this.idSelected = row.id;
    },
  },
};
</script>