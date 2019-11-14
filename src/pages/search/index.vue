<template>
  <div>
    <HeaderSearch />
    <ShowSearch />
  </div>
</template>

<script>
import HeaderSearch from "@components/search/header-search";
import ShowSearch from "@components/search/show-search";
export default {
  name: "Search",
  components: {
    HeaderSearch,
    ShowSearch
  }
};
</script>

<style lang="scss" >
</style>