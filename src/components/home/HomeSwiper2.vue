<template>
  <div class="epet-home-swiper2 swiper-container">
    <div class="swiper-wrapper home-swiper2">
      <div class="swiper-slide homeswiper2-slide" v-for="item in swiper2" :key="item.id">
        <img :src="item.imgs">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination pages"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "homeSwiper2",
  data() {
      return {
          swiper2: []
      }
  },
  created() {
    this.$http.getSwiperImgs().then(res => {
      this.swiper2 = res;
      // console.log( this.swiper2);
      this.$nextTick().then(this.initSwiper2);
    });
  },
  methods: {
    initSwiper2() {
      this.mySwiper2 = new Swiper(".epet-home-swiper2", {
        autoplay: true,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 5,
        // 如果需要分页器
        pagination: {
          el: ".pages"
        }
      });
    }
  }
};
</script>

<style lang="scss">
    .epet-home-swiper2 {
      width: 94.72vw;
      margin: 5vw auto 0;

      .home-swiper2 {
        height: 45.93vw;
        width: 100%;

        .homeswiper2-slide {
          padding: 10vw;
          box-sizing: border-box;
          border-radius: 3vw;
          background: #f1e9f1;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 35vw;
            height: 35vw;
          }
        }
      }

      .pages {
          margin-top: 10vw;
      }

        .swiper-pagination-bullet,
        .swiper-pagination-bullet-active {
            border: 0;
            background: #dbdbdb;
        }
    }
</style>
