// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import App from './App';
import router from './router';
import * as $http from './requests';

Vue.use(MintUI)

Vue.config.productionTip = false;
Vue.prototype.$http = $http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});