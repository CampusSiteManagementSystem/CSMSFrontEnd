<template>
  <div>
    <el-button @click="test">test</el-button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
import { DELETEStuFavorites } from "./API/http";
export default {
  data() {
    return {
      res: null,
    };
  },
  methods: {
    test() {
      DELETEStuFavorites({
        accountNumber:"1000001",
        groundId:"1000007"
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