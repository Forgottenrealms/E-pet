import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'

const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock'
})
//拦截器
ajax.interceptors.request.use(config => {
  Indicator.open('加载中...')
  return config
})

ajax.interceptors.response.use(resp => {
  Indicator.close()
  // 这种写法必须是每个接口都统一，要不然，你就得不到正确的数据，那你就老实的返回resp
  if (resp.data.res_code === 200) {
    return resp.data.res_body.data;
  } else {
    Toast({
      message: '网络出错了', // 实际上这里应该是后端返回的一个错误信息或者根据后端返回的错误码生成一个错误信息
      duration: 2000
    })
  }
})

// 分类列表菜单
export const getCateNav = () => {
  return ajax.get('/123613/api/productlist/a')
}
// export const getListData = (cateID) => {
//   return ajax.get(`/123613/api/productlist/b/${cateID}`)
// }
export const getListData = () => {
  return ajax.get(`/123613/api/productlist/b/`)
}

// 轮播图接口
export const getSwiper = () => {
  return ajax.get('/123501/api/home/swiper')
}

// 首页导航接口
export const getNavList = () => {
  return ajax.get('/123501/api/home/navList')
}

// 首页导航接口
export const getActivityImg = () => {
  return ajax.get('/123501/api/home/activity')
}
