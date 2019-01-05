import Home from '@/pages/Home'
import Category from '@/pages/Category'
import League from '@/pages/League'
import Cart from '@/pages/Cart'
import Mine from '@/pages/Mine'

import Tabbar from '@/components/Tabbar'

const routes = [{
    path: '/',
    meta: {
      isNav: false
    },
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      isNav: true,
      title: '首页'
    },
    components: {
      default: Home,
      tabbar: Tabbar
    }
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      isNav: true,
      title: '分类'
    },
    components: {
      default: Category,
      tabbar: Tabbar
    }
  },
  {
    path: '/league',
    name: 'league',
    meta: {
      isNav: true,
      title: '萌爪联盟'
    },
    components: {
      default: League,
      tabbar: Tabbar
    }
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      isNav: true,
      title: '购物车'
    },
    components: {
      default: Cart,
      tabbar: Tabbar
    }
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      isNav: true,
      title: '我的E宠'
    },
    components: {
      default: Mine,
      tabbar: Tabbar
    }
  }];

  export default routes;