import Home from '@/pages/Home'
import Category from '@/pages/Category'
import League from '@/pages/League'
import Cart from '@/pages/Cart'
import Mine from '@/pages/Mine'
import Products from '@/components/categoryChildren/productType' 
import Logo from '@/components/categoryChildren/logo'
import ProductList from '@/components/categoryChildren/product'


import Tabbar from '@/components/Tabbar'
import Search from '@/components/search'

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
    title: '首页',
    icon: '&#xe60f;'
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
    title: '分类',
    icon: '&#xe60c;'
  },
  components: {
    default: Category,
    tabbar: Tabbar
  },
  children:[{
    path:'productType',
    name:'productType',
    meta:{
      title:'分类',
    },
    components:{
      default:Products
    },
    children:[{
      path:':cateID',
      name:'productList',
      components:{
        default:ProductList
      }
    }]
  },{
    path:'logo',
    name:'logo',
    meta:{
      title:'品牌',
    },
    components:{
      default:Logo
    }
  }
],
redirect: '/category/productType'
},
{
  path: '/league',
  name: 'league',
  meta: {
    isNav: true,
    title: '萌爪联盟',
    icon: '&#xe611;'
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
    title: '购物车',
    icon: '&#xe614;'
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
    title: '我的E宠',
    icon: '&#xe60d;'
  },
  components: {
    default: Mine,
    tabbar: Tabbar
  }
},
{
  path: '/search',
  name: '/search',
  meta: {
    isNav: false,
  },
  components: {
    default: Search,
    tabbar: Tabbar,
  }
}
];

export default routes;