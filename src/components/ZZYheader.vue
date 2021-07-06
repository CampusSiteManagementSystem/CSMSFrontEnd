<template>
  <el-row class="headerrow" type="flex" justify="end" align="middle" @click="handleClick">
    <el-button type="text"
      ><el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar
    ></el-button>
    <el-button type="text" @click="handleClick">王二狗</el-button>
  </el-row>
</template>

<script>

export default {
  name: "GroundsmanHeader",
  methods: {
    handleClick(){
      
    this.$router.push({path: 'Home'});

    }
  }
};
</script>