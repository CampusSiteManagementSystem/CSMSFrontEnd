<template>
  <div class="popupmeg">
    <!-- <el-card class="box-card"> -->
      <div slot="header" class="clearfix">
        <span>{{ building }}</span>
        <el-button
          @click="jump()"
          style="float: right; padding: 3px 0"
          type="text"
          >查看</el-button
        >
      </div>
      <p>场地总数量：{{ all }}</p>
      <p>空闲场地数量:{{ freeRoom }}</p>
      <p>场地描述：{{ description }}</p>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  name: "PopMeg",
  props: {
    building: String,
    all: Number,
    freeRoom: Number,
    description: String,
    router: null,
    membertype: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    jump: function () {
      // jump: () => {

      // console.log("111111");
      // this.$router.push({path:'/2'});
      // console.log("111111");
      // console.log(this.$props.building);
      // console.log(this.$props.router);

      // console.log(this.building);
      // var build=this.building.split("楼")[0];
      // console.log(build);
      if (this.$props.membertype) {
        //stu
        this.$props.router.push({
          name: "StuShowPlaceDetail",
          params: {
            building: this.building.split("楼")[0],
            // msgKey: this.msg,
          },
          /*query: {  
                key: 'key',   
                msgKey: this.msg  
            }*/
        });
      } else {
        this.$props.router.push({
          name: "OrgCheckSite",
          // name: '/CheckSite',
          params: {
             building: this.building.split("楼")[0],
            
          },
          /*query: {  
                key: 'key',   
                msgKey: this.msg  
            }*/
        });
      }
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.popupmeg{
  /* backdrop-filter: blur(10px) */
  background: transparent;
}
</style>