<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>

 
</template>
<script>
import scrollY from 'better-scroll';
export default {
    name:"bscrollX",
    
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
           
            scrollX:true,
           
        })
    },
    methods:{
        handleScrollTo(x){
            this.scroll.scrollTo(x,0,300);
        },
        
    }
}
</script>
<style lang="scss">

    .wrapper{
    height:100%;
    width:100%;
  
}

</style>