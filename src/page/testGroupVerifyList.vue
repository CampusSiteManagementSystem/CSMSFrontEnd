<template>
  <div class="page">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(255, 255, 255)">

         <el-row type="flex">
            <img src="../assets/logo.png" class="logoImage" />
            <p>校园场地管理系统</p>
          </el-row>

        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          style="height=100%"
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-house"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="testl">
            <i class="el-icon-finished"></i>
            <span slot="title">审核组织注册</span>
          </el-menu-item>
          <el-menu-item index="/testml">
            <i class="el-icon-edit"></i>
            <span slot="title">维护用户信息</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="el-icon-document"></i>
            <span slot="title">发布系统公告</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;height:10%">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>系统管理员</span>
        </el-header>

        <el-main>
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
                <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >审核
          </el-button> -->
                <router-link to="/testv" tag="el-button" type="primary"
                  >审核</router-link
                >
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scope>
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