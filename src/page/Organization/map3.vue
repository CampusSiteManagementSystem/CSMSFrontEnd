<template>
  <div id="showmap"></div>
</template>

<script>
const mapboxgl = require("mapbox-gl"); // eslint-disable-line no-unused-vars
export default {
  mounted() {
    this.initmap();
  },
  methods: {
    initmap() {
      mapboxgl.accessToken =
       'pk.eyJ1Ijoid3l3dDIxNyIsImEiOiJja3BkbjV2YTExZ2FiMndwZ2V4cnNtbmRkIn0.BTH22KZvm7z_Sh4TbVRBmQ'; //这里请换成自己的token
      let showmap = new mapboxgl.Map({// eslint-disable-line no-unused-vars
        container: "map", // container id 绑定的组件的id
        style: "mapbox://styles/mapbox/streets-v11", //地图样式，可以使用官网预定义的样式,也可以自定义
        center: [118.726533, 32.012005], // 初始坐标系，这个是南京建邺附近
        zoom: 15, // starting zoom 地图初始的拉伸比例
        pitch: 60, //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
        bearing: -17.6, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
        antialias: true, //抗锯齿，通过false关闭提升性能
      });
    },
  },
  
};
</script>

<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css");
#showmap {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>