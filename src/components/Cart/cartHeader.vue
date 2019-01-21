<template>
    <div class="cart-header">
    <mt-header fixed title="购物车"></mt-header>
    <div class="page-header-main">
      <div class="page-title">Header</div>
      <mt-header title="这是您选中的商品哦">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      </div>
    </div>
</template>

<script>
export default {
name:'cartHeader'
}
</script>

<style lang="scss" scoped>
.cart-header{
    .mint-header{
      background-color: #ef3a3a;
    }
}

</style>
