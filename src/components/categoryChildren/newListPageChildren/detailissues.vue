<template>
    <div class="detailissues">
        <div class="detailissues-header">
            <router-link to="/detail/detailissues/commentall" tag="span">全部</router-link>
            <router-link to="/detail/detailissues/haveimg" tag="span">有图</router-link>
        </div>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "detailissues",
  data() {
    return {
      comments: []
    };
  }
  //   beforeRouteEnter(to, from, next) {
  //     next(vm => {
  //       console.log("进入了");
  //       vm.getcommentdata();
  //     });
  //   },
  //   methods: {
  //     //获取接口中的所有数据
  //     getcommentdata() {
  //       this.$http.getCommentData().then(resp => {
  //         this.comments = resp;
  //       });
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
.detailissues {
  &-header {
    width: 100%;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    padding: 3vw 0;
    padding-left: 2vw;
    span {
      display: inline-block;
      padding: 2vw;
      background-color: #dedede;
      text-align: center;
      border-radius: 2vw;
      font-size: 1vw;
    }
    .router-link-active {
      background-color: white;
      border: 1px solid red;
      color: red;
    }
  }
}
</style>
