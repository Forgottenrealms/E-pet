<template>
  <div id="app" class="app">
    <div class="epet-main" ref="Main">
      <router-view name="homeNav"></router-view>
      <router-view></router-view>
    </div>
    <!-- <div class="epet-tabbar"> -->
      <router-view name="tabbar"></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  name: 'App',
  mounted() {
    this.main = this.$refs.Main;
    this.main.addEventListener("scroll", () => {
      // console.log(this.main.scrollTop.toString())
      // if (this.main.scrollTop.toString() >= 120 ) {
      //   this.$store.state.isScrollTop = true;
      // } else {
      //   this.$store.state.isScrollTop = false;
      // }
      this.handleScroll(this.main.scrollTop.toString())
    })
  },
  methods: {
    ...mapMutations(['handleScroll'])
  }
};
</script>

<style lang="scss">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
	display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html,
body {
    height: 100%;
}

.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;

  .epet {
    &-main {
      flex: 1;
      overflow-x: hidden;
    }
  }
}
</style>
