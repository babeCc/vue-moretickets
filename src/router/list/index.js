export default {
    path:"/list",
    component:_=>import("@pages/list"),
    name:"list",
    meta:{
        flag:true
    },
    children:[
        {
            // path:"/list",
            // redirect:"/list/movienow"
        },
       
    ]
}