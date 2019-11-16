export default{
    path:"/detail/:showOID",
    name:"detail",
    component:_=>import("@pages/detail"),
    meta:{
        tabBarFlag:false,
        requireAuth:false
    },
   
}