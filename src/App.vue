<template>
  <div id="app">
    <keep-alive >
         <router-view></router-view>
    </keep-alive>
     <TabBar v-if="this.$route.meta.tabBarFlag" />
  </div>
</template>

<script>
  import TabBar from "@common/tabBar";
  
    export default{
      name:"App",
      components:{
        TabBar,
      }
    }
</script>
<style lang="scss">
.page{
  position: absolute;
  left:0;
  top:0;
  right: 0;
  bottom: 0;
  padding-bottom: 1rem;
}
 
</style>
