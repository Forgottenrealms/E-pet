<template>
    <div class="newListPage">
        <div class="newlist-header">
          <router-link to="/category/productType" tag="span" class="iconfont">&#xe61f;</router-link>
           <input type="text" placeholder="请输入搜索内容">
           <button class="btn">搜索</button>
        </div>
        <div class="listnav">
        <ul class="fournav">
           <router-link to="/newlistpage/selectlist" tag="li"><li
                @click="showthislist1" :class="{
                changecolor:this.count1%2===0
            }"
            >{{setdata}}</li>
           </router-link>
            <li
                @click="showthislist2" :class="{
                changecolor:this.count2%2===0
            }"
            >销量</li>
            <li
                @click="showthislist3" :class="{
                changecolor:this.count3%2===0
            }"
            >价格</li>
            <li
                 @click="showthislist4" :class="{
                changecolor:this.count4%2===0
            }"
            >筛选<span class="filter-product">&#xe69a;</span></li>
        </ul>
         {{getdate()}}
        </div>
        <router-view></router-view>
        <div class="selectTab">
            <span>品牌</span>
            <span>年龄</span>
            <span>体型</span>
            <span>颗粒大小</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      count1: Number(1),
      count2: Number(1),
      count3: Number(1),
      count4: Number(1),
      setdata: "默认排序"
    };
  },
  name: "newListPage",
  methods: {
    showthislist1() {
      this.count1++;
    },
    showthislist2() {
      this.count2++;
      //    console.log(this.$route.path==="/newlistpage/selectlist");
      if (this.$route.path === "/newlistpage/selectlist") {
        this.$router.push("/newlistpage");
      }
    },
    showthislist3() {
      this.count3++;
      if (this.$route.path === "/newlistpage/selectlist") {
        this.$router.push("/newlistpage");
      }
    },
    showthislist4() {
      this.count4++;
      if (this.$route.path === "/newlistpage/selectlist") {
        this.$router.push("/newlistpage");
      }
    },
    getdate() {
      if (this.setdata) {
        this.setdata = this.$route.params.title;
      } else {
        this.setdata = "默认排序";
      }
    }
  }
  //   beforeRouteUpdate(to,from,next){

  //   }
};
</script>
<style lang="scss" scoped>
.newListPage {
  height: 100%;
  background-color: white;
}
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
@font-face {
  font-family: "iconfont"; /* project id 1003828 */
  src: url("//at.alicdn.com/t/font_1003828_on15xq6njn.eot");
  src: url("//at.alicdn.com/t/font_1003828_on15xq6njn.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1003828_on15xq6njn.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1003828_on15xq6njn.woff") format("woff"),
    url("//at.alicdn.com/t/font_1003828_on15xq6njn.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1003828_on15xq6njn.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 9vw;
}
.newlist-header {
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
.listnav {
  height: 13.47vw;
  border-bottom: 0.1vw solid #dedede;
  .fournav {
    height: 100%;
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    .filter-product {
      font-family: "iconfont";
      font-size: 5.2vw;
    }
    li:nth-child(3) {
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        right: -4.4vw;
        top: -2.8vw;
        border-style: solid;
        border-width: 1.8vw 1.8vw 1.8vw 1.8vw;
        border-color: transparent transparent #999999 transparent;
        width: 0px;
        height: 0px;
      }
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        right: -4.4vw;
        top: 2vw;
        border-style: solid;
        border-width: 1.8vw 1.8vw 1.8vw 1.8vw;
        border-color: #999999 transparent transparent transparent;
        width: 0px;
        height: 0px;
      }
    }
  }
}
.selectTab {
  height: 13.47vw;
  border-bottom: 0.1vw solid #dedede;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    // padding: 2vw;
    // padding-left: 4vw;
    // padding-right: 4vw;
    width: 20vw;
    height: 7.5vw;
    background-color: #f6f6f6;
    border-radius: 0.3vw;
    position: relative;
    line-height: 7.5vw;
    text-align: center;
    overflow: hidden;
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      right: 0vw;
      top: 2.95vw;
      border-style: solid;
      border-width: 1.8vw 1.8vw 1.8vw 1.8vw;
      border-color: #d8d8d8 transparent transparent transparent;
      width: 0px;
      height: 0px;
    }
  }
}
.changecolor {
  color: red;
}
</style>

