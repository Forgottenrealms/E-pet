<template>
  <div class="epet-home-index">
    <!-- 轮播图 -->
    <div class="epet-home-swiper1 swiper-container">
      <div class="swiper-wrapper home-swiper">
        <div class="swiper-slide homeswiper-slide" v-for="item in swiper" :key="item.id">
          <img :src="item.img">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!--活动-->
    <div class="epet-home-activity">
      <div v-for="item in activity" :key="item.id" class="activity-item">
        <img class="activity-img" :src="item.imgs">
        <span class="activity-text">{{item.title}}</span>
      </div>
    </div>
    <!-- 新人专享 -->
    <div class="epet-home-newUser">
      <div class="new-title">
        <span></span>新人专享
        <span></span>
      </div>
      <div class="new-ticket">
        <div class="new-item">
          <h2>见面礼</h2>
          <p>送888元优惠券</p>
          <span></span>
        </div>
        <div class="new-item">
          <h2>新客频道</h2>
          <p>你的购物指南</p>
          <span></span>
        </div>
        <div class="new-item">
          <h2>随单赠</h2>
          <p>首单满99元送零食</p>
          <span></span>
        </div>
      </div>
    </div>
    <div class="epet-home-heart">
      <h1>不到四块钱</h1>
      <h1>
        <span>让流浪狗</span>一天不挨饿
      </h1>
    </div>
    <!-- 品牌特卖 -->
    <home-title>品牌特卖</home-title>
    <div class="epet-home-brandImg">
      <h1>朗跃半湿粮专场</h1>
      <p>真材实料精湛工艺</p>
    </div>
    <!-- 轮播图2 -->
    <home-swiper2></home-swiper2>
    <!-- E宠国际 -->
    <home-title>E宠国际</home-title>
    <home-swiper3></home-swiper3>

    <!-- 猜你喜欢 -->
    <div class="epet-home-guess">
      <h1>猜你喜欢</h1>
      <load-more></load-more>
    </div>
  </div>
</template>

<script>
/** 组件 */
import HomeSearch from "./HomeSearch"; // 首页搜索框
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
import LoadMore from "./LoadMore";
import HomeTitle from "./HomeTitle";
import HomeSwiper2 from "./HomeSwiper2"
import HomeSwiper3 from "./HomeSwiper3"

export default {
  name: "Index",
  data() {
    return {
      activity: [],
      swiper: []
    };
  },
  components: {
    homeSearch: HomeSearch,
    loadMore: LoadMore,
    homeTitle: HomeTitle,
    homeSwiper2: HomeSwiper2,
    homeSwiper3: HomeSwiper3
  },
  created() {
    this.$http.getActivityImg().then(res => {
      this.activity = res;
    });
    this.$http.getSwiper().then(res => {
      this.swiper = res;
      // console.log(res);
      this.$nextTick().then(this.initSwiper);
    });
  },
  methods: {
    initSwiper() {
      this.mySwiper = new Swiper(".epet-home-swiper1", {
        autoplay: true, // 自动轮播
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>

<style>
.swiper-pagination-bullet {
  width: 1.67vw;
  height: 1.67vw;
  background: none;
  border: 1px solid #fff;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  width: 3.7vw;
  border-radius: 2vw;
  background: #fff;
}
</style>

<style lang="scss" scoped>
.epet-home-index {
  position: relative;
  width: 100%;
  height: 100%;

  // 轮播图
  .epet-home-swiper1 {
    width: 100%;
    height: 0;
    padding-top: percentage(750 / 1080);

    .home-swiper {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 998;

      .homeswiper-slide {
        background: #fff;

        img {
          height: 69.44vw;
        }
      }
    }

    .swiper-pagination {
      z-index: 999;
      bottom: 8.61vw;
    }
  }

  .epet-home {
    &-activity {
      width: 94.72vw;
      height: 25.37vw;
      background: #fff;
      border-radius: 5vw;
      position: absolute;
      top: 62vw;
      left: 0;
      right: 0;
      z-index: 3;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 0 1vw #eeeeee;

      .activity-item {
        display: flex;
        align-items: center;
        flex-direction: column;

        .activity-img {
          width: 10.93vw;
          height: 10.93vw;
          border-radius: 45%;
          margin-bottom: 2vw;
        }
        .activity-text {
          font-size: 1.5vw;
        }
      }
    }

    &-newUser {
      width: 94.72vw;
      height: 55.74vw;
      border-radius: 5vw;
      margin: 25vw auto 0;
      background: #ffdbe6;

      .new-title {
        text-align: center;
        color: #ff7db5;
        width: 100%;
        height: 11.85vw;
        font-weight: bolder;
        font-size: 4.26vw;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          display: block;
          width: 2.41vw;
          height: 1vw;
          border-radius: 3vw;
          margin: 0 2vw;
          background: #ff7db5;
        }
      }
      .new-ticket {
        width: 89.26vw;
        height: 41.48vw;
        background: #fff;
        display: flex;
        margin: 0 auto;
        border-radius: 5vw;

        .new-item {
          flex: 1;
          text-align: center;

          h2 {
            font-size: 3.7vw;
            margin: 5.56vw 0 2vw;
            font-weight: bold;
          }
          p {
            font-size: 2.96vw;
          }

          &:nth-child(2) {
            border-left: 1px solid #ffe7e6;
            border-right: 1px solid #ffe7e6;
          }
        }
      }
    }
    // 爱心流浪狗
    &-heart {
      width: 94.72vw;
      height: 12.96vw;
      border-radius: 3vw;
      border-top-left-radius: 0vw;
      margin: 7.41vw auto 0;
      background: #4a5973;
      overflow: hidden;

      h1 {
        color: #fff;
        margin-left: 41.3vw;
        margin-top: 1.5vw;

        span {
          color: #a4b5c0;
        }
      }
    }
    
    &-brandImg {
      width: 94.72vw;
      height: 43.15vw;
      margin: 0 auto;
      background: #fff7ef;
      border-radius: 5vw;
      overflow: hidden;

      h1 {
        font-size: 4.44vw;
        font-weight: bold;
        margin: 20.37vw 0 1.8vw 6.94vw;
      }
      p {
        margin-left: 6.94vw;
      }
    }
    // 猜你喜欢
    &-guess {
      width: 94.72vw;
      margin: 10vw auto 0;

      h1 {
        font-size: 5.93vw;
        font-weight: bold;
        color: #333333;
        margin-bottom: 3.15vw;
      }
    }
  }
}
</style>
