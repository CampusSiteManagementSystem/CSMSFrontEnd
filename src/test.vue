<template>
  <div>
    <el-button @click="test">test</el-button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
import { DELETESystemAnnouncements  } from "./API/http";
export default {
  data() {
    return {
      res: null,
    };
  },
  methods: {
    test() {
      DELETESystemAnnouncements ({
        accountNumber: "1000001",
        systemAnnouncementDate: "2020-05-17T00:00:00",
        systemAnnouncementTime: "2020-05-17T08:00:00",
      })
        .then((data) => {
          this.res = data;
        })
        .catch((err) => {
          this.data = err;
        });
    },
  },
};
</script>