import Vue from 'vue'
import VueRouter from 'vue-router'
import list from "./list"

Vue.use(VueRouter)

const routes = [
   
]

const router = new VueRouter({
  mode:"hash",
  routes:[
    list
  ]
})

export default router
