<template>
  <div class="page">
    <div>
      <h2>审批组织注册</h2>
    </div>
    <div class="info">
      <p>组织信息:</p>
      <br />
      <p>组织名称:</p>
      <br />
      <p>详细信息:</p>
    </div>
    <div class="status">
      <p>审核意见</p>
      <el-radio v-model="radio" label="1">通过</el-radio>
      <el-radio v-model="radio" label="2">不通过</el-radio>
    </div>
    <div class="description">
      <br />
      <p>审核说明</p>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
    </div>
    <div class="submit">
    <el-button type="primary">提交</el-button>
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

.info {
  height: 40%;
  width: 80%;
  background-color: rgb(7, 7, 7);
  background: rgba(7, 7, 7, 0.116);
  text-align: left;
}

.description {
  width: 80%;
  text-align: left;
}

.submit {
  margin: 1cm 1cm 1cm 23cm;
}

p {
  color: rgb(0, 0, 0);
  position: relative;
  left: 20px;
}
</style>