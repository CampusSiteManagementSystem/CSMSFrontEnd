<template>
  <div class="page">
    <el-card class="infoMain">
      <div>
        <h2>添加用户</h2>
      </div>
      <el-row>
        <el-col :span="18" :offset="3">
          <div>
            <h3>用户信息</h3>
          </div>
          <div id="content">
            <el-table
              :cell-style="columnStyle"
              :show-header="false"
              :data="tableData"
              border
              style="width: 80%; margin-top: 20px"
            >
              <el-table-column width="180" prop="title" label="标题">
              </el-table-column>
              <el-table-column prop="content" label="内容">
                <template slot-scope="scope">
                  <el-input
                    size="medium"
                    v-model="scope.row.content"
                  ></el-input>
                </template>
              </el-table-column>
            </el-table>
            <div class="modify" style="float: right">
              <el-button type="primary" @click="returnback">取消</el-button>
              <el-button type="primary" @click="success">提交</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.info {
  text-align: left;
}

p {
  color: rgb(0, 0, 0);
  position: relative;
}

.image {
  margin-top: -0.5cm;
}

.modify {
  margin-top: 1cm;
  margin-left: 5cm;
}

.pic {
  height: 45%;
  width: 45%;
  margin-top: 1cm;
  margin-left: 2.2cm;
}
.el-card {
  border-radius: 15px;
}
</style>

<script>

//import { POSTOrganizations } from "../../API/http";

export default {
  data() {
    return {
      tableData: [
        {
          title: "名称",
          content: "",
          change: "true",
        },
        {
          title: "负责人",
          content: "",
          change: "true",
        },
        {
          title: "联系方式",
          content: "",
          change: "true",
        },
        {
          title: "邮箱",
          content: "",
          change: "true",
        },
        {
          title: "详细信息",
          content: "",
          change: "true",
        },
        {
          title: "组织状态",
          content: "",
          change: "true",
        },
      ],
      isSet: false,
    };
  },

  methods: {
    returnback() {
      this.$router.push({ path: "MaintainUserInfo" });
    },
    columnStyle({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0) {
        return "background:#EFFBEF; font-weight: 700;";
      }
    },

    success() {
      this.isSet = false;
      this.$alert("提交成功！", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });

      this.$router.push({ path: "/SysAdminFrame/MaintainUserInfo" });
    },
  },
};
</script>