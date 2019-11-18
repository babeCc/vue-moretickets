<template>
  <div class="searchPage">
    <div class="search-container" v-show="!watcher">
      <div class="section-name">
        历史搜索
        <i class="iconfont clear">&#xe607;</i>
      </div>
      <div class="section-content">
        <div class="keyword-tag"></div>
        <p>没有历史记录</p>
      </div>
      <div class="section-name">热门搜索</div>
      <div class="section-content">
        <div class="keyword-tag"></div>
      </div>
    </div>
    <div class="content-container" v-show="watcher">
      <router-link class="list" v-for="(item,index) in listData" :key="index"  :to="'detail/'+item.showOID" tag="div">
        <div class="showName">{{item.showName}}</div>
        <div class="showCity">{{item.venueName}}</div>
        <div
          class="showTime"
        >{{item.firstShowTime==item.lastShowTime?item.firstShowTime:item.firstShowTime+"-"+item.lastShowTime}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { searchApi } from "@api/search";
import { throttle } from "@utils/throttle";
export default {
  data() {
    return {
      listData: [],
      word: "",
      watcher: false,
      historySearch:[]
    };
  },
  created() {
    this.$observer.$on("handleSendWord", params => {
      this.word = params;
    });
  },
  methods: {},
  watch: {
    word(newVal) {
      if(newVal.length){
            this.watcher = true;
           throttle(async () => {
            let cityID = this.$store.state.city.location.cityID;
            // this.$store.search.commit("handleSaveSea  ")
            let data = await searchApi(newVal, cityID);
            this.listData = data.result.data ? data.result.data : [];
          }, 600);
      
      }else{
           this.listData = [];
            this.watcher = false;
      }
    }
  }
};
</script>

<style lang="scss" scroped>

.searchPage {
  padding-top:.5rem;
  
}
.list {
  font-size: 0.01rem;
  width: 100%;
  padding: 0.12rem 0.1rem;
  overflow: hidden;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
  .showName {
    line-height: 0.2rem;
    color: #000;
    margin-bottom: 0.1rem;
  }
  .showCity {
    float: left;
    width: 50%;
  }
  .showTime {
    float: right;
  }
}
* {
  box-sizing: border-box;
}
.section-name {
  height: 0.58rem;
  color: #000;
  line-height: 0.58rem;
  padding-left: 0.18rem;
  background-color: #fff;
  font-size: 0.16rem;
  font-weight: 700;
  .clear {
    float: right;
    width: 0.22rem;
    height: 0.22rem;
    text-align: center;
    margin-top: 0.18rem;
    margin-right: 0.18rem;
  }
}
.section-content {
  background-color: #fff;
  overflow: hidden;
  padding-bottom: 0.1rem;
  padding-left: 0.18rem;
  p {
    padding: 0.1rem;
    padding-bottom: 0;
    padding-left: 0rem;
  }
}
</style>