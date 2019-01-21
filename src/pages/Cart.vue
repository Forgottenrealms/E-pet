<template>
    <div class="cart">
      购物车
        <cart-header/>
        <div class="hiddenCart" v-if="Cart.length===0">
          <span class="iconfont">&#xe604;</span>
        您的购物车空空如也
        <router-link to="/home" tag="span" class="wherever-you-go">随便逛逛</router-link>
        </div>
        <div class="isShowCart">
        <CartItem 
         v-for="item in Cart" 
         :key="item.id" 
         :id="item.id" 
         :img="item.img" 
         :title="item.title"
         :price="item.price"
         :count="item.count"
         :ischecked="item.ischecked"
          v-if="Cart.length>0"/>
      <CartBottom v-if="Cart.length>0">
      </CartBottom>               
        </div>
       
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
import CartBottom from '@/components/Cart/cartBottom'
import CartItem from '@/components/Cart/cartItem'
import CartHeader from '@/components/Cart/cartHeader'
export default {
  name: "cart",
  components:{
    CartItem,
    CartBottom,
    CartHeader
  },
  computed:{
    ...mapState(['Cart']),
  },
};
</script>
 <style lang="scss" scoped>
 @font-face {
  font-family: 'iconfont';  /* project id 1003828 */
  src: url('//at.alicdn.com/t/font_1003828_zm50ftjxwy.eot');
  src: url('//at.alicdn.com/t/font_1003828_zm50ftjxwy.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1003828_zm50ftjxwy.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1003828_zm50ftjxwy.woff') format('woff'),
  url('//at.alicdn.com/t/font_1003828_zm50ftjxwy.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1003828_zm50ftjxwy.svg#iconfont') format('svg');
}
 .cart{
   position: relative;
   height:100%;
 }
.hiddenCart{
  color:#8a8a8a;
  position: absolute;
  top:50%;
  left:35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .wherever-you-go{
    margin-top:4vw;
    border:1px solid red;
    padding:2vw 2.4vw;
    color:red;
    border-radius: 3vw;
  }
}
.iconfont{
  font-family: 'iconfont';
  color:#8a8a8a;
  font-size:28vw;
}
</style>

