<template>
  <div class="home">
    <home-swiper></home-swiper>
  </div>
</template>

<script>
/** 组件 */
import HomeSwiper from '../components/home/HomeSwiper'  // 轮播图子组件

export default {
    name: 'Home',
    components: {
        homeSwiper: HomeSwiper
    }
}
</script>

<style>

</style>
