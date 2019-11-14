<template>
  <div>
    <div class="section-name">
      历史搜索
      <i class="iconfont clear">&#xe607;</i>
    </div>
    <div class="section-content">
      <div class="keyword-tag"></div>
      <p>没有历史记录!</p>
    </div>
    <div class="section-name">热门搜索</div>
    <div class="section-content">
      <div class="keyword-tag">i</div>
    </div>
  </div>
</template>

<script>
import { searchApi } from "@api/search";
export default {
    data() {
    return { 
      listData: []
    };
  },
  async created() {
    let data = await searchApi();
    // this.listData = data.result.data;
  },
  
};
</script>

<style lang="scss">
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