<template>
  <div class="page">
    <el-card>
      <div>
        <h2>组织用户信息</h2>
      </div>
      <el-row>
        <el-col :span="12">
          <div>
            <h3>组织画像</h3>
          </div>
          <div class="image">
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="pic" />
          </div>
          <div class="modify">
            <el-button type="primary" @click="success">更改照片</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          
          <div>
            <h3>组织信息</h3>
          </div>
          <el-table :show-header="false" :data="tableData" :cell-style="columnStyle" border
            style="width: 80%; margin-top: 20px">
            <el-table-column width="180" prop="title" label="标题">
            </el-table-column>
            <el-table-column prop="content" label="内容">
              <template slot-scope="scope">
                <span v-if="scope.row.change=='false'||isSet==false">{{scope.row.content}}</span>
                <span v-else>
                  <el-input size="medium" v-model="scope.row.content"></el-input>
                </span>
              </template>
            </el-table-column>
          </el-table>
          <div v-if="isSet==false" class="modify">
            <el-button type="primary" @click="edit">编辑个人信息</el-button>
          </div>
          <div v-else  class="modify">
            <el-button type="primary" @click="success">完成</el-button>
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

.image{
  margin-top: -0.5cm;
}

.modify {
  margin-top: 1cm;
  margin-left: 5cm;
}

.pic {
  height: 57%;
  width: 57%;
  margin-top: 1cm;
  margin-left: 2.2cm;
}
</style>




<script>
export default {
  data() {
    return {
      tableData: [{
        change: 'false',
        title: '组织账号',
        content: '1850668',
      }, {
        change: 'false',
        title: '组织名称',
        content: '数据库小组',
      }, {
        change: 'false',
        title: '组织类型',
        content: '班级',
      }, {
        change: 'false',
        title: '信用分',
        content: '100',
      }, {
        change: 'true',
        title: '邮箱地址',
        content: 'www.ljj@sjk.com',
      }, {
        change: 'true',
        title: '负责人',
        content: '李俊杰',
      }, {
        change: 'true',
        title: '联系方式',
        content: '14515485465',
      }, {
        change: 'true',
        title: '详细信息',
        content: '数据库小组ddl赶工中！',
      }],
      radio: "1",
      textarea: "",
      isSet: false
    };
  },

  methods: {
    columnStyle({
      row,
      column,
      rowIndex,
      columnIndex
    }) {
      console.log(row, column, rowIndex, columnIndex, "row");
      if (columnIndex == 0 && rowIndex < 4) { //第三第四列的背景色就改变了2和3都是列数的下标
        return 'background:#FBFBEF; font-weight: 700;'
      } else if (columnIndex == 0) {
        return 'background:#EFFBEF; font-weight: 700;'
      }
    },
    edit() {
      this.isSet = true;
    },
    success() {
      this.isSet = false;
      this.$alert('编辑成功！', {
        confirmButtonText: '确定',
        callback: action => {
          if (action === 'confirm') {
            this.$message({
              type: 'success',
              message: '编辑成功'
            });
          }
        }
      });
    }
  }
};
</script>