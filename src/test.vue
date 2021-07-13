<template>
  <div>
    <el-button @click="test">test</el-button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
import { DELETESystemAnnouncementsID  } from "./API/http";
export default {
  data() {
    return {
      res: null,
    };
  },
  methods: {
    test() {
      DELETESystemAnnouncementsID ({
        accountNumber: "1000001",
        systemAnnouncementDate: "2021-07-12T09:36:24",
        systemAnnouncementTime: "2021-07-12T09:36:24",
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