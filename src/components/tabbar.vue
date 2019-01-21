<template>
  <ul class="epet-tabbar">
    <li 
        v-for="nav in navs" 
        @click="switchTab(nav.path)" 
        :class="{
            // 动态绑定一个class
            currentNav: $route.fullPath.includes(nav.path)
        }" 
        :key="nav.name"
    >
      <span v-if="nav.path==='/cart' && totalCount>0" class="totalcount">{{totalCount | formattotalCount}}</span>
      <span class="icon" v-html="nav.meta.icon"></span>
      <span class="text">{{nav.meta.title}}</span>
    </li>
  </ul>
</template>

<script>
import routes from "@/router/routes";
import {mapGetters} from 'vuex';
export default {
  name: "Tabbar",
  data() {
    return {
      navs: routes.filter(route => route.meta.isNav === true)
    };
  },
  methods: {
    switchTab(path) {
      // 如果是在当前页就不跳转
      if (this.$route.fullPath.includes(path)) {
        return;
      } else {
        this.$router.push(path);
      }
    }
  },
  computed:{
      ...mapGetters(['totalCount'])
  },
  filters:{
      formattotalCount(item){
          return item>99? '99+':item
      }
  }
};
</script>

<style lang="scss">
/* tabbar icon图标 */
@font-face {
  font-family: "iconfont"; /* project id 1001667 */
  src: url("//at.alicdn.com/t/font_1001667_32ssgh8ps2o.eot");
  src: url("//at.alicdn.com/t/font_1001667_32ssgh8ps2o.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1001667_32ssgh8ps2o.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1001667_32ssgh8ps2o.woff") format("woff"),
    url("//at.alicdn.com/t/font_1001667_32ssgh8ps2o.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1001667_32ssgh8ps2o.svg#iconfont") format("svg");
}

.epet-tabbar {
  width: 100%;
  height: 13.89vw;
  background: #fff;
  display: flex;
  text-align: center;

  li {
    flex: 1;
    position: relative;
    .totalcount {
        position: absolute;
        min-width:5vw;
        height:5vw;
        top:0;
        left:65%;
        background-color:red;
        color: white;
        border-radius: 2vw;
    }
    span {
      display: flex;
      flex-direction: column;
      &.icon {
        height: 9.26vw;
        line-height: 9.26vw;
        font-family: "iconfont";
        color: #9b9b9b;
        font-size: 26px;
      }
      &.text {
        height: 4.63vw;
        font-size: 12px;
        color: #b0b0b0;
      }
    }
    &.currentNav span.icon {
      color: #f64033;
    }
    &.currentNav span.text {
      color: #f64033;
    }
  }
}
</style>
