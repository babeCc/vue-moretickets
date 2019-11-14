import http from "@utils/request";


export const listAllApi = (cityID,viewType)=>http({
    method:"get",
    url:'/showapi/pub/site/'+cityID+'/active_show',
    data:{
        offset: 0,
        length: 20,
        type: viewType,
        sorting: "weight",
        seq: "desc",
        client: "piaodashi_weixin",
        locationCityOID: cityID,
        siteCityOID: cityID,
        lat: 0,
        lng: 0,
        time: 1573612096538,
        src: "m_web"
    }
})



