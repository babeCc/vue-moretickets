import http from "@utils/request";

export const searchApi = () => http({
    method: "get",
    url: "userdataapi/keywords",
    data: {
        cityId: 1101,
        time: 1573637797688,
        src: "m_web"
    }
})



