<<<<<<< 48a0f26c8a5127015311fc04a5043b83a0698f74
// import Home from '@/pages/Home'
// import Category from '@/pages/Category'
// import League from '@/pages/League'
// import Cart from '@/pages/Cart'
// import Mine from '@/pages/Mine'
import Products from '@/components/categoryChildren/productType' 
import Logo from '@/components/categoryChildren/logo'
import ProductList from '@/components/categoryChildren/product'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
=======

import Products from '@/components/categoryChildren/productType' 
import Logo from '@/components/categoryChildren/logo'
import ProductList from '@/components/categoryChildren/product'
import newListPage from '@/components/categoryChildren/newListPage'
import selectList from '@/components/categoryChildren/newListPageChildren/selectList'
>>>>>>> path:完成sessionStorage和一些列表的页面和样式

const Home = () => import('@/pages/Home')
const Category = () => import('@/pages/Category')
const League = () => import('@/pages/League')
const Cart = () => import('@/pages/Cart')
const Mine = () => import('@/pages/Mine')

import Tabbar from '@/components/Tabbar'
import Search from '@/components/search'

<<<<<<< 48a0f26c8a5127015311fc04a5043b83a0698f74
import HomeIndex from '@/components/home/HomeIndex'
import Bag from '@/components/home/Bag'
import Kennel from '@/components/home/Kennel'
import Food from '@/components/home/Food'
import Hear from '@/components/home/Hear'
import Cloths from '@/components/home/Cloths'
import Toy from '@/components/home/Toy'
import Sick from '@/components/home/Sick'
import Worm from '@/components/home/Worm'
import Technology from '@/components/home/Technology'
=======
const Home = () => import('@/pages/Home')
const Category = () => import('@/pages/Category')
const Cart = () => import('@/pages/Cart')
const Mine = () => import('@/pages/Mine')
const League  = () => import('@/pages/League')
>>>>>>> path:完成sessionStorage和一些列表的页面和样式

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
  },
  children: [{
      path: 'index',
      name: 'HomeIndex',
      components: {
        default: HomeIndex
      }
    },{
      path: 'bag',
      name: 'Bag',
      components: {
        default: Bag
      }
    },{
      path: 'kennel',
      name: 'Kennel',
      components: {
        default: Kennel
      }
    },{
      path: 'food',
      name: 'Food',
      components: {
        default: Food
      }
    },{
      path: 'hear',
      name: 'Hear',
      components: {
        default: Hear
      }
    },{
      path: 'cloths',
      name: 'Cloths',
      components: {
        default: Cloths
      }
    },{
      path: 'toy',
      name: 'Toy',
      components: {
        default: Toy
      }
    },{
      path: 'sick',
      name: 'Sick',
      components: {
        default: Sick
      }
    },{
      path: 'worm',
      name: 'Worm',
      components: {
        default: Worm
      }
    },{
      path: 'technology',
      name: 'Technology',
      components: {
        default: Technology
      }
    }]
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
  },
},
{
  path: '/search',
  name: 'search',
  meta: {
    isNav: false,
  },
  components: {
    default: Search,
    tabbar: Tabbar,
  }
<<<<<<< 48a0f26c8a5127015311fc04a5043b83a0698f74
},{
  path: '/login',
  name: 'login',
  meta:{
    isNav:false,
  },
  components: {
    default: Login,
  }
},{
  path: '/register',
  name: 'register',
  meta:{
    isNav:false,
  },
  components: {
    default: Register,
  }
=======
},
{
  path:'/newlistpage',
  name:'newlistpage',
  meta:{
    isNav:false,
  },
  components:{
    default:newListPage,
    // tabbar: Tabbar,
  },
  children:[{
    path:'selectlist',
    name:'selectlist',
    meta:{
      title:['默认排序','按人气','最新上架','按评论']
    },
    components:{
      default:selectList
    }
  }]
>>>>>>> path:完成sessionStorage和一些列表的页面和样式
}
];

export default routes;