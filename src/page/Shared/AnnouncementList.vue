<template>
  <div class="maindiv">
    <el-card class="maincard" style="border-radius: 12px">
      <div class="main-title">公告</div>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="系统公告" name="pane1">
          <el-table
            :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}"
            :data="systemTableData"
            :default-sort="{ prop: 'time', order: 'descending' }"
            :show-header="false"
            style="width: 100%"
            max-height="480"
            stripe
          >
            <el-table-column prop="title" label="标题" min-width="75%">
              <template slot-scope="scope"> 
                <el-button @click="viewInfo(scope.row)" type="text">{{
                    scope.row.title
                }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="time" sortable label="时间" min-width="25%">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="场地公告" name="pane2">
          <el-table
            :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}"
            :data="groundTableData"
            :default-sort="{ prop: 'time', order: 'descending' }"
            :show-header="false"
            style="width: 100%"
            max-height="480"
            stripe
          >
            <el-table-column prop="title" label="标题" min-width="75%">
              <template slot-scope="scope"> 
                <el-button @click="viewInfo(scope.row)" type="text">{{
                    scope.row.title
                }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="time" sortable label="时间" min-width="25%">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      class="dialog">
      <span slot="title">
        <h3>{{title}}</h3>
      </span>
        <div class="content">
        <span>{{content}}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "AnnouncementList",
  data() {
    const groundItem = {
      title: "关于图书馆暂停开放的通知",
      time: "2021-6-25 15:30",
      ground: "15335",
      content:
        "因疫情防控需要，图书馆于7月1日起暂停开放，恢复时间另行通知。不便之处，敬请谅解。",
    };
    const systemItem = {
      title: "关于系统停机维护的通知",
      time: "2021-7-5 15:30",
      accountNum: "14335",
      content:
        "本系统将于7月10日23:00至7月11日7:00停机维护。不便之处，敬请谅解。",
    };
    return {
      title: "",
      content: "",
      dialogVisible: false,
      activeTab: "pane1",
      groundTableData: Array(20).fill(groundItem),
      systemTableData: Array(20).fill(systemItem),
    };
  },
  methods: {
    viewInfo(row) {
      this.dialogVisible = true;
      this.title = row.title;
      this.content = row.content;
    }
  }
};
</script>

<style>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.content{
  height: 320px;
}
.el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
}
/* .maintabs {
  border-radius: 8px;
} */
.el-card {
  height: 100%;
}
.el-input {
  height: 50%;
}
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
}
.main-title {
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 8px;
}
.detailinfo {
  padding: 15px;
}
.el-col {
  padding: 5px;
  /* height: */
  height: 100%;
}
.header-row {
  background-color: rgb(158, 29, 29);
}
</style>
