<template>
  <div class="course-table" style="padding: 2%">
    <div slot="header" class="clearfix">
      <el-row type="flex" align="middle">
        <el-col :span="17">
          <div>
            <h3>场地时间占用详情</h3>
          </div>
        </el-col>
        <el-col :span="4">
          <el-date-picker
            style="float: right"
            v-model="seletedDate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-col>
      </el-row>
    </div>

    <el-table
      ref="singleTable"
     
      :data="tableData"
      border
      style="width: 100%"
      :row-style="{ height: '2px' }"
      tag="aa"
    >
      <el-table-column prop="timeslot" label="时间"> </el-table-column>
      <el-table-column prop="mon" label="周一"> </el-table-column>
      <el-table-column prop="mon" label="周二"> </el-table-column>
      <el-table-column prop="mon" label="周三"> </el-table-column>
      <el-table-column prop="mon" label="周四"> </el-table-column>
      <el-table-column prop="mon" label="周五"> </el-table-column>
      <el-table-column prop="mon" label="周六"> </el-table-column>
      <el-table-column prop="mon" label="周日"> </el-table-column>
    </el-table>
    <!-- <div style="margin-top: -900px; margin-left: 200px" > -->
      <div >
      <div v-for="(item, index) in usualCourses" v-bind:key="item.id">
        <div
          class="flex-item kcb-item"
          @click="
            selectedCourseIndex = index;
            showUsualCourseDialog = true;
          "
          :style="{
            marginLeft: (item.day - 1) * courseWidth + 'px',
            marginTop: (item.startTime - 1) * courseHeight + 5 + 'px',
            width: courseWidth-1 + 'px',
            height: item.length * courseHeight - 5 + 'px',
            backgroundColor: '#705bcf',
          }"
        >
          <div class="small-text">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- <el-scrollbar style="height: 100%">
      <div class="course-table-content">
        <div
          class="top"
          :style="{ width: courseWidth * weekTable.length + 'px' }"
        >
          <div
            v-for="item in weekTable"
            class="top-text"
            :key="item.id"
            :style="{ width: courseWidth + 'px' }"
          >
            周{{ item }}
          </div>
        </div>
        <div
          class="main"
          :style="{
            width: courseWidth * weekTable.length + 35 + 'px',
            height: courseHeight * timeTable.length + 'px',
          }"
        >
          <div class="period">
            <div
              v-for="item in timeTable"
              class="left-text"
              v-bind:key="item.id"
              :style="{
                height: courseHeight + 'px',
                width: courseHeight * 3 + 'px',
              }"
            >
              {{ item }}
            </div>
          </div>
          



          <div v-for="(item, index) in usualCourses" v-bind:key="item.id">
            <div
              class="flex-item kcb-item"
              @click="
                selectedCourseIndex = index;
                showUsualCourseDialog = true;
              "
              :style="{
                marginLeft: (item.day - 1) * courseWidth + 'px',
                marginTop: (item.startTime - 1) * courseHeight + 5 + 'px',
                width: courseWidth + 'px',
                height: item.length * courseHeight - 5 + 'px',
                backgroundColor: '#705bcf',
              }"
            >
              <div class="small-text">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar> -->
  </div>
</template>
 
<script>
export default {
  name: "CourseTable",
  data() {
    return {
      selectedCourseIndex: 0,
      axiosdata: null,
      seletedDate: "",

      tableData: [
        { timeslot: "8:00-9:00" },
        { timeslot: "9:00-10:00" },
        { timeslot: "10:00-11:00" },
        { timeslot: "11:00-12:00" },
        { timeslot: "12:00-13:00" },
        { timeslot: "13:00-14:00" },
        { timeslot: "14:00-15:00" },
        { timeslot: "15:00-16:00" },
        { timeslot: "16:00-17:00" },
        { timeslot: "17:00-18:00" },
        { timeslot: "18:00-19:00" },
        { timeslot: "19:00-20:00" },
        { timeslot: "20:00-21:00" },
        { timeslot: "21:00-22:00" },
      ],
    };
  },
  props: {
    groundId: String,
    width: {
      type: Number,
      default: 1200,
    },
    height: {
      type: Number,
      default: 900,
    },
    usualCourses: {
      type: Array,
      default: () => [
        {
          day: "1",
          length: "1",
          name: "普通物理",
          startTime: "9",
          type: "一般课",
        },
        {
          day: "2",
          length: "1",
          name: "数据库",
          startTime: "1.5",
          type: "一般课",
        },
        {
          day: "2",
          length: "1",
          name: "数据库",
          startTime: "3",
          type: "一般课",
        },
        {
          day: "2",
          length: "2",
          name: "数据库",
          startTime: "9",
          type: "一般课",
        },
        {
          day: "2",
          length: "1",
          name: "数据库",
          startTime: "8",
          type: "一般课",
        },
      ],
    },

    weekTable: {
      type: Array,
      default: () => ["一", "二", "三", "四", "五", "六", "日"],
    },
    timeTable: {
      type: Array,
      // default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      default: () => [
        "8:00-9:00",
        "9:00-10:00",
        "9:00-10:00",
        "10:00-11:00",
        "11:00-12:00",
        "12:00-13:00",
        "13:00-14:00",
        "14:00-15:00",
        "15:00-16:00",
        "16:00-17:00",
        "17:00-18:00",
        "18:00-19:00",
        "19:00-20:00",
        "20:00-21:00",
        "21:00-22:00",
      ],
    },
  },
  
  computed: {
    courseWidth() {
      // console.log(this.$refs.singleTable.bodyWidth)
      return Math.max((this.width - 35) / this.weekTable.length, 50);
      // return this.$refs.singleTable.bodyWidth;
    },
    
    courseHeight() {
      // console.log(this.$refs.singleTable.columns[0].realWidth)
      // console.log( this.$refs.singleTable.bodyWidth)
      //  this.$refs.singleTable.bodyWidth
     
      // return this.$refs.singleTable.bodyWidth
      // console.log(Math.max((this.height - 35) / this.timeTable.length, 50))
      // return Math.max((this.height - 35) / this.timeTable.length, 50);
      return 50;
    },
    selectedCourse() {
      return this.usualCourses[this.selectedCourseIndex];
    },
  },
  created() {},
  mounted() {
    var axios = require("axios");
    const that = this;

    var config = {
      method: "get",

      url: "http://139.196.114.7/api/OccupyTimes/",
      params: {
        groundId: that.groundId,
        time: "2021-07-10T00:00:00.00",
      },
      headers: {},
    };
    // console.log(config);

    axios(config)
      .then(function (response) {
        that.axiosdata = response.data;
        // console.log("3response.data", response.data);
        that.transportData();
        // console.log(
        //   "JSON.stringify(response.data)",
        //   JSON.stringify(response.data)
        // );
      })
      .catch(function (error) {
        console.log(error);
      });
     
  },
  methods: {
    getStartTime(time) {
       
      // time="2021-07-12T05:42:48.883Z";
      // console.log("time", time);

      var date = new Date(Date.parse(time.replace("T", " ").toString()));
      date.getHours();

      // console.log(
      //   "Date",
      //   date,
      //   date.getHours(),
      //   date.getMinutes(),
      //   date.getHours() - 7 + date.getMinutes() / 60
      // );
      return date.getHours() - 7 + date.getMinutes() / 60;
    },

    transportData() {
      // console.log("1axiosdata", this.axiosdata);
      for (var i = 0; i < this.axiosdata.length; i++) {
        var temp = {
          day: "1",
          length: "1",
          name: "普通物理",
          startTime: "9",
          type: "一般课",
        };
        temp.day = this.axiosdata[i].day;
        temp.length = this.axiosdata[i].duration / 60;
        if (temp.length <= 0.5) continue;
        temp.name = this.axiosdata[i].name;
        temp.startTime = this.getStartTime(this.axiosdata[i].startTime);
        temp.type = this.axiosdata[i].type;
        this.usualCourses.push(temp);
      }
      // console.log("this.$refs.singleTable.columns[0].width",this.$refs.singleTable.columns[0].realWidth)
      //       console.log("this.$refs.singleTable.columns[0].width",this.$refs.singleTable.bodyWidth)
      // console.log("this.$refs.singleTable.width",this.$refs.singleTable.width);
      
    },
    // courseWidth() {
    //   console.log("this.$refs.singleTable.bodyWidth/8",this.$refs.singleTable.bodyWidth/8)
    //   return  this.$refs.singleTable.bodyWidth/8;
    // },
  },
};
</script>
 
<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.course-table {
  border-radius: 12px;
}
.top {
  display: flex;
  flex-direction: row;
  padding-left: 35px;
  background-color: #e7e8e8;
  color: rgb(0, 0, 0);
}
.top-text {
  width: 100px;
  height: 35px;
  font-size: 26px;
  justify-content: center;
  display: flex;
  align-items: center;
}
.main {
  height: 1200px;
  width: 730px;
  display: flex;
  position: relative;
}
.flex-item {
  width: 95px;
  height: 200px;
}
.kcb-item {
  position: absolute;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
}
.period {
  background-color: #e7e8e8;
  color: rgb(0, 0, 0);
}
.small-text {
  font-size: 22px;
  color: #fff;
  text-align: center;
}
.left-text {
  width: 35px;
  height: 100px;
  font-size: 26px;
  justify-content: center;
  display: flex;
  align-items: center;
}
.btn_practice_course {
  position: absolute;
  z-index: 110;
  top: 35px;
  right: 0px;
  width: 100px;
  height: 100px;
  line-height: 24px;
  background: #31c27c;
  border-radius: 50px;
  font-size: 24px;
  text-align: center;
  color: #fff;
  opacity: 0.7;
  padding: 12px;
}
.el-dialog .dialog-content {
  color: #000;
  line-height: 60px;
}
.el-dialog .dialog-content .tip {
  color: #000;
  line-height: 60px;
  text-align: center;
}
</style>