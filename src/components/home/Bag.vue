<template>
  <div class="bag">
      <home-swiper></home-swiper>
      出行箱包
    <load-more></load-more>
  </div>
</template>

<script>
import LoadMore from "./LoadMore";
import HomeSwiper from "./HomeSwiper";

export default {
  name: "Bag",
  components: {
    loadMore: LoadMore,
    homeSwiper: HomeSwiper
  }
};
</script>

<style>
</style>
