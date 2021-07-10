import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import mapBoxGl from 'mapbox-gl'

Vue.prototype.$mapboxgl = mapBoxGl

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // memberType:Boolean,
}).$mount('#app')
