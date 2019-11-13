import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import VueTouch from "vue-touch";
<<<<<<< HEAD
=======
import "@common/components";
import "@common/filter";
>>>>>>> f5103965017d8d6a505d021fa7a21cd692d376d4
=======
import Components from "@common";
>>>>>>> babeCc
Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false
 
new Vue({
  router,
  store,
  Components,
  render: h => h(App)
}).$mount('#app')
