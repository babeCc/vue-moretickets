export default{
    path:"/mine",
    component:_=>import("@pages/mine"),
    name:"mine",
    meta:{
        tabBarFlag:true,
        requireAuth:true
    },
    
}