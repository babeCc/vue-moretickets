import Http from "@utils/request";

export const citiesApi = () => Http({
    method: "get",
    url: "showapi/cities",
    data: {
        time: new Date().getTime(),
        src: "m_web"
    }
})

//定位城市

export const locationApi = (cityName="北京") => Http({
    method: "get",
    url: "showapi/site_city",
    data: {
        cityName:cityName,
        time: new Date().getTime(),
        src:"m_web" ,
    }
})