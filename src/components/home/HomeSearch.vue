<template>
    <div class="epet-home-search">
        <input type="text" id="search" name="search" placeholder="请输入搜索内容">
        <span class="icon">&#xe666;</span>
        <span class="message">&#xe601;</span>
    </div>
</template>

<script>
export default {
    name: 'HomeSearch',
    data() {
    return {
      
    };
  }
}
</script>

<style scoped>
/* icon图标 */
@font-face {
  font-family: 'iconfont';  /* project id 1004392 */
  src: url('//at.alicdn.com/t/font_1004392_xtscev5os6o.eot');
  src: url('//at.alicdn.com/t/font_1004392_xtscev5os6o.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1004392_xtscev5os6o.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1004392_xtscev5os6o.woff') format('woff'),
  url('//at.alicdn.com/t/font_1004392_xtscev5os6o.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1004392_xtscev5os6o.svg#iconfont') format('svg');
}
</style>

<style lang="scss">
.epet-home-search {
    position: fixed;
    width: 100%;
    height: 7.41vw;
    z-index: 1;
    top: 0;
    left: 0;

    #search {
        border: 0;
        margin-left: 2.78vw;
        width: 85.19vw;
        height: 100%;
        outline: none;
        border-radius: 5vw;
        padding-left: 11.11vw;
        box-sizing: border-box;
        color: #717171;
        font-size: 2.96vw;
        position: relative;
    }
    .icon {
        font-family: 'iconfont';
        position: absolute;
        font-size: 5vw;
        color: #bcbcbc;
        left: 6vw;
        top: 1.5vw;
    }
    .message {
        font-family: 'iconfont';
        font-size: 6vw;
        color: #fff;
        position: relative;
        top: 1vw;
        left: 2vw;
    }
}
</style>
