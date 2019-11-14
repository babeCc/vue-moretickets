<template>
  <div class="shouye">
    <header class="header">
      <div class="search-box">
        <router-link to="/city" tag="div" class="location">{{location}}</router-link>
        <div class="search"></div>
        <input type="text" name class="search-input" value="暗恋桃花源" />
      </div>
    </header>
    <CC-Scroll ref="scroll">
      <div class="section">
        <div class="slider-container">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"> <img src="https://img0.tking.cn/assets/img/yjiwyEK3Df_.jpg" alt /></div>
              <div class="swiper-slide"><img src="https://img1.tking.cn/assets/img/jcbKZaeBZP_.jpg" alt=""></div>
              <div class="swiper-slide"><img src="https://img2.tking.cn/assets/img/w4Nd2hph6x_.jpg" alt=""></div>
            </div>

            <div class="swiper-pagination"></div>
          </div>
         <!-- '/list/viewType/'+item.urlName+'/'+item.type -->
        </div>
        <div class="list">
          <ul>
            <v-touch v-for="(item,index) in list" :key="index" @tap="handleToList(item.type)" tag="li">
              <div :style="'backgroundImage:url(./img/list'+Number(index+1)+'.png)'"></div>
              <p>{{item.name}}</p>
            </v-touch>
         
          </ul>
        </div>
        <div class="banner">
          <img src="https://img2.tking.cn/assets/img/Z7Neiyfmki_.gif" style="width:100%" alt />
        </div>
        <div class="guarantee">
          <ul>
            <li>服务保障</li>
            <li>票品保真</li>
            <li>假一赔三</li>
            <li>无票赔付</li>
          </ul>
        </div>
        <div class="floor-container">
          <div class="floor">
            <div class="floor-title">近期热门</div>
            <div class="floor-more">全部</div>
          </div>
          <div class="floor-content">
            <div class="column-1">
              <img src="https://img1.tking.cn/assets/img/n8JEQMnyhi_.jpg" style="width:1.86rem" alt />
              <div class="show-text">
                <p class="show-title">绝色莫文蔚巡回演唱会2019巅峰之旅</p>
                <p class="show-time">11.24 18:30</p>
              </div>
            </div>
            <div class="column-2">
              <img src="https://img2.tking.cn/assets/img/fQE3P3AQc4_.jpg" style="width:0.96rem" alt />
              <div class="show-content">
                <p class="show-title">绝色莫文蔚巡回演唱会2019巅峰之旅</p>
                <p class="show-time">11.24 18:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CC-Scroll>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Shouye",
  created() {
    if (!sessionStorage.getItem("cityName")) {
      sessionStorage.setItem(
        "cityName",
        JSON.stringify({ cityID: "1101", cityName: "北京" })
      );
    }
  },
  mounted() {
    this.$refs.scroll.handleScroll();
     var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:true,
    delay:3000,
    pagination: {
      el: '.swiper-pagination',
    }})
  },
  computed: {
    ...mapState({
      location: state => state.city.location.cityName
    })
  },
  data() {
    return {
      list: [
      
        {
          type:2,
          urlName: "concerts",
          name: "演唱会"
        },
        {
          type:3,
          urlName: "dramas",
          name: "话剧歌剧"
        },
        {
          type:4,
          urlName: "sports",
          name: "体育赛事"
        },
        {
          type:5,
          urlName: "musicale",
          name: "音乐会"
        },
        {
          type:6,
          urlName: "exhibits",
          name: "展览休闲"
        },
        {
          type:7,
          urlName: "dance",
          name: "舞蹈芭蕾"
        },
        {
          type:8,
          urlName: "children",
          name: "儿童亲子"
        },
        {
          type:9,
          urlName: "opera",
          name: "曲艺杂谈"
        }
      ],
       
      
    };
  },
  methods:{
    
  }
};


</script>
<style lang="scss">
// .base{
//    background: rgb(180, 53, 61);
//    height:1rem;
//    width:100%;
//    position:absolute;
//    top:0;
//    z-index: 0;
// }
.swiper-wrapper{
   margin:0 auto
}
.slider-container {
    padding-left:.1rem
   
}  
.shouye {
  left: 0;
  padding-bottom: 0.5rem;
  bottom: 0;
  top: 0;
  position: fixed;
  left: 0;
  right: 0;
  padding-top: 0.44rem;
}

.footer {
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  border-top: 1px solid #e4e4e4;

  background-color: #fff;
}

.header {
  height: 0.44rem;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  display: flex;
  background: rgb(180, 53, 61);
  z-index: 1000;
  align-items: center;
}

.header .search-box {
  height: 0.32rem;
  border-radius: 0.16rem;
  display: flex;
  background: #faf4f4;
  width: 3.31rem;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 0.22rem;
  padding-left: 0.11rem;
  margin: 0 auto;
  position: relative;
  z-index: 5;

  align-items: center;
}

.header .search-box .location {
  font-weight: 700;
  padding-left: 0.22rem;
  display: block;
  background-size: 0.22rem 0.22rem;
  padding-right: 0.1 rem;
  white-space: nowrap;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  height: 0.22rem;
  background: url("../../../public/img/location.png") no-repeat;
  position: relative;
}

.header .search-box .search-input {
  margin-left: 0.13rem;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 700;
  border: none;
  display: block;
  height: 100%;
  width: 90%;
  font-size: 15px;
  box-sizing: border-box;
  background: transparent;
}

.search {
  margin-top: 0.05rem;
  background: url("../../../public/img/search.png") no-repeat;
  height: 0.22rem;
  width: 0.3rem;
  margin-left: 0.1rem;
}

/*body*/
.section {
  width: 100%;
  overflow: auto;
}

.section .slider-container {
  width: 3.2rem;
  height: 1.6rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgb(180, 53, 61);
}
.section .slider-container img {
  width: 3rem;
  height: 1.4rem;
}

.section ul {
  width: 3rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.section ul li {
  width: 25%;
  height: 0.74rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #000000;
  font-size: 12px;
}

.section ul li div {
  
  background-repeat: no-repeat;
  height: 0.4rem;
  width: 0.4rem;
  background-size: 0.4rem 0.4rem;
}


.section .banner {
  padding-top: 0.18rem;
  width: 3.2rem;
}

.guarantee {
  padding-top: 0.18rem;
}

.section .guarantee ul {
  height: 0.4rem;
  box-sizing: border-box;
  background: #f8f8f8;
  align-items: center;

  width: 100%;
}

.section .guarantee ul li {
  font-size: 12px;
  height: 0.4rem;
  color: #807e8c;
}

.section .floor-container {
  box-sizing: border-box;
  width: 3.2rem;
  padding: 0 0.1rem;
  padding-top: 0.4rem;
}

.section .floor {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.section .floor .floor-title {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  line-height: 0.28rem;
}

.section .floor .floor-more {
  font-size: 14px;
}

.footer ul {
  display: flex;
  height: 0.5rem;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

.column-1 {
  padding-top: 0.16rem;
  position: relative;
  float: left;
  height: 1.7rem;
  width: 1.86rem;
}

.show-text {
  color: #fff !important;
  box-sizing: border-box;
  padding-left: 6%;
  position: absolute;
  bottom: -0.17rem;
  left: 0;
  padding-bottom: 0.08rem;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
}

.column-1 .show-title {
  padding-top: 0.08rem;

  font-weight: 700;
  font-size: 13px;
  line-height: 0.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.show-time {
  font-size: 12px;
  padding: 0.02rem 0;
}

.column-2 {
  overflow: hidden;
  padding-top: 0.16rem;
  float: left;
  width: 1rem;
  margin-left: 0.1rem;
}

.show-content .show-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 13px;

  padding-top: 0.08rem;
  color: #323038;
  font-weight: 700;
  font-size: 13px;
  line-height: 0.2rem;
}
.show-content .show-time {
  color: #95949d;
  font-size: 12px;
  padding: 0.02rem 0;
}
</style>