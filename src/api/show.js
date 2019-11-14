import http from "@utils/request";

export const detailApi = (showoID)=>http({
    method:"get",
    url:"showapi/pub/show/"+showoID,
    data:{
        lat: 40.11623,
        lng: 116.25086,
        time: 1573109222151,
        src: "m_web"
    }

})


//详情页接口

