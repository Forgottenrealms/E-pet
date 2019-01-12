<template>
    <div class="detailproduct">
        <home-swiper></home-swiper>
        <div class="showthisproduct">
            <div class="title">
                <span class="title-introduce">{{products[0].title}}<b class="title-specific-introduce">{{matchProdcut[0].explain}}</b></span>
                <span class="share">&#xe624;</span>
            </div>
            <div class="price">
                <span class="price-txt">￥{{products[0].price}}<b class="price-really">{{matchProdcut[0].oringinPrice}}</b></span>
                <span class="quality-goods">&#xe616;</span>
            </div>
            <div class="jiange"></div>
            <div class="overflow-match">
                <div class="overflow-match-header">
                    <div>超值搭配</div><div class="overflow-match-header-right">
                      <span>{{matchProdcut[0].match[0].matchTitle}}</span>+
                      <span>{{matchProdcut[0].match[1].matchTitle}}</span>
                      <span class="iconfont goto">&#xe627;</span>
                      </div>
                </div>
                <div class="overflow-match-img-and-price">
                    <div class="product1">
                        <span class="img"><img class="img1" :src="matchProdcut[0].match[0].matchImg"/></span>
                        <span class="prices">￥{{matchProdcut[0].match[0].matchPrice}}</span>
                        <span class="save-money">省￥{{matchProdcut[0].match[0].saveMoney}}</span>
                    </div>
                      <div class="product1">
                        <span class="img"><img class="img1" :src="matchProdcut[0].match[1].matchImg"/></span>
                        <span class="prices">￥{{matchProdcut[0].match[1].matchPrice}}</span>
                        <span class="save-money">省￥{{matchProdcut[0].match[1].saveMoney}}</span>
                    </div>
                </div>
            </div>
            <div class="jiange"></div>
            <div class="select-product">
                <span>已经选择&nbsp;&nbsp;&nbsp;<b>红色</b></span>
                <span>更多规格</span>
            </div>
            <div class="jiange"></div>
            <div class="where">
                <div class="where-to-go">
                    <span>送至<b class="location">&#xe600;</b><i>北京</i></span>
                    <span class="store">E宠西部中央仓库</span>
                    
                </div>
            </div>
            <div class="logo">
                <div class="zhengping">
                    <span class="iconfont">&#xe699;</span>正品保证
                </div>
                <div class="baoyou">
                    <span class="iconfont">&#xe67d;</span>99元包邮
                </div>
                <div class="tuihuo">
                    <span class="iconfont">&#xe608;</span>30天退货
                </div>
            </div>
             <div class="jiange"></div>
             <div class="people-issues">
               <div class="people-issues-header">
                 <div class="people-issues-left">
                     <span class="iconfont people-issues-left-issues">&#xe63e;</span>宠友评价<b>({{commentAmount}})</b>
                 </div>
                 <div class="people-issues-right">
                   <span>好评率{{products[0].issues}}%</span>
                   <span class="iconfont goto">&#xe627;</span>
                 </div>                                 
               </div>
                <ul class="people-issues-body">
                  <router-link to="/detail/detailissues/commentall" v-for="item in comments" :key="item.username" tag="li">
                    <div class="li-left">
                      <img :src="item.logoImg" class="li-left-img"/>
                    </div>
                    <div class="li-right">
                      <p class="li-right-header">
                        <span>{{item.username}}</span>
                        <span class="star">{{item.star}}</span>
                      </p>
                      <p class="li-right-center">
                        <span>加入E宠{{item.date}}天</span>
                        <span class="v-level">V{{item.level}}</span>
                      </p>
                      <p class="li-right-bottom">
                        <span>{{item.comment}}</span>
                      </p>
                    </div>

                  </router-link>
                </ul>
                <div class="people-issues-bottom">
                  <span @click="gotoDetail">查看全部评价</span>
                  <span>查看购买咨询</span>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import HomeSwiper from "@/components/home/HomeSwiper";
export default {
  name: "detailProduct",
  data() {
    return {
      products: [],
      matchProdcut: [],
      comments: [],
      commentAmount: 22
    };
  },
  components: {
    homeSwiper: HomeSwiper
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getdata();
      // vm.getdetail();
    });
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.products);
    });
  },
  // created:{

  // },
  methods: {
    getdata() {
      if (this.$route.params.products) {
        // console.log(this.$route.params.products[0].id);
        //将访问的商品的详情的输出传送过来
        this.getMatchProduct();
        this.getComments();
        this.products = this.$route.params.products;
        window.sessionStorage.setItem(
          "get-product-detail",
          JSON.stringify(this.$route.params.products)
        );
      } else {
        this.products = JSON.parse(
          window.sessionStorage.getItem("get-product-detail")
        );
        this.matchProdcut = JSON.parse(
          window.sessionStorage.getItem("get-product-match-detail")
        );
        this.commentAmount = JSON.parse(
          window.sessionStorage.getItem("get-detail-comment")
        ).length;
        this.comments = JSON.parse(
          window.sessionStorage.getItem("get-detail-comment")
        ).slice(0, 3);
      }
    },
    getMatchProduct() {
      console.log("调用了");
      this.$http.matchProduct().then(resp => {
        this.matchProdcut = resp;
        window.sessionStorage.setItem(
          "get-product-match-detail",
          JSON.stringify(resp)
        );
      });
    },
    getComments() {
      this.$http.getCommentData().then(resp => {
        this.commentAmount = resp.length;
        this.comments = resp.slice(0, 3);
        console.log(this.comments);
        window.sessionStorage.setItem(
          "get-detail-comment",
          JSON.stringify(resp)
        );
      });
    },
    gotoDetail() {
      this.$router.push("/detail/detailissues/commentall");
    },
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* project id 1003828 */
  src: url("//at.alicdn.com/t/font_1003828_l9beyqpan9.eot");
  src: url("//at.alicdn.com/t/font_1003828_l9beyqpan9.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003828_l9beyqpan9.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003828_l9beyqpan9.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003828_l9beyqpan9.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003828_l9beyqpan9.svg#iconfont") format("svg");
}
.detailproduct {
  height: auto;
  background: white;
}
.showthisproduct {
  display: flex;
  flex-direction: column;
  color: #666666;
  font-size: 2vw;
  .title {
    padding: 3vw 0;
    line-height: 4vw;
    border-bottom: 0.2vw solid #dedede;
    display: flex;
    justify-content: space-between;
    .share {
      font-family: "iconfont";
      width: 10vw;
      text-align: center;
      font-size: 4.5vw;
      padding-right: 2vw;
      padding-top: 2vw;
      display: inline-block;
    }
    .title-specific-introduce {
      display: block;
      padding-top: 2vw;
      color: orangered;
    }
  }
  .price {
    display: flex;
    justify-content: space-between;
    padding: 3vw 0;
    color: red;
    font-size: 4vw;
    font-weight: bold;
    .price-really {
      color: #dedede;
      font-size: 1.2vw;
      padding-left: 1.5vw;
      text-decoration: line-through;
    }
    .quality-goods {
      font-family: "iconfont";
      float: right;
      padding-right: 2vw;
      color: greenyellow;
      font-size: 4vw;
      font-weight: normal;
    }
  }
  .overflow-match {
    .overflow-match-header {
      display: flex;
      justify-content: space-between;
      padding: 2vw 0;
      &-right {
        color: #999999;
        font-size: 1.2vw;
        span {
          padding-right: 1vw;
        }
        .goto {
          color: #dedede;
        }
      }
    }
    &-img-and-price {
      display: flex;
      justify-content: flex-start;
      padding: 2vw 0;
      padding-right: 2vw;

      .product1 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 3vw;
        .img {
          width: 15vw;
          height: 20vw;
          .img1 {
            width: 15vw;
            height: 20vw;
          }
        }
        .prices {
          color: red;
          font-size: 4vw;
        }
        .save-money {
          padding: 0;
          color: orangered;
          font-size: 12px;
          background: orange;
          border-radius: 1vw;
        }
      }
    }
  }
  .select-product {
    display: flex;
    justify-content: space-between;
    padding: 2vw 0;
    span {
      &:last-child {
        padding-right: 1vw;
      }
    }
  }
  .jiange {
    height: 1vw;
    background: #dedede;
  }
  .where-to-go {
    display: flex;
    justify-content: space-between;
    padding: 1vw;
    border-bottom: 1px solid #dedede;
    .location {
      font-family: "iconfont";
      color: red;
      padding-left: 1vw;
    }
    i {
      font-style: normal;
      padding-left: 1vw;
    }
    .store {
      padding: 1vw;
      border: 1px solid #dedede;
      border-radius: 2vw;
    }
  }
  .iconfont {
    font-family: "iconfont";
    font-size: 4vw;
    color: red;
  }
  .logo {
    display: flex;
    justify-content: space-between;
    padding: 2vw;
  }
  .people-issues {
    height: 100vw;
    &-header {
      height: 6vw;
      line-height: 6vw;
      border-bottom: 1px solid #dedede;
      display: flex;
      justify-content: space-between;
    }
    &-right {
      span {
        &:last-child {
          color: #dedede;
        }
      }
    }
  }
  .people-issues-body {
    li {
      display: flex;
      justify-content: flex-start;
      height: 10vw;
      border-bottom: 1px solid #dedede;
      padding: 3vw 0;
    }
    .li-left {
      width: 5vw;
      padding-right: 4vw;
    }
    .li-left-img {
      width: 6vw;
      height: 6vw;
      border-radius: 50%;
    }
    .li-right {
      flex: 1;
      &-header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .star {
          color: red;
        }
      }
      &-center {
        display: flex;
        justify-content: space-between;
        padding: 1vw 0;
        .v-level {
          color: red;
          padding-right: 2vw;
        }
      }
    }
  }
  .people-issues-bottom {
    display: flex;
    height: 10vw;
    justify-content: center;
    align-items: center;
    span {
      display: inline-block;
      width: 30vw;
      margin-left: 4vw;
      text-align: center;
      height: 8vw;
      line-height: 8vw;
      border: 1px solid red;
      color: red;
    }
  }
}
</style>
