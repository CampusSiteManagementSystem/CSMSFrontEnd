<template>
  <div class="main">
    <el-row :gutter="10" type="flex">
      <el-col :xs="24" :sm="24" :md="10" :lg="10"
        ><div class="grid-content">
          <el-card class="box-card">
            <StuPicCard v-show="membertype" />
            <OrgPicCard v-show="othertype" />
          </el-card></div
      ></el-col>
      <el-col :xs="24" :sm="24" :md="14" :lg="14">
        <el-card class="box-card">
          <CourseTable />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CourseTable from "../../components/CourseTable.vue";
import StuPicCard from "../../components/StuPicCard.vue";
import OrgPicCard from "../../components/OrgPicCard.vue";
export default {
  name: "ScheduleAndPic",
  components: {
    CourseTable,
    StuPicCard,
    OrgPicCard,
  },
  created(){

  },
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
  /* width: 480px; */
  height: 100%;
}
</style>