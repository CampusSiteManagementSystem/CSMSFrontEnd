<template>
  <div class="courese" style="padding: 3%">
    <div slot="header" class="clearfix" style="text-align: center; padding:2%"> 
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
  </div>
    
    <el-table :data="tableData" border style="width: 100%" >
      <el-table-column prop="date" label="时间"> </el-table-column>
      <el-table-column prop="mon" label="周一" > </el-table-column>
      <el-table-column prop="tue" label="周二"> </el-table-column>
      <el-table-column prop="wed" label="周三"> </el-table-column>
      <el-table-column prop="thu" label="周四"> </el-table-column>
      <el-table-column prop="fri" label="周五"> </el-table-column>
      <el-table-column prop="sat" label="周六"> </el-table-column>
      <el-table-column prop="sun" label="周日"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CourseTable",
  data() {
    let occupyed={
        
          date: "1",
          mon: "-",
          tue: "编译原理",
          wed: "编译原理",
          thu: "编译原理",
          fri: "编译原理",
          sat: "编译原理",
          sun: "编译原理",
        

    };
    return {
      value1: "",
      tableData:Array(11).fill(occupyed),
    };
  },
};
</script>

<style scoped>
.block {
  text-align: center;
}.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>>