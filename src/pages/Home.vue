<template>
  <div class="home">
    <home-nav></home-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeNav from '@/components/home/HomeNav'

export default {
    name: 'Home',
    components: {
      homeNav: HomeNav
    }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
