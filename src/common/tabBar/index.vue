<template>
     <footer class="footer">
        <ul>
            
            <router-link
                tag="li"
                v-for="item in tabBars"
                :key="item.id"
                :to="item.path"
               
            >
            <span class="iconfont" v-html="item.icon"></span>
            <p>{{item.text}}</p>
            </router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    name:"TabBar",
    methods:{
        handleClick(){
           
        }
    },
    data(){
        return{
           
            tabBars:[
                {
                    id:0,
                    text:"精选",
                    icon:"&#xe64c;",
                    path:"/shouye"
                },
                 {
                    id:1,
                    text:"演出",
                    icon:"&#xe8c0;",
                    path:"/list"
                },
                 {
                    id:2,
                    text:"我的",
                    icon:"&#xe686;",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>
<style lang="scss">
      .footer {
            height: .5rem;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;

            border-top: 1px solid #e4e4e4;

            background-color: #fff;

        }
        .footer ul {
            display: flex;
            height: .5rem;
            align-items: center;
            justify-content: space-around;
            text-align: center;

        }
        .footer ul .router-link-active{
            color: #ff1d41;
        }
</style>