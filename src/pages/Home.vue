<template>
  <div class="home">
    <home-swiper></home-swiper>
    <home-search></home-search>
    <home-nav></home-nav>
    <div class="epet-home-activity">
      <div 
        v-for="item in activity"
        :key="item.id"
        class="activity-item"
        >
          <img class="activity-img" :src="item.imgs"/>
          <span class="activity-text">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
/** 组件 */
import HomeSwiper from '../components/home/HomeSwiper'  // 轮播图子组件 
import HomeSearch from '../components/home/HomeSearch'  // 首页搜索框
import HomeNav from '../components/home/HomeNav'      // 导航子组件

export default {
    name: 'Home',
    data() {
      return {
        activity: []
      }
    },
    created() {
      this.$http.getActivityImg().then(res => {
      this.activity = res;
    });
    },
    components: {
        homeSwiper: HomeSwiper,
        homeSearch: HomeSearch,
        homeNav: HomeNav
    }
}
</script>

<style lang="scss" scoped>
.home {

  .epet-home-activity {
    width: 94.72vw;
    height: 25.37vw;
    background: #fff;
    border-radius: 5vw;
    position: absolute;
    top: 62vw;
    left: 0;
    right: 0;
    z-index: 3;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .activity-item {
      display: flex;
      align-items: center;
      flex-direction: column;

        .activity-img {
          width: 10.93vw;
          height: 10.93vw;
          border-radius: 45%;
          margin-bottom: 2vw;
        }
    }
  }
}
</style>
