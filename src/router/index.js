import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from "./shouye";
import mine from "./mine";
import detail from "./detail";

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
    mine,
    {
      name:"login",
      path:"/login",
      meta:{
        tabBarFlag:false,
        requireAuth:false,
      },
      component:_=>import("@pages/login"),
    },
    detail
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
