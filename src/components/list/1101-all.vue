<template>
  <div class="list-body">
    <router-link
      class="list_item"
      v-for="(item,index) in listData"
      :key="index"
      tag="div"
      :to="'/detail/'+item.showOID"
    >
      <div class="show-component normal">
        <div class="normal-content">
          <!-- ===================left========== -->
          <div class="left-column">
            <div class="image-contianer">
              <img class="img" :src="item.posterURL" alt />
            </div>
          </div>
          <!-- ==================right ==============-->
          <div class="right-column-wrapper">
            <div class="right-column">
              <div class="show-name">{{item.showName}}</div>
              <div class="show-line">
                <div class="left">
                  <div class="show-time">{{item.latestShowTime}}</div>
                  <div class="show-avenue">{{item.venueName}}</div>
                </div>

                <div class="discount" v-show="item.discount==0 || item.discount<1">
                  <div class="number">{{(item.discount*10).toFixed(1)}}</div>
                  <div class="txt">折起</div>
                </div>
              </div>
              <div class="other-detail">
                <div class="left-part active">
                  <div class="tag sell">{{item.showStatus.displayName}}</div>
                </div>
                <div>
                  <span></span>
                </div>
              </div>
              <div class="right-part">
                <div class="price">
                  <span class="number">{{item.minPrice}}</span>
                  元起
                </div>
              </div>
              <div class="advertise">
                <div class="decorate-icon"></div>
                {{item.advertise}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { listAllApi } from "@api/list";
import { mapState } from "vuex";
export default {
  name: "listAllApi",

  data() {
    return {
      listData: [],
      type: 1,
      cityID: 1101,
      city: {}
    };
  },
  methods: {
    async handleGetList() {
      let { urlName, type } = this.$route.params;
      this.type = type;
     
      this.cityID = JSON.parse(sessionStorage.getItem("cityName")).cityID;
      let data = await listAllApi(this.cityID, this.type);
      this.listData = data.result.data;

       this.$store.commit("handleType",this.type)
    }
  },

  created() {
    sessionStorage.getItem("ci");
    this.handleGetList();
  },
  watch: {
    $route(to, from) {
      if (
        /\/list\/viewType\/\w*\/\d?/.test(to.path) &&
        !/\/detail\/\w*/.test(from.path)
      ) {
        this.handleGetList();
      }
    }
  }
};
</script>

<style lang="scss" >
.list-body {
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  padding: 0 0.18rem;
  box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: block;
  position: relative;
  .show-component {
    font-size: 0.12rem;
    .normal-content {
      width: 100%;
      padding: 22px 0;
      display: inline-block;
      .left-column {
        width: 0.9rem;
        float: left;
        .image-contianer {
          height: 1.2rem;
          width: 0.9rem;
          float: left;
          position: relative;
          .img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .right-column-wrapper {
        float: left;
        width: 100%;
        margin-right: -0.9rem;
        .right-column {
          position: relative;
          margin-right: 0.9rem;
          padding-left: 18px;
          .show-name {
            width: 100%;
            color: #000;
            font-size: 17px;
            font-weight: 700;
            line-height: 0.22rem;
            max-height: 0.44rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
          }
          .show-line {
            display: -ms-flexbox;
            display: flex;
            display: -webkit-flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: center;
            align-items: center;
            .left {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              .show-time {
                margin-top: 11px;
              }
              .show-avenue {
                max-width: 100%;
                line-height: 0.18rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-bottom: 11px;
                display: inline-block;
                padding-right: 0.45rem;
              }
            }
            .discount {
              position: static;
              min-width: 37px;
              margin-left: 10px;
              position: absolute;
              top: 0.38rem;
              left: auto;
              right: 0;
              line-height: 1;
              padding-top: 0;
              padding-left: 0;
              display: -ms-flexbox;
              display: flex;
              display: -webkit-flex;
              -ms-flex-direction: column;
              flex-direction: column;
              -ms-flex-align: center;
              align-items: center;
              -ms-flex-pack: center;
              justify-content: center;
              width: 37px;
              height: 37px;
              transform: none;
              color: #fff;
              background-image: linear-gradient(315deg, #ff1d41, #ee0e87);
              box-shadow: 0 2px 8px 0 rgba(250, 24, 88, 0.5);
              border-radius: 100%;
              text-align: center;
              .number {
                font-family: DIN-Condensed-Bold;
                font-size: 18px;
                line-height: 18px;
                padding-top: 2px;
                margin-bottom: -3px;
              }
              .txt {
                line-height: 9px;
                font-size: 12px;
                transform: scale(0.7);
                -webkit-transform: scale(0.7);
              }
            }
          }
          .other-detail {
            width: 100%;
            .left-part {
              overflow: hidden;
              position: relative;
              padding-right: 20px;
              .tag.sell {
                color: #ff1d41;
                border: 1px solid rgba(255, 29, 65, 0.3);
              }
            }
          }
        }
      }
    }
    .tag {
      padding: 0 3px;
      text-align: center;
      border-radius: 2px;
      font-size: 12px;
      float: left;
      margin-right: 5px;
      margin-bottom: 10px;
      line-height: 17px;
    }
    .price {
      font-size: 0.1rem;
      color: #ff1d41;
      .number {
        font-size: 0.18rem;
        font-weight: 600;
      }
    }
  }
}
</style>