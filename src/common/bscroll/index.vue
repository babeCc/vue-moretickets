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
import BScroll from 'better-scroll';
export default {
    name:"CC-Scroll",
    
    created(){
       
    },
    data(){
        return{
            flag:false
        }
    },
    mounted(){

      this.scroll =  new BScroll(this.$refs.wrapper,{
            probeType:1,
            pullDownRefresh:{
                 threshold: 30,
                stop: 0
            }
        })
    },
    methods:{
        handleScrollTo(y){
            this.scroll.scrollTo(0,y,300);
        },
        handleScroll(){
         
            this.scroll.on("scroll",(pro)=>{
                if(pro.y>30){
                  this.flag=true,
                  this.scroll.finishPullDown();
                 console.log(1);
                setTimeout(()=>{this.flag=false},3000)  
                }
            })
        }
    }
}
</script>
<style lang="scss">
.scroll_container{
     height:100%;
}
    .wrapper{
    height:100%;
}
.scroll_loading{
    display:flex;
    width:100%;
    justify-content: center;
    align-items:center;
    height: .3rem;
}
</style>
