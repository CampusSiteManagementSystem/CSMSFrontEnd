<template>
  <div class="maindiv">
    <el-card class="maincard">
      <div class="maintitle">活动详情</div>
      <el-card class="box-card">
      <el-row>
        <el-col :span="12"><b>组织名称：</b>{{organization}}</el-col>
        <el-col :span="12"><b>组织账号：</b>{{accountnumber}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><b>组织信用分：</b>{{credit}}</el-col>
        <el-col :span="12"><b>组织邮箱：</b>{{email}}</el-col>
      </el-row>
      </el-card>
      <p></p>
      <el-card class="box-card">
      <el-row>
        <el-col :span="12"><b>举办组织：</b>{{organization}}</el-col>
        <el-col :span="12"><b>活动名称：</b>{{name}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><b>活动时间：</b>{{date + ' ' + time}}</el-col>
        <el-col :span="12"><b>参与人数：</b>{{participantnum}}</el-col>
      </el-row>
      <p><b>活动描述：</b>{{description}}</p>
      </el-card>
      <p></p>
      <el-button @click="back">返回</el-button>
    </el-card>
  </div>
</template>


<script>

export default {
    name: 'ActivityInfo',
    components: {},
    data() {
      return {
        id: '16472',
        organization: '软件学院1906班',
        accountnumber: '6159',
        credit: 95,
        email: '65b4g6y8@tongji.edu.cn',
        name: '班会',
        date: '2021-6-25',
        time: ' 15:30-16:00',
        participantnum: 40,
        description: '进行专业方向介绍，开展防范电信诈骗教育',
        additionalrequest: '无',
        state: 0,
        form: {
          state: '',
          comment: ''
        }
      };
    },
    methods: {
      back() {
        this.$router.push({path:'../ViewActivities'});
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
    margin-bottom: 100px;
  }
  h1{
    font-size: 25px;
  }
  .maintitle {
    font-size: 22px;
    text-align: left;
    font-weight: bold;
    padding: 5px;
  }
  .bg-purple {
  background: #f5f5f5;
  }
  .grid-content {
    border-radius: 6px;
    min-height: 36px;
  }
  .box-card {
    border-radius: 12px;
    background: #f5f5f5;
  }
</style>