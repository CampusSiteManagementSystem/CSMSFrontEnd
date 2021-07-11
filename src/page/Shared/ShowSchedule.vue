<template>
  <div class="main">
    <!-- <el-row :gutter="10" type="flex">
      <el-col :xs="24" :sm="24" :md="10" :lg="10">
        <div class="grid-content">
          <el-card class="box-card">
            <PicCard :buttonshow="othertype" />
          </el-card></div
      ></el-col>
      <el-col :xs="24" :sm="24" :md="14" :lg="14">
        <el-card class="box-card">
          <CourseTable />
        </el-card>
      </el-col>
    </el-row> -->
    <!-- <el-page-header @back="goBack" content="详情页面">
</el-page-header> -->
    <el-row :gutter="10" type="flex">
      <div class="grid-content">
        <el-card class="box-card">
          <PicCard :buttonshow="othertype" />
        </el-card>
      </div>
    </el-row>
    <el-row :gutter="10" type="flex">
      <el-card class="box-card">
        <CourseTable />
      </el-card>
    </el-row>
  </div>
</template>

<script>
import CourseTable from "../../components/CourseTable.vue";
import PicCard from "../../components/PicCard.vue";
export default {
  name: "ScheduleAndPic",
  components: {
    CourseTable,
    PicCard,
  },
  created() {},
  mounted() {
    this.desideType();
  },
  data() {
    return {
      othertype: !this.membertype,
    };
  },
  methods: {
    desideType() {
      console.log("membertype", this.membertype);
      console.log("othertype", this.othertype);

      console.log("groundID", this.$route.params.groundID);

      // console.log(this.$route.params.user);

      // console.log(this.$route.params.user);
      // console.log(this.$route.params.user);
      // console.log(this.$route.params.user);
      // console.log(this.$route.params.user);
      // console.log(this.$route.params.user);
      // console.log(this.$route.params.user);
      // console.log(this.$route.params.user);
      // console.log(this.$route.params.user);console.log(this.$route.params.user);
      // if(this.$route.params.user=="Org"){
      //   this.membertype=false;

      // }
    },
  },
  props: {
    membertype: {
      //true代表学生，false代表组织
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.grid-content {
  border-radius: 4px;
  height: 100%;
  width: 100%;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.box-card {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

</style>