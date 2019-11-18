import axios from "axios";
import loading from "@lib/loading/index.js";
const server = axios.create({
    timeout:5000,
    // baseURL:
    withCredentials:true
})
server.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }
//模糊查询不需要loading
    if(!config.data.keyword){
        loading.loadingMount();
    }
    
    return config;
    // config.headers["content-type"] = "application/json";
},(err)=>{
    return Promise.reject(err);
})

server.interceptors.response.use((res)=>{
    if(res.status == 200 ){

        loading.destoryLoading();
      
        return res.data;
    }
})

export default server;