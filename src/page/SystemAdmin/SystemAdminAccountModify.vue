<template>
  <div class="page">
    <el-card class="infoMain">
      <div>
        <h2>用户信息</h2>
      </div>
      <el-row>
        <el-col :span="12">
          <div>
            <h3>用户头像</h3>
          </div>
          <div class="image">
            <img
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              class="pic"
            />
          </div>
          <div class="modify">
            <el-button type="primary" @click="success">更改照片</el-button>
          </div>
        </el-col>
        <el-col :span="12">
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
                  <span v-if="isSet == false">{{ scope.row.content }}</span>
                  <span v-else>
                    <el-input
                      size="medium"
                      v-model="scope.row.content"
                    ></el-input>
                  </span>
                </template>
              </el-table-column>
            </el-table>
            <div v-if="isSet == false" class="modify">
              <el-button type="primary" @click="returnback">取消</el-button>
              <el-button type="primary" @click="edit">编辑</el-button>
            </div>
            <div v-else class="modify">
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
.infoMain {
  height: 100%;
}

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
</style>




<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "账号",
          content: "1850668",
        },
        {
          title: "名称",
          content: "王某",
        },
        {
          title: "身份",
          content: "学生",
        },
        {
          title: "信用分",
          content: "90",
        },
        {
          title: "学院",
          content: "软件学院",
        },
        {
          title: "联系方式",
          content: "14515485465",
        },
      ],
      isSet: false,
    };
  },

  methods: {
    returnback() {
      this.$router.push({ path: "MaintainUserInfo" });
    },
    columnStyle({
      row,
      column,
      rowIndex,
      columnIndex
    }) {
      console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0) {
        return 'background:#EFFBEF; font-weight: 700;'
      }
    },
    edit() {
      this.isSet = true;
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
    },
  },
};
</script>