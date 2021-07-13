<template>
  <div class="main">

    <el-row :gutter="10" type="flex">
      <div class="grid-content">
        <el-card class="box-card1">
          <PicCard
            :buttonshow="othertype"
            :groundId="this.$route.params.groundId"
            
          />
        </el-card>
      </div>
    </el-row>
    <el-row :gutter="10" type="flex">
      <el-card class="box-card2">
        <CourseTable :groundId="this.$route.params.groundId"/>
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
      // console.log("membertype", this.membertype);
      // console.log("othertype", this.othertype);
      // console.log("groundId", this.$route.params.groundId);

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
.box-card1 {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.box-card2 {
  width: 100%;
  height: 900px;
  border-radius: 15px;
}
</style>