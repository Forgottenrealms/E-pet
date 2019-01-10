<template>
  <div 
    :class="{
        'epet-home-nav': true,
        'scroll-to-top': this.$store.state.isScrollTop
      }" 
    >
    <ul class="home-nav">
      <router-link
        tag="li"
        v-for="item in navList"
        :key="item.navPath"
        class="navs"
        :to="`/home/${item.path}`"
      >{{item.nav}}</router-link>
    </ul>
  </div>
</template>

<script>
const SESSION_STORAGE_KEY = 'rzg-mall-home-nav'

export default {
  name: "HomeNav",
  data() {
    return {
      navList: [{
        "path": "index",
        "nav": "首页"
      },
      {
        "path": "bag",
        "nav": "出行箱包"
      },
      {
        "path": "kennel",
        "nav": "窝垫馆"
      },
      {
        "path": "food",
        "nav": "狗狗主粮"
      },
      {
        "path": "hear",
        "nav": "美毛沙龙"
      },
      {
        "path": "cloths",
        "nav": "服饰城"
      },
      {
        "path": "toy",
        "nav": "玩具城"
      },
      {
        "path": "sick",
        "nav": "强化免疫"
      },
      {
        "path": "worm",
        "nav": "驱虫助手"
      },
      {
        "path": "technology",
        "nav": "黑科技"
      }]
    };
  },
  created() {
    const navPath = this.navList[0].path;
    this.$nextTick(() => {
      this.$router.push(`/home/${navPath}`);
    })
  }
  // created() {
  //   // 获取sessionStorage中的导航列表
  //   const navList = JSON.parse(window.sessionStorage.getItem(SESSION_STORAGE_KEY));
  //   if(navList) {
  //     this.navList = navList;
  //     const {
  //       navID = navList[0].id
  //     } = this.$route.params;
  //     this.$router.push(`/home/${navID}`)
  //     // this.$router.push({
  //     //   path: 'home',
  //     //   params: {
  //     //     navID
  //     //   }
  //     // });
  //     console.log(navID)
  //   } else {
  //     this.$http.getNavList().then(res => {
  //       this.navList = res;
  //       console.log(this.navList);
  //       // 把导航列表存在sessionStorage里面
  //       window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(res));
  //       // 等导航渲染完成之后，再跳转到第一个
  //       this.$nextTick(() => {
  //         const {
  //           navID = res[0].id
  //         } = this.$route.params;
  //         console.log(this.$route)
  //         this.$router.push(`/home/${navID}`)
  //         // this.$router.push({
  //         //   path: 'home',
  //         //   params: {
  //         //     navID
  //         //   }
  //         // });
  //       })
  //     });
  //     console.log(navID)
  //   }
  // }
};
</script>

<style lang="scss">
.scroll-to-top {
  background: #fff;

  .home-nav {
    .navs {
      color: #000 !important;
    }
  }
}
</style>

<style lang="scss" scoped>
.epet-home-nav {
  width: 100%;
  height: 11.11vw;
  overflow-y: hidden;
  position: absolute;
  top: 7.41vw;
  left: 0;
  z-index: 99;

  .home-nav {
    width: 215%;
    height: 11.11vw;
    display: flex;

    li {
      margin: 5.74vw 3.75vw 0;
      font-size: 3.70vw;
      color: #fff;

      &.router-link-exact-active, 
      &.router-link-active {
        font-size: 6.85vw;
        margin-top: 2vw;
      }
    }
  }
}
</style>
