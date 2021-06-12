<template>
    <div class="page">
        <div class="background">
            <span id="feedbacktitle">场地反馈</span>
            <div id="content">
                <p>活动ID：{{value1.ID}}</p>
                <p>活动时间：{{value1.time}}</p>
                <p>场地：{{value1.place}}</p>
                <p>评分:</p>
                <p>反馈：</p>
            </div>
            <el-rate class="block" v-model="score" :colors="colors" show-text>
            </el-rate>
            <el-input class="input" type="textarea" :rows="8" placeholder="请输入内容" v-model="textarea">
            </el-input>
            <router-link to="/"><el-button type="primary" class="submit">提交</el-button></router-link>                  
            <router-link to="/" tag='el-button' class="cancel">取消</router-link>  
        </div>
    </div>
</template>

<script>
  export default {
    data() {
    let vm= {    
      ID: "111111",
      time: "2021-6-7 17：00-19：00",
      place: "G403",
};
      return {
        value1: vm,
        score: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        textarea: ''
      }
    },
  }
</script>

<style scoped>
.page{
    height: 100%;
    width: 100%;
    margin:0;
    display: flex;
    background-color: rgb(236, 233, 233);
    background: rgba(240, 235, 235, 0.5);
    justify-content: center;
    align-items: center;
}
.background{
    margin:0;
    height:98%;
    width:99%;
    background-color: rgb(255, 255, 255);
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    position:relative;
}
#feedbacktitle{
    font-family:Helvetica;
    font-weight:bold;
    font-size:200%;
    position:absolute;
    left:100px;
    top:80px;
}
#content{
    font-family:Helvetica;
    position:absolute;
    left:150px;
    top:130px;
}
.block{
    margin:0;
    height:30%;
    width:60%;
    position: relative;
    left:200px;
    top:258px;
}
.input{
    margin:0;
    height:80%;
    width:60%;
    position: relative;
    left:200px;
    top:120px
}
.submit{
    margin:0;
    width:10%;
    position: relative;
    left:-300px;
    top:-100px
}
.cancel{
    margin:0;
    width:10%;
    position: relative;
    left:-250px;
    top:-100px
}
.choose-button{
    margin:10px 20px;
    width:35%;
    height:10%;
}

</style>