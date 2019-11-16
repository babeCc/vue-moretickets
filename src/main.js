import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from "vue-touch";





import Components from "@common";
// >>>>>>> babeCc
// =======
import "@common/components";
import "@common/filter";
// >>>>>>> e235ef3c424d136517da4720bad92fb846b9505b

Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false
 
new Vue({
  router,
  store,
  Components,
  render: h => h(App)
}).$mount('#app')
