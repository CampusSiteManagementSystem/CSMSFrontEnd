<template>
  <div style="padding: 1% 3% 0 3%">
    <!-- defaultView: 默认视图（dayGridMonth月视图） -->
    <!-- :timeGridEventMinHeight="auto" -->
    <!-- editable= "true"   -->
    <FullCalendar
      defaultView="timeGridWeek"
      :events="events"
      :plugins="calendarPlugins"
      :weekends="true"
      :allDaySlot="false"
      eventLimit="3"
      height="auto"
      slotDuration="00:30:00"
      slot-label-format="HH:mm"
      :minTime="minTime"
      :maxTime="maxTime"
      locale="zh-cn"
      :header="header"
      :buttonText="buttonText"
      eventTextColor="#fff"
      eventBackgroundColor="#00bcd4"
      eventBorderColor="#00bcd4"
      navLinks="true"
      nowIndicator="true"
      selectable="true"
      :unselect-auto="false"
      :select-overlap="false"
      select-mirror="true"
      :select-allow="handlerSeelctAllow"
      @eventClick="eventClick"
      @select="handleSelect"
    ></FullCalendar>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //点击日历触发的事件
import momentPlugin from "@fullcalendar/moment";
export default {
  name: "Mycalendar",
  components: {
    FullCalendar, //
  },
  props: {
    groundId: {
      // type: String,
    },

    //每天开始时间
    minTime: {
      type: String,
      required: false,
      default: "08:00:00",
    },
    //每天结束时间
    maxTime: {
      type: String,
      required: false,
      default: "22:00:00",
    },
  },
  data() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        momentPlugin,
      ],
      header: {
        left: "prev,next today",
        center: "title",
        right: "timeGridWeek,timeGridDay,listWeek",
      },
      buttonText: {
        today: "今天",
        month: "月",
        week: "周",
        day: "天",
      },
      events: [
        {
          end: "2021-07-13T16:00:00",
          start: "2021-07-13T14:30:00",
          title: "吉他",
          color: "red",
        },
      ],
      axiosdata: "",
      realGroundId: "1000003",
      handlerSeelctAllow: (info) => {
        const currentDate = new Date();
        const start = info.start;
        const end = info.end;

        return (
          start <= end &&
          start >= currentDate &&
          start.getDate() == end.getDate()
        );
      },
    };
  },
  methods: {
    //@dateClick="handleDateClick"
    //点击日期
    // handleDateClick(info) {
    //   console.log(info.event);
    // },
    // 当选择结束的时候获取开始和结束时间
    handleSelect(info) {
      // console.log("form" + info.startStr + " to " + info.endStr);
      let a = {
        start: info.startStr,
        end: info.endStr,
      };

      this.$emit("handleSelect", a);
    },
    //点击事件查看详情
    eventClick(info) {
      console.log(info);
      this.$emit("eventClick", info);
    },
    //fetch 当前数据
    fetchdata() {
      var axios = require("axios");
      const that = this;
      // day: 7
      // description: "艺术传媒学院将举行素描基础教学，为之后的课程学习做准备。"
      // duration: 120
      // end: "2021-07-18T11:00:00"
      // groundId: "1000009"
      // groundName: "B202"
      // name: "素描教学"
      // start: "2021-07-18T09:00:00"
      // type: "活动"
      var config = {
        method: "get",

        url: "http://139.196.114.7/api/OccupyTimes/",
        params: {
          groundId: that.realGroundId,
          time: that.formatTime,
          within50: true,
        },
        headers: {},
      };
      console.log(config.params);

      axios(config)
        .then(function (response) {
          console.log("resresponse", response);
          console.log("that.groundId", that.groundId);

          that.axiosdata = response.data;
          that.events = response.data;
          for (var i = 0; i < that.events.length; i++) {
            if (that.events[i].type != "活动") {
              that.events[i].color = "#EE82EE";
            }
          }

          // that.transportData();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    transportData() {
      // console.log("1axiosdata", this.axiosdata);
      // for (var i = 0; i < this.axiosdata.length; i++) {
      //   var temp = {
      //     end: "2021-07-03T16:00:00",
      //     start: "2021-07-03T14:30:00",
      //     title: "舞蹈",
      //   };
      //   temp.day = this.axiosdata[i].day;
      //   temp.length = this.axiosdata[i].duration / 60;
      //   if (temp.length <= 0.5) continue;
      //   temp.name = this.axiosdata[i].name;
      //   temp.startTime = this.getStartTime(this.axiosdata[i].startTime);
      //   temp.type = this.axiosdata[i].type;
      //   this.event.push(temp);
      // }
      for (var i = 0; i < this.events.length; i++) {
        this.events[i].title = this.events[i].name;
        // console.log(this.events[i]);

        //     "name": "体育课",
        // "day": 6,
        // "groundId": "1000003",
        // "start": "2021-07-17T17:19:20",
        // "duration": 12,
        // "end": "2021-07-17T17:31:20",
        // "description": "这是一条描述",
        // "type": "活动"
      }
    },
    updateGround() {
      this.fetchdata();
    },
  },
  mounted() {
    this.realGroundId = this.groundId;
    this.fetchdata();
  },
  watch: {
    groundId: {
      // 接收父组件传来的参数名
      handler: function (val, oldVal) {
        if (val != oldVal) {
          this.realGroundId = val;
          console.log("new realGroundId", this.realGroundId);
          this.updateGround();
        }
      },
    },
    // realGroundId: {
    //   // 接收父组件传来的参数名
    //   handler: function (val, oldVal) {
    //     if (val != oldVal) {
    //       this.realGroundId = val;
    //       console.log("new realGroundId", this.realGroundId);
    //       this.updateGround();
    //     }
    //   },
    // },
  },
  computed: {
    formatTime() {
      var Y, m, d, H, i, s, sresult;

      const date = new Date();

      (Y = date.getFullYear()),
        (m = date.getMonth() + 1),
        (d = date.getDate()),
        (H = date.getHours()),
        (i = date.getMinutes()),
        (s = date.getSeconds());
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      if (H < 10) {
        H = "0" + H;
      }
      if (i < 10) {
        i = "0" + i;
      }
      if (s < 10) {
        s = "0" + s;
      }
      sresult = String(Y) + "-" + m + "-" + d + "T" + H + ":" + i + ":" + s;

      return sresult;
    },
  },
};
</script>


<style >
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
.fc-toolbar h2 {
  font-size: 1.3em;
  margin: 0;
}
</style>

