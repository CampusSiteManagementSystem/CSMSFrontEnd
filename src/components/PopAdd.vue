<template>
  <div class="popupmeg">
    <!-- <el-card class="box-card"> -->
      <div slot="header" class="clearfix">
        <span>{{ building }}</span>
        <el-button
        v-show="type=='室内'?true:false"
          @click="jump()"
          style="float: right; padding: 3px 0"
          type="text"
          >新增</el-button
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
  name: "PopAdd",
  props: {
    building: String,
    all: Number,
    freeRoom: Number,
    description: String,
    type:String,
    router: null,
   
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
    
        //stu
        this.$props.router.push({
          name: "AddGround",
          params: {
            PositionName: this.building,
            // msgKey: this.msg,
          },
          /*query: {  
                key: 'key',   
                msgKey: this.msg  
            }*/
        });
    
      }
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