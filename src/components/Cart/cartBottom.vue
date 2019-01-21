<template>
<div class="cart-bottom" :class="{changeBgColor:isCheckStatus}">
<input
 id="color-input-red" 
 class="chat-button-location-radio-input" 
 type="checkbox" 
 name="color-input-red" 
 :checked="isCheckStatus"
 @change="isAllcheckStatus" />
<label  for="color-input-red"></label >
 <span class="totalMoney">合计:<b>￥{{totalPrice |tofix}}</b></span>
 <span class="payMoney">去结算<b>({{totalCount}})</b></span>
</div>
</template>

<script>
import { mapGetters,mapMutations } from "vuex";
export default {
  name: "cartBottom",
  data(){
      return {
          isshow:false,
          count:0,
      }
  },
  computed: {
    ...mapGetters(["totalCount", "totalPrice","isCheckStatus"])
  },
  methods:{
      ...mapMutations(['isAllcheckStatus']),
  }
};
</script>

<style lang="scss" scoped>
.cart-bottom {
  position: absolute;
  bottom: 0vw;
  width: 100%;
  height: 10vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top:2px solid #f0f0f0;
  background-color:white;   
#color-input-red +label{
	display: block;
    width: 5vw;
    height: 5vw;
    cursor: pointer;
    background: #dedede;
    border-radius: 1vw;
    margin-left:3vw;
}
#color-input-red:checked +label::before{
    display: block;
    content: "\2714";
    text-align: center;
    font-size: 5vw;
    color: white;
}
input[type=checkbox]{
	display: none;
} 
  .totalMoney {
    margin-left: 4vw;
    font-size:4.5vw;
    color:#333333;
    b{
        padding-left:1vw;
    }
  }
  .payMoney{
      margin-left:24vw;
      display: inline-block;
      background-color:#f0f0f0;
      height:8vw;
      line-height: 8vw;
      margin-top:1vw;
      padding:0 3vw;
      border-radius: 2vw;
      font-size:4vw;
      b{
          font-size:3vw;
          padding-left:1vw;
      }
  }
}
.changeBgColor{
 #color-input-red:checked +label::before{
     background-color:red;
 }  
 .payMoney{
     background-color:#f92828;
     color:white;
 }
}
</style>
