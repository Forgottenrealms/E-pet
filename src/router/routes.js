
import Products from '@/components/categoryChildren/productType' 
import Logo from '@/components/categoryChildren/logo'
import ProductList from '@/components/categoryChildren/product'
import newListPage from '@/components/categoryChildren/newListPage'
import selectList from '@/components/categoryChildren/newListPageChildren/selectList'


import Tabbar from '@/components/Tabbar'
import Search from '@/components/search'

const Home = () => import('@/pages/Home')
const Category = () => import('@/pages/Category')
const Cart = () => import('@/pages/Cart')
const Mine = () => import('@/pages/Mine')
const League  = () => import('@/pages/League')

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
  name: 'search',
  meta: {
    isNav: false,
  },
  components: {
    default: Search,
    tabbar: Tabbar,
  }
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
}
];

export default routes;