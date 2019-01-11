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
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
<<<<<<< 2d44e6200b5475c8cac66865b31ae2db25e5c778
=======
         {{getdate()}}
>>>>>>> path:完成sessionStorage和一些列表的页面和样式
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
        </div>
        <router-view></router-view>
        <div class="selectTab">
            <span>品牌</span>
            <span>年龄</span>
            <span>体型</span>
            <span>颗粒大小</span>
        </div>
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
<<<<<<< 2d44e6200b5475c8cac66865b31ae2db25e5c778
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
        <div class="product-list">
            <div 
            v-for="item in productList" 
            :key="item.id" 
            class="products"
            @touchstart="toDetail(item.id)">
                <div class="img"><img :src="item.img"/></div>
                <div class="product-right">
                    <div class="product-right-header">
                        {{item.title}}
                    </div>
                    <div class="product-right-price">
                        ￥{{item.price}}
                    </div>
                    <div class="product-right-bottom">
                        <div class="good-issues">
                            互动:({{item.issues}}%好评)
                        </div>
                        <div class="sale-amount">
                            售出:{{item.personNumber}}
                        </div>
                        <span class="shop-cart">&#xe643;</span>
                    </div>
                </div>
            </div>
        </div>
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
=======
>>>>>>> path:完成sessionStorage和一些列表的页面和样式
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
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
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
<<<<<<< 2d44e6200b5475c8cac66865b31ae2db25e5c778
      setdata: "默认排序",
      productList:[]
=======
      setdata: "默认排序"
>>>>>>> path:完成sessionStorage和一些列表的页面和样式
=======
      setdata: "默认排序",
      productList:[]
>>>>>>> feat:实现了列表页面和详情页面
=======
      setdata: "默认排序",
      productList:[]
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
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
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
<<<<<<< 2d44e6200b5475c8cac66865b31ae2db25e5c778
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
    getdata(){
        this.$http.listProduct().then(resp=>{
            this.productList=resp;
            console.log(this.productList);
        })
    },
    toDetail(id){
      //向详情页面传送数据
        const result=this.productList.filter(item=>id==item.id);
        this.$router.push({
            name:'detailproduct',
            path:'/detail/detailproduct',
            params:{
                products:result,
                id
            }
        });
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
    }
    // getdate() {
    //   if (this.setdata) {
    //     this.setdata = this.$route.params.title;
    //   } else {
    //     this.setdata = "默认排序";
    //   }
    // },
  },
  beforeRouteEnter (to, from, next) {
  // just use `this`
  next(vm=>{
      vm.getdata();
  })
}
//   beforeRouteEnter(to,from,next){
//       console.log("进入了");
//       next(vm=>{
//           vm.$http.listProduct().then(resp=>{
//               console.log(resp);
//           })
//       })
//   }
  //   beforeRouteUpdate(to,from,next){

  //   }
//   created(){
//    console.log(this.$http);
//   }
=======
    getdate() {
      if (this.setdata) {
        this.setdata = this.$route.params.title;
      } else {
        this.setdata = "默认排序";
      }
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
    }
    // getdate() {
    //   if (this.setdata) {
    //     this.setdata = this.$route.params.title;
    //   } else {
    //     this.setdata = "默认排序";
    //   }
    // },
  },
  beforeRouteEnter (to, from, next) {
  // just use `this`
  next(vm=>{
      vm.getdata();
  })
}
//   beforeRouteEnter(to,from,next){
//       console.log("进入了");
//       next(vm=>{
//           vm.$http.listProduct().then(resp=>{
//               console.log(resp);
//           })
//       })
//   }
  //   beforeRouteUpdate(to,from,next){

  //   }
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
>>>>>>> path:完成sessionStorage和一些列表的页面和样式
=======
//   created(){
//    console.log(this.$http);
//   }
>>>>>>> feat:实现了列表页面和详情页面
=======
//   created(){
//    console.log(this.$http);
//   }
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
};
</script>
<style lang="scss" scoped>
.newListPage {
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
<<<<<<< 2d44e6200b5475c8cac66865b31ae2db25e5c778
=======
  height: 100%;
>>>>>>> path:完成sessionStorage和一些列表的页面和样式
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
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
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
<<<<<<< 2d44e6200b5475c8cac66865b31ae2db25e5c778
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
@font-face {
  font-family: 'iconfont';  /* project id 1003828 */
  src: url('//at.alicdn.com/t/font_1003828_d9kgu7vmhrm.eot');
  src: url('//at.alicdn.com/t/font_1003828_d9kgu7vmhrm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1003828_d9kgu7vmhrm.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1003828_d9kgu7vmhrm.woff') format('woff'),
  url('//at.alicdn.com/t/font_1003828_d9kgu7vmhrm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1003828_d9kgu7vmhrm.svg#iconfont') format('svg');
}
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
=======
>>>>>>> path:完成sessionStorage和一些列表的页面和样式
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
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
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
<<<<<<< 2d44e6200b5475c8cac66865b31ae2db25e5c778
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
.products{
    display: flex;
    justify-content: flex-start;
    padding:2vw;
    border-bottom:.1vw solid #dedede;
    .img{
    //   width:24vw;
    //   height:28vw;
      img{
          width: 24vw;
          height: 28vw;
      }
    }
    .product-right{
        color:#4f4f4f;
        font-size: 3.2vw;
        padding-left:2vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &-price{
            color:red;
        }
        &-bottom{
            display: flex;
            height:4vw;
            font-size: 2vw;
            color:#999999;
            position: relative;
            .good-issues{
                padding-right:2vw;
            }
            .shop-cart{
                font-family:'iconfont';
                position:absolute;
                top:0vw;
                right:0vw;
                font-size:4vw;
                display: inline-block;
                color:#f24848;
                line-height: 4.5vw;
                width: 4.5vw;
                height:4.5vw;
                border:.1vw solid #ea4040;
            }
        }
    }

}
<<<<<<< HEAD
<<<<<<< 6967a3cc909a087915cfafe7218d27ca913ca978
=======
>>>>>>> path:完成sessionStorage和一些列表的页面和样式
=======
>>>>>>> feat:实现了列表页面和详情页面
=======
>>>>>>> 5a3ea1ad74b96c321783df2a4fea50d1964c0581
</style>

