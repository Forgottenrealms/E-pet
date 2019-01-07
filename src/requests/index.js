import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'

const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/123501'
})

// 拦截器
ajax.interceptors.request.use(config => {
  Indicator.open('加载中...')
  return config
})

ajax.interceptors.response.use(res => {
  Indicator.close()
  if (res.data.res_code === 200) {
    return res.data.res_body.data
  } else {
    Toast({
      message: '网络出错了', 
      duration: 2000
    })
  }
})

// 轮播图接口
export const getSwiper = () => {
  return ajax.get('/api/home/swiper')
}
