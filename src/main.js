import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import mapBoxGl from 'mapbox-gl'



import htmlToPdf from '@/plugins/htmlToPdf'
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)

Vue.prototype.$mapboxgl = mapBoxGl

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // memberType:Boolean,
}).$mount('#app')
