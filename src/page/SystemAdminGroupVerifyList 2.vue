<template>
  <div class="page">
    

      <div>
        
          <el-table :data="tableData">
            <el-table-column label="日期" width="200">
              <template slot-scope="scope">
                <!-- <i class="el-icon-time"></i> -->
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="组织" width="300">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>组织: {{ scope.row.name }}</p>
                  <p>注册时间: {{ scope.row.date }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
              <template>
                <router-link to="/SystemAdminFrame/SystemAdminGroupVerify" tag="el-button" type="primary"
                  >审核</router-link
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      
    
  </div>
</template>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.logoImage {
  height: 25%;
  width: 25%;
}

</style>

<script>
// import sidebar from '../components/sidebar.vue'

export default {
  // name: "sidebar",
  // components: { sidebar },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "公关部",
        },
        {
          date: "2016-05-04",
          name: "学生综合素质发展中心",
        },
        {
          date: "2016-05-01",
          name: "社发管",
        },
        {
          date: "2016-05-03",
          name: "钢琴协会",
        },
        {
          date: "2016-05-02",
          name: "公关部",
        },
        {
          date: "2016-05-04",
          name: "学生综合素质发展中心",
        },
        {
          date: "2016-05-01",
          name: "社发管",
        },
        {
          date: "2016-05-03",
          name: "钢琴协会",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>