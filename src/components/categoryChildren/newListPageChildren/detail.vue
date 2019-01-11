<template>
    <div class="detail">       
     <div class="detailheader">
         <span class="back" @click="back">&#xe61e;</span>
        <router-link to="/detail/detailproduct" tag="span"> <span class="product">商品</span></router-link>
         <router-link to="/detail/details" tag="span"><span class="details">详情</span></router-link>
         <router-link to="/detail/detailissues"  tag="span"><span class="issues">评价</span></router-link>
         <span class="zuji">&#xe610;</span>
         <span class="more">&#xe626;</span>
     </div>
     <div class="center">
      <router-view></router-view>
     </div>
     <div class="bottom">
       <detail-bootom></detail-bootom>
     </div>
    

    </div>
</template>

<script>
import DetailBootom from "@/components/categoryChildren/newListPageChildren/detailbottom";
export default {
  name: "detail",
  methods:{
      back(){
          this.$router.back();
      }
  },
  components:{
    detailBootom: DetailBootom
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* project id 1003828 */
  src: url("//at.alicdn.com/t/font_1003828_pv6p4cxbmms.eot");
  src: url("//at.alicdn.com/t/font_1003828_pv6p4cxbmms.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003828_pv6p4cxbmms.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003828_pv6p4cxbmms.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003828_pv6p4cxbmms.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003828_pv6p4cxbmms.svg#iconfont") format("svg");
}
@font-face {
  font-family: "iconfont"; /* project id 1003828 */
  src: url("//at.alicdn.com/t/font_1003828_bsyj4o4q5s7.eot");
  src: url("//at.alicdn.com/t/font_1003828_bsyj4o4q5s7.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003828_bsyj4o4q5s7.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003828_bsyj4o4q5s7.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003828_bsyj4o4q5s7.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003828_bsyj4o4q5s7.svg#iconfont") format("svg");
}
@font-face {
  font-family: "iconfont"; /* project id 1003828 */
  src: url("//at.alicdn.com/t/font_1003828_tx6zz7odcbo.eot");
  src: url("//at.alicdn.com/t/font_1003828_tx6zz7odcbo.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003828_tx6zz7odcbo.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003828_tx6zz7odcbo.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003828_tx6zz7odcbo.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003828_tx6zz7odcbo.svg#iconfont") format("svg");
}
.epet-tabbar {
  height: 0;
}
.detail {
  background-color: white;
  .detailheader {
    position: fixed;
    z-index:999;
    height: 10vw;
    background-color:white;
    width:100%;
    border-bottom: 0.1vw solid #dedede;
    display: flex;
    justify-content: space-between;
    padding: 0 1vw;
    align-items: center;
    span{
        height: 100%;
        line-height: 10vw;
    }
    .back {
      font-family: "iconfont";
      margin-right: 10vw;
    }
    .zuji {
      font-family: "iconfont";
    }
    .more {
      font-family: "iconfont";
    }
    .router-link-exact-active{
        color:red;
        border-bottom: .2vw solid red;
    }
  }
  .center{
   padding-top:10vw;
  }
  .bottom{
    position:fixed;
    bottom:0;
    height:10vw;
    width:100%;
    background:red;
  }
}
</style>
