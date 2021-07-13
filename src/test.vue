<template>
  <div>
    <el-button @click="test">test</el-button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
import { POSTFeedbackRecords } from "./API/http";
export default {
  data() {
    return {
      res: null,
    };
  },
  methods: {
    test() {
      POSTFeedbackRecords({
        feedbackDate: "2021-05-18T00:00:00",
        feedbackTime: "2021-05-18T19:50:00",
        content: "还可以",
        score: 85,
        id: "1000004",
        groundName: "B301",
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