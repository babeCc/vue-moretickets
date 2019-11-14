
import { citiesApi } from "@api/city";
let state = {
    hotCities: JSON.parse(sessionStorage.getItem("hotCities")) || [],
    allCities: JSON.parse(sessionStorage.getItem("allCities")) || [],
    location: JSON.parse(sessionStorage.getItem("cityName")) || {cityID:"1101",cityName:"北京"},
    historyCities:JSON.parse(sessionStorage.getItem("historyCities")) || [{cityID:"1101",cityName:"北京"}]
}

let actions = {
    async handleGetCityList({ commit }) {
        let data = await citiesApi();
        commit("handleGetCityListMutations", data)

    }
}

let mutations = {
    handleChangeCity(state, city) {

        state.location = city;
//历史访问
        var _has = false;
        for (var i = 0; i < state.historyCities.length; i++) {
            if (state.historyCities[i].cityName == state.location.cityName) {
                _has = true;
                break;
            }
        }
        if (!_has) {
            if(state.historyCities.length<=8){
                state.historyCities.push(state.location)
            }else{
                state.historyCities.shift()
                
                state.historyCities.push(state.location)
            }
            
        }
//
        sessionStorage.setItem("historyCities", JSON.stringify(state.historyCities))
        sessionStorage.setItem("cityName", JSON.stringify(state.location));

    },
    handleGetCityListMutations(state, data) {
        state.hotCities = data.result.hotCities;
        state.allCities = data.result.allCities;

        sessionStorage.setItem("hotCities", JSON.stringify(state.hotCities))
        sessionStorage.setItem("allCities", JSON.stringify(state.allCities))

    }
}
let getters = {

}

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
}