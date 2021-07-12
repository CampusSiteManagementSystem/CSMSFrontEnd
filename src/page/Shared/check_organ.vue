<template>
  <div class="maindiv">
    <el-card class="maincard">
      <el-row>
        <el-col :span="18">
          <div>
            <h2>查看组织</h2>
          </div>
        </el-col>
        <el-col :span="6">
          <el-input
            clearable
            v-model="toMatch"
            placeholder="输入组织名称以搜索"
            @input="search"
          ></el-input>
        </el-col>
      </el-row>
      <el-table
        :header-row-style="{ height: '10px' }"
        :cell-style="{ padding: '5px' }"
        :data="matchList"
        :default-sort="{ prop: 'time', order: 'ascending' }"
        height="450"
        stripe
      >
        <el-table-column prop="name" label="组织名称"> </el-table-column>
        <el-table-column prop="description" label="组织描述" width="450">
        </el-table-column>
        <el-table-column prop="manager" label="负责人"> </el-table-column>
        <el-table-column
          prop="telephone"
          label="联系方式"
          width="250"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="type" label="组织类型" align="center">
          <template slot-scope="scope">
            {{ scope.row.type == 1 ? "班级" : "社团" }}
          </template>
        </el-table-column>
        <el-table-column width="100" label="操作">
          <template slot-scope="scope">
            <el-button @click="viewInfo(scope.row)" type="text" size="small"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :visible.sync="dialogVisible" width="50%" class="dialog">
      <span slot="title">
        <h3>{{ orgSelected.name }}</h3>
      </span>
      <div class="content">
        <el-row>
          <el-col :span="8">
            <div class="image">
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                class="pic"
              />
            </div>
          </el-col>
          <el-col :span="16">
            <p><b>组织账号：</b>{{ orgSelected.accountNum }}</p>
            <p>
              <b>组织类型：</b>{{ orgSelected.type == 1 ? "班级" : "社团" }}
            </p>
            <p><b>邮箱：</b>{{ orgSelected.email }}</p>
            <p><b>负责人：</b>{{ orgSelected.manager }}</p>
            <p><b>联系电话：</b>{{ orgSelected.telephone }}</p>
            <p><b>组织简介：</b>{{ orgSelected.description }}</p>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
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

.maintabs {
  border-radius: 8px;
}
.content {
  height: 320px;
}
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
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
      dialogVisible: false,
      orgSelected: {
        accountNum: "",
        name: "",
        type: 0,
        description: "",
        manager: "",
        telephone: "",
        email: "",
      },
      //表格的返回值
      tableData: [
        {
          accountNum: "1950668",
          name: "数据库小组1",
          type: 1,
          description: "2021春数据库课程设计小组",
          manager: "李俊杰",
          telephone: "12322233333",
          email: "1950668@tongji.edu.cn",
        },
        {
          accountNum: "1956545",
          name: "数据库小组2",
          type: 1,
          description: "2021春数据库课程设计小组",
          manager: "李俊杰",
          telephone: "12322233333",
          email: "1950668@tongji.edu.cn",
        },
        {
          accountNum: "2034534",
          name: "数据库小组3",
          type: 1,
          description: "2021春数据库课程设计小组",
          manager: "李俊杰",
          telephone: "12322233333",
          email: "1950668@tongji.edu.cn",
        },
        {
          accountNum: "2156666",
          name: "数据库小组4",
          type: 1,
          description: "2021春数据库课程设计小组",
          manager: "李俊杰",
          telephone: "12322233333",
          email: "1950668@tongji.edu.cn",
        },
        {
          accountNum: "1920001",
          name: "数据库小组5",
          type: 1,
          description: "2021春数据库课程设计小组",
          manager: "李俊杰",
          telephone: "12322233333",
          email: "1950668@tongji.edu.cn",
        },
      ],
    };
  },
  created() {
    this.matchList = this.tableData;
  },

  methods: {
    viewInfo(row) {
      this.orgSelected = row;
      this.dialogVisible = true;
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