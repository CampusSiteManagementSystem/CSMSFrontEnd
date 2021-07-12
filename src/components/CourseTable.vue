<template>
  <div class="course-table">
    <el-scrollbar style="height: 100%">
      <div class="course-table-content">
        <div
          class="top"
          :style="{ width: courseWidth * weekTable.length + 'px' }"
        >
          <div
            v-for="item in weekTable"
            class="top-text"
            v-bind:key="item.id"
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
              :style="{ height: courseHeight + 'px' ,width:courseHeight*3+'px'}"
            >
              {{ item }}
            </div>
          </div>
          <!--课表-->
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
    </el-scrollbar>

    <!-- <el-dialog
      title="我的实践课"
      :visible.sync="showPracticeCourseDialog"
      width="30%"
      center
    >
      <el-scrollbar style="height: 500px" wrap-style="overflow-x:hidden;">
        <div class="dialog-content">
          <div v-for="(item) in practiceCourses"  v-bind:key="item.id">
            <div>课程名称： {{ item.name }}</div>
            <div>上课教师： {{ item.teacher }}</div>
          </div>
          <div class="tip" v-if="practiceCourses.length < 1">
            本学期没有实践课哦
          </div>
        </div>
      </el-scrollbar>
    </el-dialog>
    <el-dialog
      title="课程信息"
      :visible.sync="showUsualCourseDialog"
      width="30%"
      center
    >
      <div class="dialog-content">
        <div v-if="typeof selectedCourse != 'undefined'">
          <div>课程名称： {{ selectedCourse.name }}</div>
          <div>
            上课时间：
            {{
              selectedCourse.week +
              " " +
              "第" +
              selectedCourse.period +
              "-" +
              (Number(selectedCourse.period) +
                Number(selectedCourse.length) -
                1) +
              "节"
            }}
          </div>
          <div>上课教师： {{ selectedCourse.teacher }}</div>
          <div>上课地点： {{ selectedCourse.room }}</div>
        </div>
        <div v-else class="tip">本学期没有课哦</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showUsualCourseDialog = false"
          >确 定</el-button
        >
      </span>
    </el-dialog> -->
  </div>
</template>
 
<script>
export default {
  name: "CourseTable",
  data() {
    return {
      selectedCourseIndex: 0,
      axiosdata: null,
    };
  },
  props: {
    groundId:String,
    width: {
      type: Number,
      default: 1200,
    },
    height: {
      type: Number,
      default: 400,
    },
    usualCourses: {
      type: Array,
      default: () => [
        {
          day: "1",
          length: "3",
          name: "普通物理",
          startTime: "3",
          type: "一般课",
        },
        {
          day: "2",
          length: "2.5",
          name: "数据库",
          startTime: "1.5",
          type: "一般课",
        },
        {
          day: "2",
          length: "5",
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
    practiceCourses: {
      type: Array,
      default: () => [],
    },
    weekTable: {
      type: Array,
      default: () => ["一", "二", "三", "四", "五", "六", "日"],
    },
    timeTable: {
      type: Array,
      // default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      default: () => ["8:00-9:00", "9:00-10:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00","13:00-14:00","14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00", "18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00"],
    },
  },
  computed: {
    courseWidth() {
      return Math.max((this.width - 35) / this.weekTable.length, 50);
    },
    courseHeight() {
      return Math.max((this.height - 35) / this.timeTable.length, 50);
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
        groundId: 1000007,
        time: "2021-07-10T00:00:00.00",
      },
      headers: {},
    };
    console.log(config);

    axios(config)
      .then(function (response) {
        that.axiosdata = response.data;
        console.log("3response.data", response.data);
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
    getStartTime(time){
      // time="2021-07-12T05:42:48.883Z";
      console.log("time",time);
      
      
     
       var date =new Date( Date.parse(time.replace('T',' ').toString()));
       date.getHours();

      console.log("Date",date,date.getHours(),date.getMinutes(),(date.getHours()-7)+date.getMinutes()/60);
      return (date.getHours()-7)+date.getMinutes()/60;

    },
    getLength(minutes){
      // console.log(minutes);
      // console.log(minutes/60);
      return minutes/60;

    },
    transportData() {
      console.log("1axiosdata", this.axiosdata);
      for (var i = 0; i < this.axiosdata.length; i++) {
        var temp = {
          day: "1",
          length: "3",
          name: "普通物理",
          startTime: "3",
          type: "一般课",
        };
        temp.day=this.axiosdata[i].day;
        temp.length=this.getLength(this.axiosdata[i].duration);
        console.log(temp.length)
        if(temp.length<=0.5)continue;
        temp.name=this.axiosdata[i].name;
        temp.startTime=this.getStartTime(this.axiosdata[i].startTime);
        temp.type=this.axiosdata[i].type;
        this.usualCourses.push(temp);
      

      }
      console.log("2usualCourses", this.usualCourses);
      //       axiosdata:[
      //   {
      //     "name": "string",
      //     "day": 0,
      //     "groundId": "string",
      //     "startTime": "2021-07-12T05:42:48.883Z",
      //     "duration": 0,
      //     "description": "string",
      //     "type": "string"
      //   }
      // ]
      //       usualCourses:[
      //         {
      //           day: "1",
      //           length: "3",
      //           name: "普通物理",
      //           startTime: "3",
      //           type: "一般课",
      //         },
    },
  },
};
</script>
 
<style scoped>
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