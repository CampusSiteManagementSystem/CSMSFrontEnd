<template>
  <div class="page">
    <el-card class="infoMain">
      <div>
        <h2>组织用户信息</h2>
      </div>
      <el-row>
        <el-col :span="12">
                <div>
        <h3>组织画像</h3>
                </div><div class="image">
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="pic" />
                </div>
          <div class="modify">
        <el-button type="primary" @click="success">更改照片</el-button>
        </div>
        </el-col>
        <el-col :span="12" >
                          <div>
        <h3>组织信息</h3>
      </div>
          <el-table :show-header="false" :data="tableData" :cell-style="columnStyle" border
            style="width: 80%; margin-top: 20px">
            <el-table-column width="180" prop="title" label="标题">
            </el-table-column>
            <el-table-column prop="content" label="内容">
            </el-table-column>
          </el-table>
                <div class="modify">
        <el-button type="primary" @click="success">编辑个人信息</el-button>
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

.image{
  margin-top: -0.5cm;
}

.modify {
  margin-top: 1cm;
  margin-left: 5cm;
}

.pic {
  height: 50%;
  width: 50%;
  margin-top: 1cm;
  margin-left: 2.2cm;
}
</style>




<script>
export default {
  data() {
    return {
              tableData: [{
          title: '组织账号',
          content: '1850668',
        }, {
          title: '组织名称',
          content: '数据库小组',
        }, {
          title: '组织类型',
          content: '班级',
        }, {
          title: '信用分',
          content: '100',
        }, {
          title: '邮箱地址',
          content: 'www.ljj@sjk.com',
        }, {
          title: '负责人',
          content: '李俊杰',
        }, {
          title: '联系方式',
          content: '14515485465',
        }],
      radio: "1",
      textarea: "",
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
      if (columnIndex == 0&&rowIndex <4) { //第三第四列的背景色就改变了2和3都是列数的下标
        return 'background:#FBFBEF; font-weight: 700;'
      }
      else if(columnIndex == 0)
      {
        return 'background:#EFFBEF; font-weight: 700;'
      }
    },
    success() {
      this.$alert('编辑成功！', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
}


};
</script>