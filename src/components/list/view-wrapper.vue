<template>
  <div class="view-wrapper">
    
    <div class="list-type-nav-container"> 
      <div class="list-type-nav" active-in-view  ref="scroll">
       
        <div class="type-nav-container"  ref="type">
          <v-touch
            v-for="(item,index) in viewType"
            :key="index"
            @tap="handleTo(item.urlName,item.type)"
            class="type-nav "
            :class="n==item.type?'active':''"
           
          >
            {{item.name}}
            <div class="active-line"></div>
          </v-touch>
        </div>
      
      </div>
     
      <div class="iconfont btn-menu">&#xe664;</div>
    </div>

    <div class="filters">
      <div class="filter" ng-class="{active: filterType==1}" ng-click="toggleFilter(1)">
        近期热门
        <span class="arrow"></span>
      </div>
      <div class="filter filter-time" ng-class="{active: filterType==2}" ng-click="toggleFilter(2)">
        全部
        <span class="arrow"></span>
      </div>
    </div>
  </div>
</template>

<script>
import CCscroll from "@common/bscroll";
export default {
  components:{
      CCscroll
  },
  data() {
    return {
      n:1,
      viewType: [
        {
          type:1,
          urlName: "all",
          name: "全部"
        },
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
      curSort: [],
      activeIndex:0,
    };
  },
  created(){
    
  },
  activated(){
    this.n = this.$store.state.type;
  },
   methods: {
        handleToggle(index){
            this.activeIndex = index;
        },
        handleTo(name,type){
         
            this.$router.push('/list/viewType/'+name+'/'+type)
            this.n = type;
        }
        
   }
};
</script>

<style lang="scss" >

.view-wrapper {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  .list-type-nav-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    overflow: visible;
    background: #fff;
    .list-type-nav {
      box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: block;
      overflow-x: auto;
      overflow-y: hidden;
      line-height: 0.5rem;
      .type-nav-container {
        min-width: 100%;
        display: -ms-flexbox;
        display: flex;
        height: 0.5rem;
        .type-nav {
          padding-left: 0.18rem;
          height: 100%;
          text-align: center;
          color: #95949d;
          font-size: 15px;
          white-space: nowrap;
        }
        .type-nav.active {
    color: #323038;
    font-size: 24px;
    font-weight: 700;
}
      }
    }
    .btn-menu {
      position: absolute;
      right: 0;
      top: 0.117rem;
      width: 0.367rem;
      height: 0.242rem;
      background-color: #fff;
    }
  }

  .filters {
    background: #fff;
    width: 100%;
    height: 0.5rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    overflow: visible;
    padding: 0 0.18rem;
    .filter {
      height: 33px;
      line-height: 33px;
      text-align: center;
      font-size: 13px;
      position: relative;
      margin-right: 0.1rem;
      border-radius: 4px;
      padding: 0 15px;
      .arrow {
        border-top: 4px solid #333;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        position: relative;
        left: 7px;
        display: inline-block;
        top: -3px;
      }
    }
  }
}
</style>