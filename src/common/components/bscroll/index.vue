<template>
  <div class="scroll_container">
    <div class="scroll_loading" v-if="flag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Alley-scroll",
  data(){
      return {
          flag:false,
          pullingDownFlag:false
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 1,
      pullDownRefresh:true
    });
  },
  methods: {
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 30 && this.pullingDownFlag) {
            this.flag = true
        }
      });
    },
    //下拉刷新获取数据
    handlepullingDown(callback){
        this.scroll.on("pullingDown",()=>{
            this.pullingDownFlag = true;
           callback()
        })
    },
    //当数据请求成功后需要执行的方法
    handleRefreshDown(){
        //重新计算better-scroll;
        this.scroll.refresh();
        //防止用户多次频繁下拉刷新做的防抖
        this.scroll.finishPullDown();
        setTimeout(()=>{
            this.flag = false;
        },1500)
    }
  }
};
</script>

<style>
.wrapper,
.scroll_container {
  height: 100%;
}
.scroll_loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: .5rem;
}

.scroll_loading i{
    font-size: .4rem;
}
</style>