<template>
  <div class="login">
    <router-link class="btn-close" to="/mine" tag="p">X</router-link>
    <p class="login-title">用户登录</p>
    <form class="form-login">
      <input type="text" name="telephine" placeholder="请输入手机号" id="phone">
      <br>
      <input type="text" name="telephine" placeholder="请输入密码" id="pwd">
      <br>
      <input type="button" class="btn-login" value="登录" @click="loginHandle">
      <!-- <a href>获取验证码</a> -->
    </form>
    <div class="login-type">
      <a>短信验证码登录</a>
      <router-link to="/register" tag="a">新用户注册</router-link>
    </div>
    <!-- 其他方式登录 -->
    <div class="bottom">
      <p>---------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他方式登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--------------</p>
      <ul>
        <li v-html="icon.weixin"></li>
        <li v-html="icon.qq"></li>
        <li v-html="icon.zhifubao"></li>
        <li v-html="icon.weibo"></li>
      </ul>
      <div class="prompt">
        登录代表您阅读并同意
        <a href>《E宠商城用户协议》</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      icon: {
        weixin: "&#xe621;",
        qq: "&#xe61f;",
        zhifubao: "&#xe600;",
        weibo: "&#xe674;",
      },
      userLogin: {}
    };
  },
  computed: {
    ...mapState(["isLogin"])
  },
  watch: {
    isLogin() {
      // 当isLogin为true的时候，执行跳转
      if (this.$route.params.from = "/register") {
        this.$router.push("/home");
      } else {
        const { from = "/home" } = this.$route.params;
        this.$router.push(from);
      }
    }
  },
  methods: {
    ...mapMutations(["changeLoginStatus"]),
    loginHandle() {
      this.$http.postLogin()
            .then(res => {
              if(res[0].status == 200) {
                console.log("登陆成功")
                window.localStorage.setItem("epet-token", JSON.stringify(res[0].token));
                this.changeLoginStatus(true);
              }
            })
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* project id 1008147 */
  src: url("//at.alicdn.com/t/font_1008147_q7kcq7j19or.eot");
  src: url("//at.alicdn.com/t/font_1008147_q7kcq7j19or.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1008147_q7kcq7j19or.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1008147_q7kcq7j19or.woff") format("woff"),
    url("//at.alicdn.com/t/font_1008147_q7kcq7j19or.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1008147_q7kcq7j19or.svg#iconfont") format("svg");
}
.login {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  .btn-close {
    line-height: 16.1vw;
    font-size: 4.81vw;
    color: #9a9a9a;
    margin-left: 4.81vw;
  }
  .login-title {
    line-height: 13.7vw;
    font-size: 4.9vw;
    margin-left: 8.51vw;
  }
  .form-login {
    width: 80.92vw;
    height: 53.14vw;
    margin: 0 auto;
    position: relative;
    input {
      width: 80.92vw;
      height: 8.88vw;
      margin-top: 7.59vw;
      border-top: none;
      border-right: none;
      border-left: none;
      outline: none;
    }
    .btn-login {
      background: #ff4d19;
      border: none;
      border-radius: 8.88vw;
      color: #fff;
    }
    a {
      display: block;
      width: 19.81vw;
      height: 7.03vw;
      line-height: 7.03vw;
      text-align: center;
      border: 1px solid red;
      border-radius: 7.03vw;
      text-decoration: none;
      font-size: 2.4vw;
      color: red;
      position: absolute;
      right: 0;
      bottom: 21.4vw;
    }
  }
  .login-type {
    width: 80.92vw;
    margin: 0 auto;
    font-size: 2.4vw;
    margin-top: 2.11vw;
    :nth-child(2) {
      float: right;
      text-decoration: none;
      color: black;
    }
  }
  .bottom {
    width: 80.92vw;
    height: 33.33vw;
    position: fixed;
    bottom: 0;
    margin-left: 9.61vw;
    p {
      font-size: 2.4vw;
      color: #999999;
      text-align: center;
    }
    ul {
      width: 80.92vw;
      height: 21.18vw;
      display: flex;
      justify-content: space-around;
      li {
        line-height: 21.18vw;
        color: #999999;
        font-size: 5.92vw;
        font-family: "iconfont";
      }
    }
    .prompt {
      text-align: center;
      font-size: 2.4vw;
      color: #333333;
      a {
        text-decoration: none;
        color: red;
      }
    }
  }
}
</style>
