<!-- mapbox -->
<template>
  <div id="map">
  </div>
  
</template>
 
<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {
    this.initmap();
  },
  computed: {},
  methods: {
    initmap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoibGlqaWFuZ2ppYW5namlhbmciLCJhIjoiY2s2b2czbmltMG14cDNkbXpldjhkd3c3ZiJ9.zBaMzJo2X2UVPyFTtd5hEQ";
      let map = new this.$mapboxgl.Map({ // eslint-disable-line no-unused-vars
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [121.21, 31.288], // starting position [lng, lat]
        zoom: 16 // starting zoom
        // pitch: 60, //视野倾斜，0-60
        // bearing: -17.6,//视野旋转角度
      });
 
      //注册点击事件
    //   map.on("click", function(e) {
    //     console.log("点击");
    //   });
    }
  }
};
</script>
 
<style scoped>

@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css");
#map {
  height: 700px;
  width: 100%;
}
</style>
