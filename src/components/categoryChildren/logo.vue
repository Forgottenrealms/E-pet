<template>
    <div class="logo">
       <div class="hotLogo">
           <p class="header-p">推荐品牌-</p>
           <div class="imgLogo">
             <div class="logos" v-for="item in logodata[0].imgdata" :key="item.imgtitle">
                 <div class="header-img">
                     <span class="recommend" :class="{showIt:showRecommend(item.whetherRecommend)}">&#xe602;</span>
                      <span class="recommend" :class="{showTa:showRecommendTa(item.whetherTa)}">&#xe603;</span>
                     <img :src="item.Imgs"/>
                    
                 </div>
                 <div class="logotitle">
                     <span>{{item.imgtitle}}</span>
                 </div>
                 <div class="wherefrom">
                     <span>{{item.wherefrom}}</span>
                 </div>
             </div> 
           </div>
           </div> 
           <div class="dogFoodLogo">
               <p class="header-p">-狗粮品牌-</p>
                          <div class="imgLogo">
             <div class="logos" v-for="item in logodata[1].imgdata" :key="item.imgtitle">
                 <div class="header-img">
                     <span class="recommend" :class="{showIt:showRecommend(item.whetherRecommend)}">&#xe602;</span>
                      <span class="recommend" :class="{showTa:showRecommendTa(item.whetherTa)}">&#xe603;</span>
                     <img :src="item.Imgs"/>
                 </div>
                 <div class="logotitle">
                     <span>{{item.imgtitle}}</span>
                 </div>
                 <div class="wherefrom">
                     <span>{{item.wherefrom}}</span>
                 </div>
             </div> 
           </div>
           </div>
           <div class="sockLogo">
               <p class="header-p">-零食品牌-</p>
                          <div class="imgLogo">
             <div class="logos" v-for="item in logodata[2].imgdata" :key="item.imgtitle">
                 <div class="header-img">
                     <span class="recommend" :class="{showIt:showRecommend(item.whetherRecommend)}">&#xe602;</span>
                      <span class="recommend" :class="{showTa:showRecommendTa(item.whetherTa)}">&#xe603;</span>
                     <img :src="item.Imgs"/>
                 </div>
                 <div class="logotitle">
                     <span>{{item.imgtitle}}</span>
                 </div>
                 <div class="wherefrom">
                     <span>{{item.wherefrom}}</span>
                 </div>
             </div> 
           </div>
           </div>
           <div class="dailyLogo">
               <p class="header-p">-日用品牌-</p>
                <div class="imgLogo">
             <div class="logos" v-for="item in logodata[3].imgdata" :key="item.imgtitle">
                 <div class="header-img">
                     <span class="recommend" :class="{showIt:showRecommend(item.whetherRecommend)}">&#xe602;</span>
                      <span class="recommend" :class="{showTa:showRecommendTa(item.whetherTa)}">&#xe603;</span>
                     <img :src="item.Imgs"/>
                 </div>
                 <div class="logotitle">
                     <span>{{item.imgtitle}}</span>
                 </div>
                 <div class="wherefrom">
                     <span>{{item.wherefrom}}</span>
                 </div>
             </div> 
           </div>
           </div>
    </div>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {
      logodata: []
    };
  },
  beforeRouteEnter(to, form, next) {
    next(vm => {
      vm.getLogoData();
    });
  },
  methods: {
    //实现logo图片的加载
    getLogoData() {
      const getImg = JSON.parse(
        window.sessionStorage.getItem("handle-logo-img")
      );
      if (getImg) {
        this.logodata = getImg;
      } else {
        this.$http.getLogo().then(resp => {
          window.sessionStorage.setItem(
            "handle-logo-img",
            JSON.stringify(resp)
          );
        });
      }
    },
    showRecommend(item) {
      return item === "true" ? true : false;
    },
    showRecommendTa(item) {
      return item === "true" ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* project id 1003828 */
  src: url("//at.alicdn.com/t/font_1003828_6meyn1dt6t7.eot");
  src: url("//at.alicdn.com/t/font_1003828_6meyn1dt6t7.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003828_6meyn1dt6t7.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003828_6meyn1dt6t7.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003828_6meyn1dt6t7.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003828_6meyn1dt6t7.svg#iconfont") format("svg");
}
.logo {
  .header-p {
    color: #666666;
    text-align: center;
    height: 8vw;
    line-height: 8vw;
  }
}
// .header-img{
//     width:33%;
//     height:
//     img{
//         width:100%;
//     }
// }
// .hotLogo{
//     width:100%;
// }
.imgLogo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .logos {
    width: 30%;
    .header-img {
      width: 100%;
      height: 0;
      padding-top: 70%;
      background-color: #dedede;
      position: relative;
      border: 1px solid #dedede;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .logotitle {
      text-align: center;
      padding: 0.5vw 0;
      font-size: 0.3vw;
    }
    .wherefrom {
      text-align: center;
      font-size: 0.2vw;
      color: #999999;
      padding: 0.4vw 0;
    }
  }
}
.recommend {
  display: none;
}
.showTa {
  display: block;
  font-family: "iconfont";
  color: green;
  background-color: white;
  font-weight: normal;
  font-size: 2vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
}
// 判断是否出现推荐图标，如果出现，则显示这个类名
.showIt {
  display: block;
  font-family: "iconfont";
  color: red;
  background-color: #333333;
  font-weight: normal;
  font-size: 2vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

// .header-p{
//     color:red;
// }
</style>
