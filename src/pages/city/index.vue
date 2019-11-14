<template>
  <div class="city">
    <router-link class="city_head" tag="div" to="/">
      <img src="../../../public/img/back.jpg" alt />
      选择城市
    </router-link>
    <div class="city_slider">
        <v-touch
          tag="div"
          @tap="handleTo(index)"
          v-for="(item,index) in allCities"
          :key="index"
          class="city_spelling"
        >{{item.title}}</v-touch>
      </div>
    <CC-Scroll ref="scroll">
        <div class="city_body" ref="cityBody">
      <!--下标-->
     
      <div class="city_type_title" id="type1">定位城市</div>
      <v-touch tag="div" @tap="handleLocation()" class="city_item">{{location}}</v-touch>
      <div class="city_type_title" id="type2">最近访问城市</div>
      <div class="city_wrap">
        <v-touch tag="div" @tap="handleChange(item.cityID,item.cityName)"  v-for="(item,index) in historyCities" :key="index" class="city_item">{{item.cityName}}</v-touch>
      
      </div>
      <div class="city_type_title" id="type3">热门城市</div>
      <div class="city_wrap">
        <v-touch tag="div" @tap="handleChange(item.cityOID,item.cityName)" v-for="(item,index) in hotCities" :key="index" class="city_item">{{item.cityName}}</v-touch>
      </div>
      <!--城市列表下标-->
      <div class="all_city" v-for="(item,index) in allCities" :key="index" >
        <div class="city_type_title" :id="item.title" ref="cityList">{{item.title}}</div>

        <div class="allcity_wrap">
          <v-touch
            v-for="(item,index) in item.cities"
            class="allcity_item"
            :key="index"
            @tap="handleChange(item.cityOID,item.cityName)"
          >{{item.cityName}}</v-touch>
        </div>
      </div>
    </div>
    </CC-Scroll>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      hotCities: state => state.city.hotCities,
      allCities: state => state.city.allCities,
      location: state => state.city.location.cityName,
      historyCities:state =>state.city.historyCities
    })
  },
  name: "city",
  created() {
   
    if (
      !(
        sessionStorage.getItem("hotCities") &&
        sessionStorage.getItem("allCities")
      )
    ) {
      this.$store.dispatch("city/handleGetCityList");
    }
  },
  methods: {
    handleLocation(){
      this.$router.back();
    },
    handleTo(index) {
     let t= this.$refs.cityList[index].offsetTop;
       this.$refs.scroll.handleScrollTo(-t)   
    },
    handleChange(cityID,cityName){
        this.$router.back();
        this.$store.commit("city/handleChangeCity",{cityID:cityID,cityName:cityName})
        
    }
  }
};
</script>
<style lang="scss" scoped>
.scroll_container{
     padding-top: 0.5rem;
  padding-left: 0.15rem;
  padding-right: 0.4rem;
  flex: 1;
  position: relative;
  background-color: #f2f2f2;
  height:6.67rem;
}
.city_spelling {
  padding: 0.04rem;
  font-size: 0.12rem;
}
.city_slider {
  position: fixed;
  right: 0.1rem;
  top: 0.5rem;
  z-index: 10;
}
* {
  box-sizing: border-box;
  font-family: PingFang SC, Helvetica, Arial, 微软雅黑;
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.city {
  display: flex;
  flex-direction: column;
}
.city_head {
  text-align: center;
  line-height: 0.5rem;
  border-bottom: 1px solid #eaeaeb;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.city_head img {
  position: absolute;
  top: 0;
  left: 0;
}

body {
  background-color: #f2f2f2;
}

.city_type_title {
  margin-bottom: 12px;
  margin-top: 15px;
  font-size: 14px;
  letter-spacing: -0.2px;
  color: #aaa;
}
.city_item {
  width: 30%;
  max-height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  margin-bottom: 15px;
  margin-right: 5%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.city_wrap {
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: left;
  justify-content: left;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}
.city_item:nth-child(3n) {
  margin-right: 0;
}
.allcity_wrap {
  margin: 0 -0.4rem 0 -0.15rem;
  padding: 0 0.4rem 0 0.15rem;
  background: #fff;
}
.allcity_item {
  line-height: 0.45rem;
  height: 0.45rem;
  background-color: #fff;
  font-size: 0.16rem;
  padding-left: 0.1rem;
  color: #494949;
  border-bottom: 0.5px solid #e4e4e4;
}
</style>