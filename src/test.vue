<template>
  <div>
    <el-button @click="test">test</el-button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
import {GETIndooeGrounds} from "./API/http";
export default {
  data() {
    return {
      res: null,
    };
  },
  methods: {
    test() {
      GETIndooeGrounds()
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