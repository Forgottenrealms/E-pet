<template>
    <div class="register">
        <router-link class="btn-back" to="/mine" tag="p">&lt;</router-link>
        <p class="fast-regster">快速注册</p>
        <form class="form-redister">
            <input type="text" name="telephine" placeholder="请输入手机号"><br/>
            <input type="text" name="telephine" placeholder="请输入验证码"><br/>
            <input type="password" name="telephine" placeholder="请输入密码"><br/>
            <input type="button" class="btn-next" value="下一步">
            <a href="">获取验证码</a>
        </form>
        <p class="prompt">点击“下一步”，即表示您阅读并同意<a>《E宠商城用户协议》</a></p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.register{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .btn-back{
        line-height: 16.1vw;
        font-size: 4.81vw;
        color: #9a9a9a;
        margin-left: 4.81vw;
    }
    .fast-regster{
        line-height: 13.7vw;
        font-size: 4.9vw;
        margin-left: 8.51vw;
    }
    .form-redister{
        width: 80.92vw;
        height: 73.14vw;
        margin: 0 auto;
        position: relative;
        input{
            width: 80.92vw;
            height: 8.88vw;
            margin-top: 7.59vw;
            border-top: none;
            border-right: none;
            border-left: none;
            outline: none;
        }
        .btn-next{
            background: #f0f0f0;
            border: none;
            border-radius: 8.88vw;
            color: #9a9a9a;
        }
        a{
            display: block;
            width: 19.81vw;
            height: 7.03vw;
            line-height: 7.03vw;
            text-align: center;
            border: 1px solid red;
            border-radius: 7.03vw;
            text-decoration: none;
            font-size: 2.40vw;
            color: red;
            position: absolute;
            right: 0;
            bottom: 42.40vw;
        }
    }
    .prompt{
            text-align: center;
            font-size: 2.4vw;
            margin-top: 2.11vw;
            a{
                color: red;
            }
        }
}
</style>
