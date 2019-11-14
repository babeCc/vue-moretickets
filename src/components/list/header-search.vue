<template>
    <div class="header-search">
        <div class="site-dropdown">
            <i class="iconfont">&#xe622;</i>
                
            <router-link tag="div" class="cur-site" to="/city">{{location}}</router-link> 
        </div>

        <router-link to="/search" class="input-wrapper">
            <div class="search-input">
                <i class="iconfont">&#xe61d;</i>
                <form action="javascript:return true">
                    <input type="search" class="search-box-input" placeholder="搜索明星、演出、赛事、场馆">
                </form>
            </div>
        </router-link>
        <div class="place-holder"></div>
    </div>

</template>

<script>
import {mapState}  from "vuex";
export default {
  name: "HeaderSearch"
  ,computed:{
      ...mapState({
          location:state=>state.city.location.cityName
      })
  }
};
</script>

<style lang="scss">

.header-search {
    width: 100%;
    background: #fff;
    height: .44rem;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    .site-dropdown {
        font-size: 15px;
        font-weight: 700;
        height: 100%;
        color: #323038;
        padding-left: .18rem;
        padding-right: .125rem;
        display: flex;
            i{
                line-height: .44rem;
                color:red;
            }
            .cur-site {
            line-height: .44rem;
            
            font-size: 15px;
            font-weight: 700;
        }
    } 
    .input-wrapper {
        width: 100%;
        -ms-flex: 1;
        flex: 1;
        .search-input{
            z-index: 100;
            height: .275rem;
            line-height: .275rem;
            color: #fff;
            border-radius: .14rem;
            background-color: #f4f4f5;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            width: 100%;
            i{
                color: #333;
                font-size: 13px;
                padding-left: .15rem;
            }
            .search-box-input {
                z-index: 1000;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: .275rem;
                border: none;
                color: #333;
                background: 0 0;
                padding: 5px;
                padding-left: .3rem;
                font-size: 13px;
            }
        }
    }
    .place-holder{
        width: .18rem;
    }
}

   

</style>
