import Vue from 'vue'
import Vuex from 'vuex'
import city from "./city";
import search from "./search";
Vue.use(Vuex)

let state ={
    type:1,
    detailPath:"",
   
  
}

let actions ={

}

let mutations = {
    handleChangeType(state,type){
      state.type = type;
    },
   
    handleType(state,type){
      state.type = type;
    },
    //记录search页form.path
    handleSearch(state,path){
      state.searchPath = path;
    },
    //记录detail页from.path
    handleSaveFromDetailPath(state,path){
          state.detailFromPath = path;
    }

}


export default new Vuex.Store({
  modules:{
    city,
    search
  },
  state,
  actions,
  mutations,
  
})
