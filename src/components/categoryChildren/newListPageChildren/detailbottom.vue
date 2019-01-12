<template>
    <div class="detalbottom">
        <div class="detailbottom-service display">
                <span class="iconfont">&#xe6c6;</span>
                <span>客服</span>
        </div>
        <div class="detailbottom-collcation display">
                <span class="iconfont">&#xe662;</span>
                <span>收藏</span>
        </div>
        <div class="detailbottom-cart display">
                <span class="iconfont">&#xe601;</span>
                <span>购物车</span> 
        </div>
        <div class="detailbottom-add-to-cart display">
               <button class="cart">加入购物车</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "detailBottom",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* project id 1003828 */
  src: url("//at.alicdn.com/t/font_1003828_0p3hfxb93w9.eot");
  src: url("//at.alicdn.com/t/font_1003828_0p3hfxb93w9.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003828_0p3hfxb93w9.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003828_0p3hfxb93w9.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003828_0p3hfxb93w9.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003828_0p3hfxb93w9.svg#iconfont") format("svg");
}
.detalbottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #dedede;
  height: 100%;
  .iconfont {
    font-family: "iconfont";
    font-size:5vw;
  }
  .display {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:1vw;
    .cart{
        background-color:red;
        border:0;
        color:white;
        height:10vw;
        font-size:4vw;
    }
  }
}
</style>
