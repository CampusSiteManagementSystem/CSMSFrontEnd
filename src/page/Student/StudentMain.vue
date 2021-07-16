<template>
  <div>
    <el-row class="upper-row">
      <el-col :span="10" class="upper-row-col1"
        ><!--左上角的两块-->
        <el-card class="upper-card">
          <el-row>
            <el-col :span="9">
              <br />
              <div>
                <el-avatar :size="130" :src="StuInfo.header"></el-avatar>
              </div>
            </el-col>
            <el-col :span="15">
              <br />
              <div class="name">{{ StuInfo.name }}</div>
              <div class="other-info">
                <br />学号：{{ StuID }}<br />学院专业：<el-tag class="tag" type="success">
                  {{ StuInfo.academy==null?"请完善个人信息": StuInfo.academy}}
                </el-tag>
                <el-tag type="warning" class="tag" v-if="StuInfo.major!=null">
                  {{ StuInfo.major==null?"": StuInfo.major }}
                </el-tag>
              </div>
              <div class="date">
                {{ semesterInfo.fromYear }}-{{ semesterInfo.toYear }}年度第{{
                  semesterInfo.semester
                }}学期第{{ semesterInfo.week }}周
              </div>
              <div class="other-info">祝您学习愉快！</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="14" class="upper-row-col2">
        <el-card class="upper-card" ref="upperCardRef">
          <el-tabs  :addable='true' @tab-add="showAnnouncement">
            <!-- addable="true" @tab-add="showAnnouncement" -->
            <el-tab-pane label="系统公告">
              <el-table
                :data="systemAnnouncement"
                stripe
                style="width: 100%"
                :height="upperTableHeight"
                @row-click="onRowClick1"
                :show-header="false"
              >
                <el-table-column prop="title" width="auto"> </el-table-column>
                <el-table-column prop="systemAnnouncementDate" width="auto">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="场地公告">
              <el-table
                :data="groundAnnouncement"
                stripe
                style="width: 100%"
                :height="upperTableHeight"
                @row-click="onRowClick2"
                :show-header="false"
              >
                <el-table-column prop="title" width="auto"> </el-table-column>
                <el-table-column prop="groundName" width="auto">
                </el-table-column>
                <el-table-column
                  prop="maintenanceAnnouncementDate"
                  width="auto"
                >
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="lower-row">
      <el-col :span="12" class="lower-row-col1">
        <el-card class="lower-card">
          <div slot="header" class="clearfix">
            <span><b>未来活动</b></span>
            <router-link to="/StuFrame/ViewActivities/AllActivities">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>
          <el-table
            :data="futureActivity"
            stripe
            style="width: 100%"
            :height="lowerTableHeight"
            @row-click="onActivityRowClick"
            :show-header="false"
          >
            <el-table-column prop="name" label="活动名称" width="auto">
            </el-table-column>
            <el-table-column
              prop="organizationName"
              label="发起组织"
              width="auto"
            >
            </el-table-column>
            <el-table-column prop="startTime" label="时间" width="auto">
            </el-table-column>
            <el-table-column prop="groundName" label="地点" width="120">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12" class="lower-row-col2">
        <el-card class="lower-card" ref="lowerCardRef">
          <div slot="header" class="clearfix" style="height: 10%">
            <span><b>最近一周场地使用情况</b></span>
              <el-popover placement="left" title="图表" width="1500" trigger="click">
                <el-button type="text" style="white-space: pre-wrap" slot="reference"><i class="el-icon-s-data"></i></el-button>
              <el-container id="pie" style="width: 1500px; height: 500px">
              </el-container>
              </el-popover>
            <router-link to="/StuFrame/ShowPlaceDetail">
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看更多</el-button
              >
            </router-link>
          </div>
          <el-table
            :data="occupation"
            stripe
            style="width: 100%"
            :height="lowerTableHeight"
            @row-click="onOccupyRowClick"
          >
            <el-table-column prop="groundName" label="场地名称" width="120">
            </el-table-column>
            <el-table-column prop="title" label="活动名称" width="120">
            </el-table-column>
            <el-table-column prop="start" label="开始时间">
            </el-table-column>
            <el-table-column prop="end" label="结束时间"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" width="50%" class="dialog">
      <span slot="title">
        <h3>{{ dialogTitle }}</h3>
      </span>
      <div class="content">
        <span>{{ dialogContent }}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="activityVisible"
      width="50%"
      title="活动详情"
      class="dialog"
    >
      <div class="content">
        <p><b>活动名称：</b>{{ activitySelected.name }}</p>
        <p><b>举办组织：</b>{{ activitySelected.organizationName }}</p>
        <p><b>活动时间：</b>{{ activitySelected.startTime }}</p>
        <p><b>活动地点：</b>{{ activitySelected.groundName }}</p>
        <p><b>预计持续时间：</b>{{ activitySelected.duration }}</p>
        <p><b>参与人数：</b>{{ activitySelected.participantNum }}</p>
        <p><b>活动描述：</b>{{ activitySelected.description }}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="activityVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>


<script>
import store from "../../state/state";
import * as echarts from "echarts";
import {
  GETMaintenanceAnnouncements,
  GETSystemAnnouncements,
  GETStudentsID,
  GETActivities,
  GETOccupyTimes,
} from "../../API/http";
export default {
  mounted () {
        //获取场地公告
    GETMaintenanceAnnouncements()
      .then((data) => {
        //console.log(data);
        for (var i = 0; i < data.length; i++) {
          var temp = {
            groundId: "123123",
            groundName: "",
            title: "关于饮水机的公告##C楼饮水机坏了，望周知",
            maintenanceAnnouncementDate: "2020-05-17T00:00:00",
            content: "C楼饮水机坏了，望周知",
          };
          temp.groundName = data[i].groundName;
          temp.groundId = data[i].groundId;
          temp.maintenanceAnnouncementDate = data[
            i
          ].maintenanceAnnouncementDate.replace("T", " ");
          temp.title = data[i].content.substr(0, data[i].content.search("##"));
          temp.content = data[i].content.slice(
            data[i].content.search("##") + 2
          );
          this.groundAnnouncement.push(temp);
          //console.log(temp);
        }
      })
      .catch((err) => {
        //console.log(err);
        err;
        this.$message("场地公告数据请求错误");
      });
    //获取系统公告
    GETSystemAnnouncements()
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          var temp = {
            accountNumber: "123123",
            title: "关于饮水机的公告##C楼饮水机坏了，望周知",
            systemAnnouncementDate: "2020-05-17T00:00:00",
            content: "C楼饮水机坏了，望周知",
          };
          temp.accountNumber = data[i].accountNumber;
          temp.systemAnnouncementDate = data[i].systemAnnouncementDate.replace(
            "T",
            " "
          );
          temp.title = data[i].content.substr(0, data[i].content.search("##"));
          temp.content = data[i].content.slice(
            data[i].content.search("##") + 2
          );
          this.systemAnnouncement.push(temp);
        }
      })
      .catch((err) => {
        //console.log(err);
        err;
        this.$message("系统公告数据请求错误");
      });
    //获取学生信息
    GETStudentsID(this.StuID)
      .then((data) => {
        // if (data.header=null){
        //   data.header="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
        // }
        this.StuInfo = data;
        this.StuInfo.header="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
        this.NumToStr();
        //console.log(data);
      })
      .catch((err) => {
        //console.log(err);
        err;
        console.log(err);
        this.$message("学生信息请求错误");
      });
    //未来活动
    GETActivities()
      .then((data) => {
        this.futureActivity = data["待举办"]; //未举办
        for(var i = 0; i < this.futureActivity.length; i++)
        {
          this.futureActivity[i].startTime=(this.futureActivity[i].startTime.replace("T", "   ").split('.'))[0];
        }
      })
      .catch((err) => {
        //console.log(err);
        err;
        this.$message("未来活动数据请求错误");
      });
    //场地占用情况
    GETOccupyTimes()
      .then((data) => {
        console.log(data);
        this.occupation = data;
        for(var i = 0; i < data.length; i++)
        {
          this.occupation[i].start=data[i].start.replace("T", "   ");
          this.occupation[i].end=data[i].end.replace("T", "   ");
        }
        console.log(this.occupation);
        for(let j = 0; j < this.occupation.length; j++)
        {
          if(this.occupyGround.length==0){
              let org={
              value: 1, name: '其他'};
              org.name=this.occupation[j].groundName;
              this.occupyGround.push(org);
              this.occupyName.push(org.name);
          }
          else{
          for(let k = 0; k < this.occupyGround.length; ++k)
          {
            if(this.occupyGround[k].name==this.occupation[j].groundName)
            {
              this.occupyGround[k].value++;
              break;
            }
            if(k==this.occupyGround.length-1){
              let temp={
                    value: 1, name: '其他'};
              temp.name=this.occupation[j].groundName;
              this.occupyGround.push(temp);
              this.occupyName.push(temp.name);
              k++;
            }
          }
          }          
        }
        for(let j = 0; j < this.occupation.length; j++)
        {
          if(this.occupyPosition.length==0){
              let org={
              value: 1, name: '其他'};
              org.name=this.occupation[j].positionName;
              this.occupyPosition.push(org);
              this.occupyName.push(org.name);
          }
          else{
          for(let k = 0; k < this.occupyPosition.length; ++k)
          {
            if(this.occupyPosition[k].name==this.occupation[j].positionName)
            {
              this.occupyPosition[k].value++;
              break;
            }
            if(k==this.occupyPosition.length-1){
              let temp={
                    value: 1, name: '其他'};
              temp.name=this.occupation[j].positionName;
              this.occupyPosition.push(temp);
              this.occupyName.push(temp.name);
              k++;
            }
          }
          }          
        }
        console.log(this.occupyGround);
        console.log(this.occupyName);
        this.drawPic();
      })
      .catch((err) => {
        //console.log(err);
        err;
        this.$message("场地占用数据请求错误");
      });
    this.upperTableHeight=this.$refs.upperCardRef.$el.clientHeight-95;
    this.lowerTableHeight=this.$refs.lowerCardRef.$el.clientHeight-105;
  },
  data() {
    return {
      upperTableHeight: null,
      lowerTableHeight: null,
      //第一块卡片信息
      StuID: store.state.ID,
      StuInfo: {},
      semesterInfo: {
        //get semester from backend
        fromYear: "2021",
        toYear: "2022",
        semester: "2",
        week: "20",
      },
      //第二块卡片信息
      //弹出式公告
      dialogTitle: "",
      dialogContent: "",
      dialogVisible: false,
      activityVisible: false,
      activitySelected: {},
      groundAnnouncement: [],
      systemAnnouncement: [],

      //第三块卡片信息
      futureActivity: [],
      //第四片卡片信息
      occupation: [],
      occupyGround:[],
      occupyName:[],
      occupyPosition:[],
      colleges: [
        {
          value: "软件学院",
          label: "软件学院",
        },
        {
          value: "土木工程学院",
          label: "土木工程学院",
        },
        {
          value: "经济与管理学院",
          label: "经济与管理学院",
        },
        {
          value: "数学科学学院",
          label: "数学科学学院",
        },
        {
          value: "电子与信息工程学院",
          label: "电子与信息工程学院",
        },
      ],
      chart:null,
      options:null,
    };
  },
  methods: {
    showAnnouncement() {
      this.$router.push("/StuFrame/Announcement");
    },
    onRowClick1(row) {
      this.dialogTitle = row.title;
      this.dialogContent = row.content;
      this.dialogVisible = true;
    },
    onRowClick2(row) {
      this.dialogTitle = row.groundName + " " + row.title;
      this.dialogContent = row.content;
      this.dialogVisible = true;
    },
    NumToStr() {
      if (this.StuInfo.academy!=null && this.StuInfo.academy < this.colleges.length) {
        this.StuInfo.academy = this.colleges[this.StuInfo.academy].label;
      }
    },
    onActivityRowClick(row) {
      this.activitySelected = row;
      this.activityVisible = true;
    },
    onOccupyRowClick(row) {
      this.$router.push("/StuFrame/ShowSchedule/" + row.groundId);
    },
    drawPic()
    {
      console.log("47878787844",this.occupyName);
      this.chart = echarts.init(document.getElementById('pie'));
      this.option={
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: this.occupyName
    },
    series: [
        {
            name: '楼号',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                position: 'inner',
                fontSize: 14,
            },
            labelLine: {
                show: false
            },
            data: this.occupyPosition
        },
        {
            name: '房间号',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                length: 30,
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: this.occupyGround
        }
    ]
      }
      this.chart.setOption(this.option);
    }
  },
};
</script>

<style scpoed>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.tag{
  margin-top: 1px;
  margin-right: 5px;
}
.upper-card,
.lower-card {
  overflow: auto;
  border-radius: 15px;
  height: 100%;
}
.upper-row {
  padding: 5px;
  height: 40%;
}
.lower-row {
  padding: 5px;
  height: 60%;
}
.el-dialog {
  border-radius: 12px;
}
.dialog {
  backdrop-filter: blur(10px);
}
.content {
  height: 320px;
}
.lower-row-col1,
.lower-row-col2,
.upper-row-col1,
.upper-row-col2 {
  height: 100%;
  padding: 5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

/* .upper-card {
  height: 40%;
  height: 230px;
}
.lower-card {
  height: 60%;
  height: 340px;
} */

.name {
  font-size: 30px;
  font-weight: 550;
  line-height: 20px;
}
.other-info {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
}
.date {
  font-size: 20px;
  line-height: 40px;
  font-weight: 700;
}
.el-card {
  border-radius: 15px;
}
.el-dialog__header {
  border-bottom: 1px solid #ebebeb;
}
</style>