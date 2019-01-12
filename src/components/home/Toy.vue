<template>
  <div class="toy">
      <home-swiper></home-swiper>
      玩具城
    <load-more></load-more>
  </div>
</template>

<script>
import LoadMore from "./LoadMore";
import HomeSwiper from "./HomeSwiper";

export default {
  name: "Toy",
  components: {
    loadMore: LoadMore,
    homeSwiper: HomeSwiper
  }
};
</script>

<style>
</style>
