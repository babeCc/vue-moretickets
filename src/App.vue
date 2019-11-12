<template>
  <div id="app">
    <keep-alive>
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



</style>
