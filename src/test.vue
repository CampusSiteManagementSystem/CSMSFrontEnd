<template>
  <div>
    <el-button @click="test">test</el-button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
import { PUTIndoorGroundsID } from "./API/http";
export default {
  data() {
    return {
      res: null,
    };
  },
  methods: {
    test() {
      PUTIndoorGroundsID("1000003", {
        groundId: "1000003",
        seatNum: 100,
        computerNum: 5,
        floor: 2,
        roomNo: 10,
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