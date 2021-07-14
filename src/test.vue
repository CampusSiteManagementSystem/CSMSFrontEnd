<template>
  <div class="container" style="width:60%; margin: 0 auto;">
    <FullCalendar
      :plugins="calendarPlugins"
      :all-day-slot="false"
      :header="{
        left:'prev',
        center:'title',
        right: 'today ,next'
      }"
      :slot-event-overlap="false"
      :events="[
        {
          title: '计算机学院小组会议',
          start: '2019-05-15 10:00:00',
          end: '2019-05-15 16:00:00',
          color:'orange'
        },
        {
          start: '2019-05-14 10:00:00',
          end: '2019-05-14 14:00:00',
          title: '东南大学计算机学术会议',
          color:'green'
        }
      ]"
      :button-text="{
        today: '今天'
      }"
      :unselect-auto="false"
      :select-overlap="false"
      :business-hours="{
        startTime: '07:00',
        endTime:'18:00',
        daysOfWeek: [ 1, 2, 3, 4, 5, 6, 0 ]
      }"
      :select-allow="handlerSeelctAllow"
      select-mirror="true"
      min-time="07:00:00"
      max-time="23:00:00"
      selectable="true"
      slot-duration="00:30"
      slot-label-format="HH:mm"
      title-format="YYYY年MM月D日"
      default-view="timeGridWeek"
      locale="zh-cn"
      @dateClick="handleDateClick"
      @select="handleSelect"/>
  </div>
</template>
 
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlulgin from '@fullcalendar/timegrid'
import '@fullcalendar/core/locales/zh-cn' // 支持中文
import momentPlugin from '@fullcalendar/moment'
import interactionPlugin from '@fullcalendar/interaction'
 
export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, timeGridPlulgin, momentPlugin, interactionPlugin],
      // 随时判断时间是否合法，通过返回true/false来判断是否能够选择
      handlerSeelctAllow: info => {
        const currentDate = new Date()
        const start = info.start
        const end = info.end
        return (start <= end && start >= currentDate)
      }
    }
  },
  methods: {
    // 当点击时候
    handleDateClick(arg) {
      console.log(arg)
    },
    // 当选择结束的时候获取开始和结束时间
    handleSelect(info) {
      console.log('form' + info.startStr + ' to ' + info.endStr)
    }
 
  }
}
</script>
 
<style scope>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
</style>
 