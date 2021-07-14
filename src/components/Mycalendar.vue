<template>
  <div style="padding: 1% 3% 0 3%">
    <!-- defaultView: 默认视图（dayGridMonth月视图） -->
    <FullCalendar
      defaultView="timeGridWeek"
      :events="events"
      :plugins="calendarPlugins"
      :weekends="true"
      :allDaySlot="false"
      eventLimit="3"
      height="auto"
      slotDuration="00:30:00"
      :minTime="minTime"
      :maxTime="maxTime"
      :timeGridEventMinHeight="auto"
      locale="zh-cn"
      :header="header"
      :buttonText="buttonText"
      eventTextColor="#fff"
      eventBackgroundColor="#00bcd4"
      eventBorderColor="#00bcd4"
      navLinks="true"
      nowIndicator="true"
      @eventClick="eventClick"
    ></FullCalendar>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //点击日历触发的事件

export default {
  name: "Mycalendar",
  components: {
    FullCalendar, //
  },
  props: {
    //事件
    groundId: {
      type: Array,
    },

    //每天开始时间
    minTime: {
      type: String,
      required: false,
      default: "07:00:00",
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
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
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
        },
      ],
      axiosdata: "",
    };
  },
  methods: {
    //@dateClick="handleDateClick"
    //点击日期
    handleDateClick(info) {
      console.log(info.event);
    },
    //点击事件查看详情
    eventClick(info) {
      this.$emit("eventClick", info);
    },
    //fetch 当前数据
    fetchdata() {
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

      axios(config)
        .then(function (response) {
          that.axiosdata = response.data;

          that.transportData();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    transportData() {
      // console.log("1axiosdata", this.axiosdata);
      for (var i = 0; i < this.axiosdata.length; i++) {
        var temp = {
          end: "2021-07-03T16:00:00",
          start: "2021-07-03T14:30:00",
          title: "舞蹈",
        };
        temp.day = this.axiosdata[i].day;
        temp.length = this.axiosdata[i].duration / 60;
        if (temp.length <= 0.5) continue;
        temp.name = this.axiosdata[i].name;
        temp.startTime = this.getStartTime(this.axiosdata[i].startTime);
        temp.type = this.axiosdata[i].type;
        this.event.push(temp);
      }
    },
  },
};
</script>


<style >
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
</style>

