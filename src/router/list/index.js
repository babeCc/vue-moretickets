export default {
    path:"/list",
    component:_=>import("@pages/list"),
    name:"list",
    meta:{
        tabBarFlag:true
    },
    children:[
        {
            path:"/list",
            redirect:"/list/viewType/all/1/"
        },
        {
            path:"viewType/:urlName/:type",
            component:_=>import("@components/list/1101-all"),
            name:"all",
            meta:{
                tabBarFlag:true
            }, 
        
        }
    ]
}