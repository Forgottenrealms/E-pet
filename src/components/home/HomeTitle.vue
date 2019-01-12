<template>
    <div class="epet-home-title">
      <h1><slot></slot></h1>
      <a href="javascript:void(0);" class="title-link">
        进入
        <span class="rightArrow">></span>
      </a>
    </div>
</template>

<script>
export default {
    name: 'HomeTitle'
}
</script>

<style lang="scss">
.epet-home-title {
      width: 94.72vw;
      height: 16.39vw;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 4.63vw;
      align-items: center;
      color: #545454;

      h1 {
        font-size: 5.74vw;
        font-weight: bold;
      }
      a {
        text-decoration: none;
        color: #545454;
      }
    }
</style>
