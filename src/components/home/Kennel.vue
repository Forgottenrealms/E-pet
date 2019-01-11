<template>
  <div class="kennel">
      <home-swiper></home-swiper>
      窝垫馆
    <load-more></load-more>
  </div>
</template>

<script>
import LoadMore from "./LoadMore";
import HomeSwiper from "./HomeSwiper";

export default {
  name: "Kennel",
  components: {
    loadMore: LoadMore,
    homeSwiper: HomeSwiper
  }
};
</script>

<style>
</style>
