<template>
    <div class="page">
        <div class="background">
            <div style="height: 300px;" class="progress">
  <el-steps direction="vertical" :model="formInline" :active="1" finish-status="success">
    <el-step title="申请预约">
        <template slot="description">
                  <p>活动名称：{{formInline.groundName}}</p>
                  <p>活动时间：{{formInline.startTime}}</p>
        </template>
    </el-step>
    <el-step title="待审核" description="请等待审核"></el-step>
    <el-step title="审核状态" description="请等待审核结果"></el-step>
  </el-steps>
</div>
            <i class="el-icon-time"></i>
            <span id="applytitle">等待审核</span>
            <div id="content">
                <p><b>预约信息</b></p>
                <el-form ref="form" :model="formInline" label-width="150px" label-position="left">
                    <el-form-item label="活动ID">
                        <span class="size">{{formInline.id}}</span>
                    </el-form-item>
                    <el-form-item label="申请地点">
                        <span>{{formInline.groundName}}</span>
                    </el-form-item>
                    <el-form-item label="时间">
                        <span>{{formInline.startTime}}</span>
                    </el-form-item>
                    <el-form-item label="活动名称">
                        <span>{{formInline.name}}</span>
                    </el-form-item>
                    <el-form-item label="参加人数">
                        <span>{{formInline.participantNum}}</span>
                    </el-form-item>
                    <el-form-item label="特殊要求">
                        <span>{{formInline.additionalRequest}}</span>
                    </el-form-item>
                    <el-form-item label="活动描述">
                        <span>{{formInline.description}}</span>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { GETActivitiesID } from "../../API/http";
export default {
    created() {
        GETActivitiesID(this.$route.params.activityID)
      .then((data) => {
        this.formInline=data;
        this.formInline.startTime=(data.startTime.replace("T"," ").split('.'))[0];
      })
      .catch((err) => {
        console.log(err);
        this.$message("信息获取错误");
      });
    },
        data() {
      return {
    formInline: {
        },
        checked1: false,
        checked2: false
      };
    },
    methods:{
        reviewopinion(idea){
            if(idea){
                this.checked1=true;
                this.checked2=false;
            }
            else{
                this.checked1=false;
                this.checked2=true;
            }
        }
    }
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
    position:relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.el-icon-time{
    margin:0;
    position: relative;
    color:rgb(102, 190, 241);
    font-size:180px;
    left:100px;
    top:-110px;
}
.progress{
        position: relative;
    left:900px;
    top:60px;
}
#applytitle{
    font-family:Helvetica;
    font-weight:bold;
    font-size:200%;
    position:absolute;
    left:125px;
    top:400px;
}
#content{
    font-family:Helvetica;
    position:absolute;
    left:430px;
    top:30px;
}
.el-card {
  border-radius: 15px;
}
</style>