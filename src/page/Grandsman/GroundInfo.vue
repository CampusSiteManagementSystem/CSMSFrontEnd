<template>
  <el-card class="main-card">
    <el-row class="upper-row">
      <div class="block">
        <el-image :src="groundinfo.imgsrc">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
      <h1>{{ groundinfo.building + " " + groundinfo.roomno }}</h1>

      <p v-if="!editstate">{{ groundinfo.description }}</p>
      <el-input
        v-else
        class="descriptioninput"
        v-model="groundinfo.description"
      ></el-input>
      <!-- <el-col :span="12" class="upper-row-left-col"></el-col>
                <el-col :span="12" class="upper-row-left-right"></el-col> -->
    </el-row>
    <el-divider content-position="center">详细信息</el-divider>
    <el-row class="lower-row">
      <el-form v-if="editstate" ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
        <el-form-item label="座位数" prop="seatnum">
          <el-input v-model="groundinfo.seatnum "></el-input>
        </el-form-item>
        <el-form-item label="电脑数" prop="computernum">
          <el-input v-model="groundinfo.computernum"></el-input>
        </el-form-item>
        <el-form-item label="楼层" prop="floor">
          <el-input v-model="groundinfo.floor"></el-input>
        </el-form-item>
        <el-form-item label="面积" prop="area">
          <el-input v-model="groundinfo.area"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <router-link to="/GroundsAdmin/GroundList">
            <el-button>取消</el-button></router-link
          >
        </el-form-item>
      </el-form>
      <div v-else>
        <p>座位数：{{ groundinfo.seatnum }}</p>
        <p>电脑数：{{ groundinfo.computernum }}</p>
        <p>楼层：{{ groundinfo.floor }}</p>
        <p>面积：{{ groundinfo.area }}</p>
        <div class="editbutton">
          <el-button @click="edit" type="primary" icon="el-icon-edit"
            >修改信息</el-button
          >
        </div>
      </div>
    </el-row>
  </el-card>
</template>



<style scpoed>
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}

/* .el-header {
  background-color: white;
}
.el-aside {
  background-color: white;
}
.el-main {
  background-color: rgb(237, 241, 245);
  height: 100%;
} */

.main-card {
  height: 10px;
  overflow: auto;
}

.upper-row {
  height: 250px;
  padding: 20px;
}
.lower-row {
  padding: 20px;
  /* height: 100%; */
}

.block {
  float: right;
  width: 300px;
  height: 300px;
}
.detailinfo {
  height: 30px;
}
.editbutton {
  height: 60px;
  float: right;
}

.descriptioninput {
  height: 20px;
  width: 30%;
}

.seatnumcol {
  height: 100%;
}
.el-input {
  height: auto;
}
</style>



<script>
export default {
  name: "groundinfo",
  data() {
    return {
      ruleForm: {
          seatnum: '',
          computernum:'',
          area:'',
          floor:'',
        },
            rules: {
          seatnum: [
            { required: true, message: '请输入座椅数量', trigger: 'blur' },
          ],
            computernum: [
            { required: true, message: '请输入电脑数量', trigger: 'blur' },
          ],
            floor: [
            { required: true, message: '请输入层数', trigger: 'blur' },
          ],
            area: [
            { required: true, message: '请输入面积', trigger: 'blur' },
          ],

        },
      editstate: false,
      groundinfo: {
        seatnum: 10,
        computernum: 6,
        building: "同心楼",
        floor: 2,
        roomno: 666,
        area: 100.66,
        description: "这是一个教室，非常适合学习，开会也可以",
        imgsrc:
          "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        indoor: true,
      },
    };
  },
  methods: {
    edit() {
      this.editstate = true;
    },
    onSubmit() {
      this.editstate = false;
    },
  },
};
</script>