<template>
    <div class="detail">
        <div class="detail-head">
            <v-touch
             class="head-back"
             tag="div"
             @tap="handleToList()"
             ><img src="../../../public/img/back.jpg" alt=""></v-touch>
            <div class="head-title">
                演出详情
            </div>
            <v-touch
             class="head-home"
            tag="div"
            @tap="handleToHome()"
            ><img src="../../../public/img/home.jpg" alt=""></v-touch>
        </div>
        <CC-Scroll>
        <div class="detail-content">
            <div class="content-head">
                <div class="head-bg">
                    <div class="img-holder"
                        :style="'backgroundImage:url('+detail.posterURL+')'">
                    </div>
                </div>
                <div class="head-show">
                    <div class="show-img"
                        :style="'backgroundImage:url('+detail.posterURL+')'"></div>
                    <div class="show-info">
                        <div class="show-name">{{detail.showName}}</div>
                        <div class="price">
                            <span class="number">{{detail.minPrice}}</span>
                            <span class="text">元起</span>
                        </div>
                        <div class="discount">
                            <div class="number">
                                {{detail.discount*10}}
                            </div>
                            <div class="txt">折起</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="content-container">
                <div class="content-row content-info" id="info">
                    <div class="info-row time">
                        <div class="time-img">
                            <img src="../../../public/img/time.png" alt="">
                        </div>

                        <div class="time-txt">{{detail.latestShowTime}}</div>

                    </div>
                    <div class="info-row location">
                        <div class="location-img">
                            <img src="../../../public/img/locationd.png" alt="">
                        </div>
                        <div class="venue">
                            <div class="name" >{{detail.venueName}}</div>
                            <div class="info-detail">{{detail.venueAddress}}</div>
                        </div>

                    </div>
                    <div class="info-row desc">
                        <div class="desc-img" style="padding: top 2px;">

                            <img src="../../../public/img/desc.png" alt="">
                        </div>
                        观演须知
                    </div>
                    <div class="content-row content-server" style="padding-bottom: 0rem;padding-top: .125rem">
                        <div class="text">
                            <div class="title">摩天轮服务保障</div>
                            <div class="desc">
                                <div class="item">票品保真</div>
                                <div class="item">假一赔三</div>
                                <div class="item">无票赔付</div>
                            </div>

                        </div>
                        <img src="../../../public/img/bao.png" class="bao" alt="" style="height:.36rem;width:.36rem">
                    </div>
                    <div class="content-artist content-row">
                        <div class="artist-box">
                            <div class="artist-info">
                                <a href="">
                                    <img src="https://img2.tking.cn/assets/img/srkt2ehzNM_.jpg" alt="" class="avatar">
                                </a>
                                <a href="/artist/5b5ecaabc756b14cf382ec40" class="name">
                                    <div class="title">{{artist.artistName}}</div>
                                    <div class="desc">{{artist.artistSummarize}}</div>
                                </a>
                                <div class="btn-like">
                                    <span class="ng-scope">+ 关注</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="show-detail">
                        <div class="section-title" style="margin-top: .183rem">节目详情</div>
                       <div style="font-size:16px;" v-html="detail.content"></div>
                    </div>
                </div>
            </div>
        </div>
        </CC-Scroll>
        <div class="detail-foot">
            <div class="foot-btn">
                立即购票
            </div>
        </div>
    </div>
</template>
<script>
 import {detailApi} from "@api/show";
 import BScroll from "better-scroll";  
export default {
  
    data(){
        return{
            detail:{},
            artist:{},
            id:"5d78b3a9c756b133617b9b53"
             
        }
    },
    name:"Detail",
    async created(){
       let data = await detailApi(this.id);
       
       this.detail= data.result.data ;
       this.artist=this.detail.artists[0];

    },
    methods:{
        handleToList(){
            this.$router.push("/list")
        },
        handleToHome(){
            this.$router.push("/shouye")
        }
        
    },
   
}
</script>
<style lang="scss">
    .show-detail img{
        width:100%;
    }
      .detail {


            bottom: 0;
            top: 0;
            position: fixed;
            left: 0;
            right: 0;
            padding-top: 0.5rem;
            padding-bottom: .62rem;
        }

        .detail-head {
            color: #323038;
            border-bottom: 1px solid #eaeaeb;
            display: flex;
            align-items: center;
            justify-content: center;
            height: .5rem;

            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            background:#fff;
            z-index:100;
        }

        .detail-head .head-back {
            height: .5rem;
            width: .5rem;
            position: absolute;
            left: 0;
            top: 0;
        }

        .detail-head .head-home {
            height: .5rem;
            width: .5rem;
            position: absolute;
            right: 0;
            top: 0;
        }

        .detail-foot {
            min-height: .62rem;
            -ms-flex-preferred-size: .62rem;
            flex-basis: .62rem;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            background-color: #fff;
            border-top: 1px solid #eaeaeb;
            padding: .09rem .09rem;
            z-index: 1000;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            box-sizing: border-box;

        }

        .foot-btn {
            background-image: linear-gradient(287deg, #ff1d41, #ee0e87);
            color: #fff;
            line-height: .44rem;
            height: .44rem;
            text-align: center;
            font-size: .16rem;
            -ms-flex: 1;
            flex: 1;

            border-radius: .22rem;
        }

        .detail-content {

           
            width:100%;
            overflow:auto;
        }

        .content-head {
            width: 100%;
            position: relative;
            padding: .23rem .18rem 0 .18rem;
            box-sizing: border-box
        }

        .img-holder {

            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            filter: blur(40px);
            transform: scale(1.5);
        }

        .head-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: rgba(0, 0, 0, .3);
            overflow: hidden;
        }

        .head-show {
            position: relative;
            width: 100%;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: stretch;
            align-items: stretch;
            padding-left: 1.05rem;
        }

        .show-img {
            position: absolute;
            left: 0;
            top: 0;
            width: .892rem;
            min-width: .892rem;
            height: 1.25rem;
            z-index: 100;
            background-size: 100% 100%;
            border-radius: 4px;
        }

        .show-info {
            height: 1.25rem;
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 1;
            flex: 1;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: justify;
            justify-content: space-between;
            z-index: 100;
        }

        .show-name {
            width: 100%;
            line-height: .14rem;
            font-size: .14rem;
            color: #fff;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            word-break: break-all;
        }

        .price {
            color: #ff4655;
        }

        .price .number {
            font-size: 18px;
            font-weight: 700;
        }

        .price .text {
            font-size: 11px;
            color: #ff4655;
        }

        .discount {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 53px;
            height: 53px;
            display: -ms-flexbox;
            display: flex;
            display: -webkit-flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            border-radius: 50%;
            text-align: center;
            color: #fff;
            z-index: 100;
            background: linear-gradient(315deg, #ff1d41 0, #ee0e87 100%);
            box-shadow: 0 2px 15px 0 rgba(255, 70, 85, .5);
        }

        .show-info .discount .number {
            padding-top: 4px;
            margin-bottom: -3px;
            font-family: DIN-Condensed-Bold;
            font-size: 24px;
            line-height: 24px;
            padding-bottom: 2px;
        }

        .discount .txt {
            font-size: 12px;
            line-height: 10px;
            -webkit-transform: scale(.9);
        }

        .content-container {
            position: relative;
            margin-top: -0.25rem;
            padding: .3rem .18rem 0 .18rem;
            background-color: #fff;
            z-index: 99;
            border-radius: .1rem .1rem 0 0;
        }

        .content-row {
            width: 100%;
            padding: .183rem 0;
            padding-bottom: 0rem;
            font-size: 13px;
        }

        .info-row.time {

            position: relative;

            justify-content: space-between;

            align-items: center;

        }

        .info-row {
            padding-left: 22px;
            padding-bottom: 15px;
            color: #2d2d2d;
            font-size: 16px;
            font-weight: 700;
            background-repeat: no-repeat, no-repeat;
            background-position: left 4px, right 4px;
            background-size: 14px auto, 7px auto;
        }

        .location {
            display: flex;
            position: relative;

        }

        .content-row .info-row.location .venue {
            -ms-flex: 1;
            flex: 1;
            overflow: hidden;
        }

        .content-row .info-row.location .venue .name {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .info-row.desc {
            position: relative;
        }

        .info-row.location .info-detail {
            padding-top: 4px;
            color: #95949d;
            font-size: 13px;
            font-weight: 400;
        }

        .content-row .info-row:last-child {
            padding-bottom: 0;
        }

        .content-server {
            display: -ms-flexbox;
            display: flex;
            display: -webkit-flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: center;
            align-items: center;
        }

        .title {
            font-size: 16px;
            font-weight: 700;
            color: #323038;
        }

        .text .desc {
            color: #323038;
            display: flex;
            display: -webkit-flex;
            padding-top: .05rem;

        }

        .text .desc .item {
            padding-left: .15rem;
            padding-right: .1rem;
            background-image: url("../../../public/img/yan.png");
            background-repeat: no-repeat;
            background-size: .1rem;
            background-position: left;
            white-space: nowrap;
        }

        .bao {
            max-width: .267rem;
        }

        .time-img,
        .location-img,
        .desc-img {
            position: absolute;
            top: 0;
            left: 0;
        }

        .content-artist {
            display: block;
            margin: 0;
            border-bottom: 0;
            padding-bottom: 0;
            overflow: hidden;
        }

        .artist-info .avatar {
            float: left;
            width: .54rem;
            height: .54rem;
            border-radius: 50%;
        }

        .artist-info .name {
            float: left;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            justify-content: center;
            height: .54rem;
            padding-left: .1rem;
            line-height: .17rem;
            color: #494949;
        }

        .name .desc {
            color: #95949d;
            font-size: 13px;
        }

        .btn-like {
            float: right;
            margin-top: .12rem;
        }

        .content-artist .btn-like {
            display: inline-block;
            width: .7rem;
            height: .29rem;
            line-height: .29rem;
            text-align: center;
            color: #ff1d41;
            border-radius: .145rem;
            border: 1px solid #ff1d41;
        }
        .show-detail {
            padding-bottom: .18rem;
        }
         .show-detail .section-title {
            padding: .183rem 0;
            color: #323038;
            font-size: 20px;
            font-weight: 700;
            border-top: 1px solid #eaeaeb;
        }
</style>