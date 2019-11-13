export default{
    path:"/detail",
    name:"detail",
    component:_=>import("@pages/detail"),
    meta:{
        tabBarFlag:false,
        requireAuth:false
    }
}