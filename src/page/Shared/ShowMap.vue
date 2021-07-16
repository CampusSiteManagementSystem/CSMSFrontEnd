<template>
  <div>
    <div id="map">
      <input
        id="satellite-v9"
        type="radio"
        name="rtoggle"
        value="satellite"
        checked="checked"
      />
      <!-- See a list of Mapbox-hosted public styles at -->
      <!-- https://docs.mapbox.com/api/maps/styles/#mapbox-styles -->
      <label for="satellite-v9">satellite</label>
      <PopMeg v-show="false" building="b" description="a" />
    </div>
    <div id="menu"></div>
  </div>
</template>
 
<script>
import { GETPositions } from "../../API/http";
import PopMeg from "../../components/PopMeg.vue";
import Vue from "vue";
export default {
  data() {
    return {
      router: this.$router,
      testValue: 1,
      axiosdata: {},
      features: [],
    };
  },
  components: { PopMeg },
  created() {},
  mounted() {
    // await this.fetchData()
    this.initmap();
    this.fetchData();
    // console.log(this.$router);
  },
  props: {
    membertype: {
      //true代表学生，false代表组织
      type: Boolean,
      // default: true,
    },
  },
  computed:{
    formatTime() {
      var Y, m, d, H, i, s, sresult;

      const date = new Date();

      (Y = date.getFullYear()),
        (m = date.getMonth() + 1),
        (d = date.getDate()),
        (H = date.getHours()),
        (i = date.getMinutes()),
        (s = date.getSeconds());
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      if (H < 10) {
        H = "0" + H;
      }
      if (i < 10) {
        i = "0" + i;
      }
      if (s < 10) {
        s = "0" + s;
      }
      sresult = String(Y) + "-" + m + "-" + d + "T" + H + ":" + i + ":" + s;

      return sresult;
    },
  },
  methods: {
    initmap() {
      // console.log("data router",this.$data.router);
      // console.log("this.$router",this.$router);
      const tempTest = this.$router;
      const membertype = this.$props.membertype;
      // console.log("membertype", membertype);
      // console.log("tempTest", tempTest);
      const bounds = [
        // Southwest coordinates
        [121.2, 31.28], // Northeast coordinates
        [121.23, 31.296],
      ];
      const temp = this.$mapboxgl;
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoibGlqaWFuZ2ppYW5namlhbmciLCJhIjoiY2s2b2czbmltMG14cDNkbXpldjhkd3c3ZiJ9.zBaMzJo2X2UVPyFTtd5hEQ";
      let map = new this.$mapboxgl.Map({
        // eslint-disable-line no-unused-vars
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [121.21, 31.288],
        zoom: 14, // starting zoom
        antialias: true,
        maxBounds: bounds,
        // pitch: 60, //视野倾斜，0-60
        // bearing: -17.6,//视野旋转角度
      });

      //注册点击事件
      map.on("click", function (e) {
        console.log("点击");
        console.log(e.lngLat);
      });
      const mapFeature = this.features;
      // console.log("mapFeature",mapFeature);
      map.on("load", function () {
        //on设置监听，以及触发时的回调，这是加载时的触发的生成3d地图的例子
        map.flyTo({
          center: [121.21, 31.288],
          zoom: 16,
          speed: 0.2,
          curve: 2,
          pitch: 30,
        });
        map.addSource("places", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: mapFeature,
          },
        });
        // Add a layer showing the places.
        map.addLayer({
          id: "places",
          type: "circle",
          source: "places",
          paint: {
            "circle-color": "#4264fb",
            "circle-radius": 6,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
          },
        });

        // Create a popup, but don't add it to the map yet.
        let popup = new temp.Popup({
          closeButton: false,
          closeOnClick: false,
        });
        // Insert the layer beneath any symbol layer.
        var layers = map.getStyle().layers;

        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
          if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
            labelLayerId = layers[i].id;
            break;
          }
        }

        map.addLayer(
          //在地图样式中添加一个Mapbox样式图层。(图层，layerid)
          {
            id: "3d-buildings",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 15,
            paint: {
              "fill-extrusion-color": "#aaa",
              "fill-extrusion-height": [
                "interpolate", //使用'interpolate'表达式添加平滑的过渡效果到
                ["linear"],
                ["zoom"],
                15,
                0,
                15.05,
                ["get", "height"],
              ],
              "fill-extrusion-base": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                15.05,
                ["get", "min_height"],
              ],
              "fill-extrusion-opacity": 0.6,
            },
          },
          labelLayerId
        );

        map.on("mouseenter", "places", function (e) {
          console.log(e);

          //将光标样式更改为UI指示符。
          map.getCanvas().style.cursor = "pointer";

          var coordinates = e.features[0].geometry.coordinates.slice();
          var properties = e.features[0].properties;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          //如果地图被缩小，功能的多个副本是可见的，弹出显示在副本被指向。
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          // Populate the popup and set its coordinates
          // based on the feature found.
          //填充弹出窗口，并根据找到的特性设置其坐标。

          const p = Vue.extend(PopMeg);
          let vm = new p({
            propsData: {
              building: properties.description,
              all: properties.count,
              freeRoom: properties.empty,

              description: properties.description,
              router: tempTest,
              membertype: membertype,
            }, //传参
          }).$mount();
          // vm.$mount(); //挂载
          // this.popupHTML = vm.$el;
          // var popupHTML = '<div id="base-detail"></div>'

          // var Comp = Vue.extend(PopMeg);
          // //只用于 new 创建的实例时传递 props.
          // var vm = new Comp({// eslint-disable-line no-unused-vars

          //   propsData: {
          //     building: "a",
          //     all: 13,
          //     freeRoom: 13,
          //     description: "1212",
          //   },
          // }).$mount('#base-detail');
          // console.log(vm.$el);

          // popup.setLngLat(coordinates).setHTML(vm.$el.innerHTML).addTo(map);
          popup.setLngLat(coordinates).setDOMContent(vm.$el).addTo(map);

          // popup.style(mapboxgl-popup-content);
          // popup.style{

          // }
          //             popup.style()
          // backdrop-filter: blur(10px)
          // .mapboxgl-popup-content {
          //   background: transparent;
          // }
          //这个方法更好用，但不知道为什么出现bug了，救命救命救命sososososo
          // var popupHTML = '<div id="base-detail"></div>'
          // popup.setLngLat(coordinates).setHTML(popupHTML).addTo(map);

          // const p = Vue.extend(PopMeg);
          // let vm = new p({
          //   propsData: {
          //     building: "a",
          //     all: 13,
          //     freeRoom: 13,
          //     description: "1212",
          //     map:this,
          //   }, //传参
          // }).$mount('#base-detail');
        });

        map.on("click", "places", function () {
          map.getCanvas().style.cursor = "";
          popup.remove();
        });
      });

      // map.on("mousemove", function (e) {
      //   let features = map.queryRenderedFeatures(e.point, {
      //     layers: ["3d-buildings"],
      //   });
      //   // console.log(features)
      //   if (features.length > 0) {
      //     map.setPaintProperty(
      //       "3d-buildings",
      //       "fill-extrusion-color",
      //       "#faafee"
      //     );
      //   } else {
      //     map.setPaintProperty(
      //       "3d-buildings",
      //       "fill-extrusion-color",
      //       "#FFA54F"
      //     );
      //   }
      // });
    },
    fetchData() {
      const that = this;
      let date=this.formatTime;
      // console.log(data);
      // 2021-07-15T00:07:00.273Z
      GETPositions({dateTime:date})
        .then((data) => {
          // console.log(data);

          that.axiosdata = data;
          // console.log("that.axiosdata", that.axiosdata);
          for (var i = 0; i < data.length; i++) {
            var temp = {
              type: "Feature",
              properties: {
                description: "A楼",
                count: 13,
                empty: 1,
              },
              geometry: {
                type: "Point",
                coordinates: [121.20930082610175, 31.28776901297887],
              },
            };
            temp.properties.description = data[i].positionName;
            temp.properties.count = data[i].count;
            temp.properties.empty = data[i].empty;
            temp.geometry.coordinates = [
              parseFloat(data[i].longitude),
              parseFloat(data[i].latitude),
            ];

            that.features.push(temp);
          }

          // console.log("that.features", that.features);
        })
        .catch((err) => {
          this.data = err;
        });
    },
  },
};
</script>
 
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css");
#map {
  height: 680px;
  width: 100%;
}
.mapboxgl-popup-content {
  background: transparent;
}
</style>
