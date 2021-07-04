<template>
<div>
  <p>{{building}}</p>
  <p>场地总数量：{{all}}</p>
  <p>空闲场地数量{{freeRoom}}</p>
  <p>场地描述：{{description}}</p>
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
  },
  data() {
   return{

   }
  },
};
</script>

<style scoped>

</style>