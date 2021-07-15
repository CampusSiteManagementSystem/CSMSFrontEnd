<template>
  <div class="maindiv">
    <el-card class="maincard" style="border-radius: 12px">
     <div slot="header" class="clearfix">
            <span><b>公告</b></span>
          </div>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="系统公告" name="pane1">
          <el-table
            :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}"
            :data="systemTableData"
            :default-sort="{ prop: 'systemAnnouncementDate', order: 'descending' }"
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
            <el-table-column prop="systemAnnouncementDate" sortable label="时间" min-width="25%">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="场地公告" name="pane2">
          <el-table
            :header-row-style="{height:'20px'}" :cell-style="{padding:'5px'}"
            :data="groundTableData"
            :default-sort="{ prop: 'maintenanceAnnouncementDate', order: 'descending' }"
            :show-header="false"
            style="width: 100%"
            max-height="480"
            stripe
          >
            <el-table-column prop="title" label="标题" min-width="50%">
              <template slot-scope="scope"> 
                <el-button @click="viewInfo(scope.row)" type="text">{{
                    scope.row.title
                }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="groundName" sortable label="场地" min-width="25%">
            </el-table-column>
            <el-table-column prop="maintenanceAnnouncementDate" sortable label="时间" min-width="25%">
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
import { GETMaintenanceAnnouncements, GETSystemAnnouncements } from "../../API/http";

export default {
  name: "AnnouncementList",
  data() {
    return {
      title: "",
      content: "",
      dialogVisible: false,
      activeTab: "pane1",
      data: [],
      groundTableData: [],
      systemTableData: [],
    };
  },
  mounted() {
    GETMaintenanceAnnouncements()
      .then((data) => {
        this.groundTableData = this.dealWithMaintenanceAnnouncements(data);
      })
      .catch((err) => {
        this.data = err;
      });
      
    GETSystemAnnouncements()
      .then((data) => {
        this.systemTableData = this.dealWithSystemAnnouncements(data);
      })
      .catch((err) => {
        this.data = err;
      });
  },

  methods: {
    viewInfo(row) {
      this.dialogVisible = true;
      this.title = row.title;
      this.content = row.content;
    },
    dealWithMaintenanceAnnouncements(data) {
      var gAnnouncement = [];
      console.log("run dealwith");
      for (var i = 0; i < data.length; i++) {
        var temp =   {
          groundId: "1000003",
          groundName: "G302",
          maintenanceAnnouncementDate: "2021-07-13T09:54:53",
          title: "",
          content: "",
        };
        temp.groundId = data[i].groundId;
        temp.groundName = data[i].groundName;
        temp.maintenanceAnnouncementDate = data[i].maintenanceAnnouncementDate.replace("T", " ");
        temp.title = data[i].content.substr(0, data[i].content.search("##"));
        temp.content = data[i].content.slice(data[i].content.search("##") + 2);
        gAnnouncement.push(temp);
      }
        return gAnnouncement;
    },
    dealWithSystemAnnouncements(data) {
      var sysAnnouncement = [];
      console.log("run dealwith");
      for (var i = 0; i < data.length; i++) {
        var temp = {
          accountNumber: "",
          title: "",
          systemAnnouncementDate: "",
          content: "",
        };
        temp.accountNumber = data[i].accountNumber;
        temp.systemAnnouncementDate = data[i].systemAnnouncementDate.replace(
          "T",
          " "
        );
        temp.title = data[i].content.substr(0, data[i].content.search("##"));
        temp.content = data[i].content.slice(data[i].content.search("##") + 2);
        sysAnnouncement.push(temp);
      }
      return sysAnnouncement;
    },
  }
};
</script>

<style scpoed>
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

/* .maintabs {
  border-radius: 8px;
} */
.el-card {
  border-radius: 15px;
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
.maincard {
  height: 100%;
}
.detailinfo {
  padding: 15px;
}

</style>
