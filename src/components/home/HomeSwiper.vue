<template>
  <div class="epet-home-swiper swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiper" :key="item.id">
        <img :src="item.img" alt>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";

export default {
  name: "HomeSwiper",
  data() {
    return {
      swiper: []
    };
  },
  created() {
    this.$http.getSwiper().then(res => {
      this.swiper = res;
      console.log(res);
      // $nextTick 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
      // this.$nextTick(this.initSwiper)
      this.$nextTick().then(this.initSwiper);
    });
  },
  mounted() {
    // 在这时，实际上dom还没有更新渲染完成, 所以这里初始化Swiper会有问题，因为个数不对
    // this.initSwiper()
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
      background: red;
    }
  }

  .swiper-pagination {
    bottom: 7.41vw;
  }
}
</style>
