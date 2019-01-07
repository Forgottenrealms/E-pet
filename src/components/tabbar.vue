<template>
  <ul class="epet-tabbar">
    <router-link v-for="nav in navs" :to="nav.path" :key="nav.name" tag="li">
      <span class="icon" v-html="nav.meta.icon"></span>
      <span class="text">{{nav.meta.title}}</span>
    </router-link>
  </ul>
</template>

<script>
import routes from "@/router/routes";
export default {
  name: "Tabbar",
  data() {
    return {
      navs: routes.filter(route => route.meta.isNav === true)
    };
  }
};
</script>

<style lang="scss">
/* tabbar icon图标 */
@font-face {
  font-family: "iconfont"; /* project id 1001667 */
  src: url("//at.alicdn.com/t/font_1001667_fg9ntnvmqw.eot");
  src: url("//at.alicdn.com/t/font_1001667_fg9ntnvmqw.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1001667_fg9ntnvmqw.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1001667_fg9ntnvmqw.woff") format("woff"),
    url("//at.alicdn.com/t/font_1001667_fg9ntnvmqw.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1001667_fg9ntnvmqw.svg#iconfont") format("svg");
}

.epet-tabbar {
    width: 100%;
    height: 13.89vw;
    background: #fff;
    display: flex;  
    text-align: center;

    li {
        flex: 1;

        span {
            display: flex;
            flex-direction: column;

            &.icon {
                height: 9.26vw;
                line-height: 9.26vw;
                font-family: 'iconfont';
                color: #9b9b9b;
                font-size: 26px;
            }
            &.text {
                height: 4.63vw;
                font-size: 12px;
                color: #b0b0b0;
            }
        }
        &.router-link-exact-active span.icon {
            color: #f64033;
        }
        &.router-link-active span.text {
            color: #f64033;
        }
    }
}
</style>
