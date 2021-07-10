<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="8"
        ><div>
          <img src="../assets/Indoor.jpg" class="image" /></div
      ></el-col>
      <el-col :span="16">
        <p style="text-align: center; font-size: x-large">{{ room }}</p>
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
        ></el-button>
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
  },
  props: {
    buttonshow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>