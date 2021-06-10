<template>
<div>
  <el-container style="height: 600px; border: 1px solid #eee">
    <sidebar></sidebar>
    <el-main>
      <h1>发布场地公告</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="内容：">
          <el-input type="textarea" v-model="form.desc" rows="8"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</div>
</template>

<script>
import sidebar from '@/components/sidebar.vue'

export default {
    name: 'Publish',
    components: {
      sidebar
    },
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

<style scoped>
  .el-input {
    width: 600px;
  }
  .el-main {
    text-align: left;
    line-height: 50px;
    margin-left: 100px;
    margin-right: 100px;
  }
  h1{
    font-size: 25px;
  }
</style>