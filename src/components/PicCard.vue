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

        <el-row v-if="placeType == '室内'" :gutter="20">
          <el-col :span="12">
            <p>场地名称:{{ indoorGround.楼号 }}{{ indoorGround.房间号 }}</p>

            <div v-for="(value, key, index) in indoorGround" :key="key">
              <p v-if="index < 3">{{ key }}:{{ value }}</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div v-for="(value, key, index) in indoorGround" :key="key">
              <p v-if="index >=3">{{ key }}:{{ value }}</p>
            </div>
          </el-col>
        </el-row>
        <el-row v-else>
          <p v-for="(value, key) in outdoorGround" :key="key">
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
            @click="likes"
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
import {
  GETIndoorGroundsID,
  GETOutdoorGroundsID,
  GETGroundsID,
  // POSTOrgFavorites,
  // POSTStuFavorites,
//   DELETEOrgFavorites,
//  DELETEStuFavorites,
  
} from "../API/http";
export default {
  name: "PicCard",
  data() {
    return {
      axiosdata: "",
      placeType: "",
      groundTemp: "",
      indoorGround: {
        楼号: "",
        层号: "",
        房间号: "",
        座位数量: "",
        电脑数量: "",
        场地大小: "",
        详细描述: "",
      },
      outdoorGround: {
        场地名称: "",
        场地大小: "0",
        详细描述: "",
      },

      currentDate: new Date(),
    };
  },
  watch: {
    // $route: "fetchData",
  },
  mounted() {
    this.fetchData();
    // console.log("PICCARD buttonshow", this.$props.buttonshow);
    // console.log("PICCARD groundId", this.$props.groundId);
    // console.log("PICCARD placeType", this.$props.placeType);
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
    fetchData: async function () {
      const that = this;

      await GETGroundsID(that.$props.groundId)
        .then((data) => {
          console.log(data);

          that.groundTemp = data;
          that.placeType = data.type;
        })
        .catch((err) => {
          this.data = err;
        });
      console.log("that.placeType", that.placeType);
      if (that.placeType == "室内") {
        that.indoorGround.场地大小 = that.groundTemp.area;
        that.indoorGround.详细描述 = that.groundTemp.description;

        GETIndoorGroundsID(that.$props.groundId)
          .then((data) => {
            that.axiosdata = data;
            that.indoorGround.楼号 = data.positionName;
            that.indoorGround.层号 = data.floor;
            that.indoorGround.房间号 = data.roomNo;
            that.indoorGround.座位数量 = data.seatNum;
            that.indoorGround.电脑数量 = data.computerNum;
          })
          .catch((err) => {
            this.data = err;
          });
      } else {
        GETOutdoorGroundsID(that.$props.groundId)
          .then((data) => {
            that.axiosdata = data;
            console.log(that.$props.groundId, that.axiosdata);
            that.outdoorGround.场地名称 = data.positionName;
            that.outdoorGround.场地大小 = data.area;
            that.outdoorGround.详细描述 = data.description;
          })
          .catch((err) => {
            this.data = err;
          });
      }
    },
    likes(){

//       if(buttonshow)//组织
//       {
// // export const POSTOrgFavorites = param => Post('/api/OrgFavorites', param); 
//       }else{

//       }
      

    }
  },
};
</script>