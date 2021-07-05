<template>
  <div class="maindiv">
    <el-card class="maincard">
    <h1 class="maintitle">维护场地信息</h1>
        <el-table :data="groundTable" height="520">
            <el-table-column prop="name" label="场地名称" width="300">
            </el-table-column>
            <el-table-column prop="id" label="场地ID" width="150">
            </el-table-column>
            <el-table-column prop="area" label="区域" width="180">
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
            <el-table-column prop="description" label="描述" width="330">
            </el-table-column>
            <el-table-column width="140">
              <template slot-scope="scope">
              <router-link
              :to="{ name: 'GroundInfo', params: { ID: scope.row.id } }"
            ><el-button type="text">编辑信息</el-button></router-link>
              </template>
            </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'GroundList',
      components: {
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
  .maintitle {
    text-align: center;
    font-size: 27px;
  }
  h1{
    font-size: 25px;
  }
</style>