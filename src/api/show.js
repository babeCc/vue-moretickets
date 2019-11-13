import http from "@utils/request";

export const detailApi = ()=>http({
    method:"get",
    url:"showapi/pub/show/5d78b3a9c756b133617b9b53",
    data:{
        lat: 40.11623,
        lng: 116.25086,
        time: 1573109222151,
        src: "m_web"
    }
})
