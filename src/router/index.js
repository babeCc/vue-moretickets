import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from "./shouye";
import mine from "./mine";
<<<<<<< HEAD
import detail from "./detail";
import selectCity from "./city";
=======
import list from "./list"
import search from "./search"
>>>>>>> e235ef3c424d136517da4720bad92fb846b9505b
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/shouye",
      
      meta:{
        taBarFlag:true
      }

    },
    shouye,
    list,
    mine,
    search,
    {
      name:"login",
      path:"/login",
      meta:{
        tabBarFlag:false,
        requireAuth:false,
      },
      component:_=>import("@pages/login"),
    },
    detail,
    selectCity
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.path !="/login" && to.meta.requireAuth){
    if(localStorage.getItem("token")){
      next();
    }else{
      next({name:"login",params:{to:to.path}});
    }
  }else{
    next();
  }
})
export default router;
