<template>
  <div class="main">
    <el-row>
      <p style="text-align: center; font-size: x-large">{{ room }}</p>
      <p style="text-align: center; font-size: small">{{ building }}</p>
      <img src="../assets/Indoor.jpg" class="image" />
    </el-row>
    <el-row style="padding: 14px;">
      <span>{{ placeType }}</span>
      <p v-for="(value, key) in utils" :key="value">{{ key }}:{{ value }}</p>
    </el-row>
    <el-row>
      <div class="bottom clearfix">
        <time class="time">{{ currentDate }}</time>
        <el-button icon="el-icon-star-off" class="button" circle=""></el-button>
        <router-link to="/ApplySite"><el-button type="primary" icon="el-icon-star-off" class="button"
          >预约</el-button
        ></router-link>
        <!-- <router-link to="/预约界面"  
            type="primary"
            tag='el-button' 
             @click="handleEdit(scope.$index, scope.row)"
            class="el-icon-edit choose-button button">预约</router-link> -->
      </div>
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

.button {
  margin: 10px, 10px, 10px, 10px;
  float: right;
}

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
      桌子数量: 100,
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
};
</script>