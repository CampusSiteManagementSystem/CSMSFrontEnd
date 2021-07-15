<template>
  <div class="page">
    <el-container style="border: 1px solid #eee">
      <!--aside  -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', ]" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>         
              <el-menu-item index="test" >查看场地</el-menu-item>
              <el-menu-item index="ShowMap">查看地图</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>           
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- head -->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <!-- main -->
        
        <el-main>
           <router-view></router-view>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>





<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-card {
  border-radius: 15px;
}
.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      type: "室内",
      building: "F",
      floor: "4",
      room: "402",
      capacity: 100,
      description: "F楼大教室,",
    };
    const places = [
      {
        // eslint-disable-line no-unused-vars
        value: "indoor",
        label: "室内",
        children: [
          {
            value: "F",
            label: "F",
            children: [
              {
                value: "F1",
                label: "F1",
              },
              {
                value: "F2",
                label: "F2",
              },
              {
                value: "F3",
                label: "F3",
              },
              {
                value: "F4",
                label: "F4",
              },
            ],
          },
        ],
      },
      {
        value: "outdoor",
        label: "室外",
        children: [
          {
            value: "basketballPlace",
            label: "篮球场",
            children: [
              {
                value: "basketballPlace1",
                label: "篮球场1",
              },
              {
                value: "basketballPlace2",
                label: "篮球场2",
              },
            ],
          },
          {
            value: "footballPlace",
            label: "足球场",
            children: [
              {
                value: "footballPlace1",
                label: "足球场1",
              },
              {
                value: "footballPlace2",
                label: "足球场2",
              }
            ],
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog 对话框",
              },
              {
                value: "tooltip",
                label: "Tooltip 文字提示",
              },
              {
                value: "popover",
                label: "Popover 弹出框",
              },
              {
                value: "card",
                label: "Card 卡片",
              },
              {
                value: "carousel",
                label: "Carousel 走马灯",
              },
              {
                value: "collapse",
                label: "Collapse 折叠面板",
              },
            ],
          },
        ],
      },
    ];

    return {
      tableData: Array(20).fill(item),
      options: places,
    };
  },
};
</script>