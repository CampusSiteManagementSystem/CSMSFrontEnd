<template>
  <div class="courese" style="padding: 3%">
    <!-- <div slot="header" class="clearfix" style="text-align: center; padding:2%">  -->
      
      <div slot="header" class="clearfix" >
        <!-- <span>场地时间占用详情</span>
      <el-date-picker style="float: right; padding: 3px 0" v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker> -->
      <el-row>
          <el-col :span="20">
            <div>
              <h3 style="margin-top:-4px ">场地时间占用详情</h3>
            </div>
          </el-col>
          <el-col :span="4">
            <!--    padding-top: 10px  padding-bottom: 0   -->
            <el-date-picker style="float: right; margin-top:-6px" v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
          </el-col>
        </el-row>
  </div>
    
    <el-table :data="tableData" border >
      <el-table-column prop="timeslot" label="时间"> </el-table-column>
      <el-table-column prop="mon" label="周一" > </el-table-column>
      <el-table-column prop="tue" label="周二"> </el-table-column>
      <el-table-column prop="wed" label="周三"> </el-table-column>
      <el-table-column prop="thu" label="周四"> </el-table-column>
      <el-table-column prop="fri" label="周五"> </el-table-column>
      <el-table-column prop="sat" label="周六"> </el-table-column>
      <el-table-column prop="sun" label="周日"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CourseTable",
  data() {
    // let occupyed={
        
    //       timeslot: "1",
    //       mon: "数据库",
    //       tue: "编译原理",
    //       wed: "编译原理",
    //       thu: "编译原理",
    //       fri: "编译原理",
    //       sat: "编译原理",
    //       sun: "编译原理",
        

    // };
    // let tableData=[{
    //         timeslot: "1",
    //       mon: "数据库",
    //       tue: "编译原理",
    //       wed: "编译原理",
    //       thu: "编译原理",
    //       fri: "-",
    //       sat: "编译原理",
    //       sun: "编译原理",

    // },{
    //         timeslot: "2",
    //       mon: "数据库",
    //       tue: "编译原理",
    //       wed: "编译原理",
    //       thu: "编译原理",
    //       fri: "编译原理",
    //       sat: "编译原理",
    //       sun: "-",

    // }]
      let courseData=null;// eslint-disable-line no-unused-vars
    
    return {
      value1: "",
      tableData:courseData,
      // tableData:Array(11).fill(occupyed),
    };
  },
    created() {
    /* mock随机数据*/
    let Mock = require('mockjs')
    this.courseData=Mock.mock({
        'data|7': [
            {
                'timeslot|+1': ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
                'mon|1': ['数据库', '编译原理', '马原', '毛概',  '-', '大学语文'],
                'tue|1': ['数据库', '编译原理', '马原', '毛概',  '-', '大学语文'],
                'wed|1': ['数据库', '编译原理', '马原', '毛概',  '-', '大学语文'],
                'thu|1': ['数据库', '编译原理', '马原', '毛概',  '-', '大学语文'],
                'fri|1': ['数据库', '编译原理', '马原', '毛概',  '-', '大学语文'],
                'sat|1':['数据库', '编译原理', '马原', '毛概',  '-', '大学语文'],
                'sun|1':['数据库', '编译原理', '马原', '毛概',  '-', '大学语文'],
            }
        ]
    });
    console.log("courseData",this.courseData)
    console.log("tableData",this.tableData)
    // console.log(JSON.stringify(temp, null, 4))
    
  },
  mounted(){
    this.tableData=this.courseData.data
   console.log("tableData2",this.tableData)

  },
  methods: {
    /**
     * 数字转中文
     * @param {Number} num 需要转换的数字
     * @param {String} identifier 标识符
     * @returns {String} 转换后的中文
     */
    digital2Chinese(num, identifier) {
      const character = [
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十",
        "十一",
        "十二",
      ];
      return identifier === "week" && (num === 0 || num === 7)
        ? "日"
        : character[num];
    },
  },
};
</script>

<style scoped>
.block {
  text-align: center;
}.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>