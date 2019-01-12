<template>
    <div class="category">
       <router-link to="/search">
       <div class="input">
           <input type="text" placeholder="请输入搜索内容"/>
           <i class="iconfont">&#xe600;</i>
       </div>
       </router-link>
       <div class="category-and-logo">
           <!-- 实现分类页面的分类和品牌两个模块 -->
           <router-link to="/category/productType" tag="div">分类</router-link>
           <router-link to="/category/logo"  tag="div">品牌</router-link>
           
       </div>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "Category",
  data(){
    return {
      a:{
        b:1,
      },
      b:{
        c:1,
      }
    }
  }
};
</script>

 <style lang="scss">
 .epet-main{
   background-color:#f3f4f5;
 }
.category {
  height: 100%;
  background-color: white;
}
</style>
 <style lang="scss" scoped>
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
.input {
  width: 90%;
  margin: 0 5%;
  height: 10.15vw;
  padding-top: 4vw;
  position: relative;
  input {
    width: 100%;
    font-size: 2.96vw;
    text-align: center;
    height: 100%;
    border-radius: 5vw;
    padding-left: 10vw;
    outline: none;
    background-color: #f8f8f8;
    position: relative;
    box-sizing: border-box;
    border: 0;
    letter-spacing: 0.3vw;
    color: #999999;
  }
  .iconfont {
    font-family: "iconfont" !important;
    position: absolute;
    top: 6.3vw;
    left: 34vw;
    font-size: 5vw;
    color: #999999;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
}
.category-and-logo {
  height: 14.28vw;
  width: 100%;
  background-color: #ffffff;
  line-height: 14.28vw;
  font-size: 4vw;
  display: flex;
  justify-content: space-around;
  color: #4f4f4f;
  font-weight: 500;
  box-sizing:border-box;
  padding:0 15vw;
  padding-bottom:.4vw;
  div {
    border-bottom: .4vw solid transparent;
    &.router-link-exact-active.router-link-active{
      color: #f03e3e;
      border-bottom-color: #f03e3e;
    }
  }
}
</style>
<style>
div {
  justify-content: space-around;
}
</style>
