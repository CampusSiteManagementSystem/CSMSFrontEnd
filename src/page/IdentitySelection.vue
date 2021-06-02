<template>
    <div class="page">
        <img src="../assets/IdentitySelection.jpg" class="myimage">
        <div class="container">
            <div>
                <h1>校园场地管理系统</h1>
                <h4>Campus Site Management</h4>
            </div>
            <div class="select">
                <router-link to="/" tag='el-button' class="el-icon-user choose-button">学生登录</router-link>
                <router-link to="/" tag='el-button' class="el-icon-coordinate choose-button">场地管理员登陆</router-link>
                <br>
                <router-link to="/" tag='el-button' class="el-icon-s-custom choose-button">组织登录</router-link>
                <router-link to="/" tag='el-button' class="el-icon-s-check choose-button">系统管理员登录</router-link>
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
    height:30%;
    width:45%;
    background-color: rgb(7, 7, 7);
    background: rgba(7,7,7,0.5);
    text-align: center;
}


h1,h4{
    color:white;
    position: relative;
}

.choose-button{
    margin:10px 20px;
    width:35%;
    height:10%;
}

.myimage{
    position:absolute;
    z-index: -1;
    width:100%;
    height:100%;
}

</style>