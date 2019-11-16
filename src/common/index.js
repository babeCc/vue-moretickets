import Vue from "vue";
import betterScroll from "./bscroll";
import betterScrollX from "./bscrollX";
let componentMap =[
    betterScroll,
    betterScrollX
]
componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})