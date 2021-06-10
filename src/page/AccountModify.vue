<template>
  <div class="page">
    <div>
      <h2>用户信息</h2>
    </div>

    <img src="../assets/userpic.jpg" class="pic">

    <div class="info">
      <p>姓名:</p>
      <p>学号:</p>
      <p>年龄:</p>
      <p>性别:</p>
      <br />
      <p>学院:</p>
      <p>班级:</p>
      <p>邮箱:</p>
    </div>
    
    <div class="modify">
    <el-button type="primary">编辑</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      textarea: ''
    };
  },
  }
</script>


<style scoped>
.page {
  height: 100%;
  width: 100%;
  margin: 1cm 1cm 1cm 1cm;
  display: block;
  justify-content: center;
  align-items: center;
}

.pic{
  height:3cm;
  width:4cm;
}


/* .info {
  height: 40%;
  width: 80%;
  background-color: rgb(7, 7, 7);
  background: rgba(7, 7, 7, 0.116);
  text-align: left;
} */

p {
  color: rgb(0, 0, 0);
  position: relative;
  left: 20px; 
}

.modify{
  margin-left:10cm;
}

</style>