<template>
    <div class="page"> 
         <img src="../assets/SystemHp.png" class="image">
        <div class="container">
            <div>
                <h1>校园场地管理系统</h1>
                <h4>Campus Site Management</h4>
            </div>
            <div class="select">
                <router-link to="/SystemAdminFrame" tag='el-button' class="el-icon-user choose-button">维护用户信息</router-link>
                <router-link to="/testl" tag='el-button' class="el-icon-coordinate choose-button">审批组织注册</router-link>
                <router-link to="/test" tag='el-button' class="el-icon-message choose-button">发布系统公告</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.page{
    height: 100%;
    width: 100%;
    margin:0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    margin:0;
    height:50%;
    width:45%;
    /* background-color: rgb(7, 7, 7);
    background: rgba(7, 7, 7, 0.315); */
    text-align: center;
}


h1,h4{
    color:white;
    position: relative;
}

.choose-button{
    margin:10px 20px;
    width:40%;
    height:50%;
}

.image{
    position:absolute;
    z-index: -1;
    width:100%;
    height:100%;
}

</style>