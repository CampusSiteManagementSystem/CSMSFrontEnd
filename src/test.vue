<template>
  <div>
    <el-button @click="test">test</el-button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
import { POSTActivities } from "./API/http";
export default {
  data() {
    return {
      res: null,
    };
  },
  methods: {
    test() {
      POSTActivities({
        name: "string",
        accountNumber: "string",
        activityDate: "2021-07-14T09:11:54.782Z",
        startTime: "2021-07-14T09:11:54.782Z",
        participantNum: 0,
        description: "string",
        additionalRequest: "string",
        duration: 0,
        groundId: "string",
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