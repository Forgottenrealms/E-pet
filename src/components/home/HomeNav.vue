<template>
  <div class="epet-home-nav">
    <ul class="home-nav">
      <router-link
        tag="li"
        v-for="item in navList"
        :key="item.id"
        class="navs"
        :to="`/nav/${item.id}`"
      >{{item.nav}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {
      navList: []
    };
  },
  created() {
    this.$http.getNavList().then(res => {
      this.navList = res;
      console.log(this.navList);
    });
  }
};
</script>

<style lang="scss" scoped>
.epet-home-nav {
  width: 100%;
  height: 11.11vw;
  overflow-y: hidden;
  position: absolute;
  top: 7.41vw;
  left: 0;
  z-index: 2;

  .home-nav {
    width: 200%;
    height: 11.11vw;
    display: flex;

    li {
      margin: 5.74vw 3.75vw 0;
      font-size: 3.70vw;
      color: #fff;
    }
  }
}
</style>
