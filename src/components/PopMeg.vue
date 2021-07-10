<template>
<div>
  <el-card class="box-card">
      <div slot="header" class="clearfix">
    <span>{{building}}</span>
    <el-button @click="jump()" style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <h3>场地总数量：{{all}}</h3>
  <h3>空闲场地数量:{{freeRoom}}</h3>
  <h3>场地描述：{{description}}</h3>
</el-card>
 

  </div>
</template>

<script>
export default {
  name: "PopMeg",
  props: {
    building: String,
    all:Number,
    freeRoom:Number,
    description:String,
    router:null,



  },
  data() {
   return{

   }
  },
  methods:{
    jump: function(){
      // jump: () => {

      // console.log("111111");
      // this.$router.push({path:'/2'});
      console.log("111111");
      console.log(this.$props.building);
      console.log(this.$props.router);
      
      console.log("111111");
      
       this.$props.router.push({  
            path: 'ShowPlaceDetail',   
            name: 'ShowPlaceDetail',  
            params: {   
                key: 'key',   
                msgKey: this.msg  
            }  
            /*query: {  
                key: 'key',   
                msgKey: this.msg  
            }*/  
        })
    },
  }
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
    clear: both
  }

  .box-card {
   
  }

</style>