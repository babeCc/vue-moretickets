<template>
  <div class="page">
    <HeaderSearch/>
    
    <div id="content">
      <ViewWrapper/>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>  
  </div>
</template>

<script>
import HeaderSearch from "@components/list/header-search";
import ViewWrapper from "@components/list/view-wrapper";
export default {
  name: "Movie",
  components:{
    HeaderSearch,
    ViewWrapper
  }
};
</script>

<style lang="scss">
#content {
  position: absolute;
  // left: 0;
  // right: 0;
  // top:0;
  // bottom: 0;
  width:100%;
  // height:100%;
  // padding-top: .44rem;
  padding-bottom: .5rem;
}
</style>