<template>
  <div class="cloths">
      <home-swiper></home-swiper>
      服饰城
    <load-more></load-more>
  </div>
</template>

<script>
import LoadMore from "./LoadMore";
import HomeSwiper from "./HomeSwiper";

export default {
  name: "Cloths",
  components: {
    loadMore: LoadMore,
    homeSwiper: HomeSwiper
  }
};
</script>

<style>
</style>
