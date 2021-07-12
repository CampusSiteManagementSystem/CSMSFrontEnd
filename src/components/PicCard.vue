<template>
  <div class="main">
    <el-row :gutter="50">
      <el-col :span="8"
        ><div>
          <img src="../assets/Indoor.jpg" class="image" /></div
      ></el-col>
      <el-col :span="16">
        <div>
          <h3>场地详情</h3>
        </div>
        <el-row>
          <p>场地名称：{{ building }}{{ room }}</p>
          <p>场地类型：{{ placeType }}</p>
          <p v-for="(value, key) in utils" :key="value">
            {{ key }}:{{ value }}
          </p>
        </el-row>
        <el-row style="float: right">
          <time class="time"
            >{{ currentDate }}
            <router-link
              :to="{
                name: 'ApplySiteWindow',
                query: { groundId: groundId },
              }"
              v-show="buttonshow"
            >
              <el-button type="text" @click.stop="handleApply()"
                >预约</el-button
              ></router-link
            ></time
          ><el-button
            icon="el-icon-star-off"
            class="button"
            circle=""
            size="mini"
          ></el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

/* .button {
  margin: 10px, 10px, 10px, 10px;
  float: right;
} */

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
import { GETIndoorGroundsID } from "../API/http";
export default {
  name: "PicCard",
  data() {
    // const utils = {
    //   电脑数量: 100,
    //   桌子数量: 13,
    // };
    return {
      axiosdata:"",
      computerNum: 1,
floor: 2,
positionName: "G楼",
roomNo: 201,
seatNum: 500,
utils:null,




      // utils: utils,
      currentDate: new Date(),
      // building: "F",
      // floor: "层号",
      // room: "202",
      placeType: "室内场地",
    };
  },
  mounted() {
    const that=this;


   

     GETIndoorGroundsID(that.$props.groundId)
        .then((data) => {
          that.axiosdata = data;
          // console.log(that.$props.groundId,that.axiosdata)
        })
        .catch((err) => {
          this.data = err;
        });
    console.log("PICCARD buttonshow", this.$props.buttonshow);
    console.log("PICCARD groundId", this.$props.groundId);
  },
  props: {
    buttonshow: {
      type: Boolean,
      default: false,
    },
    groundId: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleApply() {
      console.log("PICCARD groundId", this.$props.groundId);
    },
//     dealWithaxiosdata(){
//        computerNum: 1,
// floor: 2,
// positionName: "G楼",
// roomNo: 201,
// seatNum: 500,




//       // utils: utils,
//       currentDate: new Date(),
//       // building: "F",
//       // floor: "层号",
//       // room: "202",
//       placeType: "室内场地",


//     }
  },
};
</script>