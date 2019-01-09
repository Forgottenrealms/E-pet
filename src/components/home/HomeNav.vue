<template>
  <div class="epet-home-nav">
    <ul class="home-nav">
      <router-link
        tag="li"
        v-for="item in navList"
        :key="item.id"
        class="navs"
        :to="`/home/${item.id}`"
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
        "id": 5001,
        "nav": "首页"
      },
      {
        "id": 5002,
        "nav": "出行箱包"
      },
      {
        "id": 5003,
        "nav": "窝垫馆"
      },
      {
        "id": 5004,
        "nav": "狗狗主粮"
      },
      {
        "id": 5005,
        "nav": "美毛沙龙"
      },
      {
        "id": 5006,
        "nav": "服饰城"
      },
      {
        "id": 5007,
        "nav": "玩具城"
      },
      {
        "id": 5008,
        "nav": "强化免疫"
      },
      {
        "id": 5009,
        "nav": "驱虫助手"
      },
      {
        "id": 5010,
        "nav": "黑科技"
      }]
    };
  },
  created() {
    const navID = this.navList[0].id;
    this.$nextTick(() => {
      this.$router.push(`/home/${navID}`);
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
