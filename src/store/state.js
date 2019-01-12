export default {
    isScrollTop: false,      //判断页面是否滑动到某一位置
    isLogin: Boolean(window.localStorage.getItem('epet-token'))  // 判断是否登录
}