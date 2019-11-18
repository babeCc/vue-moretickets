<template>
<div class="search-row">
<div class="header-search">
        <div class="input-wrapper">
            <div class="search-input">
                <i class="iconfont">&#xe61d;</i>
                <form action="javascript:return true">
                    <input type="search" class="search-box-input" placeholder="泰坦尼克号" v-model="word" @input="handleSend()">
                </form>
            </div>
        </div>
        <router-link to="/shouye" tag="div" class="search-option" >
            取消
        </router-link>
    </div>
</div>
    

</template>

<script>
export default {
  name: "HeaderSearch",
  methods:{  
    
  },
   data(){
       return {
           word:""
       }
   },
   created(){
       
       
   },
   methods:{
       handleSend(){
          
           this.$observer.$emit("handleSendWord",this.word);
       }
   }
 
};
</script>

<style lang="scss">
.search-row {
    width: 100%;
    padding: .05rem 0 .05rem .18rem;
    font-size: .13rem;
    overflow: hidden;
    background-color: #fff;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #ccc;
    min-height: .5rem;
    position:fixed;
    top:0;
    left:0;
    right:0;
    background:#fff;
  z-index:200;
   .header-search {
    width: 100%;
    background: #fff;
    height: .44rem;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
     
    .input-wrapper {
        width: 100%;
        -ms-flex: 1;
        flex: 1;
        .search-input{
            z-index: 100;
    height: .275rem;
    line-height: .275rem;
    color: #fff;
    border-radius: .14rem;
    background-color: #f4f4f5;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    width: 100%;
            i{
                color: #333;
                font-size: 13px;
                padding-left: .15rem;
            }
            form{
                .search-box-input {
                z-index: 1000;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: .275rem;
                border: none;
                color: #333;
                background: 0 0;
                padding: 5px;
                padding-left: .3rem;
                font-size: 13px;
            }
            }
            
        }
    }
} 
.search-option {
    font-size: .16rem;
    font-weight: 700;
    color: #777;
    text-align: center;
    width: .68rem;
    color: #000;
}
}


   

</style>
