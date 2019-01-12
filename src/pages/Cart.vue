<template>
    <div class="cart">
        <!-- 当购物车为空的时候 -->
        <div class="empty">
            <div class="empty-header">
                <p>购物车</p>
            </div>
            <div class="picture"></div>
            <h3>你的购物车空空如也</h3>
            <div class="go-to-buy" @click="backHome">随便逛逛</div>
        </div>
    <!-- 当购物车不为空的时候 -->
        <div class="content">
            <div class="content-header">
                <span class="go-back">&lt;</span>
                <div>购物车</div>
                <span class="edit">编辑</span>
            </div>
            <div class="wrap">
                <input type="checkbox" class="input1">
                <span>E宠西部中央仓</span>
            </div>
            <div class="cartItem">
                <input type="checkbox" class="input2">
                <div class="itemImg">
                    <div class="tip">还剩<span>3</span>个</div>
                </div>
                <div class="right">
                    <p>我不知道取个什么标题我不知道取个什么标题</p>   
                    <span class="price">￥666.66</span>               
                    <div class="wrap-botton">
                            <input type="button" value="-">
                            <input type="text" value="1">
                            <input type="button" value="+">
                    </div>
                </div>
            </div>
            <div class="cartItem">
                <input type="checkbox">
                <div class="itemImg">
                    <div class="tip">还剩<span>3</span>个</div>
                </div>
                <div class="right">
                    <p>我不知道取个什么标题我不知道取个什么标题</p>
                    <span class="price">￥666.66</span>
                    <div class="wrap-botton">
                        <input type="text" value="-">
                        <input type="text" value="1">
                        <input type="text" value="+">
                    </div>
                </div>
            </div>
        </div>
  
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "cart",
  methods: {
    backHome() {
      this.$router.push("/home");
    }
  },
  computed:{
      ...mapState(['cart'])
  }
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  .empty {
    display: none;
    .empty-header {
      width: 94.81vw;
      height: 13.7vw;
      margin: 0 auto;
      border-bottom: 1px solid #e5e5e5;
      p {
        text-align: center;
        line-height: 13.7vw;
        font-size: 3.88vw;
      }
    }
    .picture {
      width: 48.57vw;
      height: 35.18vw;
      background: url("../assets/empty.jpg") no-repeat;
      background-size: cover;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    h3 {
      color: #666666;
      font-size: 3.7vw;
      text-align: center;
      margin-top: 90.88vw;
    }
    .go-to-buy {
      width: 30.92vw;
      height: 10vw;
      line-height: 10vw;
      text-align: center;
      font-size: 2.96vw;
      color: red;
      border: 1px solid red;
      border-radius: 10vw;
      margin: 6vw auto;
    }
  }
  // 当购物车不为空的时候
  .content {
    // display: none;
    .content-header {
      width: 94.81vw;
      height: 13.7vw;
      margin: 0 auto;
      position: relative;
      .go-back {
        float: left;
        line-height: 13.7vw;
      }
      div {
        display: inline-block;
        margin-left: 40%;
        line-height: 13.7vw;
        font-size: 3.88vw;
      }
      .edit {
        float: right;
        line-height: 13.7vw;
      }
    }
    .wrap {
      width: 94.81vw;
      height: 9.25vw;
      line-height: 9.25vw;
      font-size: 3.51vw;
      border-top: 1px solid #e5e5e5;
      margin: 0 auto;
      position: relative;
      .input1 {
        width: 5vw;
        height: 5vw;   
        position:absolute;
        top:1vw;    
      }
      span{
          padding-left:6vw;
      }
    }
    .cartItem {
      width: 94.81vw;
      height: 34.62vw;
      border-top: 1px solid;
      margin: 0 auto;
      position: relative;
      .input2 {
        width: 5vw;
        height: 5vw;
        position: absolute;
        top: 40%;
        left: 0;
      }
      .itemImg {
        width: 23.15vw;
        height: 23.15vw;
        background: #cccccc;
        position: absolute;
        top: 5.9vw;
        left: 8.7vw;
        .tip {
          width: 23.15vw;
          height: 5.55vw;
          z-index: 3;
          background: rgba($color: #000000, $alpha: 0.4);
          position: absolute;
          bottom: 0;
          left: 0;
          text-align: center;
          line-height: 5.55vw;
          border-radius: 0% 20% 20% 0;
        }
      }
      .right {
        width: 59.72vw;
        height: 23.15vw;
        position: absolute;
        top: 5.9vw;
        right: 0;
      }
      .price {
        color: red;
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .wrap-botton {
        width: 30.44vw;
        height: 5.7vw;
        position: absolute;
        right: 0;
        bottom: 0;
        border:1px solid #dedede;
        input {
          text-align: center;
          width:33%;
          height:5.5vw;
          float: left;
          border:0;
          font-size:1.4vw;
          outline: none;
          background-color:white;
          &:nth-child(2){
              border:.1vw solid #dedede;
              border-top:none;
          }
        }
      }
    }
  }
}
</style>

