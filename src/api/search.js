import http from "@utils/request";

export const searchApi = (keyword,locationCityOID) => http({
    method: "get",
    url: "showapi/page/index",
    data: {
        offset: 0,
        length: 10,
        keyword:keyword,
        locationCityOID: locationCityOID,
        time: new Date().getTime(),     
        src: "m_web"
    }
})



