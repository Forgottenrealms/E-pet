<template>
   <div class="productType">
        <div class="cate-list">
       <router-link
        v-for="list in productlist" 
        :key="list.id" 
         class="cate-list-item"
        tag="div" 
        :to="`/category/productType/${list.id}`">{{list.title}}
       </router-link>
           </div>
       <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: "ProductType",
  data() {
    return {
      productlist: []
    };
  },
  created() {
    this.$http.getCateNav().then(resp => {
      this.productlist = resp;
      //$route.params是当前路由路径存放的位置
      //nextTick等导航渲染完成之后，再跳转到第一个
      //实现刷新页面之后也能使得商品列表显示第一个的数据
      // console.log(resp[0].id);
      this.$nextTick(() => {
        const {
          cateid = resp[0].id // 默认值
        } = this.$route.params;
        console.log(this.$router);
        this.$router.push(`/category/productType/${cateid}`);
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.productType {
  width: 100%;
  // overflow: hidden;
  display: flex;
  background-color: #f3f4f5;
  padding-top: 4vw;
  justify-content: flex-start;
  .cate-list {
    width: 28vw;
    height: 100%;
    background-color: white;
    &-item {
      height: 8vw;
      line-height: 8vw;
      border-bottom: 1px solid #e5e5e5;
      text-align: center;
      padding: 2vw;
      color: #666;

      &.router-link-exact-active.router-link-active {
        color: #e00;
        background-color: #f3f4f5;
      }
    }
  }
}
</style>
