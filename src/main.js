import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@common/components";
import "@common/filter";
Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
