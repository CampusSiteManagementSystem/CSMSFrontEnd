<template>
  <div class="page">
    <div>
      <h2>用户信息维护</h2>
    </div>
    <div class="search">
      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select class="keysearch"
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
      </el-select>
      <router-link to="/accountmodifylist" tag="el-button" type="primary" icon="el-icon-search"
            >搜索</router-link>
    </div>

    <el-table :data="tableData" height="450" style="width: 100%" border>
      <el-table-column label="账户" width="300">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template>
          <router-link to="/accountmodify" tag="el-button" type="primary"
            >编辑信息</router-link
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // radio: "1",
      // textarea: ''
      options: [
        {
          value: "选项1",
          label: "用户ID",
        },
        {
          value: "选项2",
          label: "用户名",
        },
      ],
      value: "",

 tableData: [
        {
          name: "公关部",
        },
        {
          name: "学生综合素质发展中心",
        },
        {
          name: "社发管",
        },
        {
          name: "钢琴协会",
        },
        {
          name: "公关部",
        },
        {
          name: "学生综合素质发展中心",
        },
        {
          name: "社发管",
        },
        {
          name: "钢琴协会",
        },
      ],

    };
  },
};
</script>


<style scoped>
.page {
  height: 100%;
  width: 100%;
  margin: 1cm 1cm 1cm 1cm;
  display: block;
  justify-content: center;
  align-items: center;
}

.info {
  height: 40%;
  width: 80%;
  background-color: rgb(7, 7, 7);
  background: rgba(7, 7, 7, 0.116);
  text-align: left;
}

.description {
  width: 80%;
  text-align: left;
}

.submit {
  margin: 1cm 1cm 1cm 23cm;
}

.keysearch{
  margin-left: 3cm;
}
.search{
  margin-bottom: 1cm;
}


p {
  color: rgb(0, 0, 0);
  position: relative;
  left: 20px;
}
</style>