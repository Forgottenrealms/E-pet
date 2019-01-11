<template>
  <div class="home">
    <home-nav></home-nav>
    <home-search></home-search>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeNav from '@/components/home/HomeNav'
import HomeSearch from '@/components/home/HomeSearch'

export default {
    name: 'Home',
    components: {
      homeNav: HomeNav,
      homeSearch: HomeSearch
    }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
