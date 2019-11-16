import Vue from 'vue'
import Vuex from 'vuex'
import city from "./city";
Vue.use(Vuex)

let state ={
    type:1,
    detailPath:""
}

let actions ={

}

let mutations = {
    handleChangeType(state,type){
      state.type = type;
    },
    //详情页返回列表页时
    // handleListen(state,path){
      
    //     state.detailPath = path;

    // }
    handleType(state,type){
      state.type = type;
    }

}


export default new Vuex.Store({
  modules:{
    city
  },
  state,
  actions,
  mutations,
  
})
