<template>
  <div>
    <HeaderSearch />
    <ShowSearch />
  </div>
</template>

<script>
import HeaderSearch from "@components/search/header-search";
import ShowSearch from "@components/search/show-search";
import {searchApi} from "@api/search";
import {throttle} from "@utils/throttle";
export default {
  name: "Search",
  data() {
    return {
      fromPath: ""
    };
  },
  created() {},
    components: {
    HeaderSearch,
    ShowSearch
  },
  //出现穿透问题 $router.back(),改为在vuex中记录from.path,
  beforeRouteEnter(to, from, next) {
    
    next(vm => {
      vm.$store.commit("handleSearch", from.path);
    });
  },

  //watch监听模糊查询

  watch:{
     
  }
};
</script>

<style lang="scss" >
</style>