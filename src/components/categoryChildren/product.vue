<template>
    <div class="product-list">
    <div class="product" v-for="item in list" :key="item.id">
      <div class="product-img">
        <img :src="item.img" :alt="item.title">
      </div>
      <div class="product-title">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      list: []
    };
  },
  //   beforeRouteEnter(to, from, next) {
  //     next(vm => {
  //         console.log(vm.params.cateID);
  //      vm.getData(vm.params.cateID);
  //     });
  //   },
  //   beforeRouteUpdate(to, from, next) {
  //     this.getData(to.params.cateID);
  //     next();
  //   },
  created() {
    this.getData(this.$route.params.cateID);
  },
  watch: {
    $route() {
      this.getData(this.$route.params.cateID);
    }
  },
  methods: {
    getData() {
      this.$http.getListData().then(resp => {
        this.list = resp;
        console.log(this.list);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
 .product-list {
    height: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    // justify-content: space-around;
  }
  .product {
    width: 32%;
    padding: 1vw;
    font-size: 14px;
    box-sizing: border-box;

    &-img {
      width: 100%;
      height: 0;
      padding-top: 150%;
      background-color: #dedede;
      position: relative;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    &-title {
      padding: 5px 0;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
