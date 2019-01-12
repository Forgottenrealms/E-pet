<template>
    <div class="details">       
       <div class="details-header">
           <span>商品介绍</span>
       </div>
       <div class="jianju">

       </div>
       <div class="details-number">
           <span>商品编号</span>
           <span>232323411</span>
       </div>
       <div class="Images">
           <img v-for="item in Img" :key="item.id" :src="item.Imgs"/>
       </div>
    </div>
</template>

<script>
export default {
name:'Details',
data(){
    return {
        Img:[],
    }
},
beforeRouteEnter(to,from,next){
next(vm=>{
    vm.getImgs();
})
},
methods:{
    getImgs(){
      this.$http.getDetails().then(resp => {
        this.Img=resp;
      });
    }
    }
}
</script>

<style lang="scss" scoped>
.details{
    background:white;
    .details-header{
        height:10vw;
        line-height:10vw;
        span{
            border-bottom:2px solid red;
            padding-bottom:2vw;
            color:red;
            font-size:3vw;
        }
    }
    .jianju{
        height:1vw;
        background:#dedede;
    }
    &-number{
      display: flex;
      justify-content: space-between;
      height:10vw; 
      line-height:10vw;
      padding:0 1vw;
      font-size:2vw; 
      span{
          border:1px solid #dedede;
          margin:1.5vw 0;
          line-height:7vw;
          &:last-child{
              flex:1;
              padding-left:2vw;
          }
          &:first-child{
              background:#dedede;
          }
      }
    }
}
</style>
