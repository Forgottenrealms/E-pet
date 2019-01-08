<template>
    <div class="search">
        <div class="topheader">
           <router-link to="/category" tag="span" class="iconfont">&#xe61f;</router-link>
           <input type="text" placeholder="请输入搜索内容">
           <button class="btn">搜索</button>
        </div>
        <i class="search_logo">&#xe600;</i>
        <div class="hot-search">
          <p class="hot-search-header">热门搜索</p>
        </div>
    </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
    };
  },
  created(){
    console.log(this.$http);
  }
  };
</script>

<style lang="scss">
.search {
  height: 100%;
  background-color: white;
}
</style>
<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 1003828 */
  src: url("//at.alicdn.com/t/font_1003828_hx44pbx0mm.eot");
  src: url("//at.alicdn.com/t/font_1003828_hx44pbx0mm.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003828_hx44pbx0mm.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003828_hx44pbx0mm.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003828_hx44pbx0mm.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003828_hx44pbx0mm.svg#iconfont") format("svg");
}
@font-face {
  font-family: "iconfont"; /* project id 1003674 */
  src: url("//at.alicdn.com/t/font_1003674_1nvfv1oycvr.eot");
  src: url("//at.alicdn.com/t/font_1003674_1nvfv1oycvr.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003674_1nvfv1oycvr.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003674_1nvfv1oycvr.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003674_1nvfv1oycvr.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003674_1nvfv1oycvr.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 9vw;
}
.topheader {
  display: flex;
  justify-content: space-between;
  height: 8vw;
  padding: 2vw 0;
  border-bottom: 0.2vw solid #dedede;
}
.btn {
  background-color: white;
  border: 0;
  outline: none;
  font-size: 4vw;
  color: #666666;
}
input {
  width: 68vw;
  padding-left: 8vw;
  border: 0;
  outline: none;
  background: #f8f8f8;
  border-radius: 3vw;
  letter-spacing: 0.4vw;
  color: #999999;
  font-size: 3.8vw;
}
.search_logo {
  font-family: "iconfont";
  position: absolute;
  top: 4vw;
  left: 15vw;
  font-size: 4vw;
}
.hot-search {
  width: 100%;
  height: 40vw;
  padding-top: 3vw;
  border-bottom: 0.2vw solid #dedede;
}
.hot-search-header {
  font-size: 3.5vw;
  font-weight: bold;
}
</style>


