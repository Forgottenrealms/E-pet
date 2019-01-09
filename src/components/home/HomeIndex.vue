<template>
  <div class="epet-home-index">
    <!-- 轮播图 -->
    <div class="epet-home-swiper swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiper" :key="item.id">
            <img :src="item.img">
        </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
    <!-- 搜索框 -->
    <home-search></home-search>
    <!--活动-->
    <div class="epet-home-activity">
      <div v-for="item in activity" :key="item.id" class="activity-item">
        <img class="activity-img" :src="item.imgs">
        <span class="activity-text">{{item.title}}</span>
      </div>
    </div>
    <div class="epet-home-newUser">
      <div class="new-title">
        <span></span>新人专享
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
/** 组件 */
// import HomeSwiper from "../components/home/HomeSwiper"; // 轮播图子组件
import HomeSearch from "./HomeSearch"; // 首页搜索框
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";

export default {
  name: "Index",
  data() {
    return {
      activity: [],
      swiper: []
    };
  },
  components: {
    homeSearch: HomeSearch
  },
  created() {
    this.$http.getActivityImg().then(res => {
      this.activity = res;
    });
    // // 请求轮播图数据
    // this.$http.getSwiper().then(res => {
    //   this.swiper = res;
    //   console.log(res);
    //   // $nextTick 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    //   // this.$nextTick(this.initSwiper)
    //   this.$nextTick().then(this.initSwiper);
    // });
  },
  beforeRouteEnter(to, from, next) {
      console.log("进入了")
    next(vm => {
      vm.$http.getSwiper().then(res => {
        vm.swiper = res;
        console.log(res);
        // $nextTick 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
        // vm.$nextTick(vm.initSwiper)
        vm.$nextTick().then(vm.initSwiper);
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("更改了")
    
      this.$http.getSwiper().then(res => {
        this.swiper = res;
        console.log(res);
        // $nextTick 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
        // this.$nextTick(this.initSwiper)
        this.$nextTick().then(this.initSwiper);
      });
    next();
  },
  methods: {
    initSwiper() {
      this.mySwiper = new Swiper(".swiper-container", {
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
    // 轮播图
    .epet-home-swiper {
        width: 100%;
        height: 0;
        padding-top: percentage(750 / 1080);
        position: relative;

        .swiper-wrapper {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;

            .swiper-slide {
            background: #fff;

            img {
                width: 100%;
                height: 69.44vw;
            }
            }
        }

        .swiper-pagination {
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
    }
  }
}
</style>
