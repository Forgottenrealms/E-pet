<template>
  <div class="epet-home-swiper3 swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiper3" :key="item.id">
        <img :src="item.img">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination pages3"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "homeSwiper3",
  data() {
      return {
          swiper3: []
      }
  },
  created() {
    this.$http.getSwiper().then(res => {
      this.swiper3 = res;
      // console.log( this.swiper3);
      this.$nextTick().then(this.initSwiper3);
    });
  },
  methods: {
    initSwiper3() {
      this.mySwiper = new Swiper(".epet-home-swiper3", {
        loop: true,
        pagination: {
          el: ".pages3",
          type: "fraction"
        }
      });
    }
  }
};
</script>

<style lang="scss">
    .epet-home-swiper3 {
      width: 94.72vw;
      margin: 0 auto;

      .swiper-wrapper {
        height: 42.59vw;
        width: 100%;

        .swiper-slide {
          height: 42.59vw;
          border-radius: 3vw;
          background: #f1e9f1;

          img {
              height: 42.59vw;
              width: 100%;
              border-radius: 5vw;
          }
        }
      }

      .swiper-pagination {
          margin-top: 10vw;
      }

    }
</style>
