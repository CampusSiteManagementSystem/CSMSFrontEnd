<template>
  <div>
<el-row :gutter="10">
  <el-col :xs="3" :sm="5" :md="7" :lg="9"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="3" :sm="5" :md="7" :lg="9"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-purple {
    background: #7e2970;
  }
  .bg-purple-light {
    background: #071c4d;
  }
  .grid-content {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 150px;
    min-width: 100px;
  }
</style>