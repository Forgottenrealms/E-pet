<template>
  <div class="food">
      <home-swiper></home-swiper>
      狗狗主粮
    <load-more></load-more>
  </div>
</template>

<script>
import LoadMore from "./LoadMore";
import HomeSwiper from "./HomeSwiper";

export default {
  name: "Food",
  components: {
    loadMore: LoadMore,
    homeSwiper: HomeSwiper
  }
};
</script>

<style>
</style>
