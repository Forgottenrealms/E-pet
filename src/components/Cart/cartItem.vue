<template>
<div class="cartItem">
     <div class="product-item">
         <div class="product-item-status">
        <label>
        <input 
        class ="color-input-purple" 
        type="checkbox"
        value="#c37ad3"
        :checked="ischecked"
        @change="changeCheckStatus(id)"/>  
        <i>✓</i>
        </label>
         </div>
         <div class="product-item-img">
             <!-- 注意这里的src不需要差值运算符 -->
             <img :src="img">
         </div>
         <div class="img-wrap">      
         <div class="product-item-title">
            {{title}}
         </div> 
        <div class="title-price">
        <div class="product-item-price">
                {{price}}
         </div>
        <div class="product-item-actions">
            <span @click="reduceCount(id)">-</span>
            <span class="count">{{count}}</span>
            <span @click="addCount(id)">+</span>
        </div>                    
        </div>
     </div>
    
</div>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "CartItem",
  props:{
      id:{
          type:Number,
          required:true
      },
      img:String,
      title:String,
      price:Number,
      count:Number,
      ischecked:false

  },
  methods:{
    ...mapMutations(['addCount','reduceCount','changeCheckStatus'])
  }
};
</script>

<style lang="scss" scoped>
.product-item {
  height: 20vw;
  display: flex;
  justify-content: flex-start;
  background-color: white;
  margin-top: 2vw;
  padding-bottom:2vw;
  border-bottom:1px solid #dedede;
  &-img {
    width: 20vw;
    height:100%;
    padding-left:5vw;
    img{
    width: 20vw;
    height:100%;
    }
  }
  .img-wrap {
    flex:1;
    width:100%;
    padding-left:2vw;
    font-size:3.5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .product-item-title{
        line-height:5vw;
    }
    .title-price {
      display: flex;  
      justify-content: space-between;
      padding:2vw;
      .product-item-actions{
          border:1px solid #dedede;
          width:18vw;
          height:4vw;
          display: flex;
          justify-content: flex-start;
          border-radius: 1vw;
          span{
             display: inline-block;
             width:6vw;
             border:0;
             text-align: center;
            &.count{
                border:1px solid #dedede;
                border-width: 0 1px;
            }
          }
      }
    }
  }
.product-item-status{
    position: relative;
           label {
                font-size: 4vw;
                cursor: pointer;
                position:absolute;
                top:50%;
            }

            label i {
                font-size: 4vw;
                font-style: normal;
                display: inline-block;
                width: 4vw;
                height: 4vw;
                text-align: center;
                line-height: 4vw;
                color: white;
                background-color:#8a8a8a;
                vertical-align: middle;
                margin: -2px 2px 1px 0px;
            }

            input[type="checkbox"],
            input[type="radio"] {
                display: none;
            }

            input[type="radio"]+i {
                border-radius: 7px;
            }

            input[type="checkbox"]:checked+i,
            input[type="radio"]:checked+i {
                background: #f92828;
            }
}
}
</style>
