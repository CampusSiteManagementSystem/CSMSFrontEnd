<template>
  <div class="main">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12"
        ><div class="grid-content">
          <PicCard /></div
      ></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <CourseTable />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CourseTable from "../components/CourseTable.vue";
import PicCard from "../components/PicCard.vue";
export default {
  name: "ScheduleAndPic",
  components: {
    CourseTable,
    PicCard,
  },
  data() {},
};
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  height: 100%;
  width: 100%;
}
</style>