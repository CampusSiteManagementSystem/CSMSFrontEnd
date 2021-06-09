<template>
<div>
  <el-container style="border: 1px solid #eee">
    <sysside></sysside>
      <el-main>
        <h1>维护场地信息</h1>
    
        <el-table :data="groundTable">
            <el-table-column prop="name" label="场地名称" width="240">
            </el-table-column>
            <el-table-column prop="id" label="场地ID" width="120">
            </el-table-column>
            <el-table-column prop="area" label="区域" width="160">
            </el-table-column>
            <el-table-column
              prop="class"
              label="类别"
              width="100"
              :filters="[{ text: '室内', value: '室内' }, { text: '室外', value: '室外' }]"
              :filter-method="filterTag"
              filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.tag === '室内' ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.class}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="description" label="描述" width="300">
            </el-table-column>
            <el-table-column width="180">
              <el-button type="primary">编辑信息</el-button>
            </el-table-column>
        </el-table>
      </el-main>
  </el-container>
</div>
</template>

<script>
import Sysside from '@/components/Sysside.vue'

export default {
  name: 'GroundList',
      components: {
      Sysside
    },
    data() {
      const ground = {
        id: '6553',
        name: '济事楼434',
        area: '济事楼',
        class: '室内',
        description: '暂无描述'
      };
      return {
        groundTable: Array(20).fill(ground)
      }
    }
  };
</script>

<style scoped>
  .el-main {
    text-align: left;
    line-height: 50px;
    margin-left: 100px;
    margin-right: 100px;
  }
  h1{
    font-size: 25px;
  }
</style>