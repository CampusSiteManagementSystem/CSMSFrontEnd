<template>
  <div>
    <el-button @click="test">test</el-button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
import { POSTCreditRecords } from "./API/http";
export default {
  data() {
    return {
      res: null,
    };
  },
  methods: {
    test() {
      POSTCreditRecords({
        reason: "string",
        score: 0,
        id: "1000020",
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