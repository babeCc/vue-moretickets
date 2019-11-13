import Vue from "vue";
import betterScroll from "./bscroll";

let componentMap =[
    betterScroll
]
componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})