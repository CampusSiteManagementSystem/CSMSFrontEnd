<template>
  <div>
    <div class="search">
      <span class="demonstration">请选择地点 </span>
      <el-cascader
        :options="options"
        :props="{ multiple: true, checkStrictly: true }"
        clearable
      ></el-cascader>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>

    <el-table :data="tableData">
      <el-table-column prop="type" label="是否室内"> </el-table-column>
      <el-table-column prop="building" label="楼号"> </el-table-column>
      <el-table-column prop="floor" label="层号"> </el-table-column>
      <el-table-column prop="room" label="房间号"> </el-table-column>
      <el-table-column prop="capacity" label="可容纳人数"> </el-table-column>
      <el-table-column prop="description" label="详情"> </el-table-column>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
    </el-table>
    <div id="maphtml">
      <div v-html="maps">{{ maps }}</div>
    </div>
  </div>
</template>

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

<style>
</style>
