<template>
  <div id="app">
    <keep-alive>
<<<<<<< HEAD
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
=======
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from "@common/components/tabBar";
export default {
  name: "App",
  components: {
    TabBar
  }
};
</script>
>>>>>>> f5103965017d8d6a505d021fa7a21cd692d376d4

<style lang="scss">

 

</style>
