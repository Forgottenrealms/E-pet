<template>
  <div class="epet-home-loadmore">
    <div class="load-item" v-for="item in loadItem" :key="item.id">
      <img :src="item.imgs">
      <p>{{item.disc}}</p>
      <div class="price-cart">
        <b>￥<span>{{item.price}}</span></b>
        <span class="cart" v-html="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadMore",
  data() {
    return {
      loadItem: [],
      icon: "&#xe667;"
    };
  },
  created() {
    this.$http.getLoadMore().then(res => {
      this.loadItem = res;
    });
  }
};
</script>

<style>
/* 购物车 */
@font-face {
  font-family: "iconfont"; /* project id 1010196 */
  src: url("//at.alicdn.com/t/font_1010196_z7rbvxr2fr.eot");
  src: url("//at.alicdn.com/t/font_1010196_z7rbvxr2fr.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1010196_z7rbvxr2fr.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1010196_z7rbvxr2fr.woff") format("woff"),
    url("//at.alicdn.com/t/font_1010196_z7rbvxr2fr.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1010196_z7rbvxr2fr.svg#iconfont") format("svg");
}
</style>

<style lang="scss">
.epet-home-loadmore {
  width: 94.72vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .load-item {
    width: 45.83vw;
    height: 72.04vw;
    border: 1px solid #d7d7d7;
    border-radius: 4vw;
    margin-top: 2.41vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2.78vw;
    box-sizing: border-box;

    img {
      width: 39.8vw;
      height: 43.33vw;
      background: gold;
    }
    p {
      font-size: 3.33vw;
      line-height: 4vw;
      color: #333333;
      margin-top: 3.3vw;
      overflow: hidden;
      text-overflow:ellipsis;
    //   white-space: nowrap;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .price-cart {
      width: 100%;
      height: 7.41vw;
      margin-top: 3.3vw;
      display: flex;
      justify-content: space-between;
      align-items: center;

      b {
        font-size: 3.5vw;
        color: #f03e3e;
        font-weight: bolder;
        span {
          font-size: 4vw;
        }
      }
      .cart {
        font-family: "iconfont";
        color: #f03e3e;
        width: 6.94vw;
        height: 6.94vw;
        text-align: center;
        line-height: 6.94vw;
        background: #feeceb;
        border-radius: 50%;
      }
    }
  }
}
</style>
