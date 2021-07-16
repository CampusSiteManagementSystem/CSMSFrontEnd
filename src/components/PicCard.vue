<template>
  <div class="main">
    <el-row :gutter="50">
      <el-col :span="8"
        ><div>
          <img src="../assets/Indoor.jpg" class="image"  style="padding:6%"/></div
      ></el-col>
      <el-col :span="16">
        <el-container>
          <el-main>
            <div>
              <h3>场地详情</h3>
            </div>

            <el-row v-if="placeType == '室内'" :gutter="20">
              <el-col :span="3">
                <p>场地名称:</p>
                <div v-for="(value, key, index) in indoorGround" :key="key">
                  <p v-if="index < 3">{{ key }}:</p>
                </div>
              </el-col>
              <el-col :span="9">
                <p>{{ indoorGround.楼号 }}{{ indoorGround.房间号 }}</p>
                <div v-for="(value, key, index) in indoorGround" :key="key">
                  <p v-if="index < 3">{{ value }}</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div v-for="(value, key, index) in indoorGround" :key="key">
                  <p v-if="index >= 3">{{ key }}:</p>
                </div>
              </el-col>
              <el-col :span="9">
                <div v-for="(value, key, index) in indoorGround" :key="key">
                  <p v-if="index >= 3">{{ value }}</p>
                </div>
              </el-col>
            </el-row>
            <el-row v-else>
              <p v-for="(value, key) in outdoorGround" :key="key">
                {{ key }}:{{ value }}
              </p>
            </el-row> </el-main
          ><el-footer>
            <time class="time"
              >{{ currentDate }}
              <router-link
                :to="{
                  name: 'ApplySiteWindow',
                  query: { groundId: groundId },
                }"
                v-show="buttonshow"
              >
                <el-button
                  type="text"
                  @click.stop="handleApply()"
                  style="padding-right: 2%"
                  >预约</el-button
                ></router-link
              ></time
            ><el-button
              icon="el-icon-star-off"
              :type="type"
              :disabled="liked"
              circle=""
              size="mini"
              @click="pushLikeButton"
            ></el-button> </el-footer></el-container
      ></el-col>
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
  POSTOrgFavorites,
  POSTStuFavorites,
  GETOrgFavorites,
  GETStuFavoritesID,
  //   DELETEOrgFavorites,
  //  DELETEStuFavorites,
} from "../API/http";
import store from "../state/state";
export default {
  name: "PicCard",
  data() {
    return {
      axiosdata: "",
      id: store.state.ID,
      placeType: "", //调用ground api 获得的数据
      groundTemp: "", //调用ground api 获得的数据
      likes: [], //这是调用后收藏api获取到的场地列表
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
      liked: false,
    
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
  computed:{
    type(){
      if(this.liked==true)return "danger";
      else return "primary";

    }
  },
  methods: {
    handleApply() {
      // console.log("PICCARD groundId", this.$props.groundId);
    },
    fetchData: async function () {
      const that = this;
      //获得以下这个成员收藏的场地吧
      if (that.buttonshow) {
        //组织
        GETOrgFavorites({ accountNumber: that.id })
          .then((data) => {
            // console.log(data);
            that.likes = data;
            for (var i = 0; i < that.likes.length; i++) {
              if (that.likes[i].groundId == that.groundId) {
                that.liked = true;
                break;
              }
            }
          })
          .catch((err) => {
            this.data = err;
          });
      } else {
        //学生
        GETStuFavoritesID(that.id)
          .then((data) => {
            //  console.log(data);
            that.likes = data;
            for (var i = 0; i < that.likes.length; i++) {
              if (that.likes[i].groundId == that.groundId) {
                that.liked = true;
                break;
              }
            }
          })
          .catch((err) => {
            this.data = err;
          });
      }

      //先获得这个场地在GROUND的信息
      await GETGroundsID(that.$props.groundId)
        .then((data) => {
          // console.log(data);

          that.groundTemp = data;
          that.placeType = data.type;
        })
        .catch((err) => {
          this.data = err;
        });
      // console.log("that.placeType", that.placeType);
      if (that.placeType == "室内") {
        //再获得这个场地在室内GROUND的信息
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
        //再获得这个场地在室外GROUND的信息
        GETOutdoorGroundsID(that.$props.groundId)
          .then((data) => {
            that.axiosdata = data;
            console.log(data.state);
            // console.log(that.$props.groundId, that.axiosdata);
            that.outdoorGround.场地名称 = data.positionName;
            that.outdoorGround.场地大小 = data.area;
            that.outdoorGround.详细描述 = data.description;
          })
          .catch((err) => {
            this.data = err;
          });
      }
    },
    pushLikeButton() {
      const that = this;
      console.log(that.likes);
      for (var i = 0; i < that.likes.length; i++) {
        if (that.likes[i].groundId == that.groundId) {
          that.$message("您已收藏过该场地");
          return;
        }
      }

      if (that.buttonshow) {
        //组织

        POSTOrgFavorites({
          accountNumber: that.id,
          groundId: that.groundId,
        })
          .then((data) => {
            // this.res = data;
            console.log(data);
            that.$message({ message: "成功收藏", type: "success" });
          })
          .catch((err) => {
            // console.log("err", err);

            this.data = err;
          });
      } else {
        //学生
        POSTStuFavorites({
          accountNumber: that.id,
          groundId: that.groundId,
        })
          .then((data) => {
            that.$message({ message: "成功收藏", type: "success" });
            console.log(data);
          })
          .catch((err) => {
            this.data = err;
          });
      }
    },
  },
};
</script>