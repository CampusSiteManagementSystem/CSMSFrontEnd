<template>
  <div class="main">
    <el-row :gutter="50">
      <el-col :span="8"
        ><div>
          <img src="../assets/Indoor.jpg" class="image" /></div
      ></el-col>
      <el-col :span="16" >
        <!-- <div slot="header" class="clearfix"> -->
          <div>
            <h3>场地详情 </h3>
          </div>
        <el-row >
          
          
              <p >场地名称：{{ building }}{{ room }}</p>
              <p >场地类型：{{ placeType }}</p>
              <p v-for="(value, key) in utils" :key="value">
                {{ key }}:{{ value }}
              </p>
              <!-- <p class="">活动日期：{{ date }}</p>
            <p class="">活动时间：{{ startTime }}</p> -->
            
              </el-row>
              <el-row style="float:right">
              <time class="time"
                >{{ currentDate }}
              <router-link :to="{
                name: 'ApplySiteWindow',
                query: { groundID: groundID },
              }"
              v-show="buttonshow">
                <el-button type="text" @click.stop="handleApply()">预约</el-button></router-link
                ></time
              ><el-button
                icon="el-icon-star-off"
                class="button"
                circle=""
                size="mini"
              ></el-button>
              
            
          
        </el-row>

        <!-- <p style="text-align: center; font-size: x-large">{{ room }}</p>
        <p style="text-align: center; font-size: small">{{ building }}</p>
        <span>{{ placeType }}</span>
        <p v-for="(value, key) in utils" :key="value">{{ key }}:{{ value }}</p>
        <time class="time"
          >{{ currentDate }}
          <router-link to="/ApplySite" v-show="buttonshow"
            ><el-button type="text">预约</el-button></router-link
          ></time
        ><el-button
          icon="el-icon-star-off"
          class="button"
          circle=""
          size="mini"
        ></el-button> -->
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
export default {
  name: "PicCard",
  data() {
    const utils = {
      电脑数量: 100,
      桌子数量: 13,
    };
    return {
      utils: utils,
      currentDate: new Date(),
      building: "F",
      floor: "层号",
      room: "202",
      placeType: "室内场地",
    };
  },
  mounted() {
    console.log("PICCARD buttonshow", this.$props.buttonshow);
    console.log("PICCARD groundID", this.$props.groundID);
  },
  props: {
    buttonshow: {
      type: Boolean,
      default: false,
    },
    groundID:{
      type: String,
      default: "",
    },
  },
  methods: {
    handleApply(){
      console.log("PICCARD groundID", this.$props.groundID);
    }
  }
};
</script>