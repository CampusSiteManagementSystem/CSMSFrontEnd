<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div>
        <h2>查看场地</h2>
      </div>
      <el-table
        :data="tableData"
        height="450"
      >
        <el-table-column
            prop="name"
            label="场地名称">
        </el-table-column>
        <el-table-column
            prop="description"
            label="场地描述"
            width="450">
        </el-table-column>
            <el-table-column
              prop="type"
              label="类别"
              column-key="type"
              :filters="[{ text: '室内', value: 0 }, { text: '室外', value: 1 }]"
              :filter-method="filterTag"
              filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.type === 0 ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.type === 0 ? '室内' : '室外'}}</el-tag>
              </template>
            </el-table-column>
        <el-table-column
            prop="area"
            label="面积/平方米">
        </el-table-column>
        <el-table-column
            width="100"
            label="操作">
            <template slot-scope="scope">
              <router-link
              :to="{ name: 'ShowScheduleforStu', params: { groundID: scope.row.id } }"
              >
                <el-button type="text" size="small">查看详情</el-button>
              </router-link>
            </template>
          </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>


<style>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

.el-header {
  background-color: white;
}
.el-aside {
  background-color: white;
}
.el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
}
.maintitle {
  text-align: center;
  font-size: 27px;
}
.maintabs {
  border-radius: 8px;
}
.el-card {
  height: 100%;
}
.el-input {
  height: 50%;
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

  <script>
    export default {
      data() {
        return {
          tableData: [{
            name: '篮球场',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...',
            type: 1,
            area: 520.1314
          },{
            name: '足球场',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...',
            type: 1,
            area: 520.1314
          }, {
            name: 'A101',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...',
            type: 0,
            area: 520.1314
          }, {
            name: 'A102',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...',
            type: 0,
            area: 520.1314
          }, {
            name: 'A103',
            description: '肌肉与肌肉的碰撞，友情和爱情的结合，兄贵和van样在这里发出...',
            type: 0,
            area: 520.1314
          }
          ]
        }
      },
      methods: {
        filterTag(value, row, column) {
        const property = column["property"];
        return row[property] === value;
      },
      }
    }
  </script>